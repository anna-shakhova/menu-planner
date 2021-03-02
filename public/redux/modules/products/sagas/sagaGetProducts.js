import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_PRODUCTS_SAGA } from '../actionTypes';
import { getProductsAC } from '../actions';

const getProducts = async () => {
  const response = await fetch('http://localhost:3001/products');
  return response.json();
};

function* getProductsWorker() {
  try {
    const data = yield call(getProducts);
    console.log('saga', data);
    yield put(getProductsAC(data.products));
  } catch (err) {
    console.log(err);
  }
}

export function* getProductsWatcher() {
  yield takeEvery(GET_PRODUCTS_SAGA, getProductsWorker);
}
