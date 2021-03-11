import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import saga from 'redux-saga';
import { all } from 'redux-saga/effects';

import { productsReducer } from './modules/products/reducer';
import { recipesReducer } from './modules/recipes/reducer';
import { shoppingReducer } from './modules/shoppingList/reducer';
import { userReducer } from './modules/user/reducer';

import { sagaProducts } from './modules/products/saga';
import { sagaRecipes } from './modules/recipes/saga';
import { sagaShopping } from './modules/shoppingList/saga';
import { sagaUser } from './modules/user/saga';

const reducers = combineReducers({
  productsReducer,
  recipesReducer,
  shoppingReducer,
  userReducer,
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
      sagaRecipes(),
      sagaShopping(),
      sagaUser(),
    ]);
  },
);
