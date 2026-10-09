// Integración de Astro: convierte las rutas absolutas del sitio ("/areas/", "/_astro/x.css")
// en rutas relativas ("../areas/", "x.css") DESPUÉS del build.
//
// Así el contenido de dist/ funciona igual en cualquier carpeta:
// legem.mx/, legem.mx/prueba_legem/, prueba.legem.mx/, etc. — se puede copiar tal cual.
//
// Requisito: las páginas deben abrirse con "/" al final (Apache lo agrega solo).
// 404.html se deja con rutas absolutas porque Apache lo sirve desde cualquier URL.

import { fileURLToPath } from 'node:url';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SKIP = new Set(['404.html']);

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

/** Convierte un destino absoluto ("/areas/x/#a") en relativo a la carpeta `fromDir` ("/nosotros"). */
function relativize(fromDir, url) {
  const [, target, suffix] = url.match(/^([^?#]*)(.*)$/);
  let rel = path.posix.relative(fromDir, target);
  if (target.endsWith('/') && rel !== '') rel += '/';
  if (rel === '') rel = './';
  // Un primer segmento con ":" se tomaría como protocolo; "./" lo evita.
  if (/^[^/]*:/.test(rel)) rel = './' + rel;
  return rel + suffix;
}

const ATTR = /(\b(?:href|src|poster|action)=)(["'])\/(?!\/)([^"']*)\2/g;
const CSS_URL = /url\(\s*(["']?)\/(?!\/)([^)"']+)\1\s*\)/g;

export default function relativePaths() {
  return {
    name: 'relative-paths',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        let changedFiles = 0;
        let changedLinks = 0;

        for (const file of await walk(root)) {
          const rel = path.relative(root, file).split(path.sep).join('/');
          if (SKIP.has(rel)) continue;
          const isHtml = file.endsWith('.html');
          const isCss = file.endsWith('.css');
          if (!isHtml && !isCss) continue;

          const fromDir = '/' + path.posix.dirname(rel).replace(/^\.$/, '');
          const original = await readFile(file, 'utf8');
          let n = 0;
          let text = original;

          if (isHtml) {
            text = text.replace(ATTR, (_, attr, q, rest) => {
              n++;
              return `${attr}${q}${relativize(fromDir, '/' + rest)}${q}`;
            });
          }
          // También cubre <style> dentro del HTML.
          text = text.replace(CSS_URL, (_, q, rest) => {
            n++;
            return `url(${q}${relativize(fromDir, '/' + rest)}${q})`;
          });

          if (text !== original) {
            await writeFile(file, text);
            changedFiles++;
            changedLinks += n;
          }
        }
        logger.info(`${changedLinks} rutas pasadas a relativas en ${changedFiles} archivos`);
      },
    },
  };
}
