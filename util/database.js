const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodejs-complete', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize