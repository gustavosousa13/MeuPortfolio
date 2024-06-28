import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Box, Typography, ThemeProvider } from '@mui/material';
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import theme from './theme';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ScrollReveal from 'scrollreveal';
import Particles from './Components/Gotas';
import MySkills from './Components/Pages/MySkills';
import MyExperience from './Components/Pages/MyExperience';

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const maxScrollHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollTop / maxScrollHeight;
    setScrollPosition(scrollPercentage * 100);
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 2000,
      delay: 150,
      reset: false,
    });

    sr.reveal('.reveal', { interval: 300 });

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box className='principal'>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Box position="relative" marginTop={15} marginLeft={7}>
                  <Box>
                    <Particles />
                  </Box>
                  <Box className='reveal' sx={{ marginTop: 25 }}>
                    <Typography variant='h5' component='h1' color='primary'>
                      Hey, I'm Gustavo
                    </Typography>
                    <Typography fontSize={'60px'} fontWeight={500} lineHeight={1}>
                      FRONT<span style={{ color: '#0000a9' }}>END</span> DEVELOPER
                    </Typography>
                    <Typography variant='h5' component='h1' color='primary'>
                      I'm a frontend developer based in Curitiba, Brazil, <br /> I'll
                      help you build beautiful websites.
                    </Typography>
                    <Typography display={'flex'} gap={2} marginTop={3}>
                      <Link to="https://github.com/gustavosousa13">
                        <GitHubIcon
                          sx={{ color: 'black', fontSize: 30, '&:hover': { color: 'blue', cursor: 'pointer' } }}
                        />
                      </Link>
                      <Link to="https://www.linkedin.com/in/luisgustavosto/">
                        <LinkedInIcon
                          sx={{ color: 'black', fontSize: 30, '&:hover': { color: 'blue', cursor: 'pointer' } }}
                        />
                      </Link>
                      <Link to="https://instagram.com/gustavo.rrt">
                        <InstagramIcon
                          sx={{ color: 'black', fontSize: 30, '&:hover': { color: 'blue', cursor: 'pointer' } }}
                        />
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              }
            />
            <Route path="/my-skills" element={<MySkills />} />
            <Route path="/my-experience" element={<MyExperience />} />
          </Routes>
          
          <Box
            sx={{
              position: 'fixed',
              top: 50,
              left: 10, 
              height: '100%',
              width: '5px', 
              backgroundColor: 'blue',
              borderRadius: '5px',
              transform: `translateY(${scrollPosition}%)`, 
            }}
          />
          <Box className='reveal'>
            <Gallery />
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
