'use client';

import { profile, stats } from '../lib/content';
import { scrollToSection } from '../lib/scroll-to-section';
import { IconArrowDown } from './Icons';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__badge" aria-hidden="true">
        {profile.role}
      </div>
      <div className="hero__spark" aria-hidden="true" />

      <div className="hero__content">
        <span className="hero__role">{profile.role}</span>
        <h1 className="hero__name">
          M<mark>el</mark>
        </h1>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__stats">
          {stats.slice(0, 3).map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="hero__scroll"
        onClick={() => scrollToSection('portfolio')}
        aria-label="Ir al portafolio"
      >
        Ver trabajo
        <IconArrowDown />
      </button>
    </section>
  );
}
