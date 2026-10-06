# Verificación de la entrega

## Menú y fuentes

| Comprobación solicitada | Resultado |
| --- | --- |
| Incluir todos los productos disponibles | Se transcribieron los 74 renglones legibles del PDF de dos páginas: 17 tacos, 6 tortas, 33 platillos, 10 opciones por kilo, 1 paquete y 7 bebidas. El CSV identifica su página y ubicación. |
| Precios coincidentes | Revisión visual de páginas y ampliaciones de precios; 74 importes reproducidos en la web y comprobados contra el archivo de datos. Los precios actuales del restaurante requieren confirmación. |
| Categorías correctas | Se conservaron los cinco encabezados de la carta y se agregó Bebidas para los renglones sin encabezado. Los movimientos de la columna de arrachera y acompañamientos se documentan en fuentes-y-pendientes.md. |
| Foto correspondiente para cada producto | **Pendiente de material del restaurante:** ninguna de las 74 variantes tiene una foto individual inequívocamente identificada en el PDF. Se usan referencias explícitamente rotuladas y campos preparados para fotos reales. |
| Cambio mediante scroll | Verificado: la tarjeta que cruza la línea de lectura actualiza nombre, precio, categoría, contador e imagen asociada. Se comprobó también el cambio entre dos imágenes distintas asignadas solamente en una respuesta de prueba, sin modificar los datos entregados. |
| Uso desde teléfono | Verificado en anchos de 320, 360, 390 y 430 px, y en 768 y 1280 px para tablet/escritorio. Sin desbordamiento horizontal de la página. El texto al 200 % activa una disposición de una columna cuando hace falta. |
| Recursos y enlaces locales | Los archivos referenciados existen; sin errores JavaScript ni respuestas HTTP 4xx/5xx durante la matriz de navegación. La carta original se abre en un diálogo; Escape permite cerrarlo. |
| GitHub Pages | Verificado como web estática bajo `/asador-mix/`, con rutas relativas. También se comprobó `file://` y la navegación de categorías al abrir el HTML directamente. Incluye `.nojekyll` e instrucciones de publicación; no se realizó una publicación en GitHub en esta sesión. |

## Pruebas de navegador realizadas

Chromium en modo headless; altura de 844 px y anchos 320, 360, 390, 430, 768 y 1280 px.

En cada ancho:

- 74 tarjetas renderizadas y 74 identificadores únicos.
- Coincidencia entre los 74 precios del archivo de datos y los importes visibles.
- Saltos a Tortas, Por kilo, Paquete Mix, Bebidas y vuelta a Tacos.
- Desplazamiento directo a productos no contiguos: Gringas, Torta de bistec con queso, Alambre hawaiano, ½ kilo al pastor con queso, Súper Paquete Mix y Agua de jamaica grande.
- Identificador activo y precio del panel coincidentes con el producto visitado.
- Apertura/cierre por teclado de la carta original.
- Sin errores de ejecución ni recursos fallidos registrados en esa navegación.

Comprobaciones adicionales:

- Animaciones normales y preferencia de movimiento reducido.
- Controles anterior/siguiente y cambio real del archivo de imagen al pasar de un producto a otro, usando únicamente recursos existentes en una sustitución de datos temporal para la prueba.
- Texto ampliado al 200 %, sin desplazamiento horizontal de la página.
- Apertura local del HTML y salto de categoría sin servidor.
- Comprobación de sintaxis de los dos archivos JavaScript.
- Inspección de capturas móviles y de escritorio.

## Límites del resultado

La prueba no sustituye una comprobación en un teléfono físico ni un escaneo de tarjeta NFC. La publicación final depende de la configuración del repositorio del usuario. Las fotos recortadas del PDF tienen poca resolución y no equivalen a un catálogo fotográfico completo. Se requiere confirmar vigencia de precios/promociones y las unidades detalladas en fuentes-y-pendientes.md.
