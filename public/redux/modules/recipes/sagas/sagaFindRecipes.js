import { call, put, takeEvery } from 'redux-saga/effects';
import { FIND_RECIPES_SAGA } from '../actionTypes';
import { findRecipesAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';
import { composeQuery } from '../../../utils/composeQuery';

function* findRecipesWorker(action) {
  try {
    const queryUri = composeQuery('http://localhost:3001/api/recipes/complexSearch', action.payload);
    const recipes = yield call(() => fetchData(queryUri, 'GET'));
    yield put(findRecipesAC(recipes));
  } catch (err) {
    console.log(err);
  }
}

export function* findRecipesWatcher() {
  yield takeEvery(FIND_RECIPES_SAGA, findRecipesWorker);
}
