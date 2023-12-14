// SignupForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, Radio, RadioGroup, FormControlLabel } from '@mui/material';

const SignupForm = (props) => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    gender: 'male',
    dob: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e) => {
    setUserInfo({ ...userInfo, gender: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Info:', userInfo);

    if (props.onSubmit) {
      props.onSubmit(userInfo);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        marginTop: '10px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 10,
          borderRadius: 8,
          backgroundColor: '#ebc5db', 
          border: '5px solid #000',
          width: '100%', // Ensure the content takes full width
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="fname"
            autoFocus
            value={userInfo.firstName}
            onChange={handleChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            value={userInfo.lastName}
            onChange={handleChange}
          />

          <RadioGroup
            aria-label="gender"
            name="gender"
            value={userInfo.gender}
            onChange={handleRadioChange}
            row
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dob"
            label="Date of Birth"
            name="dob"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={userInfo.dob}
            onChange={handleChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={userInfo.email}
            onChange={handleChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={userInfo.password}
            onChange={handleChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={userInfo.confirmPassword}
            onChange={handleChange}
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>

          <Typography variant="body2" color="textSecondary">
            Already have an account?{' '}
            <Link to="/" color="primary">
              Log in here
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default SignupForm;