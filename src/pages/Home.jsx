// src/pages/Home.jsx
import React from 'react';
import '../assets/css/Home.css';
import Navbar from '../components/Navbar';

// Import your background image
import image from '../assets/images/image.png';

const Home = () => {
  return (
    <div>
    <Navbar />
    
    <div className='main'style={{ backgroundImage: `url(${image})` }}>
      
      <div className="content-container">
        <h1>Welcome to the RECHARGE APP</h1>
        
        {/* Button Component */}
        <button className="cta-button">Get Started</button>

        {/* Card Component */}
        <div className="card">
          <h2>Special Offer</h2>
          <p>Save 20% on your first recharge!</p>
        </div>

        {/* List Component */}
        <ul className="feature-list">
          <li>Easy and quick recharge process</li>
          <li>Secure payment options</li>
          <li>24/7 customer support</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Home;
