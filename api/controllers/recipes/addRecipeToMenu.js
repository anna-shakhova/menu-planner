const fetch = require('node-fetch');
const Recipe = require('../../models/recipe.model');

const getUnits = (consistency) => {
  switch (consistency) {
    case 'solid':
      return { metricUnits: 'g', targetUnits: 'grams' };
    case 'liquid':
      return { metricUnits: 'ml', targetUnits: 'milliliters' };
    default:
      return { metricUnits: '', targetUnits: '' };
  }
};

const convertAmounts = async (ingredient) => {
  const { metricUnits, targetUnits } = getUnits(ingredient.consistency);

  if (['g', 'ml'].includes(ingredient.units) || ingredient.amount === 0) {
    return {
      metricAmount: ingredient.amount,
      metricUnits,
    };
  } else {
    const queryUri = 'https://api.spoonacular.com/recipes/convert'
      + `?ingredientName=${ingredient.name}`
      + `&sourceAmount=${ingredient.amount}`
      + `&sourceUnit=${ingredient.units}`
      + `&targetUnit=${targetUnits}`
      + `&apiKey=${process.env.API_KEY}`;

    try {
      const response = await fetch(queryUri);
      const result = await response.json();
      if (result.status === "failure") {
        console.log('convert amounts failed');
        console.log(queryUri);
      }
      return {
        metricAmount: Math.round(result.targetAmount),
        metricUnits,
      };
    } catch (err) {
      console.log(err);
    }
  }
};

const addRecipeToMenu = async (req, res) => {
  try {
    const recipe = { ...req.body };
    for (let i = 0; i < recipe.ingredients.length; i++) {
      const { metricAmount, metricUnits } = await convertAmounts(recipe.ingredients[i]);
      recipe.ingredients[i] = { ...recipe.ingredients[i], metricAmount, metricUnits };
    }
    const newRecipe = await Recipe.create(recipe);
    res.json({ id: newRecipe.id });
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
};

module.exports = addRecipeToMenu;
