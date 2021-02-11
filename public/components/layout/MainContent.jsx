import React from 'react';
import { ProductsPage } from '../products/ProductsPage';
import { MenuPage } from '../menu/MenuPage';

export const MainContent = (props) => {
  switch (props.menuItem) {
    case 'Products':
      return <ProductsPage />;
    case 'Menu':
      return <MenuPage />;
    case 'Shopping list':
      return <div>Shopping list</div>;
    default:
      return <div />;
  };
};
