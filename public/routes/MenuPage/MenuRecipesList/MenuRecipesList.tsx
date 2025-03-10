import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import { RecipeCard } from './RecipeCard/RecipeCard';
import { RecipeDetails } from './RecipeDetails/RecipeDetails';
import { Recipe } from '../../../types/recipe';
import { checkIngredientsSaga } from '../../../redux/modules/recipes/actions';

interface RootState {
  recipesReducer: {
    recipes: Recipe[],
  },
}

export const MenuRecipesList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipesReducer.recipes);

  const [open, setOpen] = useState(false);
  const [recipeDetailed, setRecipe] = useState<number>(0);

  useEffect(() => {
    dispatch(checkIngredientsSaga(recipes));
  }, [recipes.length]);

  const handleClickOpen = useCallback((spoonacular_id: number) => {
    setRecipe(spoonacular_id);
    setOpen(true);
  }, [recipes]);

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

      {open && <RecipeDetails onClose={handleClose} spoonacular_id={recipeDetailed} />}
    </Grid>
  );
};
