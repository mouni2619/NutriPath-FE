// AuthNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function AuthNavbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/bmi">BMI</Link></li>
        <li><Link to="/track">Track</Link></li>
        <li><Link to="/create">Create Food</Link></li>
        <li><Link to="/diet">Diet</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default AuthNavbar;
