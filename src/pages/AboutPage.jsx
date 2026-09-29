import React from 'react';
import PageIntro from '../components/PageIntro.jsx';
import Reveal from '../components/Reveal.jsx';
import MediaBand from '../components/MediaBand.jsx';
import Scene from '../components/Scene.jsx';
import { asset } from '../assets.js';
import { clinicalAreas, foundations } from '../data.js';

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About RED" title={<>From foundations to the <em>crashing patient.</em></>}>
        RED brings together 44 chapters covering the foundations of resuscitation and the major time-critical
        emergencies encountered in contemporary emergency practice, moving from the resuscitation mindset,
        physiology, pharmacology, blood products, team dynamics, ethics, devices and trainee facilitation into
        practical resuscitation scenarios.
      </PageIntro>

      <section aria-label="Foundations">
        <div className="wrap">
          <Reveal className="found glass">
            <h3>Part I, Foundations of Resuscitation</h3>
            <ul className="chips">{foundations.map((c) => <li key={c}>{c}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      <section aria-label="Clinical areas">
        <div className="wrap">
          <Reveal as="h2" className="areas-h">Clinical resuscitation scenarios</Reveal>
          <div className="areas">
            {clinicalAreas.map((a, i) => (
              <Reveal className="area glass" delay={(i % 3) + 1} key={a.t}>
                <h3>{a.t}</h3>
                <ul className="chips">{a.c.map((c) => <li key={c}>{c}</li>)}</ul>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: '2.4rem' }}>
            <a className="btn btn-red" href="#/book"><span>Explore the book</span></a>
          </Reveal>
        </div>
      </section>

      <MediaBand
        src="/band-ecg.jpg"
        kicker="Foundations to frontline crises"
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

      <section id="author" aria-labelledby="author-title">
        <div className="wrap">
          <Reveal className="author glass-2">
            <div className="author-photo"><img src={asset('author')} alt="Dr Shahan Waheed" /></div>
            <div>
              <span className="eyebrow"><svg viewBox="0 0 34 14" aria-hidden="true"><polyline points="0,7 10,7 13,1 17,13 20,7 34,7" fill="none" stroke="currentColor" strokeWidth="2" /></svg>About the author</span>
              <h2 id="author-title">Dr Shahan Waheed</h2>
              <p className="author-cred">Associate Professor of Emergency Medicine</p>
              <p>Dr Shahan Waheed is a Fellow of the College of Physicians and Surgeons Pakistan in Emergency Medicine,
                holds a PhD in Clinical Sciences, and is a Fellow of the Higher Education Academy. He is a Certified
                Emergency Department Executive and General Secretary of the Pakistan Society of Emergency Medicine.</p>
              <p>His academic and professional work spans emergency care, resuscitation, clinical leadership,
                medical education, research and healthcare-systems improvement, with numerous peer-reviewed
                publications, books, chapters and educational resources to his name.</p>
              <a className="btn btn-outline" href="#/author" style={{ marginTop: '.4rem' }}><span>Read full profile</span></a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
