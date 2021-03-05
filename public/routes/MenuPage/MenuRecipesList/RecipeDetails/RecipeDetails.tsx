import * as React from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import { DialogTitleWithCross } from '../../../../components/DialogTitleWithCross/DialogTitleWithCross';
import { Recipe } from '../../../../types/recipe';
import { IngredientsList } from './IngredientsList/IngredientsList';

interface RecipeDetailsProps {
  spoonacular_id: number,
  onClose: () => void,
}

interface RootState {
  recipesReducer: {
    recipes: Recipe[],
  }
}

const useStyles = makeStyles((theme) => ({
  instructions: {
    paddingTop: 10,
    color: theme.palette.text.primary,
  },
  primary: {
    color: '#ffffff',
    backgroundColor: theme.palette.primary.light,
  },
}));

export const RecipeDetails: FC<RecipeDetailsProps> = ({ spoonacular_id, onClose }) => {
  const recipe = useSelector((state: RootState) =>
    state.recipesReducer.recipes.find((el) => el.spoonacular_id === spoonacular_id));
  const classes = useStyles();

  if (recipe) return (
    <Dialog open={true} fullWidth maxWidth="lg">
      <DialogTitleWithCross title={recipe.title} onClose={onClose} />
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item>
            <Grid item>
              <img alt={`${recipe.title}`} src={recipe.imagelink} />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">
                Servings: {recipe.servings}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Cooking time: {recipe.readyInMinutes} minutes
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              Ingredients
            </Typography>
            <IngredientsList ingredients={recipe.ingredients} spoonacular_id={recipe.spoonacular_id} />
          </Grid>
        </Grid>
        <Divider />
        <DialogContentText component="div" className={classes.instructions}>
          Instructions
          <List>
            {recipe.instructions.map((el, i) => (
              <ListItem key={`${recipe.spoonacular_id}_step_${i}`}>
                <ListItemIcon>
                  <Avatar className={classes.primary}>{i + 1}</Avatar>
                </ListItemIcon>
                <ListItemText primary={el.description} />
              </ListItem>
            ))}
          </List>
        </DialogContentText>
      </DialogContent>
      <DialogActions />
    </Dialog>
  );

  return null;
};
