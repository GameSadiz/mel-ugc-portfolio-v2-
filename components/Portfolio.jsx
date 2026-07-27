import { portfolioItems, tags } from '../lib/content';

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section__header reveal">
          <span className="eyebrow">Mi trabajo</span>
          <h2 className="section__title">Contenido con carácter propio</h2>
          <div className="section__tags">
            {tags.map((tag) => (
              <span className="tag-pill" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="portfolio__grid">
          {portfolioItems.map((item, index) => (
            <article className="portfolio-card reveal" key={item.id} style={{ transitionDelay: `${(index % 3) * 0.08}s` }}>
              <div className="portfolio-card__frame">
                <div className="portfolio-card__art" style={{ backgroundColor: item.tone }} />
                <span className="portfolio-card__index">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="portfolio-card__body">
                <span className="portfolio-card__category">{item.category}</span>
                <h3 className="portfolio-card__title">{item.title}</h3>
                <p className="portfolio-card__desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
