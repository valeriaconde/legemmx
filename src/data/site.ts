/**
 * Datos generales de la firma.
 * ⚠️ Revisa los campos marcados con TODO antes de publicar.
 */
export const site = {
  name: 'Legem',
  legalName: 'Legem Attorneys at Law',
  url: 'https://legem.mx',

  // TODO: confirmar el correo que recibe las consultas del formulario y del sitio.
  contactEmail: 'oconde@legem.mx',

  // TODO: agregar teléfono principal si se desea mostrar (formato +52 ...).
  phone: '',

  // TODO: agregar ciudad y dirección de cada oficina.
  // `image`: ruta de la foto de la oficina (ej. '/images/oficina-norte.jpg'); vacío = espacio reservado.
  offices: [
    {
      region: { es: 'Norte', en: 'Northern Mexico' },
      city: 'San Pedro Garza García',
      address: '',
      image: '/images/norte.jpg',
    },
    { region: { es: 'Bajío', en: 'Bajío' }, city: 'Aguascalientes', address: '', image: '' },
    { region: { es: 'Centro', en: 'Central Mexico' }, city: 'Ciudad de México', address: '', image: '' },
    { region: { es: 'Sureste', en: 'Southeast Mexico' }, city: 'Mérida', address: '', image: '' },
  ],

  // TODO: agregar perfiles si la firma los tiene (dejar vacío para ocultar).
  social: {
    linkedin: '',
  },

  /**
   * Formulario de contacto.
   * - 'php': usa /contacto.php (incluido en /public). Requiere que el hosting soporte PHP.
   * - Si el hosting no soporta PHP, cambia `endpoint` por la URL de Formspree u otro servicio.
   */
  form: {
    endpoint: '/contacto.php',
  },
};
