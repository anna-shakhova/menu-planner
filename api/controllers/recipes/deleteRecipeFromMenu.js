const Recipe = require('../../models/recipe.model');
const Product = require('../../models/product.model');

const removeSpendProducts = async (ingredients) => {
  for (let ingredient of ingredients) {
    const productDocs = await Product.find({ name: ingredient.name });
    if (productDocs.length) {
      for (let product of productDocs) {
        if (product.metricAmount > ingredient.metricAmount) {
          await product.updateOne({ $inc: { metricAmount: -ingredient.metricAmount } });
        } else {
          ingredient.metricAmount -= product.metricAmount;
          await product.updateOne({ $set: { metricAmount: 0 } });
        }
      }
    }
  }
  await Product.deleteMany({ metricAmount: 0 });
};

const deleteRecipeFromMenu = async (req, res) => {
  try {
    const recipe = await Recipe.findOneAndDelete({ spoonacular_id: req.body.spoonacular_id });
    if (req.body.cooked) {
      await removeSpendProducts(recipe.ingredients);
    }
    res.json({ message: 'recipe deleted' });
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

module.exports = deleteRecipeFromMenu;
