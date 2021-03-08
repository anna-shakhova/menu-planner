import { SET_AUTH, SET_AUTH_ERROR } from './actionTypes';
import { AuthError } from '../../../types/user';

const initialState = {
  isAuth: false,
  error: {
    email: '',
    password: '',
    login: '',
  },
};

interface Action {
  type: string,
  payload: boolean | AuthError,
}

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };

    case SET_AUTH_ERROR:
      return {
        ...state,
        error: { ...initialState.error, ...action.payload as AuthError },
      };

    default:
      return state;
  }
};
