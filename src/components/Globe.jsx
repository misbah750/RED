import React, { useEffect, useRef } from 'react';
import { countries } from '../data.js';
import { usePrefersReducedMotion } from '../hooks.js';

// Rotating dotted earth globe: red atmosphere, pulsing country pins,
// and arcs from Pakistan with signals travelling along them.
export default function Globe() {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const cv = ref.current;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const CSS = 520;                       // layout size in px
    const S = CSS * dpr;                    // backing-store size
    cv.width = S; cv.height = S;
    cv.style.width = cv.style.height = '100%';
    const ctx = cv.getContext('2d');
    const R = S * 0.40;
    const cxp = S / 2, cyp = S / 2;

    // fibonacci sphere of dots (the "land" texture)
    const pts = [];
    const N = 1300;
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = i * 2.39996323;
      pts.push([Math.cos(th) * r, y, Math.sin(th) * r]);
    }
    const ll = (lat, lon) => {
      const a = lat * Math.PI / 180, b = lon * Math.PI / 180;
      return [Math.cos(a) * Math.sin(b), Math.sin(a), Math.cos(a) * Math.cos(b)];
    };

    let rot = -1.0; const tilt = 0.34; let raf; const t0 = performance.now();
    const proj = (p) => {
      const x = p[0] * Math.cos(rot) - p[2] * Math.sin(rot);
      const z = p[0] * Math.sin(rot) + p[2] * Math.cos(rot), y = p[1];
      const y2 = y * Math.cos(tilt) - z * Math.sin(tilt);
      const z2 = y * Math.sin(tilt) + z * Math.cos(tilt);
      return [cxp + x * R, cyp - y2 * R, z2];
    };
    const qbez = (a, c, b, t) => {
      const u = 1 - t;
      return [u * u * a[0] + 2 * u * t * c[0] + t * t * b[0],
              u * u * a[1] + 2 * u * t * c[1] + t * t * b[1]];
    };

    const draw = (now) => {
      const el = now - t0;
      ctx.clearRect(0, 0, S, S);

      // atmosphere halo
      const halo = ctx.createRadialGradient(cxp, cyp, R * 0.75, cxp, cyp, R * 1.35);
      halo.addColorStop(0, 'rgba(227,27,35,.30)');
      halo.addColorStop(0.55, 'rgba(184,15,24,.10)');
      halo.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = halo;
      ctx.beginPath(); ctx.arc(cxp, cyp, R * 1.35, 0, 7); ctx.fill();

      // sphere body (subtle inner shading)
      const body = ctx.createRadialGradient(cxp - R * 0.35, cyp - R * 0.4, R * 0.1, cxp, cyp, R);
      body.addColorStop(0, 'rgba(40,12,14,.55)');
      body.addColorStop(1, 'rgba(8,8,10,.9)');
      ctx.fillStyle = body;
      ctx.beginPath(); ctx.arc(cxp, cyp, R, 0, 7); ctx.fill();

      // dotted land, front hemisphere only, brighter toward the centre
      for (let i = 0; i < pts.length; i++) {
        const q = proj(pts[i]);
        if (q[2] < 0) continue;
        const a = 0.06 + q[2] * 0.55;
        ctx.fillStyle = `rgba(255,${120 - q[2] * 40},${125 - q[2] * 45},${a})`;
        ctx.beginPath(); ctx.arc(q[0], q[1], 1.5 * dpr, 0, 7); ctx.fill();
      }

      // rim light
      ctx.lineWidth = 1.5 * dpr;
      ctx.strokeStyle = 'rgba(227,27,35,.5)';
      ctx.beginPath(); ctx.arc(cxp, cyp, R, 0, 7); ctx.stroke();

      // country points
      const P = countries.map((c) => proj(ll(c.lat, c.lon)).concat([c.s]));
      const origin = P[0]; // Pakistan

      // arcs from Pakistan + travelling signal
      for (let k = 1; k < P.length; k++) {
        const b = P[k];
        if (origin[2] < -0.05 || b[2] < -0.05) continue;
        const mx = (origin[0] + b[0]) / 2, my = (origin[1] + b[1]) / 2 - R * 0.5;
        const ctrl = [mx, my];
        ctx.lineWidth = 1.6 * dpr;
        ctx.strokeStyle = 'rgba(227,27,35,.45)';
        ctx.beginPath(); ctx.moveTo(origin[0], origin[1]);
        ctx.quadraticCurveTo(mx, my, b[0], b[1]); ctx.stroke();
        // signal dot travelling outward
        const t = ((el / 2200 + k * 0.18) % 1);
        const s = qbez(origin, ctrl, b, t);
        const gg = ctx.createRadialGradient(s[0], s[1], 0, s[0], s[1], 7 * dpr);
        gg.addColorStop(0, 'rgba(255,120,125,.95)');
        gg.addColorStop(1, 'rgba(227,27,35,0)');
        ctx.fillStyle = gg;
        ctx.beginPath(); ctx.arc(s[0], s[1], 7 * dpr, 0, 7); ctx.fill();
      }

      // pins + pulse rings + labels
      const pulse = (Math.sin(el / 520) + 1) / 2;
      for (let k = 0; k < P.length; k++) {
        const q = P[k];
        if (q[2] < 0) continue;
        ctx.strokeStyle = `rgba(227,27,35,${0.5 * (1 - pulse)})`;
        ctx.lineWidth = 2 * dpr;
        ctx.beginPath(); ctx.arc(q[0], q[1], (7 + pulse * 16) * dpr, 0, 7); ctx.stroke();
        ctx.fillStyle = '#E31B23';
        ctx.beginPath(); ctx.arc(q[0], q[1], 5 * dpr, 0, 7); ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(q[0], q[1], 2 * dpr, 0, 7); ctx.fill();
        // label
        ctx.font = `700 ${15 * dpr}px Inter, Arial, sans-serif`;
        ctx.shadowColor = 'rgba(0,0,0,.9)'; ctx.shadowBlur = 6 * dpr;
        ctx.fillStyle = '#fff';
        ctx.fillText(q[3], q[0] + 11 * dpr, q[1] - 9 * dpr);
        ctx.shadowBlur = 0;
      }

      if (!reduced) { rot += 0.0022; raf = requestAnimationFrame(draw); }
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return <canvas ref={ref} role="img"
    aria-label="Rotating globe marking contributor countries: Pakistan, United States, Canada, United Kingdom and United Arab Emirates" />;
}
