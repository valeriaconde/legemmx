/**
 * Áreas de práctica y especialidades.
 * Textos tomados del sitio actual (legem.mx) en español e inglés.
 * `image`: ruta a una foto en /public/images (déjalo vacío para mostrar un espacio reservado).
 */
type L = { es: string; en: string };

export interface Specialty {
  id: string;
  name: L;
  body: L;
}

export interface PracticeArea {
  id: string;
  slug: L;
  name: L;
  summary: L;
  image: string;
  specialties: Specialty[];
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'consultiva',
    slug: { es: 'consultiva', en: 'advisory' },
    name: { es: 'Consultiva', en: 'Advisory' },
    summary: {
      es: 'La firma brinda asesoría a empresas nacionales y extranjeras en todos los aspectos corporativos que les atañen: legislación aplicable en materia de inversión extranjera, regulación migratoria, y derechos y obligaciones de los distintos órganos sociales y gobiernos corporativos.',
      en: 'The firm advises Mexican and foreign companies on every corporate matter that affects their business, especially legislation applicable to foreign investment, immigration regulation, and the rights and obligations of corporate bodies and corporate governance.',
    },
    image: '',
    specialties: [
      {
        id: 'corporativo',
        name: { es: 'Derecho Corporativo', en: 'Corporate Law' },
        body: {
          es: 'Nuestros abogados brindan asesoría en relación con todos los aspectos legales que atañen a la empresa, desde su constitución hasta la instrumentación de actos y contratos encaminados al inicio de actividades y el sostenimiento de operaciones.',
          en: 'Our lawyers advise on all legal aspects affecting companies, from incorporation to the acts and contracts required to start activities and sustain corporate operations.',
        },
      },
      {
        id: 'inversion-extranjera',
        name: { es: 'Inversión Extranjera', en: 'Foreign Investment' },
        body: {
          es: 'Asesoría en relación con las actividades económicas y adquisiciones con regulación específica dentro del marco legal que regula la inversión extranjera, así como en el cumplimiento de los requisitos aplicables.',
          en: 'Advice on economic activities and acquisitions subject to specific regulation under the legal framework governing foreign investment, helping clients comply with all applicable requirements.',
        },
      },
      {
        id: 'fusiones-adquisiciones',
        name: { es: 'Fusiones, Adquisiciones y Co-inversiones', en: 'Mergers, Acquisitions & Joint Ventures' },
        body: {
          es: 'Nuestros abogados han participado en diversos procesos de fusiones, adquisiciones y co-inversiones, asesorando a compañías extranjeras en la celebración de alianzas estratégicas con empresas mexicanas y en operaciones para adquirir participaciones minoritarias y mayoritarias en ellas.',
          en: 'Our lawyers have been involved in several mergers, acquisitions and joint ventures, advising foreign companies on strategic alliances with Mexican companies and on acquiring minority and majority stakes in them.',
        },
      },
      {
        id: 'banca-credito',
        name: { es: 'Banca y Crédito', en: 'Banking & Finance' },
        body: {
          es: 'Asesoría a instituciones bancarias mexicanas y extranjeras en la estructuración y reestructuración de financiamientos y en las negociaciones encaminadas al cierre de dichas operaciones.',
          en: 'Advice to Mexican and foreign banking institutions on structuring and restructuring financings and on the negotiations leading to the closing of such transactions.',
        },
      },
      {
        id: 'comercio-exterior',
        name: { es: 'Comercio Exterior', en: 'International Trade' },
        body: {
          es: 'Asesoría a clientes nacionales y extranjeros en materia de comercio exterior, incluyendo los diversos programas gubernamentales enfocados a la importación y exportación de productos, así como su instrumentación.',
          en: 'Advice to Mexican and foreign clients on international trade, including government programs focused on the import and export of products and their implementation.',
        },
      },
      {
        id: 'migratoria',
        name: { es: 'Regulación Migratoria', en: 'Immigration' },
        body: {
          es: 'Asesoría sobre las calidades y características migratorias aplicables a personas extranjeras que pretenden ingresar al país, y apoyo en la preparación y presentación de la documentación ante el Instituto Nacional de Migración para obtener su legal estancia.',
          en: 'Advice on the immigration status applicable to foreign nationals entering Mexico, and support preparing and filing documents before the National Immigration Institute to obtain legal stay.',
        },
      },
      {
        id: 'propiedad-industrial',
        name: { es: 'Propiedad Industrial', en: 'Industrial Property' },
        body: {
          es: 'Obtención de registros de marcas ante el Instituto Mexicano de la Propiedad Industrial y asesoría sobre nombres comerciales, diseños, modelos industriales, derechos de autor, licencias de uso de marcas y protección de información confidencial y secretos comerciales.',
          en: 'Trademark registrations before the Mexican Industrial Property Institute, and advice on trade names, designs, industrial models, copyrights, trademark licenses and the protection of confidential information and trade secrets.',
        },
      },
      {
        id: 'laboral',
        name: { es: 'Legislación Laboral', en: 'Labor & Employment' },
        body: {
          es: 'Asesoría en materia laboral, incluyendo la estructuración de las relaciones laborales con el personal y la elaboración de los contratos que regulan dichas relaciones.',
          en: 'Advice on labor matters, including structuring employment relationships and drafting the contracts that govern them.',
        },
      },
      {
        id: 'inmobiliario',
        name: { es: 'Inmobiliario', en: 'Real Estate' },
        body: {
          es: 'Asesoría en la adquisición de inmuebles, financiamientos, derechos de propiedad y arrendamientos, así como en la adquisición de inmuebles por parte de extranjeros.',
          en: 'Advice on real estate acquisitions, financing, property rights and leases, including the acquisition of real estate by foreigners.',
        },
      },
      {
        id: 'ambiental',
        name: { es: 'Legislación Ambiental', en: 'Environmental Law' },
        body: {
          es: 'Asesoría a empresas con operaciones en México para que contribuyan a la preservación del equilibrio ecológico y la protección al ambiente, y atención a cualquier requerimiento de las autoridades ambientales mexicanas.',
          en: 'Advice to companies operating in Mexico so their operations preserve the ecological balance and protect the environment, and support with any requirement from Mexican environmental authorities.',
        },
      },
    ],
  },
  {
    id: 'contenciosa',
    slug: { es: 'contenciosa', en: 'litigation' },
    name: { es: 'Contenciosa', en: 'Litigation' },
    summary: {
      es: 'Nuestros abogados cuentan con experiencia en litigio civil, mercantil, penal, familiar, administrativo y de amparo, ejerciendo en la competencia local o federal, ante tribunales judiciales, administrativos y autoridades gubernamentales.',
      en: 'Our lawyers have extensive experience in civil, commercial, criminal, family, administrative and amparo litigation, practicing in local and federal jurisdictions before judicial and administrative courts and government authorities.',
    },
    image: '',
    specialties: [
      {
        id: 'civil',
        name: { es: 'Civil', en: 'Civil' },
        body: {
          es: 'Cualquier controversia contractual derivada de operaciones de compraventa, donación, arrendamiento, servicios profesionales, mutuo, prenda e hipoteca, así como conflictos relacionados con la posesión y propiedad de bienes inmuebles.',
          en: 'Any contractual dispute arising from sales, donations, leases, professional services, loans, pledges or mortgages, as well as conflicts related to the possession and ownership of real estate.',
        },
      },
      {
        id: 'mercantil',
        name: { es: 'Mercantil', en: 'Commercial' },
        body: {
          es: 'Litigio en concursos mercantiles (suspensión de pagos y quiebras); contratos mercantiles; créditos con garantía hipotecaria o prendaria; seguros y fianzas; y atención judicial o extrajudicial de deuda documentada en pagarés, cheques y facturas.',
          en: 'Litigation in insolvency proceedings (suspension of payments and bankruptcy); commercial contracts; secured loans; insurance and bonds; and judicial or out-of-court collection of debt documented in promissory notes, checks and invoices.',
        },
      },
      {
        id: 'familiar',
        name: { es: 'Familiar', en: 'Family' },
        body: {
          es: 'Controversias relacionadas con el núcleo familiar: divorcios, nulidades de matrimonio, separación provisional de cónyuges, paternidad, filiación, alimentos y sucesiones.',
          en: 'Family law matters, including divorce, marriage annulment, legal separation, paternity, filiation, child support and successions.',
        },
      },
      {
        id: 'penal',
        name: { es: 'Penal', en: 'Criminal' },
        body: {
          es: 'Defensa de los intereses patrimoniales o personales de personas físicas y morales, nacionales o extranjeras, ante autoridades administrativas y judiciales locales y federales. También ofrecemos servicios de prevención de pérdidas y control de riesgos.',
          en: 'Defense of the patrimonial or personal interests of Mexican or foreign individuals and legal entities before local and federal administrative and judicial authorities. We also offer loss prevention and risk control services.',
        },
      },
      {
        id: 'administrativo',
        name: { es: 'Administrativo', en: 'Administrative' },
        body: {
          es: 'Controversias entre las autoridades administrativas y los particulares, como suspensión, clausura o demolición de obras, licencias de uso de suelo, desarrollo de fraccionamientos y, en general, cualquier controversia con autoridades municipales, estatales y federales.',
          en: 'Disputes between administrative authorities and private parties, such as suspension, closure or demolition of works, land-use licenses, residential developments and, in general, any dispute with municipal, state or federal authorities.',
        },
      },
      {
        id: 'amparo',
        name: { es: 'Amparo', en: 'Amparo (Constitutional)' },
        body: {
          es: 'La práctica continua en este campo nos permite diseñar la defensa de nuestros clientes ante actos u omisiones de cualquier autoridad que afecte sus derechos fundamentales.',
          en: 'Our continuous practice in this field allows us to design our clients’ defense against acts or omissions of any authority that affect their constitutional rights.',
        },
      },
    ],
  },
  {
    id: 'cumplimiento',
    slug: { es: 'cumplimiento-normativo', en: 'compliance' },
    name: { es: 'Cumplimiento Normativo', en: 'Compliance' },
    summary: {
      es: 'Consultoría y consejo legal para el cumplimiento de regulaciones especializadas y las relacionadas con el régimen interior de las empresas; evaluación de riesgos legales, riesgos de terceras partes (proveedores y clientes) y riesgos reputacionales.',
      en: 'Consulting and legal advice on specialized regulations and internal corporate rules; assessment of legal risks, third-party risks (suppliers and clients) and reputational risks.',
    },
    image: '',
    specialties: [
      {
        id: 'pld',
        name: { es: 'Prevención de Lavado de Dinero', en: 'Anti-Money Laundering' },
        body: {
          es: 'Servicios especializados para orientar a las empresas en el cumplimiento de sus obligaciones: desarrollo de políticas, protocolos de conocimiento de clientes, conservación de información y envío de avisos a las autoridades.',
          en: 'Specialized services to guide companies in meeting their obligations: policy development, know-your-customer protocols, record keeping and filing notices with the authorities.',
        },
      },
      {
        id: 'anticorrupcion',
        name: { es: 'Anticorrupción', en: 'Anti-Corruption' },
        body: {
          es: 'Servicios orientados a fortalecer la integridad y transparencia de empresas y organizaciones: implementación de políticas de ética y cumplimiento, programas de prevención de sobornos y auditorías internas para identificar riesgos de corrupción.',
          en: 'Services to strengthen integrity and transparency in companies and organizations: ethics and compliance policies, bribery prevention programs and internal audits to identify corruption risks.',
        },
      },
      {
        id: 'datos-personales',
        name: { es: 'Protección de Datos Personales', en: 'Personal Data Protection' },
        body: {
          es: 'Implementación de avisos y políticas de privacidad y controles internos para gestionar adecuadamente la información sensible; auditorías de cumplimiento, capacitación del personal y soporte en la gestión de incidentes de seguridad.',
          en: 'Privacy notices, policies and internal controls to properly manage sensitive information; compliance audits, staff training and support in managing security incidents.',
        },
      },
    ],
  },
  {
    id: 'seguros',
    slug: { es: 'seguros-y-riesgos', en: 'insurance-and-risk' },
    name: { es: 'Seguros y Riesgos', en: 'Insurance & Risk' },
    summary: {
      es: 'El departamento de Seguros y Riesgos se especializa en salvaguardar los activos de su empresa y proporcionar soluciones integrales de evaluación y gestión de riesgos adaptadas a sus necesidades específicas. Confíe en nosotros para proteger los activos más valiosos de su empresa.',
      en: 'Our Insurance & Risk department specializes in safeguarding your company’s assets and providing comprehensive risk assessment and management solutions tailored to your specific needs. Trust us to protect your company’s most valuable assets.',
    },
    image: '',
    // TODO: el sitio actual no detalla especialidades para esta área. Agregar cuando se tengan.
    specialties: [
      {
        id: 'proteccion-activos',
        name: { es: 'Protección de activos', en: 'Asset protection' },
        body: {
          es: 'Soluciones para salvaguardar los activos de su empresa.',
          en: 'Solutions to safeguard your company’s assets.',
        },
      },
      {
        id: 'gestion-riesgos',
        name: { es: 'Evaluación y gestión de riesgos', en: 'Risk assessment & management' },
        body: {
          es: 'Soluciones integrales de evaluación y gestión de riesgos adaptadas a sus necesidades específicas.',
          en: 'Comprehensive risk assessment and management solutions tailored to your needs.',
        },
      },
    ],
  },
];

export const specialtyCount = practiceAreas.reduce((n, a) => n + a.specialties.length, 0);

export function getArea(id: string) {
  return practiceAreas.find((a) => a.id === id)!;
}
