// Lib
import express from 'express'
// Controller
import { authController } from '../controllers'

const route = express.Router()

route.get('/is-auth', authController.isAuth)

export default route