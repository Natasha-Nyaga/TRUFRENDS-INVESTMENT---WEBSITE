import React from 'react';
import {Container} from 'react-bootstrap';
import './Properties.css';

const Properties = () =>{
    return(
      <>
      <div className="top-title">
      <div className="title">
        <h1>Browse our properties</h1>
        <p>Explore our exclusive listings and find the perfect property for your lifestyle and investment goals.</p>
      </div> 
      </div>
        <Container>
          
          <div className='listing-one'>
            <div className='left-listing'>
                <div className='video-container'>
                <video width='100%' controls>
                    <source src="/karen-land.mp4" type="video/mp4" />
                    Your browser does not support the video tag
                </video>
                </div>
            </div>
          <div className='right-listing'>
            <h2>5 acre land in Karen</h2>
            <p><strong>Price: </strong>Ksh. 43 million per acre</p>
            <p><strong>Location: </strong>Karen near KEPHIS</p>
            <p><strong>Total Price: </strong>Ksh. 215 million</p>
          </div>
          </div>
          
          <div className='listing-two'>
                <div className='left-listing'>
                    <img src='/lavington-house.jpg' alt='an image of a 4 bedroom house in lavington' className='house-image'/>
                </div>
                 <div className='right-listing'>
                 <h2>4 bedroom house</h2>
                 <p><strong>Location: </strong>Lavington</p>
                 <p><strong>Size: </strong>0.0160ha</p>
                 <p><strong>Features: </strong>Master ensuite with SQ (Servant Quarters)</p>
                 <p><strong>Price: </strong>Ksh. 32 million</p>
                 </div>
              </div>
        </Container>
        </>
    )

};
export default Properties;