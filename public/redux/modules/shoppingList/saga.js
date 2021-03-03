import { all } from 'redux-saga/effects';
import { calcShoppingListWatcher } from './sagas/sagaSaveShoppingList';

export function* sagaShopping() {
  yield all([
    calcShoppingListWatcher(),
  ]);
}
