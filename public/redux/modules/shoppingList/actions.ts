import { CALC_SHOPPING_LIST_SAGA, CALC_SHOPPING_LIST } from './actionTypes';
import { Aisle } from '../../../types/shoppingList';

export const calcShoppingListAC = (shoppingList: Aisle[]) => ({
  type: CALC_SHOPPING_LIST,
  payload: shoppingList,
});

export const calcShoppingListSaga = () => ({
  type: CALC_SHOPPING_LIST_SAGA,
});
