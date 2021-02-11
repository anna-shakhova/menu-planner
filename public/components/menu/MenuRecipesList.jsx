import React from 'react';
import Grid from '@material-ui/core/Grid';
import { RecipeCard } from './RecipeCard';

const recipe = {
  "id": 73420,
  "image": "https://spoonacular.com/recipeImages/73420-312x231.jpg",
  "imageType": "jpg",
  "likes": 0,
  "missedIngredientCount": 3,
  "missedIngredients": [
    {
      "aisle": "Baking",
      "amount": 1.0,
      "id": 18371,
      "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
      "meta": [],
      "name": "baking powder",
      "original": "1 tsp baking powder",
      "originalName": "baking powder",
      "unit": "tsp",
      "unitLong": "teaspoon",
      "unitShort": "tsp"
    },
    {
      "aisle": "Spices and Seasonings",
      "amount": 1.0,
      "id": 2010,
      "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
      "meta": [],
      "name": "cinnamon",
      "original": "1 tsp cinnamon",
      "originalName": "cinnamon",
      "unit": "tsp",
      "unitLong": "teaspoon",
      "unitShort": "tsp"
    },
    {
      "aisle": "Milk, Eggs, Other Dairy",
      "amount": 1.0,
      "id": 1123,
      "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png",
      "meta": [],
      "name": "egg",
      "original": "1 egg",
      "originalName": "egg",
      "unit": "",
      "unitLong": "",
      "unitShort": ""
    }
  ],
  "title": "Apple Or Peach Strudel",
  "unusedIngredients": [],
  "usedIngredientCount": 1,
  "usedIngredients": [
    {
      "aisle": "Produce",
      "amount": 6.0,
      "id": 9003,
      "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
      "meta": [],
      "name": "apples",
      "original": "6 large baking apples",
      "originalName": "baking apples",
      "unit": "large",
      "unitLong": "larges",
      "unitShort": "large"
    }
  ]
};

export const MenuRecipesList = (props) => {
  const { recipes } = props;

  const recipeCards = recipes.map((recipe) => {
    return (
      <Grid item key={recipe.spoonacular_id}>
        <RecipeCard recipe={recipe} />
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
