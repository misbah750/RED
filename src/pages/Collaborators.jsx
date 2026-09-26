import React from 'react';
import PageIntro from '../components/PageIntro.jsx';
import Reveal, { Eyebrow } from '../components/Reveal.jsx';
import Globe from '../components/Globe.jsx';
import { countries } from '../data.js';
import { useCountUp } from '../hooks.js';

function Stat({ n, label }) {
  const [ref, val] = useCountUp(n);
  return <div><b ref={ref}>{val}</b><span>{label}</span></div>;
}

export default function Collaborators() {
  return (
    <>
      <PageIntro eyebrow="Collaborators" title={<>Global knowledge. <em>Local reality.</em></>}>
        The principles of resuscitation are universal. The environments in which clinicians deliver them are not.
        RED has been developed with particular recognition of the realities faced by clinicians working where
        intensive-care capacity, diagnostics, monitoring, medications, equipment or specialist availability may be constrained.
      </PageIntro>

      <section className="contrib" aria-label="Contributor countries">
        <span className="aurora a1" style={{ right: '-6%', top: '-6%' }} aria-hidden="true" />
        <span className="aurora a2" style={{ left: '-8%', bottom: '-12%' }} aria-hidden="true" />
        <div className="wrap">
          <Reveal variant="left">
            <Eyebrow>International contributors</Eyebrow>
            <h2>Global knowledge, delivered <em>where it is needed.</em></h2>
            <p>The contributing faculty represents emergency medicine and related expertise from Pakistan, the United
              States, Canada, the United Arab Emirates, the United Kingdom and other international settings, bringing
              different healthcare perspectives into a common conversation about critically ill patients.</p>
            <div className="stats globe-stats">
              <Stat n={27} label="contributors" />
              <Stat n={5} label="countries" />
              <Stat n={3} label="continents" />
            </div>
            <div className="countries">
              {countries.map((c) => <div className="glass" key={c.n}><i />{c.n}</div>)}
            </div>
          </Reveal>
          <Reveal className="globe" variant="right" delay={2}>
            <div className="globe-glow" aria-hidden="true" />
            <Globe />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="systems-title">
        <div className="wrap why">
          <h2 id="systems-title">Reliable systems over <em>unlimited technology.</em></h2>
          <div>
            <p>Rather than assuming that high-quality resuscitation depends on unlimited technology, RED emphasises
              reliable systems, trained people, thoughtful preparation, adaptability and disciplined execution.</p>
            <p className="pull glass">Written for emergency care <span>across different health systems.</span></p>
          </div>
        </div>
      </section>
    </>
  );
}
