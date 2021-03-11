import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import { INTOLERANCES } from '../../../constants';
import { setUserIntolerancesSaga } from '../../../redux/modules/user/actions';
import { CheckboxesGrid } from '../../../components/CheckboxesGrid/CheckboxesGrid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
      width: '100%',
    },
    button: {
      width: '25%',
      alignSelf: 'flex-end',
    },
  }));

interface RootState {
  userReducer: {
    intolerances: string[],
  }
}

export const Intolerances = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const userIntolerances = useSelector((state: RootState) => state.userReducer.intolerances);

  const [intolerances, setIntolerances] = useState(userIntolerances);

  useEffect(() => {
    setIntolerances(userIntolerances);
  }, [userIntolerances]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) setIntolerances([...intolerances, event.target.name]);
    else setIntolerances(intolerances.filter((product) => product !== event.target.name));
  };

  const handleSaveIntolerances = () => {
    dispatch(setUserIntolerancesSaga({ intolerances }));
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <FormLabel component="legend">Check you intolerances </FormLabel>
        <CheckboxesGrid
          labels={INTOLERANCES}
          checkedLabels={intolerances}
          handleChange={handleChange}
        />
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleSaveIntolerances}
          color="primary"
        >
          Save
        </Button>
      </FormControl>
    </div>
  );
};
