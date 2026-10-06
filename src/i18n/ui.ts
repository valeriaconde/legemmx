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
    'nav.team': 'Abogados',
    'nav.publications': 'Publicaciones',
    'nav.contact': 'Contacto',
    'nav.cta': 'Agenda una consulta',
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

    'footer.tagline': 'Certeza legal para hacer negocios en México.',
    'footer.firm': 'Firma',
    'footer.areas': 'Áreas',
    'footer.contact': 'Contacto',
    'footer.privacy': 'Aviso de privacidad',
    'footer.rights': 'Todos los derechos reservados.',

    'home.hero.eyebrow': 'Legem · Attorneys at Law',
    'home.hero.title': 'Certeza legal para hacer negocios en México.',
    'home.hero.lead':
      'Asesoramos a empresas nacionales y extranjeras en inversión, operación corporativa, litigio y cumplimiento normativo, con los más altos estándares de ética profesional, calidad y excelencia.',
    'home.hero.secondary': 'Ver áreas de práctica',
    'home.hero.meta1': 'Norte · Bajío · Centro de México',
    'home.hero.meta2': 'Español / English',

    'home.stats.areas': 'Áreas de práctica',
    'home.stats.specialties': 'Especialidades legales',
    'home.stats.lawyers': 'Abogados especialistas',
    'home.stats.regions': 'Regiones con oficinas',
    'home.stats.clients': 'Clientes permanentes',
    'home.stats.countries': 'Países con presencia',

    'home.intro.label': 'La firma',
    'home.intro.statement':
      'Somos una firma legal con más de 25 años de experiencia dedicada al crecimiento de la inversión extranjera en México.',
    'home.intro.body':
      'Brindamos servicios de excelencia con altos estándares de ética para que nuestros clientes desarrollen sus actividades y proyectos de expansión de negocios.',
    'home.intro.cta': 'Conoce la firma',

    'home.areas.label': 'Áreas de práctica',
    'home.areas.title': 'Un solo equipo para cada etapa de su operación en México.',

    'home.why.label': 'Por qué Legem',
    'home.why.title': 'Lo que nos distingue',
    'home.why.1.title': 'Experiencia y dominio',
    'home.why.1.body': 'Equipo de abogados con posgrado y años de práctica',
    'home.why.2.title': 'Presencia en todo México',
    'home.why.2.body': 'A través de oficinas regionales y firmas aliadas',
    'home.why.3.title': 'Prestigio y reconocimiento',
    'home.why.3.body': 'Galardonados nacional e internacionalmente por entidades especializadas',
    'home.why.4.title': 'Inmediatez y excelencia',
    'home.why.4.body':
      'La inmediatez y la excelencia en nuestros servicios nos distinguen. Un equipo bilingüe que responde a tiempo.',

    'home.industries.label': 'Sectores',
    'home.industries.title':
      'Asesoramos empresas en los sectores industrial, comercial y de servicios.',
    'home.industries.list': 'Automotriz,Metal-mecánica,Industrial,Comercial,Servicios',

    'home.team.label': 'Nuestro equipo',
    'home.team.title': 'Lo más valioso de nuestra firma es nuestro equipo humano.',
    'home.team.body':
      'Abogados bilingües especializados en litigio, derecho corporativo, cumplimiento normativo, propiedad intelectual y seguros.',
    'home.team.cta': 'Conoce a los abogados',

    'home.pubs.label': 'Publicaciones',
    'home.pubs.title': 'Boletines y análisis',
    'home.pubs.cta': 'Ver publicaciones',

    'cta.label': 'Contacto',
    'cta.title': '¿Planea invertir u operar en México?',
    'cta.body':
      'Cuéntenos sobre su proyecto. Un abogado especialista le responderá a la brevedad, en español o inglés.',
    'cta.button': 'Hablemos',

    'about.label': 'Nosotros',
    'about.title': 'Una firma legal al servicio del crecimiento de nuestros clientes.',
    'about.lead':
      'Asesoramos empresas en los sectores industrial, comercial y de servicios, entre los que destacan la industria automotriz y la industria metal-mecánica.',
    'about.practice.label': 'Práctica',
    'about.values.label': 'Nuestros principios',
    'about.values.1.title': 'La firma',
    'about.values.1.body':
      'Profesionales especializados en distintas áreas del Derecho, brindando nuestros servicios en todo momento con los más altos estándares de ética profesional, calidad y excelencia.',
    'about.values.2.title': 'Nuestro compromiso',
    'about.values.2.body':
      'Apoyar el crecimiento de nuestros clientes a través de la prestación oportuna de servicios legales.',
    'about.values.3.title': 'Asesoría a empresas',
    'about.values.3.body':
      'En toda clase de operaciones comerciales, con amplia experiencia en la realización de auditorías legales.',
    'about.offices.label': 'Presencia',
    'about.offices.title': 'Oficinas en el norte, bajío y centro del país.',

    'team.label': 'Abogados',
    'team.title': 'Lo más valioso de nuestra firma es nuestro equipo humano.',
    'team.lead':
      'Quienes integramos Legem estamos comprometidos con trabajar en diversas acciones integrales que definen la actividad de la firma en su totalidad y que implican el diálogo e interacción con nuestros grupos de interés.',
    'team.filter': 'Filtrar por área',
    'team.all': 'Todos',
    'team.languages': 'Idiomas',
    'team.area': 'Área',
    'team.email': 'Correo',
    'team.admin': 'Administración',
    'team.count': 'profesionales',

    'areas.label': 'Áreas de práctica',
    'areas.title': 'Especialización en cada materia que su empresa necesita.',
    'areas.lead':
      'Cuatro áreas de práctica que trabajan de forma coordinada para ofrecer un servicio integral a empresas nacionales y extranjeras.',
    'areas.specialties': 'Especialidades',
    'areas.other': 'Otras áreas de práctica',
    'areas.contactTitle': '¿Necesita asesoría en esta materia?',

    'pubs.label': 'Publicaciones',
    'pubs.title': 'Análisis legal para decisiones de negocio.',
    'pubs.lead':
      'Boletines, artículos y reconocimientos de la firma sobre los cambios legales que impactan a las empresas en México.',
    'pubs.boletines': 'Boletines',
    'pubs.articulos': 'Artículos',
    'pubs.reconocimientos': 'Reconocimientos',
    'pubs.boletines.lead': 'Actualizaciones sobre reformas y cambios regulatorios en México.',
    'pubs.articulos.lead': 'Artículos de análisis escritos por los abogados de la firma.',
    'pubs.reconocimientos.lead': 'Reconocimientos recibidos por la firma y sus abogados.',
    'pubs.pdfFallback': 'Su navegador no puede mostrar el PDF aquí.',

    'contact.label': 'Contacto',
    'contact.title': 'Hablemos de su proyecto.',
    'contact.lead':
      'Escríbanos y un abogado especialista le responderá a la brevedad. Atendemos en español e inglés.',
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

    'privacy.label': 'Legal',
    'privacy.title': 'Aviso de privacidad',

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
    'nav.team': 'Attorneys',
    'nav.publications': 'Publications',
    'nav.contact': 'Contact',
    'nav.cta': 'Book a consultation',
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

    'footer.tagline': 'Legal certainty for doing business in Mexico.',
    'footer.firm': 'Firm',
    'footer.areas': 'Practice areas',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy notice',
    'footer.rights': 'All rights reserved.',

    'home.hero.eyebrow': 'Legem · Attorneys at Law',
    'home.hero.title': 'Legal certainty for doing business in Mexico.',
    'home.hero.lead':
      'We advise Mexican and foreign companies on investment, corporate operations, litigation and compliance, with the highest standards of professional ethics, quality and excellence.',
    'home.hero.secondary': 'Explore practice areas',
    'home.hero.meta1': 'Northern · Bajío · Central Mexico',
    'home.hero.meta2': 'English / Español',

    'home.stats.areas': 'Practice areas',
    'home.stats.specialties': 'Legal specialties',
    'home.stats.lawyers': 'Specialized attorneys',
    'home.stats.regions': 'Regions with offices',
    'home.stats.clients': 'Permanent clients',
    'home.stats.countries': 'Countries with presence',

    'home.intro.label': 'The firm',
    'home.intro.statement': 'We are a law firm with more than 25 years of experience dedicated to the growth of foreign investment in Mexico.',
    'home.intro.body':
      'We provide excellence-driven services with high ethical standards, enabling our clients to carry out their activities and business expansion projects.',
    'home.intro.cta': 'About the firm',

    'home.areas.label': 'Practice areas',
    'home.areas.title': 'One team for every stage of your operation in Mexico.',

    'home.why.label': 'Why Legem',
    'home.why.title': 'What sets us apart',
    'home.why.1.title': 'Expertise & proficiency',
    'home.why.1.body': 'A team of attorneys with advanced degrees and extensive professional experience',
    'home.why.2.title': 'Nationwide presence in Mexico',
    'home.why.2.body': 'Through regional offices and strategic partner firms',
    'home.why.3.title': 'Reputation and recognition',
    'home.why.3.body': 'Recognized with national and international awards by specialized institutions',
    'home.why.4.title': 'Immediacy and excellence',
    'home.why.4.body':
      'The immediacy and excellence of our services set us apart. A bilingual team that responds on time.',

    'home.industries.label': 'Industries',
    'home.industries.title': 'We advise companies in the industrial, commercial and services sectors.',
    'home.industries.list': 'Automotive,Metal-mechanic,Industrial,Commercial,Services',

    'home.team.label': 'Our team',
    'home.team.title': 'The most valuable asset of our firm is our people.',
    'home.team.body':
      'Bilingual attorneys specialized in litigation, corporate law, compliance, intellectual property and insurance.',
    'home.team.cta': 'Meet the attorneys',

    'home.pubs.label': 'Publications',
    'home.pubs.title': 'Newsletters and insights',
    'home.pubs.cta': 'View publications',

    'cta.label': 'Contact',
    'cta.title': 'Planning to invest or operate in Mexico?',
    'cta.body':
      'Tell us about your project. A specialized attorney will get back to you shortly, in English or Spanish.',
    'cta.button': "Let's talk",

    'about.label': 'About us',
    'about.title': 'A law firm committed to the growth of our clients.',
    'about.lead':
      'We advise companies in the industrial, commercial and services sectors, most notably the automotive and metal-mechanic industries.',
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
    'about.offices.title': 'Offices in northern, Bajío and central Mexico.',

    'team.label': 'Attorneys',
    'team.title': 'The most valuable asset of our firm is our people.',
    'team.lead':
      'At Legem, we are committed to working on integrated actions that define the activity of the firm as a whole and that involve dialogue and interaction with our stakeholders.',
    'team.filter': 'Filter by area',
    'team.all': 'All',
    'team.languages': 'Languages',
    'team.area': 'Area',
    'team.email': 'Email',
    'team.admin': 'Administration',
    'team.count': 'professionals',

    'areas.label': 'Practice areas',
    'areas.title': 'Specialized counsel in every matter your company needs.',
    'areas.lead':
      'Four practice areas working together to provide an integral service to Mexican and foreign companies.',
    'areas.specialties': 'Specialties',
    'areas.other': 'Other practice areas',
    'areas.contactTitle': 'Need advice on this matter?',

    'pubs.label': 'Publications',
    'pubs.title': 'Legal insight for business decisions.',
    'pubs.lead':
      'Newsletters, articles and recognitions on the legal changes that affect companies doing business in Mexico.',
    'pubs.boletines': 'Newsletters',
    'pubs.articulos': 'Articles',
    'pubs.reconocimientos': 'Awards',
    'pubs.boletines.lead': 'Updates on legal reforms and regulatory changes in Mexico.',
    'pubs.articulos.lead': 'Analysis written by the firm’s attorneys.',
    'pubs.reconocimientos.lead': 'Recognitions received by the firm and its attorneys.',
    'pubs.pdfFallback': 'Your browser can’t display the PDF here.',

    'contact.label': 'Contact',
    'contact.title': 'Let’s talk about your project.',
    'contact.lead':
      'Write to us and a specialized attorney will get back to you shortly. We work in English and Spanish.',
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

    'privacy.label': 'Legal',
    'privacy.title': 'Privacy notice',

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
