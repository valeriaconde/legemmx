# legem.mx — Sitio web de Legem Attorneys at Law

Sitio estático bilingüe (español / inglés) construido con **Astro**, **Tailwind CSS**, **GSAP** (animaciones) y **Lenis** (scroll suave).

---

## 1. Requisitos

- [Node.js](https://nodejs.org) **22.12 o superior** (`node -v` para verificar)
- VS Code con las extensiones **Astro** y **Tailwind CSS IntelliSense**

## 2. Comandos

Desde la terminal, dentro de la carpeta `legemmx`:

| Comando           | Qué hace                                                        |
| ----------------- | --------------------------------------------------------------- |
| `npm install`     | Instala las dependencias (solo la primera vez)                  |
| `npm run dev`     | Abre el sitio en modo desarrollo → http://localhost:4321        |
| `npm run build`   | Genera el sitio final en la carpeta `dist/`                     |
| `npm run preview` | Muestra la versión final (`dist/`) en http://localhost:4321     |

En modo desarrollo, cada vez que guardas un archivo el navegador se actualiza solo.

## 3. Estructura

```
legemmx/
├── public/                  Archivos que se copian tal cual al sitio
│   ├── docs/boletines/      PDF de los boletines
│   ├── images/              Fotos (hero, áreas, equipo en images/equipo/)
│   ├── brand/               Logotipo oficial
│   ├── contacto.php         Envío del formulario de contacto por correo
│   └── .htaccess            Redirecciones del sitio anterior, HTTPS, caché
├── src/
│   ├── content/             Publicaciones (Markdown)
│   │   ├── boletines/es/    ← un archivo .md por boletín en español
│   │   ├── boletines/en/    ← y en inglés
│   │   ├── articulos/…
│   │   └── reconocimientos/…
│   ├── data/
│   │   ├── site.ts          Correo de contacto, oficinas, teléfono
│   │   ├── practice-areas.ts Áreas de práctica y especialidades (ES/EN)
│   │   └── team.ts          Abogados y personal
│   ├── i18n/
│   │   ├── ui.ts            Todos los textos de la interfaz (ES/EN)
│   │   └── routes.ts        URLs en cada idioma
│   ├── views/               Diseño de cada página (compartido por ambos idiomas)
│   ├── pages/               Rutas del sitio (español en la raíz, inglés en /en/)
│   ├── components/          Cabecera, pie, logotipo, tarjetas…
│   ├── scripts/motion.ts    Animaciones
│   └── styles/global.css    Colores, tipografías y estilos generales
└── .github/workflows/deploy.yml   Publicación automática por FTP (opcional)
```

## 4. Tareas frecuentes

### Publicar un boletín

1. Copia el PDF a `public/docs/boletines/` (ej. `Legem-Reforma-2026.pdf`).
2. Crea `src/content/boletines/es/reforma-2026.md` (el nombre del archivo será la URL):

   ```md
   ---
   title: "Reforma laboral 2026"
   date: 2026-03-15
   summary: "Resumen de una o dos frases que aparece en los listados."
   pdf: "/docs/boletines/Legem-Reforma-2026.pdf"
   translationKey: reforma-2026
   ---

   (Opcional) Texto completo del boletín en Markdown.
   ```

3. Haz lo mismo en `src/content/boletines/en/` con la versión en inglés y **el mismo `translationKey`**
   (así el botón de idioma lleva a la versión traducida).
4. `npm run build` y publica.

Los artículos y reconocimientos funcionan igual (hay una plantilla `ejemplo.md` en cada carpeta; `draft: true` significa que no se publica).

### Cambiar textos, equipo o áreas

- Textos de botones, titulares y secciones → `src/i18n/ui.ts`
- Abogados → `src/data/team.ts`
- Áreas de práctica → `src/data/practice-areas.ts`
- Correo, teléfono y oficinas → `src/data/site.ts`

### Agregar fotos

Los espacios con líneas diagonales son lugares reservados para fotos.

- **Áreas de práctica:** guarda la foto en `public/images/` y escribe la ruta en `image: '/images/consultiva.jpg'` (`src/data/practice-areas.ts`).
- **Abogados:** `public/images/equipo/oconde.jpg` → `photo: '/images/equipo/oconde.jpg'` (`src/data/team.ts`). Formato vertical 4:5.
- **Hero, nosotros, equipo:** busca `<Media` en `src/views/HomeView.astro` y `AboutView.astro` y agrega `src="/images/…"`.

Recomendado: `.jpg` o `.webp`, ~2000 px de ancho, menos de 400 KB.

### Cambiar el logotipo

Guarda el logo oficial como `public/brand/logo.svg` y sigue las instrucciones en `src/components/Logo.astro`.

### Colores y tipografías

Todo está en el bloque `@theme` de `src/styles/global.css`.

### Animaciones

Se activan con atributos en el HTML (ver `src/scripts/motion.ts`):
`data-reveal`, `data-reveal-stagger`, `data-split`, `data-words`, `data-count`, `data-parallax`.
Si el visitante tiene activado "reducir movimiento" en su sistema, no se anima nada.

## 5. Publicar en el hosting

1. `npm run build`
2. Sube **el contenido** de la carpeta `dist/` a la carpeta pública del hosting (normalmente `public_html/`).
   `dist/` ya incluye `.htaccess` y `contacto.php`. `.htaccess` es un archivo oculto: activa "mostrar archivos ocultos" en tu cliente FTP.
3. Formulario: `contacto.php` requiere que el hosting soporte PHP y la función `mail()`.
   Configura los correos destinatarios al inicio del archivo. Si el hosting no soporta PHP, usa un servicio
   como Formspree y cambia `form.endpoint` en `src/data/site.ts`.
4. Automático (opcional): `.github/workflows/deploy.yml` publica por FTP desde GitHub. Instrucciones dentro del archivo.

> Antes de apuntar el dominio al nuevo sitio, **no modifiques los registros MX** (correo) del dominio.
