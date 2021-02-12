import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { RecipeDetails } from './RecipeDetails';

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

export const RecipeCard = (props) => {
  const { recipe, onDelete } = props;
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <Button size="small" color="primary" onClick={handleClickOpen}>
          Details
        </Button>
{/*        <Button size="small" color="primary">
          Mark cooked
        </Button>*/}
        <Button size="small" color="secondary" onClick={() => onDelete(recipe.spoonacular_id)}>
          Delete
        </Button>
      </CardActions>

      <RecipeDetails open={open} onClose={handleClose} recipe={recipe} />
    </Card>
  );
};
