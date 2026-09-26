import React from 'react';
import Reveal from './Reveal.jsx';

export default function WhyRED() {
  return (
    <section aria-labelledby="why-title">
      <div className="wrap">
        <Reveal className="why">
          <h2 id="why-title">Resuscitation starts <em>before arrest.</em></h2>
          <div>
            <p>Critical illness often declares itself before collapse. RED is built around early recognition,
              physiology-first thinking, decisive action, team performance and continuous reassessment.</p>
            <p className="pull glass">The best resuscitation may be the <span>arrest you prevent.</span></p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
