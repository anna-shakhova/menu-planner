const Product = require('../models/product.model');

const getAllProducts = async (req, res) => {
  try {
    const productsDB = await Product.find();
    const products = productsDB.map((el) => {
      return { id: el.id, name: el.name, quantity: el.quantity, units: el.units };
    });
    res.json({ products });
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

const addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json({ id: newProduct.id });
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

const deleteProduct = async (req, res) => {
  console.log(req.body)
  try {
    const productToDelete = await Product.findOneAndDelete({ _id: req.body.id });
    console.log(productToDelete);
    res.json({ message: 'product deleted' });
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  deleteProduct,
};
