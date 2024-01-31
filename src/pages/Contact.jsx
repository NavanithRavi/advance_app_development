// components/ContactPage.jsx
import React, { useState } from 'react';
import "../assets/css/Contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // For now, we'll just set 'submitted' to true
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      {submitted ? (
        <div className="submission-success">
          <p>Thank you for reaching out, {formData.name}!</p>
          <p>We'll get back to you soon.</p>
        </div>
      ) : (
        <>
          <p>Feel free to send us a message using the form below:</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactPage;
