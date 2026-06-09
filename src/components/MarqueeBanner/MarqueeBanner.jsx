import './MarqueeBanner.css';

const items = [
  '✦ THE BEST SOLUTION',
  '✦ THE BEST SOLUTION',
  '✦ THE BEST SOLUTION',
  '✦ THE BEST SOLUTION',
  '✦ THE BEST SOLUTION',
  '✦ THE BEST SOLUTION',
  '✦ THE BEST SOLUTION',
  '✦ THE BEST SOLUTION',
];

export default function MarqueeBanner() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
