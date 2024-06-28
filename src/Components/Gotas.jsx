import React, { useEffect, memo } from 'react';
import { Box, styled } from '@mui/material';

const Particle = styled('div')(({ size, top, left, delay, duration }) => ({
  position: 'absolute',
  top: `${top}%`,
  left: `${left}%`,
  width: `${size}px`,
  height: `${size}px`,
  backgroundColor: '#0000a9',
  borderRadius: '50%',
  opacity: 0,
  animation: `appear ${duration}s ${delay}s infinite`,
  animationTimingFunction: 'ease-in-out',

  '@keyframes appear': {
    '0%': {
      opacity: 0,
      transform: 'scale(0)',
    },
    '50%': {
      opacity: 1,
      transform: 'scale(1)',
    },
    '100%': {
      opacity: 0,
      transform: 'scale(0)',
    },
  },
}));

const Particles = () => {
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 5 + 2,
  }));

  return (
    <Box position="absolute" width="100%" height="100%" overflow="hidden" pointerEvents="none">
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          size={particle.size}
          top={particle.top}
          left={particle.left}
          delay={particle.delay}
          duration={particle.duration}
        />
      ))}
    </Box>
  );
};

export default memo(Particles);
