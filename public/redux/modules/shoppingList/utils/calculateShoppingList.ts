import { Recipe } from '../../../../types/recipe';
import { Product } from '../../../../types/product';
import { ShoppingList } from '../../../../types/shoppingList';
import { getAvailableProducts } from './getAvailableProducts';
import { getRequiredIngredients } from './getRequiredIngredients';

export const calculateShoppingList = (products: Product[], recipes: Recipe[]) => {
  const availableProducts = getAvailableProducts(products);
  const requiredIngredients = getRequiredIngredients(recipes);

  Object.keys(availableProducts).forEach((product) => {
    if (requiredIngredients[product]) {
      requiredIngredients[product].metricAmount -= availableProducts[product].metricAmount;
    }
  });

  const initShoppingList: ShoppingList = {};
  return Object.values(Object.values(requiredIngredients)
    .filter((ingredient) => ingredient.metricAmount > 0)
    .reduce((shoppingList, ingredient) => {
      if (ingredient.aisle && !shoppingList[ingredient.aisle]) {
        return {
          ...shoppingList,
          [ingredient.aisle]: {
            aisle: ingredient.aisle,
            ingredients: [ingredient],
          },
        };
      }

      if (ingredient.aisle) shoppingList[ingredient.aisle].ingredients.push(ingredient);
      return shoppingList;
    }, initShoppingList));
};
