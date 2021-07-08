import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} >
          <Tab label="About Me" onClick={() => history.push("/")} {...a11yProps(0)} />
          <Tab label="Experience" onClick={() => history.push("/experience")} {...a11yProps(1)} />
          <Tab label="Education" onClick={() => history.push("/education")} {...a11yProps(2)} />
          <Tab label="Projects" onClick={() => history.push("/projects")} {...a11yProps(3)} />
          <Tab label="Contact Me" onClick={() => history.push("/contact")} {...a11yProps(4)}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}/>
      <TabPanel value={value} index={1}/>
      <TabPanel value={value} index={2}/>
      <TabPanel value={value} index={3}/>
      <TabPanel value={value} index={4}/>
    </div>
  );
}