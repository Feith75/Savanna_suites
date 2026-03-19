const { PrismaClient } = require('@prisma/client')

let prisma
function getPrisma() {
  if (!prisma) prisma = new PrismaClient()
  return prisma
}

module.exports = async (req, res) => {
  const db = getPrisma()
  const id = req.query.id

  try {
    if (req.method === 'GET') {
      if (id) {
        const attraction = await db.attraction.findUnique({ where: { id } })
        if (!attraction) return res.status(404).json({ error: 'Attraction not found' })
        return res.json(attraction)
      }
      const where = req.query.category ? { category: req.query.category } : {}
      const attractions = await db.attraction.findMany({ where })
      return res.json(attractions)
    }
    res.status(405).json({ error: 'Method not allowed' })
  } catch (error) {
    res.status(500).json({ error: 'Request failed', detail: error.message })
  }
}
