import React from 'react';
import {Container} from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return(
       <Container fluid>
    
        <div className="home-container">
            <div className="achievements">
                <div className="achievements-left">
                    <h2>Achievements & Milestones</h2>
                </div>
                <div className="achievements-right">
                    <p>Trufrends Investment Limited takes pride in its achievements and milestones, which reflect our commitment to excellence and client satisfaction.</p>
                </div>
            </div>    
                <div className="future">
                    <div className="future-left">
                        <h2>Future Outlook</h2>
                    </div>
                    <div className="future-right">
                        <p>Looking ahead, Trufrends Investment Limited is poised for continuous growth and success. Our strategic initiatives and commitment to innovation position us as a driving force in the ever-evolving investment landscape.</p>
                    </div>
                </div>
            
        </div>
       </Container>

    );
};
export default Home;