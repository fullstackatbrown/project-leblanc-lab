import '../styles/NavBar.css';
import React, { useState } from 'react';

function NavBar({ currentPage = null }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-empty-space"></div>

            <button className="hamburger-icon" onClick={toggleMenu}>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </button>

            {/* Dropdown menu */}
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li><a href="/" className={currentPage === 'about' ? 'active' : ''}>about</a></li>
                <li><a href="/team" className={currentPage === 'team' ? 'active' : ''}>team</a></li>
                <li><a href="/publications" className={currentPage === 'publications' ? 'active' : ''}>publications</a></li>
                <li><a href="/talks" className={currentPage === 'talks' ? 'active' : ''}>talks</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;