import { apiConfig } from './api-config'

export async function sendBookingConfirmation(to: string, bookingDetails: any) {
  try {
    const nodemailer = require('nodemailer')
    
    const transporter = nodemailer.createTransport({
      host: apiConfig.email.host,
      port: apiConfig.email.port,
      secure: false,
      auth: {
        user: apiConfig.email.user,
        pass: apiConfig.email.password,
      },
    })

    await transporter.sendMail({
      from: apiConfig.email.user,
      to,
      subject: 'Booking Confirmation - LuxuryStay',
      html: `
        <h1>Booking Confirmed!</h1>
        <p>Your booking has been confirmed.</p>
        <p><strong>Booking ID:</strong> ${bookingDetails.id}</p>
        <p><strong>Property:</strong> ${bookingDetails.property}</p>
        <p><strong>Check-in:</strong> ${bookingDetails.checkIn}</p>
        <p><strong>Check-out:</strong> ${bookingDetails.checkOut}</p>
        <p><strong>Total Amount:</strong> KES ${bookingDetails.totalAmount}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error }
  }
}
