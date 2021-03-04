import { call, put, takeEvery } from 'redux-saga/effects';
import { DELETE_RECIPE_SAGA } from '../actionTypes';
import { deleteRecipeAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';

function* deleteRecipeWorker(action: ReturnType<typeof deleteRecipeAC>) {
  try {
    yield call(() => fetchData('/api/recipes', 'DELETE', { spoonacular_id: action.payload }));
    yield put(deleteRecipeAC(action.payload));
  } catch (err) {
    console.log(err);
  }
}

export function* deleteRecipeWatcher() {
  yield takeEvery(DELETE_RECIPE_SAGA, deleteRecipeWorker);
}
