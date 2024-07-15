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
        <Typography marginLeft={7} marginRight={35} marginTop={5} sx={{textIndent: '20px', fontSize:'24px'}}> 
        I am a professional transitioning my career with a degree in Business Administration from the Federal University of Pernambuco, where I successfully practiced my profession for a period. Currently, I am seeking new challenges in front-end development, a field I have always been passionate about since I passed entrance exams for three federal universities in Computer Science, although I opted to study Business Administration at that time.

        <br />
        <Box style={{ textIndent: '20px'}}>I began my career transition in 2023, focusing primarily on React, and I have honed my skills in JavaScript and TypeScript. Presently, I am interning at two companies: Slingui (unpaid) since January 2024 and SizeUp since May 2024. Throughout this period, I have had the opportunity to deepen my knowledge in the field and tackle real-world challenges.

I am determined to become a valued professional in the market and am committed to continuous learning and growth. I am seeking an opportunity to demonstrate my potential and make significant contributions in a challenging environment.
</Box>
        </Typography>
      </Box>
    </Box>
  )
}
