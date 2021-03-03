import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper } from '@material-ui/core';

import { AisleAccordion } from './AisleAccordion/AisleAccordion';
import { Recipe } from '../../types/recipe';
import { Product } from '../../types/product';
import { calcShoppingListSaga } from '../../redux/modules/shoppingList/actions';
import { Aisle } from '../../types/shoppingList';

interface RootState {
  recipesReducer: {
    recipes: Recipe[],
  },
  productsReducer: {
    products: Product[],
  },
  shoppingReducer: {
    shoppingList: Aisle[]
  },
}

export const ShoppingList = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state: RootState) => state.shoppingReducer.shoppingList);

  useEffect(() => {
    dispatch(calcShoppingListSaga());
  }, []);

  return (
    <Paper elevation={3}>
      {ingredients.map((ingredientAisle) => (
        <AisleAccordion key={ingredientAisle.aisle} ingredientAisle={ingredientAisle} />
      ))}
    </Paper>
  );
};
