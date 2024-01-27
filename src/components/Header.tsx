// src/components/Header.tsx
import React from 'react';
import { Navbar, Nav,} from 'react-bootstrap';
import './Header.css';


const Header: React.FC = () => {
  return (
    <header>
      <div className = "main-container" id="content-container">
      <Navbar className="custom-navbar" bg="" expand="lg">
      <Navbar.Brand href="#"></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="ms-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About us</Nav.Link>
          <Nav.Link href="#">Services</Nav.Link>
          <Nav.Link href="#">Properties</Nav.Link>
          <Nav.Link href="#">Contact Us</Nav.Link>
          
          {/*<NavDropdown title="Dropdown link" id="navbarDropdownMenuLink">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
  </NavDropdown>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className ="dark-overlay"></div>

       <div className="home-container">
       <h1>Elevate Your Investments</h1><br />
       <p>
       <i> Empowering Growth, Ensuring Success</i></p><br />
       <p>Established in 2023, we're your partners in prosperity, committed to excellence, innovation, and ethical practices. Explore our diverse sectors, visionary directors, and transformative projects. Join us on a journey of financial success, where integrity, innovation, and client-centricity drive everything we do. Invest in tomorrow with Trufrends – where growth is not just a goal; it's a promise.<i/></p><br />
       </div>

    
    </div>
    </header>
  );
};

export default Header;
