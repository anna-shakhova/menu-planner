import React, { useEffect, useState } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { MenuRecipesList } from './MenuRecipesList/MenuRecipesList';
import { FindRecipeDialog } from './FindRecipeDialog/FindRecipeDialog';

export const MenuPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [formOpen, setFormOpen] = useState(false);

  const handleRecipeChoose = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const handleDeleteRecipe = (spoonacular_id) => {
    const remainingRecipes = recipes.filter((el) => el.spoonacular_id !== spoonacular_id);
    setRecipes(remainingRecipes);
    fetch('http://localhost:3001/recipes', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ spoonacular_id }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch('http://localhost:3001/recipes')
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  return (
    <>
      <Fab color="primary" onClick={handleFormOpen}>
        <AddIcon />
      </Fab>
      <FindRecipeDialog
        open={formOpen}
        onClose={handleFormClose}
        onRecipeChoose={handleRecipeChoose}
      />
      <MenuRecipesList
        recipes={recipes}
        onDelete={handleDeleteRecipe}
      />
    </>
  );
};
