const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class Attraction {
  static async findAll(category = null) {
    const where = category ? { category } : {}
    return await prisma.attraction.findMany({ where })
  }

  static async findById(id) {
    return await prisma.attraction.findUnique({ where: { id } })
  }

  static async create(data) {
    return await prisma.attraction.create({ data })
  }
}

module.exports = Attraction
