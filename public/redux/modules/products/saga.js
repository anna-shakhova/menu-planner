import { all } from 'redux-saga/effects';
import { getProductsWatcher } from './sagas/sagaGetProducts';
import { addProductWatcher } from './sagas/sagaAddProduct';
import { deleteProductWatcher } from './sagas/sagaDeleteProduct';

export function* sagaProducts() {
  yield all([
    getProductsWatcher(),
    addProductWatcher(),
    deleteProductWatcher(),
  ]);
}
