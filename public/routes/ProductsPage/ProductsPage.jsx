import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ProductsTable } from './ProductsTable/ProductsTable';
import { AddProductForm } from './AddProductForm/AddProductForm';

export const ProductsPage = () => {
  const [formOpen, setFormOpen] = useState(false);

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
      <AddProductForm open={formOpen} handleFormClose={handleFormClose} />
      <ProductsTable />
    </>
  );
};
