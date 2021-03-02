import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import saga from 'redux-saga';
import { all } from 'redux-saga/effects';

import { productsReducer } from './modules/products/reducer';

import { sagaProducts } from './modules/products/saga';

const reducers = combineReducers({
  productsReducer,
});

const sagaMiddleware = saga();

const composeEnhancer = (process.env.NODE_ENV === 'production')
  ? applyMiddleware(sagaMiddleware)
  : composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store = createStore(reducers, composeEnhancer);

sagaMiddleware.run(
  function* () {
    yield all([
      sagaProducts(),
    ]);
  },
);
