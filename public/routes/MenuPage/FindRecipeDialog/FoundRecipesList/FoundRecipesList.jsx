import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { RecipeAccordion } from './RecipeAccordion/RecipeAccordion';

const useStyles = makeStyles({
  root: {
    padding: '8px 24px',
  },
});

export const FoundRecipesList = (props) => {
  const classes = useStyles();
  const { recipes, onRecipeChoose } = props;

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        {recipes.map((recipe) =>
          <RecipeAccordion recipe={recipe} onRecipeChoose={onRecipeChoose} key={recipe.spoonacular_id} />)}
      </Paper>
    </div>
  );
};
