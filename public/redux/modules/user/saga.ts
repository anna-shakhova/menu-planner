import { all } from 'redux-saga/effects';
import { checkAuthWatcher } from './sagas/sagaCheckAuth';
import { authWatcher } from './sagas/sagaAuth';
import { signOutWatcher } from './sagas/sagaSignOut';
import { getUserIntolerancesWatcher } from './sagas/sagaGetUserIntolerances';
import { setUserIntolerancesWatcher } from './sagas/sagaSetUserIntolerances';
import { getUserAislesWatcher } from './sagas/sagaGetUserAisles';
import { setUserAislesWatcher } from './sagas/sagaSetUserAisles';

export function* sagaUser() {
  yield all([
    checkAuthWatcher(),
    authWatcher(),
    signOutWatcher(),
    getUserIntolerancesWatcher(),
    setUserIntolerancesWatcher(),
    getUserAislesWatcher(),
    setUserAislesWatcher(),
  ]);
}
