import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const location = searchParams.get('location')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const bedrooms = searchParams.get('bedrooms')

    const properties = await prisma.property.findMany({
      where: {
        status: 'APPROVED',
        ...(location && { location: { contains: location, mode: 'insensitive' } }),
        ...(minPrice && { pricePerNight: { gte: parseFloat(minPrice) } }),
        ...(maxPrice && { pricePerNight: { lte: parseFloat(maxPrice) } }),
        ...(bedrooms && { bedrooms: { gte: parseInt(bedrooms) } }),
      },
      include: {
        images: true,
        amenities: true,
        host: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    })

    return NextResponse.json(properties)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const property = await prisma.property.create({
      data: {
        name: body.name,
        description: body.description,
        location: body.location,
        pricePerNight: body.pricePerNight,
        bedrooms: body.bedrooms,
        bathrooms: body.bathrooms,
        guestCapacity: body.guestCapacity,
        cleaningFee: body.cleaningFee || 0,
        hostId: body.hostId,
      },
    })

    return NextResponse.json(property, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create property' }, { status: 500 })
  }
}
