import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { APP_MENU_ITEMS } from '../../../constants';

export const AppMenu = () => (
  <List>
    {APP_MENU_ITEMS.map((item) => (
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
