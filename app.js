// Library
const express = require('express')
// Util
const { sequelize, associations } = require('./util')
// Config
const config = require('./config/config')
// Routes
const { routes } = require('./routes')

const app = express()

config(app)
routes(app)
associations()

sequelize
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch(err => {
        console.log(err)
    })