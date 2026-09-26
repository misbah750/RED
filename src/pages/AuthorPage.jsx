import React from 'react';
import Reveal, { Eyebrow } from '../components/Reveal.jsx';
import { asset } from '../assets.js';

const badges = ['MBBS', 'FCPS, Emergency Medicine', 'PhD, Clinical Sciences', 'FHEA', 'Certified ED Executive'];
const roles = [
  { t: 'Associate Professor of Emergency Medicine', d: 'Aga Khan University Hospital' },
  { t: 'Section Head, Adult Emergency Medicine', d: 'Aga Khan University Hospital' },
  { t: 'General Secretary', d: 'Pakistan Society of Emergency Medicine' },
  { t: 'Fellow, Higher Education Academy', d: 'Medical education & teaching' },
];
const focus = ['Emergency care', 'Resuscitation', 'Clinical leadership', 'Medical education', 'Research', 'Healthcare-systems improvement'];

export default function AuthorPage() {
  return (
    <>
      <section className="author-hero" aria-labelledby="au-title">
        <span className="aurora a1" style={{ right: '-6%', top: '-8%' }} aria-hidden="true" />
        <span className="aurora a2" style={{ left: '-8%', bottom: '-10%' }} aria-hidden="true" />
        <div className="wrap">
          <div className="author-hero-grid">
            <Reveal className="author-portrait">
              <div className="ap-glow" aria-hidden="true" />
              <div className="ap-frame">
                <img src={asset('author')} alt="Dr Shahan Waheed" />
                <svg className="ap-pulse" viewBox="0 0 200 40" aria-hidden="true"><polyline points="0,20 60,20 72,20 80,6 92,34 100,20 200,20" fill="none" stroke="#E31B23" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </Reveal>
            <div className="author-hero-copy">
              <Reveal><Eyebrow>About the author</Eyebrow></Reveal>
              <Reveal as="h1" id="au-title" delay={1}>Dr Shahan Waheed</Reveal>
              <Reveal as="p" className="au-role" delay={2}>Associate Professor of Emergency Medicine · Section Head, Adult Emergency Medicine, Aga Khan University Hospital</Reveal>
              <Reveal className="au-badges" delay={3}>
                {badges.map((b) => <span key={b}>{b}</span>)}
              </Reveal>
              <Reveal as="p" className="au-bio" delay={3}>
                Dr Shahan Waheed is an Associate Professor of Emergency Medicine at Aga Khan University Hospital and
                serves as Section Head of Adult Emergency Medicine. He is a Fellow of the College of Physicians and
                Surgeons Pakistan in Emergency Medicine, holds a PhD in Clinical Sciences, and is a Fellow of the
                Higher Education Academy. He is also a Certified Emergency Department Executive and General Secretary
                of the Pakistan Society of Emergency Medicine.
              </Reveal>
              <Reveal className="ctas" delay={4} style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
                <a className="btn btn-red" href="#/book"><span>Explore the book</span></a>
                <a className="btn btn-outline" href="#/contact"><span>Get in touch</span></a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Roles">
        <div className="wrap">
          <Reveal as="h2" className="areas-h">Roles &amp; appointments</Reveal>
          <div className="au-roles">
            {roles.map((r, i) => (
              <Reveal className="au-role-card glass" delay={(i % 4) + 1} key={r.t}>
                <span className="au-role-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" /><path d="M9 12l2 2 4-4" /></svg></span>
                <h3>{r.t}</h3>
                <p>{r.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="au-work-title">
        <div className="wrap why">
          <h2 id="au-work-title">A career across care, education <em>and research.</em></h2>
          <div>
            <p>His academic and professional work spans emergency care, resuscitation, clinical leadership, medical
              education, research and healthcare-systems improvement. He has authored numerous peer-reviewed
              publications, books, chapters and educational resources, and has received several teaching awards,
              fellowships, and intramural and extramural research grants.</p>
            <p className="pull glass">RED distils that experience into a resource for clinicians who must
              <span> act when seconds matter.</span></p>
          </div>
        </div>
      </section>

      <section aria-label="Focus areas">
        <div className="wrap">
          <Reveal className="au-focus glass-2">
            <h3>Areas of focus</h3>
            <ul className="chips">{focus.map((f) => <li key={f}>{f}</li>)}</ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
