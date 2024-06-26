import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contactus.css';

const ContactUs = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_92p09j7'; // Replace with your EmailJS service ID
    const templateID = 'template_n1tukm4'; // Replace with your EmailJS template ID
    const userID = 'bwno4qIifSXEpzwq7'; // Replace with your EmailJS public key (user ID)

    const templateParams = {
      to_name: 'El Rehla', // Replace with the recipient's name
      from_name: form.fullName,
      message: form.message,
      subject: form.subject,
      email: form.email
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Email Sent', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setForm({ fullName: '', email: '', subject: '', message: '' });
      }, (error) => {
        console.log('FAILED...', error);
        toast.error('Failed to send email', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="contact-container">
      <ToastContainer />
      <h2 className="contact-title">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="fullName">Full Name:</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName" 
            className="form-input"
            value={form.fullName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="form-input"
            value={form.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="subject">Subject:</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            className="form-input"
            value={form.subject} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            className="form-textarea"
            value={form.message} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;