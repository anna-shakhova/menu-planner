import * as React from 'react';
import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import ListItemText from '@material-ui/core/ListItemText';
import GridList from '@material-ui/core/GridList';

import { Ingredient } from '../../../../../types/recipe';

interface IngredientsLisProps {
  ingredients: Ingredient[],
  spoonacular_id: number,
}

const useStyles = makeStyles((theme) => ({
  available: {
    color: theme.palette.success.main,
    minWidth: 40,
    fontSize: '2.3em',
  },
  unAvailable: {
    color: theme.palette.error.main,
    minWidth: 40,
    fontSize: '2.3em',
  },
}));

export const IngredientsList: FC<IngredientsLisProps> = ({ ingredients, spoonacular_id }) => {
  const classes = useStyles();

  return (
    <GridList cols={3} cellHeight="auto" spacing={2}>
      {ingredients.map((el, i) => (
        <ListItem key={`${spoonacular_id}_ingr_${i}`}>
          {el.isAvailable
            ? <ListItemIcon className={classes.available}><CheckCircleIcon fontSize="inherit" /></ListItemIcon>
            : <ListItemIcon className={classes.unAvailable}><RemoveCircleIcon fontSize="inherit" /></ListItemIcon>
          }
          <ListItemText primary={el.name} secondary={`${el.amount} ${el.units}`} />
        </ListItem>
      ))}
    </GridList>
  );
};
