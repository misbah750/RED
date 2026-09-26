import React, { useState, useMemo } from 'react';
import Reveal, { Eyebrow } from './Reveal.jsx';
import { programs, programFilters } from '../data.js';
import { useTilt, useReveal } from '../hooks.js';

function ProgCard({ p, delay }) {
  const tilt = useTilt(10);
  const [revealRef, inView] = useReveal();
  const setRefs = (n) => { tilt.ref.current = n; revealRef.current = n; };
  return (
    <div ref={setRefs} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave}
      className={`prog glass reveal d${delay}${inView ? ' in' : ''}`}>
      <div className="glare" />
      <span className="tag">{p.tag}</span>
      <h3>{p.t}</h3>
      <p>{p.d}</p>
      <a className="prog-link" href="#contact">Enquire <span aria-hidden="true">→</span></a>
    </div>
  );
}

export default function Programs() {
  const [filter, setFilter] = useState('All');
  const shown = useMemo(
    () => (filter === 'All' ? programs : programs.filter((p) => p.cat === filter)),
    [filter]
  );
  return (
    <section id="programs" aria-labelledby="pg-title">
      <span className="aurora a1" style={{ right: '-6%', top: '10%' }} aria-hidden="true" />
      <div className="wrap">
        <Reveal className="sec-head">
          <Eyebrow>RED Programs</Eyebrow>
          <h2 id="pg-title">The book is the beginning.</h2>
          <p>RED is being developed as a continuing platform for resuscitation workshops, simulation, seminars,
            webinars and practical learning resources, moving education from reading to rehearsal.</p>
        </Reveal>
        <Reveal className="filters" role="tablist" aria-label="Filter programs">
          {programFilters.map((f) => (
            <button key={f} role="tab" aria-selected={filter === f}
              className={`chip-btn${filter === f ? ' on' : ''}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </Reveal>
        <div className="programs" key={filter}>
          {shown.map((p, i) => <ProgCard key={p.t} p={p} delay={(i % 3) + 1} />)}
        </div>
        <Reveal style={{ marginTop: '2.5rem' }}>
          <a className="btn btn-red" href="#contact"><span>Explore RED programs</span></a>
        </Reveal>
      </div>
    </section>
  );
}
