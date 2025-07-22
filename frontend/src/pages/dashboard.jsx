import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import './Dashboard.css'; // Create this file for styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div className="dashboard-main">
          <h1>📋 Welcome to Boardify</h1>
          <p>This is your centralized board management dashboard.</p>
          <div className="stats">
            <div className="card">
              <h3>Students</h3>
              <p>120</p>
            </div>
            <div className="card">
              <h3>Subjects</h3>
              <p>8</p>
            </div>
            <div className="card">
              <h3>Top Performer</h3>
              <p>Aditya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
