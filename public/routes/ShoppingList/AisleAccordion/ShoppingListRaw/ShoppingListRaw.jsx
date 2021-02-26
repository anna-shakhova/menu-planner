import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export const ShoppingListRaw = (props) => {
  const { ingredient } = props;

  return (
    <TableRow key={ingredient.name}>
      <TableCell align="left">{ingredient.name}</TableCell>
      <TableCell align="center">{ingredient.metricAmount}</TableCell>
      <TableCell align="center">{ingredient.metricUnits}</TableCell>
    </TableRow>
  );
};
