const fetch = require('node-fetch');
const Product = require('../models/product.model');

const getAllProducts = async (req, res) => {
  try {
    const productsDB = await Product.find().lean();
    const products = productsDB.map((el) => {
      return { ...el, id: el._id };
    });
    res.json({ products });
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

const pcsToGrams = async (product) => {
  const queryUri = 'https://api.spoonacular.com/recipes/convert'
    + `?ingredientName=${product.name}`
    + `&sourceAmount=${product.amount}`
    + `&sourceUnit=''`
    + `&targetUnit='grams'`
    + `&apiKey=${process.env.API_KEY}`;

  try {
    const response = await fetch(queryUri);
    const result = await response.json();
    if (result.status === 'failure') {
      console.log('convert amounts failed');
      console.log(queryUri);
    }
    return {
      metricAmount: Math.round(result.targetAmount),
      metricUnits: 'g',
    };
  } catch (err) {
    console.log(err);
  }
};

const convertToMetric = async (product) => {
  switch (product.units) {
    case 'kg':
      return {
        metricAmount: product.amount * 1000,
        metricUnits: 'g',
      };
    case 'l':
      return {
        metricAmount: product.amount * 1000,
        metricUnits: 'ml',
      };
    case 'pcs': {
      const { metricAmount, metricUnits } = await pcsToGrams(product);
      return { metricAmount, metricUnits };
    }
    default:
      return {
        metricAmount: product.amount,
        metricUnits: product.units,
      };
  }
};

const addProduct = async (req, res) => {
  try {
    const { metricAmount, metricUnits } = await convertToMetric(req.body);
    const newProduct = await Product.create({ ...req.body, metricAmount, metricUnits });
    res.json({ ...newProduct._doc, id: newProduct.id });
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.body.id });
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
