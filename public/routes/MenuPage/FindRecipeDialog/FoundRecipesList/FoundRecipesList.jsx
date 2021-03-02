import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { RecipeAccordion } from './RecipeAccordion/RecipeAccordion';

const useStyles = makeStyles({
  root: {
    padding: '8px 24px',
  },
});

export const FoundRecipesList = () => {
  const classes = useStyles();
  const recipes = useSelector((state) => state.recipesReducer.foundRecipes);

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        {recipes.map((recipe) => (
          <RecipeAccordion key={recipe.spoonacular_id} recipe={recipe} />
        ))}
      </Paper>
    </div>
  );
};
