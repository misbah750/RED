import React from 'react';
import Reveal, { Eyebrow } from './Reveal.jsx';
import { principles } from '../data.js';
import { useTilt, useReveal } from '../hooks.js';

function Card({ p, delay }) {
  const tilt = useTilt();
  const [rev, inView] = useReveal();
  const setRefs = (n) => { tilt.ref.current = n; rev.current = n; };
  return (
    <div ref={setRefs} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave}
      className={`pcard glass reveal d${delay}${inView ? ' in' : ''}`}>
      <div className="glare" />
      <div className="ico"><svg viewBox="0 0 24 24">{p.icon.split(' M').map((d, i) => <path key={i} d={(i ? 'M' : '') + d} />)}</svg></div>
      <h3>{p.t}</h3>
      <p>{p.d}</p>
    </div>
  );
}

export default function Principles() {
  return (
    <section aria-labelledby="pr-title">
      <div className="wrap">
        <Reveal className="sec-head">
          <Eyebrow>Why RED</Eyebrow>
          <h2 id="pr-title">Designed for the reality of emergency medicine.</h2>
          <p>Information is incomplete. Time is compressed. Priorities compete. Treatment often has to begin before a
            definitive diagnosis is available. RED approaches these challenges through five interconnected principles,
            the resuscitation cycle developed within the book.</p>
        </Reveal>
        <div className="principles principles-5">
          {principles.map((p, i) => <Card key={p.t} p={p} delay={(i % 5) + 1} />)}
        </div>
      </div>
    </section>
  );
}
