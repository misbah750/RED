import React from 'react';
import PageIntro from '../components/PageIntro.jsx';
import Reveal from '../components/Reveal.jsx';
import Newsletter from '../components/Newsletter.jsx';
import MediaBand from '../components/MediaBand.jsx';
import Countdown from '../components/Countdown.jsx';

const CAL = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=RED%20Book%20Launch%20%E2%80%94%20Resuscitation%20in%20the%20Emergency%20Department&dates=20261103/20261104&details=Launch%20of%20Resuscitation%20in%20the%20Emergency%20Department%20(RED).%20Time%20and%20venue%20to%20be%20confirmed.';

export default function Events({ cd, launched }) {
  return (
    <>
      <PageIntro eyebrow="Events" title={<>Events, <em>coming soon.</em></>}>
        The book launch is the first RED event. Workshops, simulation days and webinars will follow and be listed here.
      </PageIntro>

      <MediaBand
        src="/scene-corridor.jpg"
        kicker="The first RED event"
        caption="When seconds matter, preparation becomes survival."
        alt="Emergency team rushing a patient on a stretcher through a hospital corridor"
      />

      <section aria-label="Launch">
        <div className="wrap">
          <Reveal className="event glass-2">
            <div className="date"><b>03</b><span>Nov 2026</span></div>
            <div style={{ position: 'relative' }}>
              <span className="status status-live">{launched ? 'Completed' : 'Upcoming'}</span>
              <h3>RED, Resuscitation in the Emergency Department: Book Launch</h3>
              <dl>
                <dt>Date</dt><dd>03 November 2026</dd>
                <dt>Time</dt><dd>To be confirmed</dd>
                <dt>Venue</dt><dd>To be confirmed</dd>
              </dl>
              {!launched && <Countdown cd={cd} className="cd-compact" />}
            </div>
            <div className="acts">
              <a className="btn btn-red" href="#join"><span>Get launch updates</span></a>
              <a className="btn btn-glass" target="_blank" rel="noopener" href={CAL}><span>Add to calendar</span></a>
            </div>
          </Reveal>
          <Reveal as="p" className="note">More events, including workshops, seminars and webinars, will appear here. Past events will show highlights and recordings.</Reveal>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
