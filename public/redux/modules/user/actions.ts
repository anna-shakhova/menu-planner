import {
  SET_AUTH,
  CHECK_AUTH_SAGA,
  SET_AUTH_ERROR,
  AUTH_SAGA,
  SIGN_OUT_SAGA,
  SET_USER_INTOLERANCES,
  GET_USER_INTOLERANCES_SAGA,
  SET_USER_INTOLERANCES_SAGA,
} from './actionTypes';
import { AuthError, AuthResponse, IntolerancesResponse, User } from '../../../types/user';

export const setAuthAC = (response: AuthResponse) => ({
  type: SET_AUTH,
  payload: response,
});

export const checkAuthSaga = () => ({
  type: CHECK_AUTH_SAGA,
});

export const setAuthErrorAC = (response: AuthError) => ({
  type: SET_AUTH_ERROR,
  payload: response,
});

export const authSaga = (type: string, user: User) => ({
  type: AUTH_SAGA,
  payload: { type, user },
});

export const signOutSaga = () => ({
  type: SIGN_OUT_SAGA,
});

export const setUserIntolerancesAC = (intolerances: IntolerancesResponse) => ({
  type: SET_USER_INTOLERANCES,
  payload: intolerances,
});

export const getUserIntolerancesSaga = () => ({
  type: GET_USER_INTOLERANCES_SAGA,
});

export const setUserIntolerancesSaga = (intolerances: IntolerancesResponse) => ({
  type: SET_USER_INTOLERANCES_SAGA,
  payload: intolerances,
});
