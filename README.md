# Mel | UGC Content Creator Portfolio (v3 — bold / neo-brutalista)

Tercera versión del portafolio, con un sistema visual deliberadamente distinto a las otras dos: blanco y negro de alto contraste, acentos neón (rosa, azul, lima, naranja), bordes gruesos, sombras duras tipo sticker, tarjetas rotadas y una cinta de texto en marquesina. Sin degradados, sin serif itálica, sin fondos suaves.

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Cómo reemplazar el contenido de ejemplo

Todo el contenido vive en `lib/content.js`:

- `profile` — nombre, rol y frase de presentación del hero.
- `stats` — cifras de seguidores/engagement/vistas/colaboraciones, cada una con su color de fondo (`tone`).
- `marqueeWords` — palabras de la cinta en marquesina superior.
- `portfolioItems` — piezas del portafolio, cada una con `tone` (color plano) y `rotate` (grados de inclinación tipo sticker). Cuando tengas fotos reales, reemplaza el `<div className="portfolio-card__art" .../>` en `components/Portfolio.jsx` por una imagen.
- `brands` — nombres de marcas colaboradoras (se repiten en bucle en la marquesina).
- `socialLinks` — enlaces reales de Instagram/TikTok/YouTube.

## Formulario de contacto

El formulario en `components/Contact.jsx` es solo visual por ahora: al enviarlo muestra un mensaje de confirmación pero no envía datos a ningún servidor.

## Build de producción

```bash
npm run build
npm start
```
