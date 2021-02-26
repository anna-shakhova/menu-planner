import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const CustomSelect = (props) => {
  const classes = useStyles();
  const { label, value, fieldName, onChange, menuItems } = props;

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>{label}</InputLabel>
      <Select
        id={`${fieldName}-select`}
        value={value}
        onChange={(event) => onChange(fieldName, event.target.value)}
      >
        {menuItems.map((item, i) =>
          <MenuItem key={fieldName + i} value={item}>{item}</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};
