// Lib
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)
const csrf = require('csurf')
const express = require('express')
const bodyParser = require('body-parser')
const flash = require('connect-flash')

const sessionStore = new MySQLStore({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'nodejs-complete'
})

const config = app => {
    app.set('view engine', 'pug')
    app.set('views', 'views')
    app.use(express.static('public'))
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(session({
        secret: 'this is secret',
        resave: false,
        saveUninitialized: false,
        store: sessionStore
    }))
    app.use(csrf())
    app.use(flash())
    app.use((req, res, next) => {
        res.locals.user = req.session.user
        res.locals.csrfToken = req.csrfToken()
        next()
    })
}

module.exports = config
