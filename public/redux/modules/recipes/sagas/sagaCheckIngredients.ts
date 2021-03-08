import { put, select, takeEvery } from 'redux-saga/effects';
import { CHECK_INGREDIENTS_SAGA } from '../actionTypes';
import { checkIngredientsAC } from '../actions';
import { Product } from '../../../../types/product';
import { checkRecipeIngredients } from '../utils/checkRecipeIngredients';

interface RootState {
  productsReducer: {
    products: Product[],
  },
}

function* checkIngredientsWorker(action: ReturnType<typeof checkIngredientsAC>) {
  const products: Product[] = yield select((state: RootState) => state.productsReducer.products);
  yield put(checkIngredientsAC(checkRecipeIngredients(action.payload, products)));
}

export function* checkIngredientsWatcher() {
  yield takeEvery(CHECK_INGREDIENTS_SAGA, checkIngredientsWorker);
}
