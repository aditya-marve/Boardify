import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className="navbar-title">
          📋 Boardify
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink to="/dashboard" className="nav-link" activeclassname="active">Dashboard</NavLink>
        <NavLink to="/login" className="nav-link" activeclassname="active">Login</NavLink>
        <NavLink to="/register" className="nav-link" activeclassname="active">Register</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
