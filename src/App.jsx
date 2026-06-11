import './index.css';
import Navbar           from './components/Navbar/Navbar';
import HeroSection      from './components/HeroSection/HeroSection';
import MarqueeBanner    from './components/MarqueeBanner/MarqueeBanner';
import ServicesSection  from './components/ServicesSection/ServicesSection';
import BrandsSection    from './components/BrandsSection/BrandsSection';
import SkillsSection    from './components/SkillsSection/SkillsSection';
import CaseStudiesSection from './components/CaseStudiesSection/CaseStudiesSection';
import StatsSection     from './components/StatsSection/StatsSection';
import Chatbot          from './components/Chatbot/Chatbot';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <ServicesSection />
      <BrandsSection />
      <SkillsSection />
      <CaseStudiesSection />
      <StatsSection />
      <Chatbot />
    </>
  );
}

export default App;
