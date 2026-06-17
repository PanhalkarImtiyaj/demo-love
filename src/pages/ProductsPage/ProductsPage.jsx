import { Link } from 'react-router-dom';
import './ProductsPage.css';

const products = [
  {
    id: 'vss-crm',
    icon: 'bx bx-group',
    tag: 'CRM PLATFORM',
    name: 'VSS CRM Pro',
    tagline: 'Customer Relationship Management Built for Growth',
    desc: 'A full-featured CRM system designed to manage leads, automate follow-ups, track deals through a visual sales pipeline, and generate real-time revenue analytics. Deployable on cloud or on-premise for enterprise clients.',
    color: '#06b6d4',
    colorRgb: '6,182,212',
    features: [
      { icon: 'bx bx-filter-alt', label: 'Lead Management & Scoring' },
      { icon: 'bx bx-bell', label: 'Automated Follow-up Reminders' },
      { icon: 'bx bx-bar-chart-alt-2', label: 'Sales Pipeline Analytics' },
      { icon: 'bx bx-envelope', label: 'Email & WhatsApp Integration' },
      { icon: 'bx bx-user-check', label: 'Role-based Access Control' },
      { icon: 'bx bx-cloud', label: 'Cloud & On-premise Deploy' },
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    status: 'Available Now',
    link: '/contact',
  },
  {
    id: 'vss-erp',
    icon: 'bx bx-buildings',
    tag: 'ERP PLATFORM',
    name: 'VSS ERP Suite',
    tagline: 'Unified Enterprise Resource Planning System',
    desc: 'An integrated ERP platform covering finance, inventory management, HR payroll, purchase orders, and business intelligence dashboards. Built for medium to large enterprises requiring unified data operations across departments.',
    color: '#ec4899',
    colorRgb: '236,72,153',
    features: [
      { icon: 'bx bx-money', label: 'Finance & Accounts Payable' },
      { icon: 'bx bx-package', label: 'Inventory & Warehouse Mgmt' },
      { icon: 'bx bx-id-card', label: 'HR & Payroll Processing' },
      { icon: 'bx bx-purchase-tag', label: 'Purchase Order Workflows' },
      { icon: 'bx bx-pie-chart-alt', label: 'BI Dashboards & Reports' },
      { icon: 'bx bx-link', label: 'Third-Party API Integrations' },
    ],
    tech: ['React', 'Python', 'PostgreSQL', 'Docker', 'Azure'],
    status: 'Available Now',
    link: '/contact',
  },
  {
    id: 'vss-hrms',
    icon: 'bx bx-briefcase',
    tag: 'HRMS PLATFORM',
    name: 'VSS HRMS',
    tagline: 'Smart Human Resource Management System',
    desc: 'A modern HRMS solution managing employee onboarding, attendance tracking, leave management, performance reviews, and payroll processing with automated compliance reporting and departmental hierarchy visualization.',
    color: '#10b981',
    colorRgb: '16,185,129',
    features: [
      { icon: 'bx bx-user-plus', label: 'Employee Onboarding Flow' },
      { icon: 'bx bx-time', label: 'Attendance & Leave Tracking' },
      { icon: 'bx bx-star', label: 'Performance Review Cycles' },
      { icon: 'bx bx-calculator', label: 'Payroll & Tax Computation' },
      { icon: 'bx bx-file', label: 'Compliance Auto-Reporting' },
      { icon: 'bx bx-sitemap', label: 'Org Chart Visualization' },
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'AWS Lambda', 'Firebase'],
    status: 'Available Now',
    link: '/contact',
  },
  {
    id: 'vss-lms',
    icon: 'bx bx-book-open',
    tag: 'LMS PLATFORM',
    name: 'VSS LearnPro',
    tagline: 'Learning Management System for Modern Teams',
    desc: 'A scalable LMS built for corporates and educational institutions. Supports video courses, live sessions, quizzes, certificates, and progress dashboards. White-labeled for your organization\'s branding requirements.',
    color: '#f59e0b',
    colorRgb: '245,158,11',
    features: [
      { icon: 'bx bx-video', label: 'Video Course Hosting' },
      { icon: 'bx bx-live', label: 'Live Session Integration' },
      { icon: 'bx bx-check-square', label: 'Quizzes & Assessments' },
      { icon: 'bx bx-award', label: 'Auto Certificate Generation' },
      { icon: 'bx bx-trending-up', label: 'Learner Progress Analytics' },
      { icon: 'bx bx-palette', label: 'White-label Branding' },
    ],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS S3', 'Stripe'],
    status: 'Coming Soon',
    link: '/contact',
  },
];

export default function ProductsPage() {
  return (
    <div className="products-page">
      {/* Dark Tech Hero */}
      <section className="products-hero">
        <div className="products-hero__glow" />
        <div className="products-hero__grid-bg" />
        <div className="products-hero__inner">
          <span className="products-tag">
            <i className="bx bx-cube-alt"></i> VSS PRODUCTS
          </span>
          <h1 className="products-title">
            Powerful Software <span>Products</span><br />Built for Scale
          </h1>
          <p className="products-subtitle">
            We build and maintain enterprise-grade software products. Deploy them as SaaS, on-premise, or white-labeled for your business. Each product is production-ready and backed by VSS engineering expertise.
          </p>
          <div className="products-hero__badges">
            <span className="hero-badge"><i className="bx bx-shield-quarter"></i> Enterprise-Grade Security</span>
            <span className="hero-badge"><i className="bx bx-cloud"></i> Cloud & On-Premise</span>
            <span className="hero-badge"><i className="bx bx-support"></i> Dedicated Support</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="products-grid-inner">
          <div className="products-section-header">
            <h2 className="products-section-title">Our <span>Product Suite</span></h2>
            <p className="products-section-desc">Four battle-tested software platforms solving real business challenges at scale.</p>
          </div>

          <div className="products-cards-grid">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card"
                style={{ '--p-color': product.color, '--p-rgb': product.colorRgb }}
              >
                {/* Card Top */}
                <div className="product-card__top">
                  <div className="product-card__icon-wrap">
                    <i className={product.icon}></i>
                  </div>
                  <div className="product-card__meta">
                    <span className="product-tag-pill">{product.tag}</span>
                    <span className={`product-status ${product.status === 'Coming Soon' ? 'coming-soon' : 'available'}`}>
                      <span className="status-dot"></span>
                      {product.status}
                    </span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__tagline">{product.tagline}</p>
                <p className="product-card__desc">{product.desc}</p>

                {/* Features List */}
                <div className="product-card__features">
                  <span className="features-label">Key Features</span>
                  <ul className="features-list">
                    {product.features.map((f, i) => (
                      <li key={i}>
                        <i className={f.icon}></i>
                        <span>{f.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="product-card__tech">
                  {product.tech.map((t, i) => (
                    <span key={i} className="tech-pill">{t}</span>
                  ))}
                </div>

                {/* CTA */}
                <Link to={product.link} className="product-card__cta">
                  Request Demo <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VSS Products CTA Section */}
      <section className="products-cta-section">
        <div className="products-cta-inner">
          <div className="products-cta-content">
            <span className="cta-eyebrow">NEED A CUSTOM BUILD?</span>
            <h2 className="products-cta-title">Can't Find What You Need?</h2>
            <p className="products-cta-desc">
              We also build fully custom software systems from scratch — tailored to your exact workflow, integrations, and scale requirements. Talk to our engineers today.
            </p>
            <div className="products-cta-actions">
              <Link to="/contact" className="cta-btn-primary">
                <i className="bx bx-phone-call"></i> Talk to an Engineer
              </Link>
              <Link to="/services/custom-software" className="cta-btn-secondary">
                View Custom Services <i className="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
          </div>
          <div className="products-cta-stats">
            <div className="cta-stat">
              <span className="cta-stat-num">4+</span>
              <span className="cta-stat-lbl">Ready Products</span>
            </div>
            <div className="cta-stat">
              <span className="cta-stat-num">120+</span>
              <span className="cta-stat-lbl">Deployments Done</span>
            </div>
            <div className="cta-stat">
              <span className="cta-stat-num">99.9%</span>
              <span className="cta-stat-lbl">Uptime SLA</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
