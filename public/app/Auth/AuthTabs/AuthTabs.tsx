import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { SignUpForm } from './SignUpForm/SignUpForm';
import { SignInForm } from './SignInForm/SignInForm';
import { TabPanel } from '../../../components/TabPanel/TabPanel';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: 'calc(100% - 60px)',
  },
});

export const AuthTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="Sign Up" />
        <Tab label="Sign In" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SignUpForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignInForm />
      </TabPanel>
    </Paper>
  );
};
