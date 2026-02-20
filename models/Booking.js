const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
  bookingType: {
    type: String,
    enum: ['vehicle', 'property', 'bnb', 'transport', 'chef'],
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
    required: true
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
    type: Date
  },
  checkOut: {
    type: Date
  },
  totalAmount: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    enum: ['mpesa', 'card', 'paypal', 'bank'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Booking', bookingSchema)
