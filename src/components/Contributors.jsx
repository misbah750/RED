import React from 'react';
import Reveal from './Reveal.jsx';
import Globe from './Globe.jsx';
import { countries } from '../data.js';

export default function Contributors() {
  return (
    <section className="contrib" aria-labelledby="co-title">
      <span className="aurora a2" style={{ left: '-8%', top: '20%' }} aria-hidden="true" />
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">
            <svg viewBox="0 0 34 14" aria-hidden="true"><polyline points="0,7 10,7 13,1 17,13 20,7 34,7" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
            International contributors
          </span>
          <h2 id="co-title">27 contributors from 4 countries
            <small>Locally grounded. Internationally informed.</small></h2>
          <p>Clinicians and educators from across the world connect contemporary resuscitation science with the
            realities of different clinical environments, including settings where resources, diagnostics and
            critical-care capacity may be constrained.</p>
          <div className="countries">
            {countries.map((c) => <div className="glass" key={c.n}><i />{c.n}</div>)}
          </div>
        </Reveal>
        <Reveal className="globe" delay={2}><Globe /></Reveal>
      </div>
    </section>
  );
}
