import { useState, useEffect } from 'react';
import heroMan from '../../assets/hero-man.png';
import webDevImg from '../../assets/web-dev.png';
import appDevImg from '../../assets/App-development.png';
import customSoftwareImg from '../../assets/cutome-software.png';
import './HeroSection.css';

const slidesData = [
  { 
    id: 1, 
    tag: "GO FOR ADVERTISING",
    title: "Think Digital", 
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised.",
    bgText: "BOOST NOW",
    badge1: "BOOST",
    badge2: "NOW",
    rightText: "There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form By Injected Humour, or Randomised.",
    image: heroMan
  },
  { 
    id: 2, 
    tag: "POWERFUL EXPERIENCES",
    title: "Web Development", 
    desc: "We build fast, responsive, and highly scalable websites tailored to your business needs, ensuring an engaging user experience and maximum performance.",
    bgText: "WEB DEV",
    badge1: "WEB",
    badge2: "DEV",
    rightText: "Our web development team crafts custom, interactive websites that drive conversions and deliver seamless digital experiences across all devices.",
    image: webDevImg
  },
  { 
    id: 3, 
    tag: "INNOVATIVE SOLUTIONS",
    title: "App Development", 
    desc: "From intuitive mobile applications to engaging user interfaces, we develop tailored solutions that streamline your operations and maximize reach on mobile platforms.",
    bgText: "APP DEV",
    badge1: "APP",
    badge2: "DEV",
    rightText: "We specialize in end-to-end mobile app development, bringing your unique app ideas to life with secure, scalable, and cutting-edge technology.",
    image: appDevImg
  },
  { 
    id: 4, 
    tag: "ENTERPRISE SCALING",
    title: "Custom Software", 
    desc: "We design robust custom software systems optimized for performance, enabling your enterprise to automate tasks and grow effortlessly.",
    bgText: "SOFTWARE",
    badge1: "TOP",
    badge2: "RATED",
    rightText: "Empower your business with custom-built software solutions that integrate flawlessly with your existing workflow and drive extreme efficiency.",
    image: customSoftwareImg
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__slider-container">
        <div 
          className="hero__slider-track" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slidesData.map((slide) => (
            <div className="hero__slide" key={slide.id}>
              <div className="hero__inner">
                {/* Left Content */}
                <div className="hero__content">
                  {/* Big background heading perfectly centered behind tag */}
                  {slide.bgText && <div className="hero__boost">{slide.bgText}</div>}
                  <span className="hero__tag">{slide.tag}</span>
                  <h1 className="hero__title">{slide.title}</h1>
                  <p className="hero__desc">{slide.desc}</p>
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
                  {slide.badge1 && (
                    <div className="hero__badge">
                      <span>{slide.badge1}<br/>{slide.badge2}</span>
                    </div>
                  )}
                  <img src={slide.image} alt={slide.title} className="hero__img" />
                  <div className="hero__floating-tag">
                    <span className="pulse-dot"/>
                    {slide.title} Services
                  </div>
                </div>

                {/* Right Content */}
                <div className="hero__right">
                  <p className="hero__right-text">{slide.rightText}</p>
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
            </div>
          ))}
        </div>
      </div>

      {/* Slider Dots */}
      <div className="hero__slider-dots">
        {slidesData.map((_, idx) => (
          <div 
            key={idx} 
            className={`dot ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>

      {/* Decorative blobs */}
      <div className="hero__blob hero__blob--1"/>
      <div className="hero__blob hero__blob--2"/>
    </section>
  );
}
