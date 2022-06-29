var express = require('express');
var bodyParser = require('body-parser')

var productsRouter = require('./routes/products.routes.js');

var app = express();
var jsonParser = bodyParser.json()

app.use('/products',jsonParser, productsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

module.exports = app;