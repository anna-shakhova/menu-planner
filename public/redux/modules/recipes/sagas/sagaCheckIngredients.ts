import { put, select, takeEvery, take } from 'redux-saga/effects';
import { CHECK_INGREDIENTS_SAGA } from '../actionTypes';
import { checkIngredientsAC } from '../actions';
import { Product } from '../../../../types/product';
import { checkRecipesIngredients } from '../utils/checkRecipesIngredients';
import { GET_PRODUCTS } from '../../products/actionTypes';

interface RootState {
  productsReducer: {
    products: Product[],
    isLoaded: boolean,
  },
  userReducer: {
    aislesNotToCheck: string[],
  },
}

function* checkIngredientsWorker(action: ReturnType<typeof checkIngredientsAC>) {
  const isLoaded: boolean = yield select((state: RootState) => state.productsReducer.isLoaded);
  if (!isLoaded) yield take(GET_PRODUCTS);

  const products: Product[] = yield select((state: RootState) => state.productsReducer.products);
  const aislesNotToCheck: string[] = yield select((state: RootState) => state.userReducer.aislesNotToCheck);

  yield put(checkIngredientsAC(checkRecipesIngredients(action.payload, products, aislesNotToCheck)));
}

export function* checkIngredientsWatcher() {
  yield takeEvery(CHECK_INGREDIENTS_SAGA, checkIngredientsWorker);
}
