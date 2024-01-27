import React from 'react';
import {Container} from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
    return(
       <Container fluid>
    
        
        <div className="hero-container">
            <div className="h1">
                <h1>Our Key Projects</h1>  
            </div>
            
            <div className="container">
                <div className="column">
                    <img src="/src/image1.jpg" alt="image1" width="350" height="350" />
                </div>
                <div className="column">
                    <p>The description for the image goes here!</p>
                </div>
            </div>
            <div className="container">
                <div className="column">
                    <img src="/src/image2.jpg" alt="image1" width="350" height="350" />
                </div>
                <div className="column">
                    <p>The description for the image goes here!</p>
                </div>
            </div> 
            <div className="container">
                <div className="column">
                    <img src="/src/image3.jpg" alt="image1" width="350" height="350" />
                </div>
                <div className="column">
                    <p>The description for the image goes here!</p>
                </div>
            </div> 
        </div>
       </Container>


    );
};
export default Hero;