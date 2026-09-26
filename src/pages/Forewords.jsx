import React from 'react';
import PageIntro from '../components/PageIntro.jsx';
import Reveal from '../components/Reveal.jsx';
import { asset } from '../assets.js';
import { praise } from '../data.js';

export default function Forewords() {
  return (
    <>
      <PageIntro eyebrow="Forewords" title={<>What leaders in emergency medicine <em>say.</em></>}>
        RED opens with forewords from two internationally recognised leaders in emergency and disaster medicine.
      </PageIntro>
      <section aria-label="Forewords">
        <div className="wrap">
          <div className="forewords">
            {praise.map((p, i) => (
              <Reveal className="fw glass-2" variant={i % 2 === 0 ? 'left' : 'right'} delay={(i % 2) + 1} key={p.by}>
                <div className="fw-photo"><img src={asset('foreword-' + p.img)} alt={p.by} /></div>
                <div className="fw-body">
                  <blockquote>{p.q}</blockquote>
                  <p>{p.note}</p>
                  <cite>{p.by}</cite>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
