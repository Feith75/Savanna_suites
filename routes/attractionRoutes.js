const express = require('express')
const router = express.Router()
const attractionController = require('../controllers/attractionController')

router.get('/', attractionController.getAllAttractions)
router.get('/:id', attractionController.getAttractionById)

module.exports = router
