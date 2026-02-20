const Attraction = require('../models/Attraction')

exports.getAllAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.findAll(req.query.category)
    res.json(attractions)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch attractions' })
  }
}

exports.getAttractionById = async (req, res) => {
  try {
    const attraction = await Attraction.findById(req.params.id)
    if (!attraction) {
      return res.status(404).json({ error: 'Attraction not found' })
    }
    res.json(attraction)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch attraction' })
  }
}
