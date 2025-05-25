import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signin.css'; 
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

    try {
  
      const data = new FormData();
      data.append('email', email);
      data.append('password', password);

      const response = await axios.post(
        'https://eguman.pythonanywhere.com/api/signin',
        data
      );

      setLoading('');
      if (response.data.user) {
        setSuccess('Login successful');
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/');
      } else {
        setError('Login failed');
      }
    } catch (error) {
      setLoading('');
      setError('Something went wrong!');
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2 className="signin-heading">Sign in</h2>

        <p className="status-message">{loading && loading}</p>
        <p className="status-message success">{success && success}</p>
        <p className="status-message error">{error && error}</p>

        <form onSubmit={submit} className="signin-form">
          <input
            type="email"
            placeholder="Your email"
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="form-input"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn-submit">
            Sign in 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
