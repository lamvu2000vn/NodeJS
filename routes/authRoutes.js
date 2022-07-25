// Library
const express = require('express')
// Middleware
const { isAuthenticated } = require('../middlewares')
// Controller
const { authController } = require('../controllers')

const route = express.Router()

route.get('/login', authController.getLogin)

route.post('/login', isAuthenticated, authController.postLogin)

route.get('/logout', isAuthenticated, authController.logout)

route.get('/sign-up', authController.getSignUp)

route.post('/check-exists-email', isAuthenticated, authController.checkExistsEmail)

module.exports = route