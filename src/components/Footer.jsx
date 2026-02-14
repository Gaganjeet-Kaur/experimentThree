import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>ShopDemo</h3>
                        <p>Your one-stop shop for everything awesome.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} ShopDemo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
