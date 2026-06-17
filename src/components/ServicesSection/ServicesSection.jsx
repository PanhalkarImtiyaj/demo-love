import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ServicesSection.css';

// Import VSS official assets images
import webDevImg from '../../assets/website-servies.png';
import appDevImg from '../../assets/mobile-serviese.png';
import customSoftwareImg from '../../assets/custome-software-servises.png';
import digitalMarketingImg from '../../assets/Digital-servises.png';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    image: webDevImg,
    icon: 'bx bx-globe',
    title: 'Web Development',
    desc: 'Crafting high-performance, responsive websites with modern frameworks and cutting-edge technologies.',
    features: [
      'Custom React & Next.js Apps',
      'Responsive & Mobile-First Design',
      'Speed & SEO Optimization',
    ],
  },
  {
    image: appDevImg,
    icon: 'bx bx-mobile-alt',
    title: 'App Development',
    desc: 'Building seamless native and cross-platform mobile applications that users love.',
    features: [
      'iOS & Android Native Apps',
      'React Native & Flutter Apps',
      'App Store Optimization (ASO)',
    ],
  },
  {
    image: customSoftwareImg,
    icon: 'bx bx-code-block',
    title: 'Custom Software',
    desc: 'Tailored enterprise solutions designed to streamline your business operations efficiently.',
    features: [
      'SaaS & Cloud System Architectures',
      'Robust API & Data Integration',
      'Scalable Database Solutions',
    ],
  },
  {
    image: digitalMarketingImg,
    icon: 'bx bx-cloud',
    title: 'Cloud & DevOps',
    desc: 'Scalable cloud deployment, continuous integration, and robust infrastructure monitoring for modern applications.',
    features: [
      'AWS & Azure Server Deployments',
      'CI/CD Pipelines & DevOps Automation',
      '24/7 Server Management & Security',
    ],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Check if the screen width indicates mobile (max 900px)
    const isMobile = window.innerWidth <= 900;
    
    // Disable animations and listener attachments on mobile devices to prevent
    // opacity/layout freeze issues on mobile viewports.
    if (isMobile) {
      return;
    }

    const ctx = gsap.context(() => {
      // ── Header animation ──
      const headerEls = headerRef.current?.children;
      if (headerEls) {
        gsap.fromTo(
          headerEls,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // ── Cards stagger entrance animation ──
      const validCards = cardsRef.current.filter(Boolean);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.services__grid',
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // ── Add mouse hover effects ──
      validCards.forEach((card) => {
        const handleMouseMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -6;
          const rotateY = ((x - centerX) / centerX) * 6;

          gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.3,
            ease: 'power2.out',
            transformPerspective: 1000,
          });

          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)',
          });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        card._cleanup = () => {
          card.removeEventListener('mousemove', handleMouseMove);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      });

      // ── CTA button animation ──
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      cardsRef.current.forEach((card) => {
        if (card?._cleanup) card._cleanup();
      });
    };
  }, []);

  return (
    <section className="services" id="services" ref={sectionRef}>
      {/* Ambient Glows */}
      <div className="services__glow services__glow--1" />
      <div className="services__glow services__glow--2" />
      <div className="services__glow services__glow--3" />

      {/* Floating Particles */}
      <div className="services__particles">
        {[...Array(8)].map((_, i) => (
          <div className="particle" key={i} />
        ))}
      </div>

      <div className="services__inner">
        {/* Header */}
        <div className="services__header" ref={headerRef}>
          <span className="services__label">
            <i className="bx bx-atom bx-spin" />
            Our Premium Services
          </span>
          <h2 className="services__title">
            Exceptional Solutions <span>Tailored For You</span>
          </h2>
          <p className="services__subtitle">
            We deliver state-of-the-art web applications, custom software, mobile apps, and scalable cloud systems to grow your business globally.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="services__grid">
          {services.map((s, i) => (
            <div
              className="service-card"
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <span className="service-card__number">0{i + 1}</span>
              
              {/* Service Card Image */}
              <div className="service-card__img-container">
                <img src={s.image} alt={s.title} className="service-card__image" loading="lazy" />
                <div className="service-card__image-overlay" />
              </div>

              {/* Service Details */}
              <div className="service-card__content">
                <div className="service-card__header-row">
                  <div className="service-card__icon-wrap">
                    <i className={s.icon} />
                  </div>
                  <h3 className="service-card__title">{s.title}</h3>
                </div>
                
                <p className="service-card__desc">{s.desc}</p>
                
                <ul className="service-card__features">
                  {s.features.map((f, fi) => (
                    <li key={fi}>
                      <i className="bx bx-badge-check" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#" className="service-card__link">
                  Learn More <i className="bx bx-right-arrow-alt" />
                </a>
              </div>

              <div className="service-card__line" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="services__cta" ref={ctaRef}>
          <a href="#" className="services__cta-btn">
            <span>Explore All Services</span>
            <i className="bx bx-right-arrow-alt" />
          </a>
        </div>
      </div>
    </section>
  );
}
