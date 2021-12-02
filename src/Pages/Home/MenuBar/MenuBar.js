import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MenuBar.css';


const MenuBar = () => {
  return (
    <header>
      <Navbar fixed="top" className="navBg" collapseOnSelect expand="lg" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Programmer Sajeeb</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto"></Nav>
    <Nav>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link eventKey={2} href="#services"> Services </Nav.Link>
      <Nav.Link eventKey={3} href="#portfolio"> Portfolio </Nav.Link>
      <Nav.Link eventKey={4} href="https://drive.google.com/u/6/uc?id=149SRnsbrDn97hJAD5SlWlRTamJYEjgZL&export=download"> Resume </Nav.Link>
      <Nav.Link eventKey={5} href="#contact"> Contact </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>    
    </header>
  );
};

export default MenuBar;