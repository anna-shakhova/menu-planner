import {
  GET_RECIPES,
  GET_RECIPES_SAGA,
  FIND_RECIPES,
  FIND_RECIPES_SAGA,
  ADD_RECIPE,
  ADD_RECIPE_SAGA,
  CLEAR_FOUND_RECIPES,
  CLEAR_FOUND_RECIPES_SAGA,
  DELETE_RECIPE,
  DELETE_RECIPE_SAGA,
  CHECK_INGREDIENTS,
  CHECK_INGREDIENTS_SAGA,
  RESET_RECIPES_LOADED,
} from './actionTypes';
import { Recipe, RecipeQuery, RecipeStatus } from '../../../types/recipe';

export const getRecipesAC = (recipes: Recipe[]) => ({
  type: GET_RECIPES,
  payload: recipes,
});

export const getRecipesSaga = () => ({
  type: GET_RECIPES_SAGA,
});

export const findRecipesAC = (foundRecipes: Recipe[]) => ({
  type: FIND_RECIPES,
  payload: foundRecipes,
});

export const findRecipesSaga = (query: RecipeQuery) => ({
  type: FIND_RECIPES_SAGA,
  payload: query,
});

export const addRecipeAC = (recipe: Recipe) => ({
  type: ADD_RECIPE,
  payload: recipe,
});

export const addRecipeSaga = (recipe: Recipe) => ({
  type: ADD_RECIPE_SAGA,
  payload: recipe,
});

export const clearFoundRecipesAC = () => ({
  type: CLEAR_FOUND_RECIPES,
});

export const clearFoundRecipesSaga = () => ({
  type: CLEAR_FOUND_RECIPES_SAGA,
});

export const deleteRecipeAC = (spoonacular_id: number) => ({
  type: DELETE_RECIPE,
  payload: spoonacular_id,
});

export const deleteRecipeSaga = (recipe: RecipeStatus) => ({
  type: DELETE_RECIPE_SAGA,
  payload: recipe,
});

export const checkIngredientsAC = (recipes: Recipe[]) => ({
  type: CHECK_INGREDIENTS,
  payload: recipes,
});

export const checkIngredientsSaga = (recipes: Recipe[]) => ({
  type: CHECK_INGREDIENTS_SAGA,
  payload: recipes,
});

export const resetRecipesLoadedAC = () => ({
  type: RESET_RECIPES_LOADED,
});
