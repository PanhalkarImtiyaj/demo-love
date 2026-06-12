import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={handleLinkClick}>
          <img src={logoImg} alt="VSS Logo" className="navbar__logo-img" />
        </Link>

        {/* Nav Links */}
        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>About Us</Link>
          </li>
          <li>
            <Link to="/#services" onClick={handleLinkClick}>Services</Link>
          </li>
          <li>
            <Link to="/#projects" onClick={handleLinkClick}>Projects</Link>
          </li>
          <li>
            <Link to="/careers" onClick={handleLinkClick}>Careers</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="navbar__right">
          <button className="navbar__search" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <Link to="/contact" className="navbar__cta" onClick={handleLinkClick}>GET STARTED</Link>
          <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            <span/>
            <span/>
            <span/>
          </button>
        </div>
      </div>
    </nav>
  );
}
