import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import { ProductRaw } from './ProductRaw';

export const ProductsList = (props) => {
  const products = props.products;

  if (products.length) {
    const productsList = products.map((product) =>
      <ProductRaw product={product} key={product.id} onDeleteProduct={props.onDeleteProduct} />
    );

    return (
      <TableBody>
        {productsList}
      </TableBody>
    );
  }
  return (
    <TableBody></TableBody>
  );
}
