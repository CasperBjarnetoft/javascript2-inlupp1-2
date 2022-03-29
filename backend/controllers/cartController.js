const router = require('express').Router();
const cartModel = require('../models/shoppingcart/cartModel')
const auth = require('../authentication/auth');

// POST (Create a product)
router.post('/', auth.verifyToken, cartModel.createCart)


module.exports = router;