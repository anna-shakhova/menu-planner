import {
  SET_AUTH,
  CHECK_AUTH_SAGA,
  SET_AUTH_ERROR,
  AUTH_SAGA,
  SIGN_OUT_SAGA,
} from './actionTypes';
import { AuthResponse, User } from '../../../types/user';

export const setAuthAC = (response: AuthResponse) => ({
  type: SET_AUTH,
  payload: response,
});

export const checkAuthSaga = () => ({
  type: CHECK_AUTH_SAGA,
});

export const setAuthErrorAC = (response: AuthResponse) => ({
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
