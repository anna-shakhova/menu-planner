import * as React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import { setAuthErrorAC, authSaga } from '../../../../redux/modules/auth/actions';
import { AuthError } from '../../../../types/user';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initUser = {
  login: '',
  email: '',
  password: '',
};

interface RootState {
  authReducer: {
    error: AuthError,
  },
}

export const SignUpForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.authReducer.error);

  const [user, setUser] = useState(initUser);
  const [clicked, setClicked] = useState(false);
  const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClicked(false);
    dispatch(setAuthErrorAC({ [event.target.name]: '' }));
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSignUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(setAuthErrorAC({}));
    setClicked(true);

    if (user.login === '') return dispatch(setAuthErrorAC({ login: 'Login is required' }));
    if (!emailRegExp.test(user.email)) return dispatch(setAuthErrorAC({ email: 'Invalid email format' }));
    if (user.password === '') return dispatch(setAuthErrorAC({ password: 'Password is required' }));

    return dispatch(authSaga('signup', user));
  };

  return (
    <form className={classes.form} noValidate>
      <TextField
        error={clicked && error.login !== ''}
        variant="outlined"
        required
        fullWidth
        label="Login"
        name="login"
        autoFocus
        onChange={handleChange}
        helperText={error.login}
      />
      <TextField
        error={clicked && error.email !== ''}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Email Address"
        name="email"
        onChange={handleChange}
        helperText={error.email}
      />
      <TextField
        error={clicked && error.password !== ''}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        onChange={handleChange}
        helperText={error.password}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
        size="large"
        fullWidth
        onClick={handleSignUp}
      >
        Sign Up
      </Button>
    </form>
  );
};
