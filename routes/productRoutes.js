// Library
const express = require('express')
// Controller
const { productController } = require('../controllers')
// Middleware
const { isAuthenticated } = require('../middlewares')

const route = express.Router()

route.get('/', isAuthenticated, productController.index)

route.get('/add-product', isAuthenticated, productController.getAddProduct)

route.post('/add-product', isAuthenticated, productController.postAddProduct)

route.get('/product/:productID', isAuthenticated, productController.productDetails)

route.get('/update/:productID', isAuthenticated, productController.getUpdateProduct)

route.post('/update-product', isAuthenticated, productController.postUpdateProduct)

route.get('/delete/:productID', isAuthenticated, productController.deleteProduct)

module.exports = route