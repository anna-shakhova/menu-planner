import React from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { ShoppingListRaw } from './ShoppingListRaw/ShoppingListRaw';

export const AisleAccordion = (props) => {
  const { ingredientAisle } = props;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography variant="subtitle1">
          {ingredientAisle[0].aisle}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ingredient</TableCell>
                <TableCell align="center" width="150">Quantity</TableCell>
                <TableCell align="center" width="150">Units</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ingredientAisle.map((ingredient, i) => (
                <ShoppingListRaw ingredient={ingredient} key={`${ingredientAisle}_ingr_${i}`} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};
