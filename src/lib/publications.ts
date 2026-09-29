import { getCollection, type CollectionEntry } from 'astro:content';
import { publicationPath, type Lang, type PublicationCategory } from '@/i18n/routes';

export type PublicationEntry = CollectionEntry<'boletines' | 'articulos' | 'reconocimientos'>;

export interface Publication {
  entry: PublicationEntry;
  category: PublicationCategory;
  lang: Lang;
  slug: string;
  url: string;
}

const categories: PublicationCategory[] = ['boletines', 'articulos', 'reconocimientos'];

/** Publicaciones de una categoría e idioma, de la más reciente a la más antigua */
export async function getPublications(category: PublicationCategory, lang: Lang): Promise<Publication[]> {
  const entries = (await getCollection(category)) as PublicationEntry[];
  return entries
    .filter((e) => e.id.startsWith(`${lang}/`) && !e.data.draft)
    .map((entry) => {
      const slug = entry.id.slice(lang.length + 1);
      return { entry, category, lang, slug, url: publicationPath(category, lang, slug) };
    })
    .sort((a, b) => b.entry.data.date.valueOf() - a.entry.data.date.valueOf());
}

export async function getAllPublications(lang: Lang) {
  const all = await Promise.all(categories.map((c) => getPublications(c, lang)));
  return all.flat().sort((a, b) => b.entry.data.date.valueOf() - a.entry.data.date.valueOf());
}

/** Busca la versión en el otro idioma (por translationKey) */
export async function getTranslationUrl(pub: Publication, target: Lang): Promise<string | undefined> {
  const key = pub.entry.data.translationKey;
  if (!key) return undefined;
  const others = await getPublications(pub.category, target);
  return others.find((p) => p.entry.data.translationKey === key)?.url;
}

export function formatDate(date: Date, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-MX' : 'en-US', {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  }).format(date);
}

export { categories as publicationCategoryList };
