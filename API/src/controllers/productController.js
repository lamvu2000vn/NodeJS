// Model
import { Product } from '../models'

export const getProductByID = async (req, res, next) => {
    try {
        const productID = req.params.productID
        const result = null
    
        // fetch all
        if (!productID) {
            result = await Product.findAll()
        } else {
            result = await Product.findByPk(productID)
        }

        res.status(200).json({ result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}