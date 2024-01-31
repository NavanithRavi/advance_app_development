import React, { useState, useEffect } from 'react';
import "../assets/css/Rechargeplans.css"

const Rechargeplan = ({ selectedPlan, onPlanSelect }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');
  const [rechargeAmount, setRechargeAmount] = useState('');

  const rechargePlans = [
    { id: 1, name: 'Monthly Plan', amount: 100, validity: '30 days' },
    { id: 2, name: 'Standard Plan', amount: 200, validity: '90 days' },
    { id: 3, name: 'Yearly Plan', amount: 350, validity: '365 days' },
  ];

  useEffect(() => {
    // Update rechargeAmount when a new plan is selected
    if (selectedPlan) {
      setRechargeAmount(selectedPlan.amount.toString());
    }
  }, [selectedPlan]);

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setSelectedOperator(e.target.value);
  };

  const handleRechargeAmountChange = (e) => {
    setRechargeAmount(e.target.value);
  };

  const handleProceedToPayment = () => {
    // Add logic to handle the payment process
    // For demonstration purposes, you can log the user details to the console
    console.log('User Details:', {
      mobileNumber,
      selectedOperator,
      rechargeAmount,
      selectedPlan,
    });
    // Add your payment logic here
  };

  return (
    <div className='RechargePlanPage'>
      <div className='RechargePlanPage__recharge-plan-container'>
        <h1>Recharge Plans</h1>
        <ul>
          {rechargePlans.map((plan) => (
            <li key={plan.id} onClick={() => onPlanSelect(plan)}>
              <strong>{plan.name}</strong>: Rs.{plan.amount} - Validity: {plan.validity}{' '}
              {selectedPlan && selectedPlan.id === plan.id && <span>(Selected)</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className='RechargePlanPage__user-details-container'>
        <h2>User Mobile Details</h2>
        <label htmlFor='mobileNumber'>Mobile Number:</label>
        <input
          type='text'
          id='mobileNumber'
          value={mobileNumber}
          onChange={handleMobileNumberChange}
        />

        <label htmlFor='operator'>Select Operator:</label>
        <select
          id='operator'
          value={selectedOperator}
          onChange={handleOperatorChange}
        >
          <option value='' disabled>Select an operator</option>
          <option value='Airtel'>Airtel</option>
          <option value='Vodafone'>Vodafone</option>
          <option value='Idea'>Idea</option>
          {/* Add more options as needed */}
        </select>

        <label htmlFor='rechargeAmount'>Recharge Amount:</label>
        <input
          type='number'
          id='rechargeAmount'
          value={rechargeAmount}
          onChange={handleRechargeAmountChange}
        />

        {/* Proceed to Payment Button */}
        <button onClick={handleProceedToPayment}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Rechargeplan;
