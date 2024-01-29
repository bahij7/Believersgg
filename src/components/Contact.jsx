import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    object: 'Select the object',
    message: ''
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const [messageSent, setMessageSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rux111u', 'template_778gz83', form.current, 'DDsHvjBfRXdfz4inJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setMessageSent(true)

      setTimeout(()=>{
        setMessageSent(false);
      }, 5000)

      setData({
        name:'',
        email: '',
        phoneNumber: '',
        object: '',
        message: ''
    })

  
  };

  useEffect(() => {
    document.title = 'Believersgg - Contact';
    window.scrollTo(0, 0);
  }, []);



  return (
    <div> 
      <div className="no"><p>Switch to Mobile or Tablet Screen</p></div>
      <Navbar />

      <div className="contact-container">
        <h1>Let’s talk 👋</h1>
        <p>Fill this form carefully please.</p>
        {messageSent && <div className='message'><p>Sent Successfully ✅</p></div>}
        <div className="contact">

          <form ref={form} method="POST" onSubmit={sendEmail}>
            <div className="input-container">
              <span>FULL NAME</span>
              <input
                type="text"
                name="name"
                id="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Ahmed Bahij*"
                required
              />
            </div>

            <div className="input-container">
              <span>EMAIL</span>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
                placeholder="ahmedbahij@gmail.com*"
                required
              />
            </div>

            <div className="input-container">
              <span>PHONE NUMBER</span>
              <input
                type="tel"
                name="phoneNumber" 
                id="phone"
                placeholder="+212630711760"
              />
            </div>

            <div className="input-container">
              <span>OBJECT</span>
              <select required name="object" value={data.object} onChange={handleChange}>
              <option disabled>Select the object</option>
                <option value={'Collab'}>Collab</option>
                <option value={'Invitation'}>Special invitation</option>
                <option value={'Others'}>Others</option>
              </select>
            </div>

            <div className="input-container">
              <span>MESSAGE</span>
              <textarea
                placeholder="Your message goes here*"
                name="message"
                value={data.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit">Send</button>
            <button type="reset">Delete</button>
          </form>
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
