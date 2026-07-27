import { marqueeWords } from '../lib/content';

export default function MarqueeTicker() {
  const words = [...marqueeWords, ...marqueeWords];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="marquee__track-item" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
            <span className="marquee__word">{word}</span>
            <span className="marquee__dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
