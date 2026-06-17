import { Link } from 'react-router-dom';
import crmHero from '../../assets/crm_software_hero.png';
import '../ServiceDetails.css';
import './CRMSoftwarePage.css';

export default function CRMSoftwarePage() {
  return (
    <div className="service-page crm-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero__cyber-bg"></div>
        <div className="service-hero__glow"></div>
        <div className="service-hero__inner">
          <div className="service-hero__content">
            <span className="service-hero__badge">
              <i className="bx bx-group"></i> CRM Software
            </span>
            <h1 className="service-hero__title">
              Custom Customer <span className="text-gradient">CRM Platforms</span>
            </h1>
            <p className="service-hero__desc">
              We design and build bespoke Customer Relationship Management platforms that align with your sales funnel, enhance agent performance, automate client follow-ups, and convert conversations into measurable revenue.
            </p>
            <div className="service-hero__actions">
              <Link to="/contact" className="btn-primary">Consult an Expert</Link>
              <a href="#details" className="btn-secondary">Explore Capabilities</a>
            </div>
          </div>
          <div className="service-hero__graphic">
            <div className="service-hero__image-wrapper">
              <img src={crmHero} alt="CRM Software" className="service-hero__image" />
              <div className="service-hero__image-glow" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.25) 0%, transparent 70%)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="details" className="service-details">
        <div className="service-details__inner">
          <div className="section-header">
            <h2 className="section-title">CRM System Capabilities</h2>
            <p className="section-subtitle">We build custom CRM platforms designed to accelerate deal velocity, centralize customer data, and automate every touchpoint in your sales pipeline.</p>
          </div>

          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-user-circle"></i></div>
              <h3>Contact &amp; Lead Management</h3>
              <p>Centralized 360° contact profiles with full communication history threads, activity logs, document attachments, and intelligent lead scoring tags that help sales agents prioritize high-intent prospects.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-transfer-alt"></i></div>
              <h3>Sales Workflow Automation</h3>
              <p>Automated deal stage progression triggers, task assignment rules, calendar follow-up reminders, proposal generation sequences, and email drip campaigns synced directly to contact activity events.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-chat"></i></div>
              <h3>Omnichannel Support Hub</h3>
              <p>Unified ticket queue management across email, WhatsApp Business API, live chat widgets, and phone call logs — with SLA breach alerts, auto-routing rules, and shared inbox dashboards for support teams.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-bar-chart-alt-2"></i></div>
              <h3>Sales Reporting &amp; Analytics</h3>
              <p>Live revenue pipeline forecasting, configurable conversion funnel metrics, lead source attribution heatmaps, rep performance leaderboards, and scheduled executive summary PDF report generators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Helpdesk & Customer Support Channels */}
      <section className="crm-channels-section">
        <div className="crm-channels-inner">
          <div className="section-header">
            <h2 className="section-title">Support Hub Channels</h2>
            <p className="section-subtitle">Consolidate customer tickets, live support channels, and support documentation databases.</p>
          </div>

          <div className="channels-grid">
            <div className="channel-card">
              <div className="channel-card__head">
                <div className="channel-icon"><i className="bx bx-envelope"></i></div>
                <h3>Ticket Desk</h3>
              </div>
              <p>Configure automated categorization triggers, SLA indicator trackers, routing tags, and direct reply template integrations.</p>
            </div>

            <div className="channel-card">
              <div className="channel-card__head">
                <div className="channel-icon"><i className="bx bx-chat"></i></div>
                <h3>Omnichannel Chat</h3>
              </div>
              <p>Sync communications from your live site chat, WhatsApp corporate business profiles, and support emails into one dashboard inbox.</p>
            </div>

            <div className="channel-card">
              <div className="channel-card__head">
                <div className="channel-icon"><i className="bx bx-cabinet"></i></div>
                <h3>Knowledge Base</h3>
              </div>
              <p>Host customer help manuals, self-service documentation libraries, search guides, and articles to lower active incoming ticket load.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="tech-stack-section__inner">
          <div className="section-header">
            <h2 className="section-title">Technical Stack</h2>
            <p className="section-subtitle">We select performant architectures to ensure real-time status updates, sub-second query latency, and high security.</p>
          </div>
          <div className="tech-logos-grid">
            <div className="tech-logo-item" title="React.js">
              <i className="bx bxl-react"></i>
              <span>React Frontends</span>
            </div>
            <div className="tech-logo-item" title="Node.js">
              <i className="bx bxl-nodejs"></i>
              <span>Node.js / Express</span>
            </div>
            <div className="tech-logo-item" title="PostgreSQL">
              <i className="bx bx-data"></i>
              <span>PostgreSQL</span>
            </div>
            <div className="tech-logo-item" title="Redis">
              <i className="bx bx-bolt"></i>
              <span>Redis Web Sockets</span>
            </div>
            <div className="tech-logo-item" title="Python">
              <i className="bx bxl-python"></i>
              <span>Python / FastAPI</span>
            </div>
            <div className="tech-logo-item" title="Docker">
              <i className="bx bx-package"></i>
              <span>Docker &amp; Staging</span>
            </div>
            <div className="tech-logo-item" title="Git">
              <i className="bx bxl-github"></i>
              <span>Git &amp; Pipelines</span>
            </div>
            <div className="tech-logo-item" title="AWS">
              <i className="bx bxl-aws"></i>
              <span>AWS Cloud Server</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process">
        <div className="service-process__inner">
          <div className="section-header">
            <h2 className="section-title">CRM Development Process</h2>
            <p className="section-subtitle">A collaborative roadmap focused on creating clean customer management platforms with user friendly learning curves.</p>
          </div>
          
          <div className="crm-process-flow">
            <div className="process-card">
              <div className="process-num">01</div>
              <h3>Funnel Audit</h3>
              <p>We trace your lead sourcing, client staging criteria, and list data tags.</p>
            </div>
            <div className="process-card">
              <div className="process-num">02</div>
              <h3>UX Mockups</h3>
              <p>Designing interfaces focusing on pipeline board layout and response speed.</p>
            </div>
            <div className="process-card">
              <div className="process-num">03</div>
              <h3>API Sync</h3>
              <p>Coding database relationships and sync gateways for phone/email providers.</p>
            </div>
            <div className="process-card">
              <div className="process-num">04</div>
              <h3>Sync &amp; Go-Live</h3>
              <p>Importing active lead profiles, testing triggers, and deploying with system training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="service-cta__card">
          <div className="service-cta__content">
            <h2>Ready to transform your customer journey?</h2>
            <p>Schedule a discovery call with our product consultants to sketch out your customer pipeline specs and request a quote.</p>
          </div>
          <Link to="/contact" className="btn-cta">
            Request Proposal <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
