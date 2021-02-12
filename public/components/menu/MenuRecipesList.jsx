import React from 'react';
import Grid from '@material-ui/core/Grid';
import { RecipeCard } from './RecipeCard';

export const MenuRecipesList = (props) => {
  const { recipes, onDelete } = props;

  const recipeCards = recipes.map((recipe) => {
    return (
      <Grid item key={recipe.spoonacular_id}>
        <RecipeCard recipe={recipe} onDelete={onDelete} />
      </Grid>
    );
  });

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      {recipeCards}
    </Grid>
  );
};
