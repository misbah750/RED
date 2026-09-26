import React, { useMemo } from 'react';
import { parts } from '../data.js';

export default function Ticker() {
  const topics = useMemo(() => parts.flatMap((p) => p.c), []);
  const row = topics.join('\u2003');
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        <span>{row}</span><span>{row}</span>
      </div>
    </div>
  );
}
