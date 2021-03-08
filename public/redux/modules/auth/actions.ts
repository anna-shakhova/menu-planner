import {
  SET_AUTH,
  CHECK_AUTH_SAGA,
  SET_AUTH_ERROR,
  AUTH_SAGA,
  SIGN_OUT_SAGA,
} from './actionTypes';
import { AuthError, User } from '../../../types/user';

export const setAuthAC = (isAuth: boolean) => ({
  type: SET_AUTH,
  payload: isAuth,
});

export const checkAuthSaga = () => ({
  type: CHECK_AUTH_SAGA,
});

export const setAuthErrorAC = (error: AuthError) => ({
  type: SET_AUTH_ERROR,
  payload: error,
});

export const authSaga = (type: string, user: User) => ({
  type: AUTH_SAGA,
  payload: { type, user },
});

export const signOutSaga = () => ({
  type: SIGN_OUT_SAGA,
});
