// Lib
import { DataTypes } from 'sequelize'
// sequelize
import { sequelize } from '../util'

const User = sequelize.define('user', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    full_name: {
        type: DataTypes.STRING(200)
    }
})

export default User