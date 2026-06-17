import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleLinkClick = (to) => {
    setMenuOpen(false);
    setServicesDropdownOpen(false);
    if (to) {
      const [path, hash] = to.split('#');
      const currentPath = window.location.pathname;
      
      if (currentPath === path) {
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        if (!hash) {
          window.scrollTo(0, 0);
          document.documentElement.scrollTo(0, 0);
        }
      }
    }
  };

  const openSearch = () => {
    setSearchOpen(true);
    setTimeout(() => {
      document.getElementById('search-input')?.focus();
    }, 100);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery('');
  };

  const handleSearchKey = (e) => {
    if (e.key === 'Escape') closeSearch();
  };

  const pages = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Web Development', path: '/services/web-development' },
    { label: 'App Development', path: '/services/app-development' },
    { label: 'Custom Software', path: '/services/custom-software' },
    { label: 'Digital Marketing', path: '/services/digital-marketing' },
    { label: 'ERP Software', path: '/services/erp-software' },
    { label: 'CRM Software', path: '/services/crm-software' },
    { label: 'VSS CRM Pro', path: '/products' },
    { label: 'VSS ERP Suite', path: '/products' },
    { label: 'VSS HRMS', path: '/products' },
    { label: 'VSS LearnPro', path: '/products' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const filteredPages = searchQuery.trim()
    ? pages.filter(p => p.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" onClick={() => handleLinkClick('/')}>
            <img src={logoImg} alt="VSS Logo" className="navbar__logo-img" />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="navbar__links">
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => handleLinkClick('/')}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => handleLinkClick('/about')}>About Us</Link>
            </li>
            
            {/* Services Dropdown (Desktop) */}
            <li className="navbar__dropdown-wrapper">
              <span className={`navbar__dropdown-trigger ${isActive('/services') ? 'active' : ''}`}>
                Services <i className="bx bx-chevron-down dropdown-arrow"></i>
              </span>
              <div className="navbar__dropdown-menu">
                <div className="dropdown-megamenu-inner">
                  {/* Left Column: Featured Highlight */}
                  <div className="dropdown-featured-panel">
                    <span className="featured-panel__tag">
                      <i className="bx bx-award"></i> VSS INNOVATION LAB
                    </span>
                    <h3 className="featured-panel__title">Engineering Next-Gen Digital Products</h3>
                    <p className="featured-panel__desc">
                      Accelerate your scaling journey with custom software, performant web platforms, and mobile apps built to convert.
                    </p>
                    <ul className="featured-panel__bullet-list">
                      <li><i className="bx bx-check-circle"></i> Enterprise Grade Tech</li>
                      <li><i className="bx bx-check-circle"></i> High Security Audits</li>
                      <li><i className="bx bx-check-circle"></i> Agile Performance Sprints</li>
                    </ul>
                    <Link to="/contact#contact-form" className="featured-panel__cta-btn" onClick={() => handleLinkClick('/contact#contact-form')}>
                      Talk to an Expert <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                  </div>

                  {/* Right Column: Capabilities Links */}
                  <div className="dropdown-services-panel">
                    <span className="services-panel__title">OUR SPECIALTIES</span>
                    <div className="services-panel__grid">
                      <Link to="/services/web-development" className="megamenu-card" onClick={() => handleLinkClick('/services/web-development')}>
                        <div className="megamenu-card__icon web">
                          <i className="bx bx-code-alt"></i>
                        </div>
                        <div className="megamenu-card__body">
                          <h4>Web Development</h4>
                          <p>Blazing fast portals and SaaS builds</p>
                        </div>
                        <i className="bx bx-chevron-right megamenu-card__arrow"></i>
                      </Link>

                      <Link to="/services/app-development" className="megamenu-card" onClick={() => handleLinkClick('/services/app-development')}>
                        <div className="megamenu-card__icon app">
                          <i className="bx bx-mobile-alt"></i>
                        </div>
                        <div className="megamenu-card__body">
                          <h4>App Development</h4>
                          <p>High-end iOS, Android &amp; hybrid builds</p>
                        </div>
                        <i className="bx bx-chevron-right megamenu-card__arrow"></i>
                      </Link>

                      <Link to="/services/custom-software" className="megamenu-card" onClick={() => handleLinkClick('/services/custom-software')}>
                        <div className="megamenu-card__icon software">
                          <i className="bx bx-layer"></i>
                        </div>
                        <div className="megamenu-card__body">
                          <h4>Custom Software</h4>
                          <p>Tailored enterprise systems</p>
                        </div>
                        <i className="bx bx-chevron-right megamenu-card__arrow"></i>
                      </Link>

                      <Link to="/services/digital-marketing" className="megamenu-card" onClick={() => handleLinkClick('/services/digital-marketing')}>
                        <div className="megamenu-card__icon marketing">
                          <i className="bx bx-line-chart"></i>
                        </div>
                        <div className="megamenu-card__body">
                          <h4>Digital Marketing</h4>
                          <p>SEO growth &amp; audience funnels</p>
                        </div>
                        <i className="bx bx-chevron-right megamenu-card__arrow"></i>
                      </Link>

                      <Link to="/services/erp-software" className="megamenu-card" onClick={() => handleLinkClick('/services/erp-software')}>
                        <div className="megamenu-card__icon erp">
                          <i className="bx bx-buildings"></i>
                        </div>
                        <div className="megamenu-card__body">
                          <h4>ERP Softwares</h4>
                          <p>Business resource planning systems</p>
                        </div>
                        <i className="bx bx-chevron-right megamenu-card__arrow"></i>
                      </Link>

                      <Link to="/services/crm-software" className="megamenu-card" onClick={() => handleLinkClick('/services/crm-software')}>
                        <div className="megamenu-card__icon crm">
                          <i className="bx bx-group"></i>
                        </div>
                        <div className="megamenu-card__body">
                          <h4>CRM Softwares</h4>
                          <p>Customer relationships &amp; support</p>
                        </div>
                        <i className="bx bx-chevron-right megamenu-card__arrow"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link to="/products" className={isActive('/products') ? 'active' : ''} onClick={() => handleLinkClick('/products')}>Products</Link>
            </li>
            <li>
              <Link to="/careers" className={isActive('/careers') ? 'active' : ''} onClick={() => handleLinkClick('/careers')}>Careers</Link>
            </li>
            <li>
              <Link to="/contact#contact-form" className={isActive('/contact') ? 'active' : ''} onClick={() => handleLinkClick('/contact#contact-form')}>Contact Us</Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="navbar__right">
            <button className="navbar__search" aria-label="Search" onClick={openSearch}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <Link to="/contact#contact-form" className="navbar__cta" onClick={() => handleLinkClick('/contact#contact-form')}>GET STARTED</Link>
            <button 
              className={`navbar__hamburger ${menuOpen ? 'active' : ''}`} 
              onClick={() => setMenuOpen(!menuOpen)} 
              aria-label="Toggle Menu"
            >
              <span/>
              <span/>
              <span/>
            </button>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="search-overlay" onClick={closeSearch}>
          <div className="search-overlay__box" onClick={e => e.stopPropagation()}>
            <div className="search-overlay__header">
              <span className="search-overlay__label">Search VSS</span>
              <button className="search-overlay__close" onClick={closeSearch} aria-label="Close Search">
                <i className="bx bx-x"></i>
              </button>
            </div>
            <div className="search-overlay__input-wrap">
              <i className="bx bx-search search-overlay__icon"></i>
              <input
                id="search-input"
                type="text"
                className="search-overlay__input"
                placeholder="Search pages, services..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKey}
                autoComplete="off"
              />
              {searchQuery && (
                <button className="search-overlay__clear" onClick={() => setSearchQuery('')} aria-label="Clear">
                  <i className="bx bx-x-circle"></i>
                </button>
              )}
            </div>
            {filteredPages.length > 0 && (
              <ul className="search-overlay__results">
                {filteredPages.map(page => (
                  <li key={page.path}>
                    <Link to={page.path} className="search-result-item" onClick={() => { closeSearch(); handleLinkClick(page.path); }}>
                      <i className="bx bx-link-alt"></i>
                      <span>{page.label}</span>
                      <i className="bx bx-chevron-right search-result-arrow"></i>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {searchQuery && filteredPages.length === 0 && (
              <div className="search-overlay__empty">
                <i className="bx bx-search-alt"></i>
                <p>No results for "<strong>{searchQuery}</strong>"</p>
              </div>
            )}
            {!searchQuery && (
              <div className="search-overlay__hints">
                <span className="hints-label">Quick Links</span>
                <div className="hints-grid">
                  {pages.slice(0, 6).map(p => (
                    <Link key={p.path} to={p.path} className="hint-chip" onClick={() => { closeSearch(); handleLinkClick(p.path); }}>
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer Overlay */}
      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}

      {/* Mobile Side Drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'open' : ''}`}>
        {/* Drawer Header */}
        <div className="drawer__header">
          <div className="drawer__brand">
            <img src={logoImg} alt="VSS Logo" className="drawer__logo-img" />
            <span className="drawer__brand-name">VSS Solutions</span>
          </div>
          <button className="drawer__close" onClick={() => setMenuOpen(false)} aria-label="Close Menu">
            <i className="bx bx-x"></i>
          </button>
        </div>

        {/* Drawer Scrollable Body */}
        <div className="drawer__body">
          <ul className="drawer__nav">
            <li>
              <Link to="/" className={isActive('/') ? 'drawer-active' : ''} onClick={() => handleLinkClick('/')}>
                <i className="bx bx-home-alt"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about') ? 'drawer-active' : ''} onClick={() => handleLinkClick('/about')}>
                <i className="bx bx-info-circle"></i>
                <span>About Us</span>
              </Link>
            </li>

            {/* Services Accordion Dropdown (Mobile) */}
            <li>
              <button 
                className={`drawer__dropdown-trigger ${isActive('/services') ? 'drawer-active' : ''}`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <div className="drawer__dropdown-title">
                  <i className="bx bx-briefcase"></i>
                  <span>Services</span>
                </div>
                <i className={`bx ${servicesDropdownOpen ? 'bx-chevron-up' : 'bx-chevron-down'} drawer__dropdown-arrow`}></i>
              </button>
              {servicesDropdownOpen && (
                <ul className="drawer__dropdown-menu">
                  <li>
                    <Link to="/services/web-development" onClick={() => handleLinkClick('/services/web-development')}>
                      <i className="bx bx-code-alt drawer-service-icon web"></i> Web Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/app-development" onClick={() => handleLinkClick('/services/app-development')}>
                      <i className="bx bx-mobile-alt drawer-service-icon app"></i> App Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/custom-software" onClick={() => handleLinkClick('/services/custom-software')}>
                      <i className="bx bx-layer drawer-service-icon software"></i> Custom Software
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/digital-marketing" onClick={() => handleLinkClick('/services/digital-marketing')}>
                      <i className="bx bx-line-chart drawer-service-icon marketing"></i> Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/erp-software" onClick={() => handleLinkClick('/services/erp-software')}>
                      <i className="bx bx-buildings drawer-service-icon erp"></i> ERP Softwares
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/crm-software" onClick={() => handleLinkClick('/services/crm-software')}>
                      <i className="bx bx-group drawer-service-icon crm"></i> CRM Softwares
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/#projects" onClick={() => handleLinkClick()}>
                <i className="bx bx-grid-alt"></i>
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link to="/products" className={isActive('/products') ? 'drawer-active' : ''} onClick={() => handleLinkClick('/products')}>
                <i className="bx bx-cube-alt"></i>
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link to="/careers" className={isActive('/careers') ? 'drawer-active' : ''} onClick={() => handleLinkClick('/careers')}>
                <i className="bx bx-cabinet"></i>
                <span>Careers</span>
              </Link>
            </li>
            <li>
              <Link to="/contact#contact-form" className={isActive('/contact') ? 'drawer-active' : ''} onClick={() => handleLinkClick('/contact#contact-form')}>
                <i className="bx bx-envelope"></i>
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>

          <div className="drawer__separator" />

          {/* Corporate Support Card */}
          <div className="drawer__contact-card">
            <div className="contact-card__title">
              <i className="bx bx-support"></i>
              <span>Need Assistance?</span>
            </div>
            <div className="contact-card__info">
              <p className="contact-card__phone">
                <i className="bx bx-phone"></i>
                <span>+91 7517005494</span>
              </p>
              <p className="contact-card__email">
                <i className="bx bx-envelope"></i>
                <span>support@vss.com</span>
              </p>
            </div>
            <Link to="/contact#contact-form" className="contact-card__btn" onClick={() => handleLinkClick('/contact#contact-form')}>
              Request Quote
            </Link>
          </div>
        </div>

        {/* Drawer Footer with social links */}
        <div className="drawer__footer">
          <div className="drawer__socials">
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#" className="social-icon" aria-label="GitHub">
              <i className="bx bxl-github"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <i className="bx bxl-facebook"></i>
            </a>
          </div>
          <div className="drawer__copyright">
            © 2026 VSS Solutions.
          </div>
        </div>
      </div>
    </>
  );
}
