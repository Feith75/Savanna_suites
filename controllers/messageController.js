const Message = require('../models/Message')
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

// Create new message
exports.createMessage = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body

    // Save to MongoDB
    const newMessage = new Message({
      name,
      email,
      phone,
      subject,
      message
    })

    await newMessage.save()

    // Send email notification to admin
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER
    
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: adminEmail,
      subject: `New Message: ${subject}`,
      html: `
        <h2>New Message from LuxuryStay Website</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Received at: ${new Date().toLocaleString()}</small></p>
      `
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Message Received - LuxuryStay',
      html: `
        <h2>Thank you for contacting LuxuryStay</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you shortly.</p>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
        <br>
        <p>Best regards,<br>LuxuryStay Team</p>
      `
    })

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: newMessage
    })
  } catch (error) {
    console.error('Error creating message:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send message',
      error: error.message
    })
  }
}

// Get all messages (Admin only)
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 })
    
    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    })
  } catch (error) {
    console.error('Error fetching messages:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch messages',
      error: error.message
    })
  }
}

// Get single message
exports.getMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id)
    
    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      })
    }

    // Mark as read
    if (message.status === 'new') {
      message.status = 'read'
      await message.save()
    }

    res.status(200).json({
      success: true,
      data: message
    })
  } catch (error) {
    console.error('Error fetching message:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch message',
      error: error.message
    })
  }
}

// Update message status
exports.updateMessageStatus = async (req, res) => {
  try {
    const { status } = req.body
    
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )

    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      })
    }

    res.status(200).json({
      success: true,
      data: message
    })
  } catch (error) {
    console.error('Error updating message:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to update message',
      error: error.message
    })
  }
}

// Delete message
exports.deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id)

    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      })
    }

    res.status(200).json({
      success: true,
      message: 'Message deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting message:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to delete message',
      error: error.message
    })
  }
}
