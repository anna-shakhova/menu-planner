import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_RECIPE_SAGA } from '../actionTypes';
import { addRecipeAC } from '../actions';
import { fetchData } from '../../../utils/fetchData';
import { Recipe } from '../../../../types/recipe';

function* addRecipeWorker(action: ReturnType<typeof addRecipeAC>) {
  try {
    const newRecipe: Recipe = yield call(() => fetchData('/api/recipes', 'POST', action.payload));
    yield put(addRecipeAC(newRecipe));
  } catch (err) {
    console.log(err);
  }
}

export function* addRecipeWatcher() {
  yield takeEvery(ADD_RECIPE_SAGA, addRecipeWorker);
}
