'use client';

import { useEffect, useState } from 'react';
import { navLinks } from '../lib/content';
import { scrollToSection } from '../lib/scroll-to-section';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState('inicio');

  useEffect(() => {
    let frame;
    const sections = navLinks.map((link) => ({ id: link.id, el: document.getElementById(link.id) })).filter(
      (entry) => entry.el
    );
    const marker = () => (document.querySelector('.header')?.offsetHeight || 80) + 80;

    const update = () => {
      frame = null;
      setIsScrolled(window.scrollY > 10);

      let current = sections.length ? sections[0].id : navLinks[0].id;
      const line = marker();
      for (const entry of sections) {
        if (entry.el.getBoundingClientRect().top <= line) current = entry.id;
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const handleNavClick = (event, id) => {
    setIsOpen(false);
    if (scrollToSection(id)) event.preventDefault();
  };

  return (
    <header className={`header${isScrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__container">
        <a href="#inicio" className="header__logo" onClick={(e) => handleNavClick(e, 'inicio')}>
          Mel
        </a>

        <nav className="nav">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav__link${activeId === link.id ? ' is-active' : ''}`}
                  aria-current={activeId === link.id ? 'page' : undefined}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contacto" className="btn btn--outline header__cta" onClick={(e) => handleNavClick(e, 'contacto')}>
          Hablemos de tu marca
        </a>

        <button
          className="header__toggle"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="mobileNav"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobileNav" className={`header__mobile-nav${isOpen ? ' is-open' : ''}`}>
        <ul className="header__mobile-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.id)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
