const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class Property {
  static async findAll(filters = {}) {
    const where = { status: 'APPROVED' }
    
    if (filters.location) {
      where.location = { contains: filters.location, mode: 'insensitive' }
    }
    if (filters.minPrice) {
      where.pricePerNight = { ...where.pricePerNight, gte: parseFloat(filters.minPrice) }
    }
    if (filters.maxPrice) {
      where.pricePerNight = { ...where.pricePerNight, lte: parseFloat(filters.maxPrice) }
    }
    if (filters.bedrooms) {
      where.bedrooms = { gte: parseInt(filters.bedrooms) }
    }

    return await prisma.property.findMany({
      where,
      include: {
        images: true,
        amenities: true,
        host: { select: { id: true, name: true, email: true } }
      }
    })
  }

  static async findById(id) {
    return await prisma.property.findUnique({
      where: { id },
      include: {
        images: true,
        amenities: true,
        reviews: { include: { user: { select: { name: true } } } },
        host: { select: { id: true, name: true, email: true } }
      }
    })
  }

  static async create(data) {
    return await prisma.property.create({ data })
  }

  static async update(id, data) {
    return await prisma.property.update({ where: { id }, data })
  }

  static async delete(id) {
    return await prisma.property.delete({ where: { id } })
  }
}

module.exports = Property
