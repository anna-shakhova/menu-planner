export interface Ingredient {
  name: string,
  aisle: string,
  metricAmount: number,
  metricUnits: string,
}

export interface Aisle {
  aisle: string,
  ingredients: Ingredient[],
}
