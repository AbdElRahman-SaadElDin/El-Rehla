import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './payment.css';

const SubscriptionForm = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  const navigate = useNavigate();

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      alert('Subscription successful!');
      navigate(-1); // Navigate to the previous page
    })
    .catch(err => {
      console.error('Payment failed', err);
      alert('Payment failed. Please try again.');
    });
  }

  return (
    <div className="container">
      <h2 className="title">Subscribe for a Year</h2>
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
        <button type="submit" className="button" onClick={handlePayment}>Continue</button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;