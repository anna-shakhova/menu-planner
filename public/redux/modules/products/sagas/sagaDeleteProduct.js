import { call, put, takeEvery } from 'redux-saga/effects';
import { DELETE_PRODUCT_SAGA } from '../actionTypes';
import { deleteProductAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';

function* deleteProductWorker(action) {
  try {
    yield call(() => fetchData('http://localhost:3001/products', 'DELETE', action.payload));
    yield put(deleteProductAC(action.payload.id));
  } catch (err) {
    console.log(err);
  }
}

export function* deleteProductWatcher() {
  yield takeEvery(DELETE_PRODUCT_SAGA, deleteProductWorker);
}
