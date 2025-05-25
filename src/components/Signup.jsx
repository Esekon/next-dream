import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';  // Don't forget to import the CSS file

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading('Please wait as we process your details');

    try {
      const data = new FormData();
      data.append('username', username);
      data.append('email', email);
      data.append('password', password);
      data.append('phone', phone);

      const response = await axios.post(
        'https://eguman.pythonanywhere.com/api/signup',
        data
      );

      setLoading('');
      setSuccess(response.data.success);

      setUsername('');
      setEmail('');
      setPassword('');
      setPhone('');
    } catch (error) {
      setSuccess('');
      setLoading('');
      setError('Oops! Something went wrong');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-heading">Sign up</h2>

        <p className="status-message">{loading && loading}</p>
        <p className="status-message success">{success && success}</p>
        <p className="status-message error">{error && error}</p>

        <form onSubmit={submit} className="signup-form">
          <input
            type="text"
            placeholder="Enter username"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter phone"
            className="form-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit" className="btn-submit">
            Sign up
          </button>

          <p className="signin-link">
            Already have an account? <Link to="/Signin">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
