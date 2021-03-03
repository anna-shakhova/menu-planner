import * as React from 'react';
import { useSelector } from 'react-redux';
import TableBody from '@material-ui/core/TableBody';
import { ProductRaw } from './ProductRaw/ProductRaw';
import { Product } from '../../../../types/product';

interface RootState {
  productsReducer: {
    products: Product[],
  }
}

export const ProductsList = () => {
  const products = useSelector((state: RootState) => state.productsReducer.products);

  return (
    <TableBody>
      {products.map((product) => (
        <ProductRaw key={product.id} product={product} />
      ))}
    </TableBody>
  );
};
