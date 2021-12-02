import { Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Banner.css';
import Typical from 'react-typical';

const Banner = () => {
  return (
    <section className="banner-area">
      <Box className="backgroundImg">
        <Box className="container">

          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ color: "#FFFFFF", fontSize: "3.5rem", fontFamily: "'Poppins', sans-serif !important", fontWeight: "700", lineHeight: "1.2", letterSpacing: "1px", marginBottom: "34px" }} variant="h2" component="h2">
              Programmer Arifuzzaman
            </Typography>
            <Typography sx={{ color: "#FFFFFF", fontSize: "1.98rem", fontFamily: "'Poppins', sans-serif !important", fontWeight: "400", lineHeight: "1.2", letterSpacing: "1.3px" }} variant="h4" component="h2">
              I'm a{' '}
              <Typical
                loop={Infinity}
                wrapper="n"
                steps={[
                  'Programmer',
                  2000,
                  'Fontend Developer',
                  2000,
                  'MERN Stact Developer',
                  2000,
                  'Web Designer',
                  2000,
                  'Web Developer',
                  2000,
                ]}
              />
            </Typography>
            <Button sx={{ marginTop: 5 }} variant="contained" href="https://drive.google.com/uc?id=1_F8t7i4Kp78uzQzR8Uc6VfLgtoE3G1LK&export=download">Resume</Button>
          </Box>
        </Box>
      </Box>
    </section >
  );
};

export default Banner;