export interface ShoppingListItem {
  name: string,
  aisle?: string,
  metricAmount: number,
  metricUnits: string,
  bestBefore?: number,
}

export interface ItemsList {
  [name: string]: ShoppingListItem,
}

export interface Aisle {
  aisle: string,
  ingredients: ShoppingListItem[],
}

export interface ShoppingList {
  [name: string]: Aisle,
}
