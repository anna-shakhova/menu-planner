import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { ProductsPage } from '../../../routes/ProductsPage/ProductsPage';
import { MenuPage } from '../../../routes/MenuPage/MenuPage';
import { ShoppingList } from '../../../routes/ShoppingList/ShoppingList';

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
