# 🏺 cerámicas amarte

**Artesanías pintadas a mano de El Carmen de Viboral, Antioquia.**

Sitio web estático para un taller de cerámica artesanal. Proyecto universitario desarrollado para un cliente real, con catálogo, carrito y checkout por WhatsApp.

## El sitio

Cuatro páginas estáticas (HTML + CSS + JS vanilla). Sin build tools ni dependencias server-side.

| Página | Descripción |
|--------|-------------|
| [`index.html`](index.html) | Portada: hero, sobre nosotros, colecciones, comunidad |
| [`tienda.html`](tienda.html) | Catálogo con filtros y ordenamiento |
| [`producto.html`](producto.html) | Detalle dinámico — lee `?id=` de la URL |
| [`contacto.html`](contacto.html) | Formulario de contacto, mapa, horarios |

### Abrir localmente

```bash
open index.html
```

No hace falta servidor, bundler ni `npm install`.

## Stack

- **HTML5** semántico · **CSS3** (variables, glassmorphism, grid)
- **JavaScript** vanilla (ES6+) · **jQuery 3.7.1** (animaciones)
- **Google Fonts:** Newsreader + Manrope

## Carrito

`localStorage`. El checkout abre WhatsApp con el detalle del pedido.

## Licencia

Propietaria — todos los derechos reservados. Ver [`LICENSE`](LICENSE).

---

*Proyecto universitario — sitio para emprendimiento de cerámica artesanal.*
