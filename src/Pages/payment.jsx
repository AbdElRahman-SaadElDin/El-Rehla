import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './payment.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubscriptionForm = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const courseId = queryParams.get('courseId');

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number.length !== 16) {
      toast.error('Card number must be 16 digits.');
      return;
    }
    handlePayment();
  };

  const handlePayment = () => {
    const paymentUrl = "https://quality-touching-seahorse.ngrok-free.app/api/payment";
    const token = localStorage.getItem('token');

    axios.post(paymentUrl, {}, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'ngrok-skip-browser-warning': '69420',
      },
    })
    .then(res => {
      toast.success('Subscription successful!');
      setTimeout(() => {
        navigate(`/course-details/#${courseId}`); // Navigate back to the course details page
      }, 2000);
    })
    .catch(err => {
      console.error('Payment failed', err);
      toast.error('Payment failed. Please try again.');
    });
  }

  return (
    <div className="container">
      <ToastContainer />
      <h1 className="title">Subscribe in platform for a Year</h1>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={handleInputFocus}
          className="input"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={handleInputFocus}
          className="input"
        />
        <input
          type="tel"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={handleInputFocus}
          className="input"
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={handleInputFocus}
          className="input"
        />
        <input
          type="text"
          name="price"
          value="360 EGP"
          readOnly
          className="input input-readonly"
        />
        <div className='sub'>
          <button type="submit" className="button">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;
