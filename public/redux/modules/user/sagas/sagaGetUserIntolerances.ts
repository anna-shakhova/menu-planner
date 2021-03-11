import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USER_INTOLERANCES_SAGA } from '../actionTypes';
import { setUserIntolerancesAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';
import { IntolerancesResponse } from '../../../../types/user';

function* getUserIntolerancesWorker() {
  try {
    const response: IntolerancesResponse = yield call(() => fetchData('/api/user/intolerances', 'GET'));
    yield put(setUserIntolerancesAC(response));
  } catch (err) {
    console.log(err);
  }
}

export function* getUserIntolerancesWatcher() {
  yield takeEvery(GET_USER_INTOLERANCES_SAGA, getUserIntolerancesWorker);
}
