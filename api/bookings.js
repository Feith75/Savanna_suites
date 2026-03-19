const connectDB = require('../lib/db')
const Booking = require('../models/Booking')
const { PrismaClient } = require('@prisma/client')

let prisma
function getPrisma() {
  if (!prisma) prisma = new PrismaClient()
  return prisma
}

module.exports = async (req, res) => {
  await connectDB()
  const db = getPrisma()
  const id = req.query.id

  try {
    if (req.method === 'POST') {
      const { checkIn, checkOut, guests, totalAmount, guestId, propertyId, chefService, rideService, tours } = req.body

      const booking = await db.booking.create({
        data: {
          checkIn: new Date(checkIn),
          checkOut: new Date(checkOut),
          guests,
          totalAmount,
          guestId,
          propertyId
        }
      })

      if (chefService) {
        await db.chefBooking.create({
          data: { ...chefService, date: new Date(chefService.date), bookingId: booking.id }
        })
      }

      if (rideService) {
        await db.rideBooking.create({
          data: { ...rideService, date: new Date(rideService.date), bookingId: booking.id }
        })
      }

      if (tours?.length) {
        await db.tourBooking.createMany({
          data: tours.map(t => ({ ...t, date: new Date(t.date), bookingId: booking.id }))
        })
      }

      return res.status(201).json(booking)
    }

    if (req.method === 'GET') {
      if (id) {
        const booking = await db.booking.findUnique({ where: { id } })
        if (!booking) return res.status(404).json({ error: 'Booking not found' })
        return res.json(booking)
      }
      const bookings = await db.booking.findMany({ where: { guestId: req.query.userId } })
      return res.json(bookings)
    }

    res.status(405).json({ error: 'Method not allowed' })
  } catch (error) {
    res.status(500).json({ error: 'Request failed', detail: error.message })
  }
}
