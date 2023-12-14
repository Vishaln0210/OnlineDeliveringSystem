import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <div style={{ width: '100px', height: '50px', background: 'url(your-logo.png) no-repeat center/contain' }} />


        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ANYWEAR!
        </Typography>

        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
