import { useState } from 'react';
import './FAQSection.css';

const faqsData = [
  {
    question: 'What services does VSS Software Solutions specialize in?',
    answer: 'We focus on custom software development, high-performance web applications (React, Next.js), native & cross-platform mobile apps (Flutter, React Native), and enterprise cloud/DevOps architecture setups (AWS, GCP).',
  },
  {
    question: 'What technology stacks do you support?',
    answer: 'Our main technologies include React, Next.js, Node.js, Python, Flutter, Go, and PostgreSQL. For cloud and DevOps, we heavily utilize AWS, Azure, Docker, Kubernetes, and Terraform.',
  },
  {
    question: 'Do you sign a Non-Disclosure Agreement (NDA) before starting?',
    answer: 'Yes, absolutely. We prioritize IP security and data privacy. We sign standard NDAs with our clients before discussing project files, API endpoints, or database structures.',
  },
  {
    question: 'How do you handle project communication and sprint updates?',
    answer: 'We operate on Agile Scrum methodologies. We set up shared Slack or WhatsApp channels and provide clickable demo builds at the end of every weekly sprint so you are always in control of the progress.',
  },
  {
    question: 'Do you offer support and server maintenance after the project launches?',
    answer: 'Yes, we provide flexible monthly maintenance SLAs. These cover automated database backups, OS security patches, cloud server monitoring, and hotfix patching to ensure 99.99% system uptime.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="pages">
      <div className="faq__glow faq__glow--1" />
      <div className="faq__glow faq__glow--2" />

      <div className="faq__inner">
        {/* Header */}
        <div className="faq__header">
          <span className="faq__label">
            <i className="bx bx-help-circle" /> Common Queries
          </span>
          <h2 className="faq__title">
            Frequently Asked <span>Questions</span>
          </h2>
          <p className="faq__subtitle">
            Find answers to commonly asked questions about our technology consultation, pricing, and project workflows.
          </p>
        </div>

        {/* Accordions List */}
        <div className="faq__list">
          {faqsData.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                className={`faq-item ${isOpen ? 'open' : ''}`}
                key={idx}
                onClick={() => toggleAccordion(idx)}
              >
                {/* Accordion Trigger Header */}
                <div className="faq-item__trigger">
                  <h3 className="faq-item__question">{faq.question}</h3>
                  <div className="faq-item__toggle">
                    <i className={`bx ${isOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`} />
                  </div>
                </div>

                {/* Accordion Collapsible Panel */}
                <div className="faq-item__panel">
                  <p className="faq-item__answer">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
