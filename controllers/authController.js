// Library
const bcrypt = require('bcrypt')
// Model
const { User } = require('../models')

exports.getLogin = (req, res, next) => {
    const isLogged = req.session.user

    if (isLogged) {
        res.redirect('/')
    } else {
        res.render('auth/login', {
            errorMessage: req.flash('error') || null
        })
    }
}

exports.postLogin = async (req, res, next) => {
    const {username, password} = req.body

    const user = await User.findOne({
        where: {
            username
        }
    })

    if (!user) {
        req.flash('error', 'Invalid username')
        return res.redirect('/login')
    }

    const checkPassword = bcrypt.compareSync(password, user.password)

    if (!checkPassword) {
        req.flash('error', 'Invalid password')
        return res.redirect('/login')
    }

    req.session.user = user

    res.redirect('/')
}

exports.logout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err)
    })

    res.redirect('/')
}