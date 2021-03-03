import * as React from 'react';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import { RecipeCard } from './RecipeCard/RecipeCard';
import { RecipeDetails } from './RecipeDetails/RecipeDetails';
import { Recipe } from "../../../types/recipe";

interface RootState {
  recipesReducer: {
    recipes: Recipe[],
  }
}

const initialRecipeDetailed: Recipe = {
  spoonacular_id: 0,
  title: '',
  servings: 0,
  readyInMinutes: 0,
  imagelink: '',
  ingredients: [],
  instructions: [],
};

export const MenuRecipesList = () => {
  const recipes = useSelector((state: RootState) => state.recipesReducer.recipes);
  const [open, setOpen] = useState(false);
  const [recipeDetailed, setRecipe] = useState(initialRecipeDetailed);

  const handleClickOpen = useCallback((recipe: Recipe) => {
    setRecipe(recipe);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      {recipes.map((recipe) => (
        <Grid item key={recipe.spoonacular_id}>
          <RecipeCard recipe={recipe} handleClickOpen={handleClickOpen} />
        </Grid>
      ))}

      {open && <RecipeDetails onClose={handleClose} recipe={recipeDetailed} />}
    </Grid>
  );
};
