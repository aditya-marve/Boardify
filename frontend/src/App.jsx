import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './style/app.css';

import Navbar from './components/navbar';
import Dashboard from './pages/dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [status, setStatus] = useState('⏳ Connecting to backend...');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then((res) => setStatus(res.data))
      .catch((err) => {
        console.error('Backend connection error:', err);
        setStatus('❌ Failed to connect to backend');
      });
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">📋 Boardify</h1>
        <p className="app-status">{status}</p>
      </header>

      <Navbar />

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

export default App;
