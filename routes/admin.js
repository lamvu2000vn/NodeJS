const express = require('express')
const productController = require('../controllers/productController')

const route = express.Router()

route.get('/add-product', productController.getAddProduct)
route.post('/product', productController.postAddProduct)

exports.adminRoutes = route