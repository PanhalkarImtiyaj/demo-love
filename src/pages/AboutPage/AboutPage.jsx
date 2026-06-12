import { Link } from 'react-router-dom';
import './AboutPage.css';

export default function AboutPage() {
  const pillars = [
    {
      icon: 'bx bx-code-alt',
      title: 'Engineering Excellence',
      desc: 'We enforce clean code principles, test-driven methodologies, and robust design patterns to ensure future-proof systems.',
    },
    {
      icon: 'bx bx-shield-quarter',
      title: 'Zero-Trust Security',
      desc: 'Security is not an afterthought. We implement encryption at rest/transit, role gateways, and automated vulnerability checks.',
    },
    {
      icon: 'bx bx-refresh',
      title: 'Agile & Collaborative',
      desc: 'We follow continuous integrations and weekly demos, keeping you close to development decisions from start to deploy.',
    },
    {
      icon: 'bx bx-rocket',
      title: 'High Performance',
      desc: 'We optimize query response, caching layers, and load-balanced node clusters to guarantee quick, scalable systems.',
    },
  ];

  const team = [
    {
      name: 'Imtiyaj Panhalkar',
      role: 'CEO & Principal Software Architect',
      image: 'https://i.pravatar.cc/150?img=33',
      bio: 'Over 10 years of experience designing robust distributed systems, microservices, and database solutions.',
    },
    {
      name: 'Priya Deshmukh',
      role: 'Head of Web Engineering',
      image: 'https://i.pravatar.cc/150?img=47',
      bio: 'Expert in modern React/Next.js frameworks and native app optimization with a focus on premium visual layouts.',
    },
    {
      name: 'Rohan Sharma',
      role: 'Director of Cloud & DevSecOps',
      image: 'https://i.pravatar.cc/150?img=12',
      bio: 'Specialist in Kubernetes orchestrations, automated Terraform setups, and continuous pipeline security audits.',
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Header */}
      <section className="about-hero">
        <div className="about-hero__glow" />
        <div className="about-hero__inner">
          <span className="about-tag">ABOUT US</span>
          <h1 className="about-title">Empowering Businesses with <span>Modern Software Systems</span></h1>
          <p className="about-subtitle">
            VSS Software Solutions is a full-service technology company. We engineer custom enterprise software, scalable cloud architectures, and user-centric applications designed to grow.
          </p>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="about-story">
        <div className="about-story__inner">
          <div className="about-story__content">
            <h2 className="section-title">Our Story & Tech Philosophy</h2>
            <p className="story-paragraph">
              Founded on the principles of engineering rigour and modern aesthetics, VSS Software Solutions bridges the gap between complex business logic and exceptional user experiences. We don't believe in generic templates; we build tailored technical structures designed to withstand high volumes and grow seamlessly.
            </p>
            <p className="story-paragraph">
              We operate globally, serving both rapid-growth startups looking to iterate quickly and mature enterprises aiming to refactor legacy structures into modern, secure microservices.
            </p>
            <div className="story-stats">
              <div className="story-stat-item">
                <span className="stat-num">500+</span>
                <span className="stat-lbl">Systems Deployed</span>
              </div>
              <div className="story-stat-item">
                <span className="stat-num">99.9%</span>
                <span className="stat-lbl">Uptime SLA Kept</span>
              </div>
            </div>
          </div>
          <div className="about-story__visual">
            <div className="visual-box">
              <div className="visual-code-window">
                <div className="window-header">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                  <span className="window-title">vss-architecture.json</span>
                </div>
                <pre className="window-code">
                  <code>{`{
  "company": "VSS Software Solutions",
  "status": "Ready to Scale",
  "core_stack": ["React", "Node.js", "Kubernetes", "AWS"],
  "security": "Zero-Trust Hardened",
  "performance": {
    "caching": "Redis",
    "delivery": "Cloudflare CDN",
    "latency": "sub-100ms"
  }
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="about-pillars">
        <div className="about-pillars__inner">
          <h2 className="section-title text-center">Our Engineering <span>Pillars</span></h2>
          <p className="section-desc text-center">Every project we code rests on four essential pillars of system delivery.</p>
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <div className="pillar-card" key={i}>
                <div className="pillar-card__icon-wrap">
                  <i className={p.icon} />
                </div>
                <h3 className="pillar-card__title">{p.title}</h3>
                <p className="pillar-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="about-team">
        <div className="about-team__inner">
          <h2 className="section-title text-center">Meet Our <span>Leaders</span></h2>
          <p className="section-desc text-center">Experienced software engineers and project coordinators dedicated to project success.</p>
          <div className="team-grid">
            {team.map((t, i) => (
              <div className="team-card" key={i}>
                <div className="team-card__img-wrap">
                  <img src={t.image} alt={t.name} className="team-card__img" />
                </div>
                <h3 className="team-card__name">{t.name}</h3>
                <span className="team-card__role">{t.role}</span>
                <p className="team-card__bio">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="about-cta__inner">
          <h2 className="cta-title">Have a Custom Project in Mind?</h2>
          <p className="cta-desc">Let us build a secure, high-performance, and beautifully crafted software application for your business.</p>
          <Link to="/contact" className="cta-btn">Start Technical Consultation <i className="bx bx-right-arrow-alt" /></Link>
        </div>
      </section>
    </div>
  );
}
