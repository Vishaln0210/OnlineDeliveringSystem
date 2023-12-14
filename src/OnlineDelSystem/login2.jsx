import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
const LoginForm = (props) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
//using arrow functions
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Credentials:', credentials);

    if (props.onSubmit) {
      props.onSubmit(credentials);
    }
  };

  return (

    // <div style={{ backgroundImage:`url(${image})` }}>
    // </div>

    <div
      style={{
        backgroundImage: 'https://getwallpapers.com/wallpaper/full/e/b/2/53695.jpg',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          backgroundColor: '#ffffff', 
          padding: 2,
          borderRadius: 8,
          textAlign: 'center',
          border: '5px solid #000',
        }}
      >
        <Box>
          <Typography component="h1" variant="h5">
            Login
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={credentials.username}
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
              autoComplete="current-password"
              value={credentials.password}
              onChange={handleChange}
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Login
            </Button>

            <Typography variant="body2" color="textSecondary">
              Don't have an account?{' '}
              <Link component={RouterLink} to="/signup" color="primary">
                Sign up here later
              </Link>
            </Typography>
          </form>
        </Box>
      </Container>
    </div>
  );
};
export default LoginForm;