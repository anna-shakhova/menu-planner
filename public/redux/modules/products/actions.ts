import {
  GET_PRODUCTS,
  GET_PRODUCTS_SAGA,
  ADD_PRODUCT,
  ADD_PRODUCT_SAGA,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SAGA,
  RESET_PRODUCTS_LOADED,
} from './actionTypes';
import { Product, ProductFromForm } from '../../../types/product';

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

export const addProductSaga = (product: ProductFromForm) => ({
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

export const resetProductsLoadedAC = () => ({
  type: RESET_PRODUCTS_LOADED,
});
