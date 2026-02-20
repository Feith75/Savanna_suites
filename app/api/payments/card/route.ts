import { NextResponse } from 'next/server'
import { apiConfig } from '@/lib/api-config'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { bookingId, amount, token } = body

    const stripeResponse = await fetch('https://api.stripe.com/v1/charges', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiConfig.stripe.secretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        amount: (amount * 100).toString(),
        currency: 'kes',
        source: token,
        description: `Booking ${bookingId}`,
      }),
    })

    const stripeData = await stripeResponse.json()

    if (stripeData.paid) {
      await prisma.payment.create({
        data: {
          amount,
          method: 'CARD',
          transactionId: stripeData.id,
          status: 'PAID',
          bookingId,
        },
      })

      await prisma.booking.update({
        where: { id: bookingId },
        data: {
          status: 'CONFIRMED',
          paymentStatus: 'PAID',
        },
      })

      return NextResponse.json({ success: true, transactionId: stripeData.id })
    }

    return NextResponse.json({ error: 'Payment failed' }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: 'Card payment failed' }, { status: 500 })
  }
}
