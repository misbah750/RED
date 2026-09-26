import React from 'react';
import { useReveal } from '../hooks.js';

// Reveal on scroll. `as` picks the tag; `delay` = d1..d6 stagger; `variant`
// = up (default) | scale | left | right | blur, chooses the entrance motion.
export default function Reveal({ as: Tag = 'div', delay = 0, variant, className = '', children, ...rest }) {
  const [ref, inView] = useReveal();
  const d = delay ? ` d${delay}` : '';
  const v = variant ? ` rv-${variant}` : '';
  return (
    <Tag ref={ref} className={`reveal${v}${d}${inView ? ' in' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export function Eyebrow({ children }) {
  return (
    <span className="eyebrow">
      <svg viewBox="0 0 34 14" aria-hidden="true"><polyline points="0,7 10,7 13,1 17,13 20,7 34,7" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
      {children}
    </span>
  );
}
