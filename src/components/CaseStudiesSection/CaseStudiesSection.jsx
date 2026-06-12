import caseImg from '../../assets/case-study.png';
import heroManDeco from '../../assets/hero-ma\'n.png';
import './CaseStudiesSection.css';

export default function CaseStudiesSection() {
  return (
    <section className="cases" id="projects">
      <div className="cases__inner">
        {/* Header Row */}
        <div className="cases__header">
          <div className="cases__header-left">
            <span className="cases__tag">CASE STUDIES</span>
            <h2 className="cases__title">
              We Are A Creative Digital<br/>Marketing Agency
            </h2>
          </div>
          <a href="#" className="cases__btn">
            EXPLORE MORE <span className="btn-arrow">→</span>
          </a>
        </div>

        {/* Horizontal Row Wrapper */}
        <div className="cases__row-container">
          {/* Decorative Character sitting on the left */}
          <img src={heroManDeco} alt="Character Decoration" className="cases__deco-character" />

          <div className="cases__cards-row">
            {/* 1. Main SEO Card */}
            <div className="case-card case-card--main">
              <div className="case-card__image-container">
                <span className="case-card__chip">Rising Stars Obscure</span>
                <img src={caseImg} alt="SEO Case Study" className="case-card__img" />
              </div>
              <div className="case-card__footer">
                <span className="footer-tag"><i className="bx bx-bar-chart-alt-2" style={{ marginRight: '4px' }} /> Analytics</span>
                <span className="footer-tag"><i className="bx bx-target-lock" style={{ marginRight: '4px' }} /> Strategy</span>
                <span className="case-card__badge-num">01</span>
                <button className="case-card__plus-btn">+</button>
              </div>
            </div>

            {/* 2. Vertical Purple Card: Digital Marketing */}
            <div className="case-card case-card--vertical">
              <div className="vertical-text-wrap">
                <span className="vertical-title">Digital Marketing</span>
              </div>
              <div className="vertical-footer">
                <span className="vertical-num">02</span>
              </div>
            </div>

            {/* 3. Vertical Purple Card: Instantly Analyze */}
            <div className="case-card case-card--vertical">
              <div className="vertical-text-wrap">
                <span className="vertical-title">Instantly Analyze</span>
              </div>
              <div className="vertical-footer">
                <span className="vertical-num">03</span>
              </div>
            </div>

            {/* 4. Wide Detail Card: Web & Mobile */}
            <div className="case-card case-card--detail">
              <span className="detail-tag-num">04</span>
              <div className="detail-content">
                <h3 className="detail-title">Web & Mobile</h3>
                <p className="detail-desc">
                  Representing your brand in the digital world with custom design.
                </p>
                <a href="#" className="detail-link">Read More →</a>
              </div>
            </div>

            {/* 5. Vertical Purple Card: Email Marketing */}
            <div className="case-card case-card--vertical">
              <div className="vertical-text-wrap">
                <span className="vertical-title">Email Marketing</span>
              </div>
              <div className="vertical-footer">
                <span className="vertical-num">05</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
