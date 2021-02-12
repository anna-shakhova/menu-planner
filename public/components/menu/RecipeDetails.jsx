import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { DialogTitleWithCross } from '../common/DialogTitleWithCross';

export const RecipeDetails = (props) => {
  const { open, onClose, recipe } = props;
  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth="lg"
    >
      <DialogTitleWithCross title={recipe.title} onClose={onClose} />
      <form>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item>
              <Grid item xs>
                <img alt={recipe.title + ' image'} src={recipe.imagelink} />
              </Grid>
            </Grid>
            <Grid item xs={8} sm>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <div>
                    Ingredients:
                    <ul className="ingredients-list">
                      {recipe.ingredients.map((el, i) =>
                        <li key={recipe.spoonacular_id + '_' + i}>
                          {el.name + ', ' + el.amount + ' ' + el.units}
                        </li>)}
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
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
          <DialogContentText>
            <div>
              Instructions:
              <ol>
                {recipe.instructions.map((el, i) => <li key={recipe.spoonacular_id + '_step_' + i}>{el.description}</li>)}
              </ol>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions />
      </form>
    </Dialog>
  );
};
