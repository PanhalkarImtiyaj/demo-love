import { useState } from 'react';
import caseImg from '../../assets/case-study.png';
import heroManDeco from '../../assets/hero-man.png'; // Use clean transparent hero image
import './CaseStudiesSection.css';

const categories = ['All', 'SEO', 'Marketing', 'Web & Mobile', 'Email'];

const caseCards = [
  { id: '01', type: 'main', category: 'SEO', image: caseImg, tag: 'Rising Stars Obscure', subtitle: 'Analytics & Strategy' },
  { id: '02', type: 'vertical', category: 'Marketing', title: 'Digital Marketing', desc: 'Boost your reach and capture high-intent leads.' },
  { id: '03', type: 'vertical', category: 'Marketing', title: 'Instantly Analyze', desc: 'Real-time performance tracking and data analytics.' },
  { id: '04', type: 'detail', category: 'Web & Mobile', title: 'Web & Mobile', desc: 'Representing your brand in the digital world with custom design.', linkText: 'Read More' },
  { id: '05', type: 'vertical', category: 'Email', title: 'Email Marketing', desc: 'Automated newsletters and personalized campaigns.' }
];

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredCards = caseCards.map(card => {
    const isMatch = activeTab === 'All' || card.category === activeTab;
    return { ...card, isMatch };
  });

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

          {/* Category Filter Tabs */}
          <div className="cases__tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`case-tab-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <a href="#" className="cases__btn">
            EXPLORE MORE <span className="btn-arrow">→</span>
          </a>
        </div>

        {/* Horizontal Row Wrapper */}
        <div className="cases__row-container">
          {/* Clean transparent superhero character decoration */}
          <img src={heroManDeco} alt="Character Decoration" className="cases__deco-character" />

          <div className="cases__cards-row">
            {filteredCards.map((card) => {
              const opacityClass = card.isMatch ? 'match' : 'dim';

              if (card.type === 'main') {
                return (
                  <div className={`case-card case-card--main ${opacityClass}`} key={card.id}>
                    <div className="case-card__image-container">
                      <span className="case-card__chip">{card.tag}</span>
                      <img src={card.image} alt={card.tag} className="case-card__img" />
                    </div>
                    <div className="case-card__footer">
                      <span className="footer-tag">📊 Analytics</span>
                      <span className="footer-tag">🎯 Strategy</span>
                      <span className="case-card__badge-num">{card.id}</span>
                      <button className="case-card__plus-btn">+</button>
                    </div>
                  </div>
                );
              }

              if (card.type === 'vertical') {
                return (
                  <div className={`case-card case-card--vertical ${opacityClass}`} key={card.id}>
                    <div className="vertical-text-wrap">
                      <span className="vertical-title">{card.title}</span>
                      <p className="vertical-desc">{card.desc}</p>
                    </div>
                    <div className="vertical-footer">
                      <span className="vertical-num">{card.id}</span>
                    </div>
                  </div>
                );
              }

              if (card.type === 'detail') {
                return (
                  <div className={`case-card case-card--detail ${opacityClass}`} key={card.id}>
                    <span className="detail-tag-num">{card.id}</span>
                    <div className="detail-content">
                      <h3 className="detail-title">{card.title}</h3>
                      <p className="detail-desc">{card.desc}</p>
                      <a href="#" className="detail-link">{card.linkText} →</a>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
