import * as React from 'react';
import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { SignInForm } from './SignInForm/SignInForm';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: 'calc(100% - 60px)',
  },
});

interface TabPanelProps {
  children: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel: FC<TabPanelProps> = ({ children, value, index }) => (
  <div hidden={value !== index}>
    {value === index && (
      <Box p={3}>
        <Typography component="div">{children}</Typography>
      </Box>
    )}
  </div>
);

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
