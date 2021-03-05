interface Instruction {
  number: number,
  description: string,
}

export interface Ingredient {
  name: string,
  aisle: string,
  consistency:string
  amount: number,
  units: string,
  metricAmount: number,
  metricUnits: string,
  isAvailable?: boolean,
}

export interface Recipe {
  spoonacular_id: number,
  title: string,
  servings: number,
  readyInMinutes: number,
  imagelink: string,
  ingredients: Ingredient[],
  instructions: Instruction[],
}

export interface RecipeQuery {
  query: string,
  cuisine?: string,
  type?: string,
  includeIngredients?: string,
  excludeIngredients?: string,
  maxReadyTime?: string,
}

export interface RecipeStatus {
  spoonacular_id: number,
  cooked: boolean,
}
