# Análisis del menú y pendientes

## Fuente usada

Se transcribieron las dos páginas de `menú(1).pdf`, adjunto por el usuario. La copia está en `carta-original.pdf`. Las páginas contienen imágenes, no texto extraíble. La lectura se hizo inspeccionando ambas páginas y ampliando precios, ingredientes y presentaciones.

Se consultó también https://es.restaurantguru.com/Taqueria-El-Asador-Mix-Tierra-Blanca/menu. La página ofrece una carta como imagen y menciona versiones anteriores subidas por usuarios; no proporciona una tabla de productos, ingredientes y precios. La descarga directa de su JPEG respondió HTTP 403 en este entorno. Por eso, el PDF adjunto, no una mezcla de versiones históricas, es la fuente para los 74 renglones.

Consulta realizada: 5 de octubre de 2026, horario de Ciudad de México. Esta fecha es la de transcripción, no una fecha de actualización del restaurante. No se afirma que la carta esté vigente hoy.

## Organización y cobertura

| Categoría web | Productos | Procedencia |
| --- | ---: | --- |
| Tacos | 17 | Encabezado Tacos de la página 2, más los dos tacos de arrachera de la columna derecha |
| Tortas | 6 | Encabezado Tortas de la página 2 |
| Platillos | 33 | Los 28 renglones bajo Platillos en ambas columnas de la página 2, más la orden de arrachera, los dos alambres de la columna superior derecha y las dos órdenes de acompañamientos |
| Por kilo | 10 | Los seis renglones del encabezado Por kilo de la página 1, más las cuatro presentaciones de arrachera de la página 2 |
| Súper Paquete Mix | 1 | Encabezado Super Paquete Mix de la página 1 |
| Bebidas | 7 | Siete renglones de bebidas al pie de la página 2; se agregó este título editorial porque no hay encabezado impreso |
| **Total** | **74** | Todos los renglones de venta legibles en el PDF |

Los productos de kilo de sirloin y bistec permanecen en Platillos, donde aparecen en la carta. Se mantienen como productos independientes los alambres y las órdenes con nombres similares y precios diferentes. Una categoría puede compartir referencias, pero los identificadores de producto son únicos.

Se normalizaron mayúsculas, acentos, espacios y la expansión de `c/Queso` a `con queso`. Se mantiene la aclaración `(Shirlon)` de la carta junto a sirloin. No se asignaron ingredientes donde la carta no los describe.

## Detalles transcritos que requieren especial atención

- Los precios manuscritos de Suizas, Gringas y Gringas de bistec se leen como **$55, $55 y $60**, respectivamente. La referencia original permanece disponible para revisión.
- El Súper Paquete Mix aparece en **$550**: incluye 1 kg de carne al pastor con queso, 5 tacos de chuleta, 5 tacos al pastor, 1 orden de cebollines y 1 refresco de 2.5 L; se anuncia para 6 personas.
- Se conservó la nota **No se hacen medios platillos**, aunque también hay renglones separados que dicen **½ de bistec**. No se resolvió esa aparente contradicción inventando políticas.
- En Bebidas hay **Refrescos varios $28**, **Refrescos de 600 $32**, **Refrescos grandes $60**, Coca-Cola de 600 $32, agua embotellada $15, jamaica chica $36 y jamaica grande $46.

## Información exacta que falta

1. **Fotos individuales verificadas de los 74 productos o autorización del negocio para compartir una foto entre presentaciones equivalentes.** Ninguna foto de la carta identifica inequívocamente cada variante. Todos los `image` permanecen en `null`. El CSV contiene una fila por producto con su identificador y el estado Pendiente.
2. **Un logotipo original en mayor resolución**, preferentemente PNG transparente o SVG autorizado. Se conserva un recorte del logotipo que aparece en el PDF; su resolución es limitada.
3. **Confirmar precios actuales y vigencia/condiciones de las dos promociones:** 2 × 1 en tacos al pastor y chuleta los miércoles y domingos; refresco de 2.0 L gratis al comprar un kilo de arrachera.
4. **Unidad y tamaño de “½ de bistec sencillo”, “½ de bistec con queso”, “½ arrachera sencilla” y “½ arrachera con queso”.** No se añadió “kilo” a esos renglones porque la unidad no se imprime en sus nombres.
5. **Unidad de “600”, marcas/sabores de “Refrescos varios”, tamaño de “Refrescos grandes”, volumen del agua embotellada y volúmenes de jamaica chica/grande.** Solo se muestran los nombres legibles, sin inventar mililitros ni sabores.
6. **Descripciones/ingredientes de productos que no los tienen**, por ejemplo Alambre Mix, Pastorada y Parrillada especial, si el negocio quiere ampliarlos. Las descripciones existentes se conservaron, pero no se completaron con recetas habituales de otras taquerías.

No hace falta otro PDF para utilizar la transcripción actual. Para terminar la parte de fotografías individuales se necesitan las imágenes correspondientes, identificadas por nombre o por el `id` del CSV.

## Imágenes y honestidad visual

Las imágenes WebP son recortes de la carta original: tacos, una imagen de torta, un platillo general, carne servida por kilo, bebidas, trompo y logo. No se usaron imágenes generadas, fotografías de otra taquería ni bancos de imágenes atribuidos al restaurante.

Los recortes de categoría siempre llevan un aviso de referencia y de foto específica pendiente. El recorte de torta se identifica como imagen de la carta, no como una fotografía real del producto. Los recortes tienen poca resolución y algunos elementos impresos se superponen al alimento en la fuente; no se asegura calidad fotográfica de catálogo.

No se agregaron domicilio, horario, teléfono, testimonios, tiempos de preparación, ingredientes, disponibilidad ni botones de pedido que no estén verificados en la carta.

## Publicación

La entrega está preparada para GitHub Pages, con rutas relativas, archivos estáticos y `.nojekyll`. No se publicó en una cuenta de GitHub ni se programó una tarjeta física en esta sesión. Sigue los pasos de `README.md` para obtener la URL HTTPS que grabarás en la NFC.
