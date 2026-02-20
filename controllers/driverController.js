const Driver = require('../models/Driver')

exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.findAll()
    res.json(drivers)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch drivers' })
  }
}

exports.getDriverById = async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id)
    if (!driver) {
      return res.status(404).json({ error: 'Driver not found' })
    }
    res.json(driver)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch driver' })
  }
}
