// Library
const { DataTypes } = require('sequelize')
// Util
const { sequelize } = require('../util')

const Cart = sequelize.define('cart', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.BIGINT
    },
})

module.exports = Cart