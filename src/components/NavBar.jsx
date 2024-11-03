import '../styles/NavBar.css';
import React from 'react';

function NavBar({ currentPage = null }) {
    return (
        <nav className="navbar">
            <div className="navbar-empty-space"></div>
            {/* work later to change the "active" class based on the page */}
            <ul className="navbar-links">
                <li><a href="/" className={currentPage === 'about' ? 'active' : ''}>about</a></li>
                <li><a href="/team" className={currentPage === 'team' ? 'active' : ''}>team</a></li>
                <li><a href="/publications" className={currentPage === 'publications' ? 'active' : ''}>publications</a></li>
                <li><a href="/talks" className={currentPage === 'talks' ? 'active' : ''}>talks</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;