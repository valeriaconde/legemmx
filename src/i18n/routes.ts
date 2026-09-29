/**
 * Mapa de rutas por idioma.
 * Cada página tiene una "clave" y una ruta en español y otra en inglés.
 * El selector de idioma usa este mapa para saltar a la página equivalente.
 */
export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const routes = {
  home: { es: '/', en: '/en/' },
  about: { es: '/nosotros/', en: '/en/about/' },
  team: { es: '/abogados/', en: '/en/attorneys/' },
  areas: { es: '/areas/', en: '/en/practice-areas/' },
  publications: { es: '/publicaciones/', en: '/en/publications/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
  privacy: { es: '/aviso-de-privacidad/', en: '/en/privacy-notice/' },
} as const;

export type RouteKey = keyof typeof routes;

export function path(key: RouteKey, lang: Lang): string {
  return routes[key][lang];
}

/** Rutas de las categorías de publicaciones */
export const publicationCategories = {
  boletines: { es: 'boletines', en: 'newsletters' },
  articulos: { es: 'articulos', en: 'articles' },
  reconocimientos: { es: 'reconocimientos', en: 'awards' },
} as const;
export type PublicationCategory = keyof typeof publicationCategories;

export function publicationPath(cat: PublicationCategory, lang: Lang, slug?: string) {
  const base = `${routes.publications[lang]}${publicationCategories[cat][lang]}/`;
  return slug ? `${base}${slug}/` : base;
}

export function areaPath(slug: string, lang: Lang, anchor?: string) {
  return `${routes.areas[lang]}${slug}/${anchor ? `#${anchor}` : ''}`;
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'en' ? 'en' : 'es';
}
