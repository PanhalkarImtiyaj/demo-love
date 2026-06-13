import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

// Layout Wrappers
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';

// Sections for Home Landing Page
import HeroSection from './components/HeroSection/HeroSection';
import MarqueeBanner from './components/MarqueeBanner/MarqueeBanner';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ProcessSection from './components/ProcessSection/ProcessSection';
import BrandsSection from './components/BrandsSection/BrandsSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import CaseStudiesSection from './components/CaseStudiesSection/CaseStudiesSection';
import StatsSection from './components/StatsSection/StatsSection';
import FAQSection from './components/FAQSection/FAQSection';

// Subpages
import AboutPage from './pages/AboutPage/AboutPage';
import CareersPage from './pages/CareersPage/CareersPage';
import ContactPage from './pages/ContactPage/ContactPage';

// Scroll Restoration Utility
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (!hash) {
      // Scroll to top instantly
      window.scrollTo(0, 0);
      
      // Secondary deferred scroll to ensure any asynchronous layouts render at top
      const timer = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
}

// Main Landing Page Component
function LandingPage() {
  return (
    <>
      <HeroSection />
      <MarqueeBanner />
      <ServicesSection />
      <ProcessSection />
      <BrandsSection />
      <SkillsSection />
      <CaseStudiesSection />
      <StatsSection />
      <FAQSection />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
