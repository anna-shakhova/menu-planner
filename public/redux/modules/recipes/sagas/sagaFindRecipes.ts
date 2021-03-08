import { call, put, select, takeEvery } from 'redux-saga/effects';
import { FIND_RECIPES_SAGA } from '../actionTypes';
import { findRecipesAC, findRecipesSaga } from '../actions';
import { fetchData } from '../../../utils/fetchData';
import { composeQuery } from '../../../utils/composeQuery';
import { Recipe } from '../../../../types/recipe';
import { Product } from '../../../../types/product';
import { checkRecipeIngredients } from '../utils/checkRecipeIngredients';

interface RootState {
  productsReducer: {
    products: Product[],
  },
}

function* findRecipesWorker(action: ReturnType<typeof findRecipesSaga>) {
  try {
    const queryUri = composeQuery('/api/spoonacular/recipes/complexSearch', action.payload);
    const recipes: Recipe[] = yield call(() => fetchData(queryUri, 'GET'));

    const products: Product[] = yield select((state: RootState) => state.productsReducer.products);
    const checkedRecipes = recipes.map((recipe) => checkRecipeIngredients(recipe, products));

    yield put(findRecipesAC(checkedRecipes));
  } catch (err) {
    console.log(err);
  }
}

export function* findRecipesWatcher() {
  yield takeEvery(FIND_RECIPES_SAGA, findRecipesWorker);
}
