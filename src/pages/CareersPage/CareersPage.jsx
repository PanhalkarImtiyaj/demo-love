import { useState } from 'react';
import './CareersPage.css';

const jobsData = [
  {
    id: 'job-1',
    title: 'Full Stack Software Engineer',
    department: 'Engineering',
    location: 'Pune, India (Hybrid)',
    type: 'Full-Time',
    salary: 'Competetive',
    desc: 'We are looking for a skilled developer to build clean and scalable React/Next.js frontends and optimize Node.js APIs.',
    requirements: [
      '2+ years experience building React or Next.js applications.',
      'Proficiency in writing REST or GraphQL endpoints with Express/Node.js.',
      'Experience with SQL/NoSQL databases (PostgreSQL, MongoDB).',
      'Solid understanding of Git version control and code review practices.',
    ],
    responsibilities: [
      'Develop modern reusable frontend component files in React.',
      'Design, test, and deploy secure APIs and database schemas.',
      'Collaborate with designers to ensure premium visual design guidelines are met.',
    ],
  },
  {
    id: 'job-2',
    title: 'Mobile App Developer (Flutter)',
    department: 'Engineering',
    location: 'Pune, India (Hybrid)',
    type: 'Full-Time',
    salary: 'Competetive',
    desc: 'Join us to code premium cross-platform mobile apps using Flutter and Dart, focused on smooth UX rendering.',
    requirements: [
      '2+ years experience with Flutter application structures and Dart.',
      'Knowledge of state management packages (BLoC, Provider, Riverpod).',
      'Familiarity with iOS/Android app store submission guidelines.',
      'Integration of REST APIs and Firebase metrics.',
    ],
    responsibilities: [
      'Build seamless native-like Android and iOS interfaces.',
      'Optimize application latency and rendering speeds.',
      'Implement biometric authentication systems and local database structures.',
    ],
  },
  {
    id: 'job-3',
    title: 'Cloud Architect & DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote (India)',
    type: 'Full-Time',
    salary: 'Competetive',
    desc: 'Manage AWS/Azure environments, automate CI/CD pipeline deployments, and configure Kubernetes networks.',
    requirements: [
      'Hands-on experience orchestrating Kubernetes and Docker containers.',
      'Proficiency in Infrastructure as Code (IaC) using Terraform.',
      'Experience setting up GitHub Actions pipelines and server diagnostics.',
      'AWS or Azure Cloud professional certification is preferred.',
    ],
    responsibilities: [
      'Maintain 99.99% infrastructure uptime SLAs for enterprise nodes.',
      'Automate server database backups and deployment security patches.',
      'Monitor and tune auto-scaling policies to optimize hosting overhead.',
    ],
  },
  {
    id: 'job-4',
    title: 'Cybersecurity & Auditing Specialist',
    department: 'Security Operations',
    location: 'Pune, India (On-site)',
    type: 'Full-Time',
    salary: 'Competetive',
    desc: 'Audit system architectures, set zero-trust firewalls, scan vulnerabilities, and manage network security walls.',
    requirements: [
      'Familiarity with penetration testing tools (Wireshark, Metasploit, Nmap).',
      'Understanding of zero-trust network protocols and API security measures.',
      'Knowledge of ISO 27001 or SOC2 compliance framework requirements.',
      'Excellent bug tracing and security scripting skills (Python/Go).',
    ],
    responsibilities: [
      'Execute monthly vulnerability scans on VSS production clusters.',
      'Harden database security grids and setup threat alerting panels.',
      'Draft security NDA guidelines and run internal infrastructure audits.',
    ],
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resumeUrl: '',
    coverLetter: '',
  });

  const toggleAccordion = (jobId) => {
    setActiveAccordion(activeAccordion === jobId ? null : jobId);
  };

  const openApplyModal = (job, e) => {
    e.stopPropagation(); // Stop trigger from collapsing
    setSelectedJob(job);
    setIsModalOpen(true);
    setFormSubmitted(false);
  };

  const closeApplyModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      resumeUrl: '',
      coverLetter: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      closeApplyModal();
    }, 2500);
  };

  return (
    <div className="careers-page">
      {/* Hero Header */}
      <section className="careers-hero">
        <div className="careers-hero__glow" />
        <div className="careers-hero__inner">
          <span className="careers-tag">VSS CAREERS</span>
          <h1 className="careers-title">Code the Future <span>With Us</span></h1>
          <p className="careers-subtitle">
            At VSS Software Solutions, we build premium software systems, cloud nodes, and mobile tools. Explore our open developer roles and engineer global impact.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="careers-culture">
        <div className="careers-culture__inner">
          <h2 className="section-title text-center">Why Engineers <span>Thrive</span> at VSS</h2>
          <p className="section-desc text-center">Our operational parameters are optimized to keep our engineering team happy and inspired.</p>
          
          <div className="culture-grid">
            <div className="culture-card">
              <div className="culture-card__icon"><i className="bx bx-laptop" /></div>
              <h3 className="culture-card__title">Hybrid / Remote Roles</h3>
              <p className="culture-card__desc">Choose remote-first scheduling or check in at our premium office space in Pune. Work where you are most productive.</p>
            </div>
            <div className="culture-card">
              <div className="culture-card__icon"><i className="bx bx-bracket" /></div>
              <h3 className="culture-card__title">Modern Dev Stacks</h3>
              <p className="culture-card__desc">We build with React, Flutter, AWS Kubernetes, Python, and Rust. No obsolete code legacy structures here.</p>
            </div>
            <div className="culture-card">
              <div className="culture-card__icon"><i className="bx bx-graduation" /></div>
              <h3 className="culture-card__title">Tech Training & Budgets</h3>
              <p className="culture-card__desc">We fund your tech certs, AWS licensing tests, design webinars, and workspace hardware accessories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Openings Accordion */}
      <section className="careers-jobs">
        <div className="careers-jobs__inner">
          <h2 className="section-title text-center">Active <span>Openings</span></h2>
          <p className="section-desc text-center">Click a position below to view requirements, project responsibilities, and apply.</p>

          <div className="jobs-list">
            {jobsData.map((job) => {
              const isOpen = activeAccordion === job.id;
              return (
                <div className={`job-row ${isOpen ? 'open' : ''}`} key={job.id} onClick={() => toggleAccordion(job.id)}>
                  
                  {/* Job Trigger Row */}
                  <div className="job-row__trigger">
                    <div className="job-row__left">
                      <h3 className="job-title">{job.title}</h3>
                      <div className="job-meta">
                        <span><i className="bx bx-folder" /> {job.department}</span>
                        <span><i className="bx bx-map" /> {job.location}</span>
                        <span><i className="bx bx-time-five" /> {job.type}</span>
                      </div>
                    </div>
                    <div className="job-row__right">
                      <button className="job-apply-btn" onClick={(e) => openApplyModal(job, e)}>Apply Now</button>
                      <div className="job-arrow-icon">
                        <i className={`bx ${isOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`} />
                      </div>
                    </div>
                  </div>

                  {/* Collapsible Details */}
                  <div className="job-row__panel">
                    <div className="panel-inner">
                      <p className="job-desc">{job.desc}</p>
                      
                      <div className="job-specs-grid">
                        <div>
                          <h4 className="specs-title">Key Responsibilities</h4>
                          <ul className="specs-list">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx}><i className="bx bx-check" /> {resp}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="specs-title">Core Requirements</h4>
                          <ul className="specs-list">
                            {job.requirements.map((req, idx) => (
                              <li key={idx}><i className="bx bx-badge-check" /> {req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="panel-footer">
                        <button className="panel-apply-btn" onClick={(e) => openApplyModal(job, e)}>Submit Application <i className="bx bx-right-arrow-alt" /></button>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Application Modal Popup */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeApplyModal}>
          <div className="apply-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeApplyModal}><i className="bx bx-x" /></button>
            
            {formSubmitted ? (
              <div className="modal-success-screen">
                <div className="success-icon-wrap"><i className="bx bx-check-circle" /></div>
                <h3>Application Submitted!</h3>
                <p>Thank you for applying for the <strong>{selectedJob?.title}</strong> role. Our technical recruitment manager will review your submission and contact you via email shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="modal-title">Apply for Position</h3>
                <span className="modal-job-title">{selectedJob?.title} ({selectedJob?.location})</span>
                
                <form className="apply-form" onSubmit={handleFormSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Enter full name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="email@example.com" />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="10-digit number" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="resumeUrl">Resume Link / Portfolio URL</label>
                      <input type="url" id="resumeUrl" name="resumeUrl" value={formData.resumeUrl} onChange={handleInputChange} required placeholder="https://drive.google.com/..." />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="coverLetter">Cover Letter / Technical Summary</label>
                    <textarea id="coverLetter" name="coverLetter" rows="4" value={formData.coverLetter} onChange={handleInputChange} required placeholder="Explain your core technical background and why you are a fit..."></textarea>
                  </div>

                  <button type="submit" className="form-submit-btn">Submit Technical Application <i className="bx bx-paper-plane" /></button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
