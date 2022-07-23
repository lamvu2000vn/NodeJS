// Library
const express = require('express')
// Controller
const { productController } = require('../controllers')

const route = express.Router()

route.get('/', productController.index)

route.get('/add-product', productController.getAddProduct)

route.post('/add-product', productController.postAddProduct)

route.get('/product/:productID', productController.productDetails)

route.get('/update/:productID', productController.getUpdateProduct)

route.post('/update-product', productController.postUpdateProduct)

route.get('/delete/:productID', productController.deleteProduct)

module.exports = route