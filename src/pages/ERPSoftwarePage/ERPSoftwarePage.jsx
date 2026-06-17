import { Link } from 'react-router-dom';
import erpHero from '../../assets/erp_software_hero.png';
import '../ServiceDetails.css';
import './ERPSoftwarePage.css';

export default function ERPSoftwarePage() {
  return (
    <div className="service-page erp-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero__cyber-bg"></div>
        <div className="service-hero__glow"></div>
        <div className="service-hero__inner">
          <div className="service-hero__content">
            <span className="service-hero__badge">
              <i className="bx bx-buildings"></i> ERP Software
            </span>
            <h1 className="service-hero__title">
              Custom Enterprise <span className="text-gradient">ERP Systems</span>
            </h1>
            <p className="service-hero__desc">
              We design and build bespoke Enterprise Resource Planning systems to streamline business processes, automate back-office workflows, integrate third-party systems, and give you real-time visibility into your entire operation.
            </p>
            <div className="service-hero__actions">
              <Link to="/contact" className="btn-primary">Consult an Expert</Link>
              <a href="#details" className="btn-secondary">Explore Capabilities</a>
            </div>
          </div>
          <div className="service-hero__graphic">
            <div className="service-hero__image-wrapper">
              <img src={erpHero} alt="ERP Software" className="service-hero__image" />
              <div className="service-hero__image-glow" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.25) 0%, transparent 70%)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="details" className="service-details">
        <div className="service-details__inner">
          <div className="section-header">
            <h2 className="section-title">ERP System Capabilities</h2>
            <p className="section-subtitle">Consolidate your departments into a single unified dashboard — from finance and supply chain to human resources and business intelligence.</p>
          </div>

          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-wallet"></i></div>
              <h3>Finance &amp; General Ledger</h3>
              <p>Consolidated bookkeeping, multi-currency tax computation rules, automated invoicing triggers, expense approval chains, and complete audit trail logs that meet GAAP and IFRS regulatory standards.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-package"></i></div>
              <h3>Inventory &amp; Supply Chain</h3>
              <p>Real-time serial asset tracking, automated purchase order triggers, supplier portal integrations, cross-warehouse stock replenishment logs, and logistics synchronization across multi-location operations.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-user-pin"></i></div>
              <h3>Human Capital Management (HRM)</h3>
              <p>Automated payroll calculation engines, performance review scorecards, biometric attendance records, self-service leave management dashboards, and structured employee onboarding portals.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-line-chart"></i></div>
              <h3>BI &amp; Analytics Reports</h3>
              <p>Visual reporting dashboards with predictive demand forecasting, custom KPI widgets, automated PDF summary generators, and scheduled executive report delivery for actionable business decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Checklist Section */}
      <section className="migration-staging-section">
        <div className="migration-staging-inner">
          <div className="section-header">
            <h2 className="section-title">Zero-Downtime Data Migration</h2>
            <p className="section-subtitle">A checklist-driven approach to transferring active corporate databases safely without losing records.</p>
          </div>

          <div className="migration-steps-grid">
            <div className="migration-card">
              <div className="migration-header">
                <span className="migration-num">STEP 1</span>
                <h4>Schema Audit</h4>
              </div>
              <ul className="migration-bullets">
                <li><i className="bx bx-check-double text-rose"></i> Map legacy column endpoints.</li>
                <li><i className="bx bx-check-double text-rose"></i> Set relational integrity rules.</li>
                <li><i className="bx bx-check-double text-rose"></i> Identify duplicate profiles.</li>
              </ul>
            </div>

            <div className="migration-card">
              <div className="migration-header">
                <span className="migration-num">STEP 2</span>
                <h4>Shadow Transfer</h4>
              </div>
              <ul className="migration-bullets">
                <li><i className="bx bx-check-double text-rose"></i> Sync databases under backup modes.</li>
                <li><i className="bx bx-check-double text-rose"></i> Run background sync checks.</li>
                <li><i className="bx bx-check-double text-rose"></i> Verify API query timing.</li>
              </ul>
            </div>

            <div className="migration-card">
              <div className="migration-header">
                <span className="migration-num">STEP 3</span>
                <h4>Launch &amp; Handover</h4>
              </div>
              <ul className="migration-bullets">
                <li><i className="bx bx-check-double text-rose"></i> Cutover endpoints during low hours.</li>
                <li><i className="bx bx-check-double text-rose"></i> Run user acceptance testing (UAT).</li>
                <li><i className="bx bx-check-double text-rose"></i> Deliver system guide logs.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="tech-stack-section__inner">
          <div className="section-header">
            <h2 className="section-title">Enterprise Tech Stack</h2>
            <p className="section-subtitle">We build our ERP solutions on robust frameworks to guarantee data consistency, fast queries, and reliable automated scripting.</p>
          </div>
          <div className="tech-logos-grid">
            <div className="tech-logo-item" title="Python">
              <i className="bx bxl-python"></i>
              <span>Python / Django</span>
            </div>
            <div className="tech-logo-item" title="PostgreSQL">
              <i className="bx bx-data"></i>
              <span>PostgreSQL</span>
            </div>
            <div className="tech-logo-item" title="React.js">
              <i className="bx bxl-react"></i>
              <span>React Frontends</span>
            </div>
            <div className="tech-logo-item" title="Docker">
              <i className="bx bx-package"></i>
              <span>Docker Containers</span>
            </div>
            <div className="tech-logo-item" title="Java">
              <i className="bx bx-box"></i>
              <span>Java / Spring Boot</span>
            </div>
            <div className="tech-logo-item" title="AWS">
              <i className="bx bxl-aws"></i>
              <span>AWS Enterprise</span>
            </div>
            <div className="tech-logo-item" title="Node.js">
              <i className="bx bxl-nodejs"></i>
              <span>Node.js / Express</span>
            </div>
            <div className="tech-logo-item" title="Redis">
              <i className="bx bx-bolt"></i>
              <span>Redis Database Cache</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process">
        <div className="service-process__inner">
          <div className="section-header">
            <h2 className="section-title">ERP Development Process</h2>
            <p className="section-subtitle">A meticulously planned software cycle to safely deploy resource software without disrupting daily company operations.</p>
          </div>
          
          <div className="erp-process-flow">
            <div className="flow-step">
              <span className="flow-badge">1</span>
              <h3>Operational Audit</h3>
              <p>We trace current spreadsheet logs and silo constraints.</p>
            </div>
            <div className="flow-step">
              <span className="flow-badge">2</span>
              <h3>Database Mapping</h3>
              <p>Defining entities, relationships, and access roles.</p>
            </div>
            <div className="flow-step">
              <span className="flow-badge">3</span>
              <h3>Modular Sprints</h3>
              <p>Building core systems and deploying to staging environments.</p>
            </div>
            <div className="flow-step">
              <span className="flow-badge">4</span>
              <h3>Cutover &amp; Support</h3>
              <p>Performing database sync cutover with active SLA support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="service-cta__card">
          <div className="service-cta__content">
            <h2>Ready to streamline your business workflows?</h2>
            <p>Schedule a detailed requirement discussion call with our enterprise architect to plan your custom ERP blueprint.</p>
          </div>
          <Link to="/contact" className="btn-cta">
            Request Consultation <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
