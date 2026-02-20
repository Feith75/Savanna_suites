const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class Chef {
  static async findAll() {
    return await prisma.chefProfile.findMany({
      where: { status: 'APPROVED' },
      include: { user: { select: { name: true, email: true } } }
    })
  }

  static async findById(id) {
    return await prisma.chefProfile.findUnique({
      where: { id },
      include: { user: true }
    })
  }

  static async create(data) {
    return await prisma.chefProfile.create({ data })
  }
}

module.exports = Chef
