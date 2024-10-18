import './NavBar.css';
import React from 'react';

function NavBar() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>LeBlanc Lab</h1>
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#publications">Publications</a></li>
        </ul>
      </nav>
    );
  }  

export default NavBar;