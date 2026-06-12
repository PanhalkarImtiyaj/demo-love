import './StatsSection.css';

export default function StatsSection() {
  const metrics = [
    {
      value: '500+',
      label: 'Projects Delivered',
      desc: 'High-performance web apps, custom software, and robust mobile systems engineered globally.',
      icon: 'bx bx-code-block',
      progress: 95,
      color: '#7c3aed',
    },
    {
      value: '99.99%',
      label: 'Service SLA Uptime',
      desc: 'Delivering continuous server availability and robust DevOps deployment pipelines on AWS & Azure.',
      icon: 'bx bx-server',
      progress: 99,
      color: '#3b82f6',
    },
    {
      value: '25+',
      label: 'Countries Served',
      desc: 'Helping enterprise clients and growing startups scale operations across North America, Europe, & Asia.',
      icon: 'bx bx-globe',
      progress: 80,
      color: '#10b981',
    },
    {
      value: '10M+',
      label: 'Daily API Requests',
      desc: 'Architecting high-frequency databases and scalable backend clusters built to handle heavy traffic.',
      icon: 'bx bx-chip',
      progress: 90,
      color: '#f59e0b',
    },
  ];

  return (
    <section className="stats" id="stats">
      {/* Grid line grid overlay background */}
      <div className="stats__grid-overlay" />

      <div className="stats__inner">
        {/* Header Row */}
        <div className="stats__header">
          <div className="stats__header-left">
            <span className="stats__tag">
              <i className="bx bx-analyse" /> System Performance
            </span>
            <h2 className="stats__title">
              Our Technical Footprint <span>In Numbers</span>
            </h2>
          </div>
          <div className="stats__header-right">
            <p className="stats__subtitle">
              We leverage modern architectures, containerized environments, and cloud infrastructure to ensure scalability and speed for all operations.
            </p>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="stats__dashboard">
          {metrics.map((m, index) => (
            <div className="stat-node-card" key={index}>
              {/* Card Header */}
              <div className="stat-node-card__header">
                <div className="stat-node-card__icon" style={{ color: m.color, background: `${m.color}10`, borderColor: `${m.color}25` }}>
                  <i className={m.icon} />
                </div>
                <span className="stat-node-card__pulse">
                  <span className="pulse-dot" style={{ backgroundColor: m.color }} />
                  Live Syncing
                </span>
              </div>

              {/* Number and Label */}
              <div className="stat-node-card__body">
                <div className="stat-node-card__num">{m.value}</div>
                <h3 className="stat-node-card__label">{m.label}</h3>
                <p className="stat-node-card__desc">{m.desc}</p>
              </div>

              {/* Visual Performance Meter */}
              <div className="stat-node-card__footer">
                <div className="meter-info">
                  <span>Efficiency Index</span>
                  <span>{m.progress}%</span>
                </div>
                <div className="meter-track">
                  <div className="meter-bar" style={{ width: `${m.progress}%`, backgroundColor: m.color }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
