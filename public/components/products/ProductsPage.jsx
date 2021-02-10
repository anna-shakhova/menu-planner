import React, { useEffect, useState } from 'react';
import { ProductsTable } from './ProductsTable.jsx';
import { AddProductForm } from './AddProductForm.jsx';

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  }

  useEffect(() => {
    fetch('http://localhost:3001/product')
      .then(res => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err))
  }, []);

  return (
    <div>
      <AddProductForm onAddProduct={handleAddProduct}></AddProductForm>
      <ProductsTable products={products}/>
    </div>
  );
};
