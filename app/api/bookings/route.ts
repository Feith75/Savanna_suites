import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const booking = await prisma.booking.create({
      data: {
        checkIn: new Date(body.checkIn),
        checkOut: new Date(body.checkOut),
        guests: body.guests,
        totalAmount: body.totalAmount,
        guestId: body.guestId,
        propertyId: body.propertyId,
      },
    })

    if (body.chefService) {
      await prisma.chefBooking.create({
        data: {
          serviceType: body.chefService.serviceType,
          date: new Date(body.chefService.date),
          price: body.chefService.price,
          bookingId: booking.id,
          chefId: body.chefService.chefId,
        },
      })
    }

    if (body.rideService) {
      await prisma.rideBooking.create({
        data: {
          serviceType: body.rideService.serviceType,
          pickupLocation: body.rideService.pickupLocation,
          dropoffLocation: body.rideService.dropoffLocation,
          date: new Date(body.rideService.date),
          price: body.rideService.price,
          bookingId: booking.id,
          driverId: body.rideService.driverId,
        },
      })
    }

    if (body.tours && body.tours.length > 0) {
      await prisma.tourBooking.createMany({
        data: body.tours.map((tour: any) => ({
          date: new Date(tour.date),
          guests: tour.guests,
          price: tour.price,
          includesTransport: tour.includesTransport,
          bookingId: booking.id,
          attractionId: tour.attractionId,
        })),
      })
    }

    return NextResponse.json(booking, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    const bookings = await prisma.booking.findMany({
      where: userId ? { guestId: userId } : {},
      include: {
        property: true,
        chefBooking: {
          include: {
            chef: {
              include: {
                user: true,
              },
            },
          },
        },
        rideBooking: {
          include: {
            driver: {
              include: {
                user: true,
              },
            },
          },
        },
        tourBookings: {
          include: {
            attraction: true,
          },
        },
      },
    })

    return NextResponse.json(bookings)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 })
  }
}
