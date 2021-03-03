import * as React from 'react';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { CustomSelect } from '../../../../components/CustomSelect/CustomSelect';
import { CUISINES, MEAL_TYPES } from '../../../../constants';
import { findRecipesSaga } from '../../../../redux/modules/recipes/actions';

const useStyles = makeStyles({
  form: {
    minHeight: 180,
  },
});

const initQuery = {
  query: '',
  cuisine: '',
  type: '',
  includeIngredients: '',
  excludeIngredients: '',
  maxReadyTime: '',
};

export const FindRecipeForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [query, setQuery] = useState(initQuery);

  const changeQuery = useCallback((field: string, value: string) => {
    setQuery({ ...query, [field]: value });
  }, [query]);

  const findRecipes = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(findRecipesSaga(query));
  }, [query]);

  console.log(query)

  return (
    <div className={classes.form}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField
            autoFocus
            id="query"
            label="Query"
            type="text"
            fullWidth
            defaultValue={query.query}
            onChange={(event) => changeQuery('query', event.target.value)}
            required
          />
        </Grid>
        <Grid item xs>
          <CustomSelect
            label="Cuisine"
            fieldName="cuisine"
            value={query.cuisine}
            onChange={changeQuery}
            menuItems={CUISINES}
          />
        </Grid>
        <Grid item xs>
          <CustomSelect
            label="Meal Type"
            fieldName="type"
            value={query.type}
            onChange={changeQuery}
            menuItems={MEAL_TYPES}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            id="includeIngredients"
            label="Include ingredients"
            type="text"
            fullWidth
            defaultValue={query.includeIngredients}
            onChange={(event) => changeQuery('includeIngredients', event.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="excludeIngredients"
            label="Exclude ingredients"
            type="text"
            fullWidth
            defaultValue={query.excludeIngredients}
            onChange={(event) => changeQuery('excludeIngredients', event.target.value)}
          />
        </Grid>
        <Grid item xs>
          <TextField
            id="maxReadyTime"
            label="Max cooking time"
            type="text"
            fullWidth
            defaultValue={query.maxReadyTime}
            onChange={(event) => changeQuery('maxReadyTime', event.target.value)}
          />
        </Grid>
        <Grid item xs id="searchBtn">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={findRecipes}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
