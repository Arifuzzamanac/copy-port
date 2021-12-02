import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Service = () => {
  return (
    <Box sx={{ width: '100%', margin: "50px 0" }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box sx={{ backgroundColor: "#161616", borderBottom: "2px solid transparent", boxShadow: "0 6px 16px rgb(0 0 0 / 20%)", padding: "38px 42px", transition: "all .15s ease-in-out" }}>
            <Box>
              <i style={{ color: "white", fontSize: "3.5rem", display: "inline-block", marginBottom: "22px" }} class="fab fa-html5"></i>
            </Box>
            <Box>
              <Typography sx={{ color: 'white', fontSize: "1.3rem", fontWeight: "500", letterSpacing: "-.5px", marginBottom: "14px", fontFamily: "'Poppins', sans-serif !important" }} variant="h2" component="h2">
                HTML
              </Typography>
              <Typography sx={{ color: 'white', fontFamily: "'Poppins', sans-serif !important" }} variant="body1" gutterBottom>
                Expert on HTML5 and html element. High level experience.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ backgroundColor: "#161616", borderBottom: "2px solid transparent", boxShadow: "0 6px 16px rgb(0 0 0 / 20%)", padding: "38px 42px", transition: "all .15s ease-in-out" }}>
            <Box>
              <i style={{ color: "white", fontSize: "3.5rem", display: "inline-block", marginBottom: "22px" }} class="fab fa-css3-alt"></i>
            </Box>
            <Box>
              <Typography sx={{ color: 'white', fontSize: "1.3rem", fontWeight: "500", letterSpacing: "-.5px", marginBottom: "14px", fontFamily: "'Poppins', sans-serif !important" }} variant="h2" component="h2">
                CSS
              </Typography>
              <Typography sx={{ color: 'white', fontFamily: "'Poppins', sans-serif !important" }} variant="body1" gutterBottom>
                Expert on css and css vanila style . High level experience.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ backgroundColor: "#161616", borderBottom: "2px solid transparent", boxShadow: "0 6px 16px rgb(0 0 0 / 20%)", padding: "38px 42px", transition: "all .15s ease-in-out" }}>
            <Box>
              <i style={{ color: "white", fontSize: "3.5rem", display: "inline-block", marginBottom: "22px" }} class="fab fa-js"></i>
            </Box>
            <Box>
              <Typography sx={{ color: 'white', fontSize: "1.3rem", fontWeight: "500", letterSpacing: "-.5px", marginBottom: "14px", fontFamily: "'Poppins', sans-serif !important" }} variant="h2" component="h2">
                Javascript
              </Typography>
              <Typography sx={{ color: 'white', fontFamily: "'Poppins', sans-serif !important" }} variant="body1" gutterBottom>
                Expert on Javascript. High level experience.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ backgroundColor: "#161616", borderBottom: "2px solid transparent", boxShadow: "0 6px 16px rgb(0 0 0 / 20%)", padding: "38px 42px", transition: "all .15s ease-in-out" }}>
            <Box>
              <i style={{ color: "white", fontSize: "3.5rem", display: "inline-block", marginBottom: "22px" }} class="fab fa-react"></i>
            </Box>
            <Box>
              <Typography sx={{ color: 'white', fontSize: "1.3rem", fontWeight: "500", letterSpacing: "-.5px", marginBottom: "14px", fontFamily: "'Poppins', sans-serif !important" }} variant="h2" component="h2">
                React Js
              </Typography>
              <Typography sx={{ color: 'white', fontFamily: "'Poppins', sans-serif !important" }} variant="body1" gutterBottom>
                Expert on HTML5 and html element. High level experience.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ backgroundColor: "#161616", borderBottom: "2px solid transparent", boxShadow: "0 6px 16px rgb(0 0 0 / 20%)", padding: "38px 42px", transition: "all .15s ease-in-out" }}>
            <Box>
              <i style={{ color: "white", fontSize: "3.5rem", display: "inline-block", marginBottom: "22px" }} class="fab fa-bootstrap"></i>
            </Box>
            <Box>
              <Typography sx={{ color: 'white', fontSize: "1.3rem", fontWeight: "500", letterSpacing: "-.5px", marginBottom: "14px", fontFamily: "'Poppins', sans-serif !important" }} variant="h2" component="h2">
                Bootstrap
              </Typography>
              <Typography sx={{ color: 'white', fontFamily: "'Poppins', sans-serif !important" }} variant="body1" gutterBottom>
                Expert on HTML5 and html element. High level experience.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ backgroundColor: "#161616", borderBottom: "2px solid transparent", boxShadow: "0 6px 16px rgb(0 0 0 / 20%)", padding: "38px 42px", transition: "all .15s ease-in-out" }}>
            <Box>
              <i style={{ color: "white", fontSize: "3.5rem", display: "inline-block", marginBottom: "22px" }} class="fab fa-java"></i>
            </Box>
            <Box>
              <Typography sx={{ color: 'white', fontSize: "1.3rem", fontWeight: "500", letterSpacing: "-.5px", marginBottom: "14px", fontFamily: "'Poppins', sans-serif !important" }} variant="h2" component="h2">
                Java
              </Typography>
              <Typography sx={{ color: 'white', fontFamily: "'Poppins', sans-serif !important" }} variant="body1" gutterBottom>
                Expert on java and html element. High level experience.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Service;