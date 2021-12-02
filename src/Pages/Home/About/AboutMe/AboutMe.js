import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Details from '../Details/Details';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section>
      <Container>
        <Box className="about-area">
        <Typography sx={{fontSize:".98rem", paddingBottom:"14px"}} variant="caption" display="block" gutterBottom>
          Get to know me
        </Typography>
        <Typography sx={{fontSize:"2.8rem", fontWeight:"700", fontFamily:"'Poppins', sans-serif !important", letterSpacing:"-.25px"}} variant="h2" component="h2">
          About Me
        </Typography>
        <Box>
          <Details></Details>
        </Box>
        </Box>
      </Container>
    </section>
  );
};

export default AboutMe;