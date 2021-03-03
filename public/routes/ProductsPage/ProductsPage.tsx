import * as React from 'react';
import { useCallback, useState } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ProductsTable } from './ProductsTable/ProductsTable';
import { AddProductForm } from './AddProductForm/AddProductForm';

export const ProductsPage = () => {
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
      {formOpen && <AddProductForm handleFormClose={handleFormClose} />}
      <ProductsTable />
    </>
  );
};
