import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import { makeStyles } from '@material-ui/core/styles';
import { AuthTabs } from './AuthTabs/AuthTabs';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2, 0, 10, 0),
    backgroundColor: theme.palette.warning.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export const Auth = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LocalDiningIcon fontSize="large" />
          </Avatar>
          <AuthTabs />
        </div>
      </Grid>
    </Grid>
  );
};
