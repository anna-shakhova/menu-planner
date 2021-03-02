import {
  GET_RECIPES,
  FIND_RECIPES,
  ADD_RECIPE,
  CLEAR_FOUND_RECIPES,
  DELETE_RECIPE
} from './actionTypes';

const initialState = {
  recipes: [],
  foundRecipes: [],
};

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
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
        recipes: state.recipes.filter((recipe) => recipe.spoonacular_id !== action.payload),
      };

    default:
      return state;
  }
};
