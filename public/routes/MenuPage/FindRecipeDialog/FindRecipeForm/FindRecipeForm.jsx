import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { CustomSelect } from '../../../../components/CustomSelect/CustomSelect';
import { CUISINES, MEAL_TYPES } from '../../../../constants';
import { findRecipesSaga } from '../../../../redux/modules/recipes/actions';

export const FindRecipeForm = () => {
  const [query, setQuery] = useState({ cuisine: '', type: '' });

  const changeQuery = (field, value) => {
    setQuery({ ...query, [field]: value });
  };

  const dispatch = useDispatch();

  const findRecipes = (event) => {
    event.preventDefault();
    dispatch(findRecipesSaga(query));
  };

  return (
    <>
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
    </>
  );
};
