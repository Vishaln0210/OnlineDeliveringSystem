import React from 'react';
import LoginForm from './OnlineDelSystem/login2';
import Navbar from './OnlineDelSystem/Navbaar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from './OnlineDelSystem/Signup';
import './App.css'

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>

      <Navbar />
      </div>
    
  );
};

export default App;