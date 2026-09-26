import React, { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../hooks.js';

export function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (ref.current) ref.current.style.width = (p * 100) + '%';
    };
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return <div className="progress" ref={ref} aria-hidden="true" />;
}

export function CursorGlow() {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced || !window.matchMedia('(hover:hover)').matches) return;
    const el = ref.current;
    const move = (e) => { el.style.opacity = 1; el.style.left = e.clientX + 'px'; el.style.top = e.clientY + 'px'; };
    const leave = () => { el.style.opacity = 0; };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerleave', leave);
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerleave', leave); };
  }, [reduced]);
  return <div className="cursor-glow" ref={ref} aria-hidden="true" />;
}

// Ambient signature layer: fine monitor scanlines + top vignette (pure CSS, no motion cost)
export function AmbientFX() {
  return (
    <div className="fx-ambient" aria-hidden="true">
      <div className="fx-scan" />
      <div className="fx-vignette" />
    </div>
  );
}

// Drifting aurora blobs, pass position via style
export function Aurora({ blobs }) {
  return (
    <div aria-hidden="true">
      {blobs.map((b, i) => <span key={i} className={`aurora ${b.c}`} style={b.s} />)}
    </div>
  );
}
