const express = require('express')
const router = express.Router()
const chefController = require('../controllers/chefController')

router.get('/', chefController.getAllChefs)
router.get('/:id', chefController.getChefById)

module.exports = router
