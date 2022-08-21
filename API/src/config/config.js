// Lib
import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import csrf from 'csurf'

const config = app => {
    app.set('view engine', 'pug')
    app.set('views', 'views')

    app.use(express.static('public'))
    app.use(bodyParser.json())

    // CORS
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', '*')
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        next()
    })
    // Session
    app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false
    }))
    app.use(csrf())
    // View share
    
}

export default config