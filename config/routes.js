const express = require('express')
const router = express.Router()

const orderController = require('../app/controllers/orderController')

router.get('/orders', orderController.list)
router.put('/orders/:id', orderController.update)

module.exports = router