import React from 'react';
import './Navbar.css';

const Navbar = ({ onGetUsers }) => {
  return (
    <nav className="navbar">
      <div className="brand">Brand Name</div>
      <button className="button" onClick={onGetUsers}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
