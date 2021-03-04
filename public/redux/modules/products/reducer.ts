import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from './actionTypes';
import { Product } from '../../../types/product';

const initialState = {
  products: [],
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

    default:
      return state;
  }
};
