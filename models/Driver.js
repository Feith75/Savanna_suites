const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class Driver {
  static async findAll() {
    return await prisma.driverProfile.findMany({
      where: { status: 'APPROVED' },
      include: { user: { select: { name: true, email: true } } }
    })
  }

  static async findById(id) {
    return await prisma.driverProfile.findUnique({
      where: { id },
      include: { user: true }
    })
  }

  static async create(data) {
    return await prisma.driverProfile.create({ data })
  }
}

module.exports = Driver
