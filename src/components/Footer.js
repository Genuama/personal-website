// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Make sure to style it

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 Ama Abrokwa</p>
            <div className="social-icons">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
