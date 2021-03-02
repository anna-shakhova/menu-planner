import { GET_PRODUCTS, GET_PRODUCTS_SAGA, ADD_PRODUCT, DELETE_PRODUCT } from './actionTypes';

export const getProductsAC = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const getProductsSaga = () => ({
  type: GET_PRODUCTS_SAGA,
});
