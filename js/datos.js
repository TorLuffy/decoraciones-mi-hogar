/* ===================================================================
   DATOS DE LA TIENDA — Decoraciones Mi Hogar
   -------------------------------------------------------------------
   Aquí SOLO están los datos de contacto de la tienda.

   👉 LOS PRODUCTOS YA NO SE TOCAN AQUÍ.
      Ahora los productos se editan en el archivo "productos.csv"
      (se abre con Excel) y las fotos van en la carpeta "imagenes".
      Tienes la explicación en GUIA-DE-USO.md.

   CONSEJOS para esta parte:
   - Cambia solo el texto que está entre comillas "así".
   - No borres las comas (,) ni las llaves { }.
   - Después de guardar, actualiza la web (F5) para ver los cambios.
   =================================================================== */

const NEGOCIO = {

  // Nombre de la tienda
  nombre: "Decoraciones Mi Hogar",

  // Frase corta que sale en la portada
  eslogan: "Decoración del hogar y confección de cortinas en La Laguna, Tenerife",

  // Teléfono para llamar
  telefono: "+34 822 017 641",

  // WhatsApp: SOLO números, con 34 delante y SIN espacios ni +
  // (Ahora mismo es un número de PRUEBAS)
  whatsapp: "34639456698",

  // Correo electrónico (vacío "" para no mostrarlo)
  email: "decoracionesmihogar@gmail.com",

  // Dirección de la tienda
  direccion: "C/ Obispo Pérez Cáceres 44, local izquierda, 38205 San Cristóbal de La Laguna, Tenerife",

  // Horario (cada línea entre comillas, separadas por comas)
  horario: [
    "Lunes a Viernes: 9:30 - 13:00 y 16:30 - 20:00",
    "Sábados: 9:30 - 13:30",
    "Domingos: Cerrado"
  ],

  // Redes sociales (vacías "" si no tienes)
  facebook: "",
  instagram: "https://www.instagram.com/decoracionesmihogar/",

  // Mapa de Google (vacío "" para mostrar solo un botón a Google Maps)
  mapa: "https://maps.google.com/maps?q=Calle%20Obispo%20P%C3%A9rez%20C%C3%A1ceres%2044%2C%20San%20Crist%C3%B3bal%20de%20La%20Laguna%2038205&output=embed",

  // HOJA DE GOOGLE con los productos (opcional).
  //   - Si la dejas vacía "", la web usa el archivo local "productos.csv".
  //   - Si pegas aquí el enlace de publicación CSV de tu Hoja de Google,
  //     los productos saldrán de ahí y podrás editarlos desde el móvil.
  //   (En la GUIA-DE-USO.md, punto 8, te explico cómo conseguir ese enlace.)
  hojaGoogle: ""
};
