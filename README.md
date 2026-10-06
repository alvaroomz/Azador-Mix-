# Taquería El Asador Mix · Menú digital NFC

Sitio estático en HTML, CSS y JavaScript para Tierra Blanca, Veracruz. Incluye los **74 productos** de las dos páginas del PDF proporcionado, con sus precios, las descripciones que aparecen en la carta y las promociones indicadas. No requiere instalar paquetes, compilar código, tener una base de datos ni contratar un servidor.

## Abrir en tu computadora

1. Descomprime `asador-mix-menu.zip`.
2. Abre la carpeta `asador-mix-menu`.
3. Da doble clic a `index.html`. Conserva `styles.css`, `script.js` y `assets` junto a ese archivo.

## Publicar en GitHub Pages

1. Entra a tu repositorio público de GitHub. Si aún está vacío, usa **uploading an existing file**. Si ya tiene archivos, usa **Add file → Upload files**.
2. Arrastra **el contenido de la carpeta** `asador-mix-menu`: `index.html`, `styles.css`, `script.js`, `README.md` y la carpeta `assets`. No subas solamente el ZIP ni dejes el `index.html` dentro de otra carpeta.
3. Pulsa **Commit changes** para guardar los archivos en la rama `main`.
4. En el repositorio, entra a **Settings → Pages**.
5. En **Build and deployment → Source**, selecciona **Deploy from a branch**.
6. En **Branch**, selecciona **main** y **/(root)**. Pulsa **Save**.
7. Espera a que termine la publicación. La misma sección **Pages** mostrará el enlace en **Visit site**. Si hay un error, revisa la pestaña **Actions** del repositorio.
8. Abre esa URL desde tu celular para confirmar que carga el menú. Copia **la URL pública del sitio**, no la dirección del repositorio, para grabarla en tus tarjetas NFC.

La URL normalmente tendrá la forma `https://TU-USUARIO.github.io/TU-REPOSITORIO/`. Reemplaza esos textos con tus datos. Todas las rutas del proyecto son relativas, por lo que funcionan aunque el menú esté publicado bajo el nombre del repositorio.

[Instrucciones oficiales de GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Grabar la tarjeta NFC

En tu aplicación para escribir etiquetas NFC, elige un registro **URL/URI** y pega el enlace público que GitHub Pages te muestra. Escribe el registro en la etiqueta y comprueba la apertura con un teléfono que tenga NFC. Los archivos permanecen en GitHub Pages; la tarjeta guarda el enlace.

Si actualizas productos o precios sin cambiar la URL del sitio, las tarjetas seguirán abriendo el mismo menú. Una vez publicada una actualización, recarga la página para verla.

## Cambiar productos y precios

Los datos están al inicio de **`script.js`**, en la constante `MENU`. Esa es la única lista de productos que necesitas editar. No hay que modificar el HTML para añadir filas. Ejemplo de la estructura:

```js
{
  id: 'tacos-pastor',       // Identificador único; evita cambiarlo si ya existe.
  name: 'Tacos al pastor',
  price: 18,               // Número en pesos; sin el símbolo $.
  description: '',         // Solo ingredientes o descripciones confirmados.
  image: './assets/images/tacos-al-pastor.webp',
  imageKind: 'restaurant',
  imageNote: 'Fotografía del producto.',
  imageAlt: 'Tacos al pastor de El Asador Mix.'
}
```

- `description`, `image`, `imageKind`, `imageNote` e `imageAlt` son opcionales.
- Deja `image` vacía o elimina ese campo cuando no tengas una foto. Aparecerá un espacio identificado como **Fotografía pendiente**, sin un icono de imagen rota.
- Para una foto ilustrativa, usa `imageKind: 'illustrative'`. La página mostrará una etiqueta explícita que indica que no es una foto del restaurante.
- Usa nombres de archivo sencillos, en minúsculas y sin espacios: `torta-bistec.webp`, por ejemplo. El nombre y sus mayúsculas deben coincidir exactamente con la ruta.
- Para añadir un producto, copia un objeto en `products` de su categoría, cambia su `id`, nombre y precio, y respeta las comas. Dos productos pueden compartir nombre, pero no `id`.
- Para añadir una categoría, copia un objeto de `MENU`, asigna un `id` nuevo y edita su `name` y sus `products`. `navName` permite un nombre más corto en la navegación.
- `notes` contiene las promociones de la categoría; `noteAfter` permite una nota después de un producto y `footnote` contiene una nota al final. El conteo de productos y categorías se calcula automáticamente.
- Para cambiar colores, edita las variables de `:root` al inicio de `styles.css`.

Después de editar, abre `index.html`, prueba la búsqueda y pulsa un producto. Sube los archivos modificados a GitHub y guarda con **Commit changes**.

## Agregar fotografías

Guarda las fotos en **`assets/images`** y añade su ruta al producto correspondiente en `script.js`. Se recomienda WebP o JPEG, de alrededor de 1000 píxeles de ancho y menos de 200 KB por foto. El panel solicita únicamente la imagen activa: las fotos de todos los productos no se descargan al abrir la página.

Se incluye una fotografía de un taco al pastor **extraída del anuncio que aparece en el enlace proporcionado**, con su procedencia indicada. No se usaron fotos genéricas como si pertenecieran al negocio. Las imágenes pequeñas del PDF no identifican inequívocamente los demás productos: estos quedan con espacios listos para añadir fotografías individuales.

## Contenido y fuentes

- **Productos y precios:** `assets/source/menu-original.pdf`, copia sin cambios del PDF adjunto `menú(2).pdf`. El sitio conserva también un enlace a esa carta.
- **Sitio consultado:** [carta publicada en Restaurant Guru](https://es.restaurantguru.com/Taqueria-El-Asador-Mix-Tierra-Blanca/menu). La imagen actualmente expuesta es un anuncio del taco al pastor, sin el listado completo de precios. Por ello, los datos del menú se transcribieron del PDF.
- **Foto del taco al pastor:** [imagen promocional original](https://menu02.restaurantguru.com/m7/menu-El-Asador-Mix-dcl.jpg). Se conserva el anuncio completo en `assets/source/promocional-pastor.jpg`; el archivo WebP es un recorte de la fotografía de ese anuncio. No se generó comida con IA ni se le agregaron ingredientes.
- **Tipografía:** versión local reducida de Nimbus Sans Narrow Bold, de URW Base35. La licencia y la excepción para fuentes se incluyen en `assets/fonts/LICENSE.txt`.

Se mantienen los encabezados **Tacos, Tortas, Platillos, Por kilo y Super paquete Mix**. El bloque de refrescos y aguas no tiene encabezado en el PDF; se rotuló **Bebidas** para navegar por esos siete productos. Se conserva el orden interno de los bloques, incluyendo arrachera y acompañamientos en Tacos y las carnes por kilo impresas dentro de Platillos. Las fracciones y el texto alternativo “Shirlon” se conservan. Se normalizaron las mayúsculas y los acentos para facilitar la lectura, sin agregar ingredientes.

Los precios manuscritos de Suizos, Gringas y Gringas de bistec se transcribieron como **$55, $55 y $60**, respectivamente. El Super paquete Mix cuesta **$550**. Las promociones corresponden a lo anunciado en el PDF; esta página no consulta disponibilidad ni precios en tiempo real.

## Funcionamiento

- Computadora: listado a la izquierda y panel de producto fijo a la derecha.
- Celular: imagen y datos del producto en un panel compacto arriba del listado.
- La selección cambia al recorrer la zona de lectura o al pulsar un producto.
- El nombre, precio y fotografía se actualizan juntos; una carga de imagen anterior no puede reemplazar a la selección actual.
- Categorías con desplazamiento suave, búsqueda por nombre sin distinguir mayúsculas ni acentos, mensaje sin coincidencias y botón para volver al inicio.
- Navegación con teclado, etiquetas para lectores de pantalla y respeto de la preferencia de reducir movimiento.
- Imágenes, tipografía, estilos y código locales. No depende de un CDN, una API, una cuenta o un servicio externo para mostrar el menú.

## Comprobaciones realizadas

Probado en Chromium con anchos de **320, 390, 740, 768, 1024, 1366 y 1440 píxeles**, incluyendo teléfono vertical y horizontal. No se detectó desplazamiento horizontal ni errores de JavaScript. Pasaron 174 comprobaciones de integración que cubren la selección de los 74 productos, sincronización de nombre/precio/imagen, cambio al desplazar, categorías, búsqueda con acentos y mayúsculas, ausencia de resultados, reinicio, teclado, vuelta al inicio, movimiento reducido, fotografía retrasada, fotografía inexistente y apertura local sin servidor.

El proyecto se probó también servido bajo `/asador/`, para comprobar las rutas relativas que utiliza GitHub Pages. Las comprobaciones se hicieron en un navegador con tamaños de pantalla simulados; no se programó una tarjeta NFC física ni se publicó en tu cuenta de GitHub.

## Archivos

| Archivo o carpeta | Contenido |
|---|---|
| `index.html` | Estructura, metadatos y controles accesibles |
| `styles.css` | Diseño, adaptación a pantallas y animaciones |
| `script.js` | Productos editables, búsqueda y sincronización del panel |
| `assets/images` | Fotografías optimizadas de los productos |
| `assets/fonts` | Tipografía local y licencia |
| `assets/source` | Carta original y procedencia de la imagen |
| `README.md` | Estas instrucciones |
