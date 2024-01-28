// src/components/Header.tsx
import React from 'react';
import { Navbar, Nav,} from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom';
import './Header.css';
import Hero from './Hero.tsx';

const Header: React.FC = () => {
  const location=useLocation();
  return (
    <header>
      
      <Navbar className="custom-navbar" bg="" expand="lg">
      <Navbar.Brand href="#"></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/About">About us</Nav.Link>
          <Nav.Link as={Link} to="/Services">Services</Nav.Link>
          <Nav.Link as={Link} to="/Properties">Properties</Nav.Link>
          <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          
          {/*<NavDropdown title="Dropdown link" id="navbarDropdownMenuLink">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
  </NavDropdown>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {/*Render Hero component only on home page*/}
    {location.pathname === '/' && <Hero />}
    

    
    
    </header>
  );
};

export default Header;
