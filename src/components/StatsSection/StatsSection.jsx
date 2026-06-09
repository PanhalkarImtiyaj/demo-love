import './StatsSection.css';

const stats = [
  { num: '500+', label: 'Total Project' },
  { num: '300M+', label: 'Investment' },
];

export default function StatsSection() {
  return (
    <section className="stats" id="contact">
      <div className="stats__inner">
        {/* Left */}
        <div className="stats__left">
          <span className="stats__tag">SUCCESS STORY</span>
          <h2 className="stats__title">
            Organic Audience<br/>Driven On Your<br/>Websites
          </h2>
          <div className="stats__trust">
            <div className="trust-avatars">
              <div className="avatar av1"/>
              <div className="avatar av2"/>
              <div className="avatar av3"/>
            </div>
            <div>
              <div className="stars">★★★★★</div>
              <div className="trust-label">Trustpilot</div>
            </div>
          </div>
        </div>

        {/* Right — Stats */}
        <div className="stats__right">
          <div className="stats__grid">
            {stats.map((s, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-card__num">{s.num}</div>
                <div className="stat-card__label">{s.label}</div>
                <p className="stat-card__desc">
                  Lorem dolor amet consectetur adipiscing eiusmod elit, sed do tempor.
                </p>
              </div>
            ))}
          </div>

          {/* Rocket Illustration */}
          <div className="stats__rocket">
            <div className="rocket-emoji">🚀</div>
            <div className="rocket-rings">
              <div className="ring ring-1"/>
              <div className="ring ring-2"/>
              <div className="ring ring-3"/>
            </div>
            <div className="floating-icons">
              <span>📊</span>
              <span>💡</span>
              <span>📱</span>
              <span>🎯</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
