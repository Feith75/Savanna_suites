const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.post('/', async (req, res) => {
  try {
    const review = await prisma.review.create({
      data: req.body
    })
    res.status(201).json(review)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create review' })
  }
})

module.exports = router
