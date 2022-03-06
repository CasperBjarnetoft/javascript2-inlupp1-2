const router = require('express').Router();
const productModel = require('../models/products/productModel')
 
// GET (all products)
router.get('/', productModel.getModels)

// GET (one product by id)
router.get('/:id', productModel.getModelById)

// POST (Create a product)
router.post('/', productModel.createModel)

// PATCH (uppdate product)
router.patch('/:id', productModel.uptadeModel)

// DELETE (remove product)
router.delete('/:id', productModel.deleteModel)


module.exports = router;