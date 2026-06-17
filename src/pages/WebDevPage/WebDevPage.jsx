import { Link } from 'react-router-dom';
import webDevHero from '../../assets/web_development_hero.png';
import '../ServiceDetails.css';
import './WebDevPage.css';

export default function WebDevPage() {
  return (
    <div className="service-page webdev-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero__cyber-bg"></div>
        <div className="service-hero__glow"></div>
        <div className="service-hero__inner">
          <div className="service-hero__content">
            <span className="service-hero__badge">
              <i className="bx bx-code-alt"></i> Web Development
            </span>
            <h1 className="service-hero__title">
              Crafting High-Performance, Scalable <span className="text-gradient">Web Solutions</span>
            </h1>
            <p className="service-hero__desc">
              We design and build bespoke web portals, SaaS platforms, and enterprise web solutions that load in milliseconds, scale to millions of users, and drive meaningful business outcomes.
            </p>
            <div className="service-hero__actions">
              <Link to="/contact" className="btn-primary">Start Your Project</Link>
              <a href="#details" className="btn-secondary">Explore Capabilities</a>
            </div>
          </div>
          <div className="service-hero__graphic">
            <div className="service-hero__image-wrapper">
              <img src={webDevHero} alt="Web Development" className="service-hero__image" />
              <div className="service-hero__image-glow" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.25) 0%, transparent 70%)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section id="details" className="service-details">
        <div className="service-details__inner">
          <div className="section-header">
            <h2 className="section-title">Core Web Capabilities</h2>
            <p className="section-subtitle">We cover the full spectrum of modern web technology to bring your ideas to life.</p>
          </div>

          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-laptop"></i></div>
              <h3>Custom SaaS Platforms</h3>
              <p>We develop secure cloud dashboards, multi-tenant databases, Stripe payment integrations, and role-based permissions systems configured to support heavy workloads with extreme speed.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-bolt"></i></div>
              <h3>Next-Gen SSR Apps</h3>
              <p>Harnessing Next.js and React to build blazing fast server-side rendered applications. Optimized for automated SEO meta tags indexing, core web vitals, and instant transitions.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-shopping-bag"></i></div>
              <h3>Headless CMS & Commerce</h3>
              <p>Decoupled content management workflows using headless CMS systems (Strapi, Sanity) linked to custom frontends, enabling omnichannel store catalog syncs.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-shield-quarter"></i></div>
              <h3>Web Security & SSO</h3>
              <p>Advanced enterprise security setups, active firewalls, OAuth/SSO login protocols, data transit encryption, and regular vulnerability audits matching OWASP criteria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="tech-stack-section__inner">
          <div className="section-header">
            <h2 className="section-title">Our Technical Stack</h2>
            <p className="section-subtitle">We select robust, battle-tested modern tools to build stable architectures.</p>
          </div>
          <div className="tech-logos-grid">
            <div className="tech-logo-item" title="React.js">
              <i className="bx bxl-react"></i>
              <span>React.js</span>
            </div>
            <div className="tech-logo-item" title="Next.js">
              <i className="bx bx-file"></i>
              <span>Next.js</span>
            </div>
            <div className="tech-logo-item" title="Node.js">
              <i className="bx bxl-nodejs"></i>
              <span>Node.js</span>
            </div>
            <div className="tech-logo-item" title="JavaScript">
              <i className="bx bxl-javascript"></i>
              <span>JavaScript</span>
            </div>
            <div className="tech-logo-item" title="HTML5 & CSS3">
              <i className="bx bxl-html5"></i>
              <span>HTML5 / CSS3</span>
            </div>
            <div className="tech-logo-item" title="GitHub / DevOps">
              <i className="bx bxl-github"></i>
              <span>Git & CI/CD</span>
            </div>
            <div className="tech-logo-item" title="Database / PostgreSQL">
              <i className="bx bx-server"></i>
              <span>PostgreSQL</span>
            </div>
            <div className="tech-logo-item" title="Cloud / AWS">
              <i className="bx bxl-aws"></i>
              <span>AWS Cloud</span>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Process Timeline Section */}
      <section className="service-process">
        <div className="service-process__inner">
          <div className="section-header">
            <h2 className="section-title">Web Development Process</h2>
            <p className="section-subtitle">A transparent, structured workflow engineered to deliver results on time.</p>
          </div>
          <div className="alternating-timeline">
            <div className="timeline-block">
              <div className="timeline-badge">01</div>
              <div className="timeline-content">
                <h3>Discovery & Blueprint</h3>
                <p>We map out user flows, system specifications, API structures, and target metrics before writing a single line of code.</p>
              </div>
            </div>
            <div className="timeline-block">
              <div className="timeline-badge">02</div>
              <div className="timeline-content">
                <h3>Interactive UI/UX Design</h3>
                <p>We build clickable Figma mockups that establish a clean visual system, typography, and custom micro-animations matching your brand.</p>
              </div>
            </div>
            <div className="timeline-block">
              <div className="timeline-badge">03</div>
              <div className="timeline-content">
                <h3>Agile Development</h3>
                <p>We implement the frontend and backend architectures in sprints, incorporating unit tests, accessibility compliance, and code audits.</p>
              </div>
            </div>
            <div className="timeline-block">
              <div className="timeline-badge">04</div>
              <div className="timeline-content">
                <h3>QA & Global Launch</h3>
                <p>Comprehensive speed testing, responsive compatibility reviews across viewports, SEO validation, and cloud deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="service-cta__card">
          <div className="service-cta__content">
            <h2>Ready to build something extraordinary?</h2>
            <p>Let's map out your project details and deliver a robust solution custom-made for your audience.</p>
          </div>
          <Link to="/contact" className="btn-cta">
            Get Free Consultation <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
