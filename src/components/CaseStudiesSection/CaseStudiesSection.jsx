import caseImg from '../../assets/case-study.png';
import './CaseStudiesSection.css';

const caseCards = [
  { label: 'Digital Marketing', color: '#7c3aed', bg: '#ede9fe' },
  { label: 'Instantly Analysis', color: '#0ea5e9', bg: '#e0f2fe' },
  { label: 'Web & Mobile', color: '#10b981', bg: '#d1fae5' },
  { label: 'Email Marketing', color: '#f59e0b', bg: '#fef3c7' },
];

export default function CaseStudiesSection() {
  return (
    <section className="cases" id="projects">
      <div className="cases__inner">
        {/* Header Row */}
        <div className="cases__header">
          <div>
            <span className="cases__tag">CASE STUDIES</span>
            <h2 className="cases__title">
              We Are A Creative Digital<br/>Marketing Agency
            </h2>
          </div>
          <a href="#" className="cases__btn">
            EXPLORE MORE <span className="btn-arrow-dark">→</span>
          </a>
        </div>

        {/* Cards Grid */}
        <div className="cases__grid">
          {/* Main big card */}
          <div className="case-main-card">
            <div className="case-main-card__top">
              <span className="case-tag-chip">Rising Stars Obscure</span>
              <img src={caseImg} alt="Case Study" className="case-main-img" />
            </div>
            <div className="case-main-card__footer">
              <span>📊 Analytics</span>
              <span>🎯 Strategy</span>
              <button className="case-main-card__btn">+</button>
            </div>
          </div>

          {/* Side cards */}
          <div className="case-side-cards">
            {caseCards.map((c, i) => (
              <div
                className="case-side-card"
                key={i}
                style={{ background: c.bg, borderLeft: `4px solid ${c.color}` }}
              >
                <div className="case-side-card__dot" style={{ background: c.color }} />
                <span style={{ color: c.color, fontWeight: 700, fontSize: '0.82rem' }}>
                  {c.label}
                </span>
                <p className="case-side-card__desc">
                  Lorem dolor amet consectetur adipiscing eiusmod.
                </p>
                <button className="case-side-card__btn" style={{ color: c.color }}>+</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
