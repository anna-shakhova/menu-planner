import { call, put, takeEvery } from 'redux-saga/effects';
import { DELETE_RECIPE_SAGA } from '../actionTypes';
import { deleteRecipeAC, deleteRecipeSaga } from '../actions';
import { fetchData } from '../../../utils/fetchData';
import { getProductsSaga } from '../../products/actions';

function* deleteRecipeWorker(action: ReturnType<typeof deleteRecipeSaga>) {
  try {
    yield call(() => fetchData('/api/recipes', 'DELETE', action.payload));
    yield put(deleteRecipeAC(action.payload.spoonacular_id));
    if (action.payload.cooked) yield put(getProductsSaga());
  } catch (err) {
    console.log(err);
  }
}

export function* deleteRecipeWatcher() {
  yield takeEvery(DELETE_RECIPE_SAGA, deleteRecipeWorker);
}
