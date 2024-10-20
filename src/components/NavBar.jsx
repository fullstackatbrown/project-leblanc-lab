import '../styles/NavBar.css';
import React from 'react';

function NavBar() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>LeBlanc Lab</h1>
        </div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/team">Team</a></li>
          <li><a href="/publications">Publications</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
  }  

export default NavBar;