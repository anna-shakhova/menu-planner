import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import KitchenIcon from '@material-ui/icons/Kitchen';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const menuItems = [
  {
    text: 'Products',
    icon: <KitchenIcon />,
    link: 'products',
  },
  {
    text: 'Menu',
    icon: <MenuBookIcon />,
    link: 'menu',
  },
  {
    text: 'Shopping list',
    icon: <ShoppingCartIcon />,
    link: 'shoppingList',
  },
];

export const AppMenu = () => (
  <List>
    {menuItems.map((item) => (
      <ListItem
        button
        key={item.link}
        component={RouterLink}
        to={`/${item.link}`}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItem>
    ))}
  </List>
);
