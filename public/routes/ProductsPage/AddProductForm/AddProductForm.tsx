import * as React from 'react';
import { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { addProductSaga } from '../../../redux/modules/products/actions';
import { PRODUCT_UNITS } from '../../../constants';
import { CustomSelect } from '../../../components/CustomSelect/CustomSelect';

interface AddProductFormProps {
  handleFormClose: () => void,
}

const initialProduct = {
  name: '',
  amount: 0,
  units: '',
};

export const AddProductForm: FC<AddProductFormProps> = ({ handleFormClose }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(initialProduct);

  const changeProduct = useCallback((field: string, value: string) => {
    setProduct((state) => ({ ...state, [field]: value }));
  }, [product]);

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
          onChange={(event) => changeProduct('name', event.target.value.toLowerCase())}
        />
        <TextField
          margin="dense"
          id="amount"
          label="Amount"
          type="number"
          defaultValue={product.amount}
          onChange={(event) => changeProduct('amount', event.target.value)}
          fullWidth
        />
        <CustomSelect
          label="Units"
          value={product.units}
          fieldName="units"
          onChange={changeProduct}
          menuItems={PRODUCT_UNITS}
        />
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
