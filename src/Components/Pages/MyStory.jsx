// src/Components/NewPage.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const MyStory = () => {
  return (
    <Box padding={3} marginRight={20} marginLeft={7} >
      <Typography sx={{marginTop:15, fontSize:'60px', fontWeight:500}}>My story</Typography>
      <Typography sx={{ fontSize: '24px' }}>
  <Box sx={{ textIndent: '20px', marginTop:5}}>
    I am a junior frontend developer passionate about creating intuitive and efficient interfaces. I have significant experience with React.js and am currently deepening my knowledge in React Native through a specialized course. In recent months, I have dedicated myself entirely to my personal projects in React.js and my internship at Slingui, located in Curitiba, Brazil.
  </Box>
  <Box sx={{ textIndent: '20px', marginTop: '16px' }}>
    During this period, I refined my technical skills and gained practical understanding 
    of how to develop robust and scalable web solutions. I am always looking for new challenges that
     allow me to grow professionally and contribute significantly to dynamic and innovative development teams. 
     I am eager to learn more and seek opportunities that will enable me to grow and further develop in the field.
  </Box>
</Typography>
    </Box>
  );
};

export default MyStory;
