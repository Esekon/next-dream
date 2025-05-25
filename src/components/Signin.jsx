import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading('Please wait...');
    setSuccess('');
    setError('');

    try {
      // Create form data
      const data = new FormData();
      data.append('email', email);
      data.append('password', password);

      const response = await axios.post('https://eguman.pythonanywhere.com/api/signin', data);
      setLoading('');

      if (response.data.user) {
        setSuccess('Login success!');
        // Save user details to localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user));
        // Redirect to home page
        navigate('/');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setLoading('');
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="signinstyle row justify-content-center p-4">
      <div className="col-md-6 card shadow p-4">
        <form onSubmit={submit}>
          <h2>Sign in</h2>

          {loading && <p className="text-info">{loading}</p>}
          {success && <p className="text-success">{success}</p>}
          {error && <p className="text-danger">{error}</p>}

          <input
            type="email"
            placeholder="Your email"
            className="form-control mt-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="form-control mt-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn bg-primary my-3 px-5 text-white">
            Sign in 😊
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
