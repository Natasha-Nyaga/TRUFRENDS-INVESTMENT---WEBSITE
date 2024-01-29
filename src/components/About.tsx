import React from 'react';
import './About.css';

const About = () => {
    return(
        <div className="about-us">
        <div className="upper">
            <div className="upper-content">
            <h1>Company Overview</h1>
            <p>Founded by a team of visionary leaders, Trufrends Investment Limited has quickly risen as a trusted name in the investment sector. Our strategic approach and commitment to client success have been the driving forces behind our growth. At the core of our operations is a dedication to fostering financial growth and creating long-lasting relationships.</p>
            </div>
        </div>
        <div className="middle">
            <div className="column">
                <div className="overlay"></div>
                <img src="/src/aboutimg1.jpg" alt="about-one" className="background-img"/>
            </div>
            <div className="column">
                <h1>Mission</h1>
                <p>To be the catalyst for financial success by providing innovative investment solutions and fostering sustainable partnerships.</p>
                <h1 style={{marginTop:'30px'}}>Core Values</h1>
                <p>Integrity: Upholding the highest ethical standards in all our dealings.</p><br />
                <p>Innovation: Embracing creativity and forward-thinking for constant improvement.</p><br />
                <p>Client-Centricity: Prioritizing the success and satisfaction of our clients.</p><br />
                <p>Collaboration: Fostering strong partnerships and teamwork for mutual success.</p><br />
                <p>Resilience: Adapting to change and overcoming challenges with resilience.</p>
                
            </div>


        </div>

      </div>
    );
};
export default About;