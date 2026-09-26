import React, { useState, useEffect } from 'react';
import Reveal, { Eyebrow } from './Reveal.jsx';
import { praise } from '../data.js';
import { usePrefersReducedMotion } from '../hooks.js';

export default function Praise() {
  const [i, setI] = useState(0);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((n) => (n + 1) % praise.length), 6000);
    return () => clearInterval(t);
  }, [reduced]);
  return (
    <section aria-labelledby="praise-title">
      <div className="wrap">
        <Reveal className="sec-head" style={{ textAlign: 'center', marginInline: 'auto' }}>
          <Eyebrow>Forewords</Eyebrow>
          <h2 id="praise-title">What leaders in emergency medicine say</h2>
        </Reveal>
        <Reveal className="praise">
          <div className="slides">
            {praise.map((p, k) => (
              <figure className={`slide glass-2${k === i ? ' on' : ''}`} key={p.by}>
                <blockquote>{p.q}</blockquote>
                <p>{p.note}</p>
                <cite>{p.by}</cite>
              </figure>
            ))}
          </div>
          <div className="dots">
            {praise.map((p, k) => (
              <button key={p.by} className={k === i ? 'on' : ''} aria-label={`Show quote from ${p.by}`} onClick={() => setI(k)} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
