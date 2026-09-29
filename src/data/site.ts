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
  offices: [
    { region: { es: 'Norte', en: 'Northern Mexico' }, city: '', address: '' },
    { region: { es: 'Bajío', en: 'Bajío' }, city: '', address: '' },
    { region: { es: 'Centro', en: 'Central Mexico' }, city: '', address: '' },
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
