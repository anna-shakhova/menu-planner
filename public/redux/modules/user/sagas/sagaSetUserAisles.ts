import { call, put, takeEvery } from 'redux-saga/effects';
import { SET_USER_AISLES_SAGA } from '../actionTypes';
import { setUserAislesAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';

function* setUserAislesWorker(action: ReturnType<typeof setUserAislesAC>) {
  try {
    yield call(() => fetchData('/api/user/aisles', 'POST', action.payload));
    yield put(setUserAislesAC(action.payload));
  } catch (err) {
    console.log(err);
  }
}

export function* setUserAislesWatcher() {
  yield takeEvery(SET_USER_AISLES_SAGA, setUserAislesWorker);
}
