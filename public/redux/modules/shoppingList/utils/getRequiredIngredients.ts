import { ItemsList, ShoppingListItem } from '../../../../types/shoppingList';
import { Recipe } from '../../../../types/recipe';

const recipesToShoppingListItems = (recipes: Recipe[]): ShoppingListItem[] => {
  const initList: ShoppingListItem[] = [];
  return recipes.reduce((list, recipe) => {
    return [...list, ...recipe.ingredients.map((ingredient) => ({
      name: ingredient.name,
      aisle: ingredient.aisle.split(';')[0],
      metricAmount: ingredient.metricAmount,
      metricUnits: ingredient.metricUnits,
    }))];
  }, initList);
};

export const getRequiredIngredients = (recipes: Recipe[]) => {
  const initList: ItemsList = {};
  return recipesToShoppingListItems(recipes).reduce((list, item: ShoppingListItem) => {
    if (!list[item.name]) return { ...list, [item.name]: item };

    list[item.name].metricAmount += item.metricAmount;
    return list;
  }, initList);
};
