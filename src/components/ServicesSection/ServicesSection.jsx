import './ServicesSection.css';

const services = [
  {
    icon: '📢',
    title: 'Digital Marketing',
    desc: 'Lorem dolor amet consectetur adipiscing eiusmod elit, sed do tempor incididunt ut labore.',
  },
  {
    icon: '📊',
    title: 'SEO Analytics',
    desc: 'Lorem dolor amet consectetur adipiscing eiusmod elit, sed do tempor incididunt ut labore.',
  },
  {
    icon: '📱',
    title: 'Social Marketing',
    desc: 'Lorem dolor amet consectetur adipiscing eiusmod elit, sed do tempor incididunt ut labore.',
  },
];

export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="services__inner">
        {/* Left */}
        <div className="services__left">
          <span className="services__label">WHY SERVICES US</span>
          <h2 className="services__title">
            Use SEO To Drive Growth<br/>At Your Business
          </h2>
          <div className="services__cards">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-card__icon">{s.icon}</div>
                <div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__desc">{s.desc}</p>
                  <a href="#" className="service-card__link">READ MORE →</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="services__right">
          <p className="services__right-text">
            Performance of website capture document. Maecenas ipsum
            dictum. Maecenas tincidunt.
          </p>
          <div className="services__emoji">👆</div>
        </div>
      </div>
    </section>
  );
}
