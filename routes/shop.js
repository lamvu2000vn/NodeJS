const path = require('path')
const express = require('express')
const productController = require('../controllers/productController')

const route = express.Router()

route.get('/', productController.getProducts)
route.get('/products', productController.getProducts)
route.get('/products/:productID', productController.getProductDetails)

module.exports = route