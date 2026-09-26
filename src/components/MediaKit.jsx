import React from 'react';
import Reveal, { Eyebrow } from './Reveal.jsx';
import { mediaKit } from '../data.js';

export default function MediaKit() {
  return (
    <section id="media" aria-labelledby="mk-title">
      <div className="wrap">
        <Reveal className="sec-head">
          <Eyebrow>Press & Media</Eyebrow>
          <h2 id="mk-title">Media kit</h2>
          <p>Everything journalists, event partners and institutions need to feature RED. Assets are available on
            request and will be downloadable here from launch.</p>
        </Reveal>
        <div className="mediakit">
          {mediaKit.map((m, i) => (
            <Reveal className="mk-item glass" delay={(i % 4) + 1} key={m.t}>
              <span className="mk-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{m.t}</h3>
              <p>{m.d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mk-cta">
          <a className="btn btn-red" href="#contact"><span>Request the media kit</span></a>
          <a className="btn btn-outline" href="#contact"><span>Media & interview enquiries</span></a>
        </Reveal>
      </div>
    </section>
  );
}
