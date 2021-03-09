import { Recipe } from '../../../../types/recipe';
import { Product } from '../../../../types/product';

export const checkRecipesIngredients = (recipes: Recipe[], products: Product[]) =>
  recipes.map((recipe) => ({
    ...recipe,
    ingredients: recipe.ingredients.map((ingredient) => {
      let isAvailable = true;
      if (ingredient.aisle !== 'Spices and Seasonings') {
        const product = products.find((elem) => elem.name === ingredient.name);
        isAvailable = (!ingredient.metricAmount)
          ? (product !== undefined)
          : (product !== undefined) && (product.metricAmount >= ingredient.metricAmount);
      }

      return {
        ...ingredient,
        isAvailable,
      };
    }),
  }));
