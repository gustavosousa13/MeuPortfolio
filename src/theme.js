import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0a0d0b',
    },
    secondary: {
      main: '#9e9d95',
    },
  },
  typography: {
    fontFamily: 'kanit, sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
        },
      },
    },
  },
});

export default theme;
