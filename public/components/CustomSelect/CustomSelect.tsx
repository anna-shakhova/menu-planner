import * as React from 'react';
import { FC, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

interface CustomSelectProps {
  label: string,
  value: string,
  fieldName: string,
  onChange: (fieldName: string, value: string) => void,
  menuItems: string[],
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const CustomSelect: FC<CustomSelectProps> = (props) => {
  const classes = useStyles();
  const { label, value, fieldName, onChange, menuItems } = props;

  const handleChange = useCallback((event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    onChange(fieldName, event.target.value as string);
  }, [fieldName]);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>{label}</InputLabel>
      <Select
        id={`${fieldName}-select`}
        value={value}
        onChange={handleChange}
      >
        {menuItems.map((item, i) =>
          <MenuItem key={fieldName + i} value={item}>{item}</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};
