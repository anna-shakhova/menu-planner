import { put, takeEvery, select, take } from 'redux-saga/effects';
import { CALC_SHOPPING_LIST_SAGA } from '../actionTypes';
import { calcShoppingListAC } from '../actions';
import { calculateShoppingList } from '../utils/calculateShoppingList';
import { Product } from '../../../../types/product';
import { Recipe } from '../../../../types/recipe';
import { GET_PRODUCTS } from '../../products/actionTypes';
import { GET_RECIPES } from '../../recipes/actionTypes';

interface RootState {
  productsReducer: {
    products: Product[],
    isLoaded: boolean,
  },
  recipesReducer: {
    recipes: Recipe[],
    isLoaded: boolean,
  },
}

function* calcShoppingListWorker() {
  const productsLoaded: boolean = yield select((state: RootState) => state.productsReducer.isLoaded);
  if (!productsLoaded) yield take(GET_PRODUCTS);

  const recipesLoaded: boolean = yield select((state: RootState) => state.recipesReducer.isLoaded);
  if (!recipesLoaded) yield take(GET_RECIPES);

  const products: Product[] = yield select((state: RootState) => state.productsReducer.products);
  const recipes: Recipe[] = yield select((state: RootState) => state.recipesReducer.recipes);

  yield put(calcShoppingListAC(calculateShoppingList(products, recipes)));
}

export function* calcShoppingListWatcher() {
  yield takeEvery(CALC_SHOPPING_LIST_SAGA, calcShoppingListWorker);
}
