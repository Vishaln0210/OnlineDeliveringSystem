// LoginSignup.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/LoginSignup.css';

export default function LoginSignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail()) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSignup = () => {
    // Add your signup logic here
    if (!validateEmail() || password !== confirmPassword) {
      alert('Validation failed. Please check your email and password confirmation.');
    } else {
      alert('Signup successful!');
      // Redirect or perform any additional actions
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder='Email Address'
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="error-message">{emailError}</p>}
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSignup}>Continue</button>
        <p className='loginsignup-login'>
          Already have an Account? <Link to="/login2">Login Here</Link>
        </p>
      </div>
    </div>
  );
}
