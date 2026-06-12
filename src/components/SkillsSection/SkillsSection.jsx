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
          <div className="skills__deco-target"><i className="bx bx-target-lock" /></div>
          
          <div className="skills__floating-card">
            <div className="floating-card__icon"><i className="bx bx-trending-up" /></div>
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
            We Are Experts In Software<br/>& Custom IT Solutions
          </h2>
          <p className="skills__desc">
            VSS Software Solutions is a premier technology provider specializing in cutting-edge web & mobile applications, custom enterprise software, AI automation, and scalable cloud systems. We empower businesses globally with robust technical architectures.
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
                    strokeDashoffset={circ * (1 - 0.85)}
                    strokeLinecap="round"
                    transform="rotate(-90 40 40)"
                  />
                </svg>
                <span className="circle-percent">85%</span>
              </div>
              <div className="circle-info">
                <span className="circle-title">Cloud Computing<br/>& Cyber Security</span>
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
                <span className="circle-title">Software & App<br/>Development</span>
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
