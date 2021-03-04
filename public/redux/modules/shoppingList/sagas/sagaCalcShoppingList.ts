import { put, takeEvery, select } from 'redux-saga/effects';
import { CALC_SHOPPING_LIST_SAGA } from '../actionTypes';
import { calcShoppingListAC } from '../actions';
import { calculateShoppingList } from '../utils/calculateShoppingList';
import { Product } from '../../../../types/product';
import { Recipe } from '../../../../types/recipe';

interface RootState {
  productsReducer: {
    products: Product[],
  },
  recipesReducer: {
    recipes: Recipe[],
  },
}

const getProducts = (state: RootState) => state.productsReducer.products;
const getRecipes = (state: RootState) => state.recipesReducer.recipes;

function* calcShoppingListWorker() {
  const recipes: Recipe[] = yield select(getRecipes);
  const products: Product[] = yield select(getProducts);
  yield put(calcShoppingListAC(calculateShoppingList(products, recipes)));
}

export function* calcShoppingListWatcher() {
  yield takeEvery(CALC_SHOPPING_LIST_SAGA, calcShoppingListWorker);
}
