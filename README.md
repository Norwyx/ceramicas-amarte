# 🏺 Cerámicas Amarte

**Hand-painted ceramics from El Carmen de Viboral, Antioquia.**

Static website for an artisan ceramics workshop. University project built for a real client, featuring a product catalog, shopping cart, and WhatsApp checkout.

## Pages

Four static pages (HTML + CSS + vanilla JS). No build tools or server-side dependencies.

| Page | Description |
|------|-------------|
| [`index.html`](index.html) | Home: hero, about, collections, community |
| [`tienda.html`](tienda.html) | Catalog with filtering and sorting |
| [`producto.html`](producto.html) | Dynamic product detail — reads `?id=` from URL |
| [`contacto.html`](contacto.html) | Contact form, map, hours |

### Open locally

```bash
open index.html
```

No server, bundler, or `npm install` required.

## Stack

- **HTML5** semantic · **CSS3** (variables, glassmorphism, grid)
- **JavaScript** vanilla (ES6+) · **jQuery 3.7.1** (animations)
- **Google Fonts:** Newsreader + Manrope

## Cart

`localStorage`-based. Checkout opens WhatsApp with the order summary.

## License

Proprietary — all rights reserved. See [`LICENSE`](LICENSE).

---

*University project — website for a handmade ceramics business.*
