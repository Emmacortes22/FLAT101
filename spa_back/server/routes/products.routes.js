const express = require('express');
const router = express.Router();

// include product controller
const products = require("../controllers/products.controller.js");

// routes
router.get('/', products.findAll);
router.post('/create', products.create);

module.exports = router;