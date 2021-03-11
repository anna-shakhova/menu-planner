import * as React from 'react';
import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import { deleteProductSaga } from '../../../../../redux/modules/products/actions';
import { Product } from '../../../../../types/product';

const useStyles = makeStyles((theme) => ({
  deleteBtn: {
    color: theme.palette.secondary.dark,
  },
}));

interface ProductRawProps {
  product: Product
}

export const ProductRaw: FC<ProductRawProps> = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeleteProduct = useCallback(() => {
    dispatch(deleteProductSaga(product.id));
  }, []);

  return (
    <TableRow>
      <TableCell align="left">{product.name}</TableCell>
      <TableCell align="center">{product.metricAmount}</TableCell>
      <TableCell align="center">{product.metricUnits}</TableCell>
      <TableCell align="right">
        <IconButton onClick={handleDeleteProduct}>
          <DeleteOutlineIcon className={classes.deleteBtn} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
