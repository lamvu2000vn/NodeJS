// Library
const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
// Route
const productRoutes = require('./productRoutes')
const cartRoutes = require('./cartRoutes')
const authRoutes = require('./authRoutes')
// Model
const { User } = require('../models')

const routes = app => {
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(express.static('public'))
    app.use(async (req, res, next) => {
        const [user, isCreated] = await User.findOrCreate({
            where: {
                id: 1
            },
            defaults: {
                username: 'admin',
                password: bcrypt.hashSync('123', 10),
                full_name: 'admin'
            }
        })

        req.user = user
        
        next()
    })

    app.use(authRoutes)
    app.use(productRoutes)
    app.use(cartRoutes)

    app.use((req, res, next) => {
        res.render('404')
    })
}

module.exports = routes