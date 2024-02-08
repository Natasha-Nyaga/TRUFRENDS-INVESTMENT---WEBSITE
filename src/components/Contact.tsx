import React, {useState} from 'react';
import useWeb3Forms from "@web3forms/react";
import './Contact.css';

const Contact = () =>{
    //State to store form data
    const[formData, setFormData] = useState({
        name: '',
        email:'',
        message:'',

    });

    const[successMessage, setSuccessMessage] = useState('');
    const[errorMessage, setErrorMessage] = useState('');

    const { submit } = useWeb3Forms({
      access_key: "44360b6f-7d00-4030-9031-d0514e3f8068",
      

      onSuccess: (msg ) => {
        console.log("Form submission successful:", msg);
        setFormData({ name: "", email:"", message:""});
        setSuccessMessage("Message submitted successfully!");
        setErrorMessage("");

      },
      onError: (msg) =>{
        console.log("Form submission error:", msg);
        setErrorMessage("Error submitting message! Please try again");
        setSuccessMessage("");
      },

    });

    //Function to handle form submission
    const handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault();



        //Explicitly specify the type of the event target
        const target = event.target as typeof event.target & {
            name: {value: string};
            email: {value: string};
            message: {value: string};

        };

        const data = {
          name: target.name.value,
          email: target.email.value,
          message: target.message.value,
        };

        console.log("Form Data:", data);

        submit(data); // submit the form data using Web3Forms
      };
        
       
      
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value} = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value}));
    };
    return(
        <div className="contact-form">
            <div className="contact-container">
                <div className="left">
                    <h1>Get in touch with us</h1>
                    <i className="bi bi-envelope-fill">    info@trufrendsinvestment.co.ke</i><br />
                    <i className="bi bi-telephone-fill">    +254741409682</i><br />
                    <i className="bi bi-geo-alt-fill">    Vision Plaza, Mombasa Road, Ground Floor</i>
                </div>
                <div className="right">
                    <div className="right-content">
                    
                    <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label><br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            /><br />

            <label htmlFor="email">Email:</label><br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            /><br />

            <label htmlFor="message">Message:</label><br />
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea><br />

            <button type="submit">Send Message</button>  
                    </form>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                   
                
             </div>
             </div>
                
            </div>
        </div>

    );
};
export default Contact;