import { Product } from '../../../../types/product';
import { ItemsList, ShoppingListItem } from '../../../../types/shoppingList';

const productsToShoppingListItems = (products: Product[]): ShoppingListItem[] => (
  products.map((product) => ({
    name: product.name,
    metricAmount: product.metricAmount,
    metricUnits: product.metricUnits,
  })));

export const getAvailableProducts = (products: Product[]) => {
  const initList: ItemsList = {};
  return productsToShoppingListItems(products).reduce((list, item: ShoppingListItem) => {
    const itemName = item.name.toLowerCase();
    if (!list[itemName]) return { ...list, [itemName]: item };

    list[itemName].metricAmount += item.metricAmount;
    return list;
  }, initList);
};
