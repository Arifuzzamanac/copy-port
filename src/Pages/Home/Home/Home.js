import { Box } from '@mui/system';
import React from 'react';
import About from '../About/About/About';
import Services from '../About/Services/Services';
import Banner from '../Banner/Banner';
import Contact from '../ContactUs/Contact/Contact';
import MenuBar from '../MenuBar/MenuBar';
import Portfolio from '../Portfolio/Portfolio/Portfolio';

const Home = () => {
  return (
    <section>
      <Box>
        <MenuBar></MenuBar>
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </Box>
    </section>
  );
};

export default Home;