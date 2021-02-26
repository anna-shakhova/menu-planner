import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { PRODUCT_UNITS } from '../../../constants';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const AddProductForm = (props) => {
  const classes = useStyles();
  const { open, handleFormClose } = props;

  const [product, setProduct] = useState({
    name: '',
    quantity: 0,
    units: '',
  });

  const changeProduct = (field, value) => {
    setProduct({ ...product, [field]: value });
  };

  const addProduct = (event) => {
    event.preventDefault();
    props.handleFormClose();
    setProduct({
      name: '',
      quantity: 0,
      units: '',
    });

    fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => props.onAddProduct({ id: data.id, ...product }))
      .catch((err) => console.log(err));
  };

  return (
    <Dialog open={open} onClose={handleFormClose}>
      <DialogTitle id="form-dialog-title">Add product</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill the fields to add new product into storage.
        </DialogContentText>

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          defaultValue={product.name}
          onChange={(event) => changeProduct('name', event.target.value)}
        />
        <TextField
          margin="dense"
          id="quantity"
          label="Quantity"
          type="number"
          defaultValue={product.quantity}
          onChange={(event) => changeProduct('quantity', event.target.value)}
          fullWidth
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Units</InputLabel>
          <Select
            labelId="units-select-label"
            id="units-select"
            value={product.units}
            onChange={(event) => changeProduct('units', event.target.value)}
          >
            {PRODUCT_UNITS.map((unit) => <MenuItem value={unit} key={unit}>{unit}</MenuItem>)}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFormClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" onClick={addProduct} color="primary">
          Add product
        </Button>
      </DialogActions>
    </Dialog>
  );
};
