import { useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    scale: 'Startup MVP',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Web Development',
      scale: 'Startup MVP',
      message: '',
    });
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <div className="contact-page">
      {/* Hero Header */}
      <section className="contact-hero">
        <div className="contact-hero__glow" />
        <div className="contact-hero__inner">
          <span className="contact-tag">CONNECT WITH VSS</span>
          <h1 className="contact-title">Let's Build Something <span>Exceptional</span></h1>
          <p className="contact-subtitle">
            Have a project in mind or need technical consultations? Contact our software engineers and get a response within 2 hours.
          </p>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <section className="contact-body">
        <div className="contact-body__inner">
          
          {/* Left Column: Info Card */}
          <div className="contact-info">
            <h2 className="section-title">Get in Touch Directly</h2>
            <p className="contact-info__desc">
              Reach out via email, phone, or direct WhatsApp for instant coordination on your custom project requirements.
            </p>

            <div className="contact-cards">
              <div className="contact-card-item">
                <div className="contact-card-item__icon"><i className="bx bx-phone-call" /></div>
                <div>
                  <span className="contact-card-item__lbl">Call Technical Coordinator</span>
                  <a href="tel:+917517005494" className="contact-card-item__val">+91 7517005494</a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-card-item__icon"><i className="bx bx-envelope" /></div>
                <div>
                  <span className="contact-card-item__lbl">Email Project Manager</span>
                  <a href="mailto:contact@vsssoftware.com" className="contact-card-item__val">contact@vsssoftware.com</a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-card-item__icon"><i className="bx bx-map" /></div>
                <div>
                  <span className="contact-card-item__lbl">VSS Headquarters Location</span>
                  <span className="contact-card-item__val">Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="contact-whatsapp-box">
              <div className="whatsapp-box__icon"><i className="bx bxl-whatsapp" /></div>
              <div className="whatsapp-box__text">
                <h4>Prefer Quick Chat?</h4>
                <p>Connect instantly with our lead technical coordinator on WhatsApp.</p>
                <a
                  href="https://wa.me/917517005494?text=Hello%20VSS%20Software,%20I%20am%20interested%20in%20initiating%20a%20project%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-box__btn"
                >
                  Start WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-container">
            {formSubmitted ? (
              <div className="contact-form__success">
                <div className="success-icon"><i className="bx bx-check-circle" /></div>
                <h3>Requirements Received!</h3>
                <p>Thank you for submitting your project parameters. Our Principal Software Architect will review the requirements and reach out to you within 2 hours to discuss the timeline.</p>
              </div>
            ) : (
              <>
                <h3 className="form-box-title">Initiate Project Consultation</h3>
                <p className="form-box-subtitle">Fill in the parameters below to configure your technical request.</p>

                <form className="project-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Business Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="10-digit number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="service">Required Service</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="Cloud & DevOps">Cloud & DevOps</option>
                        <option value="Security Auditing">Security Auditing</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="scale">Project Scale</label>
                      <select
                        id="scale"
                        name="scale"
                        value={formData.scale}
                        onChange={handleInputChange}
                      >
                        <option value="Startup MVP">Startup MVP</option>
                        <option value="Business Expansion">Business Expansion</option>
                        <option value="Enterprise Solution">Enterprise Solution</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Requirements / Project Scope</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Please describe what you are looking to build (tech stack preferences, timeline, key features)..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <button type="submit" className="form-btn-submit">
                    Send Project Requirements <i className="bx bx-paper-plane" />
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
