import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import { AISLES } from '../../../constants';
import { CheckboxesGrid } from '../../../components/CheckboxesGrid/CheckboxesGrid';
import { setUserAislesSaga } from '../../../redux/modules/user/actions';

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
    aislesNotToCheck: string[],
  }
}

export const Settings = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const userAisles = useSelector((state: RootState) => state.userReducer.aislesNotToCheck);

  const [aisles, setAisles] = useState(userAisles);

  useEffect(() => {
    setAisles(userAisles);
  }, [userAisles]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) setAisles([...aisles, event.target.name]);
    else setAisles(aisles.filter((aisle) => aisle !== event.target.name));
  };

  const handleSaveAisles = () => {
    console.log(aisles)
    dispatch(setUserAislesSaga({ aislesNotToCheck: aisles }));
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <FormLabel component="legend">
          Choose supermarket aisles which products should always be marked as available
        </FormLabel>
        <CheckboxesGrid
          labels={AISLES}
          checkedLabels={aisles}
          handleChange={handleChange}
        />
        <Button variant="contained" className={classes.button} onClick={handleSaveAisles}>Save</Button>
      </FormControl>
    </div>
  );
};
