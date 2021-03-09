import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, RESET_PRODUCTS_LOADED } from './actionTypes';
import { Product } from '../../../types/product';

const initialState = {
  products: [],
  isLoaded: false,
};

interface Action {
  type: string,
  payload?: string | Product | Product[],
}

export const productsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoaded: true,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product: Product) => product.id !== action.payload),
      };

    case RESET_PRODUCTS_LOADED:
      return initialState;

    default:
      return state;
  }
};
