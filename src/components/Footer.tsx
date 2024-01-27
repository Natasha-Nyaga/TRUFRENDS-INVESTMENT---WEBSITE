import React from 'react';
import { Container, Row, Col,  } from 'react-bootstrap';
import './Footer.css';

const MyFooter = () =>{
    return(
        <Container fluid className='footer'>
            
            <Row className="justify-content-md-center">
                <Col>
                   
                   <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT US</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#properties">PROPERTIES</a></li>
                    <li><a href="#contact">CONTACT US</a></li>
                   </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                 <p>Copyright ©2024 </p>
                </Col>
            </Row>
            <Row>
                <Col>
                <i className="bi bi-facebook"></i>
                </Col>
            </Row>
           
        </Container>
    )
}
export default MyFooter;
