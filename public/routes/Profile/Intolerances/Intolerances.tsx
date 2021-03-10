import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import { GridListTile } from '@material-ui/core';

import { INTOLERANCES } from '../../../constants';
import { setUserIntolerancesSaga } from '../../../redux/modules/user/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
      width: '100%',
    },
    group: {
      margin: '20px 0',
    },
    list: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    button: {
      width: '25%',
      alignSelf: 'flex-end',
    },
  }),
);

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
        <FormGroup className={classes.group}>
          <GridList cols={4} cellHeight="auto" className={classes.list}>
            {INTOLERANCES.map((product) => (
              <GridListTile key={product}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      onChange={handleChange}
                      name={product}
                      checked={intolerances.includes(product)}
                    />
                  )}
                  label={product}
                />
              </GridListTile>
            ))}
          </GridList>
        </FormGroup>
        <Button variant="contained" className={classes.button} onClick={handleSaveIntolerances}>Save</Button>
      </FormControl>
    </div>
  );
};
