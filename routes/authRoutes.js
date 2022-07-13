// Library
const express = require('express')

// Controller
const { authController } = require('../controllers')

const route = express.Router()

route.get('/sign-in', authController.getSignIn)

module.exports = route