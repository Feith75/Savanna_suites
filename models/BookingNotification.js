const mongoose = require('mongoose')

const bookingNotificationSchema = new mongoose.Schema({
  bookingType: {
    type: String,
    enum: ['car', 'bnb', 'property', 'chef', 'transport', 'attraction'],
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  customerEmail: {
    type: String,
    required: true
  },
  customerPhone: {
    type: String,
    required: false
  },
  price: {
    type: String,
    required: true
  },
  days: {
    type: Number,
    default: 1
  },
  checkIn: {
    type: Date,
    required: false
  },
  checkOut: {
    type: Date,
    required: false
  },
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('BookingNotification', bookingNotificationSchema)
