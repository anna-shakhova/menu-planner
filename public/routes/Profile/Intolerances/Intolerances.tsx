import * as React from 'react';
import { useState } from 'react';
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

export const Intolerances = () => {
  const classes = useStyles();
  const userIntolerances: string[] = [];
  const initIntolerances = INTOLERANCES.reduce((intoleranceList, intolerance) => ({
    ...intoleranceList,
    [intolerance]: userIntolerances.includes(intolerance),
  }), {});
  const [intolerances, setIntolerances] = useState(initIntolerances);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIntolerances({
      ...intolerances,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSaveIntolerances = () => {
    console.log(Object.keys(intolerances).filter((intolerance) => intolerances[intolerance]));
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <FormLabel component="legend">Check you intolerances </FormLabel>
        <FormGroup className={classes.group}>
          <GridList cols={4} cellHeight="auto" className={classes.list}>
            {INTOLERANCES.map((intolerance) => (
              <GridListTile key={intolerance}>
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} name={intolerance} />}
                  label={intolerance}
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
