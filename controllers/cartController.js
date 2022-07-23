// Library
const { QueryTypes } = require('sequelize')
// Util
const { sequelize } = require('../util')
// Model
const { Cart, CartItem } = require('../models')

exports.index = async (req, res, next) => {
    let cart = []
    const user = req.user
    const userCart = await Cart.findOne({
        where: {
            user_id: user.id
        }
    })

    if (userCart) {
        cart = await sequelize.query(`
            SELECT
                item.*,
                products.name AS product_name,
                products.price
            FROM cart_items AS item
            INNER JOIN products ON item.product_id = products.id
            WHERE item.cart_id = ${userCart.id}
        `, { type: QueryTypes.SELECT })
    }
    
    res.render('cart/index', { cart })
}

exports.addCart = async (req, res, next) => {
    try {
        const user = req.user
        const productID = req.params.productID
    
        const [userCart, isCreated] = await Cart.findOrCreate({
            where: {
                user_id: user.id
            }
        })
    
        if (isCreated) {
            const newCartItem = CartItem.create({
                cart_id: userCart.id,
                product_id: productID,
                quantity: 1
            })
        } else {
            const [cartItem, isCreated] = await CartItem.findOrCreate({
                where: {
                    cart_id: userCart.id,
                    product_id: productID
                },
                defaults: {
                    quantity: 1
                }
            })
    
            if (!isCreated) {
                cartItem.quantity = cartItem.quantity + 1;
                await cartItem.save()
            }
        }

        res.redirect('/cart')
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
}

exports.removeItem = async (req, res, next) => {
    const cartItemID = req.params.carItemID

    const remove = await CartItem.destroy({
        where: {
            id: cartItemID
        }
    })

    res.redirect('/cart')
}