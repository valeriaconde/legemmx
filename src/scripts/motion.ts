/**
 * Animaciones del sitio (GSAP + ScrollTrigger + SplitText) y scroll suave (Lenis).
 *
 * Atributos disponibles en el HTML:
 *   data-reveal            → aparece al entrar en pantalla (sube y se desvanece)
 *   data-reveal="fade"     → solo se desvanece
 *   data-reveal-stagger    → sus hijos aparecen uno tras otro
 *   data-split             → el titular aparece línea por línea
 *   data-words             → las palabras se iluminan al hacer scroll (citas / frases)
 *   data-count="22"        → número que cuenta hacia arriba
 *   data-parallax="0.15"   → la imagen se desplaza ligeramente al hacer scroll
 *   data-areas-pin         → sección fija con tarjetas [data-area-card] que suben al hacer scroll (solo escritorio)
 *
 * Si el usuario tiene activado "reducir movimiento", no se anima nada.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE = 'expo.out';

function smoothScroll() {
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Enlaces internos (#seccion) con desplazamiento suave
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -96 });
      history.replaceState(null, '', id);
    });
  });
  (window as any).__lenis = lenis;
}

function reveals() {
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: EASE,
      delay: Number(el.dataset.delay ?? 0),
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
    gsap.to(group.children, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: EASE,
      stagger: 0.08,
      scrollTrigger: { trigger: group, start: 'top 88%', once: true },
    });
  });
}

function splitHeadlines() {
  gsap.utils.toArray<HTMLElement>('[data-split]').forEach((el) => {
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'split-line',
      autoSplit: true,
      onSplit(self) {
        gsap.set(el, { visibility: 'visible' });
        const immediate = el.dataset.split === 'load';
        return gsap.from(self.lines, {
          yPercent: 110,
          duration: 1.3,
          ease: EASE,
          stagger: 0.09,
          delay: immediate ? 0.15 : 0,
          scrollTrigger: immediate ? undefined : { trigger: el, start: 'top 88%', once: true },
        });
      },
    });
  });
}

function scrubWords() {
  gsap.utils.toArray<HTMLElement>('[data-words]').forEach((el) => {
    const split = SplitText.create(el, { type: 'words' });
    gsap.fromTo(
      split.words,
      { opacity: 0.16 },
      {
        opacity: 1,
        ease: 'none',
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
      },
    );
  });
}

function counters() {
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count);
    const obj = { v: 0 };
    el.textContent = '0';
    gsap.to(obj, {
      v: end,
      duration: 1.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => {
        el.textContent = Math.round(obj.v).toString();
      },
    });
  });
}

function parallax() {
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const amount = Number(el.dataset.parallax || 0.12);
    gsap.fromTo(
      el,
      { yPercent: -amount * 50 },
      {
        yPercent: amount * 50,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement ?? el, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });
}

/** Áreas de práctica: el encabezado queda fijo y las tarjetas suben una tras otra con el scroll. */
function pinnedAreas() {
  const section = document.querySelector<HTMLElement>('[data-areas-pin]');
  if (!section) return;
  const cards = gsap.utils.toArray<HTMLElement>('[data-area-card]', section);
  if (!cards.length) return;

  const mm = gsap.matchMedia();

  mm.add('(min-width: 1024px) and (min-height: 700px)', () => {
    gsap.set(cards, { y: () => window.innerHeight * 0.8, opacity: 0 });
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=140%',
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
    cards.forEach((card, i) => {
      tl.to(card, { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }, i * 0.55);
    });
    tl.to({}, { duration: 0.5 }); // pausa final con las 4 tarjetas visibles
  });

  // Móvil / pantallas bajas: sin fijar, las tarjetas aparecen escalonadas
  mm.add('(max-width: 1023px), (max-height: 699px)', () => {
    gsap.from(cards, {
      opacity: 0,
      y: 28,
      duration: 1,
      ease: EASE,
      stagger: 0.08,
      scrollTrigger: { trigger: cards[0].parentElement, start: 'top 88%', once: true },
    });
  });
}

function heroIntro() {
  const items = gsap.utils.toArray<HTMLElement>('[data-hero-item]');
  if (!items.length) return;
  gsap.from(items, { opacity: 0, y: 20, duration: 1.2, ease: EASE, stagger: 0.08, delay: 0.45 });
}

function init() {
  if (reduceMotion) return;
  smoothScroll();
  pinnedAreas();
  splitHeadlines();
  reveals();
  scrubWords();
  counters();
  parallax();
  heroIntro();
  // Recalcular cuando carguen las fuentes (cambian el tamaño del texto)
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

init();
