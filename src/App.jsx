import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
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

// Lazy load subpages for optimized initial bundle loading speed
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const CareersPage = lazy(() => import('./pages/CareersPage/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage/ProductsPage'));
const WebDevPage = lazy(() => import('./pages/WebDevPage/WebDevPage'));
const AppDevPage = lazy(() => import('./pages/AppDevPage/AppDevPage'));
const CustomSoftwarePage = lazy(() => import('./pages/CustomSoftwarePage/CustomSoftwarePage'));
const DigitalMarketingPage = lazy(() => import('./pages/DigitalMarketingPage/DigitalMarketingPage'));
const ERPSoftwarePage = lazy(() => import('./pages/ERPSoftwarePage/ERPSoftwarePage'));
const CRMSoftwarePage = lazy(() => import('./pages/CRMSoftwarePage/CRMSoftwarePage'));

// Scroll Restoration Utility
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    console.log("ScrollToTop mounted. Global scrollRestoration:", window.history.scrollRestoration);
  }, []);

  useEffect(() => {
    console.log("ScrollToTop route change triggered. Pathname:", pathname, "Hash:", hash);
    let timers = [];

    if (!hash) {
      // Scroll to top instantly
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      
      // Setup a series of timeouts to ensure it scrolls to top as lazy components render and expand
      const delays = [50, 100, 200, 400, 600, 800, 1000];
      timers = delays.map(delay => 
        setTimeout(() => {
          console.log(`ScrollToTop deferred trigger (${delay}ms) for:`, pathname);
          window.scrollTo(0, 0);
          document.documentElement.scrollTo(0, 0);
          document.body.scrollTo(0, 0);
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }, delay)
      );
    } else {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          console.log("ScrollToTop scrolling to hash:", id);
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      timers.push(timer);
    }

    return () => {
      timers.forEach(clearTimeout);
    };
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

// Sleek loading fallback for Suspense
function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader__spinner"></div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/web-development" element={<WebDevPage />} />
            <Route path="/services/app-development" element={<AppDevPage />} />
            <Route path="/services/custom-software" element={<CustomSoftwarePage />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/services/erp-software" element={<ERPSoftwarePage />} />
            <Route path="/services/crm-software" element={<CRMSoftwarePage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
