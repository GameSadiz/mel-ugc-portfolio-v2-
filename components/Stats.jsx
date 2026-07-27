import { stats } from '../lib/content';

export default function Stats() {
  return (
    <section className="section section--alt" id="cifras">
      <div className="container">
        <div className="section__header reveal">
          <span className="eyebrow">Alcance</span>
          <h2 className="section__title">Cifras que hablan por sí solas</h2>
        </div>

        <div className="stats__grid reveal">
          {stats.map((stat) => (
            <div className="stat-block" key={stat.label}>
              <span className="stat-block__value">{stat.value}</span>
              <span className="stat-block__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
