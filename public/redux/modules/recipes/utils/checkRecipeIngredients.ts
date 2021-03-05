import { Recipe } from '../../../../types/recipe';
import { Product } from '../../../../types/product';

export const checkRecipeIngredients = (recipe: Recipe, products: Product[]) =>
  recipe.ingredients.map((ingredient) => {
    let isAvailable = true;
    if (ingredient.aisle !== 'Spices and Seasonings') {
      const product = products.find((elem) => elem.name === ingredient.name);
      if (ingredient.metricAmount) {
        isAvailable = (product !== undefined) && (product.metricAmount >= ingredient.metricAmount);
      } else {
        isAvailable = (product !== undefined);
      }
    }

    return {
      ...ingredient,
      isAvailable,
    };
  });
