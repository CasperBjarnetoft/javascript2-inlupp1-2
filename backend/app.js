const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const productController = require('./controllers/productController')
const userController = require('./controllers/userController')
const cartController = require('./controllers/cartController')

app.use('/api/motorcycles', productController)
app.use('/api/users', userController)
app.use('/api/cart', cartController)


module.exports = app