const Product = require("../models/products.model.js");

exports.findAll = (req, res) => {
  Product.findAll((err, data) => {
    if (err) {
      res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving products."
      });
    } else {
      const products = [];
      for (const key in data) {
        let product = {};
        product.name = data[key].name;
        product.code = data[key].code;
        product.price = data[key].price;
        product.description = data[key].description;
        products.push(product);
      }
      res.send(products);
    }
  });
};

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
      res.status(400).send({
      message: "Content can not be empty!"
      });
  }

  // Create a Product
  const product = new Product({
    name: req.body.name,
    code: req.body.code,
    price: req.body.price,
    description: req.body.description
  });

  // Save Product in the database
  Product.create(product, (err, data) => {
    if (err)
    res.status(500).send({
      message:
      err.message || "Some error occurred while creating the Product."
    });
    else res.send(data);
  });
};