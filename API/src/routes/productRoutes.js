// Lib
import express from 'express'
// Controller
import { productController } from '../controllers'

const route = express.Router()

route.get('/products/:productID?', productController.getProductByID)

export default route