import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { APP_MENU_ITEMS } from '../../../constants';
import { signOutSaga } from '../../../redux/modules/user/actions';

interface RootState {
  userReducer: {
    login: string,
  },
}

export const AppMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state.userReducer.login);

  const handleSignOut = () => {
    dispatch(signOutSaga());
  };

  return (
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
      <Divider />
      <ListItem
        button
        key="profile"
        component={RouterLink}
        to="/profile"
      >
        <ListItemIcon><AccountCircleIcon /></ListItemIcon>
        <ListItemText primary={login} />
      </ListItem>
      <ListItem
        button
        key="signout"
        onClick={handleSignOut}
      >
        <ListItemIcon><ExitToAppIcon /></ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItem>
    </List>
  );
};
