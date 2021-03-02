import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_PRODUCT_SAGA } from '../actionTypes';
import { addProductAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';

function* addProductWorker(action) {
  try {
    const product = yield call(() => fetchData('http://localhost:3001/products', 'POST', action.payload));
    yield put(addProductAC(product));
  } catch (err) {
    console.log(err);
  }
}

export function* addProductWatcher() {
  yield takeEvery(ADD_PRODUCT_SAGA, addProductWorker);
}
