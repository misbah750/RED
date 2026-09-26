import React, { useState, useMemo } from 'react';
import Reveal, { Eyebrow } from './Reveal.jsx';
import { resources, resourceFilters } from '../data.js';
import { useReveal } from '../hooks.js';

function ResCard({ r, delay }) {
  const [ref, inView] = useReveal();
  return (
    <div ref={ref} className={`rescard glass reveal d${delay}${inView ? ' in' : ''}`}>
      <h3>
        <svg viewBox="0 0 24 24">{r.icon.split(' M').map((d, k) => <path key={k} d={(k ? 'M' : '') + d} />)}</svg>
        {r.t}
      </h3>
      <p>{r.d}</p>
      <div className="res-meta"><span className="res-cat">{r.cat}</span><span className="res-review">Last reviewed: at launch</span></div>
    </div>
  );
}

export default function Resources() {
  const [filter, setFilter] = useState('All');
  const shown = useMemo(
    () => (filter === 'All' ? resources : resources.filter((r) => r.cat === filter)),
    [filter]
  );
  return (
    <section id="resources" aria-labelledby="rs-title">
      <div className="wrap">
        <Reveal className="sec-head">
          <Eyebrow>Resources</Eyebrow>
          <h2 id="rs-title">Useful between shifts, not just at launch.</h2>
          <p>A growing library of practical tools for clinicians and educators. Resources open after the book launches.</p>
        </Reveal>
        <Reveal className="filters" role="tablist" aria-label="Filter resources">
          {resourceFilters.map((f) => (
            <button key={f} role="tab" aria-selected={filter === f}
              className={`chip-btn${filter === f ? ' on' : ''}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </Reveal>
        <div className="res" key={filter}>
          {shown.map((r, i) => <ResCard key={r.t} r={r} delay={(i % 3) + 1} />)}
        </div>
        <Reveal as="p" className="note">
          Website resources are for professional education and do not replace local protocols, clinical judgment or
          current guidelines. Every clinical resource shows a last-reviewed date and its source; videos include
          captions or transcripts. Excerpts and figures from the book are published with permission.
        </Reveal>
      </div>
    </section>
  );
}
