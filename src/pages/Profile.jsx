// UserProfile.js
import React, { useState } from 'react';
import '../assets/css/Profile.css';// Import the new CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = () => {
  const [isEditing, setEditing] = useState(false);
  const [userName, setUserName] = useState('John Doe');
  const [mobileNumber, setMobileNumber] = useState('123-456-7890');
  const [email, setEmail] = useState('john.doe@example.com');
  const [rechargeAmount, setRechargeAmount] = useState('');

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Add logic to save the updated user data to your backend or state
    setEditing(false);
  };

  const handleCancelClick = () => {
    // Handle cancel editing
    setEditing(false);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRechargeAmountChange = (e) => {
    setRechargeAmount(e.target.value);
  };

  return (
    <div className="profile-card">
      <h2>User Profile</h2>
      {isEditing ? (
        <div>
          <label>
            Name:
            <input type="text" value={userName} onChange={handleNameChange} />
          </label>
          <label>
            Mobile Number:
            <input type="tel" value={mobileNumber} onChange={handleMobileNumberChange} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Recharge Amount:
            <input type="number" value={rechargeAmount} onChange={handleRechargeAmountChange} />
          </label>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>Name: {userName}</p>
          <p>Mobile Number: {mobileNumber}</p>
          <p>Email: {email}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}

      {/* Dashboard Section */}
      {/* <div className="dashboard-section">
        <h3>Dashboard</h3>
        <p>Current Plan: <strong>Basic Plan</strong></p>
        <p>Special Offers: <strong>Get 20% off on your next recharge!</strong></p>
      </div> */}
    </div>
  );
};

export default UserProfile;
