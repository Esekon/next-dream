import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    setSuccess('');
    setError('');

    try {
      const data = new FormData();
      data.append('username', username);
      data.append('email', email);
      data.append('password', password);
      data.append('phone', phone);

      const response = await axios.post('https://eguman.pythonanywhere.com/api/signup', data);

      setLoading('');
      setSuccess(response.data.success);
      setError('');

      setUsername('');
      setEmail('');
      setPassword('');
      setPhone('');
    } catch (error) {
      setSuccess('');
      setLoading('');
      setError('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <div className="signupstyle row justify-content-center mt-4 bg-dark">
      <div className="col-md-6 card shadow p-4">
        <h2 className="text-white">Sign up</h2>
        <form onSubmit={submit}>
          {loading && <p className="text-info">{loading}</p>}
          {success && <p className="text-success">{success}</p>}
          {error && <p className="text-danger">{error}</p>}

          <input
            type="text"
            placeholder="Enter username"
            className="form-control mt-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter email"
            className="form-control mt-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            className="form-control mt-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Enter phone"
            className="form-control mt-3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <button type="submit" className="btn bg-danger px-5 mt-3 text-white">
            Sign up
          </button>

          <p className="mt-3 text-white">
            Already have an account? <Link to="/Signin">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
