import {
  GET_RECIPES,
  FIND_RECIPES,
  ADD_RECIPE,
  CLEAR_FOUND_RECIPES,
  DELETE_RECIPE, CHECK_INGREDIENTS,
  RESET_RECIPES_LOADED,
} from './actionTypes';
import { Recipe, RecipeQuery } from '../../../types/recipe';

const initialState = {
  recipes: [],
  foundRecipes: [],
  isLoaded: false,
};

export interface Action {
  type: string,
  payload: number | RecipeQuery | Recipe | Recipe[],
}

export const recipesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        isLoaded: true,
      };

    case FIND_RECIPES:
      return {
        ...state,
        foundRecipes: action.payload,
      };

    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };

    case CLEAR_FOUND_RECIPES:
      return {
        ...state,
        foundRecipes: [],
      };

    case DELETE_RECIPE:
      return {
        ...state,
        // eslint-disable-next-line max-len
        recipes: state.recipes.filter((recipe: Recipe) => recipe.spoonacular_id !== action.payload as number),
      };

    case CHECK_INGREDIENTS:
      return {
        ...state,
        recipes: action.payload,
      };

    case RESET_RECIPES_LOADED:
      return initialState;

    default:
      return state;
  }
};
