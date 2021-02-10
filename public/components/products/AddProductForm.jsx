import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [quantity, setQuantity] = React.useState(0);
  const [units, setUnits] = React.useState('');

  const resetForm = () => {
    setName('');
    setQuantity(0);
    setUnits('');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const addProduct = (event) => {
    event.preventDefault();
    handleClose();

    fetch('http://localhost:3001/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, quantity, units }),
    })
      .then(res => res.json())
      .then((data) => props.onAddProduct({ _id: data._id, name, quantity, units }))
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    setUnits(event.target.value);
  };

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon/>
      </Fab>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add product</DialogTitle>
        <form>
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
              defaultValue={name}
              onChange={(event) => {
                setName(event.target.value)
              }}
            />
            <TextField
              margin="dense"
              id="quantity"
              label="Quantity"
              type="number"
              defaultValue={quantity}
              onChange={(event) => {
                setQuantity(Number(event.target.value))
              }}
              fullWidth
            />
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Units</InputLabel>
              <Select
                labelId="units-select-label"
                id="units-select"
                value={units}
                onChange={handleChange}
              >
                <MenuItem value={'kg'}>kg</MenuItem>
                <MenuItem value={'g'}>g</MenuItem>
                <MenuItem value={'ml'}>ml</MenuItem>
                <MenuItem value={'l'}>l</MenuItem>
                <MenuItem value={'pcs'}>pcs</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type='submit' onClick={addProduct} color="primary">
              Add product
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
