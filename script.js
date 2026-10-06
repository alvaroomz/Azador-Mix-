/* Motor reutilizable. El contenido y las fotos se editan en menu-data.js. */
(() => {
  'use strict';
  const config = window.MENU_CONFIG;
  if (!config?.categories?.length) return;
  const $ = id => document.getElementById(id);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const narrowScreen = window.matchMedia('(max-width: 379px)');
  const needsStack = () => narrowScreen.matches || (window.innerWidth < 800 && parseFloat(getComputedStyle(document.documentElement).fontSize) > 20);
  let stackedLayout = false;
  const formatPrice = value => new Intl.NumberFormat(config.restaurant.locale, {
    style: 'currency', currency: config.restaurant.currency, minimumFractionDigits: 2
  }).format(value);
  const products = config.categories.flatMap(category => category.items.map(item => ({ ...item, category })));
  let activeIndex = -1, imageVersion = 0, imageTimer, scrollFrame = 0, observer;
  let eligibleCards = new Set(), cards = [], navLinks = [];
  const imageCache = new Map();
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  // No se usa innerHTML para insertar nombres, descripciones ni precios editables.
  const restaurant = config.restaurant;
  document.title = `Menú · ${restaurant.name}`;
  document.querySelector('meta[name="description"]').content = `Consulta la carta de ${restaurant.name}.`;
  const brand = $('brand-name');
  brand.replaceChildren(document.createTextNode(`${restaurant.shortName} `), el('em', '', restaurant.accentName));
  document.querySelector('.wordmark').setAttribute('aria-label', `${restaurant.name}, inicio`);
  $('currency-label').textContent = `Precios en ${restaurant.currency}`;
  $('menu-note').textContent = restaurant.menuNote;
  $('footer-name').textContent = restaurant.name;
  $('restaurant-logo').src = restaurant.logo;
  $('restaurant-logo').alt = `Logotipo de ${restaurant.name}`;
  $('restaurant-logo').hidden = !restaurant.logo;
  $('restaurant-logo').addEventListener('error', () => { $('restaurant-logo').hidden = true; });
  document.querySelector('.site-footer span').textContent = `Precios de la carta compartida · ${restaurant.currency}`;
  $('source-link').href = restaurant.sourceURL;

  let index = 0;
  config.categories.forEach((category, categoryIndex) => {
    const link = el('a', 'category-link', category.shortName || category.name);
    link.href = `#${category.id}`;
    link.dataset.category = category.id;
    $('category-nav').append(link);
    navLinks.push(link);
    const section = el('section', 'menu-section');
    section.id = category.id;
    section.setAttribute('aria-labelledby', `heading-${category.id}`);
    const heading = el('div', 'section-heading');
    heading.append(el('span', 'eyebrow', `LA CARTA / ${String(categoryIndex + 1).padStart(2, '0')}`));
    const top = el('div', 'section-topline');
    const title = el('h2', '', category.name);
    title.id = `heading-${category.id}`;
    top.append(title, el('span', 'category-count', `${category.items.length} ${category.items.length === 1 ? 'opción' : 'opciones'}`));
    heading.append(top); section.append(heading);
    if (category.note) section.append(el('p', 'section-note', category.note));
    category.items.forEach(item => {
      const card = el('article', 'product-card');
      card.id = `producto-${item.id}`;
      card.dataset.index = index;
      const name = el('h3', '', item.name);
      name.id = `nombre-${item.id}`;
      card.setAttribute('aria-labelledby', name.id);
      card.append(el('span', 'product-number', String(index + 1).padStart(2, '0')), name);
      if (item.description) card.append(el('p', 'product-description', item.description));
      card.append(el('p', 'product-price', formatPrice(item.price)));
      section.append(card); cards.push(card); index++;
    });
    $('menu').append(section);
  });
  config.promotions.forEach(promotion => {
    const card = el('article', 'promotion');
    card.append(el('h3', '', promotion.title), el('p', '', promotion.description), el('small', '', promotion.note));
    $('promotions-list').append(card);
  });

  // Precarga únicamente la imagen activa y la siguiente; nunca todo el catálogo.
  const preload = src => {
    if (!src) return Promise.resolve(false);
    if (imageCache.has(src)) return imageCache.get(src);
    const promise = new Promise(resolve => {
      const image = new Image();
      image.onload = () => resolve(true);
      image.onerror = () => resolve(false);
      image.src = src;
    });
    imageCache.set(src, promise);
    return promise;
  };
  const updatePicture = async (product, token) => {
    let src = product.image || product.category.referenceImage;
    let exactPhoto = Boolean(product.image);
    let loaded = await preload(src);
    if (!loaded && exactPhoto && product.category.referenceImage) {
      src = product.category.referenceImage;
      exactPhoto = false;
      loaded = await preload(src);
    }
    if (token !== imageVersion) return; // Una carga lenta no puede sustituir al producto nuevo.
    const image = $('product-image');
    image.hidden = !loaded;
    $('image-empty').hidden = loaded;
    $('image-label').hidden = !loaded;
    if (loaded) {
      image.src = src;
      image.alt = exactPhoto ? (product.imageAlt || product.name) : product.category.referenceAlt;
    } else {
      image.removeAttribute('src');
      image.alt = '';
    }
    $('image-label').textContent = exactPhoto ? product.name : 'Imagen de la carta · referencia';
    $('photo-note').textContent = exactPhoto ? 'Fotografía del producto.' : 'Fotografía específica pendiente.';
    $('visual-content').classList.remove('is-changing');
    const next = products[activeIndex + 1];
    if (next) preload(next.image || next.category.referenceImage);
  };
  const activate = index => {
    if (index < 0 || index >= products.length || index === activeIndex) return;
    const product = products[index];
    if (activeIndex >= 0) cards[activeIndex].classList.remove('is-active');
    activeIndex = index;
    cards[index].classList.add('is-active');
    $('visual-panel').dataset.product = product.id;
    $('visual-category').textContent = product.category.name;
    $('visual-counter').textContent = `${String(index + 1).padStart(2, '0')} / ${products.length}`;
    $('visual-name').textContent = product.name;
    $('visual-price').textContent = formatPrice(product.price);
    $('previous-product').disabled = index === 0;
    $('next-product').disabled = index === products.length - 1;
    $('category-progress').style.transform = `scaleX(${(index + 1) / products.length})`;
    navLinks.forEach(link => {
      const current = link.dataset.category === product.category.id;
      if (current) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current');
    });
    // Ajusta solo el desplazamiento horizontal de categorías; no mueve la página.
    const currentLink = navLinks.find(link => link.hasAttribute('aria-current'));
    const nav = $('category-nav');
    const box = currentLink.getBoundingClientRect(), bounds = nav.getBoundingClientRect();
    if (box.left < bounds.left || box.right > bounds.right) {
      nav.scrollTo({ left: currentLink.offsetLeft - nav.offsetLeft - 18, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    }
    const token = ++imageVersion;
    clearTimeout(imageTimer);
    if (!reducedMotion.matches) $('visual-content').classList.add('is-changing');
    imageTimer = setTimeout(() => updatePicture(product, token), reducedMotion.matches ? 0 : 110);
  };

  const inspector = document.querySelector('.visual-column');
  const menu = $('menu');
  const layout = document.querySelector('.menu-layout');
  const updateLayout = () => {
    stackedLayout = needsStack();
    document.body.classList.toggle('is-stacked', stackedLayout);
    // En 320–379px el inspector debe preceder a la lista para permanecer visible.
    if (stackedLayout) layout.insertBefore(inspector, menu);
    else layout.append(inspector);
    const height = document.querySelector('.category-bar').getBoundingClientRect().height;
    document.documentElement.style.setProperty('--nav-height', `${Math.ceil(height)}px`);
    document.documentElement.style.setProperty('--inspector-height', stackedLayout ? `${Math.ceil(inspector.getBoundingClientRect().height)}px` : '0px');
    installObserver();
    scheduleScroll();
  };
  // Observer limita candidatos visibles. Un único RAF compara los visibles al
  // deslizar: evita recorrer las 74 tarjetas en cada evento y mejora la precisión.
  const installObserver = () => {
    observer?.disconnect(); eligibleCards.clear();
    if (!('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting ? eligibleCards.add(entry.target) : eligibleCards.delete(entry.target));
      scheduleScroll();
    }, { rootMargin: '0px', threshold: [0, .1, .5, 1] });
    cards.forEach(card => observer.observe(card));
  };
  const detectActive = () => {
    scrollFrame = 0;
    const navBottom = document.querySelector('.category-bar').getBoundingClientRect().bottom;
    const stickyBottom = stackedLayout ? inspector.getBoundingClientRect().bottom : navBottom;
    const available = window.innerHeight - Math.max(navBottom, stickyBottom);
    const target = Math.max(navBottom, stickyBottom) + Math.min(130, available * .25);
    const candidates = eligibleCards.size ? [...eligibleCards] : cards;
    let best = activeIndex >= 0 ? activeIndex : 0, distance = Infinity;
    candidates.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.bottom < navBottom || rect.top > window.innerHeight) return;
      // La tarjeta que contiene la línea de lectura gana; en un hueco, la más cercana.
      const d = rect.top <= target && rect.bottom >= target ? 0 : Math.min(Math.abs(rect.top - target), Math.abs(rect.bottom - target));
      if (d < distance) { distance = d; best = Number(card.dataset.index); }
    });
    activate(best);
  };
  function scheduleScroll() { if (!scrollFrame) scrollFrame = requestAnimationFrame(detectActive); }
  const goTo = index => {
    if (!cards[index]) return;
    cards[index].scrollIntoView({ block: 'start', behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  };
  $('previous-product').addEventListener('click', () => goTo(activeIndex - 1));
  $('next-product').addEventListener('click', () => goTo(activeIndex + 1));
  navLinks.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const category = link.dataset.category;
    const i = products.findIndex(product => product.category.id === category);
    // El encabezado queda a la vista. El observer selecciona el producto al llegar.
    document.getElementById(category).scrollIntoView({ block: 'start', behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    history.replaceState(null, '', `#${category}`);
    if (reducedMotion.matches) activate(i);
  }));
  window.addEventListener('scroll', scheduleScroll, { passive: true });
  window.addEventListener('resize', updateLayout, { passive: true });
  narrowScreen.addEventListener('change', updateLayout);
  // Captura cambios de altura por texto largo, zoom o personalización del menú.
  if ('ResizeObserver' in window) {
    const sizeObserver = new ResizeObserver(() => {
      if (needsStack() !== stackedLayout) updateLayout();
      if (stackedLayout) document.documentElement.style.setProperty('--inspector-height', `${Math.ceil(inspector.getBoundingClientRect().height)}px`);
    });
    sizeObserver.observe(inspector);
  }

  const dialog = $('source-dialog');
  let savedScroll = 0;
  document.querySelectorAll('.source-trigger').forEach(button => button.addEventListener('click', () => {
    savedScroll = window.scrollY;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  }));
  $('close-source').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
    window.scrollTo({ top: savedScroll, behavior: 'instant' });
  });
  activate(0); updateLayout();
  if (window.location.hash) requestAnimationFrame(() => {
    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    if (target) target.scrollIntoView({ block: 'start', behavior: 'instant' });
  });
})();
