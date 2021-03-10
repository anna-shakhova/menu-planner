import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_USER_INTOLERANCES_SAGA } from '../actionTypes';
import { setAuthAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';
import { AuthResponse, IntolerancesResponse } from '../../../../types/user';

function* getUserIntolerancesWorker() {
  console.log('getUserIntolerancesWorker enter');
  try {
    const response: IntolerancesResponse = yield call(() => fetchData('/api/user/intolerances', 'GET'));
    console.log('getUserIntolerancesWorker',response);
    //yield put(setAuthAC(response));
  } catch (err) {
    console.log(err);
  }
}

export function* getUserIntolerancesWatcher() {
  yield takeEvery(GET_USER_INTOLERANCES_SAGA, getUserIntolerancesWorker);
}
