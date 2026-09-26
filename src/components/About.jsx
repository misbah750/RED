import React from 'react';
import Reveal, { Eyebrow } from './Reveal.jsx';
import { faqs, partners } from '../data.js';

export default function About() {
  return (
    <section id="about" aria-labelledby="ab-title">
      <div className="wrap about">
        <Reveal>
          <Eyebrow>About RED</Eyebrow>
          <h2 id="ab-title">Science. Systems. Skills. <em>When seconds matter.</em></h2>
          <p>RED began as a book and is designed to grow as a platform for resuscitation education. Its purpose is to
            connect evidence, clinical reasoning, teamwork and practical training for clinicians caring for critically
            ill and injured patients, grounded in the realities of emergency care and open to collaboration across
            institutions and countries.</p>
          <p>High-quality resuscitation is not a heroic act by one clinician. It is the product of people, equipment,
            protocols, communication, leadership and a system designed to perform reliably under pressure.</p>
        </Reveal>
        <Reveal delay={2}>
          <div className="editor glass-2">
            <div className="avatar" aria-hidden="true">SW</div>
            <div>
              <h3>Shahan Waheed</h3>
              <p className="cred">MBBS, FCPS (EM), PhD (Clinical Sciences), FHEA (UK), CEDE<br />
                Associate Professor of Emergency Medicine<br />
                Fogarty Trauma, Violence and Injury Prevention Fellow</p>
              <p className="bio">Editor of RED. A 90 to 120 word professional bio and portrait will appear here once approved.</p>
            </div>
          </div>
          <div className="about-strip glass">
            <h4>Faculty &amp; advisory group</h4>
            <p>A faculty and advisory group of emergency and critical-care clinicians and educators supports RED. Profiles
              will appear here as the platform grows.</p>
          </div>
          <div className="about-strip glass">
            <h4>Partners</h4>
            <ul className="partner-list">
              {partners.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <p className="partner-note">Institutional logos are shown with written permission.</p>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
