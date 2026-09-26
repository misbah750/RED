import React, { useRef, useEffect } from 'react';
import { usePrefersReducedMotion } from '../hooks.js';
import { asset } from '../assets.js';

export default function Book3D({ innerRef, pointer }) {
  const localRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = (innerRef && innerRef.current) || localRef.current;
    if (!el || reduced) return;
    let raf;
    const cur = { rx: -7, ry: -22 };
    // Living idle sway, leaning toward the pointer when present.
    const loop = (now) => {
      const t = now / 1000;
      const p = pointer && pointer.current;
      const tgt = p ? { rx: -7 - p.y * 14, ry: -22 + p.x * 30 }
                    : { rx: -7 + Math.sin(t * 0.5) * 3, ry: -22 + Math.sin(t * 0.35) * 9 };
      cur.rx += (tgt.rx - cur.rx) * 0.06;
      cur.ry += (tgt.ry - cur.ry) * 0.06;
      el.style.setProperty('--rx', cur.rx.toFixed(2) + 'deg');
      el.style.setProperty('--ry', cur.ry.toFixed(2) + 'deg');
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [pointer, reduced, innerRef]);

  return (
    <div className="stage">
      <div className="book-glow" aria-hidden="true" />
      <div className="book" ref={innerRef || localRef} role="img"
        aria-label="Cover of Resuscitation in the Emergency Department (RED) by Shahan Waheed">
        <div className="face back" />
        <div className="face spine"><span>RESUSCITATION IN THE ED</span><i>WAHEED</i></div>
        <div className="face pages" />
        <div className="face pages-top" />
        <div className="face pages-bottom" />
        <div className="face cover">
          <img src={asset('cover')} alt="Resuscitation in the Emergency Department, book cover" />
          <div className="emboss" aria-hidden="true" />
          <div className="gloss" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
