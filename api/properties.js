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
        const property = await db.property.findUnique({
          where: { id },
          include: {
            images: true,
            amenities: true,
            reviews: { include: { user: { select: { name: true } } } },
            host: { select: { id: true, name: true, email: true } }
          }
        })
        if (!property) return res.status(404).json({ error: 'Property not found' })
        return res.json(property)
      }

      const where = { status: 'APPROVED' }
      if (req.query.location) where.location = { contains: req.query.location, mode: 'insensitive' }
      if (req.query.minPrice) where.pricePerNight = { ...where.pricePerNight, gte: parseFloat(req.query.minPrice) }
      if (req.query.maxPrice) where.pricePerNight = { ...where.pricePerNight, lte: parseFloat(req.query.maxPrice) }
      if (req.query.bedrooms) where.bedrooms = { gte: parseInt(req.query.bedrooms) }

      const properties = await db.property.findMany({
        where,
        include: {
          images: true,
          amenities: true,
          host: { select: { id: true, name: true, email: true } }
        }
      })
      return res.json(properties)
    }

    if (req.method === 'POST') {
      const property = await db.property.create({ data: req.body })
      return res.status(201).json(property)
    }

    if (req.method === 'PUT' && id) {
      const property = await db.property.update({ where: { id }, data: req.body })
      return res.json(property)
    }

    if (req.method === 'DELETE' && id) {
      await db.property.delete({ where: { id } })
      return res.json({ message: 'Property deleted successfully' })
    }

    res.status(405).json({ error: 'Method not allowed' })
  } catch (error) {
    res.status(500).json({ error: 'Request failed', detail: error.message })
  }
}
