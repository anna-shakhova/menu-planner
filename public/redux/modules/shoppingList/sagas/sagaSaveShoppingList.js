import { put, takeEvery, select, take } from 'redux-saga/effects';
import { CALC_SHOPPING_LIST_SAGA } from '../actionTypes';
import { saveShoppingListAC } from '../actions';
import { calculateShoppingList } from '../utils/calculateShoppingList';
import { GET_RECIPES } from '../../recipes/actionTypes';

const getProducts = (state) => state.productsReducer.products;
const getRecipes = (state) => state.recipesReducer.recipes;

function* calcShoppingListWorker() {
  yield take(GET_RECIPES);
  const products = yield select(getProducts);
  const recipes = yield select(getRecipes);
  const shoppingList = calculateShoppingList(products, recipes);
  yield put(saveShoppingListAC(shoppingList));
}

export function* calcShoppingListWatcher() {
  yield takeEvery(CALC_SHOPPING_LIST_SAGA, calcShoppingListWorker);
}
