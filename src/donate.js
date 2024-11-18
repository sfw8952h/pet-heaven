// src/Donate.js
import React, { useState } from 'react';
import './donate.css';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleDonateClick = (amount) => {
    setDonationAmount(amount);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Donation Successful!');
    // Here you would handle the donation submission (e.g., process payment)
  };

  return (
    <div className="donate-container">
      <h1>Support Us</h1>
      <div className="donation-options">
        <h2>Select Donation Amount</h2>
        <div className="amount-buttons">
          <button className="donate-amount" onClick={() => handleDonateClick(10)}>
            $10
          </button>
          <button className="donate-amount" onClick={() => handleDonateClick(20)}>
            $20
          </button>
          <button className="donate-amount" onClick={() => handleDonateClick(50)}>
            $50
          </button>
          <button className="donate-amount" onClick={() => handleDonateClick(100)}>
            $100
          </button>
          <input
            type="number"
            placeholder="Other Amount"
            value={donationAmount === '' ? '' : donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            className="other-amount"
          />
        </div>
      </div>

      <div className="donate-form">
        <h3>Enter Your Details</h3>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={userDetails.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label>Expiration Date</label>
            <input
              type="text"
              name="expirationDate"
              value={userDetails.expirationDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              value={userDetails.cvv}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit">Donate Now</button>
        </form>
      </div>
    </div>
  );
};

export default Donate;
