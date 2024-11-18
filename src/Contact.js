import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (could be logging or API call)
    console.log('Form submitted:', formData);

    // Show an alert
    alert('Thank you for your message! We will contact you shortly via email.');

    // Clear the form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
      <br></br>
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Whether you’re interested in adopting, volunteering, or simply want to learn more about what we do, please reach out.</p>
        <p><strong>Email:</strong> petheaven@gmail.com</p>
        <p><strong>Phone:</strong> +65 6248 9746</p>
        <p><strong>Address:</strong> 461 Clementi Rd, Singapore 599491</p>
      </div>

      <div className="contact-form">

        <h3>Enquire Now</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your enquiry"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
