import { SET_AUTH, SET_AUTH_ERROR, SET_USER_INTOLERANCES } from './actionTypes';
import { AuthError, AuthResponse, IntolerancesResponse } from '../../../types/user';

const initialState = {
  isAuth: false,
  error: {
    email: '',
    password: '',
    login: '',
  },
  login: '',
  intolerances: [],
};

interface Action {
  type: string,
  payload: AuthResponse | IntolerancesResponse,
}

export const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuth: (action.payload as AuthResponse).session,
        login: (action.payload as AuthResponse).login,
      };

    case SET_AUTH_ERROR:
      return {
        ...state,
        error: { ...initialState.error, ...action.payload as AuthError },
      };

    case SET_USER_INTOLERANCES:
      return {
        ...state,
        intolerances: (action.payload as IntolerancesResponse).intolerances,
      };

    default:
      return state;
  }
};
