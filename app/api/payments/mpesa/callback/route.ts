import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { Body } = body

    if (Body.stkCallback.ResultCode === 0) {
      const transactionId = Body.stkCallback.CheckoutRequestID

      await prisma.payment.updateMany({
        where: { transactionId },
        data: {
          status: 'PAID',
        },
      })

      const payment = await prisma.payment.findFirst({
        where: { transactionId },
      })

      if (payment) {
        await prisma.booking.update({
          where: { id: payment.bookingId },
          data: {
            status: 'CONFIRMED',
            paymentStatus: 'PAID',
          },
        })
      }
    } else {
      const transactionId = Body.stkCallback.CheckoutRequestID
      await prisma.payment.updateMany({
        where: { transactionId },
        data: {
          status: 'FAILED',
        },
      })
    }

    return NextResponse.json({ message: 'Callback processed' })
  } catch (error) {
    return NextResponse.json({ error: 'Callback processing failed' }, { status: 500 })
  }
}
