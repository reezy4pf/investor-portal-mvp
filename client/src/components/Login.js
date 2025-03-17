import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    mfaToken: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { email, password, mfaToken } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', {
        email,
        password,
        mfaToken
      });
      
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
      window.location.reload(); // Force reload to update auth state
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Canary Wealth Fund</h1>
        <h2>Investor Login</h2>
        
        {error && <div className="alert alert-danger">{error}</div>}
        
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>MFA Token</label>
            <input
              type="text"
              name="mfaToken"
              value={mfaToken}
              onChange={onChange}
              placeholder="6-digit code from authenticator app"
              required
            />
          </div>
          
          <button type="submit" className="btn-primary">Login</button>
        </form>
        
        <p className="auth-link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;