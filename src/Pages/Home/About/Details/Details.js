import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Details.css';

const Details = () => {
  return (
    <Box sx={{ textAlign: "left", margin: "50px 0" }}>
      <Box className="about-section" sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, gridTemplateRows: 'auto', gridTemplateAreas: `"profile content content"` }} >
        <Box sx={{ gridArea: 'profile' }}><img style={{ width: "100%", height: "100%", objectFit: "contain" }} src="https://i.ibb.co/RPGpw6F/profile.jpg" alt="" /></Box>
        <Box sx={{ gridArea: 'content', padding: "10px 0" }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "bold", lineHeight: "1.6", marginBottom: "16px", fontFamily: "'Poppins', sans-serif !important" }} variant="h2" component="h2">
            I'm Md. Arifuzzaman Arif, a frontend web design and Developer
          </Typography>
          <Typography sx={{ borderBottom: "2px solid rgba(255,255,255,.08)", marginBottom: "0", paddingBottom: "29px", fontSize: "0.98rem", color: "white", fontWeight: "400", lineHeight: "1.95", fontFamily: "'Poppins', sans-serif !important" }} variant="body1" gutterBottom>
            I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, gridTemplateRows: 'auto', gridTemplateAreas: `"name contact"` }} >
            <Box sx={{ gridArea: 'name' }}>
              <Box className="singel-info">
                <h4 style={{ margin: "20px 0", color: 'white' }}>
                  Name:&nbsp;&nbsp;<span>Md. Arifuzzaman Arif</span>
                </h4>
              </Box>
              <Box className="singel-info">
                <h4 style={{ color: 'white' }}>
                  Age:&nbsp;&nbsp;<span>21</span>
                </h4>
              </Box>
            </Box>
            <Box sx={{ gridArea: 'contact' }}>
              <Box className="singel-info">
                <h4 style={{ margin: "20px 0", color: 'white' }}>
                  Email:&nbsp;&nbsp;<span>ac.arifuzzaman1@gmail.com</span>
                </h4>
              </Box>
              <Box className="singel-info">
                <h4 style={{ color: 'white' }}>
                  From:&nbsp;&nbsp;<span>Gangachara, Rangpur, Bangladesh</span>
                </h4>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexWrap: "wrap", marginTop: "20px" }}>
            <Box>
              <a style={{ backgroundColor: "#009e66", border: "1px solid #009e66", textDecoration: "none", color: "white", borderRadius: "30px", fontSize: ".95rem", padding: "10px 35px" }} href="https://drive.google.com/uc?id=1_F8t7i4Kp78uzQzR8Uc6VfLgtoE3G1LK&export=download">Resume</a>
            </Box>
            <Box sx={{ width: "45px", height: "2px", background: "#9f9f9f", margin: "0 5px 0 10px" }}></Box>
            <Box className="social-icon">
              <a style={{ margin: '2px' }} href="https://www.facebook.com/Mdarifuzzamanarif.ac/"><i class="fab fa-twitter"></i></a>
              <a style={{ margin: '2px' }} href="https://www.facebook.com/Mdarifuzzamanarif.ac/"><i class="fab fa-instagram"></i></a>
              <a style={{ margin: '2px' }} href="https://www.facebook.com/Mdarifuzzamanarif.ac/"><i class="fab fa-linkedin"></i></a>
              <a style={{ margin: '2px' }} href="https://www.facebook.com/Mdarifuzzamanarif.ac/"><i class="fab fa-github"></i></a>
              <a style={{ margin: '2px' }} href="https://www.facebook.com/Mdarifuzzamanarif.ac/"><i class="fab fa-facebook-square"></i></a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;