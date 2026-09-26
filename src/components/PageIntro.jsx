import React from 'react';
import Reveal, { Eyebrow } from './Reveal.jsx';
import VideoBackdrop from './VideoBackdrop.jsx';

export default function PageIntro({ eyebrow, title, children }) {
  return (
    <div className="page-intro">
      <VideoBackdrop className="vbg-intro" intensity="soft" />
      <span className="aurora a1" style={{ right: '-4%', top: '-10%' }} aria-hidden="true" />
      <div className="wrap">
        <Reveal className="page-intro-inner">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          {children && <p className="page-lead">{children}</p>}
        </Reveal>
      </div>
    </div>
  );
}
