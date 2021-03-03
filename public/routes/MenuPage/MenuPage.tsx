import * as React from 'react';
import { useCallback, useState } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { MenuRecipesList } from './MenuRecipesList/MenuRecipesList';
import { FindRecipeDialog } from './FindRecipeDialog/FindRecipeDialog';

export const MenuPage = () => {
  const [formOpen, setFormOpen] = useState(false);

  const handleFormOpen = useCallback(() => {
    setFormOpen(true);
  }, []);

  const handleFormClose = useCallback(() => {
    setFormOpen(false);
  }, []);

  return (
    <>
      <Fab color="primary" onClick={handleFormOpen}>
        <AddIcon />
      </Fab>
      {formOpen && <FindRecipeDialog handleClose={handleFormClose} />}
      <MenuRecipesList />
    </>
  );
};
