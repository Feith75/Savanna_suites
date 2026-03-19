const connectDB = require('../lib/db')
const Message = require('../models/Message')
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
      const { name, email, phone, subject, message } = req.body
      const doc = await Message.create({ name, email, phone, subject, message })
      const mailer = getTransporter()
      const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER

      await mailer.sendMail({
        from: process.env.SMTP_USER,
        to: adminEmail,
        subject: `New Message: ${subject}`,
        html: `<h2>New Message</h2><p><b>From:</b> ${name} (${email})</p><p><b>Phone:</b> ${phone || 'N/A'}</p><p><b>Subject:</b> ${subject}</p><p>${message}</p>`
      })

      await mailer.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Message Received - LuxuryStay',
        html: `<p>Dear ${name},</p><p>We received your message and will get back to you shortly.</p><p>${message}</p><p>Best regards,<br>LuxuryStay Team</p>`
      })

      return res.status(201).json({ success: true, data: doc })
    }

    if (req.method === 'GET') {
      if (id) {
        const msg = await Message.findById(id)
        if (!msg) return res.status(404).json({ success: false, message: 'Message not found' })
        if (msg.status === 'new') { msg.status = 'read'; await msg.save() }
        return res.json({ success: true, data: msg })
      }
      const messages = await Message.find().sort({ createdAt: -1 })
      return res.json({ success: true, count: messages.length, data: messages })
    }

    if (req.method === 'PUT' && id) {
      const msg = await Message.findByIdAndUpdate(id, { status: req.body.status }, { new: true })
      if (!msg) return res.status(404).json({ success: false, message: 'Message not found' })
      return res.json({ success: true, data: msg })
    }

    if (req.method === 'DELETE' && id) {
      const msg = await Message.findByIdAndDelete(id)
      if (!msg) return res.status(404).json({ success: false, message: 'Message not found' })
      return res.json({ success: true, message: 'Deleted successfully' })
    }

    res.status(405).json({ error: 'Method not allowed' })
  } catch (error) {
    res.status(500).json({ error: 'Request failed', detail: error.message })
  }
}
