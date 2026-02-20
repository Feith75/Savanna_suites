import { NextResponse } from 'next/server'
import { apiConfig } from '@/lib/api-config'
import { prisma } from '@/lib/prisma'

async function getMpesaToken() {
  const auth = Buffer.from(
    `${apiConfig.mpesa.consumerKey}:${apiConfig.mpesa.consumerSecret}`
  ).toString('base64')

  const response = await fetch(
    'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  )

  const data = await response.json()
  return data.access_token
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { bookingId, phoneNumber, amount } = body

    const token = await getMpesaToken()
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3)
    const password = Buffer.from(
      `${apiConfig.mpesa.shortcode}${apiConfig.mpesa.passkey}${timestamp}`
    ).toString('base64')

    const mpesaResponse = await fetch(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          BusinessShortCode: apiConfig.mpesa.shortcode,
          Password: password,
          Timestamp: timestamp,
          TransactionType: 'CustomerPayBillOnline',
          Amount: amount,
          PartyA: phoneNumber,
          PartyB: apiConfig.mpesa.shortcode,
          PhoneNumber: phoneNumber,
          CallBackURL: apiConfig.mpesa.callbackUrl,
          AccountReference: bookingId,
          TransactionDesc: 'Luxury BnB Booking Payment',
        }),
      }
    )

    const mpesaData = await mpesaResponse.json()

    await prisma.payment.create({
      data: {
        amount,
        method: 'MPESA',
        transactionId: mpesaData.CheckoutRequestID,
        bookingId,
      },
    })

    return NextResponse.json(mpesaData)
  } catch (error) {
    return NextResponse.json({ error: 'M-Pesa payment failed' }, { status: 500 })
  }
}
