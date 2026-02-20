const Chef = require('../models/Chef')

exports.getAllChefs = async (req, res) => {
  try {
    const chefs = await Chef.findAll()
    res.json(chefs)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chefs' })
  }
}

exports.getChefById = async (req, res) => {
  try {
    const chef = await Chef.findById(req.params.id)
    if (!chef) {
      return res.status(404).json({ error: 'Chef not found' })
    }
    res.json(chef)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chef' })
  }
}
