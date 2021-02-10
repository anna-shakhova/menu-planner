const Product = require('../models/product.model');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

const addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json({ _id: newProduct._id });
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

module.exports = {
  getAllProducts,
  addProduct
}
