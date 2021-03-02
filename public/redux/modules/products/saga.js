import { all } from 'redux-saga/effects';
import { getProductsWatcher } from './sagas/sagaGetProducts';

export function* sagaProducts() {
  yield all([
    getProductsWatcher(),
  ]);
}
