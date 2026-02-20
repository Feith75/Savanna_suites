const Booking = require('../models/Booking')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.createBooking = async (req, res) => {
  try {
    const { checkIn, checkOut, guests, totalAmount, guestId, propertyId, chefService, rideService, tours } = req.body

    const booking = await Booking.create({
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      guests,
      totalAmount,
      guestId,
      propertyId
    })

    if (chefService) {
      await prisma.chefBooking.create({
        data: {
          serviceType: chefService.serviceType,
          date: new Date(chefService.date),
          price: chefService.price,
          bookingId: booking.id,
          chefId: chefService.chefId
        }
      })
    }

    if (rideService) {
      await prisma.rideBooking.create({
        data: {
          serviceType: rideService.serviceType,
          pickupLocation: rideService.pickupLocation,
          dropoffLocation: rideService.dropoffLocation,
          date: new Date(rideService.date),
          price: rideService.price,
          bookingId: booking.id,
          driverId: rideService.driverId
        }
      })
    }

    if (tours && tours.length > 0) {
      await prisma.tourBooking.createMany({
        data: tours.map(tour => ({
          date: new Date(tour.date),
          guests: tour.guests,
          price: tour.price,
          includesTransport: tour.includesTransport,
          bookingId: booking.id,
          attractionId: tour.attractionId
        }))
      })
    }

    res.status(201).json(booking)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create booking' })
  }
}

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.findByUserId(req.query.userId)
    res.json(bookings)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' })
  }
}

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' })
    }
    res.json(booking)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch booking' })
  }
}
