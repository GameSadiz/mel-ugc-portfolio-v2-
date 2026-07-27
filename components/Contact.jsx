'use client';

import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="section section--alt" id="contacto">
      <div className="container">
        <div className="section__header reveal" style={{ alignItems: 'center', textAlign: 'center' }}>
          <span className="eyebrow" style={{ margin: '0 auto' }}>
            Contacto
          </span>
          <h2 className="section__title">¿Lista para elevar tu marca?</h2>
        </div>

        <p className="contact__intro reveal">
          Me encanta crear historias visuales que resuenen. Cuéntame sobre tu proyecto y hagamos algo increíble
          juntos.
        </p>

        <div className="reveal">
          {sent ? (
            <p className="form__success">
              Gracias por escribir — este formulario es solo una vista previa por ahora, pronto quedará conectado
              para recibir mensajes de verdad.
            </p>
          ) : (
            <form className="form__grid" onSubmit={handleSubmit}>
              <div className="form__field">
                <label className="form__label" htmlFor="name">
                  Nombre
                </label>
                <input className="form__input" id="name" name="name" type="text" placeholder="Tu nombre" required />
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form__input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="hola@tuempresa.com"
                  required
                />
              </div>

              <div className="form__field form__field--full">
                <label className="form__label" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  className="form__textarea"
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Hablemos de tu visión..."
                  required
                />
              </div>

              <button type="submit" className="btn btn--primary form__submit">
                Hablemos de tu marca
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
