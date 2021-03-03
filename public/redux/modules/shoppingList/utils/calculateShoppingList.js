const getIngredientsFromRecipes = (recipes) => {
  return recipes.reduce((list, recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (!list[ingredient.name]) {
        list[ingredient.name] = {
          name: ingredient.name,
          metricAmount: 0,
          metricUnits: ingredient.metricUnits,
          aisle: ingredient.aisle,
        };
      }
      list[ingredient.name].metricAmount += ingredient.metricAmount;
    });
    return list;
  }, {});
};

export const calculateShoppingList = (products, recipes) => {
  const ingredientsObj = getIngredientsFromRecipes(recipes);

  products.forEach((product) => {
    const productName = product.name.toLowerCase();
    if (ingredientsObj[productName]) {
      ingredientsObj[productName].metricAmount -= product.metricQuantity;
    }
  });

  const shoppingListObj = Object.values(ingredientsObj)
    .filter((el) => el.metricAmount > 0)
    .reduce((aisleList, ingredient) => {
      if (!aisleList[ingredient.aisle]) {
        aisleList[ingredient.aisle] = {
          aisle: ingredient.aisle,
          ingredients: [],
        };
      }
      aisleList[ingredient.aisle].ingredients.push(ingredient);
      return aisleList;
    }, {});

  return Object.values(shoppingListObj);
};
