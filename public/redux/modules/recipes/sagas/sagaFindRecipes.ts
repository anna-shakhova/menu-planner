import { call, put, takeEvery } from 'redux-saga/effects';
import { FIND_RECIPES_SAGA } from '../actionTypes';
import { findRecipesAC, findRecipesSaga } from '../actions';
import { fetchData } from '../../../utils/fetchData';
import { composeQuery } from '../../../utils/composeQuery';
import { Recipe } from '../../../../types/recipe';

function* findRecipesWorker(action: ReturnType<typeof findRecipesSaga>) {
  try {
    const queryUri = composeQuery('/api/spoonacular/recipes/complexSearch', action.payload);
    const recipes: Recipe[] = yield call(() => fetchData(queryUri, 'GET'));
    yield put(findRecipesAC(recipes));
  } catch (err) {
    console.log(err);
  }
}

export function* findRecipesWatcher() {
  yield takeEvery(FIND_RECIPES_SAGA, findRecipesWorker);
}
