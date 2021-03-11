import * as React from 'react';
import { useEffect } from 'react';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from './Layout/Layout';
import { Auth } from './Auth/Auth';
import { checkAuthSaga, getUserAislesSaga, getUserIntolerancesSaga } from '../redux/modules/user/actions';

/*const myTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#6fbf73',
      main: '#4caf50',
      dark: '#357a38',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffee33',
      main: '#ffea00',
      dark: '#b2a300',
      contrastText: '#000',
    },
  },
});*/

interface RootState {
  userReducer: {
    isAuth: boolean,
  }
}

export default () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);

  useEffect(() => {
    dispatch(checkAuthSaga());
  }, []);

  useEffect(() => {
    if (isAuth) {
      dispatch(getUserIntolerancesSaga());
      dispatch(getUserAislesSaga());
    }
  }, [isAuth]);

  return (
    <>
      {/*<ThemeProvider theme={myTheme}>*/}
      {isAuth
        ? (
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        )
        : <Auth />}
      {/*</ThemeProvider>*/}
    </>
  );
};
