const Booking = require('../models/Booking')
const nodemailer = require('nodemailer')

// Email configuration from .env
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

// Create new booking
exports.createBooking = async (req, res) => {
  try {
    const {
      bookingType,
      itemName,
      customerName,
      customerEmail,
      customerPhone,
      price,
      days,
      checkIn,
      checkOut,
      totalAmount,
      paymentMethod
    } = req.body

    // Save to MongoDB
    const newBooking = new Booking({
      bookingType,
      itemName,
      customerName,
      customerEmail,
      customerPhone,
      price,
      days,
      checkIn,
      checkOut,
      totalAmount,
      paymentMethod
    })

    await newBooking.save()

    // Determine booking type label
    const typeLabels = {
      vehicle: '🚗 CAR RENTAL',
      property: '🏠 PROPERTY',
      bnb: '🏡 BNB',
      transport: '🚕 TRANSPORT',
      chef: '👨‍🍳 CHEF SERVICE'
    }

    const bookingLabel = typeLabels[bookingType] || bookingType.toUpperCase()

    // Send email notification to admin
    const adminEmail = 'nziokif966@gmail.com'
    
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: adminEmail,
      subject: `🔔 New Booking: ${bookingLabel} - ${itemName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="background: #f97316; color: white; padding: 20px; text-align: center;">
            New Booking Received!
          </h2>
          
          <div style="background: #fef3c7; padding: 15px; margin: 20px 0; border-radius: 8px;">
            <h3 style="margin: 0; color: #92400e;">Booking Type: ${bookingLabel}</h3>
          </div>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Booking Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Item:</td>
                <td style="padding: 8px 0;">${itemName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Price:</td>
                <td style="padding: 8px 0;">${price}</td>
              </tr>
              ${days > 1 ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Duration:</td>
                <td style="padding: 8px 0;">${days} day${days > 1 ? 's' : ''}</td>
              </tr>
              ` : ''}
              ${checkIn ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Check In:</td>
                <td style="padding: 8px 0;">${new Date(checkIn).toLocaleDateString()}</td>
              </tr>
              ` : ''}
              ${checkOut ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Check Out:</td>
                <td style="padding: 8px 0;">${new Date(checkOut).toLocaleDateString()}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Total Amount:</td>
                <td style="padding: 8px 0; color: #f97316; font-size: 18px; font-weight: bold;">KES ${totalAmount.toLocaleString()}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Payment Method:</td>
                <td style="padding: 8px 0;">${paymentMethod.toUpperCase()}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #333; margin-top: 0;">Customer Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Name:</td>
                <td style="padding: 8px 0;">${customerName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${customerEmail}">${customerEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:${customerPhone}">${customerPhone}</a></td>
              </tr>
            </table>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f3f4f6; border-radius: 8px;">
            <p style="margin: 0; color: #666;">Booking received at: ${new Date().toLocaleString()}</p>
            <p style="margin: 10px 0 0 0;">
              <a href="http://localhost:3000/admin-bookings.html" style="background: #f97316; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 10px;">
                View in Admin Dashboard
              </a>
            </p>
          </div>
        </div>
      `
    })

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: customerEmail,
      subject: `Booking Confirmation - ${itemName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="background: #f97316; color: white; padding: 20px; text-align: center;">
            Booking Confirmed!
          </h2>
          
          <p style="font-size: 16px; color: #333; padding: 20px;">
            Dear ${customerName},
          </p>
          
          <p style="font-size: 16px; color: #333; padding: 0 20px;">
            Thank you for your booking. We have received your request for <strong>${itemName}</strong>.
          </p>
          
          <div style="background: #f3f4f6; padding: 20px; margin: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0;">Booking Summary</h3>
            <p><strong>Item:</strong> ${itemName}</p>
            <p><strong>Total Amount:</strong> KES ${totalAmount.toLocaleString()}</p>
            <p><strong>Payment Method:</strong> ${paymentMethod.toUpperCase()}</p>
          </div>
          
          <p style="font-size: 16px; color: #333; padding: 0 20px;">
            We will contact you shortly to confirm your booking details.
          </p>
          
          <p style="font-size: 16px; color: #333; padding: 0 20px;">
            Best regards,<br>
            <strong>LuxuryStay Team</strong>
          </p>
        </div>
      `
    })

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: newBooking
    })
  } catch (error) {
    console.error('Error creating booking:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to create booking',
      error: error.message
    })
  }
}

// Get all bookings (Admin only)
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 })
    
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    })
  } catch (error) {
    console.error('Error fetching bookings:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch bookings',
      error: error.message
    })
  }
}

// Get single booking
exports.getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      })
    }

    res.status(200).json({
      success: true,
      data: booking
    })
  } catch (error) {
    console.error('Error fetching booking:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch booking',
      error: error.message
    })
  }
}

// Update booking status
exports.updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body
    
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      })
    }

    res.status(200).json({
      success: true,
      data: booking
    })
  } catch (error) {
    console.error('Error updating booking:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to update booking',
      error: error.message
    })
  }
}

// Delete booking
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id)

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      })
    }

    res.status(200).json({
      success: true,
      message: 'Booking deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting booking:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to delete booking',
      error: error.message
    })
  }
}
