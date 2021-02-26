import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { RecipeCard } from './RecipeCard/RecipeCard';
import { RecipeDetails } from './RecipeDetails/RecipeDetails';

export const MenuRecipesList = (props) => {
  const { recipes, onDelete } = props;

  const [open, setOpen] = useState(false);
  const [recipeDetailed, setRecipe] = useState({});

  const handleClickOpen = (recipe) => {
    setOpen(true);
    setRecipe(recipe);
  };

  const handleClose = () => {
    setOpen(false);
    setRecipe({});
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      {recipes.map((recipe) =>
        <Grid item key={recipe.spoonacular_id}>
          <RecipeCard recipe={recipe} onDelete={onDelete} handleClickOpen={handleClickOpen} />
        </Grid>)}

      {open && <RecipeDetails onClose={handleClose} recipe={recipeDetailed} />}
    </Grid>
  );
};
