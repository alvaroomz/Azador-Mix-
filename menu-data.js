/* PLANTILLA NFC — EDICIÓN DEL MENÚ
 * Cambia el negocio en restaurant; agrega categorías en categories.
 * Cada dish(id, nombre, precio, opciones) es un producto. El precio es un número en MXN.
 * Para asociar una FOTO REAL: opciones.image = 'images/taco-pastor.webp'
 * y opciones.imageAlt = 'Taco al pastor servido en El Asador Mix'.
 * image:null significa que falta la fotografía específica. La foto de categoría
 * es SOLO una referencia de la carta original y siempre se identifica como tal.
 * No se inventaron ingredientes para productos sin descripción en la fuente.
 */
(() => {
  const dish = (id, name, price, options = {}) => ({
    id, name, price, description: '', image: null, imageAlt: '', ...options
  });
  window.MENU_CONFIG = {
    restaurant: {
      name: 'Taquería El Asador Mix', shortName: 'El Asador', accentName: 'Mix',
      logo: 'images/logo-original.webp', currency: 'MXN', locale: 'es-MX',
      menuNote: 'Precios de la carta compartida. Confirma su vigencia en el local.',
      sourceURL: 'https://es.restaurantguru.com/Taqueria-El-Asador-Mix-Tierra-Blanca/menu'
    },
    promotions: [
      { title: 'Miércoles y domingos · 2 × 1', description: 'Tacos al pastor y de chuleta.', note: 'Promoción anunciada en la carta. Consulta vigencia y condiciones en el local.' },
      { title: 'En la compra de un kilo de arrachera', description: 'Un refresco de 2.0 litros gratis.', note: 'Promoción anunciada en la carta. Consulta vigencia y condiciones en el local.' }
    ],
    categories: [
      {
        id: 'tacos', name: 'Tacos', sourcePage: 2, sourceHeading: 'Tacos',
        referenceImage: 'images/referencia-tacos.webp', referenceAlt: 'Imagen de tacos recortada de la carta original; no identifica cada variante.',
        items: [
          dish('taco-pastor', 'Tacos al pastor', 18),
          dish('taco-chuleta', 'Tacos de chuleta', 18),
          dish('taco-bistec', 'Tacos de bistec', 21),
          dish('suizas', 'Suizas', 55, { sourceNote: 'Precio manuscrito sobre la carta.' }),
          dish('gringas', 'Gringas', 55, { sourceNote: 'Precio manuscrito sobre la carta.' }),
          dish('gringas-bistec', 'Gringas de bistec', 60, { sourceNote: 'Precio manuscrito sobre la carta.' }),
          dish('sincronizadas', 'Sincronizadas', 55),
          dish('quesadillas', 'Quesadillas', 55),
          dish('taco-chuleta-queso', 'Tacos de chuleta con queso', 35),
          dish('taco-bistec-queso', 'Tacos de bistec con queso', 35),
          dish('taco-pastor-queso', 'Tacos de pastor con queso', 35),
          dish('taco-chistorra', 'Tacos de chistorra', 45),
          dish('taco-chistorra-queso', 'Tacos de chistorra con queso', 50),
          dish('taco-sirloin', 'Tacos de sirloin (Shirlon)', 47),
          dish('taco-sirloin-queso', 'Taco de sirloin con queso (Shirlon)', 55),
          dish('taco-arrachera', 'Taco de arrachera', 55, { sourceBlock: 'Columna superior derecha' }),
          dish('taco-arrachera-queso', 'Taco de arrachera con queso', 65, { sourceBlock: 'Columna superior derecha' })
        ]
      },
      {
        id: 'tortas', name: 'Tortas', sourcePage: 2, sourceHeading: 'Tortas',
        referenceImage: 'images/referencia-torta.webp', referenceAlt: 'Imagen de una torta impresa en la carta; no identifica su relleno.',
        items: [
          dish('torta-pastor', 'Torta al pastor', 55),
          dish('torta-bistec', 'Torta de bistec', 60),
          dish('torta-bistec-queso', 'Torta de bistec con queso', 65),
          dish('torta-pastor-queso', 'Torta al pastor con queso', 60),
          dish('torta-sirloin', 'Torta de sirloin (Shirlon)', 65),
          dish('torta-sirloin-queso', 'Torta de sirloin con queso (Shirlon)', 75)
        ]
      },
      {
        id: 'platillos', name: 'Platillos', sourcePage: 2, sourceHeading: 'Platillos',
        note: 'La carta indica: no se hacen medios platillos.',
        referenceImage: 'images/referencia-platillos.webp', referenceAlt: 'Foto general de un platillo en la carta original; no identifica una especialidad.',
        items: [
          dish('alambre-queso', 'Alambre con queso', 165, { description: 'Chuleta, tocino, jamón, morrón, cebolla y queso.' }),
          dish('alambre-hawaiano', 'Alambre hawaiano', 170, { description: 'Chuleta, bistec, pastor, piña, cebolla, morrón, poblano, tocino, jamón y queso.' }),
          dish('alambre-pastor', 'Alambre al pastor', 165, { description: 'Al pastor, tocino, jamón, cebolla, morrón, poblano y queso.' }),
          dish('alambre-mix', 'Alambre Mix', 170),
          dish('fortachon', 'Fortachón', 170, { description: 'Bistec, morrón, poblano, chorizo, champiñones y queso.' }),
          dish('que-me-notas', 'Que me notas', 170, { description: 'Bistec, al pastor, cebolla, piña, morrón, poblano y queso.' }),
          dish('que-me-ves', 'Que me ves', 170, { description: 'Bistec, chorizo y queso.' }),
          dish('super-especial', 'Súper especial', 170, { description: 'Bistec, tocino, cecina y queso.' }),
          dish('queso-hawaiano', 'Orden de queso hawaiano', 160),
          dish('queso-fundido', 'Queso fundido', 160),
          dish('orden-bistec-queso', 'Orden de bistec con queso', 170),
          dish('orden-pastor-queso', 'Orden al pastor con queso', 165),
          dish('orden-pastor', 'Orden de pastor', 160),
          dish('medio-bistec', '½ de bistec sencillo', 210, { sourceNote: 'La carta escribe «½ de bistec sencillo» sin precisar la unidad.' }),
          dish('medio-bistec-queso', '½ de bistec con queso', 250, { sourceNote: 'La carta escribe «½ de bistec con queso» sin precisar la unidad.' }),
          dish('orden-bistec-champinon', 'Orden de bistec, champiñón y queso', 170),
          dish('orden-chuleta-champinon', 'Orden de chuleta, champiñón y queso', 170),
          dish('mexicanisimo', 'Orden de mexicanísimo', 170, { description: 'Bistec, chuleta, tocino, jamón, cebolla, jitomate, chile poblano y queso.' }),
          dish('pastorada', 'Orden de pastorada', 165),
          dish('parrillada-grande', 'Parrillada Mix grande', 450, { description: 'Para 5 personas.' }),
          dish('parrillada-chica', 'Parrillada Mix chica', 350),
          dish('parrillada-especial', 'Parrillada especial', 550),
          dish('kilo-sirloin', '1 kilo de sirloin (Shirlon)', 430),
          dish('medio-sirloin', '½ kilo de sirloin (Shirlon)', 250),
          dish('kilo-sirloin-queso', '1 kilo de sirloin con queso (Shirlon)', 470),
          dish('medio-sirloin-queso', '½ kilo de sirloin con queso (Shirlon)', 270),
          dish('kilo-bistec', '1 kilo de bistec', 335),
          dish('kilo-bistec-queso', '1 kilo de bistec con queso', 400),
          dish('orden-arrachera', 'Orden de arrachera', 220, { sourceBlock: 'Columna superior derecha' }),
          dish('alambre-sirloin', 'Alambre de sirloin (Shirlon)', 210, { sourceBlock: 'Columna superior derecha' }),
          dish('alambre-arrachera', 'Alambre de arrachera', 220, { sourceBlock: 'Columna superior derecha' }),
          dish('cebollines', 'Orden de cebollines', 35, { sourceBlock: 'Debajo de la promoción de arrachera' }),
          dish('nopales', 'Orden de nopales', 35, { sourceBlock: 'Debajo de la promoción de arrachera' })
        ]
      },
      {
        id: 'por-kilo', name: 'Por kilo', sourcePage: 1, sourceHeading: 'Por kilo',
        referenceImage: 'images/referencia-kilo.webp', referenceAlt: 'Foto de carne servida en un plato, recortada de la carta original. La cantidad no está identificada.',
        items: [
          dish('pastor-queso-kilo', 'Al pastor con queso', 370),
          dish('alambre-queso-kilo', 'Alambre con queso', 370),
          dish('pastor-kilo', 'Al pastor', 325),
          dish('pastor-medio', '½ kilo al pastor', 170),
          dish('pastor-queso-medio', '½ kilo al pastor con queso', 230),
          dish('alambre-medio', '½ kilo alambre', 230),
          dish('arrachera-kilo', 'Kilo de arrachera', 500, { sourcePage: 2, sourceBlock: 'Columna superior derecha' }),
          dish('arrachera-queso-kilo', 'Kilo de arrachera con queso', 530, { sourcePage: 2, sourceBlock: 'Columna superior derecha' }),
          dish('arrachera-media', '½ arrachera sencilla', 300, { sourcePage: 2, sourceBlock: 'Columna superior derecha', sourceNote: 'El renglón no explicita la unidad de ½.' }),
          dish('arrachera-queso-media', '½ arrachera con queso', 320, { sourcePage: 2, sourceBlock: 'Columna superior derecha', sourceNote: 'El renglón no explicita la unidad de ½.' })
        ]
      },
      {
        id: 'paquete', name: 'Súper Paquete Mix', shortName: 'Paquete Mix', sourcePage: 1, sourceHeading: 'Super Paquete Mix',
        referenceImage: 'images/referencia-kilo.webp', referenceAlt: 'Foto general de carne en la carta original. No es una fotografía del paquete completo.',
        items: [
          dish('super-paquete-mix', 'Súper Paquete Mix', 550, { description: '1 kilo de carne al pastor con queso, 5 tacos de chuleta, 5 tacos al pastor, 1 orden de cebollines y 1 refresco de 2.5 litros. Para 6 personas.' })
        ]
      },
      {
        id: 'bebidas', name: 'Bebidas', sourcePage: 2, sourceHeading: 'Sin encabezado (agrupación editorial: Bebidas)',
        referenceImage: 'images/referencia-bebidas.webp', referenceAlt: 'Imagen de bebidas de la carta original, sin identificar cada presentación.',
        items: [
          dish('cocacola-600', 'Refresco Coca-Cola de 600', 32, { sourceNote: 'El renglón indica «de 600» sin imprimir la unidad.' }),
          dish('refrescos-varios', 'Refrescos varios', 28),
          dish('refrescos-600', 'Refrescos de 600', 32, { sourceNote: 'El renglón indica «de 600» sin imprimir la unidad.' }),
          dish('refrescos-grandes', 'Refrescos grandes', 60),
          dish('agua-embotellada', 'Agua embotellada', 15),
          dish('jamaica-chica', 'Agua de jamaica chica', 36),
          dish('jamaica-grande', 'Agua de jamaica grande', 46)
        ]
      }
    ]
  };
})();
