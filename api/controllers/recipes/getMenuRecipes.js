const Recipe = require('../../models/recipe.model');

const getMenuRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().select('-_id').lean();
    res.json({ recipes });
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

module.exports = getMenuRecipes;
