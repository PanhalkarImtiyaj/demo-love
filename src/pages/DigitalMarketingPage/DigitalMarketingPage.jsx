import { Link } from 'react-router-dom';
import digitalMarketingHero from '../../assets/digital_marketing_hero.png';
import '../ServiceDetails.css';
import './DigitalMarketingPage.css';

export default function DigitalMarketingPage() {
  return (
    <div className="service-page digital-marketing-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero__cyber-bg"></div>
        <div className="service-hero__glow"></div>
        <div className="service-hero__inner">
          <div className="service-hero__content">
            <span className="service-hero__badge">
              <i className="bx bx-line-chart"></i> Digital Marketing
            </span>
            <h1 className="service-hero__title">
              Data-Driven Growth &amp; <span className="text-gradient">Brand Awareness</span>
            </h1>
            <p className="service-hero__desc">
              We design and execute search, social, and automation strategies engineered to acquire, convert, and retain high-value users. Grow your organic visibility and optimize your advertising spend.
            </p>
            <div className="service-hero__actions">
              <Link to="/contact" className="btn-primary">Scale Your Traffic</Link>
              <a href="#details" className="btn-secondary">Explore Capabilities</a>
            </div>
          </div>
          <div className="service-hero__graphic">
            <div className="service-hero__image-wrapper">
              <img src={digitalMarketingHero} alt="Digital Marketing" className="service-hero__image" />
              <div className="service-hero__image-glow" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.25) 0%, transparent 70%)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="details" className="service-details">
        <div className="service-details__inner">
          <div className="section-header">
            <h2 className="section-title">Growth Marketing Capabilities</h2>
            <p className="section-subtitle">We build growth systems that connect organic traffic to structured conversion pipelines and measurable ROI.</p>
          </div>

          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-search-alt"></i></div>
              <h3>Search Engine Optimization (SEO)</h3>
              <p>Technical site crawls, structural keyword mapping, competitor backlink audits, schema markup implementation, and local SEO signals configured to place your brand on page one of Google search results.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-target-lock"></i></div>
              <h3>Paid Ads Management (PPC)</h3>
              <p>Full setup and daily optimization of Google Search, Bing, YouTube pre-roll, LinkedIn ABM, and Meta retargeting campaigns — engineered to deliver the lowest CPC and highest ROAS for your budget.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-trending-up"></i></div>
              <h3>Conversion Rate Optimization (CRO)</h3>
              <p>Heatmap behavioral analysis, session recordings, structured A/B split tests, landing page redesigns, and funnel drop-off diagnostics that systematically lower CAC and lift conversion percentages.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-mail-send"></i></div>
              <h3>Automation &amp; Drip Workflows</h3>
              <p>Dynamic lead-scoring triggers, automated email onboarding sequences, abandoned-cart recovery flows, and CRM syncing (HubSpot, ActiveCampaign) to nurture prospects at every stage of the funnel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics KPI Dashboard Section */}
      <section className="kpi-analytics-section">
        <div className="kpi-analytics-inner">
          <div className="section-header">
            <h2 className="section-title">Performance Benchmark Averages</h2>
            <p className="section-subtitle">Typical campaign returns driven across our active client profiles.</p>
          </div>

          <div className="kpi-stats-grid">
            <div className="kpi-stat-panel">
              <span className="kpi-panel-num">4.8x</span>
              <h4>Average ROAS</h4>
              <p>Return on ad spend across Google, LinkedIn, and Meta campaigns.</p>
            </div>
            <div className="kpi-stat-panel">
              <span className="kpi-panel-num">+180%</span>
              <h4>Organic Growth</h4>
              <p>Average search engine traffic lift within 6 months of audit launch.</p>
            </div>
            <div className="kpi-stat-panel">
              <span className="kpi-panel-num">3.5%</span>
              <h4>Conversion Rate</h4>
              <p>Average click-to-lead conversion rate on bespoke landing pages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="tech-stack-section__inner">
          <div className="section-header">
            <h2 className="section-title">Growth &amp; Analytics Stack</h2>
            <p className="section-subtitle">We rely on reliable analytics tools to audit performance and trace marketing returns.</p>
          </div>
          <div className="tech-logos-grid">
            <div className="tech-logo-item" title="Google Analytics">
              <i className="bx bx-bar-chart-square"></i>
              <span>Google Analytics</span>
            </div>
            <div className="tech-logo-item" title="Google Tag Manager">
              <i className="bx bx-purchase-tag-alt"></i>
              <span>Tag Manager</span>
            </div>
            <div className="tech-logo-item" title="SEMrush">
              <i className="bx bx-search-alt"></i>
              <span>SEMrush / Ahrefs</span>
            </div>
            <div className="tech-logo-item" title="HubSpot">
              <i className="bx bx-user-voice"></i>
              <span>HubSpot CRM</span>
            </div>
            <div className="tech-logo-item" title="Google Ads">
              <i className="bx bx-target-lock"></i>
              <span>Google PPC</span>
            </div>
            <div className="tech-logo-item" title="Facebook Ads">
              <i className="bx bxl-facebook-square"></i>
              <span>Social Media Ads</span>
            </div>
            <div className="tech-logo-item" title="Hotjar">
              <i className="bx bx-unite"></i>
              <span>Hotjar Heatmaps</span>
            </div>
            <div className="tech-logo-item" title="Mailchimp">
              <i className="bx bx-mail-send"></i>
              <span>Mailchimp API</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process">
        <div className="service-process__inner">
          <div className="section-header">
            <h2 className="section-title">Campaign Strategy Workflow</h2>
            <p className="section-subtitle">How we launch, test, configure, and scale your brand campaigns for maximum return on ad spend (ROAS).</p>
          </div>
          
          <div className="circular-lifecycle-list">
            <div className="cycle-item">
              <div className="cycle-item__head">
                <i className="bx bx-search"></i>
                <span className="cycle-num">1</span>
              </div>
              <h3>Audit &amp; Competitors</h3>
              <p>We trace search volume gaps, competitor keywords, budget curves, and establish targets.</p>
            </div>
            <div className="cycle-item">
              <div className="cycle-item__head">
                <i className="bx bx-target-lock"></i>
                <span className="cycle-num">2</span>
              </div>
              <h3>Tracking Pixels</h3>
              <p>Installing Google Tags, tracking pixels, custom goals, and optimizing landing pages.</p>
            </div>
            <div className="cycle-item">
              <div className="cycle-item__head">
                <i className="bx bx-rocket"></i>
                <span className="cycle-num">3</span>
              </div>
              <h3>A/B Launch</h3>
              <p>Deploying ads across search networks, executing tags, and running creative variations.</p>
            </div>
            <div className="cycle-item">
              <div className="cycle-item__head">
                <i className="bx bx-trending-up"></i>
                <span className="cycle-num">4</span>
              </div>
              <h3>ROAS Scaling</h3>
              <p>Analyzing click pathways, adjusting bids, and scaling budgets on high-margin terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="service-cta__card">
          <div className="service-cta__content">
            <h2>Ready to scale your business traffic?</h2>
            <p>Get in touch with our marketing leads to run an SEO scan and receive a customized digital marketing roadmap.</p>
          </div>
          <Link to="/contact" className="btn-cta">
            Request Brand Audit <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
