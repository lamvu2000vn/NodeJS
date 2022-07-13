// Library
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

// Routes
const { authRoutes } = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(authRoutes)
app.use((req, res, next) => { res.render('404') })

app.listen(3000)