const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const productController = require('./controllers/productController')

app.use('/api/motorcycles', productController)


module.exports = app