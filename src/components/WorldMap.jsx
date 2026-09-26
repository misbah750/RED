import React from 'react';
import { countries } from '../data.js';

const W = 1000, H = 500;
const px = (lon) => ((lon + 180) / 360) * W;
const py = (lat) => ((90 - lat) / 180) * H;

export default function WorldMap() {
  const pts = countries.map((c) => ({ ...c, x: px(c.lon), y: py(c.lat) }));
  const origin = pts[0]; // Pakistan
  // faint dot grid
  const dots = [];
  for (let x = 24; x < W; x += 26) for (let y = 24; y < H; y += 26) dots.push([x, y]);
  return (
    <div className="worldmap glass-2">
      <svg viewBox={`0 40 ${W} 330`} preserveAspectRatio="xMidYMid meet" role="img" aria-label="World map highlighting Pakistan, USA, Canada, UK and UAE">
        <defs>
          <radialGradient id="wmGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(227,27,35,.22)" />
            <stop offset="100%" stopColor="rgba(227,27,35,0)" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width={W} height={H} fill="url(#wmGlow)" />
        <g className="wm-dots">{dots.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1.6" />)}</g>
        {/* graticule */}
        <g className="wm-grid">
          {[...Array(11)].map((_, i) => <line key={'v' + i} x1={(i + 1) * W / 12} y1="0" x2={(i + 1) * W / 12} y2={H} />)}
          {[...Array(5)].map((_, i) => <line key={'h' + i} x1="0" y1={(i + 1) * H / 6} x2={W} y2={(i + 1) * H / 6} />)}
        </g>
        {/* arcs from Pakistan */}
        <g className="wm-arcs">
          {pts.slice(1).map((p, i) => {
            const mx = (origin.x + p.x) / 2, my = Math.min(origin.y, p.y) - 34;
            return <path key={i} d={`M${origin.x},${origin.y} Q${mx},${my} ${p.x},${p.y}`} />;
          })}
        </g>
        {/* pins */}
        <g className="wm-pins">
          {pts.map((p, i) => (
            <g key={p.n} transform={`translate(${p.x},${p.y})`}>
              <circle className="wm-ping" r="10" style={{ animationDelay: (i * 0.4) + 's' }} />
              <circle className="wm-dot" r="6" />
              <text x="12" y="5">{p.s}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
