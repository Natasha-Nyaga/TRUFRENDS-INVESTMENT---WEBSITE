// src/components/Header.tsx
import React, {useEffect} from 'react';
import { Navbar, Nav,} from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom';
import './Header.css';
import Hero from './Hero.tsx';


const Header: React.FC = () => {
  const location=useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.custom-navbar');
      if (navbar) {
        const scrollPosition = window.scrollY || window.pageYOffset;
        let threshold = 400; // threshold for larger screens

        //Adjust threshold for smaller screen
      if (window.innerWidth < 768) { // Example threshold for screens less than 768px wide
        threshold = 10; // Change this value to your desired threshold for smaller screens
      }

        if (scrollPosition > threshold) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () =>{
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      
      <Navbar expand="lg" className="custom-navbar navbar navbar-expand-lg">
      <Navbar.Brand>
       {/*<img src = {logo} alt="logo" className="logo-img" />*/}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Nav.Link>
          <Nav.Link as={Link} to="/About"className={location.pathname === '/About' ? 'active-link' : ''}>About us</Nav.Link>
          <Nav.Link as={Link} to="/Services"className={location.pathname === '/Services' ? 'active-link' : ''}>Services</Nav.Link>
          {/*<Nav.Link as={Link} to="/Properties">Properties</Nav.Link>*/}
          <Nav.Link as={Link} to="/Contact"className={location.pathname === '/Contact' ? 'active-link' : ''}>Contact Us</Nav.Link>
          
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
