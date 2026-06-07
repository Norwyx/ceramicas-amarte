// Copyright (c) 2026 Cerámicas Amarte. Todos los derechos reservados.
// Licenciado bajo licencia privativa. Ver archivo LICENSE para detalles.

/* ─────────────────────────────────────────────
   BASE DE DATOS DE PRODUCTOS
   Array con todos los productos del catálogo.
   Cada producto tiene: id, nombre, precio numérico,
   precio formateado, categoría, badge, imágenes y specs.
───────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    name: 'Bandeja de servir "Viboral"',
    subtitle: 'Clásico pigmento azul cobalto y delicados motivos de hojas.',
    price: 145000,
    priceStr: '$145.000',
    category: 'platos',
    badge: 'destacado', badgeText: 'Destacado',
    image: 'assets/plato-viboral-1.png',
    description: 'Elaborada con arcilla local de Antioquia y pintada a mano con pigmento azul cobalto de El Carmen de Viboral. Cada pieza es única.',
    specs: { 'Dimensiones': '32cm diámetro x 3cm altura', 'Material': 'Arcilla de Terracota Natural', 'Barniz': 'Sin Plomo, Cristalino', 'Cuidado': 'Lavar a mano únicamente' },
    chips: ['Hecho a mano', 'Listo para envío'], rating: '4.9', reviews: 18,
    images: ['assets/plato-viboral-1.png','assets/plato-viboral-2.png','assets/plato-viboral-3.png']
  },
  {
    id: 2,
    name: 'Bowl Madre Tierra',
    subtitle: 'Exterior sin acristalar / Interior acristalado',
    price: 68000, priceStr: '$68.000',
    category: 'bowls', badge: 'best', badgeText: 'Best Seller',
    image: 'assets/bowl-madre-tierra-1.png',
    description: 'Modelado a mano con arcilla local. El contraste entre el exterior rústico y el interior cristalizado es seña de identidad de nuestra artesanía.',
    specs: { 'Dimensiones': '18cm diámetro x 10cm altura', 'Material': 'Arcilla de Terracota Natural', 'Barniz': 'Interior cristalino, Exterior natural', 'Cuidado': 'Lavar a mano únicamente' },
    chips: ['Hecho a mano', 'Listo para envío'], rating: '5.0', reviews: 34,
    images: ['assets/bowl-madre-tierra-1.png','assets/bowl-madre-tierra-2.png','assets/bowl-madre-tierra-3.png']
  },
  {
    id: 3,
    name: 'Jarrón decorativo Aura',
    subtitle: 'Pieza única pintada a mano',
    price: 82000, priceStr: '$82.000',
    category: 'decorativo', badge: null,
    image: 'assets/jarron-aura-1.png',
    description: 'Formas orgánicas con motivos vegetales pintados con pigmentos minerales propios de nuestra región.',
    specs: { 'Dimensiones': '12cm diámetro x 26cm altura', 'Material': 'Gres de Alta Cocción', 'Barniz': 'Esmalte mineral mate', 'Cuidado': 'Solo decorativo' },
    chips: ['Hecho a mano', 'Pieza única'], rating: '4.8', reviews: 12,
    images: ['assets/jarron-aura-1.png','assets/jarron-aura-2.png','assets/jarron-aura-3.png']
  },
  {
    id: 4,
    name: 'Set Espresso Tradición',
    subtitle: 'Juego de 2 tazas y platillos — Serie contemporánea',
    price: 45000, priceStr: '$45.000',
    category: 'platos', badge: null,
    image: 'assets/set-tradicion-1.png',
    description: 'El ritual del café en una pieza de arte. Dos tazas y platillos con motivos florales minimalistas.',
    specs: { 'Dimensiones': 'Taza 7cm Ø x 6cm / Platillo 14cm Ø', 'Material': 'Porcelana artesanal', 'Barniz': 'Sin Plomo, Cristalino', 'Cuidado': 'Lavar a mano únicamente' },
    chips: ['Hecho a mano', 'Listo para envío'], rating: '4.7', reviews: 27,
    images: ['https://picsum.photos/seed/set-espresso/600/600','https://picsum.photos/seed/set-espresso-2/600/600','https://picsum.photos/seed/set-espresso-3/600/600']
  },
  {
    id: 5,
    name: 'Plato Punto & Arcilla',
    subtitle: 'Serie contemporánea',
    price: 54000, priceStr: '$54.000',
    category: 'platos', badge: null,
    image: 'assets/plato-punto-arcilla-1.png',
    description: 'Patrón geométrico inspirado en el arte óptico, reinterpretado con pigmentos minerales centenarios de nuestro taller.',
    specs: { 'Dimensiones': '27cm diámetro x 2.5cm altura', 'Material': 'Arcilla de Terracota Natural', 'Barniz': 'Sin Plomo, Cristalino', 'Cuidado': 'Apto para microondas' },
    chips: ['Hecho a mano', 'Listo para envío'], rating: '4.9', reviews: 9,
    images: ['assets/plato-punto-arcilla-1.png','assets/plato-punto-arcilla-2.png','assets/plato-punto-arcilla-3.png']
  },
  {
    id: 6,
    name: 'Jarra Floral Antigua',
    subtitle: 'Gres de alta cocción',
    price: 95000, priceStr: '$95.000',
    category: 'decorativo', badge: null,
    image: 'assets/jarra-floral-antigua-1.png',
    description: 'Inspirada en las jarras del s. XVIII del Oriente Antioqueño. Horneada a más de 1200°C.',
    specs: { 'Dimensiones': '15cm diámetro x 30cm altura', 'Material': 'Gres de Alta Cocción', 'Barniz': 'Esmalte con craquelé', 'Cuidado': 'Solo decorativo' },
    chips: ['Hecho a mano', 'Horneado completado'], rating: '5.0', reviews: 6,
    images: ['assets/jarra-floral-antigua-1.png','assets/jarra-floral-antigua-2.png','assets/jarra-floral-antigua-3.png']
  },
  {
    id: 7,
    name: 'Taza Matutina',
    subtitle: 'Diseño de mango ergonómico',
    price: 28000, priceStr: '$28.000',
    category: 'bowls', badge: 'nuevo', badgeText: 'Nuevo',
    image: 'assets/taza-matutina-1.png',
    description: 'La compañera perfecta para cada mañana. Asa ergonómica, pintada con nuestro icónico azul cobalto sobre base crema.',
    specs: { 'Dimensiones': '9cm diámetro x 9cm — 350ml', 'Material': 'Arcilla de Terracota Natural', 'Barniz': 'Sin Plomo, apto para alimentos', 'Cuidado': 'Lavar a mano únicamente' },
    chips: ['Hecho a mano', 'Listo para envío'], rating: '4.8', reviews: 41,
    images: ['assets/taza-matutina-1.png','assets/taza-matutina-2.png','assets/taza-matutina-3.png']
  },
  {
    id: 8,
    name: 'Flor de Lis Bowl',
    subtitle: 'Colección Tradicional — Edición clásica',
    price: 58000, priceStr: '$58.000',
    category: 'bowls', badge: null,
    image: 'assets/flor-lis-bowl-1.png',
    description: 'El icónico diseño "Flor de Lis", sello distintivo de la tradición de El Carmen de Viboral. Pigmentos minerales aplicados a mano.',
    specs: { 'Dimensiones': '15cm diámetro x 8cm altura', 'Material': 'Arcilla de Terracota Natural', 'Barniz': 'Sin Plomo, Cristalino', 'Cuidado': 'Lavar a mano únicamente' },
    chips: ['Hecho a mano', 'Listo para envío'], rating: '4.9', reviews: 24,
    images: ['assets/flor-lis-bowl-1.png','assets/flor-lis-bowl-2.png','assets/flor-lis-bowl-3.png']
  }
];

const WHATSAPP_NUMBER = '573128597397';
const CART_STORAGE_KEY = 'ceramicas-amarte-cart';

/* ─────────────────────────────────────────────
   ESTADO DEL CARRITO
   Objeto que guarda los ítems actuales del carrito.
   Clave: id del producto, Valor: { product, qty }
───────────────────────────────────────────── */
let cart = {};

function loadCartFromStorage() {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      cart = {};
      for (const [productId, item] of Object.entries(parsed)) {
        const product = PRODUCTS.find(p => p.id === parseInt(productId));
        if (product) {
          cart[productId] = { product, qty: item.qty };
        }
      }
    }
  } catch (e) {
    console.warn('Error loading cart from localStorage:', e);
    cart = {};
  }
}

function saveCartToStorage() {
  try {
    const storable = {};
    for (const [productId, item] of Object.entries(cart)) {
      storable[productId] = { qty: item.qty };
    }
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(storable));
  } catch (e) {
    console.warn('Error saving cart to localStorage:', e);
  }
}

/* ══════════════════════════════════════════════
   SCRIPT 1 — formatPrice(num)
   Convierte un número a formato de precio colombiano.
   Ejemplo: 145000 → "$145.000"
══════════════════════════════════════════════ */
function formatPrice(num) {
  return '$' + num.toLocaleString('es-CO');
}

/* ══════════════════════════════════════════════
   SCRIPT 2 — getCartTotal()
   Calcula el total del carrito sumando precio × cantidad
   de cada producto añadido.
══════════════════════════════════════════════ */
function getCartTotal() {
  return Object.values(cart).reduce((sum, item) => {
    return sum + item.product.price * item.qty;
  }, 0);
}

/* ══════════════════════════════════════════════
   SCRIPT 3 — getCartCount()
   Retorna la cantidad total de artículos en el carrito
   sumando las unidades de cada producto.
══════════════════════════════════════════════ */
function getCartCount() {
  return Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
}

/* ══════════════════════════════════════════════
   SCRIPT 4 — updateCartBadge()
   Actualiza el número sobre el ícono del carrito
   en la barra de navegación. Oculta la insignia si está vacío.
══════════════════════════════════════════════ */
function updateCartBadge() {
  const count = getCartCount();
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  if (count > 0) {
    badge.textContent = count > 99 ? '99+' : count;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

/* ══════════════════════════════════════════════
   SCRIPT 5 — addToCart(productId)
   Agrega un producto al carrito o incrementa su cantidad
   si ya estaba. Actualiza la insignia y muestra el toast.
══════════════════════════════════════════════ */
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (cart[productId]) {
    cart[productId].qty += 1;
  } else {
    cart[productId] = { product, qty: 1 };
  }

  saveCartToStorage();
  updateCartBadge();
  renderCartItems();
  showToast('Añadido al carrito ✓');
}

/* ══════════════════════════════════════════════
   SCRIPT 6 — removeFromCart(productId)
   Elimina un producto del carrito por completo
   y vuelve a renderizar el panel del carrito.
══════════════════════════════════════════════ */
function removeFromCart(productId) {
  delete cart[productId];
  saveCartToStorage();
  updateCartBadge();
  renderCartItems();
}

/* ══════════════════════════════════════════════
   SCRIPT 7 — changeQty(productId, delta)
   Incrementa o decrementa la cantidad de un producto.
   Si la cantidad llega a 0, lo elimina del carrito.
══════════════════════════════════════════════ */
function changeQty(productId, delta) {
  if (!cart[productId]) return;
  cart[productId].qty += delta;
  if (cart[productId].qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCartToStorage();
    updateCartBadge();
    renderCartItems();
  }
}

/* ══════════════════════════════════════════════
   SCRIPT 8 — renderCartItems()
   Construye el HTML del panel del carrito dinámicamente.
   Muestra el estado vacío si no hay productos.
   Actualiza el total en el footer del carrito.
══════════════════════════════════════════════ */
function renderCartItems() {
  const container = document.getElementById('cart-items-list');
  const totalEl   = document.getElementById('cart-total-amount');
  if (!container) return;

  const items = Object.values(cart);

  if (items.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <p>Tu carrito está vacío.<br>Explora nuestra colección y agrega piezas artesanales.</p>
        <a href="tienda.html" class="btn btn-primary" style="margin-top:0.5rem">Ver Catálogo</a>
      </div>`;
    if (totalEl) totalEl.textContent = '$0';
    return;
  }

  container.innerHTML = items.map(({ product, qty }) => `
    <div class="cart-item" data-id="${product.id}">
      <div class="cart-item-img">
        <img src="${product.image}" alt="${product.name}"/>
      </div>
      <div>
        <div class="cart-item-name">${product.name}</div>
        <div class="cart-item-price">${formatPrice(product.price * qty)}</div>
        <div class="cart-qty">
          <button onclick="changeQty(${product.id}, -1)" aria-label="Disminuir cantidad">−</button>
          <span>${qty}</span>
          <button onclick="changeQty(${product.id}, 1)" aria-label="Aumentar cantidad">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${product.id})" aria-label="Eliminar producto">✕</button>
    </div>
  `).join('');

  if (totalEl) totalEl.textContent = formatPrice(getCartTotal());
}

/* ══════════════════════════════════════════════
   SCRIPT 9 — checkoutWhatsApp()
   Construye un mensaje de pedido con todos los
   productos del carrito y abre WhatsApp con ese texto.
   Es la alternativa artesanal al checkout tradicional.
══════════════════════════════════════════════ */
function checkoutWhatsApp() {
  const items = Object.values(cart);
  if (items.length === 0) return;

  let msg = '¡Hola! Quiero hacer el siguiente pedido:\n\n';
  items.forEach(({ product, qty }) => {
    msg += `• ${product.name} x${qty} — ${formatPrice(product.price * qty)}\n`;
  });
  msg += `\n*Total: ${formatPrice(getCartTotal())}*\n\n¿Está disponible?`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ══════════════════════════════════════════════
   SCRIPT 10 — showToast(message)
   Muestra una notificación temporal en la parte inferior
   cuando se agrega un producto al carrito.
   Se oculta automáticamente después de 2 segundos.
══════════════════════════════════════════════ */
function showToast(message) {
  const toast = document.getElementById('toast-added');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

/* ══════════════════════════════════════════════
   SCRIPT 11 — badgeHTML(badge, text)
   Genera el HTML de un chip/badge para una tarjeta de producto.
   Retorna cadena vacía si no hay badge.
══════════════════════════════════════════════ */
function badgeHTML(badge, text) {
  if (!badge) return '';
  const cls = badge === 'best' ? 'chip-best' : badge === 'nuevo' ? 'chip-nuevo' : 'chip-hecho';
  return `<span class="chip ${cls}">${text || badge}</span>`;
}

/* ══════════════════════════════════════════════
   SCRIPT 12 — initReveal()
   Observa los elementos con clase .reveal usando
   IntersectionObserver para animarlos al entrar en pantalla.
══════════════════════════════════════════════ */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ══════════════════════════════════════════════
   SCRIPT 13 — renderCatalog(filter)
   Renderiza la grilla de productos del catálogo.
   Filtra por categoría si se pasa un parámetro distinto de 'all'.
   Los productos se generan dinámicamente desde PRODUCTS.
══════════════════════════════════════════════ */
function renderCatalog(filter) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const list = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter);

  grid.innerHTML = list.map((p, i) => `
    <article class="product-card reveal" style="transition-delay:${(i % 6) * 0.07}s">
      <div class="product-card-img" onclick="window.location.href='producto.html?id=${p.id}'">
        ${p.badge ? `<div class="product-card-badge">${badgeHTML(p.badge, p.badgeText)}</div>` : ''}
        <img src="${p.image}" alt="${p.name}" loading="lazy"/>
      </div>
      <div class="product-card-body">
        <div class="product-card-name">${p.name}</div>
        <div class="product-card-sub">${p.subtitle}</div>
        <div class="product-card-footer">
          <span class="product-card-price">${p.priceStr}</span>
          <div style="display:flex;gap:0.5rem;align-items:center;">
            <a href="producto.html?id=${p.id}" class="btn-ghost" style="font-size:0.78rem">Ver más</a>
            <button class="btn-add-cart" onclick="addToCart(${p.id})" aria-label="Agregar al carrito" title="Agregar al carrito">+</button>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  // Solo observa los elementos recién creados dentro del grid
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  grid.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ══════════════════════════════════════════════
   SCRIPT 14 — initProductDetail()
   Carga y renderiza la página de detalle del producto
   según el ?id= en la URL. Si no hay id, muestra el primero.
══════════════════════════════════════════════ */
function initProductDetail() {
  if (!document.getElementById('product-detail-root')) return;

  const id = parseInt(new URLSearchParams(window.location.search).get('id')) || 1;
  const p  = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];

  // Breadcrumb y título
  const bcName = document.getElementById('breadcrumb-name');
  if (bcName) bcName.textContent = p.name;
  document.title = `${p.name} — Cerámicas Amarte`;

  // Contenido principal
  document.getElementById('pd-badge').innerHTML  = badgeHTML('hecho', 'Hecho a Mano');
  document.getElementById('pd-rating').textContent = `★ ${p.rating} (${p.reviews} Reviews)`;
  document.getElementById('pd-name').textContent   = p.name;
  document.getElementById('pd-price').textContent  = p.priceStr;
  document.getElementById('pd-desc').textContent   = p.description;

  // Galería principal y miniaturas
  const mainImg    = document.getElementById('pd-img-main');
  const thumbsWrap = document.getElementById('pd-thumbs');
  mainImg.src = p.images[0];
  mainImg.alt = p.name;

  thumbsWrap.innerHTML = p.images.map((src, i) => `
    <div class="product-gallery-thumb ${i === 0 ? 'active' : ''}" data-idx="${i}">
      <img src="${src}" alt="${p.name} — detalle ${i + 1}"/>
    </div>
  `).join('');

  // Cambio de imagen al hacer click en miniatura
  thumbsWrap.querySelectorAll('.product-gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbsWrap.querySelectorAll('.product-gallery-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      mainImg.src = p.images[+thumb.dataset.idx];
    });
  });

  // Chips de estado
  document.getElementById('pd-chips').innerHTML = p.chips.map((c, i) =>
    `<span class="chip ${i === 0 ? 'chip-hecho' : 'chip-listo'}">${c}</span>`
  ).join('');

  // Botón de WhatsApp directo para esta pieza
  const waMsg = encodeURIComponent(`¡Hola! Me interesa comprar: *${p.name}* (${p.priceStr}). ¿Está disponible?`);
  document.getElementById('pd-wa-btn').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

  // Botón añadir al carrito
  const addBtn = document.getElementById('pd-add-cart');
  if (addBtn) addBtn.addEventListener('click', () => addToCart(p.id));

  // Tabla de especificaciones
  document.getElementById('pd-specs').innerHTML = Object.entries(p.specs)
    .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('');
}

/* ══════════════════════════════════════════════
   SCRIPT 15 — initContactForm()
   Valida y maneja el envío del formulario de contacto.
   Muestra feedback visual y resetea el form tras enviar.
══════════════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const btn = form.querySelector('[type="submit"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    btn.textContent = 'Enviando…';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '¡Mensaje enviado! ✓';
      btn.style.background = '#3c7a50';
      setTimeout(() => {
        btn.textContent = 'Enviar Mensaje';
        btn.disabled = false;
        btn.style.background = '';
        form.reset();
      }, 3000);
    }, 1200);
  });
}

/* ══════════════════════════════════════════════
   SCRIPT 16 — setActiveNavLink()
   Marca el enlace activo en la barra de navegación
   comparando el href con la página actual.
══════════════════════════════════════════════ */
function setActiveNavLink() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === page || (page === '' && href === 'index.html'));
  });
}

/* ══════════════════════════════════════════════
   SCRIPT 17 — initWhatsAppFab()
   Inicializa el botón flotante de WhatsApp
   con el número y mensaje predeterminado de la empresa.
══════════════════════════════════════════════ */
function initWhatsAppFab() {
  const fab = document.getElementById('whatsapp-fab');
  if (fab) {
    const msg = encodeURIComponent('¡Hola! Me interesa saber más sobre sus cerámicas artesanales.');
    fab.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  }
}

/* ═══════════════════════════════════════════════════════
   JQUERY 1 — Scroll del navbar
   Detecta el scroll de la página con jQuery y aplica
   la clase .scrolled al navbar para activar el glassmorphism.
   También maneja la navbar transparente en la página de inicio.
═══════════════════════════════════════════════════════ */
function jqInitNavScroll() {
  const $nav = $('#navbar');
  // En la home la navbar empieza transparente; en otras páginas ya tiene .scrolled
  $(window).on('scroll.navscroll', function () {
    if ($(this).scrollTop() > 20) {
      $nav.addClass('scrolled');
    } else {
      // Solo quitamos scrolled en la home para el efecto de transparencia
      if ($('body').hasClass('page-home')) {
        $nav.removeClass('scrolled');
      }
    }
  });
  // Dispara una vez al cargar para el estado inicial correcto
  $(window).trigger('scroll.navscroll');
}

/* ═══════════════════════════════════════════════════════
   JQUERY 2 — Menú hamburguesa (mobile)
   Usa jQuery slideToggle para animar la apertura
   y cierre del menú móvil al hacer click en las 3 barras.
   También cierra al hacer click en cualquier enlace del menú.
═══════════════════════════════════════════════════════ */
function jqInitMobileMenu() {
  const $burger = $('.nav-hamburger');
  const $menu   = $('.nav-mobile');

  $burger.on('click', function () {
    $(this).toggleClass('open');
    $menu.toggleClass('open');
    const isOpen = $(this).hasClass('open');
    $(this).attr('aria-expanded', isOpen);
  });

  $menu.find('a').on('click', function () {
    $burger.removeClass('open').attr('aria-expanded', false);
    $menu.removeClass('open');
  });
}

/* ═══════════════════════════════════════════════════════
   JQUERY 3 — Panel del carrito (drawer)
   Controla la apertura y cierre del panel lateral del carrito
   mediante jQuery animate y toggleClass.
   También cierra al hacer click en el overlay de fondo.
═══════════════════════════════════════════════════════ */
function jqInitCartDrawer() {
  const $drawer  = $('#cart-drawer');
  const $overlay = $('#cart-overlay');
  const $cartBtn = $('#cart-btn');

  // Función auxiliar para abrir el carrito
  function openCart() {
    $drawer.addClass('open');
    $overlay.addClass('visible');
    $('body').css('overflow', 'hidden'); // evita scroll de fondo
  }

  // Función auxiliar para cerrar el carrito
  function closeCart() {
    $drawer.removeClass('open');
    $overlay.removeClass('visible');
    $('body').css('overflow', '');
  }

  // Abre el drawer al hacer click en el ícono del carrito
  $cartBtn.on('click', function () {
    if ($drawer.hasClass('open')) {
      closeCart();
    } else {
      renderCartItems();
      openCart();
    }
  });

  // Cierra al hacer click en el botón de cerrar dentro del drawer
  $('#cart-close').on('click', closeCart);

  // Cierra al hacer click en el overlay oscuro de fondo
  $overlay.on('click', closeCart);

  // Botón de finalizar pedido por WhatsApp dentro del carrito
  $('#cart-checkout-btn').on('click', function () {
    closeCart();
    checkoutWhatsApp();
  });
}

/* ═══════════════════════════════════════════════════════
   JQUERY 4 — Tooltips en botones de añadir al carrito
   Muestra un tooltip animado "Añadir al carrito" sobre
   los botones .btn-add-cart usando jQuery fadeIn/fadeOut.
   Se anexa al body para evitar recorte por overflow:hidden en .product-card.
═══════════════════════════════════════════════════════ */
function jqInitCartTooltips() {
  if (!window.matchMedia('(hover: hover)').matches) return;

  $(document).on('mouseenter', '.btn-add-cart', function () {
    const $btn = $(this);
    if ($btn.data('tooltip-active')) return;
    $btn.data('tooltip-active', true);

    const $tip = $('<span>')
      .text('Agregar al carrito')
      .css({
        position: 'fixed',
        background: 'var(--on-surface)',
        color: '#fff',
        fontSize: '0.7rem', fontWeight: '600',
        padding: '0.3rem 0.65rem',
        borderRadius: '0.4rem',
        whiteSpace: 'nowrap',
        zIndex: 9999,
        pointerEvents: 'none',
        opacity: 0,
        transition: 'opacity 150ms ease'
      });

    $('body').append($tip);

    // Posicionar encima del botón usando getBoundingClientRect para fixed
    const rect = $btn[0].getBoundingClientRect();
    const tipWidth = $tip.outerWidth();
    const tipHeight = $tip.outerHeight();
    const left = rect.left + (rect.width - tipWidth) / 2;
    const top = rect.top - tipHeight - 8;

    $tip.css({ left: left + 'px', top: top + 'px' });

    // Forzar reflow y animar entrada
    $tip[0].offsetHeight; // trigger reflow
    $tip.css('opacity', 1);

    $btn.one('mouseleave', function () {
      $tip.css('opacity', 0);
      setTimeout(() => {
        $tip.remove();
        $btn.data('tooltip-active', false);
      }, 150);
    });
  });
}

/* ─────────────────────────────────────────────
   ARRANQUE — DOMContentLoaded
   Inicializa todos los módulos al cargar el DOM.
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  // Cargar carrito desde localStorage
  loadCartFromStorage();

  // Módulos vanilla JS
  setActiveNavLink();
  initReveal();
  initWhatsAppFab();
  initContactForm();

  // Catálogo: filtros + render inicial
  const grid = document.getElementById('products-grid');
  if (grid) {
    renderCatalog('all');
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', function () {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        renderCatalog(this.dataset.filter);
      });
    });
  }

  // Página de detalle de producto
  initProductDetail();

  // jQuery — se inicializa cuando jQuery esté listo
  if (typeof $ !== 'undefined') {
    jqInitNavScroll();
    jqInitMobileMenu();
    jqInitCartDrawer();
    jqInitCartTooltips();
    updateCartBadge();
    renderCartItems();
  }
});
