import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { RecipeCard } from './RecipeCard/RecipeCard';
import { RecipeDetails } from './RecipeDetails/RecipeDetails';

export const MenuRecipesList = () => {
  const recipes = useSelector((state) => state.recipesReducer.recipes);

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
          <RecipeCard recipe={recipe} handleClickOpen={handleClickOpen} />
        </Grid>)}

      {open && <RecipeDetails onClose={handleClose} recipe={recipeDetailed} />}
    </Grid>
  );
};
