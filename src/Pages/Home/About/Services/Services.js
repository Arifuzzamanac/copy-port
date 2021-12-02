import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Service from '../Service/Service';

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Box>
        <Typography sx={{fontSize:".98rem", paddingBottom:"14px"}} variant="caption" display="block" gutterBottom>
        Services I offer to my clients
        </Typography>
        <Typography sx={{fontSize:"2.8rem", fontWeight:"700", fontFamily:"'Poppins', sans-serif !important", letterSpacing:"-.25px"}} variant="h2" component="h2">
        My Services
        </Typography>
        <Box>
          <Service></Service>
        </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Services;