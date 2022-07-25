// Library
const { DataTypes } = require('sequelize')
// Util
const { sequelize } = require('../util')

const User = sequelize.define('user', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true
    },
    password: {
        type: DataTypes.STRING(500)
    },
    full_name: {
        type: DataTypes.STRING(200),
        allowNull: true
    }
})

module.exports = User