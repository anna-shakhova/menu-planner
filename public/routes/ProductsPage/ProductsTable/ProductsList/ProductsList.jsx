import React from 'react';
import { useSelector } from 'react-redux';
import TableBody from '@material-ui/core/TableBody';
import { ProductRaw } from './ProductRaw/ProductRaw';

export const ProductsList = (props) => {
  const products = useSelector((state) => state.productsReducer.products);

  const { onDeleteProduct } = props;

  return (
    <TableBody>
      {products.map((product) => (
        <ProductRaw key={product.id} product={product} onDeleteProduct={onDeleteProduct} />
      ))}
    </TableBody>
  );
};
