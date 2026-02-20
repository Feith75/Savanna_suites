const Property = require('../models/Property')

exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.findAll(req.query)
    res.json(properties)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch properties' })
  }
}

exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id)
    if (!property) {
      return res.status(404).json({ error: 'Property not found' })
    }
    res.json(property)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch property' })
  }
}

exports.createProperty = async (req, res) => {
  try {
    const property = await Property.create(req.body)
    res.status(201).json(property)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create property' })
  }
}

exports.updateProperty = async (req, res) => {
  try {
    const property = await Property.update(req.params.id, req.body)
    res.json(property)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update property' })
  }
}

exports.deleteProperty = async (req, res) => {
  try {
    await Property.delete(req.params.id)
    res.json({ message: 'Property deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete property' })
  }
}
