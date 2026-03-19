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
        const chef = await db.chefProfile.findUnique({ where: { id }, include: { user: true } })
        if (!chef) return res.status(404).json({ error: 'Chef not found' })
        return res.json(chef)
      }
      const chefs = await db.chefProfile.findMany({
        where: { status: 'APPROVED' },
        include: { user: { select: { name: true, email: true } } }
      })
      return res.json(chefs)
    }
    res.status(405).json({ error: 'Method not allowed' })
  } catch (error) {
    res.status(500).json({ error: 'Request failed', detail: error.message })
  }
}
