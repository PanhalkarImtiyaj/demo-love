import { Link } from 'react-router-dom';
import founderImg from '../../assets/founder.png';
import rahidImg from '../../assets/rahid-director.png';
import shanvajImg from '../../assets/shanvaj director.png';
import teamImg from '../../assets/team1.png';
import teamMeetingImg from '../../assets/teammeting.png';
import './AboutPage.css';

const pillars = [
  {
    icon: 'bx bx-code-alt',
    title: 'Engineering Excellence',
    color: '#7c3aed',
    colorRgb: '124,58,237',
    desc: 'Clean code principles, test-driven methodologies, and robust design patterns to ensure future-proof systems.',
  },
  {
    icon: 'bx bx-shield-quarter',
    title: 'Zero-Trust Security',
    color: '#3b82f6',
    colorRgb: '59,130,246',
    desc: 'Encryption at rest/transit, role gateways, and automated vulnerability checks built into every layer.',
  },
  {
    icon: 'bx bx-refresh',
    title: 'Agile Delivery',
    color: '#10b981',
    colorRgb: '16,185,129',
    desc: 'Continuous integration and weekly demos, keeping you close to development decisions from kickoff to deploy.',
  },
  {
    icon: 'bx bx-rocket',
    title: 'High Performance',
    color: '#f59e0b',
    colorRgb: '245,158,11',
    desc: 'Optimized query response, caching layers, and load-balanced clusters to guarantee speed at scale.',
  },
];

const leaders = [
  {
    name: 'Imtiyaj Panhalkar',
    role: 'Founder & CEO',
    image: founderImg,
    bio: "Dedicated to guiding VSS with vision and integrity, fostering innovation, and inspiring our team to achieve excellence in everything we do.",
    socials: { linkedin: '#', github: '#' },
    accentColor: '#7c3aed',
    accentColorRgb: '124,58,237',
    isFounder: true,
  },
  {
    name: 'Rashid Panhalkar',
    role: 'Director',
    image: rahidImg,
    bio: "Focusing on strategic growth and operational excellence, committed to empowering teams and building lasting partnerships.",
    socials: { linkedin: '#', github: '#' },
    accentColor: '#3b82f6',
    accentColorRgb: '59,130,246',
    isFounder: false,
  },
  {
    name: 'Shahanvaj Panhalkar',
    role: 'Director',
    image: shanvajImg,
    bio: "Driving creative thinking and continuous improvement, mentoring individuals to turn challenges into growth opportunities.",
    socials: { linkedin: '#', github: '#' },
    accentColor: '#ec4899',
    accentColorRgb: '236,72,153',
    isFounder: false,
  },
];

const employees = [
  {
    name: 'Ankit Joshi',
    role: 'Senior Flutter Developer',
    dept: 'Mobile Engineering',
    image: 'https://i.pravatar.cc/150?img=68',
    color: '#10b981',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'UI/UX Design Lead',
    dept: 'Design',
    image: 'https://i.pravatar.cc/150?img=25',
    color: '#ec4899',
  },
  {
    name: 'Rahul Patil',
    role: 'Backend Engineer',
    dept: 'Engineering',
    image: 'https://i.pravatar.cc/150?img=33',
    color: '#f59e0b',
  },
  {
    name: 'Meera Nair',
    role: 'Digital Marketing Specialist',
    dept: 'Marketing',
    image: 'https://i.pravatar.cc/150?img=45',
    color: '#06b6d4',
  },
  {
    name: 'Vikram Singh',
    role: 'QA & Testing Engineer',
    dept: 'Quality Assurance',
    image: 'https://i.pravatar.cc/150?img=52',
    color: '#8b5cf6',
  },
];

const milestones = [
  {
    year: '2021',
    title: 'VSS Founded',
    desc: 'Started as a boutique web development consultancy in Pune with a mission to engineer premium, custom software solutions.',
    color: '#7c3aed',
    colorRgb: '124,58,237'
  },
  {
    year: '2022',
    title: 'Mobile Division Launch',
    desc: 'Expanded into cross-platform mobile app development with Flutter, shipping high-performance applications globally.',
    color: '#3b82f6',
    colorRgb: '59,130,246'
  },
  {
    year: '2023',
    title: 'Enterprise Products Rollout',
    desc: 'Launched standalone VSS CRM Pro and ERP Suite, enabling small and mid-sized enterprises to automate operational workflows.',
    color: '#10b981',
    colorRgb: '16,185,129'
  },
  {
    year: '2024',
    title: 'Cloud & DevOps Team',
    desc: 'Formed a dedicated cloud operations unit focusing on zero-trust AWS/Azure infrastructure and automated DevSecOps pipelines.',
    color: '#fbbf24',
    colorRgb: '251,191,36'
  },
  {
    year: '2025',
    title: 'International Operations',
    desc: 'Scaled VSS internationally, serving client accounts across India, UAE, UK, and the USA with robust web and mobile suites.',
    color: '#06b6d4',
    colorRgb: '6,182,212'
  },
  {
    year: '2026+',
    title: 'Next-Gen AI & Automation',
    desc: 'Integrating machine learning capabilities and intelligent automation features directly into all VSS core enterprise platforms.',
    color: '#ec4899',
    colorRgb: '236,72,153'
  }
];

export default function AboutPage() {

  return (
    <div className="about-page">
      {/* ── HERO: Dark tech gradient ── */}
      <section className="about-hero">
        <div className="about-hero__glow" />
        <div className="about-hero__grid" />
        <div className="about-hero__inner">
          <div className="about-hero__content">
            <span className="about-tag">
              <i className="bx bxs-building-house"></i> ABOUT VSS
            </span>
            <h1 className="about-title">
              Empowering Businesses with<br /><span>Modern Software Systems</span>
            </h1>
            <p className="about-subtitle">
              VSS Software Solutions is a full-service technology company. We engineer custom enterprise software, scalable cloud architectures, and user-centric applications — designed to grow with your business.
            </p>
            <div className="about-hero__stats">
              <div className="ahero-stat">
                <span className="ahero-stat__num">120+</span>
                <span className="ahero-stat__lbl">Projects Delivered</span>
              </div>
              <div className="ahero-stat-sep" />
              <div className="ahero-stat">
                <span className="ahero-stat__num">25+</span>
                <span className="ahero-stat__lbl">Engineers</span>
              </div>
              <div className="ahero-stat-sep" />
              <div className="ahero-stat">
                <span className="ahero-stat__num">6+</span>
                <span className="ahero-stat__lbl">Years Active</span>
              </div>
              <div className="ahero-stat-sep" />
              <div className="ahero-stat">
                <span className="ahero-stat__num">99.9%</span>
                <span className="ahero-stat__lbl">Uptime SLA</span>
              </div>
            </div>
          </div>
          <div className="about-hero__photo-grid">
            <div className="photo-grid-item photo-grid-main">
              <img src={teamImg} alt="VSS Engineering Team at Work" className="photo-grid-img" />
              <div className="photo-grid-overlay" />
              <div className="photo-grid-label">
                <i className="bx bx-laptop"></i>
                <span>Our Engineering Team</span>
              </div>
            </div>
            <div className="photo-grid-item photo-grid-secondary">
              <img src={teamMeetingImg} alt="VSS Team Strategy Meeting" className="photo-grid-img" />
              <div className="photo-grid-overlay" />
              <div className="photo-grid-label">
                <i className="bx bx-group"></i>
                <span>Team Strategy</span>
              </div>
            </div>
            <div className="photo-grid-badge">
              <i className="bx bxs-building-house"></i>
              <span className="photo-grid-badge__line1">25+</span>
              <span className="photo-grid-badge__line2">Tech Experts</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY & CODE WINDOW ── */}
      <section className="about-story">
        <div className="about-story__inner">
          <div className="about-story__content">
            <span className="section-eyebrow">OUR STORY</span>
            <h2 className="section-title">Built on Engineering<br /><span>Rigour & Vision</span></h2>
            <p className="story-paragraph">
              Founded on the principles of engineering discipline and modern aesthetics, VSS Software Solutions bridges the gap between complex business logic and exceptional user experiences. We don't build generic templates — we engineer tailored technical structures designed to withstand high volumes and grow seamlessly.
            </p>
            <p className="story-paragraph">
              We operate globally, serving rapid-growth startups looking to iterate quickly and mature enterprises refactoring legacy systems into modern, secure microservices. Every project is assigned a dedicated architect and delivered with a 100% on-time commitment.
            </p>
            <div className="story-chips">
              <span className="story-chip"><i className="bx bx-check"></i> Startup MVP Experts</span>
              <span className="story-chip"><i className="bx bx-check"></i> Enterprise-Scale Systems</span>
              <span className="story-chip"><i className="bx bx-check"></i> Full-Stack Teams</span>
              <span className="story-chip"><i className="bx bx-check"></i> AWS & Azure Partners</span>
            </div>
          </div>
          <div className="about-story__visual">
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
  "founded": 2019,
  "team_size": "25+ engineers",
  "core_stack": [
    "React", "Node.js",
    "Kubernetes", "AWS"
  ],
  "security": "Zero-Trust",
  "performance": {
    "caching": "Redis CDN",
    "latency": "sub-100ms",
    "uptime": "99.9% SLA"
  },
  "delivery": "On-Time, Always"
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>



      {/* ── TIMELINE / MILESTONES ── */}
      <section className="about-timeline">
        <div className="about-timeline__inner">
          <div className="section-header-center">
            <span className="section-eyebrow">OUR JOURNEY</span>
            <h2 className="section-title text-center">Milestones That <span>Shaped Us</span></h2>
          </div>
          <div className="timeline-track">
            {milestones.map((m, i) => (
              <div 
                className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} 
                key={i}
                style={{ '--t-color': m.color, '--t-rgb': m.colorRgb }}
              >
                <div className="timeline-item__card">
                  <span className="timeline-year">{m.year}</span>
                  <h4 className="timeline-title">{m.title}</h4>
                  <p className="timeline-desc">{m.desc}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* ── LEADERS SECTION ── */}
      <section className="about-leaders">
        <div className="about-leaders__inner">
          <div className="section-header-center">
            <span className="section-eyebrow">EXECUTIVE LEADERSHIP</span>
            <h2 className="section-title text-center">Meet Our <span>Leaders</span></h2>
            <p className="section-desc text-center">The visionary minds driving VSS Software Solutions forward.</p>
          </div>

          <div className="leaders-grid">
            {leaders.map((leader, i) => (
              <div
                className={`leader-card ${leader.isFounder ? 'founder-card' : ''}`}
                key={i}
                style={{ '--d-color': leader.accentColor, '--d-rgb': leader.accentColorRgb }}
              >
                <div className="leader-card__image-wrap">
                  <img src={leader.image} alt={leader.name} className="leader-card__img" loading="lazy" />
                  <div className="leader-card__img-glow"></div>
                </div>
                <div className="leader-card__body">
                  <h3 className="leader-name">{leader.name}</h3>
                  <span className="leader-role">{leader.role}</span>
                  <div className="leader-divider"></div>
                  <p className="leader-bio">{leader.bio}</p>
                  <div className="leader-socials">
                    <a href={leader.socials.linkedin} className="lsocial-link linkedin" aria-label="LinkedIn">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href={leader.socials.github} className="lsocial-link github" aria-label="GitHub">
                      <i className="bx bxl-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM / EMPLOYEES ── */}
      <section className="about-team">
        <div className="about-team__inner">
          <div className="section-header-center">
            <span className="section-eyebrow">OUR TEAM</span>
            <h2 className="section-title text-center">The Engineers <span>Behind the Code</span></h2>
            <p className="section-desc text-center">Experienced specialists and passionate developers dedicated to project excellence.</p>
          </div>
          <div className="team-grid">
            {employees.map((emp, i) => (
              <div
                className="team-card"
                key={i}
                style={{ '--e-color': emp.color }}
              >
                <div className="team-card__img-wrap">
                  <img src={emp.image} alt={emp.name} className="team-card__img" loading="lazy" />
                </div>
                <div className="team-card__dept">{emp.dept}</div>
                <h3 className="team-card__name">{emp.name}</h3>
                <span className="team-card__role">{emp.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="about-cta__inner">
          <span className="cta-eyebrow">GET IN TOUCH</span>
          <h2 className="cta-title">Have a Custom Project in Mind?</h2>
          <p className="cta-desc">Let us build a secure, high-performance, and beautifully crafted software application for your business.</p>
          <div className="cta-actions">
            <Link to="/contact" className="cta-btn-main">
              Start Technical Consultation <i className="bx bx-right-arrow-alt" />
            </Link>
            <Link to="/products" className="cta-btn-ghost">
              View Our Products <i className="bx bx-cube-alt" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
