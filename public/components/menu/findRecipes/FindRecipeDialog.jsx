import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles';

import { DialogTitleWithCross } from '../../common/DialogTitleWithCross';
import { FindRecipeForm } from './FindRecipeForm';
import { FoundRecipesList } from './FoundRecipesList';


const useStyles = makeStyles((theme) => ({
  DialogContent: {
    minHeight: 180,
  },
}));

export const FindRecipeDialog = (props) => {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);
  const { open, onRecipeChoose, onClose } = props;

  const onFindRecipes = (arr) => {
    setRecipes(arr);
  };

  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth="lg"
    >
      <DialogTitleWithCross title="Find recipes" onClose={onClose} />
      <DialogContent className={classes.DialogContent}>
        <DialogContentText>
          Fill the fields to find recipes.
        </DialogContentText>
        <FindRecipeForm onFindRecipes={onFindRecipes} />
      </DialogContent>
      <FoundRecipesList recipes={recipes} onRecipeChoose={onRecipeChoose} />
      <DialogActions />
    </Dialog>
  );
};
