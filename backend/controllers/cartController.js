const router = require('express').Router();
const cartModel = require('../models/shoppingcart/cartModel')
const auth = require('../authentication/auth');

// POST (Create a product)
router.post('/', auth.verifyToken, cartModel.createCart)

router.get('/orders', auth.verifyToken, cartModel.getCarts)


module.exports = router;