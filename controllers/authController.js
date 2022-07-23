// Library
const bcrypt = require('bcrypt')
// Model
const { User } = require('../models')

exports.getLogin = (req, res, next) => {
    res.render('auth/login')
}

exports.postLogin = async (req, res, next) => {
    const {username, password} = req.body

    const user = await User.findOne({
        where: {
            username
        }
    })

    if (!user) {
        res.redirect('/login')
        return
    }

    const checkPassword = bcrypt.compareSync(password, user.password)

    if (!checkPassword) {
        res.redirect('/login')
        return
    }

    req.user = user

    res.redirect('/')
}