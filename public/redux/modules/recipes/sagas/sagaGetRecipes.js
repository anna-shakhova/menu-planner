import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_RECIPES_SAGA } from '../actionTypes';
import { getRecipesAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';

function* getRecipesWorker() {
  try {
    const data = yield call(() => fetchData('http://localhost:3001/recipes', 'GET'));
    yield put(getRecipesAC(data.recipes));
  } catch (err) {
    console.log(err);
  }
}

export function* getRecipesWatcher() {
  yield takeEvery(GET_RECIPES_SAGA, getRecipesWorker);
}
