import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Publicaciones del sitio.
 * Cada publicación es un archivo .md dentro de:
 *   src/content/<categoría>/<idioma>/<nombre-de-la-url>.md
 * Ejemplo: src/content/boletines/es/reforma-laboral-aumento-de-vacaciones.md
 */
const publicationSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  summary: z.string(),
  // Ruta del PDF dentro de /public (ej. "/docs/boletines/archivo.pdf"). Opcional.
  pdf: z.string().optional().default(''),
  // Imagen de portada opcional (ruta dentro de /public).
  image: z.string().optional().default(''),
  // Autor opcional (para artículos).
  author: z.string().optional(),
  // Misma clave en español e inglés para enlazar las dos versiones.
  translationKey: z.string().optional(),
  // true = no se publica.
  draft: z.boolean().optional().default(false),
});

const make = (folder: string) =>
  defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: `./src/content/${folder}` }),
    schema: publicationSchema,
  });

export const collections = {
  boletines: make('boletines'),
  articulos: make('articulos'),
  reconocimientos: make('reconocimientos'),
};
