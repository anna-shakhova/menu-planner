import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export const ProductRaw = (props) => {
  const { product, onDeleteProduct } = props;

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
        <IconButton onClick={() => onDeleteProduct(product.id)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
