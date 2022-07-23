// Library
const { DataTypes } = require('sequelize')
// Util
const { sequelize } = require('../util')

const Cart = require('./Cart')
const Product = require('./Product')

const CartItem = sequelize.define('cart_item', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    cart_id: {
        type: DataTypes.BIGINT
    },
    product_id: {
        type: DataTypes.BIGINT
    },
    quantity: {
        type: DataTypes.INTEGER
    }
})

module.exports = CartItem