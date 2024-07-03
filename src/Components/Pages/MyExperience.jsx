import { Typography, Box } from '@mui/material'
import React from 'react'
import MyStory from './MyStory'
import MySkills from './MySkills'

export default function MyExperience() {
  return (
    <Box marginBottom={20}>
        <Box>
            <MySkills/>
        </Box>
        <Box>
            <MyStory/>
        </Box>
      <Typography marginTop={15} fontSize={'60px'} fontWeight={500} marginLeft={7}> My experience</Typography>
      <Box>
        <Typography marginLeft={7} marginRight={35} marginTop={5} sx={{textIndent: '20px', fontSize:'24px'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam sint eligendi sit, nisi incidunt quisquam eveniet 
            aliquam quam aspernatur temporibus asperiores est modi necessitatibus. Perspiciatis illum ratione impedit ipsam.</Typography>
      </Box>
      <Box>
        <MyContact/>
      </Box>
    </Box>
  )
}
