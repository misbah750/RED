import React, { useState } from 'react';
import Reveal, { Eyebrow } from './Reveal.jsx';
import Ticker from './Ticker.jsx';
import { parts, bookTopics } from '../data.js';
import { useCountUp, useTilt, useReveal } from '../hooks.js';

function Stat({ n, label }) {
  const [ref, val] = useCountUp(n);
  return <div><b ref={ref}>{val}</b><span>{label}</span></div>;
}

function TopicCard({ tp, delay }) {
  const tilt = useTilt(9);
  const [rev, inView] = useReveal();
  const setRefs = (n) => { tilt.ref.current = n; rev.current = n; };
  return (
    <div ref={setRefs} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave}
      className={`topic glass reveal d${delay}${inView ? ' in' : ''}`}>
      <div className="glare" />
      <div className="topic-ico">
        <svg viewBox="0 0 24 24">{tp.icon.split(' M').map((d, i) => <path key={i} d={(i ? 'M' : '') + d} />)}</svg>
      </div>
      <h3>{tp.t}</h3>
      <p>{tp.d}</p>
    </div>
  );
}

export default function InsideBook({ cta = { label: 'Discover the book', href: '#/book' } }) {
  const [i, setI] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const p = parts[i];
  return (
    <section id="book" aria-labelledby="book-title">
      <div className="wrap">
        <Reveal className="sec-head">
          <Eyebrow>The Book</Eyebrow>
          <h2 id="book-title">44 chapters. Foundations to frontline crises.</h2>
          <p>RED follows the critically ill patient from early physiological deterioration through stabilization,
            definitive intervention and post-resuscitation care, while keeping the clinician’s mindset, team and
            system in view.</p>
        </Reveal>

        {/* 8 topic cards (brief §6) */}
        <div className="topics">
          {bookTopics.map((tp, k) => <TopicCard key={tp.t} tp={tp} delay={(k % 4) + 1} />)}
        </div>

        <Reveal className="different glass">
          <strong>What makes RED different.</strong> It treats resuscitation as more than a sequence of technical
          steps, returning again and again to what determines performance under pressure: physiology, timing,
          communication, systems, ethics and the ability to act before perfect information is available.
        </Reveal>

        {/* Full contents (expandable) */}
        <Reveal className="contents-toggle">
          <button className="btn btn-outline" aria-expanded={showAll} onClick={() => setShowAll((s) => !s)}>
            <span>{showAll ? 'Hide full contents' : 'View full contents'}</span>
          </button>
          <span className="contents-hint">All six parts · 44 chapters</span>
        </Reveal>

        {showAll && (
          <>
            <div className="inside">
              <div className="tabs" role="tablist" aria-label="Book sections">
                {parts.map((part, k) => (
                  <button key={part.t} role="tab" aria-selected={k === i} tabIndex={k === i ? 0 : -1}
                    className={`tab${k === i ? ' active' : ''}`} onClick={() => setI(k)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); setI((k + 1) % parts.length); }
                      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); setI((k - 1 + parts.length) % parts.length); }
                    }}>
                    {part.t}<small>{part.n}</small>
                  </button>
                ))}
              </div>
              <div className="panel glass-2" role="tabpanel" aria-live="polite">
                <svg className="ecg-bg" viewBox="0 0 400 100" aria-hidden="true">
                  <polyline points="0,60 120,60 140,60 150,20 165,95 178,60 260,60 275,45 290,60 400,60" fill="none" stroke="#E31B23" strokeWidth="4" />
                </svg>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                <ul className="chips">
                  {p.c.map((c, k) => <li key={c} style={{ animationDelay: (k * 35) + 'ms' }}>{c}</li>)}
                </ul>
              </div>
            </div>
            <Reveal><Ticker /></Reveal>
          </>
        )}

        <Reveal className="stats">
          <Stat n={44} label="chapters" />
          <Stat n={27} label="contributors" />
          <Stat n={5} label="countries" />
          <Stat n={6} label="parts" />
        </Reveal>

        <Reveal className="ctas" style={{ display: 'flex', flexWrap: 'wrap', gap: '.8rem', marginTop: '2.5rem' }}>
          <a className="btn btn-red" href={cta.href}><span>{cta.label}</span></a>
          <a className="btn btn-outline" href="#/contact"><span>Institutional and bulk orders</span></a>
          <a className="btn btn-outline" href="#/program"><span>Invite a RED program</span></a>
        </Reveal>
      </div>
    </section>
  );
}
