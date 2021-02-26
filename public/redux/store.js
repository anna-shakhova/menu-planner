/*import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import saga from 'redux-saga';
import { all } from "redux-saga/effects";

import { sagaProducts } from './modules/products/saga';

import { products } from "./modules/products/reducer";

const reducers = combineReducers({
  products,
});

const initialState = {};

const sagaMiddleware = saga();

const composeEnhancer = (process.env.NODE_ENV === 'production')
  ? applyMiddleware(sagaMiddleware)
  : composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store = createStore(reducers, initialState, composeEnhancer);

sagaMiddleware.run(
  function* () {
    yield all([
      sagaProducts(),
    ]);
  }
);*/
