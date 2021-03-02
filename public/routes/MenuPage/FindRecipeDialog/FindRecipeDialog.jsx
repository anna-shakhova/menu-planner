import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles';

import { DialogTitleWithCross } from '../../../components/DialogTitleWithCross/DialogTitleWithCross';
import { FindRecipeForm } from './FindRecipeForm/FindRecipeForm';
import { FoundRecipesList } from './FoundRecipesList/FoundRecipesList';

const useStyles = makeStyles({
  form: {
    minHeight: 180,
  },
});

export const FindRecipeDialog = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="lg"
    >
      <DialogTitleWithCross title="Find recipes" onClose={handleClose} />
      <DialogContent>
        <DialogContentText>
          Fill the fields to find recipes.
        </DialogContentText>
        <FindRecipeForm className={classes.form} />
        <FoundRecipesList />
      </DialogContent>
      <DialogActions />
    </Dialog>
  );
};
