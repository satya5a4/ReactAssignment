import React, { useState } from 'react';
import './css/registrationForm.css'
import {Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [registrationId, setRegistrationId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (e) => {
    const inputEmail = e.target.value;
    setUsername(inputEmail);
    }

  // Validate email format
  const isEmailValid = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleRegistrationIdChange = (event) => {
    setRegistrationId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isEmailValid(username)) {
      // Display an error message or perform error handling
      setErrorMessage('Invalid email');
    }
    // Validate password criteria
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage('Password entry does not meet criteria');
      return;
    }

    // Perform further validation if required
    // ...

    // Registration successful
    alert('Successful account creation');

    // Reset form fields
    setUsername('');
    setPassword('');
    setUserType('');
    setCity('');
    setState('');
    setRegistrationId('');
    setErrorMessage('');
  };

  return (
    <div className="container">
        <div className="form-box">
            <h1>Rideshare Registration</h1>
            <form onSubmit={handleSubmit} style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
                <label>
                Username (Email):
                <input type="email" value={username} onChange={handleUsernameChange} required />
                </label>
                <br />
                <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} required />
                </label>
                <p>Password criteria: At least 8 characters long and must contain at least one letter and one number.</p>
                <br />
                <label>
                User Type:
                <select value={userType} onChange={handleUserTypeChange} required>
                    <option value="">Select...</option>
                    <option value="user">User</option>
                    <option value="restaurant">Restaurant</option>
                </select>
                </label>
                <br />
                {userType === 'user' && (
                <div>
                    <label>
                    City:
                    <input type="text" value={city} onChange={handleCityChange} required />
                    </label>
                    <br />
                    <label>
                    State:
                    <input type="text" value={state} onChange={handleStateChange} required />
                    </label>
                </div>
                )}
                {userType === 'restaurant' && (
                <div>
                    <label>
                    City:
                    <input type="text" value={city} onChange={handleCityChange} required />
                    </label>
                    <br />
                    <label>
                    Registration ID:
                    <input type="text" value={registrationId} onChange={handleRegistrationIdChange} required />
                    </label>
                </div>
                )}
                <br />
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button type="submit">Submit</button>
                <p>
                    login?{' '}
                    <Link to="/"> back to login</Link>
                </p>
            </form>
        </div>
    </div>
  );
};

export default RegistrationForm;
