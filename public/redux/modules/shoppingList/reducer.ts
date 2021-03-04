import { CALC_SHOPPING_LIST, GET_AVAILABLE_PRODUCTS, GET_REQUIRED_INGREDIENTS } from './actionTypes';
import { Aisle, ItemsList } from '../../../types/shoppingList';

const initialState = {
  availableProducts: {},
  requiredIngredients: {},
  shoppingList: [],
};

interface Action {
  type: string,
  payload?: Aisle[] | ItemsList,
}

export const shoppingReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CALC_SHOPPING_LIST:
      return {
        ...state,
        shoppingList: action.payload,
      };

    case GET_AVAILABLE_PRODUCTS:
      return {
        ...state,
        availableProducts: action.payload,
      };

    case GET_REQUIRED_INGREDIENTS:
      return {
        ...state,
        requiredIngredients: action.payload,
      };

    default:
      return state;
  }
};
