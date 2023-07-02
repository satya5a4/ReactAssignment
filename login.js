import React, { useState } from 'react';
import './css/login.css'
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform login validation
    if (username === '' || password === '' || role === '') {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Perform further validation if required
    // ...

    // Simulate login success
    if (username === 'ride@example.com' && password === 'Pass@123' && role === 'user') {
      alert('Login Successful');
      navigate('/booking');

    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
        <div className="container">
            <div className="form-box">
               <h1>Rideshare</h1>
                <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Username (Email)*: </label>
                <input type="email" value={username} onChange={handleUsernameChange} required />
              
              <br />
              <label>
                Password*: </label>
                <input type="password" value={password} onChange={handlePasswordChange} required />
              
              <br />
              <label>
                Role*: </label>
                <select value={role} onChange={handleRoleChange} required>
                  <option value="">Select...</option>
                  <option value="user">User</option>
                  <option value="restaurant">Restaurant</option>
                </select>
              
              <br />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit">Submit</button>
            </form>

                <p>
                    New User?{' '}
                    <Link to="/registration">Create an account</Link>
                </p>
        </div>
        </div>
  );
};

export default LoginForm;
