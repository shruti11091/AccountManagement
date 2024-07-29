import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Account Management</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/account">Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
