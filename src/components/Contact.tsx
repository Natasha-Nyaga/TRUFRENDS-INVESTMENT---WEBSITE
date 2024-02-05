import React, {useState} from 'react';
import './Contact.css';

const Contact = () =>{
    //State to store form data
    const[formData, setFormData] = useState({
        name: '',
        email:'',
        message:'',

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
        
       //Now TypeScript knows that 'name', 'email', 'message' are accessible
    //Function to handle input changes
      console.log('Form Data:',{
        name: target.name.value,
        email: target.email.value,
        message: target.message.value,
      });
      //Reset the form data and set the submission status 
      setFormData({name: '', email: '', message: ''});
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
                    <i className="bi bi-telephone-fill">    +254741409682</i>
                </div>
                <div className="right">
                    <h1>Contact Form</h1>
                    <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>

            <button type="submit">Submit</button>  
                    </form>
                   
                </div>
                
            </div>
        </div>

    );
};
export default Contact;