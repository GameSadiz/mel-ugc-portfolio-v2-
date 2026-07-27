import { brands } from '../lib/content';

export default function Brands() {
  return (
    <section className="section" id="marcas">
      <div className="container">
        <div className="section__header reveal" style={{ alignItems: 'center', textAlign: 'center' }}>
          <span className="eyebrow" style={{ margin: '0 auto' }}>
            Colaboraciones
          </span>
          <h2 className="section__title">Marcas con las que he trabajado</h2>
        </div>

        <div className="brands__row reveal">
          {brands.map((brand) => (
            <div className="brand-name" key={brand}>
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
