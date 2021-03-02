import { put, takeEvery } from 'redux-saga/effects';
import { CLEAR_FOUND_RECIPES_SAGA } from '../actionTypes';
import { clearFoundRecipesAC } from '../actions';

function* clearFoundRecipesWorker() {
  try {
    yield put(clearFoundRecipesAC());
  } catch (err) {
    console.log(err);
  }
}

export function* clearFoundRecipesWatcher() {
  yield takeEvery(CLEAR_FOUND_RECIPES_SAGA, clearFoundRecipesWorker);
}
