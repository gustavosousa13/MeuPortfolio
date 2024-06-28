import { Typography, Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function MyContact() {
  const [message, setMessage] = useState('');
  const maxChars = 400;

  const handleChange = (event) => {
    if (event.target.value.length <= maxChars) {
      setMessage(event.target.value);
    }
  };

  return (
    <Box sx={{ marginTop: 15, marginLeft: 7 }}>
      <Box>
        <Typography fontSize={'60px'} fontWeight={500}>My Contact</Typography>
      </Box>
      <Box>
        <Typography fontSize={'24px'}>Luis Gustavo de Sousa Santos</Typography>
        <Typography fontSize={'24px'}>email: gustavosantos.rrt@gmail.com</Typography>
        <Button sx={{ fontSize: '18px', marginLeft:-1 }}>GitHub</Button>
        <Button sx={{ fontSize: '18px' }}>LinkedIn</Button>
      </Box>
      <Box sx={{ marginTop: 5 }}>
        <Typography fontSize={'24px'}>Message</Typography>
        <Box sx={{ position: 'relative' }}>
          <TextField
            multiline
            rows={4}
            variant="outlined"
            placeholder="Type your message here..."
            value={message}
            onChange={handleChange}
            fullWidth
            inputProps={{ maxLength: maxChars }}
            sx={{
              width:'800px',
                marginTop: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'gray',
                },
                '&:hover fieldset': {
                  borderColor: 'blue',
                },
              },
            }}
          />
          <Typography
            variant="caption"
            sx={{
              position: 'absolute',
              top: 20,
              left: 15,
              color: 'blue',
              fontSize: '12px',
            }}
          >
            {message.length}/{maxChars}
          </Typography>
        </Box>
        <Button
          sx={{
            marginTop: 3,
            backgroundColor: 'black',
            color: 'white',
            '&:hover': {
              backgroundColor: 'blue',
            },
            cursor: 'pointer',
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
