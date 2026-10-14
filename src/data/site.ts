/**
 * Datos generales de la firma.
 * ⚠️ Revisa los campos marcados con TODO antes de publicar.
 */
export const site = {
  name: 'Legem',
  legalName: 'Legem Attorneys at Law',
  url: 'https://legem.mx',

  // TODO: confirmar el correo que recibe las consultas del formulario y del sitio.
  contactEmail: 'contacto@legem.mx',

  // TODO: agregar teléfono principal si se desea mostrar (formato +52 ...).
  phone: '',

  // TODO: agregar ciudad y dirección de cada oficina.
  // `image`: ruta de la foto de la oficina (ej. '/images/oficina-norte.webp'); vacío = espacio reservado.
  // `position` (opcional): encuadre de la foto, p. ej. 'top' para mostrar la parte de arriba.
  offices: [
    {
      region: { es: 'Norte', en: 'Northern Mexico' },
      city: 'Monterrey',
      address: '',
      image: '/images/oficina-norte.webp',
      position: 'top',
    },
    { region: { es: 'Bajío', en: 'Bajío' }, city: 'León / Aguascalientes', address: '', image: '/images/oficina-bajio.webp' },
    { region: { es: 'Centro', en: 'Central Mexico' }, city: 'Ciudad de México', address: '', image: '/images/oficina-centro.webp' },
    { region: { es: 'Sureste', en: 'Southeast Mexico' }, city: 'Mérida', address: '', image: '/images/oficina-sureste.webp' },
  ],

  // TODO: agregar perfiles si la firma los tiene (dejar vacío para ocultar).
  social: {
    linkedin: '',
  },

  /**
   * Formulario de contacto.
   * - 'php': usa /contacto.php (guardado en /extras; el formulario está desactivado por ahora). Requiere que el hosting soporte PHP.
   * - Si el hosting no soporta PHP, cambia `endpoint` por la URL de Formspree u otro servicio.
   */
  form: {
    endpoint: '/contacto.php',
  },
};
