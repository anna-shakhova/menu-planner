import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_RECIPE_SAGA } from '../actionTypes';
import { addRecipeAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';

function* addRecipeWorker(action: ReturnType<typeof addRecipeAC>) {
  try {
    yield call(() => fetchData('http://localhost:3001/recipes', 'POST', action.payload));
    yield put(addRecipeAC(action.payload));
  } catch (err) {
    console.log(err);
  }
}

export function* addRecipeWatcher() {
  yield takeEvery(ADD_RECIPE_SAGA, addRecipeWorker);
}
