// Lib
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('shop', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize