import * as React from 'react';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import { DialogTitleWithCross } from '../../../components/DialogTitleWithCross/DialogTitleWithCross';
import { FindRecipeForm } from './FindRecipeForm/FindRecipeForm';
import { FoundRecipesList } from './FoundRecipesList/FoundRecipesList';
import { clearFoundRecipesSaga } from '../../../redux/modules/recipes/actions';

interface FindRecipeDialogProps {
  handleClose: () => void,
}

export const FindRecipeDialog: FC<FindRecipeDialogProps> = ({ handleClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearFoundRecipesSaga());
    };
  }, []);

  return (
    <Dialog open={true} fullWidth maxWidth="lg">
      <DialogTitleWithCross title="Find recipes" onClose={handleClose} />
      <DialogContent>
        <DialogContentText>
          Fill the fields to find recipes.
        </DialogContentText>
        <FindRecipeForm />
        <FoundRecipesList />
      </DialogContent>
      <DialogActions />
    </Dialog>
  );
};
