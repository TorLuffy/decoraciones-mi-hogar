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

## 3. Cómo añadir o cambiar productos

En el mismo archivo `datos.js`, baja hasta la parte **`TUS PRODUCTOS`**.

Cada producto es un bloque así:

```
{
  nombre: "Juego de sábanas 100% algodón",
  categoria: "Ropa de cama",
  precio: "34,99 €",
  descripcion: "Suaves y transpirables.",
  imagen: "sabanas.jpg",
  destacado: true
},
```

### ➕ Para AÑADIR un producto nuevo
1. Copia un bloque entero (desde la `{` hasta la `},`).
2. Pégalo justo debajo.
3. Cambia los textos por los del producto nuevo.

### ✏️ Para CAMBIAR un producto
Solo edita el texto entre comillas (nombre, precio, descripción...).

### ❌ Para QUITAR un producto
Borra su bloque entero, desde la `{` hasta la `},`.

### Qué significa cada línea
| Campo | Qué poner |
|-------|-----------|
| `nombre` | El nombre del producto |
| `categoria` | Una de las categorías (ver punto 5). **Escríbela igual.** |
| `precio` | El precio, como tú quieras: `"29,99 €"` o `"Consultar"` |
| `descripcion` | Una frase corta sobre el producto |
| `imagen` | El nombre de la foto (ver punto 4). Vacío `""` = dibujo gris |
| `destacado` | `true` para que salga en "Destacados", o `false` si no |

> ⚠️ No borres las comas `,` ni las llaves `{ }`. Son las que mantienen
> todo ordenado. Si algo deja de verse, casi siempre es una coma que falta.

---

## 4. Cómo poner fotos a los productos

1. Guarda la foto del producto en la carpeta **`imagenes`**.
   - Mejor que el nombre sea sencillo, **sin espacios ni acentos**.
     Ejemplos: `sabanas.jpg`, `cafetera.jpg`, `colchon.jpg`.
2. En `datos.js`, en la línea `imagen:` de ese producto, escribe el
   nombre de la foto entre comillas:
   ```
   imagen: "sabanas.jpg",
   ```
3. Guarda y actualiza (F5).

💡 Consejo: usa fotos no demasiado grandes (las del móvil sirven
perfectamente). Si una foto falla o no existe, la web muestra un
dibujo gris y **no se rompe nada**.

---

## 5. Las categorías

Los botones para filtrar productos salen de la lista `CATEGORIAS`
(en `datos.js`). Vienen estas:

- Decoración
- Ropa de cama
- Cortinas
- Colchones
- Pequeños electrodomésticos

Puedes añadir o quitar categorías en esa lista. **Importante:** la
`categoria` de cada producto debe escribirse **igual** que en la lista.

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
- Si te lías, vuelve a abrir `datos.js` y deshaz tu último cambio
  (tecla **Ctrl + Z** en el Bloc de notas).

---

¿Dudas? Apunta lo que quieras cambiar y lo vemos juntos. 🙂
