import { Box } from '@mui/system';
import React from 'react';
import { Grid } from '@mui/material';

const Projects = () => {
  return (
    <Box sx={{ width: '100%', margin: "50px 0" }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', bgcolor: 'background.paper', overflow: 'hidden', borderRadius: '12px', boxShadow: 1, fontWeight: 'bold', backgroundColor: '#161616', boxShadow: '0 6px 16px rgb(0 0 0 / 20%)', }} >
            <Box component="img" sx={{ height: 233, width: 350, maxHeight: { xs: 233, md: 167 }, maxWidth: { xs: 350, md: 250 }, }} alt="The house from the offer." src="https://i.ibb.co/YL8yB9f/image.png" />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, m: 3, }} >
              <Box component="span" sx={{ color: 'white', fontSize: 22, mt: 1, fontFamily: "'Poppins', sans-serif !important" }}>
                Clock Shop
              </Box>
              <Box component="span" sx={{ color: 'white', fontSize: 14, fontFamily: "'Poppins', sans-serif !important" }}>
                E-commerce Website
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginTop: "15px" }}>
                <a style={{ display: "inline-block", backgroundColor: "#009e66", border: "1px solid #009e66", textDecoration: "none", color: "#FFFFFF", borderRadius: "30px", fontSize: ".75rem", padding: "2px 14px", marginRight: "10px" }} href="https://github.com/Arifuzzamanac/time-couont-client-side">Client</a>
                <a style={{ display: "inline-block", backgroundColor: "#009e66", border: "1px solid #009e66", textDecoration: "none", color: "#FFFFFF", borderRadius: "30px", fontSize: ".75rem", padding: "2px 14px", marginRight: "10px" }} href="https://github.com/Arifuzzamanac/time-count-server">Server</a>
                <a style={{ display: "inline-block", backgroundColor: "#009e66", border: "1px solid #009e66", textDecoration: "none", color: "#FFFFFF", borderRadius: "30px", fontSize: ".75rem", padding: "2px 14px", marginRight: "10px" }} href="https://time-count-eb5a0.web.app/">Live</a>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', bgcolor: 'background.paper', overflow: 'hidden', borderRadius: '12px', boxShadow: 1, fontWeight: 'bold', backgroundColor: '#161616', boxShadow: '0 6px 16px rgb(0 0 0 / 20%)', }} >
            <Box component="img" sx={{ height: 233, width: 350, maxHeight: { xs: 233, md: 167 }, maxWidth: { xs: 350, md: 250 }, }} alt="The house from the offer." src="https://i.ibb.co/kcDPmtS/image.png" />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, m: 3, }} >
              <Box component="span" sx={{ color: 'white', fontSize: 22, mt: 1, fontFamily: "'Poppins', sans-serif !important" }}>
                Sundarban Curier
              </Box>
              <Box component="span" sx={{ color: 'white', fontSize: 14, fontFamily: "'Poppins', sans-serif !important" }}>
                Courier Service Website
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginTop: "15px" }}>
                <a style={{ display: "inline-block", backgroundColor: "#009e66", border: "1px solid #009e66", textDecoration: "none", color: "#FFFFFF", borderRadius: "30px", fontSize: ".75rem", padding: "2px 14px", marginRight: "10px" }} href="https://github.com/Arifuzzamanac/Sundorban-courier-service">Client</a>
                <a style={{ display: "inline-block", backgroundColor: "#009e66", border: "1px solid #009e66", textDecoration: "none", color: "#FFFFFF", borderRadius: "30px", fontSize: ".75rem", padding: "2px 14px", marginRight: "10px" }} href="https://github.com/Arifuzzamanac/sundorban-curier-serveer-side">Server</a>
                <a style={{ display: "inline-block", backgroundColor: "#009e66", border: "1px solid #009e66", textDecoration: "none", color: "#FFFFFF", borderRadius: "30px", fontSize: ".75rem", padding: "2px 14px", marginRight: "10px" }} href="https://curier-service.web.app/home#home">Live</a>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', bgcolor: 'background.paper', overflow: 'hidden', borderRadius: '12px', boxShadow: 1, fontWeight: 'bold', backgroundColor: '#161616', boxShadow: '0 6px 16px rgb(0 0 0 / 20%)', }} >
            <Box component="img" sx={{ height: 233, width: 350, maxHeight: { xs: 233, md: 167 }, maxWidth: { xs: 350, md: 250 }, }} alt="The house from the offer." src="https://i.ibb.co/3RnQb0Z/image.png" />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, m: 3, }} >
              <Box component="span" sx={{ color: 'white', fontSize: 22, mt: 1, fontFamily: "'Poppins', sans-serif !important" }}>
                Update Care
              </Box>
              <Box component="span" sx={{ color: 'white', fontSize: 14, fontFamily: "'Poppins', sans-serif !important" }}>
                Medical College Website
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginTop: "15px" }}>
                <a style={{ display: "inline-block", backgroundColor: "#009e66", border: "1px solid #009e66", textDecoration: "none", color: "#FFFFFF", borderRadius: "30px", fontSize: ".75rem", padding: "2px 14px", marginRight: "10px" }} href="https://github.com/Arifuzzamanac/update-care-hospital">Client</a>
                <a style={{ display: "inline-block", backgroundColor: "#009e66", border: "1px solid #009e66", textDecoration: "none", color: "#FFFFFF", borderRadius: "30px", fontSize: ".75rem", padding: "2px 14px", marginRight: "10px" }} href="https://update-care.web.app/">Live</a>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;