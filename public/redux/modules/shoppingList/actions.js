import {
  CALC_SHOPPING_LIST_SAGA,
  SAVE_SHOPPING_LIST,
} from './actionTypes';

export const saveShoppingListAC = (shoppingList) => ({
  type: SAVE_SHOPPING_LIST,
  payload: shoppingList,
});

export const calcShoppingListSaga = () => ({
  type: CALC_SHOPPING_LIST_SAGA,
});
