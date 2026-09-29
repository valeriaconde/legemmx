/**
 * Equipo de la firma (tomado de legem.mx/abogados).
 * - `groups`: se usan para el filtro de la página de abogados.
 * - `photo`: ruta a una foto en /public/images/equipo/ (vacío = se muestran las iniciales).
 * - `admin: true` = personal administrativo (se muestra en una sección aparte).
 */
type L = { es: string; en: string };

export type TeamGroup = 'consultiva' | 'contenciosa' | 'cumplimiento' | 'seguros' | 'pi' | 'notarial';

export interface Person {
  name: string;
  area: L;
  groups: TeamGroup[];
  email: string;
  languages: L;
  photo: string;
  admin?: boolean;
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
  { name: 'Oscar Conde Medina', area: { es: 'Consultiva', en: 'Advisory' }, groups: ['consultiva'], email: 'oconde@legem.mx', languages: bilingual, photo: '' },
  { name: 'Fabiola Ordaz de la Rosa', area: { es: 'Consultiva', en: 'Advisory' }, groups: ['consultiva'], email: 'fordaz@legem.mx', languages: bilingual, photo: '' },
  { name: 'Rubén Gabriel C. Alvarez Alanis', area: { es: 'Consultiva', en: 'Advisory' }, groups: ['consultiva'], email: 'ralvarez@legem.mx', languages: bilingual, photo: '' },
  { name: 'José Rolando Navarro Cruz', area: { es: 'Contenciosa / Penal', en: 'Litigation / Criminal' }, groups: ['contenciosa'], email: 'rnavarro@legem.mx', languages: bilingual, photo: '' },
  { name: 'Luis Carlos Maldonado Lazos', area: { es: 'Contenciosa', en: 'Litigation' }, groups: ['contenciosa'], email: 'lmaldonado@legem.mx', languages: bilingual, photo: '' },
  { name: 'Juan José Rico', area: { es: 'Consultiva / Cumplimiento Normativo', en: 'Advisory / Compliance' }, groups: ['consultiva', 'cumplimiento'], email: 'jjrico@legem.mx', languages: bilingual, photo: '' },
  { name: 'María Katherina Novoa Gómez', area: { es: 'Contenciosa / Penal', en: 'Litigation / Criminal' }, groups: ['contenciosa'], email: 'knovoa@legem.mx', languages: bilingual, photo: '' },
  { name: 'Javier Rodolfo Villalpando Castillo', area: { es: 'Contenciosa / Penal', en: 'Litigation / Criminal' }, groups: ['contenciosa'], email: 'rvillalpando@legem.mx', languages: bilingual, photo: '' },
  { name: 'Jesús Reyes Santillán', area: { es: 'Consultiva', en: 'Advisory' }, groups: ['consultiva'], email: 'jreyes@legem.mx', languages: bilingual, photo: '' },
  { name: 'Marisol Conde Medina', area: { es: 'Asesoría de Seguros', en: 'Insurance Advisory' }, groups: ['seguros'], email: 'mconde@legem.mx', languages: bilingual, photo: '' },
  { name: 'José Aurelio Loyo Ochoa', area: { es: 'Asesoría de Seguros', en: 'Insurance Advisory' }, groups: ['seguros'], email: 'aloyo@legem.mx', languages: bilingual, photo: '' },
  { name: 'Leopoldo Ángeles González', area: { es: 'Contenciosa / Penal', en: 'Litigation / Criminal' }, groups: ['contenciosa'], email: 'langeles@legem.mx', languages: bilingual, photo: '' },
  { name: 'César Santos del Muro Amador', area: { es: 'Consultiva y Derecho Notarial', en: 'Advisory & Notarial Law' }, groups: ['consultiva', 'notarial'], email: 'cdelmuro@legem.mx', languages: bilingual, photo: '' },
  { name: 'David Benjamín Manriquez Sandoval', area: { es: 'Consultiva y Derecho Notarial', en: 'Advisory & Notarial Law' }, groups: ['consultiva', 'notarial'], email: 'dmanriquez@legem.mx', languages: bilingual, photo: '' },
  { name: 'Carlos García Sánchez', area: { es: 'Consultiva', en: 'Advisory' }, groups: ['consultiva'], email: 'cgarcia@legem.mx', languages: bilingual, photo: '' },
  // TODO: en el sitio actual aparece como "ugarcía@legem.mx" (con acento). Confirmar la dirección correcta.
  { name: 'Uriel García González', area: { es: 'Consultiva', en: 'Advisory' }, groups: ['consultiva'], email: 'ugarcia@legem.mx', languages: bilingual, photo: '' },
  { name: 'Luis Miguel Aguilar Coronado', area: { es: 'Consultiva', en: 'Advisory' }, groups: ['consultiva'], email: 'laguilar@legem.mx', languages: bilingual, photo: '' },
  { name: 'Alfonso Martínez Arroyo', area: { es: 'Contenciosa / Administrativo', en: 'Litigation / Administrative' }, groups: ['contenciosa'], email: 'amartinez@legem.mx', languages: bilingual, photo: '' },
  { name: 'José Carlos Alberto Romo López Cruz', area: { es: 'Contenciosa / Fiscal', en: 'Litigation / Tax' }, groups: ['contenciosa'], email: 'jromo@legem.mx', languages: bilingual, photo: '' },
  { name: 'Víctor Sánchez Delgado', area: { es: 'Contenciosa / Laboral', en: 'Litigation / Labor' }, groups: ['contenciosa'], email: 'vsanchez@legem.mx', languages: bilingual, photo: '' },
  { name: 'Fernanda Arévalo Pérez', area: { es: 'Contenciosa / Laboral', en: 'Litigation / Labor' }, groups: ['contenciosa'], email: 'farevalo@legem.mx', languages: bilingual, photo: '' },
  { name: 'Carolina Guzmán Juárez', area: { es: 'Propiedad Intelectual', en: 'Intellectual Property' }, groups: ['pi'], email: 'cguzman@legem.mx', languages: bilingual, photo: '' },
  { name: 'Adriana María Ocañas de León', area: { es: 'Administración', en: 'Administration' }, groups: [], email: 'aocanas@legem.mx', languages: bilingual, photo: '', admin: true },
  { name: 'Karla Edith Esquivel Loera', area: { es: 'Asistente de Administración', en: 'Administrative Assistant' }, groups: [], email: 'administracion@legem.mx', languages: bilingual, photo: '', admin: true },
];

export const attorneys = team.filter((p) => !p.admin);
export const staff = team.filter((p) => p.admin);

export function initials(name: string) {
  const parts = name.replace(/[^\p{L}\s]/gu, '').split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '')).toUpperCase();
}
