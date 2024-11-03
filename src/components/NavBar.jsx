import '../styles/NavBar.css';
import React from 'react';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-empty-space"></div>
            {/* work later to change the "active" class based on the page */}
            <ul className="navbar-links">
                <li><a href="/" className="active">about</a></li>
                <li><a href="/team">team</a></li>
                <li><a href="/publications">publications</a></li>
                <li><a href="/talks">talks</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;