import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { HeaderRoutes } from "./routes";

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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const handleMenuOpen = () => {
    setOpen(!open);
  }

  return (
    <div className={classes.root}>
      {matches ?
        <>
          <Toolbar>
            <IconButton
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography>Learn More</Typography>
          </Toolbar>
          <Drawer
            open={open}
            anchor='left'
            onClick={handleMenuOpen}
          >
            <div>
              <IconButton onClick={handleMenuOpen}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <List>

            
          {HeaderRoutes.map((page) => {
            return (<ListItem button={true} onClick={() => history.push(page.route)} >{page.tabName}</ListItem>);
          })}
          </List>
          </Drawer>
        </>
        :
        <>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} >
              <Tab label="About Me" onClick={() => history.push("/")} {...a11yProps(0)} />
              {HeaderRoutes.map((page) => {
                return (<Tab label={page.tabName} onClick={() => history.push(page.route)} {...a11yProps(0)}/>);
              })}
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} />
          <TabPanel value={value} index={1} />
          <TabPanel value={value} index={2} />
          <TabPanel value={value} index={3} />
          <TabPanel value={value} index={4} />
        </>}
    </div>
  );
}