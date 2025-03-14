import { call, put, takeEvery } from 'redux-saga/effects';
import { DELETE_PRODUCT_SAGA } from '../actionTypes';
import { deleteProductAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';

function* deleteProductWorker(action: ReturnType<typeof deleteProductAC>) {
  try {
    yield call(() => fetchData('/api/products', 'DELETE', { id: action.payload }));
    yield put(deleteProductAC(action.payload));
  } catch (err) {
    console.log(err);
  }
}

export function* deleteProductWatcher() {
  yield takeEvery(DELETE_PRODUCT_SAGA, deleteProductWorker);
}
