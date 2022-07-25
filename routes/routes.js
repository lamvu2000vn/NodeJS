// Lib
const bcrypt = require('bcrypt')
// Route
const productRoutes = require('./productRoutes')
const cartRoutes = require('./cartRoutes')
const authRoutes = require('./authRoutes')
const errorRoutes = require('./errorRoutes')
// Model
const { User } = require('../models')

const routes = app => {
    app.use(async (req, res, next) => {
        const [user, isCreated] = await User.findOrCreate({
            where: {
                email: 'vuhoanglam2000vn@gmail.com'
            },
            defaults: {
                password: bcrypt.hashSync('123', 10),
                full_name: 'Vũ Hoàng Lâm'
            }
        })

        next()
    })
    app.use(authRoutes)
    app.use(productRoutes)
    app.use(cartRoutes)
    app.use(errorRoutes)
}

module.exports = routes