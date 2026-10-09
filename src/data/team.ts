/**
 * Líderes de área de la firma (página /abogados).
 * Esta página muestra únicamente a las personas que dirigen cada área, no a todo el equipo.
 * La plantilla completa original está guardada en `team-completo.ts` (no se usa en el sitio).
 *
 * - `groups`: se usan para el filtro de la página.
 * - `photo`: ruta a una foto en /public/images/equipo/ (vacío = se muestran las iniciales).
 * - `role`: cargo que se muestra en la tarjeta.
 * - `bio`: información del brochure 2026 (se abre en una ventana desde "Ver trayectoria").
 *   Las traducciones al inglés son de Claude: conviene revisarlas.
 */
export type L = { es: string; en: string };

export type TeamGroup = 'consultiva' | 'contenciosa' | 'cumplimiento' | 'seguros' | 'pi' | 'notarial';

export interface Bio {
  experience: L;
  background: L;
  education: { es: string[]; en: string[] };
}

export interface Person {
  name: string;
  role: L;
  groups: TeamGroup[];
  email: string;
  languages: L;
  photo: string;
  bio?: Bio;
}

const bilingual: L = { es: 'Español / Inglés', en: 'Spanish / English' };

export const groupLabels: Record<TeamGroup, L> = {
  consultiva: { es: 'Consultiva', en: 'Advisory' },
  contenciosa: { es: 'Contenciosa', en: 'Litigation' },
  cumplimiento: { es: 'Cumplimiento Normativo', en: 'Compliance' },
  seguros: { es: 'Seguros', en: 'Insurance' },
  pi: { es: 'Propiedad Intelectual', en: 'Intellectual Property' },
  notarial: { es: 'Derecho Notarial', en: 'Notarial Law' },
};

export const team: Person[] = [
  {
    name: 'Oscar Conde Medina',
    role: { es: 'Director Corporativo', en: 'Corporate Director' },
    groups: ['consultiva'],
    email: 'oconde@legem.mx',
    languages: bilingual,
    photo: '/images/equipo/oscarconde.webp',
    bio: {
      experience: {
        es: `Socio Fundador y Director Corporativo de Legem Attorneys at Law, S.C., con 30 años de experiencia en consultoría legal de negocios.`,
        en: `Founding Partner and Corporate Director of Legem Attorneys at Law, S.C., with 30 years of experience in business legal consulting.`,
      },
      background: {
        es: `Abogado especialista en Inversión Extranjera y expansión de negocios que ha participado en diversos procesos de fusiones y adquisiciones de empresas extranjeras y bancos en México (Banorte), así como de emisiones públicas en el mercado de valores (Grupo ARCA).

Reconocido en varias ocasiones por diversas organizaciones especializadas en América y Europa como “Foreign Direct Investment Lawyer of the Year / Mexico”, en 2021 fue incluido en la lista de los 10 líderes más influyentes en servicios legales por Tycoon Success, y ese mismo año recibió el galardón “Forjadores de México”. En 2022 fue admitido como miembro activo de la Legión de Honor Nacional de México.

Actualmente participa regularmente en talleres de negociación avanzada en The Harvard Faculty Club, como miembro activo de la ANADE, y es orador frecuente en foros internacionales sobre inversión extranjera y desarrollo empresarial.`,
        en: `Attorney specialized in Foreign Investment and business expansion who has taken part in numerous mergers and acquisitions of foreign companies and banks in Mexico (Banorte), as well as public offerings on the stock market (Grupo ARCA).

Recognized on several occasions by specialized organizations in the Americas and Europe as “Foreign Direct Investment Lawyer of the Year / Mexico”, he was named one of the 10 most influential leaders in legal services by Tycoon Success in 2021, and that same year received the “Forjadores de México” award. In 2022 he was admitted as an active member of the Legión de Honor Nacional de México.

He currently takes part regularly in advanced negotiation workshops at The Harvard Faculty Club, is an active member of ANADE, and is a frequent speaker at international forums on foreign investment and business development.`,
      },
      education: {
        es: ['Licenciatura en Ciencias Jurídicas', 'Estudios de Maestría en Derecho Mercantil', 'ACE Program – Georgetown University'],
        en: ['Bachelor’s degree in Legal Sciences', 'Master’s studies in Commercial Law', 'ACE Program – Georgetown University'],
      },
    },
  },
  {
    name: 'Fabiola Ordaz de la Rosa',
    role: { es: 'Directora del Área Consultiva', en: 'Head of the Advisory Area' },
    groups: ['consultiva'],
    email: 'fordaz@legem.mx',
    languages: bilingual,
    photo: '/images/equipo/fabiolaordaz.webp',
    bio: {
      experience: {
        es: `Más de 10 años de experiencia en consultoría legal. Colaboradora en Legem Attorneys at Law, S.C., desde 2017 y actualmente Directora del Área Consultiva.`,
        en: `More than 10 years of experience in legal consulting. She has been with Legem Attorneys at Law, S.C. since 2017 and is currently Head of the Advisory Area.`,
      },
      background: {
        es: `Durante su formación académica, realizó estudios en la Universidad de Ciencias Políticas de Lille, en Francia, así como en la Universidad de São Paulo, en Brasil.

Ha trabajado en el área de consultoría y desarrollo de proyectos dentro de la empresa BRASPA, Ltda., en São Paulo, Brasil y, del 2017 a la fecha, se dedica al desarrollo de proyectos en México en materia de derecho empresarial, incluyendo expansión de negocios, inversión extranjera y derecho corporativo, entre otras.

Fabiola realiza regularmente proyectos como Perita Traductora Español<>Inglés para diversas empresas y organizaciones.`,
        en: `During her academic training she studied at the Lille University of Political Science in France and at the University of São Paulo in Brazil.

She worked in consulting and project development at BRASPA, Ltda., in São Paulo, Brazil, and since 2017 has developed projects in Mexico in business law, including business expansion, foreign investment and corporate law, among others.

Fabiola regularly works as a Spanish<>English Certified Translator for a variety of companies and organizations.`,
      },
      education: {
        es: ['Licenciatura en Derecho', 'Maestría en Derecho de los Negocios', 'Perita Traductora Certificada Español<>Inglés – Poder Judicial del Estado de Nuevo León'],
        en: ['Law degree', 'Master’s in Business Law', 'Certified Spanish<>English Translator – Judiciary of the State of Nuevo León'],
      },
    },
  },
  {
    name: 'Juan José Rico',
    role: { es: 'Director del Área Compliance e IP', en: 'Head of Compliance & IP' },
    groups: ['cumplimiento'],
    email: 'jjrico@legem.mx',
    languages: bilingual,
    photo: '/images/equipo/juanjoserico.webp',
    bio: {
      experience: {
        es: `Más de 25 años de experiencia en consultoría legal y Director del Área Compliance y Propiedad Intelectual en Legem Attorneys at Law, S.C. desde 2017.`,
        en: `More than 25 years of experience in legal consulting and Head of the Compliance and Intellectual Property Area at Legem Attorneys at Law, S.C. since 2017.`,
      },
      background: {
        es: `Su experiencia profesional comprende un amplio portafolio de proyectos en la academia, la administración pública, la consultoría política, el sector financiero tanto público como privado, así como los servicios de consultoría jurídica para gobiernos y empresas. Pionero en temas de Compliance en México, desarrolló el área de cumplimiento para uno de los bancos más grandes del mundo.

Reconocido como uno de los abogados disruptivos de México y con una sólida formación académica en México y el extranjero. Actualmente se dedica a la consultoría legal en materia de Propiedad Intelectual, regulación interna de la empresa, datos personales, así como marco legal de los entornos digitales y nuevas tecnologías.`,
        en: `His professional experience spans a broad portfolio of projects in academia, public administration, political consulting, the public and private financial sector, and legal consulting for governments and companies. A pioneer in Compliance in Mexico, he built the compliance function for one of the largest banks in the world.

Recognized as one of Mexico’s disruptive lawyers, with solid academic training in Mexico and abroad. He currently advises on Intellectual Property, internal corporate regulation, personal data, and the legal framework of digital environments and new technologies.`,
      },
      education: {
        es: ['Licenciatura en Derecho', 'Maestría en Justicia Administrativa', 'Maestría en Gestión', 'Doctor en Políticas Públicas'],
        en: ['Law degree', 'Master’s in Administrative Justice', 'Master’s in Management', 'Doctorate in Public Policy'],
      },
    },
  },
  {
    name: 'Carlos García Sánchez',
    role: { es: 'Director del Área de Derecho Corporativo y Bancario', en: 'Head of Corporate & Banking Law' },
    groups: ['consultiva'],
    email: 'cgarcia@legem.mx',
    languages: bilingual,
    photo: '/images/equipo/carlosgarcia.webp',
    bio: {
      experience: {
        es: `Más de 40 años de experiencia en consultoría legal. Abogado especializado en Derecho Corporativo, Empresarial y Bancario. Actualmente Director del área de Derecho Corporativo y Bancario en Legem Attorneys at Law, S.C.`,
        en: `More than 40 years of experience in legal consulting. Attorney specialized in Corporate, Business and Banking Law. Currently Head of the Corporate and Banking Law area at Legem Attorneys at Law, S.C.`,
      },
      background: {
        es: `Ha participado en múltiples transacciones nacionales e internacionales que comprenden gobierno corporativo, reestructuras, capitalizaciones, fusiones y adquisiciones, inversión extranjera, convenios de co-inversión, ingeniería legal corporativa, control negativo, fideicomisos y sociedades especiales.

Cuenta con amplia experiencia en adquisiciones gubernamentales y procesos licitatorios, principalmente con PEMEX y CFE, bajo esquemas de producción independiente de energía, autoabastecimiento, cogeneración, fideicomisos, obra pública e inversión público-privada, y con el gobierno de la Ciudad de México y otros.

Especialista tanto en derecho financiero en operaciones de financiamiento, garantías, fideicomisos, financiamiento de proyectos, reportos y oficinas de representación, como en transacciones inmobiliarias de compraventa, usufructo, arrendamientos industriales, fideicomisos y garantías. La prestigiosa revista Who’s Who le otorgó dos reconocimientos: Abogado del Año en materia legal corporativa (2012) y Experto Global en Derecho Corporativo (2015).`,
        en: `He has taken part in numerous domestic and international transactions involving corporate governance, restructurings, capitalizations, mergers and acquisitions, foreign investment, co-investment agreements, corporate legal engineering, negative control, trusts and special-purpose companies.

He has extensive experience in government procurement and bidding processes, mainly with PEMEX and CFE, under independent power production, self-supply, cogeneration, trust, public works and public-private investment schemes, as well as with the Mexico City government and others.

A specialist in financial law (financing transactions, guarantees, trusts, project finance, repos and representative offices) as well as in real estate transactions (sales, usufruct, industrial leases, trusts and guarantees). The prestigious Who’s Who magazine has granted him two recognitions: Lawyer of the Year in corporate law (2012) and Global Expert in Corporate Law (2015).`,
      },
      education: {
        es: ['Licenciado en Derecho, con estudios en derecho marítimo y operación naviera', 'Posgrados en “Derecho Empresarial”, “Derecho Económico y Corporativo” y “Derecho Financiero Internacional”'],
        en: ['Law degree, with studies in maritime law and shipping operations', 'Postgraduate studies in “Business Law”, “Economic and Corporate Law” and “International Financial Law”'],
      },
    },
  },
  {
    name: 'María Katherina Novoa Gómez',
    role: { es: 'Directora del Área de Litigio Familiar, Civil, Mercantil y Administrativo', en: 'Head of Family, Civil, Commercial & Administrative Litigation' },
    groups: ['contenciosa'],
    email: 'knovoa@legem.mx',
    languages: bilingual,
    photo: '/images/equipo/katherina.webp',
    bio: {
      experience: {
        es: `Más de 30 años de experiencia en litigio familiar, civil y mercantil, incluyendo materia penal y administrativa. Es apoderada de diversas empresas nacionales e internacionales a las cuales ha representado en infinidad de juicios, procurando siempre la protección de sus intereses patrimoniales. Litigante en diversos foros de la República Mexicana, en sistemas oral y escrito, local y federal.`,
        en: `More than 30 years of experience in family, civil and commercial litigation, including criminal and administrative matters. She is legal representative of various domestic and international companies, which she has represented in countless lawsuits, always safeguarding their financial interests. She litigates in courts across Mexico, in oral and written systems, at the local and federal levels.`,
      },
      background: {
        es: `Fungió como asesora jurídica y ponente en la LVII Legislatura de la H. Cámara de Diputados, en la Comisión de Ecología y Medio Ambiente, y en la LXIV Legislatura, como asesora de Diputado y en propuestas de ley.

Fungió como Secretaria Técnica de Consejero del entonces Consejo de la Judicatura de la Ciudad de México. Se desempeñó como Secretaria de estudio y cuenta de Consejera del Consejo de la Judicatura de la Ciudad de México en el periodo 1998-2001.

Asesoró en la creación de los manuales internos de procedimientos administrativos del H. Consejo de la Judicatura de la Ciudad de México.`,
        en: `She served as legal advisor and rapporteur in the 57th Legislature of the Chamber of Deputies, on the Ecology and Environment Committee, and in the 64th Legislature as advisor to a Deputy and on legislative proposals.

She served as Technical Secretary to a Councilor of the then Judicial Council of Mexico City, and as Secretary of study and reporting to a Councilor of the Mexico City Judicial Council from 1998 to 2001.

She advised on the creation of the internal administrative procedure manuals of the Mexico City Judicial Council.`,
      },
      education: {
        es: ['Licenciada en Derecho', 'Maestra en Derecho Civil', 'Doctora en Derecho por la Universidad de San Sebastián, España'],
        en: ['Law degree', 'Master’s in Civil Law', 'Doctorate in Law, Universidad de San Sebastián, Spain'],
      },
    },
  },
  {
    name: 'José Rolando Navarro Cruz',
    role: { es: 'Director del Área Contenciosa y Litigio Oral Penal', en: 'Head of Litigation & Oral Criminal Trials' },
    groups: ['contenciosa'],
    email: 'rnavarro@legem.mx',
    languages: bilingual,
    photo: '/images/equipo/rolandonavarro.webp',
    bio: {
      experience: {
        es: `32 años de experiencia en el litigio contencioso en las materias civil, mercantil, familiar, penal y amparo; en la actualidad se ha especializado en el litigio del sistema penal acusatorio y adversarial.`,
        en: `32 years of experience in contentious litigation in civil, commercial, family, criminal and amparo matters; he is currently specialized in litigation under the accusatory and adversarial criminal justice system.`,
      },
      background: {
        es: `Con amplia experiencia en el litigio, ha representado a diversos corporativos y personas físicas, nacionales y extranjeros, brindándoles asesoría y representación integral. En el sistema penal acusatorio cuenta con una amplia cartera de clientes debido al dominio de las audiencias orales que predominan en este sistema.`,
        en: `With extensive litigation experience, he has represented numerous corporations and individuals, both Mexican and foreign, providing comprehensive advice and representation. In the accusatory criminal system he has a broad client portfolio thanks to his command of the oral hearings that predominate in this system.`,
      },
      education: {
        es: ['Licenciado en Derecho', 'Maestría en Derecho Procesal Penal', 'Diplomados en juicio de amparo y sistema penal acusatorio'],
        en: ['Law degree', 'Master’s in Criminal Procedure Law', 'Diploma programs in amparo proceedings and the accusatory criminal system'],
      },
    },
  },
  {
    name: 'Víctor Sánchez Delgado',
    role: { es: 'Director del Área de Litigio Laboral', en: 'Head of Labor Litigation' },
    groups: ['contenciosa'],
    email: 'vsanchez@legem.mx',
    languages: bilingual,
    photo: '/images/equipo/victorsanchez.webp',
    bio: {
      experience: {
        es: `Más de 20 años de experiencia en representación de patrones en procesos individuales y colectivos. Desde su formación académica colaboró en diversos despachos enfocados en litigio y consultoría de derecho del trabajo; actualmente es Director de Litigio Laboral de Legem Attorneys at Law, S.C.`,
        en: `More than 20 years of experience representing employers in individual and collective proceedings. Since his academic training he has worked at several firms focused on labor litigation and consulting; he is currently Head of Labor Litigation at Legem Attorneys at Law, S.C.`,
      },
      background: {
        es: `Abogado especialista en materia del trabajo, especialmente en procesos litigiosos y de amparo, con amplia experiencia en negociaciones, conciliaciones y juicios laborales.

Representante jurídico de diversas empresas nacionales e internacionales, enfocado en soluciones legales estratégicas que generen confianza y resultados positivos para los clientes.`,
        en: `Attorney specialized in labor law, especially in litigation and amparo proceedings, with extensive experience in negotiations, conciliations and labor trials.

Legal representative of various domestic and international companies, focused on strategic legal solutions that build trust and deliver positive results for clients.`,
      },
      education: {
        es: ['Licenciatura en Derecho y Ciencias Sociales'],
        en: ['Bachelor’s degree in Law and Social Sciences'],
      },
    },
  },
  {
    name: 'Luigi Pontones Brito',
    role: { es: 'Director de Derecho Ambiental', en: 'Head of Environmental Law' },
    groups: ['consultiva'],
    email: 'lpontones@legem.mx',
    languages: bilingual,
    photo: '/images/equipo/luigipontones.webp',
    bio: {
      experience: {
        es: `Más de 25 años de experiencia en derecho ambiental y regulatorio, asesorando a empresas nacionales e internacionales en asuntos complejos de cumplimiento, transacciones estratégicas y proyectos impulsados por la sostenibilidad en México y América Latina.`,
        en: `More than 25 years of experience in environmental and regulatory law, advising domestic and international companies on complex compliance matters, strategic transactions and sustainability-driven projects in Mexico and Latin America.`,
      },
      background: {
        es: `Luigi es ampliamente reconocido por su capacidad para diseñar estrategias legales de alto impacto para proyectos sujetos a un intenso escrutinio regulatorio. Su práctica incluye asegurar autorizaciones clave ante agencias federales como SEMARNAT, ASEA y CONAGUA, así como asesorar sobre cambios de uso de suelo forestal, permisos de descarga de aguas residuales y concesiones sobre zonas federales marítimo-terrestres.

Ayuda regularmente a los clientes en transacciones de fusiones y adquisiciones, desarrollos inmobiliarios y proyectos de infraestructura donde la debida diligencia ambiental y el cumplimiento normativo son fundamentales para las decisiones de inversión. Su enfoque proactivo en las negociaciones con las autoridades y su capacidad para alinear los objetivos corporativos con los marcos ambientales lo han posicionado como un asesor líder en asuntos complejos intersectoriales. Es reconocido constantemente en publicaciones legales especializadas y clasificaciones internacionales por su excelencia técnica, integridad profesional y los resultados estratégicos logrados para clientes que operan en industrias altamente reguladas.`,
        en: `Luigi is widely recognized for his ability to design high-impact legal strategies for projects under intense regulatory scrutiny. His practice includes securing key authorizations from federal agencies such as SEMARNAT, ASEA and CONAGUA, and advising on forest land-use changes, wastewater discharge permits and concessions over federal maritime-terrestrial zones.

He regularly assists clients in mergers and acquisitions, real estate developments and infrastructure projects where environmental due diligence and regulatory compliance are critical to investment decisions. His proactive approach to negotiations with government authorities and his ability to align corporate objectives with environmental frameworks have positioned him as a leading advisor on complex cross-sector matters. He is consistently recognized in specialized legal publications and international rankings for his technical excellence, professional integrity and the strategic results achieved for clients operating in highly regulated industries.`,
      },
      education: {
        es: ['Licenciatura en Derecho – Universidad Anáhuac del Norte', 'Maestría en Derecho Ambiental – Universidad de Nottingham (Becario del Consejo Británico)', 'Estudios avanzados en derecho internacional y ambiental'],
        en: ['Law degree – Universidad Anáhuac del Norte', 'Master’s in Environmental Law – University of Nottingham (British Council Scholar)', 'Advanced studies in international and environmental law'],
      },
    },
  },
  {
    name: 'Marisol Conde Medina',
    role: { es: 'Directora del Área de Seguros y Administración de Riesgos', en: 'Head of Insurance & Risk Management' },
    groups: ['seguros'],
    email: 'mconde@legem.mx',
    languages: bilingual,
    photo: '/images/equipo/marisolconde.webp',
    bio: {
      experience: {
        es: `Más de 15 años de experiencia en seguros, inversiones y fianzas, experta en análisis de riesgos y diseño de estrategias financieras; actualmente directora del área de Riesgos en Legem Attorneys at Law, S.C.`,
        en: `More than 15 years of experience in insurance, investments and surety bonds, an expert in risk analysis and financial strategy design; currently Head of the Risk area at Legem Attorneys at Law, S.C.`,
      },
      background: {
        es: `Ha desarrollado su carrera gestionando seguros de personas y de daños con enfoque empresarial o colectivo, incluyendo pólizas de Vida, Gastos Médicos, Accidentes Laborales, Seguros de Automóviles para flotillas, protección de inmuebles y mercancías (incendio, transporte) y Seguros de Responsabilidad Civil y Riesgos especializados.

Actualmente intermedia, gestiona y comercializa contratos de seguros y fianzas (fiscales, judiciales, administrativas, de crédito, entre otras) con aseguradoras y afianzadoras nacionales e internacionales, garantizando soluciones óptimas para los grandes corporativos que son nuestros clientes.`,
        en: `She has built her career managing personal and property insurance with a business or group focus, including Life, Major Medical Expenses, Workplace Accident policies, fleet Auto Insurance, protection of real estate and goods (fire, transport), and Civil Liability and specialized Risk insurance.

She currently brokers, manages and markets insurance and surety contracts (tax, judicial, administrative, credit, among others) with domestic and international insurers and surety companies, ensuring optimal solutions for our large corporate clients.`,
      },
      education: {
        es: ['Licenciatura en Administración y Negocios Internacionales', 'Cédula A – Agente de Seguros en el ramo de Vida, Accidentes y Enfermedades', 'Cédula B – Agente de Seguros en el ramo de Daños y Autos', 'Cédula D – Agente de Fianzas'],
        en: ['Bachelor’s degree in Business Administration and International Business', 'License A – Insurance Agent, Life, Accident and Health lines', 'License B – Insurance Agent, Property and Auto lines', 'License D – Surety Agent'],
      },
    },
  },
];

/** Compatibilidad con las vistas existentes (inicio, áreas de práctica y /abogados). */
export const attorneys = team;

export function initials(name: string) {
  const parts = name.replace(/[^\p{L}\s]/gu, '').split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '')).toUpperCase();
}
