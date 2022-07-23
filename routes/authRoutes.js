// Library
const express = require('express')
// Controller
const { authController } = require('../controllers')

const route = express.Router()

route.get('/login', authController.getLogin)

route.post('/login', authController.postLogin)

module.exports = route