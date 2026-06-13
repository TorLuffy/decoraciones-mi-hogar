/* ===================================================================
   DATOS DE TU WEB — Decoraciones Mi Hogar
   -------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas tocar para cambiar la web.

   - Para cambiar el teléfono, la dirección, el horario, etc.
     edita la sección "DATOS DE LA TIENDA" (más abajo).

   - Para añadir, quitar o cambiar productos, edita la sección
     "TUS PRODUCTOS".

   CONSEJOS:
   - Cambia solo el texto que está entre comillas "así".
   - No borres las comas (,) ni las llaves { } : son importantes.
   - Después de guardar, abre la web para ver los cambios.

   (Tienes una guía completa con dibujos en el archivo GUIA-DE-USO.md)
   =================================================================== */


/* ===================================================================
   1) DATOS DE LA TIENDA
   =================================================================== */
const NEGOCIO = {

  // Nombre de la tienda (sale arriba del todo)
  nombre: "Decoraciones Mi Hogar",

  // Frase corta que describe la tienda (sale en la portada)
  eslogan: "Decoración del hogar y confección de cortinas en La Laguna, Tenerife",

  // Teléfono para llamar (con prefijo +34)
  telefono: "+34 822 017 641",

  // Número de WhatsApp: SOLO números, con el 34 delante y SIN espacios ni +
  //      Ejemplo, para el 600 123 456 se pone: "34600123456"
  whatsapp: "34639456698",

  // Correo electrónico (déjalo vacío "" si no quieres mostrarlo)
  email: "decoracionesmihogar@gmail.com",

  // Dirección de la tienda
  direccion: "C/ Obispo Pérez Cáceres 44, local izquierda, 38205 San Cristóbal de La Laguna, Tenerife",

  // Horario (cada línea entre comillas, separadas por comas)
  horario: [
    "Lunes a Viernes: 9:30 - 13:00 y 16:30 - 20:00",
    "Sábados: 9:30 - 13:30",
    "Domingos: Cerrado"
  ],

  // Enlaces a tus redes sociales (déjalos vacíos "" si no tienes)
  facebook: "",
  instagram: "https://www.instagram.com/decoracionesmihogar/",

  // Mapa de Google (opcional). Si lo dejas vacío "" se muestra un botón
  // que lleva a tu ubicación en Google Maps (usando la dirección de arriba).
  mapa: "https://maps.google.com/maps?q=Calle%20Obispo%20P%C3%A9rez%20C%C3%A1ceres%2044%2C%20San%20Crist%C3%B3bal%20de%20La%20Laguna%2038205&output=embed"
};


/* ===================================================================
   2) TUS PRODUCTOS
   -------------------------------------------------------------------
   Cada producto va entre llaves { } y se separa del siguiente con una coma.

   Para AÑADIR un producto: copia un bloque entero (desde { hasta },)
   y pégalo debajo, luego cambia los textos.

   Campos de cada producto:
     nombre      -> nombre del producto
     categoria   -> tiene que ser una de las categorías de la lista de abajo
     precio      -> precio (escríbelo como quieras, ej: "29,99 €" o "Consultar")
     descripcion -> una frase corta describiendo el producto
     imagen      -> nombre de la foto (debe estar en la carpeta "imagenes")
                    si la dejas vacía "" se muestra un dibujo gris de relleno
     destacado   -> pon true para que salga en "Destacados", o false si no

   NOTA: los productos y precios de abajo son EJEMPLOS para que veas cómo
   queda. Cámbialos por los vuestros y pon vuestros precios reales.
   =================================================================== */

// Lista de categorías que aparecen como botones (puedes cambiarlas o añadir más)
const CATEGORIAS = [
  "Cortinas",
  "Ropa de cama",
  "Decoración",
  "Menaje y cocina",
  "Pequeños electrodomésticos",
  "Regalos"
];

const PRODUCTOS = [

  {
    nombre: "Cortinas a medida",
    categoria: "Cortinas",
    precio: "Consultar",
    descripcion: "Confección e instalación de cortinas a tu gusto. Te asesoramos en tienda.",
    imagen: "",
    destacado: true
  },

  {
    nombre: "Estores y visillos",
    categoria: "Cortinas",
    precio: "Consultar",
    descripcion: "Estores enrollables y visillos para vestir cada ventana de tu casa.",
    imagen: "",
    destacado: false
  },

  {
    nombre: "Juego de sábanas 100% algodón",
    categoria: "Ropa de cama",
    precio: "34,99 €",
    descripcion: "Suaves y transpirables. Disponibles en varios colores y tamaños.",
    imagen: "",
    destacado: true
  },

  {
    nombre: "Edredón nórdico acolchado",
    categoria: "Ropa de cama",
    precio: "59,99 €",
    descripcion: "Calientito y ligero, ideal para las noches frescas.",
    imagen: "",
    destacado: false
  },

  {
    nombre: "Juego de sartenes",
    categoria: "Menaje y cocina",
    precio: "39,99 €",
    descripcion: "Antiadherentes y resistentes, para el día a día en tu cocina.",
    imagen: "",
    destacado: true
  },

  {
    nombre: "Batería de cacerolas",
    categoria: "Menaje y cocina",
    precio: "Consultar",
    descripcion: "Cacerolas de calidad para cocinar de todo con comodidad.",
    imagen: "",
    destacado: false
  },

  {
    nombre: "Vajilla completa",
    categoria: "Menaje y cocina",
    precio: "Consultar",
    descripcion: "Pon una mesa bonita con nuestras vajillas y juegos de platos.",
    imagen: "",
    destacado: false
  },

  {
    nombre: "Perfumes y ambientadores de hogar",
    categoria: "Decoración",
    precio: "Consultar",
    descripcion: "Aromas para que tu casa huela siempre de maravilla.",
    imagen: "",
    destacado: true
  },

  {
    nombre: "Jarrones y detalles decorativos",
    categoria: "Decoración",
    precio: "18,50 €",
    descripcion: "El toque elegante que le falta a tu salón o recibidor.",
    imagen: "",
    destacado: false
  },

  {
    nombre: "Cafetera de goteo",
    categoria: "Pequeños electrodomésticos",
    precio: "27,99 €",
    descripcion: "Prepara hasta 12 tazas. Fácil de usar y limpiar.",
    imagen: "",
    destacado: false
  },

  {
    nombre: "Detalles y regalos",
    categoria: "Regalos",
    precio: "Consultar",
    descripcion: "Bolsas y envoltorios para regalar con encanto en cualquier ocasión.",
    imagen: "",
    destacado: true
  }

];
