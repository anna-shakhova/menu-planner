import { all } from 'redux-saga/effects';
import { checkAuthWatcher } from './sagas/sagaCheckAuth';
import { authWatcher } from './sagas/sagaAuth';
import { signOutWatcher } from './sagas/sagaSignOut';

export function* sagaAuth() {
  yield all([
    checkAuthWatcher(),
    authWatcher(),
    signOutWatcher(),
  ]);
}
