const express = require('express')
const router = express.Router()
const paymentController = require('../controllers/paymentController')

router.post('/mpesa', paymentController.initiateMpesaPayment)
router.post('/mpesa/callback', paymentController.mpesaCallback)
router.post('/card', paymentController.processCardPayment)

module.exports = router
