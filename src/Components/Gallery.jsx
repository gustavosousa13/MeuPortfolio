import React, { useState } from 'react';
import { Box, Container, Typography, Divider, Button, Modal, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const GalleryContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '16px',
});

const ImageContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  gap: '10px',
  
});

const ImageBox = styled(Box)({
  flex: 1,
  overflow: 'hidden',
  marginLeft:'0px',
  '& img': {
    width: '60vw',
    height: 'auto',
    transition: 'transform 0.3s ease-in-out, filter 0.3s ease-in-out',
    filter: 'grayscale(100%)',
    
  },
  '&:hover img': {
    transform: 'scale(1.05)',
    filter: 'grayscale(0%)',
  },
});

const TextContainer = styled(Box)({
  flex: 0,
  padding: '40px',
  transform: 'translateX(-100px)',
});

const Title = styled(Typography)({
  fontWeight: '500',
  fontSize: '50px',
  whiteSpace: 'nowrap',
  fontFamily: 'kanit',
  lineHeight: 1,
  marginTop: '40px',
  letterSpacing:0,
  
});

const Subtitle = styled(Typography)({
  fontStyle: 'regular',
  fontFamily: 'Kanit',
  fontSize: '20px',
  color: 'grey',
  fontWeight: 300,
});

const HorizontalDivider = styled(Divider)({
  width: '50vw',
  height: '2px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  margin: '50px 0px 50px 230px',
 
});

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
});

const ModalContent = styled(Box)({
  width: '90%',
  height: '90%',
  backgroundColor: 'white',
  padding: '10px',
  position: 'relative',
  overflowY: 'auto',
  boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)', 
});

const Gallery = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container sx={{ mt: '60px' }}>
         
         <Typography className='reveal' variant='h2' component='h1' color='primary' fontWeight={500} marginLeft={0} marginTop={30} marginBottom={10} textDecoration={'underline'}>
          PROJECTS
        </Typography>
      
      <GalleryContainer marginTop={'0px'}>
        <ImageContainer>
          <ImageBox onClick={handleOpen}>
            <img src="assets/site_rapo_2.png" alt="Image 1" />
          </ImageBox>
          <TextContainer sx={{ mr: '-130px', paddingLeft: 7, paddingRight: 0 }}>
            <Title>RAPÓ CREATIVE</Title>
            <Subtitle paddingTop={2}>
            <FiberManualRecordIcon sx={{fontSize:'14px'}}/> Projeto realizado com React JS <br/><FiberManualRecordIcon sx={{fontSize:'14px'}}/> Ultilizando a biblioteca MUI
            </Subtitle>
            <Button
              sx={{
                color: 'black',
                fontSize: '20px',
                fontWeight: '500',
                border: 'none',
                borderRadius: '15px',
                padding: '0px',
                mt: '30px',
                backgroundColor: 'transparent',
                '&:hover': {
                  textDecoration: 'underline 4px',
                  backgroundColor: 'transparent', 
                },
                
              }}
            >
              Saiba mais
            </Button>
          </TextContainer>
        </ImageContainer>

        <HorizontalDivider />

        <StyledModal open={open} onClose={handleClose}>
          <ModalContent>
            <IconButton
              onClick={handleClose}
              sx={{ position: 'absolute', top: 10, right: 10 }}
            >
              <CloseIcon />
            </IconButton>
            <iframe
              src="https://gustavosousa13.github.io/Rapocreative/"
              title="Rapó Creative"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          </ModalContent>
        </StyledModal>
      </GalleryContainer>
    </Container>
  );
};

export default Gallery;
