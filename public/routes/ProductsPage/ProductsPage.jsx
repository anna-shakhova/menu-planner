import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ProductsTable } from './ProductsTable/ProductsTable';
import { AddProductForm } from './AddProductForm/AddProductForm';

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [formOpen, setFormOpen] = useState(false);

  const handleDeleteProduct = (id) => {
    const remainingProducts = products.filter((el) => el.id !== id);
    setProducts(remainingProducts);
    fetch('http://localhost:3001/products', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .catch((err) => console.log(err));
  };

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
  };

  return (
    <>
      <Fab color="primary" aria-label="add" onClick={handleFormOpen}>
        <AddIcon />
      </Fab>
      <AddProductForm
        open={formOpen}
        handleFormClose={handleFormClose}
      />
      <ProductsTable
        onDeleteProduct={handleDeleteProduct}
      />
    </>
  );
};
