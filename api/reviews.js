const { PrismaClient } = require('@prisma/client')

let prisma
function getPrisma() {
  if (!prisma) prisma = new PrismaClient()
  return prisma
}

module.exports = async (req, res) => {
  const db = getPrisma()

  try {
    if (req.method === 'POST') {
      const review = await db.review.create({ data: req.body })
      return res.status(201).json(review)
    }
    res.status(405).json({ error: 'Method not allowed' })
  } catch (error) {
    res.status(500).json({ error: 'Request failed', detail: error.message })
  }
}
