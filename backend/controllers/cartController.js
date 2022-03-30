const router = require('express').Router();
const cartModel = require('../models/shoppingcart/cartModel')

// POST (Create a product)
router.post('/', cartModel.createCart)


module.exports = router;