import heroMan from '../../assets/hero-man.png';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      {/* Big BOOST NOW background heading */}
      <div className="hero__boost">BOOST NOW</div>

      <div className="hero__inner">
        {/* Left Content */}
        <div className="hero__content">
          <span className="hero__tag">GO FOR ADVERTISING</span>
          <h1 className="hero__title">Think Digital</h1>
          <p className="hero__desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form by injected
            humour, or randomised.
          </p>
          <div className="hero__actions">
            <a href="#services" className="hero__btn-primary">Get Started</a>
            <a href="#about" className="hero__btn-secondary">
              <span className="play-icon">▶</span> Watch Video
            </a>
          </div>
          <div className="hero__trust">
            <div className="trust-avatars">
              <img src="https://i.pravatar.cc/100?img=1" alt="User 1" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=2" alt="User 2" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=3" alt="User 3" className="avatar" />
            </div>
            <div>
              <div className="stars">★★★★★</div>
              <div className="trust-text">Trustpilot <span>4.9 reviews</span></div>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="hero__image-wrap">
          <div className="hero__badge">
            <span>BOOST<br/>NOW</span>
          </div>
          <img src={heroMan} alt="Digital Marketing Hero" className="hero__img" />
          <div className="hero__floating-tag">
            <span className="pulse-dot"/>
            There are many variations of passages of Lorem Ipsum
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
            <div className="play-circle">▶</div>
            <span>Watch Demo</span>
          </div>
          <div className="hero__trust-right">
            <div className="trust-avatars">
              <img src="https://i.pravatar.cc/100?img=4" alt="User 4" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=5" alt="User 5" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=6" alt="User 6" className="avatar" />
            </div>
            <div>
              <div className="stars">★★★★★</div>
              <div className="trust-text">Trustpilot</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="hero__blob hero__blob--1"/>
      <div className="hero__blob hero__blob--2"/>
    </section>
  );
}
