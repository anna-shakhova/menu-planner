import { call, put, takeEvery } from 'redux-saga/effects';
import { AUTH_SAGA } from '../actionTypes';
import { setAuthAC, setAuthErrorAC, authSaga } from '../actions';
import { fetchData } from '../../../utils/fetchData';
import { AuthResponse } from '../../../../types/user';

function* authWorker(action: ReturnType<typeof authSaga>) {
  const url = `/api/auth/${action.payload.type}`;
  try {
    const response: AuthResponse = yield call(() => fetchData(url, 'POST', action.payload.user));
    yield put(setAuthAC(response));
    if (response.error) yield put(setAuthErrorAC(response));
  } catch (err) {
    console.log(err);
  }
}

export function* authWatcher() {
  yield takeEvery(AUTH_SAGA, authWorker);
}
