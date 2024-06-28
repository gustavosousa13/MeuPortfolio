import { Box, Typography } from '@mui/material'
import { Button } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
   <Box sx={{ height:'60vh'}}>
<Box sx={{marginLeft:10}}>
    <Typography  fontSize={'24px'}>Interested in working together? </Typography>
</Box>
<Box>
<Button
      variant='contained'
      sx={{
        marginLeft: 10,
        marginTop: 1,
        backgroundColor: 'black',
        '&:hover': {
          backgroundColor: 'blue',
        },
      }}
    >
      Get in touch
    </Button> 
</Box>

   </Box>
  )
}
