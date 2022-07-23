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
    username: {
        type: DataTypes.STRING(100)
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