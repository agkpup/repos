import React, { useState } from 'react';
import '../css/header.css';

const HeadSec = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="contact-info">
            <span className="contact-item">📞 +91 6390130136</span>
            <span className="contact-item">📧 contact@magee.com</span>
          </div>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">ⓕ Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">😋 Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">🤟 LinkedIn</a>
          </div>
        </div>
        <div className="navbar">
          <div className="logo">
            markazia
          </div>
          <div className={`nav-buttons ${isNavOpen ? 'open' : ''}`}>
            <button className="nav-button">Home</button>
            <button className="nav-button">About</button>
            <button className="nav-button" onClick={toggleDropdown}>
              Services
            </button>
            {isDropdownOpen && (
              <div className="dropdown">
                <button className="dropdown-item">SEO</button>
                <button className="dropdown-item">Digital Marketing</button>
                <button className="dropdown-item">Film production In Dubai</button>
                <button className="dropdown-item">Event management</button>
              </div>
            )}
          </div>
          <div className="hamburger" onClick={toggleNav}>
            ☰
          </div>
        </div>
      </header>
    </>
  );
};

export default HeadSec;