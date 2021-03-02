import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_PRODUCTS_SAGA } from '../actionTypes';
import { getProductsAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';

function* getProductsWorker() {
  try {
    /**
     * TODO убрать полный путь, оставить только ручку (почему-то не работает, разобраться)
     */
    const data = yield call(() => fetchData('http://localhost:3001/products', 'GET'));
    yield put(getProductsAC(data.products));
  } catch (err) {
    console.log(err);
  }
}

export function* getProductsWatcher() {
  yield takeEvery(GET_PRODUCTS_SAGA, getProductsWorker);
}
