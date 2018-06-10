import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const  NavBar = () => (
  <div>
    <AppBar position="static" color= "inherit">
      <Toolbar>
         <IconButton color="inherit" aria-label="Menu">
           <MenuIcon />
         </IconButton>
         <Typography variant="title" color="inherit">
           PixaBay API Image Finder
         </Typography>
       </Toolbar>
      </AppBar>
  </div>
);

export default NavBar;
