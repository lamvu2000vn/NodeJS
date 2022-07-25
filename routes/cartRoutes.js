// Library
const express = require('express')
// Controller
const { cartController } = require('../controllers')
// Middleware
const { isAuthenticated } = require('../middlewares')

const route = express.Router()

route.get('/cart', isAuthenticated, cartController.index)

route.get('/add-cart/:productID', isAuthenticated, cartController.addCart)

route.get('/remove-item/:carItemID', isAuthenticated, cartController.removeItem)

module.exports = route