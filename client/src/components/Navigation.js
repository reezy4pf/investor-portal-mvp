import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
    window.location.reload(); // Force reload to update auth state
  };

  return (
    <nav className="main-nav">
      <div className="nav-brand">
        <h2>Canary Wealth Fund</h2>
      </div>
      
      <ul className="nav-links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/documents">Documents</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          <button onClick={logout} className="btn-logout">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;