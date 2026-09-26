import React from 'react';
import PageIntro from '../components/PageIntro.jsx';
import Reveal from '../components/Reveal.jsx';
import { programs } from '../data.js';

export default function Program() {
  return (
    <>
      <PageIntro eyebrow="Program" title={<>RED programs, <em>coming soon.</em></>}>
        RED is being developed as a continuing platform for resuscitation education, moving from reading to rehearsal.
        Programs are in preparation and will be announced here.
      </PageIntro>
      <section aria-label="Programs">
        <div className="wrap">
          <Reveal className="soon-badge glass"><span className="live-dot" /> In development</Reveal>
          <div className="programs" style={{ marginTop: '1.6rem' }}>
            {programs.map((p, i) => (
              <Reveal className="prog glass" delay={(i % 3) + 1} key={p.t}>
                <span className="tag">Planned</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: '2.4rem', display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
            <a className="btn btn-red" href="#/contact"><span>Invite RED to your institution</span></a>
            <a className="btn btn-outline" href="#/events"><span>Get launch updates</span></a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
