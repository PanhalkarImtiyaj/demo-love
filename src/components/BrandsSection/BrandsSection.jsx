import './BrandsSection.css';

const brands = [
  { name: 'Contentful', icon: '🟩' },
  { name: 'Culture Amp', icon: '🔵' },
  { name: 'Dropbox', icon: '📦' },
  { name: 'Airtable', icon: '🟦' },
];

export default function BrandsSection() {
  return (
    <section className="brands">
      <div className="brands__inner">
        <p className="brands__label">1k+ Brands Trust Us</p>
        <div className="brands__logos">
          {brands.map((b, i) => (
            <div className="brand-item" key={i}>
              <span className="brand-icon">{b.icon}</span>
              <span className="brand-name">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
