import './StatsSection.css';

const stats = [
  {
    num: '500+',
    label: 'Total Projects Shipped',
    desc: 'Engineered and delivered custom enterprise systems, web platforms, and mobile applications with clean architecture.',
    icon: (
      <svg className="stat-card__svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    )
  },
  {
    num: '99.9%',
    label: 'System Uptime SLA',
    desc: 'High-availability server infrastructure configured for load scaling, maximum security, and sub-second page loads.',
    icon: (
      <svg className="stat-card__svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    )
  },
  {
    num: '300M+',
    label: 'Transactions Processed',
    desc: 'Digital systems and payment pipelines driving massive transaction volumes and operational speed for scaling brands.',
    icon: (
      <svg className="stat-card__svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    )
  }
];

export default function StatsSection() {
  return (
    <section className="stats" id="stats-section">
      {/* Background Ambient Glows */}
      <div className="stats__glow stats__glow--1"></div>
      <div className="stats__glow stats__glow--2"></div>

      <div className="stats__inner">
        {/* Left Column */}
        <div className="stats__left">
          <span className="stats__tag">
            <span className="stats__tag-dot"></span> VSS SUCCESS STORY
          </span>
          <h2 className="stats__title">
            Scaling Digital<br/>
            Ecosystems For<br/>
            <span className="text-gradient">Modern Brands</span>
          </h2>
          <p className="stats__subtitle">
            We deliver robust technical solutions engineered to increase system speed, automate workflows, and drive conversion metrics.
          </p>
          
          {/* Enhanced Trust Box */}
          <div className="stats__trust">
            <div className="trust-avatars">
              <div className="avatar av1"></div>
              <div className="avatar av2"></div>
              <div className="avatar av3"></div>
            </div>
            <div className="trust-meta">
              <div className="stars">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <div className="trust-label">5.0 Star rated on Trustpilot</div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="stats__right">
          <div className="stats__grid">
            {stats.map((s, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-card__glow"></div>
                <div className="stat-card__icon-wrapper">
                  {s.icon}
                </div>
                <div className="stat-card__content">
                  <div className="stat-card__num">{s.num}</div>
                  <div className="stat-card__label">{s.label}</div>
                  <p className="stat-card__desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Premium High-Tech Orbital SVG Illustration */}
          <div className="stats__orbital-container">
            <div className="orbital-system">
              {/* Central Glowing Hub */}
              <div className="orbital-hub">
                <i className="bx bx-shape-polygon"></i>
                <span className="hub-pulse"></span>
              </div>
              
              {/* Outer Rings & Orbiting Nodes */}
              <div className="orbital-ring ring-inner">
                <div className="orbiting-node node-1">
                  <i className="bx bx-code-alt"></i>
                </div>
              </div>
              <div className="orbital-ring ring-middle">
                <div className="orbiting-node node-2">
                  <i className="bx bx-mobile-alt"></i>
                </div>
              </div>
              <div className="orbital-ring ring-outer">
                <div className="orbiting-node node-3">
                  <i className="bx bx-data"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

