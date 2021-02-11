import React, { useEffect, useState } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { MenuRecipesList } from './MenuRecipesList';
import { FindRecipeDialog } from './findRecipes/FindRecipeDialog';

export const MenuPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [formOpen, setFormOpen] = useState(false);

  const handleRecipeChoose = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  // const handleDeleteProduct = (id) => {
  //   const remainingProducts = products.filter((el) => el.id !== id);
  //   setProducts(remainingProducts);
  //   fetch('http://localhost:3001/product', {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ id }),
  //   })
  //     .then(res => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    fetch('http://localhost:3001/recipes')
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes))
      .catch((err) => console.log(err));
  }, []);

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleFormOpen}>
        <AddIcon />
      </Fab>

      <FindRecipeDialog open={formOpen} onClose={handleFormClose} onRecipeChoose={handleRecipeChoose} />

      <MenuRecipesList recipes={recipes}/>
    </div>
  );
};
