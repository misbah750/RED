import React from 'react';
import { useReveal } from '../hooks.js';

// A thin ECG line that draws itself across the screen as it scrolls into view,
// with a small travelling blip — a themed, premium section divider.
export default function PulseDivider() {
  const [ref, inView] = useReveal(0.35);
  return (
    <div ref={ref} className={`pulse-divider${inView ? ' in' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="pd-svg">
        <defs>
          <linearGradient id="pdFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#E31B23" stopOpacity="0" />
            <stop offset="0.5" stopColor="#E31B23" stopOpacity="0.9" />
            <stop offset="1" stopColor="#E31B23" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline className="pd-line"
          points="0,20 470,20 500,20 516,7 532,33 548,20 566,14 580,26 596,20 740,20 1200,20"
          fill="none" stroke="url(#pdFade)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
