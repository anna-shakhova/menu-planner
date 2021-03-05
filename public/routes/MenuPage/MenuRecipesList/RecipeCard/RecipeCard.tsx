import * as React from 'react';
import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { deleteRecipeSaga } from '../../../../redux/modules/recipes/actions';
import { Recipe } from '../../../../types/recipe';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

interface RecipeCardProps {
  recipe: Recipe,
  handleClickOpen: (spoonacular_id: number) => void,
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  title: {
    height: 60,
  },
  media: {
    height: 150,
  },
  check: {
    display: 'flex',
  },
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

export const RecipeCard: FC<RecipeCardProps> = ({ recipe, handleClickOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeleteRecipe = useCallback((cooked: boolean) => {
    dispatch(deleteRecipeSaga({
      spoonacular_id: recipe.spoonacular_id,
      cooked,
    }));
  }, []);

  const handleOpenRecipe = useCallback(() => {
    handleClickOpen(recipe.spoonacular_id);
  }, []);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={recipe.imagelink}
          title={recipe.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h5" className={classes.title}>
            {recipe.title}
          </Typography>
          <List className={classes.check}>
            <ListItem>
              <ListItemIcon className={classes.available}><CheckCircleIcon fontSize="inherit" /></ListItemIcon>
              <ListItemText primary={recipe.ingredients.filter((el) => el.isAvailable).length} />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.unAvailable}><RemoveCircleIcon fontSize="inherit" /></ListItemIcon>
              <ListItemText primary={recipe.ingredients.filter((el) => !el.isAvailable).length} />
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpenRecipe}>
          Details
        </Button>
        <Button size="small" color="primary" onClick={() => handleDeleteRecipe(true)}>
          Mark cooked
        </Button>
        <Button size="small" color="secondary" onClick={() => handleDeleteRecipe(false)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
