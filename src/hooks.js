import { useState, useEffect, useRef, useCallback } from 'react';

export function usePrefersReducedMotion() {
  const [reduced, set] = useState(false);
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    const on = () => set(m.matches); on();
    m.addEventListener('change', on); return () => m.removeEventListener('change', on);
  }, []);
  return reduced;
}

// Reveal on scroll: returns [ref, inView]
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, set] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { set(true); io.unobserve(el); }
    }, { threshold, rootMargin: '0px 0px -8% 0px' });
    io.observe(el); return () => io.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// Count up to target when in view
export function useCountUp(target, dur = 1300) {
  const ref = useRef(null);
  const [val, set] = useState(0);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (reduced) { set(target); return; }
    let raf, t0 = null, done = false;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done) {
        done = true;
        const step = (ts) => {
          if (!t0) t0 = ts;
          const p = Math.min((ts - t0) / dur, 1);
          set(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step); io.unobserve(el);
      }
    }, { threshold: 0.4 });
    io.observe(el); return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [target, dur, reduced]);
  return [ref, val];
}

// Pointer tilt for glass cards
export function useTilt(max = 12) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const onMove = useCallback((e) => {
    if (reduced) return;
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateY(${(x - 0.5) * max}deg) rotateX(${(0.5 - y) * max}deg) translateZ(6px)`;
    el.style.setProperty('--gx', x * 100 + '%');
    el.style.setProperty('--gy', y * 100 + '%');
  }, [max, reduced]);
  const onLeave = useCallback(() => {
    const el = ref.current; if (el) el.style.transform = '';
  }, []);
  return { ref, onMouseMove: onMove, onMouseLeave: onLeave };
}

// Scrollspy: which section id is active
export function useActiveSection(ids) {
  const [active, set] = useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) set('#' + e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ids.forEach((id) => { const el = document.querySelector(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [ids.join(',')]);
  return active;
}

// Launch-state machine
export function useLaunchState(launchISO) {
  const LAUNCH = new Date(launchISO).getTime();
  const [forced, setForced] = useState(() => {
    try { return new URLSearchParams(location.search).get('state'); } catch { return null; }
  });
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const i = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(i); }, []);
  const launched = forced === 'launched' || (forced !== 'prelaunch' && now >= LAUNCH);
  const remain = Math.max(LAUNCH - now, 0);
  const cd = {
    d: Math.floor(remain / 864e5),
    h: Math.floor(remain / 36e5) % 24,
    m: Math.floor(remain / 6e4) % 60,
    s: Math.floor(remain / 1e3) % 60,
  };
  return { launched, cd, toggle: () => setForced((f) => (f === 'launched' ? null : 'launched')), forced };
}

// Magnetic pull: element drifts toward the cursor, springs back on leave.
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const onMove = useCallback((e) => {
    if (reduced) return;
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${mx * strength}px, ${my * strength}px)`;
  }, [strength, reduced]);
  const onLeave = useCallback(() => {
    const el = ref.current; if (el) el.style.transform = '';
  }, []);
  return { ref, onMouseMove: onMove, onMouseLeave: onLeave };
}

// Reveal when scrolled past a threshold (for back-to-top etc.)
export function useScrolledPast(px = 600) {
  const [past, set] = useState(false);
  useEffect(() => {
    const on = () => set(window.scrollY > px);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, [px]);
  return past;
}

// Hash router: returns the current route path (e.g. "/about"); "/" by default.
export function useRoute() {
  const parse = () => {
    let h = (typeof window !== 'undefined' ? window.location.hash : '') || '';
    h = h.replace(/^#/, '');
    if (!h || h === '/' || h === '/home') return '/';
    return h.split('?')[0];
  };
  const [route, setRoute] = useState(parse());
  useEffect(() => {
    const on = () => { setRoute(parse()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}
