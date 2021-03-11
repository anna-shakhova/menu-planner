import { call, put, takeEvery } from 'redux-saga/effects';
import { SET_USER_INTOLERANCES_SAGA } from '../actionTypes';
import { setUserIntolerancesAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';

function* setUserIntolerancesWorker(action: ReturnType<typeof setUserIntolerancesAC>) {
  try {
    yield call(() => fetchData('/api/user/intolerances', 'POST', action.payload));
    yield put(setUserIntolerancesAC(action.payload));
  } catch (err) {
    console.log(err);
  }
}

export function* setUserIntolerancesWatcher() {
  yield takeEvery(SET_USER_INTOLERANCES_SAGA, setUserIntolerancesWorker);
}
