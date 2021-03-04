import {
  CALC_SHOPPING_LIST_SAGA,
  CALC_SHOPPING_LIST,
  GET_AVAILABLE_PRODUCTS,
  GET_AVAILABLE_PRODUCTS_SAGA,
  GET_REQUIRED_INGREDIENTS,
  GET_REQUIRED_INGREDIENTS_SAGA
} from './actionTypes';
import { Aisle, ItemsList } from '../../../types/shoppingList';

export const calcShoppingListAC = (shoppingList: Aisle[]) => ({
  type: CALC_SHOPPING_LIST,
  payload: shoppingList,
});

export const calcShoppingListSaga = () => ({
  type: CALC_SHOPPING_LIST_SAGA,
});

export const getAvailableProductsAC = (availableProducts: ItemsList) => ({
  type: GET_AVAILABLE_PRODUCTS,
  payload: availableProducts,
});

export const getAvailableProductsSaga = () => ({
  type: GET_AVAILABLE_PRODUCTS_SAGA,
});

export const getRequiredIngredientsAC = (requiredIngredients: ItemsList) => ({
  type: GET_REQUIRED_INGREDIENTS,
  payload: requiredIngredients,
});

export const getRequiredIngredientsSaga = () => ({
  type: GET_REQUIRED_INGREDIENTS_SAGA,
});
