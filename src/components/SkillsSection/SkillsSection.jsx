import womanImg from '../../assets/skills-woman.png';
import './SkillsSection.css';

const skills = [
  { label: 'Paid Search Marketing', percent: 65 },
  { label: 'Search Engine Optimization', percent: 95 },
];

export default function SkillsSection() {
  return (
    <section className="skills" id="about">
      <div className="skills__inner">
        {/* Left — Image */}
        <div className="skills__img-wrap">
          <div className="skills__img-bg" />
          <img src={womanImg} alt="Professional woman with tablet" className="skills__img" />
          <div className="skills__floating-card">
            <div className="floating-card__icon">📈</div>
            <div>
              <div className="floating-card__num">+120%</div>
              <div className="floating-card__label">Growth Rate</div>
            </div>
          </div>
        </div>

        {/* Right — Content */}
        <div className="skills__content">
          <span className="skills__tag">ABOUT COMPANY</span>
          <h2 className="skills__title">
            Skills To Improve Your<br/>Company Brand
          </h2>
          <p className="skills__desc">
            It is a long established fact that a reader will be distracted by the readable content of a page
            when looking at point established the line.
          </p>

          {/* Progress Bars */}
          <div className="skills__bars">
            {skills.map((s, i) => (
              <div className="skill-bar" key={i}>
                <div className="skill-bar__header">
                  <span className="skill-bar__label">{s.label}</span>
                  <span className="skill-bar__pct">{s.percent}%</span>
                </div>
                <div className="skill-bar__track">
                  <div
                    className="skill-bar__fill"
                    style={{ width: `${s.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="skills__btn">
            EXPLORE MORE <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
