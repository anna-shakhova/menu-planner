import * as React from 'react';
import { FC } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

interface TabPanelProps {
  children: React.ReactNode;
  index: any;
  value: any;
}

export const TabPanel: FC<TabPanelProps> = ({ children, value, index }) => (
  <div hidden={value !== index}>
    {value === index && (
      <Box p={3}>
        <Typography component="div">{children}</Typography>
      </Box>
    )}
  </div>
);
