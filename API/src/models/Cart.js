// Lib
import { DataTypes } from 'sequelize'
// sequelize
import { sequelize } from '../util'

const Cart = sequelize.define('cart', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    product_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    quantity: {
        type: DataTypes.TINYINT
    }
})

export default Cart