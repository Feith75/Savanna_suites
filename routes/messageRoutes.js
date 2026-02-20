const express = require('express')
const router = express.Router()
const {
  createMessage,
  getAllMessages,
  getMessage,
  updateMessageStatus,
  deleteMessage
} = require('../controllers/messageController')

// Public route - anyone can send a message
router.post('/', createMessage)

// Admin routes - should be protected with authentication in production
router.get('/', getAllMessages)
router.get('/:id', getMessage)
router.put('/:id/status', updateMessageStatus)
router.delete('/:id', deleteMessage)

module.exports = router
