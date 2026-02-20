import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const review = await prisma.review.create({
      data: {
        rating: body.rating,
        comment: body.comment,
        bookingId: body.bookingId,
        propertyId: body.propertyId,
        userId: body.userId,
      },
    })

    return NextResponse.json(review, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create review' }, { status: 500 })
  }
}
