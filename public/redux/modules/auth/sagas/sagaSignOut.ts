import { call, put, takeEvery } from 'redux-saga/effects';
import { SIGN_OUT_SAGA } from '../actionTypes';
import { setAuthAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';
import { AuthResponse } from '../../../../types/user';

function* signOutWorker() {
  try {
    const response: AuthResponse = yield call(() => fetchData('/api/auth/signout', 'GET'));
    yield put(setAuthAC(response.session));
  } catch (err) {
    console.log(err);
  }
}

export function* signOutWatcher() {
  yield takeEvery(SIGN_OUT_SAGA, signOutWorker);
}
