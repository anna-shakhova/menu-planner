import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export const ProductRaw = (props) => {
  const product = props.product;
  // const [state, setState] = React.useState();
  //
  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <TableRow>
      {/*<TableCell>*/}
      {/*  <FormControlLabel*/}
      {/*    control={*/}
      {/*      <Checkbox*/}
      {/*        onChange={handleChange}*/}
      {/*        name="checkedB"*/}
      {/*        color="primary"*/}
      {/*      />*/}
      {/*    }*/}
      {/*  />*/}
      {/*</TableCell>*/}
      <TableCell align="left">{product.name}</TableCell>
      <TableCell align="center">{product.quantity}</TableCell>
      <TableCell align="center">{product.units}</TableCell>
      <TableCell align="right">
        <IconButton>
          <EditIcon />
        </IconButton>
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={() => props.onDeleteProduct(product.id)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
