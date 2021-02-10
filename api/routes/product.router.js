const express = require('express');
const {
  getAllProducts,
  addProduct,
  deleteProduct,
} = require('../controllers/product.controller');

const router = express.Router();

router.route('/')
  .get(getAllProducts)
  .post(addProduct)
  .put()
  .delete(deleteProduct);

module.exports = router;
