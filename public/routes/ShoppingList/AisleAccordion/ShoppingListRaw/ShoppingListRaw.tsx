import * as React from 'react';
import { FC } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { Ingredient } from '../../../../types/shoppingList';

interface ShoppingListRawProps {
  ingredient: Ingredient
}

export const ShoppingListRaw: FC<ShoppingListRawProps> = ({ ingredient }) => {
  return (
    <TableRow key={ingredient.name}>
      <TableCell align="left">{ingredient.name}</TableCell>
      <TableCell align="center">{ingredient.metricAmount}</TableCell>
      <TableCell align="center">{ingredient.metricUnits}</TableCell>
    </TableRow>
  );
};
