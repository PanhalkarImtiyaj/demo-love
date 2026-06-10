import { useState } from 'react';
import logoImg from '../../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <div className="navbar__logo">
          <img src={logoImg} alt="Logo" className="navbar__logo-img" />
        </div>

        {/* Nav Links */}
        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home">Home <span>▾</span></a></li>
          <li><a href="#pages">Pages <span>▾</span></a></li>
          <li><a href="#services">Services <span>▾</span></a></li>
          <li><a href="#projects">Projects <span>▾</span></a></li>
          <li><a href="#blog">Blog <span>▾</span></a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>

        {/* Right Side */}
        <div className="navbar__right">
          <button className="navbar__search" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <a href="#contact" className="navbar__cta">GET STARTED</a>
          <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span/><span/><span/>
          </button>
        </div>
      </div>
    </nav>
  );
}
