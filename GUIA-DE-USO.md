# 📘 Guía de uso — Web de Decoraciones Mi Hogar

Hola 👋 Esta guía explica, paso a paso y sin tecnicismos, cómo cuidar
y actualizar tu página web. **No necesitas saber de informática.**

> 🔑 **Regla de oro:** casi todo lo que querrás cambiar está en
> **UN solo archivo**, dentro de la carpeta `js`, llamado **`datos.js`**.

---

## 1. Cómo ver la web en tu ordenador

Haz **doble clic** en el archivo **`index.html`**.
Se abrirá en tu navegador (Chrome, Edge, etc.) y verás tu web tal cual.

👉 Cada vez que cambies algo, **guarda** el archivo y **actualiza** la
página del navegador (tecla **F5**) para ver cómo ha quedado.

---

## 2. Cómo cambiar los datos de la tienda

(teléfono, dirección, horario, redes sociales...)

1. Abre la carpeta **`js`**.
2. Haz clic derecho en **`datos.js`** → *Abrir con* → **Bloc de notas**.
3. Busca arriba la parte que dice **`DATOS DE LA TIENDA`**.
4. Cambia solo el texto que está **entre comillas**. Por ejemplo:

   ```
   telefono: "+34 600 00 00 00",
   ```
   Cambia el número y deja las comillas y la coma como están:
   ```
   telefono: "+34 922 12 34 56",
   ```
5. Guarda (Archivo → Guardar) y actualiza la web (F5).

### ⭐ El número de WhatsApp (muy importante)
En la línea `whatsapp:` pon tu número **con el 34 delante** y **sin
espacios ni el signo +**. Ejemplo, para el `600 123 456`:
```
whatsapp: "34600123456",
```
Así funcionarán todos los botones verdes de WhatsApp de la web.

---

## 3. Cómo añadir o cambiar productos (¡con Excel!)

Los productos están en el archivo **`productos.csv`**, que se abre con
**Excel** (o con el programa de hojas de cálculo que tengas). Es como una
tabla: **cada fila es un producto**.

### ▶️ Cómo abrirlo
Haz doble clic en **`productos.csv`**. Se abre con Excel y verás columnas:

| nombre | categoria | precio | descripcion | imagen | destacado |
|--------|-----------|--------|-------------|--------|-----------|
| Juego de sábanas | Ropa de cama | 34,99 € | Suaves y transpirables | sabanas.jpg | si |

### ➕ Para AÑADIR un producto
Escribe una **fila nueva** debajo de las demás, rellenando cada columna.

### ✏️ Para CAMBIAR un producto
Edita la celda que quieras (el precio, el nombre...). Como en cualquier Excel.

### ❌ Para QUITAR un producto
Borra su fila entera (clic derecho en el número de la fila → Eliminar).

### Qué poner en cada columna
| Columna | Qué poner |
|---------|-----------|
| **nombre** | El nombre del producto |
| **categoria** | La categoría. Los botones de filtro se crean solos según lo que escribas aquí. Escribe igual las que se repiten (ej.: siempre "Cortinas"). |
| **precio** | El precio, como quieras: `29,99 €` o `Consultar` |
| **descripcion** | Una frase corta sobre el producto |
| **imagen** | El nombre de la foto (ver punto 4). Déjalo **vacío** si no hay foto. |
| **destacado** | Escribe `si` para que salga en "Destacados", o déjalo vacío / `no` |

### 💾 MUY IMPORTANTE al guardar con Excel
Cuando guardes, Excel puede preguntar si mantener el formato **CSV**.
Responde **Sí / Mantener formato actual**. El archivo debe seguir
llamándose `productos.csv`.

> 💡 Si exportas productos desde tu programa de tienda (Sysme), puedes
> pegar esa información en estas mismas columnas para no escribir a mano.

---

## 4. Cómo poner fotos a los productos

1. Guarda la foto del producto en la carpeta **`imagenes`**.
   - Mejor que el nombre sea sencillo, **sin espacios ni acentos**.
     Ejemplos: `sabanas.jpg`, `cafetera.jpg`, `colchon.jpg`.
2. En `productos.csv` (con Excel), escribe el nombre de la foto en la
   columna **imagen** de ese producto. Por ejemplo: `sabanas.jpg`
3. Guarda y actualiza (F5).

💡 Consejo: usa fotos no demasiado grandes (las del móvil sirven
perfectamente). Si una foto falla o no existe, la web muestra un
dibujo gris y **no se rompe nada**.

---

## 5. Las categorías

¡Buena noticia! Las categorías (los botones para filtrar) **se crean
solas**. La web mira la columna **categoria** de `productos.csv` y crea
un botón por cada categoría distinta que encuentre.

- Para crear una categoría nueva: simplemente escríbela en la columna
  `categoria` de un producto.
- **Importante:** escribe igual las categorías que se repiten (por
  ejemplo, siempre "Cortinas", no "cortina" en uno y "Cortinas" en otro),
  o se crearán dos botones distintos.

---

## 6. Cómo poner la web en Internet (publicarla)

El archivo `index.html` es tu web, pero para que la gente la vea desde
fuera hay que "subirla" a Internet. Opciones fáciles y gratuitas:

- **Netlify Drop** (la más sencilla): entra en `app.netlify.com/drop`
  y arrastra la carpeta entera. Te da un enlace al momento.
- **GitHub Pages** o **Cloudflare Pages**: también gratuitas.

Cuando tengas un **dominio propio** (por ejemplo
`decoracionesmihogar.es`), se puede conectar a cualquiera de ellas.

> 👉 Si quieres, puedo ayudarte a publicarla y a conectar el dominio
> cuando llegue el momento. Avísame.

---

## 7. Si algo se ve mal

- Repasa que no falte ninguna **coma** o **comilla** donde la tocaste.
- Comprueba que la `categoria` del producto está **escrita igual** que
  en la lista de categorías.
- Si te lías editando, deshaz tu último cambio con **Ctrl + Z**.
- En `productos.csv`, comprueba que cada fila tiene sus columnas
  separadas por punto y coma (`;`) y que guardaste manteniendo formato CSV.

---

## 8. Gestionar los productos desde una Hoja de Google (recomendado)

En vez de usar `productos.csv` en el ordenador, puedes manejar los
productos desde una **Hoja de cálculo de Google** (Google Sheets). Así
los editas **desde el móvil o cualquier sitio** y la web se actualiza
sola, sin tener que volver a publicar nada.

### Cómo se monta (una sola vez)
1. Entra en **drive.google.com** con tu cuenta y crea una **Hoja de
   cálculo** nueva. Ponle de nombre, por ejemplo, "Productos web".
2. En la **primera fila**, escribe estos títulos, uno por columna:

   `nombre` · `categoria` · `precio` · `descripcion` · `imagen` · `destacado`

3. Rellena debajo tus productos, una fila por producto (igual que en la
   tabla del punto 3).
4. Arriba: menú **Archivo → Compartir → Publicar en la web**.
5. En la ventana, elige:
   - Pestaña **"Enlace"**.
   - En el primer desplegable, deja **la hoja** (Hoja 1).
   - En el segundo desplegable, elige **"Valores separados por comas (.csv)"**.
   - Pulsa **Publicar** y acepta.
6. Copia el **enlace** que te da (termina en algo como `...output=csv`).
7. Pégalo en el archivo `js/datos.js`, en la línea `hojaGoogle: ""`,
   entre las comillas. Guarda y publica la web una última vez.

¡Listo! A partir de ahí, **solo editas la Hoja de Google** y la web
muestra los cambios sola (puede tardar unos minutos en refrescar).

### Las fotos
Las fotos siguen yendo en la carpeta **`imagenes`** (es lo más fiable).
En la columna `imagen` de la hoja escribe el nombre de la foto
(ej.: `cortinas.jpg`). Cuando tengas fotos nuevas, pásamelas y las subo.

> ⚠️ No conviene poner las fotos directamente en Google Drive: Google
> suele bloquear esos enlaces y las fotos dejan de verse. Por eso las
> fotos van en la carpeta `imagenes`.

---

¿Dudas? Apunta lo que quieras cambiar y lo vemos juntos. 🙂
