import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';

import './style/app.css';

import Navbar from './components/navbar';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/Register';

function AppWrapper() {
  const location = useLocation();
  const [status, setStatus] = useState('⏳ Connecting to backend...');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(res => setStatus(res.data))
      .catch(() => setStatus('❌ Backend not reachable'));
  }, []);

  const shouldHideNavbar = ['/login', '/register'].includes(location.pathname);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">📋 Boardify</h1>
        <p className="app-status">{status}</p>
      </header>

      {!shouldHideNavbar && <Navbar />}

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Boardify. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AppWrapper;
