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
import { Recipe } from "../../../../types/recipe";

interface RecipeCardProps {
  recipe: Recipe,
  handleClickOpen: (recipe: Recipe) => void,
}

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  title: {
    height: 60,
  },
  media: {
    height: 150,
  },
});

export const RecipeCard: FC<RecipeCardProps> = ({ recipe, handleClickOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeleteRecipe = useCallback(() => {
    dispatch(deleteRecipeSaga(recipe.spoonacular_id));
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleClickOpen(recipe)}>
          Details
        </Button>
        <Button size="small" color="primary">
          Mark cooked
        </Button>
        <Button size="small" color="secondary" onClick={handleDeleteRecipe}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
