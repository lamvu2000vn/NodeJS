// Models
const { Product } = require('../models')

exports.index = async (req, res, next) => {
    const products = await Product.findAll()
    res.render('product/index', { products })
}

exports.getAddProduct = (req, res, next) => {
    res.render('product/add-product')
}

exports.postAddProduct = async (req, res, next) => {
    const {name, price} = req.body
    const newProduct = await Product.create({name, price})
    if (newProduct.id) {
        res.redirect('/')
    } else {
        res.redirect('/404')
    }
}

exports.productDetails = async (req, res, next) => {
    const productID = req.params.productID
    const product = await Product.findByPk(productID)

    if (product) {
        res.render('product/product-details', { product })
    } else {
        res.render('/404')
    }
}

exports.getUpdateProduct = async (req, res, next) => {
    const productID = req.params.productID
    const product = await Product.findByPk(productID)

    if (product) {
        res.render('product/update-product', { product })
    } else {
        res.render('/404')
    }
}

exports.postUpdateProduct = async (req, res, next) => {
    const {id, name, price} = req.body
    const product = await Product.update({name, price}, {
        where: {
            id
        }
    })

    console.log(product)
    if (product) {
        res.redirect('/')
    } else {
        res.render('/404')
    }
}

exports.deleteProduct = async (req, res, next) => {
    const productID = req.params.productID
    const result = await Product.destroy({
        where: { id: productID }
    })

    console.log(result)

    if (result) {
        res.redirect('/')
    } else {
        res.redirect('/404')
    }
}