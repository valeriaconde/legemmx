import type { Lang } from './routes';

/**
 * Textos de la interfaz (menús, botones, etiquetas) en ambos idiomas.
 * Para cambiar un texto, edítalo aquí y se actualiza en todo el sitio.
 */
export const ui = {
  es: {
    'meta.title': 'Legem · Abogados en México — Inversión extranjera, corporativo, litigio y cumplimiento',
    'meta.description':
      'Firma legal mexicana especializada en inversión extranjera, derecho corporativo, litigio, cumplimiento normativo y seguros. Atención en español e inglés.',
    'nav.about': 'Firma',
    'nav.areas': 'Áreas de práctica',
    'nav.team': 'Equipo',
    'nav.publications': 'Publicaciones',
    'nav.contact': 'Contacto',
    'nav.cta': 'Hablemos',
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar',
    'nav.skip': 'Saltar al contenido',
    'nav.allAreas': 'Ver todas las áreas',
    'lang.switch': 'English',
    'lang.short': 'EN',

    'common.learnMore': 'Conocer más',
    'common.viewAll': 'Ver todo',
    'common.readMore': 'Leer',
    'common.back': 'Volver',
    'common.download': 'Descargar PDF',
    'common.openPdf': 'Abrir PDF',
    'common.empty': 'Aún no hay publicaciones en esta sección.',
    'common.imagePending': 'Imagen pendiente',
    'pub.pending': 'El contenido completo estará disponible muy pronto.',
    'pub.pending.pdf': 'Mientras tanto, puede consultar el documento completo en PDF.',
    'pub.pending.contact': 'Si necesita más información sobre este tema, con gusto le atendemos.',

    'footer.tagline': 'Certeza legal para hacer negocios en México.',
    'footer.firm': 'Firma',
    'footer.areas': 'Áreas',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',

    'home.hero.title': 'Certeza legal para hacer negocios en México.',
    'home.hero.lead':
      'Brindamos servicios de consultoría legal de negocios a empresas nacionales y extranjeras, con énfasis en la apertura y expansión de operaciones en México, con los más altos estándares de ética profesional, calidad y excelencia.',
    'home.hero.secondary': 'Ver áreas de práctica',
    'home.hero.meta1': 'Norte · Bajío · Centro · Sureste de México',
    'home.hero.meta2': 'Español / English',

    'home.stats.areas': 'Áreas de práctica',
    'home.stats.specialties': 'Especialidades legales',
    'home.stats.lawyers': 'Abogados especialistas',
    'home.stats.regions': 'Regiones con oficinas',
    'home.stats.clients': 'Clientes permanentes',
    'home.stats.countries': 'Países con presencia',

    'home.intro.label': 'La firma',
    'home.intro.statement':
      'Somos una firma de consultoría legal de negocios con más de 25 años de experiencia dedicada al crecimiento de la inversión extranjera en México.',
    'home.intro.body':
      'Brindamos servicios de excelencia con altos estándares de ética para que nuestros clientes desarrollen sus actividades y proyectos de expansión de negocios.',
    'home.intro.cta': 'Conoce la firma',

    'home.areas.label': 'Áreas de práctica',
    'home.areas.title': 'Un solo equipo para cada etapa de su operación en México.',

    'home.why.label': 'Por qué Legem',
    'home.why.title': 'Lo que nos distingue',
    'home.why.1.title': 'Experiencia y dominio',
    'home.why.1.body': 'Equipo de abogados especializados en cada área del derecho empresarial.',
    'home.why.2.title': 'Presencia global',
    'home.why.2.body': 'Cobertura nacional y alcance internacional con oficinas en México y una red de firmas aliadas en el extranjero.',
    'home.why.3.title': 'Prestigio y reconocimiento',
    'home.why.3.body': 'Galardonados nacional e internacionalmente por entidades especializadas.',
    'home.why.4.title': 'Inmediatez y excelencia',
    'home.why.4.body':
      'Atención oportuna y soluciones claras orientadas a proteger sus intereses.',

    'home.industries.label': 'Sectores',
    'home.industries.title':
      'Asesoramos empresas en distintos sectores, entre los que destacan:',
    'home.industries.list': 'Automotriz,Metalúrgica,Mecánica,Industrial,Comercial,Servicios,Salud,Construcción,Energía,Transporte,Petroquímica,Aeroespacial,Marítimo',

    'home.team.label': 'Nuestro equipo',
    'home.team.title': 'Lo más valioso de nuestra firma es nuestro equipo humano.',
    'home.team.body':
      'Especialistas en litigio, derecho empresarial, cumplimiento normativo, propiedad intelectual y seguros, entre otros.',
    'home.team.count': 'Especialistas',
    'home.team.cta': 'Conoce al equipo',

    'home.pubs.label': 'Publicaciones',
    'home.pubs.title': 'Boletines y análisis',
    'home.pubs.cta': 'Ver publicaciones',

    'cta.title': '¿Planea invertir u operar en México?',
    'cta.button': 'Hablemos',

    'about.label': 'Nosotros',
    'about.title': 'Una firma de consultoría legal de negocios al servicio del crecimiento de nuestros clientes.',
    'about.lead':
      'Con cobertura en los principales clústeres geográficos y sectoriales del país.',
    'about.practice.label': 'Práctica',
    'about.values.label': 'Nuestros principios',
    'about.values.1.title': 'La firma',
    'about.values.1.body':
      'Profesionales especializados en diversas disciplinas del Derecho, brindando nuestros servicios en todo momento con los más altos estándares de ética profesional, calidad y excelencia.',
    'about.values.2.title': 'Nuestro compromiso',
    'about.values.2.body':
      'Apoyar el crecimiento de nuestros clientes a través de la prestación oportuna de servicios legales.',
    'about.values.3.title': 'Asesoría a empresas',
    'about.values.3.body':
      'En toda clase de operaciones comerciales, con amplia experiencia en la realización de auditorías legales.',
    'about.offices.label': 'Presencia',
    'about.offices.title': 'Oficinas en regiones estratégicas de México',
    'about.offices.body': 'Nuestras oficinas en Monterrey, Ciudad de México, León, Aguascalientes y Mérida están ubicadas en los principales polos de inversión y crecimiento industrial del país. Esta presencia nos permite acompañar a nuestros clientes donde se concentran el nearshoring, la manufactura avanzada, la industria automotriz, la logística y las nuevas oportunidades del sureste mexicano, con conocimiento directo de cada región.',

    'team.label': 'Abogados',
    'team.title': 'Nuestros líderes',
    'team.lead':
      'Conoce a las personas que lideran nuestras áreas de práctica. Cada una cuenta con un equipo de abogados y especialistas que trabaja a su lado.',
    'team.note.title': 'Y un equipo completo detrás de cada área.',
    'team.bio': 'Ver trayectoria',
    'team.back': 'Abogados',
    'team.bio.experience': 'Experiencia profesional',
    'team.bio.background': 'Trayectoria',
    'team.bio.education': 'Formación',
    'team.area': 'Área',
    'team.email': 'Correo',

    'areas.label': 'Áreas de práctica',
    'areas.title': 'Especialización en cada materia que su empresa necesita.',
    'areas.lead':
      'Cuatro áreas de práctica que trabajan de forma coordinada para ofrecer un servicio integral.',
    'areas.contactTitle': '¿Necesita asesoría en esta materia?',

    'pubs.label': 'Publicaciones',
    'pubs.title': 'Análisis legal para decisiones de negocio.',
    'pubs.lead':
      'Boletines y artículos de la firma sobre los cambios legales que impactan a las empresas en México.',
    'pubs.boletines': 'Boletines',
    'pubs.articulos': 'Artículos',
    'pubs.boletines.lead': 'Actualizaciones sobre reformas y cambios regulatorios en México.',
    'pubs.articulos.lead': 'Artículos de análisis escritos por los abogados de la firma.',
    'pubs.pdfFallback': 'Su navegador no puede mostrar el PDF aquí.',

    'contact.label': 'Contacto',
    'contact.title': 'Hablemos de su proyecto.',
    'contact.form.name': 'Nombre completo',
    'contact.form.company': 'Empresa (opcional)',
    'contact.form.email': 'Correo electrónico',
    'contact.form.phone': 'Teléfono (opcional)',
    'contact.form.area': 'Área de interés',
    'contact.form.areaPlaceholder': 'Seleccione una opción',
    'contact.form.areaOther': 'Otro / No estoy seguro',
    'contact.form.message': 'Mensaje',
    'contact.form.consent': 'He leído y acepto el',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.sending': 'Enviando…',
    'contact.form.success': 'Gracias. Recibimos su mensaje y le responderemos a la brevedad.',
    'contact.form.error':
      'No pudimos enviar su mensaje. Por favor intente de nuevo o escríbanos directamente por correo.',
    'contact.form.required': 'Campo obligatorio',
    'contact.direct': 'Contacto directo',
    'contact.offices': 'Oficinas',

    '404.title': 'Página no encontrada',
    '404.body': 'La página que busca no existe o fue movida.',
    '404.cta': 'Ir al inicio',
  },
  en: {
    'meta.title': 'Legem · Attorneys at Law in Mexico — Foreign investment, corporate, litigation & compliance',
    'meta.description':
      'Mexican law firm specialized in foreign investment, corporate law, litigation, compliance and insurance. Service in English and Spanish.',
    'nav.about': 'Firm',
    'nav.areas': 'Practice areas',
    'nav.team': 'Team',
    'nav.publications': 'Publications',
    'nav.contact': 'Contact',
    'nav.cta': 'Let’s talk',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'nav.skip': 'Skip to content',
    'nav.allAreas': 'See all practice areas',
    'lang.switch': 'Español',
    'lang.short': 'ES',

    'common.learnMore': 'Learn more',
    'common.viewAll': 'View all',
    'common.readMore': 'Read',
    'common.back': 'Back',
    'common.download': 'Download PDF',
    'common.openPdf': 'Open PDF',
    'common.empty': 'There are no publications in this section yet.',
    'common.imagePending': 'Image pending',
    'pub.pending': 'The full content will be available very soon.',
    'pub.pending.pdf': 'In the meantime, you can read the complete document in PDF.',
    'pub.pending.contact': 'If you need more information on this topic, we will be glad to help.',

    'footer.tagline': 'Legal certainty for doing business in Mexico.',
    'footer.firm': 'Firm',
    'footer.areas': 'Practice areas',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',

    'home.hero.title': 'Legal certainty for doing business in Mexico.',
    'home.hero.lead':
      'We provide business legal consulting services to Mexican and foreign companies, with an emphasis on the opening and expansion of operations in Mexico, with the highest standards of professional ethics, quality and excellence.',
    'home.hero.secondary': 'Explore practice areas',
    'home.hero.meta1': 'Northern · Bajío · Central · Southeast Mexico',
    'home.hero.meta2': 'English / Español',

    'home.stats.areas': 'Practice areas',
    'home.stats.specialties': 'Legal specialties',
    'home.stats.lawyers': 'Specialized attorneys',
    'home.stats.regions': 'Regions with offices',
    'home.stats.clients': 'Permanent clients',
    'home.stats.countries': 'Countries with presence',

    'home.intro.label': 'The firm',
    'home.intro.statement': 'We are a legal business consulting firm with more than 25 years of experience dedicated to the growth of foreign investment in Mexico.',
    'home.intro.body':
      'We provide excellence-driven services with high ethical standards, enabling our clients to carry out their activities and business expansion projects.',
    'home.intro.cta': 'About the firm',

    'home.areas.label': 'Practice areas',
    'home.areas.title': 'One team for every stage of your operation in Mexico.',

    'home.why.label': 'Why Legem',
    'home.why.title': 'What sets us apart',
    'home.why.1.title': 'Expertise & proficiency',
    'home.why.1.body': 'A team of attorneys specialized in every area of business law.',
    'home.why.2.title': 'Global presence',
    'home.why.2.body': 'Nationwide coverage and international reach, with offices in Mexico and a network of partner firms abroad.',
    'home.why.3.title': 'Reputation and recognition',
    'home.why.3.body': 'Recognized with national and international awards by specialized institutions.',
    'home.why.4.title': 'Immediacy and excellence',
    'home.why.4.body':
      'Timely attention and clear solutions focused on protecting your interests.',

    'home.industries.label': 'Industries',
    'home.industries.title': 'We advise companies across a range of industries, including:',
    'home.industries.list': 'Automotive,Metallurgic,Mechanic,Industrial,Commercial,Services,Healthcare,Construction,Energy,Transportation,Petrochemicals,Aerospace,Maritime',

    'home.team.label': 'Our team',
    'home.team.title': 'The most valuable asset of our firm is our people.',
    'home.team.body':
      'Specialists in litigation, business law, compliance, intellectual property and insurance, among others.',
    'home.team.count': 'Specialists',
    'home.team.cta': 'Meet the team',

    'home.pubs.label': 'Publications',
    'home.pubs.title': 'Newsletters and insights',
    'home.pubs.cta': 'View publications',

    'cta.title': 'Planning to invest or operate in Mexico?',
    'cta.button': "Let's talk",

    'about.label': 'About us',
    'about.title': 'A business legal consulting firm committed to the growth of our clients.',
    'about.lead':
      'Covering strong geographic and sectoral clusters in the country.',
    'about.practice.label': 'Practice',
    'about.values.label': 'Our principles',
    'about.values.1.title': 'Our firm',
    'about.values.1.body':
      'Professionals specialized in different areas of law, providing our services at all times with the highest standards of professional ethics, quality and excellence.',
    'about.values.2.title': 'Our commitment',
    'about.values.2.body': 'To support the growth of our clients through the provision of timely legal services.',
    'about.values.3.title': 'Business advisory',
    'about.values.3.body':
      'On all kinds of commercial transactions, with extensive experience in conducting legal audits.',
    'about.offices.label': 'Presence',
    'about.offices.title': 'Offices in strategic regions of Mexico',
    'about.offices.body': 'Our offices in Monterrey, Mexico City, León, Aguascalientes and Mérida are located in Mexico’s leading investment and industrial growth hubs. This presence allows us to support our clients where nearshoring, advanced manufacturing, the automotive industry, logistics and the emerging opportunities of southeastern Mexico are concentrated, with first-hand knowledge of each region.',

    'team.label': 'Attorneys',
    'team.title': 'Our Leadership',
    'team.lead':
      'Meet the people who lead our practice areas. Each one works alongside a team of attorneys and specialists.',
    'team.note.title': 'And a full team behind every area.',
    'team.bio': 'View background',
    'team.back': 'Attorneys',
    'team.bio.experience': 'Professional experience',
    'team.bio.background': 'Background',
    'team.bio.education': 'Education',
    'team.area': 'Area',
    'team.email': 'Email',

    'areas.label': 'Practice areas',
    'areas.title': 'Specialized counsel in every matter your company needs.',
    'areas.lead':
      'Four practice areas working together to provide an integral service.',
    'areas.contactTitle': 'Need advice on this matter?',

    'pubs.label': 'Publications',
    'pubs.title': 'Legal insight for business decisions.',
    'pubs.lead':
      'Newsletters and articles on the legal changes that affect companies doing business in Mexico.',
    'pubs.boletines': 'Newsletters',
    'pubs.articulos': 'Articles',
    'pubs.boletines.lead': 'Updates on legal reforms and regulatory changes in Mexico.',
    'pubs.articulos.lead': 'Analysis written by the firm’s attorneys.',
    'pubs.pdfFallback': 'Your browser can’t display the PDF here.',

    'contact.label': 'Contact',
    'contact.title': 'Let’s talk about your project.',
    'contact.form.name': 'Full name',
    'contact.form.company': 'Company (optional)',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone (optional)',
    'contact.form.area': 'Area of interest',
    'contact.form.areaPlaceholder': 'Select an option',
    'contact.form.areaOther': 'Other / Not sure',
    'contact.form.message': 'Message',
    'contact.form.consent': 'I have read and accept the',
    'contact.form.submit': 'Send message',
    'contact.form.sending': 'Sending…',
    'contact.form.success': 'Thank you. We received your message and will reply shortly.',
    'contact.form.error': 'We couldn’t send your message. Please try again or email us directly.',
    'contact.form.required': 'Required field',
    'contact.direct': 'Direct contact',
    'contact.offices': 'Offices',

    '404.title': 'Page not found',
    '404.body': 'The page you are looking for doesn’t exist or has moved.',
    '404.cta': 'Go to homepage',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui.es[key];
  };
}
