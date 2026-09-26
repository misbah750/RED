import React from 'react';
import Hero from '../components/Hero.jsx';
import Principles from '../components/Principles.jsx';
import Newsletter from '../components/Newsletter.jsx';
import PulseDivider from '../components/PulseDivider.jsx';
import Reveal, { Eyebrow } from '../components/Reveal.jsx';
import { questions } from '../data.js';

export default function Home({ cd }) {
  return (
    <>
      <Hero cd={cd} />

      <section aria-labelledby="reality-title">
        <div className="wrap">
          <Reveal className="sec-head">
            <Eyebrow>Physiology · Decisions · Teamwork · Systems</Eyebrow>
            <h2 id="reality-title">RED was created around a simple reality.</h2>
            <p>The emergency department has become one of the most important environments for the delivery of critical
              care. Patients arrive undifferentiated, often without warning, frequently without complete information,
              and sometimes already close to physiological collapse. Emergency physicians must stabilise first,
              reassess continuously, and make important decisions while diagnostic certainty is still evolving.</p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="cont-title">
        <div className="wrap why">
          <h2 id="cont-title">Resuscitation is not a moment.<br /><em>It is a continuum.</em></h2>
          <div>
            <p>Modern resuscitation is not limited to cardiac arrest. It begins with the first recognition of shock,
              hypoxia, altered mental status, respiratory failure, hemorrhage or impending organ dysfunction, and its
              purpose is, wherever possible, to prevent arrest from occurring at all.</p>
            <p className="pull glass">The best resuscitation may be the one that <span>makes CPR unnecessary.</span></p>
          </div>
        </div>
      </section>

      <PulseDivider />

      <Principles />

      <PulseDivider />

      <section aria-labelledby="certainty-title">
        <span className="aurora a2" style={{ left: '-6%', top: '20%' }} aria-hidden="true" />
        <div className="wrap">
          <Reveal className="sec-head">
            <Eyebrow>When certainty can wait, but action cannot</Eyebrow>
            <h2 id="certainty-title">A different way to think about the critically ill patient.</h2>
            <p>Resuscitation is inherently physiology-driven. Whether the underlying problem is trauma, sepsis,
              poisoning, asthma, cardiogenic shock or obstetric hemorrhage, the immediate goal is similar: preserve
              oxygen delivery, maintain perfusion, prevent irreversible cellular injury, and buy time for definitive
              treatment. RED encourages clinicians to look beyond diagnostic labels and ask:</p>
          </Reveal>
          <div className="qgrid">
            {questions.map((q, i) => (
              <Reveal className="qcard glass" delay={(i % 4) + 1} key={q}>
                <span className="qnum">{String(i + 1).padStart(2, '0')}</span>
                <p>{q}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
