import { SAVE_SHOPPING_LIST } from './actionTypes';

const initialState = {
  shoppingList: [],
};

export const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SHOPPING_LIST:
      return {
        ...state,
        shoppingList: action.payload,
      };

    default:
      return state;
  }
};
