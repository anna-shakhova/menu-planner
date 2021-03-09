const Recipe = require('../../models/recipe.model');

const getMenuRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ user: req.session.user.id }).select('-_id').lean();
    res.json({ recipes });
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

module.exports = getMenuRecipes;
