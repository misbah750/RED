import React from 'react';
import Hero from '../components/Hero.jsx';
import Newsletter from '../components/Newsletter.jsx';
import PulseDivider from '../components/PulseDivider.jsx';
import MediaBand from '../components/MediaBand.jsx';
import Scene from '../components/Scene.jsx';
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

      <MediaBand
        src="/band-airway.jpg"
        kicker="From recognition to definitive care"
        caption="Science. Systems. Skills. When seconds matter."
        alt="Emergency resuscitation modalities: defibrillation, airway management, IV access, point-of-care ultrasound and monitoring"
      />

      <section aria-labelledby="bay-title">
        <div className="wrap">
          <Reveal className="sec-head">
            <Eyebrow>Inside the resuscitation bay</Eyebrow>
            <h2 id="bay-title">Where seconds decide <em>outcomes.</em></h2>
            <p>Real resuscitation is physiology, teamwork and disciplined action under pressure, captured in the
              moments that decide whether a patient recovers.</p>
          </Reveal>
          <div className="scene-grid">
            <Scene className="scene-tall" src="/scene-cpr.jpg" alt="Resuscitation team performing chest compressions" />
            <Scene src="/scene-monitor.jpg" alt="Clinician managing the airway with vital-sign monitor readouts" />
            <Scene src="/scene-or.jpg" alt="Emergency team resuscitating a patient under theatre lights" />
          </div>
        </div>
      </section>

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

      <section aria-label="From the editor of RED">
        <div className="wrap">
          <Reveal className="quote-banner">
            <img
              src="/author-quote.jpg"
              alt="Dr Shahan Waheed: Resuscitation in the Emergency Department equips every emergency clinician with the practical framework, confidence, and clarity needed when minutes matter and every decision can change an outcome."
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
