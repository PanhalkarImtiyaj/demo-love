import { Link } from 'react-router-dom';
import appDevHero from '../../assets/app_development_hero.png';
import '../ServiceDetails.css';
import './AppDevPage.css';

export default function AppDevPage() {
  return (
    <div className="service-page appdev-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero__cyber-bg"></div>
        <div className="service-hero__glow"></div>
        <div className="service-hero__inner">
          <div className="service-hero__content">
            <span className="service-hero__badge">
              <i className="bx bx-mobile-alt"></i> App Development
            </span>
            <h1 className="service-hero__title">
              Building Immersive, Custom <span className="text-gradient">Mobile Apps</span>
            </h1>
            <p className="service-hero__desc">
              We design and develop high-performance native and hybrid mobile applications for iOS and Android. Built with fluid transitions, offline capabilities, and maximum security to engage your users on the go.
            </p>
            <div className="service-hero__actions">
              <Link to="/contact" className="btn-primary">Build Your App</Link>
              <a href="#details" className="btn-secondary">Explore Capabilities</a>
            </div>
          </div>
          <div className="service-hero__graphic">
            <div className="service-hero__image-wrapper">
              <img src={appDevHero} alt="App Development" className="service-hero__image" />
              <div className="service-hero__image-glow" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.25) 0%, transparent 70%)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="details" className="service-details">
        <div className="service-details__inner">
          <div className="section-header">
            <h2 className="section-title">Mobile Development Capabilities</h2>
            <p className="section-subtitle">We design and develop end-to-end mobile architectures built for fluid scrolling and fast responses.</p>
          </div>

          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bxl-apple"></i></div>
              <h3>Native iOS Apps</h3>
              <p>Harnessing Swift, SwiftUI, and native SDKs to build clean, secure apps custom-made for iPhones and iPads, integrating Apple pay and Apple cloud services seamlessly.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bxl-android"></i></div>
              <h3>Native Android Apps</h3>
              <p>Building high-performance Android apps using Kotlin and Jetpack. Optimized for battery life, offline syncing, and smooth rendering across multiple screen sizes.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-sync"></i></div>
              <h3>Cross-Platform Builds</h3>
              <p>Deploy to both iOS and Android platforms simultaneously using Flutter or React Native. Delivering near-native performance while optimizing development budgets.</p>
            </div>

            <div className="capability-card">
              <div className="capability-card__icon"><i className="bx bx-map-pin"></i></div>
              <h3>Mobile API & Hardware Sync</h3>
              <p>Configuring real-time GPS tracking, background push notifications services, secure biometric authentication (FaceID/Fingerprint), and offline SQL databases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="tech-stack-section__inner">
          <div className="section-header">
            <h2 className="section-title">Mobile Tech Stack</h2>
            <p className="section-subtitle">We build with lightweight, performant framework structures to ensure smooth app performance.</p>
          </div>
          <div className="tech-logos-grid">
            <div className="tech-logo-item" title="iOS Swift">
              <i className="bx bxl-apple"></i>
              <span>Swift / SwiftUI</span>
            </div>
            <div className="tech-logo-item" title="Android Kotlin">
              <i className="bx bxl-android"></i>
              <span>Kotlin / Jetpack</span>
            </div>
            <div className="tech-logo-item" title="Flutter">
              <i className="bx bx-palette"></i>
              <span>Flutter / Dart</span>
            </div>
            <div className="tech-logo-item" title="React Native">
              <i className="bx bxl-react"></i>
              <span>React Native</span>
            </div>
            <div className="tech-logo-item" title="Firebase">
              <i className="bx bxl-firebase"></i>
              <span>Firebase API</span>
            </div>
            <div className="tech-logo-item" title="Redux / State Management">
              <i className="bx bx-git-branch"></i>
              <span>State / Redux</span>
            </div>
            <div className="tech-logo-item" title="Database / SQLite">
              <i className="bx bx-data"></i>
              <span>SQLite / Room</span>
            </div>
            <div className="tech-logo-item" title="API / GraphQL">
              <i className="bx bx-transfer"></i>
              <span>REST & GraphQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stepper Process Section */}
      <section className="service-process">
        <div className="service-process__inner">
          <div className="section-header">
            <h2 className="section-title">App Development Process</h2>
            <p className="section-subtitle">A linear, structured agile pipeline to build your app and deploy it on Google Play and Apple App Store.</p>
          </div>
          <div className="horizontal-stepper">
            <div className="step-card">
              <div className="step-card__header">
                <span className="step-card__num">01</span>
                <span className="step-card__bar"></span>
              </div>
              <div className="step-card__body">
                <h3>Wireframing UX</h3>
                <p>We prototype screens and navigation pathways prioritizing thumb-friendly layouts and guidelines.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-card__header">
                <span className="step-card__num">02</span>
                <span className="step-card__bar"></span>
              </div>
              <div className="step-card__body">
                <h3>UI Theming</h3>
                <p>Applying the custom company brand palette, animations, and graphic assets to the screen structure.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-card__header">
                <span className="step-card__num">03</span>
                <span className="step-card__bar"></span>
              </div>
              <div className="step-card__body">
                <h3>Agile Coding</h3>
                <p>Developing in two-week cycles, testing builds continuously on physical test devices to guarantee performance.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-card__header">
                <span className="step-card__num">04</span>
              </div>
              <div className="step-card__body">
                <h3>Store Launch</h3>
                <p>Preparing store listings, screenshots, privacy details, and submitting successfully to reviewers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="service-cta__card">
          <div className="service-cta__content">
            <h2>Ready to launch your mobile application?</h2>
            <p>Connect with our engineering team to outline your features, timeline, and launch strategies.</p>
          </div>
          <Link to="/contact" className="btn-cta">
            Request App Estimate <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
