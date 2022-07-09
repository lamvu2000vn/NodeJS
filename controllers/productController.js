const Product = require('../models/Product')

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add product' })
}

exports.postAddProduct = async (req, res, next) => {
    const {name, description, price} = req.body
    const product = new Product(name, description, price)
    const result = await product.save()

    if (result === 'success') {
        res.redirect('/')
    }
}

exports.getProducts = async (req, res, next) => {
    const products = await Product.fetchAll()
    res.render('shop', { pageTitle: 'Shop page', products })
}

exports.getProductDetails = async (req, res, next) => {
    const productID = req.params.productID
    const product = await Product.findByID(productID)
    if (product) {
        res.render('product-detail', { pageTitle: product.name, product })
    } else {
        res.render('404', { pageTitle: 'Not found' })
    }
}