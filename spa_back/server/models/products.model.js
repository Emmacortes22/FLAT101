const sql = require("./db.js");

// constructor
const Product = function(employee) {
  this.name = employee.name;
  this.code = employee.code;
  this.price = employee.price;
  this.description = employee.description;
};

Product.findAll = result => {
  sql.query("SELECT * FROM products", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }   
    console.log("products: ", res);
    result(null, res);
  });
};

Product.create = (newProduct, result) => {
  sql.query("INSERT INTO products SET ?", newProduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created product: ", { id: res.insertId, ...newProduct });
    result(null, { id: res.insertId, ...newProduct });
  });
};

module.exports = Product;