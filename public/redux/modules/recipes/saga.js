import { all } from 'redux-saga/effects';
import { getRecipesWatcher } from './sagas/sagaGetRecipes';
import { findRecipesWatcher } from './sagas/sagaFindRecipes';
import { addRecipeWatcher } from './sagas/sagaAddRecipe';
import { clearFoundRecipesWatcher } from './sagas/sagaClearFoundRecipes';
import { deleteRecipeWatcher } from './sagas/sagaDeleteRecipe';

export function* sagaRecipes() {
  yield all([
    getRecipesWatcher(),
    findRecipesWatcher(),
    addRecipeWatcher(),
    clearFoundRecipesWatcher(),
    deleteRecipeWatcher(),
  ]);
}
