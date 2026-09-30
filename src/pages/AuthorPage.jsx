import React from 'react';
import Reveal, { Eyebrow } from '../components/Reveal.jsx';
import MediaBand from '../components/MediaBand.jsx';
import { asset } from '../assets.js';

const roles = [
  { t: 'Associate Professor Emergency Medicine', d: 'Academic emergency medicine' },
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
              <Reveal as="p" className="au-bio" delay={3}>
                Dr Shahan Waheed is an Associate Professor Emergency Medicine. He is a Fellow of the College of
                Physicians and Surgeons Pakistan in Emergency Medicine, holds a PhD in Clinical Sciences, and is a
                Fellow of the Higher Education Academy. He is also a Certified Emergency Department Executive and
                General Secretary of the Pakistan Society of Emergency Medicine.
              </Reveal>
              <Reveal as="p" className="au-bio" delay={3}>
                His academic and professional work spans emergency care, resuscitation, clinical leadership, medical
                education, research and healthcare-systems improvement. He has authored numerous peer-reviewed
                publications, books, chapters and educational resources, and has received several teaching awards,
                fellowships, and intramural and extramural research grants.
              </Reveal>
              <Reveal className="ctas" delay={4} style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
                <a className="btn btn-linkedin" href="https://www.linkedin.com/in/shahan-waheed-mbbs-fcps-fhea-macadmed-cede-phd-b055ab71"
                  target="_blank" rel="noopener noreferrer">
                  <span>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05C13.4 9.6 15 9 16.6 9 21 9 21 12 21 15.3V21h-4v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H9z" /></svg>
                    Connect on LinkedIn
                  </span>
                </a>
                <a className="btn btn-outline" href="#/contact"><span>Get in touch</span></a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <MediaBand
        src="/scene-monitor.jpg"
        kicker="At the bedside"
        caption="Experience distilled into a practical guide."
        alt="Emergency clinician managing a critically ill patient at the bedside"
      />

      <section aria-label="Focus areas">
        <div className="wrap">
          <Reveal className="au-focus glass-2">
            <h3>Areas of focus</h3>
            <ul className="chips">{focus.map((f) => <li key={f}>{f}</li>)}</ul>
          </Reveal>
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
          <Reveal as="p" className="pull glass au-closing">RED distils that experience into a resource for clinicians who must
            <span> act when seconds matter.</span></Reveal>
        </div>
      </section>
    </>
  );
}
