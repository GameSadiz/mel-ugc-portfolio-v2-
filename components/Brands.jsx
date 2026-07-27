import { brands } from '../lib/content';

export default function Brands() {
  const names = [...brands, ...brands];

  return (
    <section className="section" id="marcas">
      <div className="container">
        <div className="section__header reveal" style={{ alignItems: 'center', textAlign: 'center', margin: '0 auto var(--space-8)' }}>
          <span className="eyebrow" style={{ margin: '0 auto' }}>
            Colaboraciones
          </span>
          <h2 className="section__title">Marcas con las que he trabajado</h2>
        </div>
      </div>

      <div className="brands__marquee">
        <div className="brands__track">
          {names.map((brand, index) => (
            <span key={`${brand}-${index}`} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
              <span className="brands__name">{brand}</span>
              <span className="brands__star">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
