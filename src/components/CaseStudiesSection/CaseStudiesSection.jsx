import { useState } from 'react';
import './CaseStudiesSection.css';

const categories = ['All', 'Software', 'Cloud & DevOps', 'Web & Mobile', 'Cybersecurity'];

const projectsData = [
  {
    id: '01',
    category: 'Software',
    title: 'Enterprise CRM Platform',
    desc: 'Designed and built a custom SaaS CRM platform with automated workflow pipelines, detailed sales analytics dashboards, and seamless Salesforce integrations.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'GraphQL'],
    icon: 'bx bx-layer',
    link: '#',
  },
  {
    id: '02',
    category: 'Cloud & DevOps',
    title: 'AWS Infrastructure Migration',
    desc: 'Executed a zero-downtime, containerized cloud migration of a legacy financial system to an auto-scaling Kubernetes cluster on AWS, reducing hosting costs by 40%.',
    tags: ['Kubernetes', 'Docker', 'Terraform', 'AWS'],
    icon: 'bx bx-cloud-upload',
    link: '#',
  },
  {
    id: '03',
    category: 'Web & Mobile',
    title: 'FinTech Digital Wallet',
    desc: 'Developed a high-performance cross-platform mobile banking wallet with biometric authentication, sub-second peer-to-peer transfers, and live transaction graphs.',
    tags: ['Flutter', 'Firebase', 'Express.js', 'GCP'],
    icon: 'bx bx-wallet',
    link: '#',
  },
  {
    id: '04',
    category: 'Cybersecurity',
    title: 'Zero-Trust Security Hardening',
    desc: 'Implemented enterprise-wide threat prevention protocols, identity verification gateways, automated security scans, and DDoS mitigation strategies.',
    tags: ['Python', 'Go', 'Cloudflare', 'Linux'],
    icon: 'bx bx-shield-quarter',
    link: '#',
  },
  {
    id: '05',
    category: 'Software',
    title: 'AI Inventory Forecasting',
    desc: 'Engineered an AI-driven predictive logistics software using machine learning models to analyze consumer purchasing trends and optimize inventory levels.',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
    icon: 'bx bx-brain',
    link: '#',
  },
  {
    id: '06',
    category: 'Web & Mobile',
    title: 'Smart IoT Monitoring Portal',
    desc: 'Created a real-time web interface displaying telemetry from industrial IoT sensors, utilizing WebSockets for instant data rendering and active alerting.',
    tags: ['React', 'WebSockets', 'InfluxDB', 'Node.js'],
    icon: 'bx bx-broadcast',
    link: '#',
  },
];

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = projectsData.filter((project) => {
    return activeTab === 'All' || project.category === activeTab;
  });

  return (
    <section className="cases" id="projects">
      {/* Dynamic Background Accents */}
      <div className="cases__glow cases__glow--1" />
      <div className="cases__glow cases__glow--2" />

      <div className="cases__inner">
        {/* Header */}
        <div className="cases__header">
          <div className="cases__header-intro">
            <span className="cases__tag">
              <i className="bx bx-terminal animate-pulse" /> Project Portfolio
            </span>
            <h2 className="cases__title">
              Innovative Software Solutions <span>Engineered to Scale</span>
            </h2>
            <p className="cases__subtitle">
              Explore our portfolio of cutting-edge applications, secure cloud deployments, and custom architectures built for enterprise success.
            </p>
          </div>

          {/* Navigation/Filter Tabs */}
          <div className="cases__tabs-row">
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
          </div>
        </div>

        {/* Project Bento Grid */}
        <div className="cases__grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              {/* Glass Header Info */}
              <div className="project-card__top">
                <div className="project-card__icon-box">
                  <i className={project.icon} />
                </div>
                <span className="project-card__category">{project.category}</span>
                <span className="project-card__num">{project.id}</span>
              </div>

              {/* Main Text Content */}
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.desc}</p>
              </div>

              {/* Technical Stack Tags */}
              <div className="project-card__tags">
                {project.tags.map((tag, idx) => (
                  <span className="tech-badge" key={idx}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <div className="project-card__footer">
                <a href={project.link} className="project-card__link">
                  Explore Case Study <i className="bx bx-right-arrow-alt" />
                </a>
              </div>

              {/* Animated glowing border lines */}
              <div className="project-card__glow-border" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
