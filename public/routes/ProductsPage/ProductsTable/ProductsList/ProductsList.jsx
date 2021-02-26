import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import { ProductRaw } from './ProductRaw/ProductRaw';

export const ProductsList = (props) => {
  const { products, onDeleteProduct } = props;

  return (
    <TableBody>
      {products.map((product) => (
        <ProductRaw key={product.id} product={product} onDeleteProduct={onDeleteProduct} />
      ))}
    </TableBody>
  );
};
