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
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <a href="https://www.facebook.com/profile.php?id=61552851504220&mibextid=ZbWKwL" target="_blank" style={{marginRight: '20px'}}>
                <i className="bi bi-facebook"></i>
                </a>
                <a href="tel:+254741409682">
                <i className="bi bi-telephone-fill"></i>
                </a>
                </div>
                </Col>
                
            </Row>
           
        </Container>
    )
}
export default MyFooter;
