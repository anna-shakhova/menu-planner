module.exports = (request, response) => {
  if (request.query.query !== ' ') return response.json(parseApiRecipeData(data[request.query.query].results));
  return response.json(parseApiRecipeData(ingredients[request.query.includeIngredients].results));
};

//&apiKey=9a06d39220c84b728a99ca5650dbb877

//https://api.spoonacular.com/recipes/convert?ingredientName=cheese&sourceAmount=118&sourceUnit=ml&targetUnit=grams&apiKey=9a06d39220c84b728a99ca5650dbb877
