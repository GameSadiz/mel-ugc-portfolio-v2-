# Mel | UGC Content Creator Portfolio (v2 — minimalista claro)

Segunda versión del portafolio: mismo contenido que [mel-ugc-portfolio](https://github.com/gamesadiz/mel-ugc-portfolio), pero con una estética editorial minimalista y clara en vez del tema espacial — fondo cálido claro, tipografía serif itálica, líneas finas y un único color de acento (terracota) en vez de degradados y brillos.

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Cómo reemplazar el contenido de ejemplo

Todo el contenido vive en `lib/content.js`:

- `profile` — nombre, rol y frase de presentación del hero.
- `stats` — cifras de seguidores/engagement/vistas/colaboraciones.
- `portfolioItems` — piezas del portafolio. Cada una tiene un `tone` (color plano de placeholder); cuando tengas fotos reales, reemplaza el `<div className="portfolio-card__art" .../>` en `components/Portfolio.jsx` por una imagen.
- `brands` — nombres de marcas colaboradoras.
- `socialLinks` — enlaces reales de Instagram/TikTok/YouTube.

## Formulario de contacto

El formulario en `components/Contact.jsx` es solo visual por ahora: al enviarlo muestra un mensaje de confirmación pero no envía datos a ningún servidor.

## Build de producción

```bash
npm run build
npm start
```
