import { call, put, select, takeEvery } from 'redux-saga/effects';
import { FIND_RECIPES_SAGA } from '../actionTypes';
import { findRecipesAC, findRecipesSaga } from '../actions';
import { fetchData } from '../../../utils/fetchData';
import { composeQuery } from '../../../utils/composeQuery';
import { Recipe } from '../../../../types/recipe';
import { Product } from '../../../../types/product';
import { checkRecipesIngredients } from '../utils/checkRecipesIngredients';

interface RootState {
  productsReducer: {
    products: Product[],
  },
  userReducer: {
    aislesNotToCheck: string[],
  },
}

function* findRecipesWorker(action: ReturnType<typeof findRecipesSaga>) {
  try {
    const queryUri = composeQuery('/api/spoonacular/recipes/complexSearch', action.payload);
    const recipes: Recipe[] = yield call(() => fetchData(queryUri, 'GET'));
    const products: Product[] = yield select((state: RootState) => state.productsReducer.products);
    const aislesNotToCheck: string[] = yield select((state: RootState) => state.userReducer.aislesNotToCheck);

    yield put(findRecipesAC(checkRecipesIngredients(recipes, products, aislesNotToCheck)));
  } catch (err) {
    console.log(err);
  }
}

export function* findRecipesWatcher() {
  yield takeEvery(FIND_RECIPES_SAGA, findRecipesWorker);
}
