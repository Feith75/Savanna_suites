const express = require('express')
const router = express.Router()
const {
  createBooking,
  getAllBookings,
  getBooking,
  updateBookingStatus,
  deleteBooking
} = require('../controllers/bookingNotificationController')

// Public route - create booking
router.post('/', createBooking)

// Admin routes
router.get('/', getAllBookings)
router.get('/:id', getBooking)
router.put('/:id/status', updateBookingStatus)
router.delete('/:id', deleteBooking)

module.exports = router
