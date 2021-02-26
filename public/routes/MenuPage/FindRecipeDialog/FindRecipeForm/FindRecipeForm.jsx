import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { CustomSelect } from '../../../../components/CustomSelect/CustomSelect';

import { CUISINES, MEAL_TYPES } from '../../../../constants';

export const FindRecipeForm = (props) => {
  const [query, setQuery] = useState({ cuisine: '', type: '' });

  const changeQuery = (field, value) => {
    setQuery({ ...query, [field]: value });
  };

  const findRecipes = (event) => {
    event.preventDefault();
    const queryUri = 'http://localhost:3001/api/recipes/complexSearch'
      + Object.keys(query).reduce((str, field) => {
        if (query[field]) {
          str += (str === '') ? '?' : '&';
          str += field + '=' + query[field];
        }
        return str;
      }, '');

    fetch(queryUri)
      .then((res) => res.json())
      .then((data) => props.onFindRecipes(data))
      .catch((err) => console.log(err));
  };

  return (
    <form>
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
    </form>
  );
};
