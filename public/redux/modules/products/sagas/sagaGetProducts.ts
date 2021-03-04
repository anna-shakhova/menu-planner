import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_PRODUCTS_SAGA } from '../actionTypes';
import { getProductsAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';
import { Product } from '../../../../types/product';

interface ProductsResponse {
  products: Product[]
}

function* getProductsWorker() {
  try {
    const data: ProductsResponse = yield call(() => fetchData('/api/products', 'GET'));
    yield put(getProductsAC(data.products));
  } catch (err) {
    console.log(err);
  }
}

export function* getProductsWatcher() {
  yield takeEvery(GET_PRODUCTS_SAGA, getProductsWorker);
}
