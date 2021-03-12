import * as React from 'react';
import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { ProductsPage } from '../../../routes/ProductsPage/ProductsPage';
import { MenuPage } from '../../../routes/MenuPage/MenuPage';
import { ShoppingList } from '../../../routes/ShoppingList/ShoppingList';
import { getProductsSaga, resetProductsLoadedAC } from '../../../redux/modules/products/actions';
import { getRecipesSaga, resetRecipesLoadedAC } from '../../../redux/modules/recipes/actions';
import { Profile } from '../../../routes/Profile/Profile';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const MainContent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsSaga());
    dispatch(getRecipesSaga());

    return () => {
      dispatch(resetProductsLoadedAC());
      dispatch(resetRecipesLoadedAC());
    };
  }, []);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Switch>
        <Route exact path="/products">
          <ProductsPage />
        </Route>
        <Route exact path="/menu">
          <MenuPage />
        </Route>
        <Route exact path="/shoppingList">
          <ShoppingList />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Redirect to="/profile" />
        </Route>
      </Switch>
    </main>
  );
};
