// Library
const express = require('express')
// Controller
const { cartController } = require('../controllers')
// Middleware
const { isAuthenticated } = require('../middlewares')

const route = express.Router()

route.use(isAuthenticated)

route.get('/cart', cartController.index)

route.get('/add-cart/:productID', cartController.addCart)

route.get('/remove-item/:carItemID', cartController.removeItem)

module.exports = route