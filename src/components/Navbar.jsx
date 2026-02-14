import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo-wrapper">
                    <span className="navbar-logo-icon">🛍️</span>
                    <span className="navbar-logo-text">ShopDemo<span>.</span></span>
                </a>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <a href="/" className="navbar-link">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Products</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">About</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
