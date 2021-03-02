import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { MenuRecipesList } from './MenuRecipesList/MenuRecipesList';
import { FindRecipeDialog } from './FindRecipeDialog/FindRecipeDialog';
import { clearFoundRecipesSaga } from '../../redux/modules/recipes/actions';

export const MenuPage = () => {
  const [formOpen, setFormOpen] = useState(false);
  const dispatch = useDispatch();

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
    dispatch(clearFoundRecipesSaga());
  };

  return (
    <>
      <Fab color="primary" onClick={handleFormOpen}>
        <AddIcon />
      </Fab>
      <FindRecipeDialog open={formOpen} handleClose={handleFormClose} />
      <MenuRecipesList />
    </>
  );
};
