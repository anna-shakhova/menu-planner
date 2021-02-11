const express = require('express');
const {
  getAllProducts,
  addProduct,
  deleteProduct,
} = require('../controllers/products.controller');

const router = express.Router();

router.route('/')
  .get(getAllProducts)
  .post(addProduct)
  .put()
  .delete(deleteProduct);

module.exports = router;
