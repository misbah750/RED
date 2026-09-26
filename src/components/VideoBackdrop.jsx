import React, { useRef, useEffect } from 'react';
import { usePrefersReducedMotion } from '../hooks.js';

const V = (typeof window !== 'undefined' && window.__HERO_VIDEO__) || '/hero.mp4';
const P = (typeof window !== 'undefined' && window.__HERO_POSTER__) || '/poster.jpg';

// A looping, scrimmed video layer with a slow zoom — dropped behind a section
// for cinematic 3D depth. Keeps playing across tab-visibility changes.
export default function VideoBackdrop({ className = '', intensity = 'soft' }) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const v = ref.current;
    if (!v || reduced) return;
    const play = () => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };
    play();
    const onVis = () => { if (!document.hidden) play(); };
    v.addEventListener('canplay', play);
    document.addEventListener('visibilitychange', onVis);
    return () => { v.removeEventListener('canplay', play); document.removeEventListener('visibilitychange', onVis); };
  }, [reduced]);

  return (
    <div className={`vbg vbg-${intensity} ${className}`.trim()} aria-hidden="true">
      {!reduced && (
        <video ref={ref} className="vbg-video" autoPlay muted loop playsInline preload="auto" poster={P}>
          <source src={V} type="video/mp4" />
        </video>
      )}
      <div className="vbg-scrim" />
    </div>
  );
}
