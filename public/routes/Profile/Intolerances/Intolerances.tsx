import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import { INTOLERANCES } from '../../../constants';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    formGroup: {
      columns: 2,
    },
  }),
);

export const Intolerances = () => {
  const classes = useStyles();

  const handleChange = () => {

  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <FormLabel component="legend">Check you intolerances </FormLabel>
        <FormGroup row className={classes.formGroup}>
          {INTOLERANCES.map((intolerance) => (
            <FormControlLabel
              key={intolerance}
              control={<Checkbox onChange={handleChange} name={intolerance} />}
              label={intolerance}
            />
          ))}
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
        <Button variant="contained">Save</Button>
      </FormControl>
    </div>
  );
};
