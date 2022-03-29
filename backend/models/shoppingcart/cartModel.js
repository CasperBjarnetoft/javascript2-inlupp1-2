const Cart = require('./cartSchema')

// POST (Create a cart)
exports.createCart = (req, res) => {

    Cart.create({
        userId: req.body.userId,
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