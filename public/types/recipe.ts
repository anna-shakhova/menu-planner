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
