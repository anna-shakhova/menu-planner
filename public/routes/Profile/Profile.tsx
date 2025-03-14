import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabPanel } from '../../components/TabPanel/TabPanel';
import { Intolerances } from './Intolerances/Intolerances';
import { Settings } from './Settings/Settings';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export const Profile = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
        <Tab label="Intolerances" />
        <Tab label="Settings" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Intolerances />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Settings />
      </TabPanel>
    </Paper>
  );
};
