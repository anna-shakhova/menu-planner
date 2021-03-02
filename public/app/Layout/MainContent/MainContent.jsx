import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { ProductsPage } from '../../../routes/ProductsPage/ProductsPage';
import { MenuPage } from '../../../routes/MenuPage/MenuPage';
import { ShoppingList } from '../../../routes/ShoppingList/ShoppingList';

import { getProductsSaga } from '../../../redux/modules/products/actions';

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
        <Route path="/">
          <Redirect to="/menu" />
        </Route>
      </Switch>
    </main>
  );
};
