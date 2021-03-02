import React from 'react';
import { useDispatch } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteProductSaga } from '../../../../../redux/modules/products/actions';

export const ProductRaw = ({ product }) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(deleteProductSaga(product.id));
  };

  return (
    <TableRow>
      <TableCell align="left">{product.name}</TableCell>
      <TableCell align="center">{product.quantity}</TableCell>
      <TableCell align="center">{product.units}</TableCell>
      <TableCell align="right">
        <IconButton>
          <EditIcon />
        </IconButton>
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={handleDeleteProduct}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
