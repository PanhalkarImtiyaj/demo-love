import { Link } from 'react-router-dom';
import customSoftwareHero from '../../assets/custom_software_hero.png';
import '../ServiceDetails.css';
import './CustomSoftwarePage.css';

export default function CustomSoftwarePage() {
  return (
    <div className="service-page custom-software-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero__cyber-bg"></div>
        <div className="service-hero__glow"></div>
        <div className="service-hero__inner">
          <div className="service-hero__content">
            <span className="service-hero__badge">
              <i className="bx bx-layer"></i> Custom Software
            </span>
            <h1 className="service-hero__title">
              Bespoke Enterprise <span className="text-gradient">Software Systems</span>
            </h1>
            <p className="service-hero__desc">
              We engineer secure, custom ERP, CRM, and SaaS solutions tailored exactly to your workflows. Maximize operational performance, remove licensing bottlenecks, and future-proof your digital assets.
            </p>
            <div className="service-hero__actions">
              <Link to="/contact" className="btn-primary">Consult an Architect</Link>
              <a href="#details" className="btn-secondary">Explore Capabilities</a>
            </div>
          </div>
          <div className="service-hero__graphic">
            <div className="service-hero__image-wrapper">
              <img src={customSoftwareHero} alt="Custom Software" className="service-hero__image" />
              <div className="service-hero__image-glow" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.25) 0%, transparent 70%)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="details" className="service-details">
        <div className="service-details__inner">
          <div className="section-header">
            <h2 className="section-title">Software Engineering Capabilities</h2>
            <p className="section-subtitle">We design backend-heavy enterprise platforms engineered to automate manual tasks and sync your data pipelines.</p>
          </div>

          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-cog"></i></div>
              <h3>Bespoke CRM & ERP</h3>
              <p>We build customized internal customer databases, sales workflows, stock managers, and billing platforms custom-made for your operations, eliminating third-party licensing fees.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-cloud"></i></div>
              <h3>Cloud Architectures</h3>
              <p>Designing and deploying highly scalable cloud infrastructure systems (AWS / Azure) complete with containerized architectures (Docker, Kubernetes) and automated load balancers.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-shield-quarter"></i></div>
              <h3>Legacy Refactoring</h3>
              <p>Safely refactoring outdated legacy applications and databases into performant web applications using clean microservices without losing active records during cutover.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-git-branch"></i></div>
              <h3>API & Microservices</h3>
              <p>Building clean REST and GraphQL API gateways to link scattered database streams, facilitating secure, real-time data syncs across your operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Compliance Credentials Checklist Section */}
      <section className="compliance-section">
        <div className="compliance-inner">
          <div className="compliance-card-accent">
            <div className="compliance-card-header">
              <i className="bx bx-shield-alt-2 card-shield-icon"></i>
              <div>
                <h3>Security & Compliance Protocols</h3>
                <p>We configure database layers to meet strict regulatory and security guidelines.</p>
              </div>
            </div>

            <div className="compliance-checklist-grid">
              <div className="check-list-item">
                <i className="bx bx-check-shield text-primary-theme"></i>
                <div>
                  <h4>Role-Based Access Control</h4>
                  <p>Fine-grained permissions and active database logging for sensitive files.</p>
                </div>
              </div>
              <div className="check-list-item">
                <i className="bx bx-check-shield text-primary-theme"></i>
                <div>
                  <h4>Data Encryption SLA</h4>
                  <p>AES-256 encryption at rest and secure SSL/TLS protocols during data transit.</p>
                </div>
              </div>
              <div className="check-list-item">
                <i className="bx bx-check-shield text-primary-theme"></i>
                <div>
                  <h4>Compliance Ready</h4>
                  <p>Software designed according to ISO 27001, GDPR, and HIPAA specifications.</p>
                </div>
              </div>
              <div className="check-list-item">
                <i className="bx bx-check-shield text-primary-theme"></i>
                <div>
                  <h4>Active Firewall & Rate Limits</h4>
                  <p>Protection against SQL injection, cross-site scripting (XSS), and DDOS attacks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="tech-stack-section__inner">
          <div className="section-header">
            <h2 className="section-title">Enterprise Tech Stack</h2>
            <p className="section-subtitle">We utilize tools built for data integrity, multithreaded transactions, and database scaling.</p>
          </div>
          <div className="tech-logos-grid">
            <div className="tech-logo-item" title="Python">
              <i className="bx bxl-python"></i>
              <span>Python / Django</span>
            </div>
            <div className="tech-logo-item" title="Java">
              <i className="bx bx-box"></i>
              <span>Java / Spring</span>
            </div>
            <div className="tech-logo-item" title="Docker">
              <i className="bx bx-package"></i>
              <span>Docker & K8s</span>
            </div>
            <div className="tech-logo-item" title="PostgreSQL">
              <i className="bx bx-data"></i>
              <span>PostgreSQL</span>
            </div>
            <div className="tech-logo-item" title="MongoDB">
              <i className="bx bx-circle-three-quarter"></i>
              <span>MongoDB</span>
            </div>
            <div className="tech-logo-item" title="Go Lang">
              <i className="bx bx-code"></i>
              <span>Go / Gin</span>
            </div>
            <div className="tech-logo-item" title="AWS Cloud">
              <i className="bx bxl-aws"></i>
              <span>AWS / DevOps</span>
            </div>
            <div className="tech-logo-item" title="Redis Caching">
              <i className="bx bx-bolt"></i>
              <span>Redis / Cache</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Unique Nested Sprint roadmap */}
      <section className="service-process">
        <div className="service-process__inner">
          <div className="section-header">
            <h2 className="section-title">Enterprise Software Process</h2>
            <p className="section-subtitle">A highly collaborative, structured technical layout process mapping workflows from design to staging environments.</p>
          </div>

          <div className="sprint-roadmap">
            <div className="roadmap-phase">
              <div className="phase-marker">PHASE 1</div>
              <div className="phase-details">
                <h3>System Discovery & Audit</h3>
                <ul className="phase-bullets">
                  <li>Analyze spreadsheets, manual files, and silo bottlenecks.</li>
                  <li>Draft entity relationship database schemas (ERD) and flowcharts.</li>
                  <li>Document strict GDPR / HIPAA compliance credentials requirements.</li>
                </ul>
              </div>
            </div>

            <div className="roadmap-phase">
              <div className="phase-marker">PHASE 2</div>
              <div className="phase-details">
                <h3>Iterative sprint coding</h3>
                <ul className="phase-bullets">
                  <li>Deploy database schema, backend endpoints, and admin dashboards.</li>
                  <li>Run continuous unit testing scenarios (CI/CD pipelines).</li>
                  <li>Integrate communication/SMS APIs (Twilio, SendGrid, Stripe).</li>
                </ul>
              </div>
            </div>

            <div className="roadmap-phase">
              <div className="phase-marker">PHASE 3</div>
              <div className="phase-details">
                <h3>Staging sync & migration</h3>
                <ul className="phase-bullets">
                  <li>Migrate mock production records to staging safely.</li>
                  <li>Verify user authentication keys and access logs.</li>
                  <li>Launch and hand over admin manuals.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="service-cta__card">
          <div className="service-cta__content">
            <h2>Need a tailormade software solution?</h2>
            <p>Schedule a technical consult with our head architect to outline your integration specs and get a detailed proposal.</p>
          </div>
          <Link to="/contact" className="btn-cta">
            Request Technical Proposal <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
