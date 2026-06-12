import './ProcessSection.css';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Consultation',
      desc: 'We define core requirements, analyze technical feasibility, map security parameters, and plan the architecture layout.',
      icon: 'bx bx-search-alt',
      tag: 'PLANNING',
    },
    {
      num: '02',
      title: 'UI/UX & Prototype',
      desc: 'We design modern, responsive interface prototypes, user flows, and wireframes focused on premium visual aesthetics.',
      icon: 'bx bx-palette',
      tag: 'DESIGN',
    },
    {
      num: '03',
      title: 'Agile Development',
      desc: 'We engineer secure, scalable clean code in weekly sprints with active integration and continuous deployments.',
      icon: 'bx bx-code',
      tag: 'ENGINEERING',
    },
    {
      num: '04',
      title: 'Quality & Penetration QA',
      desc: 'We perform automated regressions, unit test suite checks, load testing, and rigorous cyber security scanning.',
      icon: 'bx bx-check-shield',
      tag: 'TESTING',
    },
    {
      num: '05',
      title: 'Cloud Deploy & DevOps',
      desc: 'We deploy containerized nodes to AWS/Azure with active monitoring, server scaling rules, and 24/7 logging dashboards.',
      icon: 'bx bx-cloud-upload',
      tag: 'LAUNCH',
    },
  ];

  return (
    <section className="process" id="process">
      {/* Background Accents */}
      <div className="process__glow process__glow--1" />
      <div className="process__glow process__glow--2" />

      <div className="process__inner">
        {/* Header */}
        <div className="process__header">
          <span className="process__tag-top">
            <i className="bx bx-git-commit" /> Operational Pipeline
          </span>
          <h2 className="process__title">
            Our Software Development <span>Lifecycle</span>
          </h2>
          <p className="process__subtitle">
            How we translate complex business ideas into robust, high-performance software applications.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="process__pipeline">
          <div className="process__line-connector" />

          {steps.map((s, idx) => (
            <div className={`process__step-card ${idx % 2 === 1 ? 'reverse' : ''}`} key={idx}>
              {/* Step indicator node */}
              <div className="step-node">
                <span className="step-node__dot" />
                <span className="step-node__pulse" />
              </div>

              {/* Step content */}
              <div className="step-content">
                <div className="step-content__badge">{s.tag}</div>
                <div className="step-content__header">
                  <div className="step-content__icon-wrap">
                    <i className={s.icon} />
                  </div>
                  <div>
                    <span className="step-content__num">Step {s.num}</span>
                    <h3 className="step-content__title">{s.title}</h3>
                  </div>
                </div>
                <p className="step-content__desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
