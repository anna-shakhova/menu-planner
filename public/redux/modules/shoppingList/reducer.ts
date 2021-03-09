import { CALC_SHOPPING_LIST } from './actionTypes';
import { Aisle, ItemsList } from '../../../types/shoppingList';

const initialState = {
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

    default:
      return state;
  }
};
