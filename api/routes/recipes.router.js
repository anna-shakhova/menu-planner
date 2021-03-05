const express = require('express');
const getMenuRecipes = require('../controllers/recipes/getMenuRecipes');
const addRecipeToMenu = require('../controllers/recipes/addRecipeToMenu');
const deleteRecipeFromMenu = require('../controllers/recipes/deleteRecipeFromMenu');

const router = express.Router();

router.route('/')
  .get(getMenuRecipes)
  .post(addRecipeToMenu)
  .delete(deleteRecipeFromMenu);

module.exports = router;
