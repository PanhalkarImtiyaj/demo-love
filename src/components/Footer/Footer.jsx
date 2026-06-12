import { useState } from 'react';
import logoImg from '../../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__glow footer__glow--1" />
      <div className="footer__glow footer__glow--2" />

      <div className="footer__inner">
        {/* Main Columns Grid */}
        <div className="footer__grid">
          
          {/* Column 1: Company Info */}
          <div className="footer__col footer__col--about">
            <div className="footer__logo">
              <img src={logoImg} alt="VSS Logo" className="footer__logo-img" />
            </div>
            <p className="footer__desc">
              VSS Software Solutions is a premier technology partner specializing in high-performance web development, native and hybrid mobile apps, custom business software, and secure cloud infrastructures.
            </p>
            <div className="footer__socials">
              <a href="#" className="social-link" aria-label="LinkedIn"><i className="bx bxl-linkedin" /></a>
              <a href="#" className="social-link" aria-label="GitHub"><i className="bx bxl-github" /></a>
              <a href="#" className="social-link" aria-label="Twitter"><i className="bx bxl-twitter" /></a>
              <a href="https://wa.me/917517005494" target="_blank" rel="noopener noreferrer" className="social-link social-link--wa" aria-label="WhatsApp"><i className="bx bxl-whatsapp" /></a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Services</h4>
            <ul className="footer__links">
              <li><a href="#services"><i className="bx bx-chevron-right" /> Web Development</a></li>
              <li><a href="#services"><i className="bx bx-chevron-right" /> App Development</a></li>
              <li><a href="#services"><i className="bx bx-chevron-right" /> Custom Software</a></li>
              <li><a href="#services"><i className="bx bx-chevron-right" /> Cloud & DevOps Solutions</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              <li><a href="#home"><i className="bx bx-chevron-right" /> Home</a></li>
              <li><a href="#about"><i className="bx bx-chevron-right" /> About Company</a></li>
              <li><a href="#projects"><i className="bx bx-chevron-right" /> Case Studies</a></li>
              <li><a href="#contact"><i className="bx bx-chevron-right" /> Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Contact */}
          <div className="footer__col footer__col--newsletter">
            <h4 className="footer__col-title">Tech Newsletter</h4>
            <p className="footer__desc">
              Subscribe to receive updates on technology trends, system updates, and architecture tips.
            </p>
            
            <form className="footer__form" onSubmit={handleSubscribe}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer__input"
                  required
                />
                <button type="submit" className="footer__submit-btn">
                  <i className="bx bx-paper-plane" />
                </button>
              </div>
            </form>

            {subscribed && (
              <div className="footer__success-msg">
                <i className="bx bx-check-circle" /> Subscribed successfully!
              </div>
            )}

            <div className="footer__direct-call">
              <div className="call-icon">
                <i className="bx bx-phone-call" />
              </div>
              <div>
                <span className="call-label">Direct Technical Consult</span>
                <a href="tel:+917517005494" className="call-num">+91 7517005494</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} <strong>VSS Software Solutions Pvt. Ltd.</strong> All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="bullet">•</span>
            <a href="#">Terms of Service</a>
            <span className="bullet">•</span>
            <a href="#">SLA Agreement</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
