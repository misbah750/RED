import React from 'react';

// One circular unit: a track ring + a red progress arc that reflects the value,
// with the number and label centred. The arc animates as the value changes.
function Ring({ value, max, label }) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(value / max, 1));
  const off = c * (1 - pct);
  const str = String(value).padStart(2, '0');
  return (
    <div className="cdr">
      <svg className="cdr-svg" viewBox="0 0 128 128" aria-hidden="true">
        <circle className="cdr-track" cx="64" cy="64" r={r} />
        <circle className="cdr-arc" cx="64" cy="64" r={r}
          style={{ strokeDasharray: c, strokeDashoffset: off }} />
      </svg>
      <span className="cdr-inner">
        <b className="cdr-num">{str}</b>
        <span className="cdr-label">{label}</span>
      </span>
    </div>
  );
}

export default function Countdown({ cd, className = '' }) {
  return (
    <div className={`cd-rings ${className}`.trim()} role="timer" aria-live="polite"
      aria-label={`${cd.d} days, ${cd.h} hours, ${cd.m} minutes, ${cd.s} seconds until launch`}>
      <Ring value={cd.d} max={Math.max(cd.d, 45)} label="days" />
      <Ring value={cd.h} max={24} label="hours" />
      <Ring value={cd.m} max={60} label="minutes" />
      <Ring value={cd.s} max={60} label="seconds" />
    </div>
  );
}
