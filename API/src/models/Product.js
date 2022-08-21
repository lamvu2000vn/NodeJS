// Lib
import { DataTypes } from 'sequelize'
// sequelize
import { sequelize } from '../util'

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(200)
    },
    price: {
        type: DataTypes.INTEGER
    }
})

export default Product