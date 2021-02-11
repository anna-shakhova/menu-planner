const express = require('express');
const {
  getMenuRecipes,
  addRecipeToMenu,
  deleteRecipeFromMenu,
} = require('../controllers/recipes.controller');

const router = express.Router();

router.route('/')
  .get(getMenuRecipes)
  .post(addRecipeToMenu)
  .delete(deleteRecipeFromMenu);

module.exports = router;
