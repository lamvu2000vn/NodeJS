// Model
const { Cart, CartItem, Product, User } = require('../models')

const associations = () => {
    User.hasOne(Cart, {
        foreignKey: 'user_id'
    })

    Cart.belongsTo(User, {
        foreignKey: 'user_id'
    })
    Cart.belongsToMany(Product, {
        through: CartItem,
        foreignKey: 'cart_id'
    })

    Product.belongsToMany(Cart, {
        through: CartItem,
        foreignKey: 'product_id'
    })
}

module.exports = associations