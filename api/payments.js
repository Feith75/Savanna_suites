const axios = require('axios')
const { PrismaClient } = require('@prisma/client')

let prisma
function getPrisma() {
  if (!prisma) prisma = new PrismaClient()
  return prisma
}

async function getMpesaToken() {
  const auth = Buffer.from(
    `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
  ).toString('base64')
  const response = await axios.get(
    'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
    { headers: { Authorization: `Basic ${auth}` } }
  )
  return response.data.access_token
}

module.exports = async (req, res) => {
  const db = getPrisma()
  const type = req.query.type // 'mpesa', 'mpesa-callback', 'card'

  try {
    // POST /api/payments?type=mpesa
    if (req.method === 'POST' && type === 'mpesa') {
      const { bookingId, phoneNumber, amount } = req.body
      const token = await getMpesaToken()
      const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3)
      const password = Buffer.from(
        `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`
      ).toString('base64')

      const response = await axios.post(
        'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
        {
          BusinessShortCode: process.env.MPESA_SHORTCODE,
          Password: password,
          Timestamp: timestamp,
          TransactionType: 'CustomerPayBillOnline',
          Amount: amount,
          PartyA: phoneNumber,
          PartyB: process.env.MPESA_SHORTCODE,
          PhoneNumber: phoneNumber,
          CallBackURL: process.env.MPESA_CALLBACK_URL,
          AccountReference: bookingId,
          TransactionDesc: 'Luxury BnB Booking Payment'
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      await db.payment.create({
        data: { amount, method: 'MPESA', transactionId: response.data.CheckoutRequestID, bookingId }
      })

      return res.json(response.data)
    }

    // POST /api/payments?type=mpesa-callback
    if (req.method === 'POST' && type === 'mpesa-callback') {
      const { Body } = req.body
      if (Body.stkCallback.ResultCode === 0) {
        const transactionId = Body.stkCallback.CheckoutRequestID
        await db.payment.updateMany({ where: { transactionId }, data: { status: 'PAID' } })
        const payment = await db.payment.findFirst({ where: { transactionId } })
        if (payment) {
          await db.booking.update({
            where: { id: payment.bookingId },
            data: { status: 'CONFIRMED', paymentStatus: 'PAID' }
          })
        }
      }
      return res.json({ message: 'Callback processed' })
    }

    // POST /api/payments?type=card
    if (req.method === 'POST' && type === 'card') {
      const { bookingId, amount, token } = req.body
      const response = await axios.post(
        'https://api.stripe.com/v1/charges',
        new URLSearchParams({
          amount: (amount * 100).toString(),
          currency: 'kes',
          source: token,
          description: `Booking ${bookingId}`
        }),
        {
          headers: {
            Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )

      if (response.data.paid) {
        await db.payment.create({
          data: { amount, method: 'CARD', transactionId: response.data.id, status: 'PAID', bookingId }
        })
        await db.booking.update({
          where: { id: bookingId },
          data: { status: 'CONFIRMED', paymentStatus: 'PAID' }
        })
        return res.json({ success: true, transactionId: response.data.id })
      }

      return res.status(400).json({ error: 'Payment failed' })
    }

    res.status(405).json({ error: 'Method not allowed' })
  } catch (error) {
    res.status(500).json({ error: 'Payment request failed', detail: error.message })
  }
}
