import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { ProductsList } from './ProductsList/ProductsList';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 700,
    margin: 'auto',
  },
});

export const ProductsTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ingredient</TableCell>
            <TableCell align="center" width="75">Amount</TableCell>
            <TableCell align="center" width="75">Units</TableCell>
            <TableCell align="right" width="50" />
          </TableRow>
        </TableHead>
        <ProductsList />
      </Table>
    </TableContainer>
  );
};
