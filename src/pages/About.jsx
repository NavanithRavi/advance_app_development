import React from "react";
import '../assets/css/About.css';




function About() {
  return (
    <div className="about">
      <br></br>
      <h1>About Us</h1>
      <h3>Welcome to Mobile Recharge Portal, your one-stop solution for easy and convenient mobile recharging.</h3>
      <div className="aboutcon">
        
        <div className="aboutcontainer">
          <h2>Our Mission</h2>
          <p>At Mobile Recharge Portal, we aim to simplify the process of mobile recharging by providing a user-friendly platform. Our mission is to offer quick and secure recharge services for all mobile networks.</p>

          <h2>What We Offer</h2>
          <p>Explore the features of our portal:</p>
          <ul>
            <li><strong>Fast Recharge:</strong> Instantly recharge your mobile phone with just a few clicks.</li>
            <li><strong>Secure Transactions:</strong> Your transactions are safe and secure, ensuring the privacy of your information.</li>
            <li><strong>Prepaid and Postpaid:</strong> Recharge options for both prepaid and postpaid mobile connections.</li>
            <li><strong>Special Offers:</strong> Enjoy exclusive offers, discounts, and cashback on recharges.</li>
          </ul>

          <h2>Why Choose Us</h2>
          <p>Choose Mobile Recharge Portal for:</p>
          <ul>
            <li><strong>Convenience:</strong> Recharge anytime, anywhere, and from any device.</li>
            <li><strong>Reliability:</strong> Count on us for secure and reliable mobile recharging services.</li>
            <li><strong>Customer Support:</strong> Our dedicated support team is ready to assist you with any concerns.</li>
          </ul>
        </div>
      </div>
     
    </div>
  );
}

export default About;
