import { call, put, takeEvery } from 'redux-saga/effects';
import { CHECK_AUTH_SAGA } from '../actionTypes';
import { setAuthAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';
import { AuthResponse } from '../../../../types/user';

function* checkAuthWorker() {
  try {
    const response: AuthResponse = yield call(() => fetchData('/api/auth/check', 'GET'));
    yield put(setAuthAC(response));
  } catch (err) {
    console.log(err);
  }
}

export function* checkAuthWatcher() {
  yield takeEvery(CHECK_AUTH_SAGA, checkAuthWorker);
}
