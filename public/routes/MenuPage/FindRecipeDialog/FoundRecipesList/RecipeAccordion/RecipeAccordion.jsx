/**
 * TODO сделать единый компонент ингредиентов и инструкций для информации в меню и в поиске?
 * Не все данные могут присутствовать (например, количество ингредиентов)
 * Стили: с паддигами и без?
 */

import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

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
    backgroundColor: theme.palette.success.main,
    marginLeft: 16,
  },
}));

export const RecipeAccordion = (props) => {
  const classes = useStyles();
  const { recipe } = props;

  const addRecipeToMenu = (event) => {
    event.stopPropagation();

    fetch('http://localhost:3001/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    })
      .then(() => props.onRecipeChoose(recipe))
      .catch((err) => console.log(err));
  };

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
            <Grid item xs>
              <FormControlLabel
                onClick={(event) => addRecipeToMenu(event)}
                onFocus={(event) => event.stopPropagation()}
                control={(
                  <Button variant="contained" className={classes.button}>
                    Add to menu
                  </Button>
                )}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {recipe.title}
                </Typography>
                <div>
                  Ingredients:
                  <ul className="ingredients-list">
                    {recipe.ingredients.map((el, i) => <li key={`${recipe.spoonacular_id}_${i}`}>{el.name}</li>)}
                  </ul>
                </div>
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
