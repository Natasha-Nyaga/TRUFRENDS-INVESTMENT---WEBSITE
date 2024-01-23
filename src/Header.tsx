// src/components/Header.tsx
import React from 'react';
import { Navbar, Nav,} from 'react-bootstrap';
import './Header.css';


const Header: React.FC = () => {
  return (
    <Navbar className="custom-navbar" bg="" expand="lg">
      <Navbar.Brand href="#"></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      {/*<Navbar.Collapse id="navbarNavDropdown">*/}
        <Nav className="mr-auto">
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
     {/*} </Navbar.Collapse>*/}
    </Navbar>
    
  );
};

export default Header;
