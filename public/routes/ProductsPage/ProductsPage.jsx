import React, { useEffect, useState } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ProductsTable } from './ProductsTable/ProductsTable';
import { AddProductForm } from './AddProductForm/AddProductForm';

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [formOpen, setFormOpen] = useState(false);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

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

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
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
      <Fab color="primary" aria-label="add" onClick={handleFormOpen}>
        <AddIcon />
      </Fab>
      <AddProductForm
        onAddProduct={handleAddProduct}
        open={formOpen}
        handleFormClose={handleFormClose}
      />
      <ProductsTable
        products={products}
        onDeleteProduct={handleDeleteProduct}
      />
    </>
  );
};
