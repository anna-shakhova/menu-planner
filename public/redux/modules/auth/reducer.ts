import { SET_AUTH, SET_AUTH_ERROR } from './actionTypes';
import { AuthResponse } from '../../../types/user';

const initialState = {
  isAuth: false,
  error: {
    email: '',
    password: '',
    login: '',
  },
  login: '',
};

interface Action {
  type: string,
  payload: AuthResponse,
}

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.payload.session,
        login: action.payload.login,
      };

    case SET_AUTH_ERROR:
      return {
        ...state,
        error: { ...initialState.error, ...action.payload.error },
      };

    default:
      return state;
  }
};
