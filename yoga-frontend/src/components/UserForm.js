// src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './UserForm.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone_number: '',
    batch_id: '', // This will be the selected time slot
  });

  const [paymentData, setPaymentData] = useState({
    userId: '', // User ID for fee payment
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentInputChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const age = parseInt(formData.age, 10);
    if (isNaN(age) || age < 18 || age > 65) {
      alert('Age must be between 18 and 65.');
      return;
    }
  
    e.preventDefault();
    console.log('User form submitted!', formData);
    axios.post('http://127.0.0.1:8000/api/enroll/', formData)
      .then(response => {
        console.log('User registered successfully:', response.data);
        setFormData({
          name: '',
          age: '',
          phone_number: '',
          batch_id: '',
        });
      })
      .catch(error => {
        console.error('Error registering user:', error);
      });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log('Payment form submitted!', paymentData);

    // Assuming paymentData.userId contains the participant's ID
    const feePaymentUrl = `http://127.0.0.1:8000/api/fee_payment/${paymentData.userId}/`;

    axios.put(feePaymentUrl, paymentData)
      .then(response => {
        console.log('Fee payment successful:', response.data);
        setPaymentData({
          userId: '',
        });
      })
      .catch(error => {
        console.error('Error processing fee payment:', error);
      });
  };

  return (
    <div className="container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" name="phone_number" value={formData.phone_number} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Time Slot:
          <select name="batch_id" value={formData.batch_id} onChange={handleInputChange} required>
            <option value="">Select Time Slot</option>
            <option value="1">6-7AM</option>
            <option value="2">7-8AM</option>
            <option value="3">8-9AM</option>
            <option value="4">5-6PM</option>
          </select>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>

      <h2>Fee Payment</h2>
      <form onSubmit={handlePaymentSubmit}>
        <label>
          Participant ID:
          <input type="text" name="userId" value={paymentData.userId} onChange={handlePaymentInputChange} required />
        </label>
        <br />
        <button type="submit">Pay Fee</button>
      </form>
    </div>
  );
};

export default UserForm;
