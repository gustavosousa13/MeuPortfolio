import { Typography, Box, ListItem, List } from '@mui/material'
import React from 'react'

export default function MySkills() {
  return (
    <>
      <Box>
        <Typography marginTop={10} fontSize={'42px'} marginLeft={15}>My Skills</Typography>
        <Typography fontSize={'32px'} marginLeft={15}>Frontend</Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', marginTop: '30px', marginLeft:15 }}>
        
        <Box>
          <Typography fontSize={'32px'}>Experienced</Typography>
          <List sx={{ fontSize: '24px', columnCount: 1,  }}>
            <ListItem>HTML5</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>ReactJS</ListItem>
            <ListItem>Responsive Web Design</ListItem>
            <ListItem>Git</ListItem>
            <ListItem>Bootstrap</ListItem>
            <ListItem>Material UI</ListItem>
            <ListItem>Ant design</ListItem>
            <ListItem>NodeJS</ListItem>
            <ListItem>Figma</ListItem>
          </List>
        </Box>

        <Box>
          <Typography fontSize={'32px'}>Intermediate Level</Typography>
          <List sx={{ fontSize: '24px' }}>
            <ListItem>React Native</ListItem>
            <ListItem>Tailwind CSS</ListItem>
            <ListItem>Vitest</ListItem>
            <ListItem>Cypress</ListItem>
            <ListItem>SEO</ListItem>
            <ListItem>NextJS</ListItem>
          </List>
        </Box>
      </Box>
    </>
  )
}
