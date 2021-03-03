import * as React from 'react';
import { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
/*import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';*/

import { addProductSaga } from '../../../redux/modules/products/actions';
import { PRODUCT_UNITS } from '../../../constants';
import { CustomSelect } from "../../../components/CustomSelect/CustomSelect";

interface AddProductFormProps {
  handleFormClose: () => void,
}

/*const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));*/

const initialProduct = {
  name: '',
  quantity: 0,
  units: '',
};

export const AddProductForm: FC<AddProductFormProps> = ({ handleFormClose }) => {
  const dispatch = useDispatch();
  // const classes = useStyles();

  const [product, setProduct] = useState(initialProduct);

  const changeProduct = useCallback((field: string, value: string) => {
    console.log(product)
    console.log(field, value)
    setProduct({ ...product, [field]: value });
  }, [product]);

  console.log(product)
  const addProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(addProductSaga(product));
    handleFormClose();
  };

  return (
    <Dialog open={true} onClose={handleFormClose}>
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
        <CustomSelect
          label="Units"
          value={product.units}
          fieldName="units"
          onChange={changeProduct}
          menuItems={PRODUCT_UNITS}
        />
{/*        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Units</InputLabel>
          <Select
            labelId="units-select-label"
            id="units-select"
            value={product.units}
            onChange={(event) => changeProduct('units', event.target.value)}
          >
            {PRODUCT_UNITS.map((unit) => <MenuItem value={unit} key={unit}>{unit}</MenuItem>)}
          </Select>
        </FormControl>*/}
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
