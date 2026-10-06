/*
 * EL ASADOR MIX · DATOS EDITABLES
 * Fuente de productos y precios: assets/source/menu-original.pdf (2 páginas).
 * price: pesos MXN. image: ruta RELATIVA o cadena vacía si no hay fotografía.
 * imageKind: 'restaurant' para una imagen verificada; 'illustrative' para una
 * imagen ilustrativa (se etiqueta automáticamente). Nunca inventar ingredientes.
 * Los id deben ser únicos y estables. Ver README.md para editar y publicar.
 */
'use strict';

const MENU = [
  {
    id: 'tacos', name: 'Tacos', navName: 'Tacos', sourcePage: 2,
    notes: ['Miércoles y domingos: 2 × 1 en tacos al pastor y de chuleta.'],
    products: [
      { id: 'tacos-pastor', name: 'Tacos al pastor', price: 18,
        image: './assets/images/tacos-al-pastor.webp', imageKind: 'restaurant',
        imageNote: 'Imagen promocional de la carta publicada.',
        imageAlt: 'Taco al pastor en el anuncio de Taquería El Asador Mix.' },
      { id: 'tacos-chuleta', name: 'Tacos de chuleta', price: 18 },
      { id: 'tacos-bistec', name: 'Tacos de bistec', price: 21 },
      { id: 'suizos', name: 'Suizos', price: 55 },
      { id: 'gringas', name: 'Gringas', price: 55 },
      { id: 'gringas-bistec', name: 'Gringas de bistec', price: 60 },
      { id: 'sincronizadas', name: 'Sincronizadas', price: 55 },
      { id: 'quesadillas', name: 'Quesadillas', price: 55 },
      { id: 'tacos-chuleta-queso', name: 'Tacos de chuleta con queso', price: 35 },
      { id: 'tacos-bistec-queso', name: 'Tacos de bistec con queso', price: 35 },
      { id: 'tacos-pastor-queso', name: 'Tacos de pastor con queso', price: 35 },
      { id: 'tacos-chistorra', name: 'Tacos de chistorra', price: 45 },
      { id: 'tacos-chistorra-queso', name: 'Tacos de chistorra con queso', price: 50 },
      { id: 'tacos-sirloin', name: 'Tacos de sirloin (Shirlon)', price: 47 },
      { id: 'taco-sirloin-queso', name: 'Taco de sirloin con queso (Shirlon)', price: 55 },
      { id: 'taco-arrachera', name: 'Taco de arrachera', price: 55 },
      { id: 'taco-arrachera-queso', name: 'Taco de arrachera con queso', price: 65 },
      { id: 'kilo-arrachera', name: 'Kilo de arrachera', price: 500 },
      { id: 'kilo-arrachera-queso', name: 'Kilo de arrachera con queso', price: 530 },
      { id: 'orden-arrachera', name: 'Orden de arrachera', price: 220 },
      { id: 'media-arrachera', name: '½ arrachera sencilla', price: 300 },
      { id: 'media-arrachera-queso', name: '½ arrachera con queso', price: 320 },
      { id: 'alambre-sirloin', name: 'Alambre de sirloin (Shirlon)', price: 210 },
      { id: 'alambre-arrachera', name: 'Alambre de arrachera', price: 220,
        noteAfter: 'En la compra de un kilo de arrachera, un refresco de 2.5 L gratis.' },
      { id: 'cebollines', name: 'Orden de cebollines', price: 35 },
      { id: 'nopales', name: 'Orden de nopales', price: 35 }
    ]
  },
  {
    id: 'tortas', name: 'Tortas', sourcePage: 2,
    products: [
      { id: 'torta-pastor', name: 'Torta al pastor', price: 55 },
      { id: 'torta-bistec', name: 'Torta de bistec', price: 60 },
      { id: 'torta-bistec-queso', name: 'Torta de bistec con queso', price: 65 },
      { id: 'torta-pastor-queso', name: 'Torta al pastor con queso', price: 60 },
      { id: 'torta-sirloin', name: 'Torta de sirloin (Shirlon)', price: 65 },
      { id: 'torta-sirloin-queso', name: 'Torta de sirloin con queso (Shirlon)', price: 75 }
    ]
  },
  {
    id: 'platillos', name: 'Platillos', sourcePage: 2,
    footnote: 'No se hacen medios platillos.',
    products: [
      { id: 'alambre-queso', name: 'Alambre con queso', price: 165,
        description: 'Chuleta, tocino, jamón, morrón, cebolla y queso.' },
      { id: 'alambre-hawaiano', name: 'Alambre hawaiano', price: 170,
        description: 'Chuleta, bistec, pastor, piña, cebolla, morrón, poblano, tocino, jamón y queso.' },
      { id: 'alambre-pastor', name: 'Alambre al pastor', price: 165,
        description: 'Al pastor, tocino, jamón, cebolla, morrón, poblano y queso.' },
      { id: 'alambre-mix', name: 'Alambre Mix', price: 170 },
      { id: 'fortachon', name: 'Fortachón', price: 170,
        description: 'Bistec, morrón, poblano, chorizo, champiñones y queso.' },
      { id: 'que-me-notas', name: 'Que me notas', price: 170,
        description: 'Bistec, al pastor, cebolla, piña, morrón, poblano y queso.' },
      { id: 'que-me-ves', name: 'Que me ves', price: 170,
        description: 'Bistec, chorizo y queso.' },
      { id: 'super-especial', name: 'Super especial', price: 170,
        description: 'Bistec, tocino, cebolla y queso.' },
      { id: 'orden-pastor', name: 'Orden de pastor', price: 160 },
      { id: 'medio-bistec', name: '½ de bistec sencillo', price: 210 },
      { id: 'medio-bistec-queso', name: '½ de bistec con queso', price: 250 },
      { id: 'orden-bistec-champinon', name: 'Orden de bistec, champiñón y queso', price: 170 },
      { id: 'orden-chuleta-champinon', name: 'Orden de chuleta, champiñón y queso', price: 170 },
      { id: 'mexicanisimo', name: 'Orden de mexicanísimo', price: 170,
        description: 'Bistec, chuleta, tocino, jamón, cebolla, jitomate, chile poblano y queso.' },
      { id: 'pastorada', name: 'Orden de pastorada', price: 165 },
      { id: 'parrillada-mix-grande', name: 'Parrillada Mix grande (5 personas)', price: 450 },
      { id: 'parrillada-mix-chica', name: 'Parrillada Mix chica', price: 350 },
      { id: 'parrillada-especial', name: 'Parrillada especial', price: 550 },
      { id: 'kilo-sirloin', name: '1 kilo de sirloin (Shirlon)', price: 430 },
      { id: 'medio-kilo-sirloin', name: '½ kilo de sirloin (Shirlon)', price: 250 },
      { id: 'kilo-sirloin-queso', name: '1 kilo de sirloin con queso (Shirlon)', price: 470 },
      { id: 'medio-kilo-sirloin-queso', name: '½ kilo de sirloin con queso (Shirlon)', price: 270 },
      { id: 'kilo-bistec', name: '1 kilo de bistec', price: 335 },
      { id: 'kilo-bistec-queso', name: '1 kilo de bistec con queso', price: 400 },
      { id: 'queso-hawaiano', name: 'Orden de queso hawaiano', price: 160 },
      { id: 'queso-fundido', name: 'Queso fundido', price: 160 },
      { id: 'orden-bistec-queso', name: 'Orden de bistec con queso', price: 170 },
      { id: 'orden-pastor-queso', name: 'Orden al pastor con queso', price: 165 }
    ]
  },
  {
    id: 'por-kilo', name: 'Por kilo', sourcePage: 1,
    products: [
      { id: 'pastor-kilo-queso', name: 'Al pastor con queso', price: 370 },
      { id: 'alambre-kilo-queso', name: 'Alambre con queso', price: 370 },
      { id: 'pastor-kilo', name: 'Al pastor', price: 325 },
      { id: 'pastor-medio-kilo', name: '½ kilo al pastor', price: 170 },
      { id: 'pastor-medio-kilo-queso', name: '½ kilo al pastor con queso', price: 230 },
      { id: 'alambre-medio-kilo', name: '½ kilo alambre', price: 230 }
    ]
  },
  {
    id: 'paquete-mix', name: 'Super paquete Mix', navName: 'Paquete Mix', sourcePage: 1,
    products: [
      { id: 'super-paquete-mix', name: 'Super paquete Mix', price: 550,
        description: 'Para 6 personas: 1 kilo de carne al pastor con queso, 5 tacos de chuleta, 5 tacos al pastor, 1 orden de cebollines y 1 refresco de 2.5 L.' }
    ]
  },
  {
    // Bloque de refrescos y aguas de la página 2, sin encabezado en el original.
    id: 'bebidas', name: 'Bebidas', sourcePage: 2,
    products: [
      { id: 'coca-cola-600', name: 'Refresco Coca-Cola de 600', price: 32 },
      { id: 'refrescos-variedad', name: 'Refrescos variedad', price: 28 },
      { id: 'refrescos-600', name: 'Refrescos de 600', price: 32 },
      { id: 'refresco-grande', name: 'Refresco grande', price: 60 },
      { id: 'agua-embotellada', name: 'Agua embotellada', price: 15 },
      { id: 'jamaica-chica', name: 'Agua de jamaica chica', price: 30 },
      { id: 'jamaica-grande', name: 'Agua de jamaica grande', price: 45 }
    ]
  }
];

/* IMPLEMENTACIÓN: no necesitas modificar lo que sigue para editar la carta. */
const currency = new Intl.NumberFormat('es-MX', {
  style: 'currency', currency: 'MXN', minimumFractionDigits: 0, maximumFractionDigits: 2
});
const money = (value) => currency.format(value);
const normalized = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
const cameraSVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 4h-5L7.8 7H3v13h18V7h-4.8Z"/><circle cx="12" cy="13" r="3.5"/></svg>';
const searchSVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>';
const promotionSVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11V4h7l11 11-7 7Z"/><circle cx="7.5" cy="8.5" r="1"/></svg>';
const allProducts = MENU.flatMap((category, categoryIndex) => category.products.map((product) => ({
  ...product, categoryId: category.id, categoryName: category.name, categoryIndex
})));
const byId = new Map(allProducts.map((product, index) => [product.id, { ...product, index }]));
const ui = {
  navigation: document.getElementById('navigation'), nav: document.getElementById('category-nav'),
  search: document.getElementById('menu-search'), clear: document.getElementById('search-clear'),
  sections: document.getElementById('menu-sections'), status: document.getElementById('results-status'),
  empty: document.getElementById('empty-state'), emptyQuery: document.getElementById('empty-query'),
  panel: document.getElementById('preview-panel'), media: document.getElementById('preview-media'),
  name: document.getElementById('preview-name'), price: document.getElementById('preview-price'),
  category: document.getElementById('preview-category'), counter: document.getElementById('preview-counter'),
  description: document.getElementById('preview-description'), note: document.getElementById('image-note'),
  progress: document.getElementById('preview-progress-fill'), top: document.getElementById('back-to-top'),
  announcement: document.getElementById('selection-announcement')
};
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const mobile = window.matchMedia('(max-width: 760px)');
const state = { activeId: null, rows: [], imageRequest: 0, pinnedAt: null, scheduled: false, navigating: false };
let revealObserver;
let searchTimer;
let navigationTimer;

function el(tag, className, content) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content !== undefined) element.textContent = content;
  return element;
}

function updateMeasurements() {
  const navHeight = ui.navigation.offsetHeight;
  const stickyImage = mobile.matches ? ui.panel.offsetHeight : 0;
  document.documentElement.style.setProperty('--navigation-height', `${navHeight}px`);
  document.documentElement.style.setProperty('--reading-top', `${navHeight + stickyImage + 20}px`);
}

function setCategory(categoryId) {
  let current;
  ui.nav.querySelectorAll('.category-link').forEach((link) => {
    if (link.dataset.category === categoryId) { link.setAttribute('aria-current', 'location'); current = link; }
    else link.removeAttribute('aria-current');
  });
  if (!current) return;
  const parent = ui.nav.getBoundingClientRect();
  const bounds = current.getBoundingClientRect();
  // Only move the category strip; scrollIntoView would also move the page.
  if (bounds.left < parent.left) ui.nav.scrollBy({ left: bounds.left - parent.left - 8, behavior: 'auto' });
  else if (bounds.right > parent.right) ui.nav.scrollBy({ left: bounds.right - parent.right + 8, behavior: 'auto' });
}

function placeholder(product, label) {
  const wrapper = el('div', 'placeholder');
  wrapper.dataset.productId = product?.id || '';
  const icon = el('span', 'placeholder-icon');
  icon.innerHTML = product ? cameraSVG : searchSVG;
  const text = el('div', 'placeholder-text');
  text.append(el('span', 'placeholder-category', product ? product.categoryName : 'SIN RESULTADOS'));
  text.append(el('span', 'placeholder-label', label));
  wrapper.append(icon, text);
  return wrapper;
}

function renderPreview(product) {
  const request = ++state.imageRequest;
  // Replace photo and metadata together: a previous dish never stays under a new name.
  ui.media.replaceChildren(placeholder(product, product?.image ? 'Cargando fotografía…' : product ? 'Fotografía pendiente' : 'Prueba con otro nombre'));
  ui.media.dataset.productId = product?.id || '';
  ui.panel.dataset.productId = product?.id || '';
  ui.name.textContent = product?.name || 'Busca tu próximo antojo';
  ui.price.textContent = product ? money(product.price) : '';
  ui.category.textContent = product?.categoryName || 'Menú';
  ui.counter.textContent = product ? `${String(product.index + 1).padStart(2, '0')} / ${allProducts.length}` : '';
  ui.description.textContent = product?.description || '';
  ui.description.hidden = !product?.description;
  ui.note.textContent = product ? (product.image ? (product.imageKind === 'illustrative' ? 'Imagen ilustrativa; no es una fotografía del restaurante.' : product.imageNote || 'Fotografía del producto.') : 'Este producto aún no tiene una fotografía individual.') : '';
  ui.progress.style.width = product ? `${((product.index + 1) / allProducts.length) * 100}%` : '0%';
  if (!product?.image) { updateMeasurements(); return; }

  const image = new Image();
  image.className = 'preview-photo';
  image.alt = product.imageAlt || (product.imageKind === 'illustrative' ? `Imagen ilustrativa de ${product.name}.` : product.name);
  image.dataset.productId = product.id;
  image.decoding = 'async';
  image.width = 670;
  image.height = 348;
  image.onload = () => {
    if (request !== state.imageRequest || state.activeId !== product.id) return;
    const badge = el('span', 'media-badge', product.imageKind === 'illustrative' ? 'IMAGEN ILUSTRATIVA' : 'DE LA CARTA');
    ui.media.replaceChildren(image, badge);
  };
  image.onerror = () => {
    if (request !== state.imageRequest || state.activeId !== product.id) return;
    ui.media.replaceChildren(placeholder(product, 'Fotografía pendiente'));
    ui.note.textContent = 'Este producto aún no tiene una fotografía disponible.';
  };
  image.src = product.image;
  updateMeasurements();
}

function setActive(productId, { manual = false, announce = false } = {}) {
  if (!byId.has(productId)) return;
  if (manual) state.pinnedAt = window.scrollY;
  if (productId !== state.activeId) {
    const previous = state.rows.find((row) => row.dataset.product === state.activeId);
    if (previous) previous.setAttribute('aria-pressed', 'false');
    state.activeId = productId;
    const product = byId.get(productId);
    const row = state.rows.find((candidate) => candidate.dataset.product === productId);
    if (row) row.setAttribute('aria-pressed', 'true');
    setCategory(product.categoryId);
    renderPreview(product);
  }
  if (announce) {
    const product = byId.get(productId);
    ui.announcement.textContent = `${product.name}, ${money(product.price)}. ${product.image ? '' : 'Fotografía pendiente.'}`;
  }
}

function revealRows() {
  if (revealObserver) revealObserver.disconnect();
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-arriving');
      entry.target.addEventListener('animationend', () => entry.target.classList.remove('is-arriving'), { once: true });
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -15px 0px', threshold: 0.12 });
  state.rows.forEach((row) => revealObserver.observe(row));
}

function renderMenu(query = '') {
  const search = normalized(query);
  const groups = MENU.map((category) => ({
    ...category, products: category.products.filter((product) => normalized(product.name).includes(search))
  }));
  const count = groups.reduce((total, category) => total + category.products.length, 0);
  const content = document.createDocumentFragment();
  const nav = document.createDocumentFragment();
  groups.forEach((category, index) => {
    const link = el('a', 'category-link');
    link.href = `#categoria-${category.id}`;
    link.dataset.category = category.id;
    link.append(el('span', '', category.navName || category.name), el('span', 'category-count', String(category.products.length)));
    if (!category.products.length) { link.setAttribute('aria-disabled', 'true'); link.tabIndex = -1; }
    nav.append(link);
    if (!category.products.length) return;
    const section = el('section', 'menu-section');
    section.id = `categoria-${category.id}`;
    section.dataset.category = category.id;
    const heading = el('div', 'section-heading');
    const title = el('h2', '', category.name);
    title.id = `titulo-${category.id}`;
    section.setAttribute('aria-labelledby', title.id);
    heading.append(el('span', 'section-number', String(index + 1).padStart(2, '0')), title,
      el('span', 'section-count', `${category.products.length} ${category.products.length === 1 ? 'opción' : 'opciones'}`));
    section.append(heading);
    if (!search) (category.notes || []).forEach((note) => {
      const box = el('p', 'category-note');
      const icon = el('span'); icon.innerHTML = promotionSVG;
      box.append(icon, el('span', '', note)); section.append(box);
    });
    category.products.forEach((product) => {
      const button = el('button', 'product');
      button.type = 'button';
      button.id = `producto-${product.id}`;
      button.dataset.product = product.id;
      button.setAttribute('aria-pressed', 'false');
      button.setAttribute('aria-controls', 'preview-card');
      button.setAttribute('aria-label', `${product.name}, ${money(product.price)}. Ver producto.`);
      const line = el('span', 'product-line');
      line.append(el('span', 'product-name', product.name), el('span', 'product-price', money(product.price)));
      button.append(line);
      if (product.description) button.append(el('span', 'product-description', product.description));
      const selected = el('span', 'product-meta');
      selected.setAttribute('aria-hidden', 'true');
      selected.innerHTML = cameraSVG;
      selected.append(el('span', '', 'Viendo este producto'));
      button.append(selected);
      section.append(button);
      if (!search && product.noteAfter) {
        const box = el('p', 'category-note');
        const icon = el('span'); icon.innerHTML = promotionSVG;
        box.append(icon, el('span', '', product.noteAfter));
        section.append(box);
      }
    });
    if (category.footnote) section.append(el('p', 'category-footnote', category.footnote));
    content.append(section);
  });
  ui.sections.replaceChildren(content);
  ui.nav.replaceChildren(nav);
  state.rows = Array.from(ui.sections.querySelectorAll('.product'));
  ui.clear.hidden = !query;
  ui.empty.hidden = count > 0;
  ui.emptyQuery.textContent = `No hay coincidencias para “${query}”. Intenta otro nombre o borra la búsqueda.`;
  ui.status.textContent = search ? `${count} ${count === 1 ? 'resultado' : 'resultados'} para “${query}”` : 'Elige un producto y descubre su precio.';
  if (count) {
    const retained = state.rows.find((row) => row.dataset.product === state.activeId);
    if (retained) { retained.setAttribute('aria-pressed', 'true'); setCategory(byId.get(state.activeId).categoryId); }
    else setActive(state.rows[0].dataset.product, { manual: true });
  } else {
    state.activeId = null;
    state.pinnedAt = null;
    renderPreview(null);
  }
  revealRows();
  updateMeasurements();
  // Search should reveal its first result, even when entered far down the page.
  if (search) {
    state.navigating = true;
    // Wait for the shorter results list to settle before positioning it.
    requestAnimationFrame(() => {
      const top = ui.sections.getBoundingClientRect().top + window.scrollY - readingOffset();
      window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
      requestAnimationFrame(() => { state.navigating = false; state.pinnedAt = window.scrollY; });
    });
  }
}

function readingOffset() {
  return ui.navigation.offsetHeight + (mobile.matches ? ui.panel.offsetHeight : 0) + 20;
}

function updateFromScroll() {
  state.scheduled = false;
  ui.top.hidden = window.scrollY < 420;
  if (state.navigating || !state.rows.length) return;
  if (state.pinnedAt !== null) {
    if (Math.abs(window.scrollY - state.pinnedAt) < 5) return;
    state.pinnedAt = null;
  }
  const top = readingOffset();
  const line = top + Math.min(100, Math.max(30, (window.innerHeight - top) * 0.2));
  let nearest;
  let distance = Infinity;
  for (const row of state.rows) {
    const rect = row.getBoundingClientRect();
    if (rect.bottom <= top || rect.top >= window.innerHeight) continue;
    const score = Math.abs((rect.top + rect.bottom) / 2 - line);
    if (score < distance) { distance = score; nearest = row; }
  }
  if (nearest) setActive(nearest.dataset.product);
}

function scheduleScroll() {
  if (state.scheduled) return;
  state.scheduled = true;
  requestAnimationFrame(updateFromScroll);
}

function navigateCategory(categoryId) {
  const section = document.getElementById(`categoria-${categoryId}`);
  if (!section) return;
  const first = section.querySelector('.product');
  state.navigating = true;
  setActive(first.dataset.product, { manual: true, announce: true });
  const top = section.getBoundingClientRect().top + window.scrollY - readingOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  clearTimeout(navigationTimer);
  navigationTimer = setTimeout(() => { state.navigating = false; state.pinnedAt = window.scrollY; }, reducedMotion.matches ? 60 : 850);
}

function resetSearch() {
  clearTimeout(searchTimer);
  ui.search.value = '';
  renderMenu();
  ui.search.focus({ preventScroll: true });
  navigateCategory(MENU[0].id);
}

ui.sections.addEventListener('click', (event) => {
  const button = event.target.closest('.product');
  if (button) setActive(button.dataset.product, { manual: true, announce: true });
});
ui.nav.addEventListener('click', (event) => {
  const link = event.target.closest('.category-link');
  if (!link) return;
  event.preventDefault();
  if (link.getAttribute('aria-disabled') !== 'true') navigateCategory(link.dataset.category);
});
ui.search.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => renderMenu(ui.search.value.trim()), 120);
});
document.getElementById('search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  clearTimeout(searchTimer);
  renderMenu(ui.search.value.trim());
  ui.search.blur();
});
ui.clear.addEventListener('click', resetSearch);
document.getElementById('reset-search').addEventListener('click', resetSearch);
ui.top.addEventListener('click', () => {
  state.navigating = true;
  clearTimeout(navigationTimer);
  if (state.rows.length) setActive(state.rows[0].dataset.product, { manual: true });
  window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  navigationTimer = setTimeout(() => { state.navigating = false; state.pinnedAt = window.scrollY; ui.top.hidden = true; }, reducedMotion.matches ? 60 : 850);
});
window.addEventListener('scroll', scheduleScroll, { passive: true });
window.addEventListener('resize', () => { updateMeasurements(); scheduleScroll(); });
// Interrupt a category's smooth navigation as soon as the visitor starts scrolling.
['wheel', 'touchmove'].forEach((name) => window.addEventListener(name, () => {
  state.navigating = false;
  clearTimeout(navigationTimer);
}, { passive: true }));
window.addEventListener('keydown', (event) => {
  if (!['PageDown', 'PageUp', 'Home', 'End', 'ArrowDown', 'ArrowUp', ' '].includes(event.key) || event.target === ui.search) return;
  state.navigating = false;
  clearTimeout(navigationTimer);
});
if ('ResizeObserver' in window) {
  const observer = new ResizeObserver(updateMeasurements);
  observer.observe(ui.navigation);
  observer.observe(ui.panel);
}
document.getElementById('menu-total').textContent = `${allProducts.length} productos · ${MENU.length} categorías`;
renderMenu();
