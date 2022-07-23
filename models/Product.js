// Library
const {DataTypes} = require('sequelize')
// Database
const { sequelize } = require('../util')

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
})

module.exports = Product