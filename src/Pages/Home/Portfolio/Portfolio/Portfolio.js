import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Projects from '../Projects/Projects';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Box sx={{margin:"80px 0"}}>
          <Box sx={{textAlign:"center"}}>
          <Typography sx={{fontSize:".98rem", paddingBottom:"14px"}} variant="caption" display="block" gutterBottom>
          Showcasing some of my best work
        </Typography>
        <Typography sx={{fontSize:"2.8rem", fontWeight:"700", fontFamily:"'Poppins', sans-serif !important", letterSpacing:"-.25px"}} variant="h2" component="h2">
        Portfolio
        </Typography>
          </Box>
          <Box>
          <Projects></Projects>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Portfolio;