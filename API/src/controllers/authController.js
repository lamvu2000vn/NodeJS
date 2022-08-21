export const isAuth = async (req, res, next) => {
    res.status(200).json({
        isAuth: false
    })
}