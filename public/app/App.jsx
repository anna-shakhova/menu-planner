import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './Layout/Layout';

const myTheme = createMuiTheme({
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
});

export default () => {
  return (
    // <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    // </ThemeProvider>
  );
};
