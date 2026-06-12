import heroMan from '../../assets/hero-man.png';
import 'boxicons/css/boxicons.min.css';
import './HeroSection.css';

export default function HeroSection() {
  const marqueeItems = [
    '✦ THE BEST SOLUTION',
    '✦ THE BEST SOLUTION',
    '✦ THE BEST SOLUTION',
    '✦ THE BEST SOLUTION',
    '✦ THE BEST SOLUTION',
    '✦ THE BEST SOLUTION',
  ];

  return (
    <section className="hero" id="home">
      {/* Big INNOVATE background heading */}
      <div className="hero__boost">INNOVATE</div>

      <div className="hero__inner">
        {/* Left Content */}
        <div className="hero__content">
          <span className="hero__tag">IT SOLUTIONS & SERVICES</span>
          <h1 className="hero__title">Innovate & Scale</h1>
          <p className="hero__desc">
            VSS Software Solutions is your trusted technology partner. We build robust architectures, scalable cloud infrastructure, and modern applications tailored to your business needs.
          </p>
          <div className="hero__actions">
            <a href="#services" className="hero__btn-primary">
              <i className='bx bx-rocket'></i> Get Started
            </a>
            <a href="#about" className="hero__btn-secondary">
              <span className="play-icon">
                <i className='bx bx-play'></i>
              </span> 
              Watch Video
            </a>
          </div>
          <div className="hero__trust">
            <div className="trust-avatars">
              <img src="https://i.pravatar.cc/100?img=1" alt="User 1" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=2" alt="User 2" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=3" alt="User 3" className="avatar" />
            </div>
            <div>
              <div className="stars">
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
              </div>
              <div className="trust-text">Trustpilot <span>4.9 reviews</span></div>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="hero__image-wrap">
          <div className="hero__badge">
            <span>TECH<br/>NOW</span>
          </div>
          <img src={heroMan} alt="IT Solutions Hero" className="hero__img" />
          <div className="hero__floating-tag">
            <span className="pulse-dot"/>
            Scalable architectures built for global businesses
          </div>
        </div>

        {/* Right Content */}
        <div className="hero__right">
          <p className="hero__right-text">
            There Are Many Variations Of Passages Of Lorem Ipsum Available,
            But The Majority Have Suffered Alteration In Some Form By Injected
            Humour, or Randomised.
          </p>
          <div className="hero__play-badge">
            <div className="play-circle">
              <i className='bx bx-play'></i>
            </div>
            <span>Watch Demo</span>
          </div>
          <div className="hero__trust-right">
            <div className="trust-avatars">
              <img src="https://i.pravatar.cc/100?img=4" alt="User 4" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=5" alt="User 5" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=6" alt="User 6" className="avatar" />
            </div>
            <div>
              <div className="stars">
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
              </div>
              <div className="trust-text">Trustpilot</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="hero__blob hero__blob--1"/>
      <div className="hero__blob hero__blob--2"/>

      {/* Mobile Marquee - only visible on mobile */}
      <div className="hero__mobile-marquee">
        <div className="hero__mobile-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="hero__mobile-marquee-item">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
