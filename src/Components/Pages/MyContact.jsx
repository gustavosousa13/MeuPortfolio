import { Typography, Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function MyContact() {
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSending, setIsSending] = useState(false);
  const maxChars = 400;

  const handleChangeMessage = (event) => {
    if (event.target.value.length <= maxChars) {
      setMessage(event.target.value);
    }
  };

  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };

  const handleSendEmail = async () => {
    setIsSending(true);
    try {
      const response = await fetch('/MeuPortfolio/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: subject,
          body: message,
        }),
      });

      if (response.ok) {
        setFeedback('Email enviado com sucesso!');
        setMessage('');
        setSubject('');
      } else {
        const errorText = await response.text();
        setFeedback(`Erro ao enviar o email: ${errorText}`);
      }
    } catch (error) {
      console.error('Erro ao enviar o email:', error);
      setFeedback('Erro ao enviar o email. Verifique sua conexão com a internet.');
    } finally {
      setIsSending(false);
      setTimeout(() => setFeedback(''), 5000); // Limpa a mensagem de feedback após 5 segundos
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
        <Button sx={{ fontSize: '18px', marginLeft: -1 }}>GitHub</Button>
        <Button sx={{ fontSize: '18px' }}>LinkedIn</Button>
      </Box>
      <Box sx={{ marginTop: 5 }}>
        <Typography fontSize={'24px'}>Subject</Typography>
        <TextField
          variant="outlined"
          placeholder="Type the subject here..."
          value={subject}
          onChange={handleChangeSubject}
          fullWidth
          sx={{
            width: '800px',
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
            onChange={handleChangeMessage}
            fullWidth
            inputProps={{ maxLength: maxChars }}
            sx={{
              width: '800px',
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
          onClick={handleSendEmail}
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Send'}
        </Button>
        {feedback && (
          <Typography
            sx={{ marginTop: 2, color: feedback.includes('sucesso') ? 'green' : 'red' }}
          >
            {feedback}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
