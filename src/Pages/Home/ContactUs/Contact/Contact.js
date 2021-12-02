import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Box>
        <Box sx={{textAlign:"center"}}>
          <Typography sx={{fontSize:".98rem", paddingBottom:"14px"}} variant="caption" display="block" gutterBottom>
          Feel free to contact me anytimes
        </Typography>
        <Typography sx={{fontSize:"2.8rem", fontWeight:"700", fontFamily:"'Poppins', sans-serif !important", letterSpacing:"-.25px"}} variant="h2" component="h2">
        Get in Touch
        </Typography>
          </Box>
          <Box>
            <ContactForm></ContactForm>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Contact;