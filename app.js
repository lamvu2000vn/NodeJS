const express = require('express')
const path = require('path')

const bodyParser = require('body-parser')
const {adminRoutes, products} = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use((req, res, next) => {
    res.render('404', { pageTitle: 'Not found' })
})

app.listen(3000)