require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000

// MongoDB connection (optional - will work without it)
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.warn('⚠️  MongoDB not connected:', err.message)
    console.log('💡 App will work without MongoDB. Messages will be stored in memory.')
  })
} else {
  console.log('💡 MongoDB URI not found. App will work without database.')
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

const propertyRoutes = require('./routes/propertyRoutes')
const bookingRoutes = require('./routes/bookingRoutes')
const chefRoutes = require('./routes/chefRoutes')
const driverRoutes = require('./routes/driverRoutes')
const attractionRoutes = require('./routes/attractionRoutes')
const paymentRoutes = require('./routes/paymentRoutes')
const authRoutes = require('./routes/authRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
const messageRoutes = require('./routes/messageRoutes')
const bookingNotificationRoutes = require('./routes/bookingNotificationRoutes')

app.use('/api/properties', propertyRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/chefs', chefRoutes)
app.use('/api/drivers', driverRoutes)
app.use('/api/attractions', attractionRoutes)
app.use('/api/payments', paymentRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/booking-notifications', bookingNotificationRoutes)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`)
  console.log(`📧 Admin Messages: http://localhost:${PORT}/admin-messages.html`)
  console.log(`📋 Admin Bookings: http://localhost:${PORT}/admin-bookings.html`)
  console.log(`📱 Contact Form: http://localhost:${PORT}/contact.html`)
})

