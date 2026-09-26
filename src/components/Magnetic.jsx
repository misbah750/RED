import React from 'react';
import { useMagnetic } from '../hooks.js';

// Wraps a control so it drifts toward the cursor and springs back on leave.
// Falls back gracefully: on touch / reduced-motion the hook simply does nothing.
export default function Magnetic({ as: Tag = 'a', strength = 0.26, className = '', children, ...rest }) {
  const m = useMagnetic(strength);
  return (
    <Tag ref={m.ref} onMouseMove={m.onMouseMove} onMouseLeave={m.onMouseLeave}
      className={`is-magnetic ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
