const connectDB = require('../lib/db')
const Booking = require('../models/Booking')
const nodemailer = require('nodemailer')

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  })
}

module.exports = async (req, res) => {
  await connectDB()
  const id = req.query.id

  try {
    if (req.method === 'POST') {
      const { bookingType, itemName, customerName, customerEmail, customerPhone, price, days, checkIn, checkOut, totalAmount, paymentMethod } = req.body

      const booking = await Booking.create({
        bookingType, itemName, customerName, customerEmail, customerPhone,
        price, days, checkIn, checkOut, totalAmount, paymentMethod
      })

      const mailer = getTransporter()
      const adminEmail = process.env.ADMIN_EMAIL || 'nziokif966@gmail.com'

      await mailer.sendMail({
        from: process.env.SMTP_USER,
        to: adminEmail,
        subject: `🔔 New Booking: ${itemName}`,
        html: `
          <h2>New Booking Received</h2>
          <p><b>Type:</b> ${bookingType}</p>
          <p><b>Item:</b> ${itemName}</p>
          <p><b>Customer:</b> ${customerName} | ${customerEmail} | ${customerPhone}</p>
          <p><b>Total:</b> KES ${totalAmount?.toLocaleString()}</p>
          <p><b>Payment:</b> ${paymentMethod}</p>
          ${checkIn ? `<p><b>Check In:</b> ${new Date(checkIn).toLocaleDateString()}</p>` : ''}
          ${checkOut ? `<p><b>Check Out:</b> ${new Date(checkOut).toLocaleDateString()}</p>` : ''}
        `
      })

      await mailer.sendMail({
        from: process.env.SMTP_USER,
        to: customerEmail,
        subject: `Booking Confirmation - ${itemName}`,
        html: `<p>Dear ${customerName},</p><p>Your booking for <b>${itemName}</b> has been received. Total: KES ${totalAmount?.toLocaleString()}.</p><p>We'll contact you shortly.<br>LuxuryStay Team</p>`
      })

      return res.status(201).json({ success: true, data: booking })
    }

    if (req.method === 'GET') {
      if (id) {
        const booking = await Booking.findById(id)
        if (!booking) return res.status(404).json({ success: false, message: 'Booking not found' })
        return res.json({ success: true, data: booking })
      }
      const bookings = await Booking.find().sort({ createdAt: -1 })
      return res.json({ success: true, count: bookings.length, data: bookings })
    }

    if (req.method === 'PUT' && id) {
      const booking = await Booking.findByIdAndUpdate(id, { status: req.body.status }, { new: true })
      if (!booking) return res.status(404).json({ success: false, message: 'Booking not found' })
      return res.json({ success: true, data: booking })
    }

    if (req.method === 'DELETE' && id) {
      const booking = await Booking.findByIdAndDelete(id)
      if (!booking) return res.status(404).json({ success: false, message: 'Booking not found' })
      return res.json({ success: true, message: 'Deleted successfully' })
    }

    res.status(405).json({ error: 'Method not allowed' })
  } catch (error) {
    res.status(500).json({ error: 'Request failed', detail: error.message })
  }
}
