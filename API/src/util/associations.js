// Model
import { Cart, Product, User } from '../models'

const associations = () => {
    return new Promise((resolve, reject) => {
        try {
            User.belongsToMany(Product, {
                through: Cart,
                foreignKey: 'user_id'
            })
            Product.belongsToMany(User, {
                through: Cart,
                foreignKey: 'product_id'
            })

            resolve()
        } catch (error) {
            reject(error)
        }
    })
}

export default associations