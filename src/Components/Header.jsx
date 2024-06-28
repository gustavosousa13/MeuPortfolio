// src/Components/Header.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Header = () => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(211, 203, 203, 0.6)', boxShadow: 'none', height: '60px' }}>
        <Toolbar sx={{ color: "black" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 10, mt: '30px' }}
          >
          </IconButton>
          <Typography ml={-7} variant="h5" component="div" sx={{ flexGrow: 1 }}>
            PORTFOLIO
          </Typography>
          <Box display={'flex'} gap={5}>
            <Button component={Link} to="/">Home</Button>
            <Button component={Link} to="/My-experience">My Experience</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
