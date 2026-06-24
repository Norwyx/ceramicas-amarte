# cerámicas amarte

Static artisan ceramics site (HTML/CSS/JS). No build step — open `*.html` directly in a browser.

## Quick start

```
open index.html
```

No dev server, bundler, or package manager needed.

## Repo structure

- `index.html` — homepage (hero, about, collections, community)
- `tienda.html` — catalog with filtering/sorting
- `producto.html` — product detail; reads `?id=` from URL
- `contacto.html` — contact form (simulated, no backend)
- `style.css` — all styles (~1267 lines)
- `main.js` — all JS (~708 lines): `PRODUCTS` array, cart, catalog, form
- `assets/` — 37 PNG images

## Key facts

- **No tests** — no test runner, no test files, no lint/format config
- **No `.gitignore`** — be careful not to commit generated or OS files
- **jQuery 3.7.1 via CDN** (`code.jquery.com`) — requires internet
- **Google Fonts** — Newsreader (serif) + Manrope (sans-serif)
- **Product data** — 8 hardcoded items in `main.js` `PRODUCTS` array
- **Cart** — `localStorage` key `ceramicas-amarte-cart`; checkout generates a WhatsApp `wa.me` message to `+57 312 859 7397`
- **Prices** — Colombian Pesos (COP)
- **License** — Proprietary, all rights reserved (`LICENSE`)

## Gotchas

- **Safari**: navbar hamburger menu and cart icon need special CSS (per-pixel adjustments). Check Safari after any navbar/icon changes.
- **Contact form** has no backend — form submit is simulated (alert + reset).
- **No JS modules or imports** — all code runs in global scope via `<script>` tags.
- Product gallery images follow pattern: `assets/<product-slug>-1.png`, `-2.png`, `-3.png`.
