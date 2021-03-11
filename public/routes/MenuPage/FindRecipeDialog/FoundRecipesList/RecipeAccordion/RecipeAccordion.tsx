import * as React from 'react';
import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { addRecipeSaga } from '../../../../../redux/modules/recipes/actions';
import { Recipe } from '../../../../../types/recipe';
import { IngredientsList } from '../../../MenuRecipesList/RecipeDetails/IngredientsList/IngredientsList';

interface RecipeAccordionProps {
  recipe: Recipe
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: 200,
    maxHeight: 200,
    marginBottom: 10,
  },
  instructions: {
    color: theme.palette.text.secondary,
  },
  button: {
    marginLeft: 32,
  },
}));

export const RecipeAccordion: FC<RecipeAccordionProps> = ({ recipe }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const addRecipeToMenu = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(addRecipeSaga(recipe));
  }, []);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className={classes.root}
      >
        <Grid container spacing={2}>
          <Grid item>
            <Grid item xs>
              <img className={classes.img} alt={`${recipe.title} image`} src={recipe.imagelink} />
            </Grid>
            <Grid item xs justify="center">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={(event) => addRecipeToMenu(event)}
              >
                Add to menu
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {recipe.title}
                </Typography>
                <IngredientsList ingredients={recipe.ingredients} spoonacular_id={recipe.spoonacular_id} />
                <Typography variant="body2" color="textSecondary">
                  Servings: {recipe.servings}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Cooking time: {recipe.readyInMinutes} minutes
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <div className={classes.instructions}>
          Instructions:
          <ol>
            {recipe.instructions.map((el, i) => <li key={`${recipe.spoonacular_id}_step_${i}`}>{el.description}</li>)}
          </ol>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
