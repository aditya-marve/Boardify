import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // create this file too

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>📊 Dashboard</h2>
      <ul>
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/marks">Marks</Link></li>
        <li><Link to="/performance">Performance</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
