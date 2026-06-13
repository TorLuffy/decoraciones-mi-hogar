/* ===================================================================
   LÓGICA DE LA WEB — Decoraciones Mi Hogar
   (Normalmente NO necesitas tocar este archivo. Aquí ocurre la "magia"
    que coge tus datos del archivo datos.js y los muestra en la web.)
   =================================================================== */

// --- Iconos de redes sociales (SVG) ---
const ICONO_FACEBOOK = '<svg viewBox="0 0 24 24"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z"/></svg>';
const ICONO_INSTAGRAM = '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-.9 0-1.4.2-1.7.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.3-.3.8-.3 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 .9.2 1.4.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.8.3 1.7.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.3-.8.3-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-.9-.2-1.4-.3-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.1-.8-.3-1.7-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 8.1a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zm6.3-8.3a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z"/></svg>';
const ICONO_WPP = '<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 .4C7.4.4.5 7.3.5 15.9c0 2.8.7 5.4 2 7.8L.4 31.6l8.1-2.1c2.3 1.2 4.8 1.9 7.5 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.4 16 .4zm7.1 18.7c-.4-.2-2.3-1.1-2.6-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.2 0-.5-.1-.7-.1-.2-.9-2.2-1.3-3-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.3 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z"/></svg>';

// --- Crea un enlace de WhatsApp con un mensaje ---
function enlaceWhatsApp(mensaje) {
  return "https://wa.me/" + NEGOCIO.whatsapp + "?text=" + encodeURIComponent(mensaje);
}

// --- Dibuja una tarjeta de producto ---
function crearTarjeta(p) {
  const mensaje = "¡Hola " + NEGOCIO.nombre + "! Me interesa este producto: " + p.nombre +
                  (p.precio ? " (" + p.precio + ")" : "") + ". ¿Me dais más información?";
  const imagen = p.imagen
    ? '<img src="' + p.imagen + '" alt="' + p.nombre + '" loading="lazy" onerror="this.parentElement.innerHTML=\'<div class=&quot;sin-foto&quot;><span>🖼️</span>Sin foto</div>\'">'
    : '<div class="sin-foto"><span>🖼️</span>Foto próximamente</div>';

  return `
    <article class="tarjeta">
      <div class="tarjeta-imagen">
        <span class="etiqueta-categoria">${p.categoria}</span>
        ${imagen}
      </div>
      <div class="tarjeta-cuerpo">
        <h3 class="tarjeta-nombre">${p.nombre}</h3>
        <p class="tarjeta-desc">${p.descripcion || ""}</p>
        <div class="tarjeta-pie">
          <span class="tarjeta-precio">${p.precio || ""}</span>
          <a class="boton-wpp" href="${enlaceWhatsApp(mensaje)}" target="_blank" rel="noopener">
            ${ICONO_WPP} Consultar
          </a>
        </div>
      </div>
    </article>`;
}

// --- Muestra los productos de una categoría (o todos) ---
function mostrarProductos(categoria) {
  const rejilla = document.getElementById("rejilla-productos");
  const lista = (categoria === "Todos")
    ? PRODUCTOS
    : PRODUCTOS.filter(p => p.categoria === categoria);

  rejilla.innerHTML = lista.length
    ? lista.map(crearTarjeta).join("")
    : '<p class="aviso-vacio">Aún no hay productos en esta categoría.</p>';
}

// --- Crea los botones de filtro de categorías ---
function crearFiltros() {
  const cont = document.getElementById("filtros");
  const categorias = ["Todos", ...CATEGORIAS];

  cont.innerHTML = categorias.map((c, i) =>
    `<button class="filtro ${i === 0 ? "activo" : ""}" data-cat="${c}">${c}</button>`
  ).join("");

  cont.querySelectorAll(".filtro").forEach(boton => {
    boton.addEventListener("click", () => {
      cont.querySelectorAll(".filtro").forEach(b => b.classList.remove("activo"));
      boton.classList.add("activo");
      mostrarProductos(boton.dataset.cat);
    });
  });
}

// --- Muestra los productos destacados ---
function mostrarDestacados() {
  const rejilla = document.getElementById("rejilla-destacados");
  const destacados = PRODUCTOS.filter(p => p.destacado);
  if (!destacados.length) {
    // Si no hay destacados, ocultamos toda la sección
    document.getElementById("destacados").style.display = "none";
    return;
  }
  rejilla.innerHTML = destacados.map(crearTarjeta).join("");
}

// --- Rellena los datos de la tienda por toda la web ---
function rellenarDatos() {
  // Textos del nombre y eslogan
  document.getElementById("logo-nombre").textContent = NEGOCIO.nombre;
  document.getElementById("portada-titulo").textContent = NEGOCIO.nombre;
  document.getElementById("portada-eslogan").textContent = NEGOCIO.eslogan;
  document.getElementById("nosotros-nombre").textContent = NEGOCIO.nombre;
  document.getElementById("pie-nombre").textContent = NEGOCIO.nombre;
  document.getElementById("anio").textContent = new Date().getFullYear();
  document.title = NEGOCIO.nombre + " — Tenerife";

  // Datos de contacto
  const datos = document.getElementById("contacto-datos");
  let html = "";

  if (NEGOCIO.direccion) {
    const mapaBusqueda = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(NEGOCIO.direccion);
    html += bloqueDato("📍", "Dirección", '<a href="' + mapaBusqueda + '" target="_blank" rel="noopener">' + NEGOCIO.direccion + '</a>');
  }
  if (NEGOCIO.telefono) {
    html += bloqueDato("📞", "Teléfono", '<a href="tel:' + NEGOCIO.telefono.replace(/\s/g, "") + '">' + NEGOCIO.telefono + '</a>');
  }
  if (NEGOCIO.whatsapp) {
    const msj = "¡Hola " + NEGOCIO.nombre + "! Me gustaría hacer una consulta.";
    html += bloqueDato("💬", "WhatsApp", '<a href="' + enlaceWhatsApp(msj) + '" target="_blank" rel="noopener">Escríbenos por WhatsApp</a>');
  }
  if (NEGOCIO.email) {
    html += bloqueDato("✉️", "Correo", '<a href="mailto:' + NEGOCIO.email + '">' + NEGOCIO.email + '</a>');
  }
  if (NEGOCIO.horario && NEGOCIO.horario.length) {
    html += bloqueDato("🕒", "Horario", NEGOCIO.horario.join("<br>"));
  }
  datos.innerHTML = html;

  // Mapa
  const mapa = document.getElementById("contacto-mapa");
  if (NEGOCIO.mapa) {
    mapa.innerHTML = '<iframe src="' + NEGOCIO.mapa + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>';
  } else {
    const mapaBusqueda = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(NEGOCIO.direccion || "Tenerife");
    mapa.innerHTML = '<a class="mapa-vacio" href="' + mapaBusqueda + '" target="_blank" rel="noopener">📍 Ver nuestra ubicación en Google Maps</a>';
  }

  // Redes sociales del pie
  const redes = document.getElementById("pie-redes");
  let redesHtml = "";
  if (NEGOCIO.facebook)  redesHtml += '<a href="' + NEGOCIO.facebook  + '" target="_blank" rel="noopener" aria-label="Facebook">' + ICONO_FACEBOOK + '</a>';
  if (NEGOCIO.instagram) redesHtml += '<a href="' + NEGOCIO.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">' + ICONO_INSTAGRAM + '</a>';
  if (NEGOCIO.whatsapp) {
    const msj = "¡Hola " + NEGOCIO.nombre + "!";
    redesHtml += '<a href="' + enlaceWhatsApp(msj) + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + ICONO_WPP + '</a>';
  }
  redes.innerHTML = redesHtml;

  // Botón flotante de WhatsApp
  const flotante = document.getElementById("whatsapp-flotante");
  if (NEGOCIO.whatsapp) {
    const msj = "¡Hola " + NEGOCIO.nombre + "! Me gustaría hacer una consulta.";
    flotante.href = enlaceWhatsApp(msj);
  } else {
    flotante.style.display = "none";
  }
}

function bloqueDato(icono, titulo, contenido) {
  return '<div class="dato"><span class="dato-icono">' + icono + '</span>' +
         '<div class="dato-texto"><h4>' + titulo + '</h4><p>' + contenido + '</p></div></div>';
}

// --- Menú móvil ---
function activarMenuMovil() {
  const boton = document.getElementById("menu-boton");
  const menu = document.getElementById("menu");
  boton.addEventListener("click", () => menu.classList.toggle("abierto"));
  menu.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => menu.classList.remove("abierto"))
  );
}

// --- Arranque ---
document.addEventListener("DOMContentLoaded", () => {
  rellenarDatos();
  crearFiltros();
  mostrarProductos("Todos");
  mostrarDestacados();
  activarMenuMovil();
});
