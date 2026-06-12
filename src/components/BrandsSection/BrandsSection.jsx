import './BrandsSection.css';

const techStack = [
  { name: 'HTML5', icon: 'bx bxl-html5', color: '#e34f26' },
  { name: 'CSS3', icon: 'bx bxl-css3', color: '#1572b6' },
  { name: 'JavaScript', icon: 'bx bxl-javascript', color: '#f7df1e' },
  { name: 'React.js', icon: 'bx bxl-react', color: '#61dafb' },
  { name: 'Node.js', icon: 'bx bxl-nodejs', color: '#339933' },
  { name: 'Figma', icon: 'bx bxl-figma', color: '#f24e1e' },
  { name: 'Android', icon: 'bx bxl-android', color: '#3ddc84' },
  { name: 'GitHub', icon: 'bx bxl-github', color: '#181717' },
  { name: 'AI Automation', icon: 'bx bx-brain', color: '#8b5cf6' },
];

export default function BrandsSection() {
  return (
    <section className="tech-stack-section">
      <div className="tech-stack__inner">
        <p className="tech-stack__label">
          <i className="bx bx-chip bx-spin" style={{ marginRight: '6px' }} />
          Technologies We Specialize In
        </p>
        <div className="tech-stack__grid">
          {techStack.map((tech, i) => (
            <div className="tech-item" key={i} style={{ '--tech-color': tech.color }}>
              <span className="tech-icon">
                <i className={tech.icon} />
              </span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
