import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import EnhancedTable from '../../components/table';
import BarChart from '../../components/BarChart'
import LineChart from '../../components/LineChart'
import Button from '../../components/button'
import {Link} from 'react-router-dom'
import axios from 'axios'
// import ChartManager from '../../components/graph_comp/ChartManager'

const drawerWidth = 240;

const getData = async() => {
  try {
    const request = await axios.get('/activitydetail')
    return request.data;
  } catch (error) {
    console.log(error);
  }
}

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, display : 'flex'}}
      >
        <Toolbar >
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard 
          </Typography>
          
        </Toolbar>
        
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List disablePadding>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary= "table" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary= "Graph" />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
        <Link to = '/'>
            <Button>Logout</Button>
          </Link>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, display : 'flex', flexDirection: 'column'}}
      >
        <Toolbar />
          <EnhancedTable/>
        <Box sx = {{ m: 3}}>
          <LineChart/>
        </Box>
        <BarChart/>
      </Box>
    </Box>
  );
}
