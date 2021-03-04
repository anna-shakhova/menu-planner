import {
  GET_PRODUCTS,
  GET_PRODUCTS_SAGA,
  ADD_PRODUCT,
  ADD_PRODUCT_SAGA,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SAGA,
} from './actionTypes';
import { Product } from '../../../types/product';

export const getProductsAC = (products: Product[]) => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const getProductsSaga = () => ({
  type: GET_PRODUCTS_SAGA,
});

export const addProductAC = (product: Product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const addProductSaga = (product: Product) => ({
  type: ADD_PRODUCT_SAGA,
  payload: product,
});

export const deleteProductAC = (id: string) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

export const deleteProductSaga = (id: string) => ({
  type: DELETE_PRODUCT_SAGA,
  payload: id,
});
