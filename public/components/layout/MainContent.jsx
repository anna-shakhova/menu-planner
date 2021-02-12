import React from 'react';
import { ProductsPage } from '../products/ProductsPage';
import { MenuPage } from '../menu/MenuPage';
import { ShoppingList } from '../shoppingList/ShoppingList';

export const MainContent = (props) => {
  switch (props.menuItem) {
    case 'Products':
      return <ProductsPage />;
    case 'Menu':
      return <MenuPage />;
    case 'Shopping list':
      return <ShoppingList />;
    default:
      return <div />;
  };
};
