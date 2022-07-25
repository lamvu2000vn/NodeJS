// Library
const express = require('express')
// Util
const { sequelize, associations } = require('./util')
// Config
const config = require('./config/config')
// Routes
const { routes } = require('./routes')

const app = express()

associations()
config(app)
routes(app)

sequelize
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch(err => {
        console.log(err)
    })