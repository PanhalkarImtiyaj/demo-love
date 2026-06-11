import womanImg from '../../assets/skills-woman.png';
import './SkillsSection.css';

export default function SkillsSection() {
  const circ = 2 * Math.PI * 34; // Circumference of radius 34

  return (
    <section className="skills" id="about">
      <div className="skills__inner">
        {/* Left — Image */}
        <div className="skills__img-wrap">
          <div className="skills__img-bg" />
          <img src={womanImg} alt="Professional woman with tablet" className="skills__img" />
          
          {/* Target illustration decoration in the screenshot */}
          <div className="skills__deco-target">🎯</div>
          
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
            when looking at layout the point established fact that
          </p>

          {/* Progress Circles */}
          <div className="skills__circles">
            <div className="skill-circle-item">
              <div className="circle-container">
                <svg width="80" height="80">
                  <circle cx="40" cy="40" r="34" stroke="#f1f5f9" strokeWidth="5" fill="transparent" />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="#7c3aed"
                    strokeWidth="5"
                    fill="transparent"
                    strokeDasharray={circ}
                    strokeDashoffset={circ * (1 - 0.65)}
                    strokeLinecap="round"
                    transform="rotate(-90 40 40)"
                  />
                </svg>
                <span className="circle-percent">65%</span>
              </div>
              <div className="circle-info">
                <span className="circle-title">Paid Search<br/>Marketing</span>
              </div>
            </div>

            <div className="skill-circle-item">
              <div className="circle-container">
                <svg width="80" height="80">
                  <circle cx="40" cy="40" r="34" stroke="#f1f5f9" strokeWidth="5" fill="transparent" />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="#7c3aed"
                    strokeWidth="5"
                    fill="transparent"
                    strokeDasharray={circ}
                    strokeDashoffset={circ * (1 - 0.95)}
                    strokeLinecap="round"
                    transform="rotate(-90 40 40)"
                  />
                </svg>
                <span className="circle-percent">95%</span>
              </div>
              <div className="circle-info">
                <span className="circle-title">Search Engine<br/>Optimization</span>
              </div>
            </div>
          </div>

          <a href="#contact" className="skills__btn">
            EXPLORE MORE <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
