import React from 'react';
import { useSelector } from 'react-redux';
import TableBody from '@material-ui/core/TableBody';
import { ProductRaw } from './ProductRaw/ProductRaw';

export const ProductsList = () => {
  const products = useSelector((state) => state.productsReducer.products);

  return (
    <TableBody>
      {products.map((product) => (
        <ProductRaw key={product.id} product={product} />
      ))}
    </TableBody>
  );
};
