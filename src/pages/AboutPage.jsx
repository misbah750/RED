import React from 'react';
import PageIntro from '../components/PageIntro.jsx';
import Reveal from '../components/Reveal.jsx';
import MediaBand from '../components/MediaBand.jsx';
import Scene from '../components/Scene.jsx';
import { foundations } from '../data.js';

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About RED" title={<>From foundations to the <em>crashing patient.</em></>}>
        RED brings together 44 chapters covering the foundations of resuscitation and the major time-critical
        emergencies encountered in contemporary emergency practice.
      </PageIntro>

      <section aria-label="Foundations">
        <div className="wrap">
          <Reveal className="found glass">
            <h3>Part I, Foundations of Resuscitation</h3>
            <ul className="chips">{foundations.map((c) => <li key={c}>{c}</li>)}</ul>
          </Reveal>
          <Reveal style={{ marginTop: '2rem' }}>
            <a className="btn btn-red" href="#/book"><span>See the full contents</span></a>
          </Reveal>
        </div>
      </section>

      <MediaBand
        src="/band-ecg.jpg"
        kicker="Across the emergency spectrum"
        caption="One continuous, physiology-driven process."
        alt="Resuscitation imagery: defibrillation, airway, ultrasound, blood products and monitoring with an ECG trace"
      />

      <section aria-labelledby="human-title">
        <div className="wrap feature">
          <Scene className="feature-media" src="/scene-team.jpg" alt="Resuscitation team working together under pressure" />
          <div className="feature-copy">
            <h2 id="human-title">The human side of <em>resuscitation.</em></h2>
            <p>The most difficult resuscitations are rarely solved by knowledge alone. They require clinicians to lead
              under pressure, communicate clearly, recognise changing trajectories, distribute tasks, manage cognitive
              overload, and adapt when the original plan is no longer working.</p>
            <p className="pull glass">RED treats leadership, communication, human factors, ethics and teamwork as
              <span> core components</span> of resuscitation, because resuscitation is both a clinical act and a human endeavour.</p>
          </div>
        </div>
      </section>

    </>
  );
}
