import React from 'react';
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
  },
  {
    text: 'Menu',
    icon: <MenuBookIcon />,
  },
  {
    text: 'Shopping list',
    icon: <ShoppingCartIcon />,
  },
];

export const AppMenu = (props) => {
  return (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          onClick={() => props.onMenuItemClick(item.text)}
          key={item.text}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
};
