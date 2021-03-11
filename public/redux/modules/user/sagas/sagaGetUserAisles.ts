import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USER_AISLES_SAGA } from '../actionTypes';
import { setUserAislesAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';
import { AislesResponse } from '../../../../types/user';

function* getUserAislesWorker() {
  try {
    const response: AislesResponse = yield call(() => fetchData('/api/user/aisles', 'GET'));
    yield put(setUserAislesAC(response));
  } catch (err) {
    console.log(err);
  }
}

export function* getUserAislesWatcher() {
  yield takeEvery(GET_USER_AISLES_SAGA, getUserAislesWorker);
}
