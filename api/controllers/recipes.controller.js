const Recipe = require('../models/recipe.model');

const getMenuRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().select('-_id').lean();
    res.json({ recipes });
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

const addRecipeToMenu = async (req, res) => {
  console.log(req.body);
  try {
    const newRecipe = await Recipe.create(req.body);
    console.log(newRecipe);
    res.json({ id: newRecipe.id });
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

const deleteRecipeFromMenu = async (req, res) => {
  // try {
  //   const productToDelete = await Product.findOneAndDelete({ _id: req.body.id });
  //   console.log(productToDelete);
  //   res.json({ message: 'product deleted' });
  // } catch (err) {
  //   console.error(err.message);
  //   res.sendStatus(500);
  // }
};

module.exports = {
  getMenuRecipes,
  addRecipeToMenu,
  deleteRecipeFromMenu,
};
