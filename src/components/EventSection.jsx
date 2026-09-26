import React from 'react';
import Reveal, { Eyebrow } from './Reveal.jsx';
import { events } from '../data.js';

const CAL = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=RED%20Book%20Launch%20%E2%80%94%20Resuscitation%20in%20the%20Emergency%20Department&dates=20261103/20261104&details=Launch%20of%20Resuscitation%20in%20the%20Emergency%20Department%20(RED).%20Time%20and%20venue%20to%20be%20confirmed.';

export default function EventSection({ launched }) {
  const featured = events.find((e) => e.primary) || events[0];
  const rest = events.filter((e) => e !== featured);
  return (
    <section id="events" aria-labelledby="ev-title">
      <div className="wrap">
        <Reveal className="sec-head">
          <Eyebrow>Events</Eyebrow>
          <h2 id="ev-title">Book launch &amp; upcoming events</h2>
          <p>The launch is the first RED event, not the last. Workshops, simulation days and webinars follow, all
            managed as calendar events so the same page keeps working long after launch.</p>
        </Reveal>

        <Reveal className="event glass-2">
          <div className="date"><b>{featured.d}</b><span>{featured.m} {featured.y}</span></div>
          <div style={{ position: 'relative' }}>
            <span className={`status status-live`}>{launched ? 'Completed' : featured.status}</span>
            <h3>{featured.title}</h3>
            <dl>
              <dt>Time</dt><dd>{featured.time}</dd>
              <dt>Venue</dt><dd>{featured.venue}</dd>
              <dt>For</dt><dd>{featured.audience}</dd>
            </dl>
          </div>
          <div className="acts">
            <a className="btn btn-red" href="#join"><span>{launched ? 'Get the book' : 'Register / RSVP'}</span></a>
            <a className="btn btn-glass" target="_blank" rel="noopener" href={CAL}><span>Add to calendar</span></a>
          </div>
        </Reveal>

        <div className="ev-list">
          {rest.map((e) => (
            <Reveal className="ev-row glass" key={e.title}>
              <div className="ev-when"><b>{e.m}</b><span>{e.y}</span></div>
              <div className="ev-body">
                <span className="ev-kind">{e.kind}</span>
                <h4>{e.title}</h4>
                <p>{e.venue} · {e.audience}</p>
              </div>
              <span className="status status-soon">{e.status}</span>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="note">
          Dates, venues and registration are managed through the Events system and update automatically. Past events
          will show galleries, highlights and recordings here after they take place.
        </Reveal>
      </div>
    </section>
  );
}
