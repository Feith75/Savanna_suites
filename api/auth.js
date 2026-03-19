const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')

let prisma
function getPrisma() {
  if (!prisma) prisma = new PrismaClient()
  return prisma
}

module.exports = async (req, res) => {
  const db = getPrisma()
  const action = req.query.action // 'register' or 'login'

  try {
    if (req.method === 'POST' && action === 'register') {
      const { name, email, password, role } = req.body
      const hashed = await bcrypt.hash(password, 10)
      const user = await db.user.create({
        data: { name, email, password: hashed, role: role || 'GUEST' }
      })
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' })
      return res.status(201).json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } })
    }

    if (req.method === 'POST' && action === 'login') {
      const { email, password } = req.body
      const user = await db.user.findUnique({ where: { email } })
      if (!user) return res.status(401).json({ error: 'Invalid credentials' })
      const valid = await bcrypt.compare(password, user.password)
      if (!valid) return res.status(401).json({ error: 'Invalid credentials' })
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' })
      return res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } })
    }

    res.status(405).json({ error: 'Method not allowed' })
  } catch (error) {
    res.status(500).json({ error: 'Auth failed', detail: error.message })
  }
}
