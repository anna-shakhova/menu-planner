import React, { useState } from 'react';
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
      fullWidth
      maxWidth="lg"
    >
      <DialogTitleWithCross title="Find recipes" onClose={onClose} />
      <DialogContent>
        <DialogContentText>
          Fill the fields to find recipes.
        </DialogContentText>
        <FindRecipeForm className={classes.form} onFindRecipes={onFindRecipes} />
        <FoundRecipesList recipes={recipes} onRecipeChoose={onRecipeChoose} />
      </DialogContent>
      <DialogActions />
    </Dialog>
  );
};
