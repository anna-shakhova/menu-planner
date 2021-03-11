import * as React from 'react';
import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import GridList from '@material-ui/core/GridList';
import { GridListTile } from '@material-ui/core';

const useStyles = makeStyles({
  group: {
    margin: '20px 0',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

interface CheckboxesGridProps {
  labels: string[],
  checkedLabels: string[],
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const CheckboxesGrid: FC<CheckboxesGridProps> = ({ labels, checkedLabels, handleChange }) => {
  const classes = useStyles();

  return (
    <FormGroup className={classes.group}>
      <GridList cols={4} cellHeight="auto" className={classes.list}>
        {labels.map((label) => (
          <GridListTile key={label}>
            <FormControlLabel
              control={(
                <Checkbox
                  onChange={handleChange}
                  name={label}
                  checked={checkedLabels.includes(label)}
                />
              )}
              label={label}
            />
          </GridListTile>
        ))}
      </GridList>
    </FormGroup>
  );
};
