// Login.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/LoginSignup.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const handleLogin = () => {
    // Add your login logic here
    if (!validateEmail() || !password) {
      alert('Validation failed. Please check your email and password.');
    } else {
        <Link to="/"/>

    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Login</h1>
        <div className="loginsignup-fields">
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
        </div>
        <Link to='/hero'><button onClick={handleLogin}>Login</button></Link>
        <p className='loginsignup-login'>
          Don't have an account? <Link to="/login">Sign Up Here</Link>
        </p>
      </div>
    </div>
  );
}
