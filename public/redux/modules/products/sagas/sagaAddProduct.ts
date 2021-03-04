import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_PRODUCT_SAGA } from '../actionTypes';
import { addProductAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';
import { Product } from '../../../../types/product';

function* addProductWorker(action: ReturnType<typeof addProductAC>) {
  try {
    const product: Product = yield call(() => fetchData('http://localhost:3001/products', 'POST', action.payload));
    yield put(addProductAC(product));
  } catch (err) {
    console.log(err);
  }
}

export function* addProductWatcher() {
  yield takeEvery(ADD_PRODUCT_SAGA, addProductWorker);
}
