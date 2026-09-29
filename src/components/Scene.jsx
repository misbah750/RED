import React from 'react';
import { useReveal } from '../hooks.js';

// A framed artwork tile: clips + fades in on scroll, zooms gently on hover,
// with a red gradient wash and corner accents that keep the dark brand.
export default function Scene({ src, alt = '', className = '', caption }) {
  const [ref, inView] = useReveal(0.2);
  return (
    <figure ref={ref} className={`scene${inView ? ' in' : ''} ${className}`.trim()}>
      <div className="scene-media">
        <img src={src} alt={alt} loading="lazy" />
        <span className="scene-wash" aria-hidden="true" />
      </div>
      {caption && <figcaption className="scene-cap">{caption}</figcaption>}
    </figure>
  );
}
