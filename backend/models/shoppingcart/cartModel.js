const Cart = require('./cartSchema')

// POST (Create a cart)
exports.createCart = (req, res) => {

    Cart.create({
        userId: req.userData.id,
        cart: req.body.cart
    })
    .then(data => {
        res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'cart was successfully added',
            data
        })
    })
    .catch(err => {
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to add cart',
            err
        })
    })

}


exports.getCarts = async (req, res) => {

    try {
        const data = await Cart.find({ userId: req.userData.id })
        res.status(200).json(data)
    }
    catch (res) {
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Somthing went wrong when fetching the models'
        })
    }

}