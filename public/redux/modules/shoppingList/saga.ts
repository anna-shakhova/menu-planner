import { all } from 'redux-saga/effects';
import { calcShoppingListWatcher } from './sagas/sagaCalcShoppingList';

export function* sagaShopping() {
  yield all([
    calcShoppingListWatcher(),
  ]);
}
