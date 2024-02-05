import React from 'react';
import './Services.css';

const Services = () =>{
    return(
        <div className="services">
            <div className="top">
                <div className="top-content">
                <h1>Sectors of Operation</h1>
                <p>Trufrends Investment Limited operates in four key sectors, each contributing to our comprehensive and diverse portfolio.</p>
                </div>
            </div>
            <div className="main">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                          <img src="/src/developer.png" alt="property-development" className="image-icon"/>
                            <div className="main-text">
                                <h4>Property Development and Sale</h4>
                                <p>Trufrends Investment Limited is actively involved in the development and sale of properties, aiming to transform spaces into thriving communities. Our focus is on creating sustainable and aesthetically pleasing environments that enhance the quality of life for our clients.</p>
                                <h5>Key Projects:</h5>
                                <p>*List the key projects here!</p>
                                <h5>Future Plans:</h5>
                                <div className="bullet-list">
                                    <ul>
                                        <li>Expansion into new geographical areas</li>
                                        <li>Intergration of sustainable and eco-friendly practices</li>
                                    </ul>
                                </div>
                            
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                          <img src="/src/solutions.png" alt="business-solutions" className="image-icon"/>
                            <div className="main-text">
                                <h4>Business Solutions</h4>
                                <p>Our business solutions sector is dedicated to providing comprehensive solutions to businesses across various industries. We focus on optimizing processes and enhancing efficiency to support our clients' growth.</p>
                                <h5>Key Offerings:</h5>
                                <div className="bullet-list">
                                    <ul>
                                        <li>Business Process Optimization</li>
                                        <li>Technology Intergration</li>
                                        <li>Strategic Consulting</li>
                                    </ul>
                                </div>
                                
                                <h5>Future Plans:</h5>
                                <div className="bullet-list">
                                    <ul>
                                        <li>Introduction of innovative solutions</li>
                                        <li>Expansion of consulting services</li>
                                    </ul>
                                </div>
                            
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                          <img src="/src/investment.png" alt="Rentals" className="image-icon"/>
                            <div className="main-text">
                                <h4>Short-Term Property Rentals</h4>
                                <p>Trufrends Investment Limited is a key player in the short-term property rental market. Leveraging our expertise, we provide high-quality, temporary housing solutions for both business and leisure travelers.</p>
                                <h5>Key Offerings:</h5>
                                <div className="bullet-list">
                                    <ul>
                                        <li>Furnished Apartments</li>
                                        <li>Vacation Homes</li>
                                        <li>Corporate Housing</li>
                                    </ul>

                                </div>
                                <h5>Future Plans:</h5>
                                <div className="bullet-list">
                                    <ul>
                                        <li>Expanding our property portfolio in high-demand locations</li>
                                        <li>Implementing advanced booking and customer service technologies</li>
                                    </ul>
                                </div>
                            
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                          <img src="/src/supplies.png" alt="supplies" className="image-icon"/>
                            <div className="main-text">
                                <h4>Supplies and Procurement</h4>
                                <p>In the Supplies and Procurement sector, Trufrends Investment Limited is committed to delivering reliable and efficient procurement solutions. We specialize in sourcing quality supplies for businesses across various industries, ensuring seamless operations.</p>
                                <h5>Key Offerings:</h5>
                                <div className="bullet-list">
                                    <ul>
                                      <li>Procurement Services</li>
                                      <li>Supply Chain Management</li>
                                      <li>Vendor Relationship Management</li>  
                                    </ul>
                                </div>
                                <h5>Future Plans:</h5>
                                <div className="bullet-list">
                                    <ul>
                                        <li>Diversification of procurement services</li>
                                        <li>Expansion of supplier network</li>
                                    </ul>
                                </div>
                            
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Services;