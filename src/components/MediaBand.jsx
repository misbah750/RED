import React from 'react';
import { useReveal } from '../hooks.js';

// Full-bleed cinematic image band: the artwork wipes + zooms in on scroll,
// with a scrim and an optional caption overlay.
export default function MediaBand({ src, kicker, caption, alt = '' }) {
  const [ref, inView] = useReveal(0.18);
  return (
    <section ref={ref} className={`media-band${inView ? ' in' : ''}`} aria-label={alt || caption || 'Resuscitation imagery'}>
      <div className="media-band-img" style={{ backgroundImage: `url(${src})` }} role="img" aria-label={alt} />
      <div className="media-band-scrim" aria-hidden="true" />
      {(kicker || caption) && (
        <div className="wrap media-band-copy">
          {kicker && <span className="media-band-kicker">{kicker}</span>}
          {caption && <p className="media-band-cap">{caption}</p>}
        </div>
      )}
    </section>
  );
}
