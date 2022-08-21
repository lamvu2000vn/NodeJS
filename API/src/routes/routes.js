// Lib
import bcrypt from 'bcrypt'
// Routes
import { User } from '../models'
import productRoutes from './productRoutes'
import authRoutes from './authRoutes'

const routes = app => {
    app.use(async (req, res, next) => {
        const [user, isCreated] = await User.findOrCreate({
            where: {
                email: 'vuhoanglam2000vn@gmail.com'
            },
            defaults: {
                password: bcrypt.hashSync('123', 10),
                full_name: 'Vũ Hoàng Lâm'
            }
        })

        next()
    })
    app.use('/api', productRoutes)
    app.use('/api', authRoutes)
}

export default routes