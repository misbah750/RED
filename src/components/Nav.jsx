import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { nav } from '../data.js';
import Search from './Search.jsx';
import Magnetic from './Magnetic.jsx';

// Logo: the "RED" wordmark (red lead-in dash, RED, and a red pulse line).
const LogoLockup = () => (
  <span className="nl-word" aria-hidden="true">
    <span className="nav-dash" />
    <span className="nav-word">RED</span>
    <svg className="nav-pulse" viewBox="0 0 64 24" fill="none">
      <polyline points="0,12 26,12 32,12 37,3 44,21 49,12 64,12"
        stroke="#E31B23" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

// build the pill outline (stadium) with an optional downward pod centred at cx
function pillPath(w, h, cx, half) {
  const r = h / 2;
  if (cx == null) return `M ${r},0 L ${w - r},0 A ${r},${r} 0 0 1 ${w - r},${h} L ${r},${h} A ${r},${r} 0 0 1 ${r},0 Z`;
  const d = 10, c = 15; // pod depth + transition curve
  const pr = Math.min(cx + half + c, w - r), pl = Math.max(cx - half - c, r);
  return `M ${r},0 L ${w - r},0 A ${r},${r} 0 0 1 ${w - r},${h} L ${pr},${h} `
    + `C ${cx + half},${h} ${cx + half},${h + d} ${cx},${h + d} `
    + `C ${cx - half},${h + d} ${cx - half},${h} ${pl},${h} `
    + `L ${r},${h} A ${r},${r} 0 0 1 ${r},0 Z`;
}
function podCurve(h, cx, half) {
  if (cx == null) return '';
  const d = 10, c = 15;
  return `M ${cx + half + c},${h} C ${cx + half},${h} ${cx + half},${h + d} ${cx},${h + d} `
    + `C ${cx - half},${h + d} ${cx - half},${h} ${cx - half - c},${h}`;
}

export default function Nav({ route, launched }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const pillRef = useRef(null), ulRef = useRef(null);
  const fillRef = useRef(null), curveRef = useRef(null);
  const dimsRef = useRef({ w: 0, h: 0 });
  const posRef = useRef({ cx: null, half: 40 });
  const rafRef = useRef(0);
  const cta = launched ? { label: 'Get the book', href: '#/book' } : { label: 'Get launch updates', href: '#/events' };

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 60); return () => clearTimeout(t); }, []);

  const draw = (cx, half) => {
    const { w, h } = dimsRef.current;
    if (!w || !h) return;
    if (fillRef.current) fillRef.current.setAttribute('d', pillPath(w, h, cx, half));
    if (curveRef.current) curveRef.current.setAttribute('d', podCurve(h, cx, half));
  };
  const target = () => {
    const pill = pillRef.current, ul = ulRef.current; if (!pill || !ul) return { cx: null, half: 40 };
    const active = ul.querySelector('a.active'); if (!active) return { cx: null, half: 40 };
    const pr = pill.getBoundingClientRect(), ar = active.getBoundingClientRect();
    return { cx: ar.left - pr.left + ar.width / 2, half: Math.min(Math.max(ar.width / 2 - 2, 30), 50) };
  };
  const tweenTo = (to) => {
    cancelAnimationFrame(rafRef.current);
    const from = { ...posRef.current };
    if (from.cx == null || to.cx == null) { posRef.current = to; draw(to.cx, to.half); return; }
    const t0 = performance.now(), dur = 420;
    const ease = (x) => 1 - Math.pow(1 - x, 3);
    const step = (now) => {
      const k = Math.min((now - t0) / dur, 1), e = ease(k);
      const cx = from.cx + (to.cx - from.cx) * e, half = from.half + (to.half - from.half) * e;
      posRef.current = { cx, half }; draw(cx, half);
      if (k < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  };
  const measure = () => {
    const pill = pillRef.current; if (!pill) return;
    const r = pill.getBoundingClientRect(), d = { w: Math.round(r.width), h: Math.round(r.height) };
    dimsRef.current = d; setDims(d);
    const to = target();
    if (posRef.current.cx == null) { posRef.current = to; }
    requestAnimationFrame(() => draw(posRef.current.cx, posRef.current.half));
    tweenTo(to);
  };
  useLayoutEffect(() => { measure(); /* eslint-disable-next-line */ }, [route]);
  useEffect(() => {
    const on = () => measure(); window.addEventListener('resize', on);
    const t = setTimeout(measure, 300); // after fonts settle
    return () => { window.removeEventListener('resize', on); clearTimeout(t); };
  }, []);

  const Icon = ({ paths }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      {paths.map((d, k) => <path key={k} d={d} />)}
    </svg>
  );
  const podH = dims.h + 26;

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}${mounted ? ' ready' : ''}`}>
      <div className="wrap">
        <div className="nav-inner">
          <a className="nav-logo" href="#/" aria-label="RED, Resuscitation in the Emergency Department, home"><LogoLockup /></a>

          <nav aria-label="Primary" className="nav-pill" ref={pillRef}>
            <svg className="pill-svg" width={dims.w || 1} height={podH} viewBox={`0 0 ${dims.w || 1} ${podH}`} preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="pillG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#242427" /><stop offset="1" stopColor="#101012" />
                </linearGradient>
              </defs>
              <path ref={fillRef} className="pill-fill" d="" fill="url(#pillG)" stroke="rgba(255,255,255,.09)" strokeWidth="1" />
              <path ref={curveRef} className="pill-curve" d="" fill="none" stroke="#E31B23" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
            <ul ref={ulRef}>
              {nav.map((n, i) => (
                <li key={n.r} style={{ '--i': i }}>
                  <a href={'#' + n.r} className={`ni${route === n.r ? ' active' : ''}`} aria-current={route === n.r ? 'page' : undefined}>
                    <span className="ni-ic"><Icon paths={n.icon} /></span>
                    <span className="ni-lb">{n.label}</span>
                    <span className="ni-dot" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-right">
            <Search />
            <Magnetic className="btn btn-red hdr-cta" strength={0.35} href={cta.href}><span>{cta.label}</span></Magnetic>
            <button className="menu-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`scrim${open ? ' open' : ''}`} onClick={() => setOpen(false)} />
      <div className={`mobile-menu glass-2${open ? ' open' : ''}`}>
        <button className="mm-close" aria-label="Close menu" onClick={() => setOpen(false)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        {nav.map((n, i) => (
          <a key={n.r} href={'#' + n.r} style={{ '--i': i }} className={route === n.r ? 'active' : ''} onClick={() => setOpen(false)}>
            <span className="mm-ic"><Icon paths={n.icon} /></span>{n.label}
          </a>
        ))}
        <a className="btn btn-red" href={cta.href} onClick={() => setOpen(false)}><span>{cta.label}</span></a>
      </div>
    </header>
  );
}
