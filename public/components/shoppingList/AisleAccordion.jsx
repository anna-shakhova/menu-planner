import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';

export const AisleAccordion = (props) => {
  const { ingredientAisle } = props;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
        id="additional-actions1-header"
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
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Units</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ingredientAisle.map((ingredient) =>
                <TableRow key={ingredient.name}>
                  <TableCell align="left">{ingredient.name}</TableCell>
                  <TableCell align="center">{ingredient.metricAmount}</TableCell>
                  <TableCell align="center">{ingredient.metricUnits}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};
