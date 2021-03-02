import {
  GET_PRODUCTS,
  GET_PRODUCTS_SAGA,
  ADD_PRODUCT,
  ADD_PRODUCT_SAGA,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SAGA,
} from './actionTypes';

export const getProductsAC = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const getProductsSaga = () => ({
  type: GET_PRODUCTS_SAGA,
});

export const addProductAC = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const addProductSaga = (product) => ({
  type: ADD_PRODUCT_SAGA,
  payload: product,
});

export const deleteProductAC = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

export const deleteProductSaga = (id) => ({
  type: DELETE_PRODUCT_SAGA,
  payload: id,
});
