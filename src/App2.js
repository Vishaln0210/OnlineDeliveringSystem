// App2.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Navbar from './Navbar';

const App2 = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
      </Switch>
    </div>
  );
};

export default App2;
