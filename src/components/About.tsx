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
                <img src="/src/apartment-complex.jpg" alt="an image showing an apartment complex" className="background-img"/>
            </div>
            <div className="column">
                <h1>Vision</h1>
                <p>To pursue unique business and investment
                  opportunities globally with profitable returns to our shareholders</p>
                <h1 style = {{marginTop:'20px'}}>Mission</h1>
                <p>To be the catalyst for financial success by providing innovative investment solutions and fostering sustainable partnerships.</p>
                <h1 style={{marginTop:'20px'}}>Core Values</h1>
                <div className="bullet-list">
                    <ul>
                        <li>Integrity: Upholding the highest ethical standards in all our dealings.</li>
                        <li>Innovation: Embracing creativity and forward-thinking for constant improvement.</li>
                        <li>Client-Centricity: Prioritizing the success and satisfaction of our clients.</li>
                        <li>Collaboration: Fostering strong partnerships and teamwork for mutual success.</li>
                        <li>Resilience: Adapting to change and overcoming challenges with resilience.</li>
                    </ul>
                </div>
                
            </div>


        </div>
        <div className="lower">
            <div className="description">
                <h1>Founding Directors</h1>
                <p>Trufrends Investment Limited was founded by three dynamic individuals with extensive experience and a shared vision for success.</p>
            </div>
            <div className="avatar-container">
                <div className="avatar-info">
                 <img src="/src/avatar-image.png" alt="Avatar" className="avatar" />
                 <div className="info">
                    <h4>David Nyaga</h4>
                    <i>With a background in property development, David brings valuable insights into real estate strategies.</i>
                 </div>
                </div>
                <div className="avatar-info">
                 <img src="/src/p1.png" alt="Avatar1" className="avatar" />
                 <div className="info">
                    <h4>Tiberius Nyangau</h4>
                    <i>A seasoned expert in business solutions, Tiberius is instrumental in the company's operational efficiency.</i>
                 </div>
                </div>
                <div className="avatar-info">
                 <img src="/src/p1.png" alt="Avatar1" className="avatar" />
                 <div className="info">
                    <h4>Lucky Kambale</h4>
                    <i>Specializing in short-term property rentals, Lucky adds a unique perspective to our diverse portfolio.</i>
                 </div>
                </div>
            </div>
            

            
        </div>

      </div>
    );
};
export default About;