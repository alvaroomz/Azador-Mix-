# Taquería El Asador Mix · Menú digital NFC

Proyecto estático en HTML, CSS y JavaScript. No necesita npm, servidor de aplicaciones, API, cuenta de pago ni compilación. Todas las rutas de imágenes y scripts son relativas, compatibles con un repositorio de GitHub Pages.

## Abrir el menú

1. Descomprime el ZIP completo.
2. Abre `asador-mix/index.html` en Chrome, Edge, Safari o Firefox actualizado.
3. Desliza por los productos o pulsa una categoría. El panel visual sigue al producto activo.

También puedes servir la carpeta con `python -m http.server 8000` y entrar a `http://localhost:8000`. Esto es opcional; el menú funciona al abrir el HTML directamente.

## Publicar en GitHub Pages

1. Abre tu repositorio y pulsa **Add file → Upload files**.
2. Sube el CONTENIDO de la carpeta `asador-mix`: `index.html` debe quedar en la raíz del repositorio, acompañado por los demás archivos y las carpetas `images` y `docs`. No subas únicamente el ZIP.
3. Confirma con **Commit changes**.
4. En **Settings → Pages → Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta **/(root)**; pulsa **Save**.
6. Espera a que GitHub muestre la dirección del sitio. Abre esa dirección y revisa que puedas ver las imágenes y navegar por todas las categorías.
7. Escribe esa URL HTTPS como registro **URL/URI** de la tarjeta NFC. La tarjeta almacena la dirección, no los archivos de la web. Reutilizar la misma URL permite actualizar precios sin volver a programar las tarjetas.

Guía oficial: https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

La configuración de GitHub Pages y la programación de una tarjeta física se realizan en tu repositorio y con un teléfono compatible. Esta entrega contiene el proyecto preparado para esos pasos; no incluye una URL ya publicada.

## Estructura

| Archivo | Qué cambiar |
| --- | --- |
| `index.html` | Estructura y metadatos iniciales; textos generales y carta original |
| `styles.css` | Colores y fuentes en `:root`; estilos y puntos de adaptación |
| `script.js` | Motor de navegación, scroll y carga de imágenes |
| `menu-data.js` | Nombre, logo, moneda, categorías, productos, precios, descripciones, promociones y fotos |
| `images/` | Recursos WebP locales; aquí puedes agregar fotos reales |
| `docs/inventario-menu.csv` | 74 productos, precios, descripciones, página de procedencia y pendientes |
| `docs/fuentes-y-pendientes.md` | Análisis de la carta y datos por confirmar |
| `docs/verificacion.md` | Resultado y alcance de las comprobaciones |
| `docs/carta-original.pdf` | Copia del PDF proporcionado, para contrastar la transcripción |
| `.nojekyll` | Permite servir los archivos estáticos sin procesarlos con Jekyll |

## Cambiar un precio o agregar un producto

Abre `menu-data.js`. Cada fila tiene la forma `dish(id, nombre, precio, opciones)`:

```js
// Ejemplo con un producto ya existente. El tercer argumento es el precio en MXN.
dish('taco-pastor', 'Tacos al pastor', 18)
```

Cambia el `18` para actualizar el precio. El nombre y la descripción se insertan como texto, sin interpretar HTML.

Para agregar un producto, copia una fila dentro de `items` de la categoría correspondiente. Usa un `id` único, sin espacios ni acentos. No repitas el identificador aunque existan nombres iguales en diferentes secciones. Conserva las comas entre filas. El menú, los conteos y los controles se regeneran automáticamente.

## Asociar una fotografía específica

1. Solicita al negocio una fotografía real de ese platillo y presentación.
2. Optimízala como WebP, idealmente de 800–1200 píxeles en su lado largo y de menos de 200 KB, sin perder calidad necesaria. Evita espacios y acentos en los nombres de archivo.
3. Guárdala en `images/`.
4. Agrega `image` e `imageAlt` a la fila:

```js
// Primero debes agregar físicamente images/taco-pastor.webp.
dish('taco-pastor', 'Tacos al pastor', 18, {
  image: 'images/taco-pastor.webp',
  imageAlt: 'Taco al pastor servido en Taquería El Asador Mix'
})
```

Cuando hay una foto específica, el panel muestra su nombre y la identifica como fotografía del producto. Si `image` es `null`, muestra una imagen de referencia recortada de la carta, con el rótulo **Imagen de la carta · referencia** y el aviso **Fotografía específica pendiente**. Estas referencias NO acreditan el aspecto exacto de una variante, su porción o sus ingredientes.

Si una foto no carga, el panel regresa a la referencia. Si tampoco existe la referencia, muestra un estado vacío legible en lugar del icono de imagen rota.

## Adaptar la plantilla a otro restaurante

- Cambia los campos de `restaurant` en `menu-data.js`: `name`, `shortName`, `accentName`, `logo`, `currency`, `locale`, `menuNote` y `sourceURL`. El logo se muestra en el pie de página; puedes poner `logo: ''` para ocultarlo.
- Cambia los colores de `:root` en `styles.css`. `--brand` controla el ámbar, `--accent` el verde y `--dark` el fondo oscuro.
- Sustituye las categorías y sus `items`. Cada categoría requiere `id`, `name` y `items`. `referenceImage` y `referenceAlt` son opcionales; si los usas, identifica honestamente su contenido.
- Sustituye `promotions` por promociones verificadas. Si no existen, usa `[]` y retira de `index.html` la sección de promociones y el texto del servicio de taquizas.
- Cambia el texto de `index.html` relativo a carta original, el `title`, la descripción, el favicon, el color del navegador y las dos imágenes originales por las del nuevo negocio. Los títulos y la descripción también se actualizan en tiempo de ejecución con el nombre configurado.
- Renueva `docs/` y sus fuentes para que no sigan acompañando al nuevo menú los precios o el PDF de El Asador Mix.

No cambies `script.js` para editar precios o fotografías. Los recursos iniciales son locales; ninguna tipografía ni librería se descarga desde una CDN.

## Cómo funciona el scroll

`IntersectionObserver` mantiene un conjunto de tarjetas visibles. Un único `requestAnimationFrame` por desplazamiento elige la tarjeta que cruza la línea de lectura. Su nombre, precio e imagen se sincronizan en el panel sticky. Al cargar una imagen, un contador descarta resultados antiguos si el usuario ya cambió de producto.

Se carga la foto activa y se prepara únicamente la siguiente. Las páginas grandes de la carta y el logo usan carga diferida. Las transiciones se desactivan si el usuario ha solicitado reducir el movimiento. En pantallas de 320–379 px, el panel pasa encima de la lista para conservar una lectura cómoda.

## Antes de entregarlo a clientes

Consulta `docs/fuentes-y-pendientes.md`: hace falta confirmar vigencia de precios/promociones, aclarar algunas unidades y obtener las fotos específicas. El proyecto puede ejecutarse y publicarse con las referencias actuales, pero una experiencia con fotos individuales de los 74 productos requiere esas imágenes reales.
