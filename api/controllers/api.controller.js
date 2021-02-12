const fetch = require('node-fetch');

const parseApiRecipeData = (arr) => {
  return arr.map((recipe) => {
    const ingredients = recipe.extendedIngredients.map((ingredient) => {
      return ({
        amount: Math.round(ingredient.measures.metric.amount),
        units: ingredient.measures.metric.unitShort,
        name: ingredient.name,
        consistency: ingredient.consistency,
        aisle: ingredient.aisle,
      });
    });
    const instructions = recipe.analyzedInstructions[0].steps.map((step) => {
      return ({
        number: step.number,
        description: step.step,
      });
    });
    return ({
      instructions: instructions,
      spoonacular_id: recipe.id,
      ingredients: ingredients,
      imagelink: recipe.image,
      readyInMinutes: recipe.readyInMinutes,
      servings: recipe.servings,
      summary: recipe.summary,
      title: recipe.title,
    });
  });
};

const complexSearch = async (req, res) => {
  const apiUrl = 'https://api.spoonacular.com' + req.originalUrl.slice(4)
    + `&apiKey=${process.env.API_KEY}`
    + '&fillIngredients=true'
    + '&addRecipeInformation=true'
    + '&offset=0'
    + '&number=10';

  console.log(apiUrl);

  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    res.json(parseApiRecipeData(result.results));
  } catch (err) {
    console.error(err.message);
    res.sendStatus(401);
  }
};

const convertAmounts = async (req, res) => {
  const apiUrl = 'https://api.spoonacular.com' + req.originalUrl.slice(4)
    + `&apiKey=${process.env.API_KEY}`;

  console.log(apiUrl);

  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(401);
  }
};

module.exports = {
  parseApiRecipeData,
  complexSearch,
  convertAmounts,
};
