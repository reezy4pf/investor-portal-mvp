import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Documents from './components/Documents';
import Messages from './components/Messages';
import Portfolio from './components/Portfolio';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="loading-app">Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register />} />
          <Route path="/dashboard" element={
            isAuthenticated ? (
              <>
                <Navigation />
                <Dashboard />
              </>
            ) : <Navigate to="/" />
          } />
          <Route path="/portfolio" element={
            isAuthenticated ? (
              <>
                <Navigation />
                <Portfolio />
              </>
            ) : <Navigate to="/" />
          } />
          <Route path="/documents" element={
            isAuthenticated ? (
              <>
                <Navigation />
                <Documents />
              </>
            ) : <Navigate to="/" />
          } />
          <Route path="/messages" element={
            isAuthenticated ? (
              <>
                <Navigation />
                <Messages />
              </>
            ) : <Navigate to="/" />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;