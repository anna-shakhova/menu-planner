import React from 'react';
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
  },
});

export const ProductsTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ingredient</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Units</TableCell>
            <TableCell align="right" width="50" />
            <TableCell align="right" width="50" />
          </TableRow>
        </TableHead>
        <ProductsList />
      </Table>
    </TableContainer>
  );
};
