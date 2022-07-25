// Lib
const express = require('express')
// Controller
const { errorController } = require('../controllers')

const route = express.Router()

route.use(errorController.index)

module.exports = route