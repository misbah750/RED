import React, { useRef, useCallback, useEffect } from 'react';
import Book3D from './Book3D.jsx';
import Magnetic from './Magnetic.jsx';
import Countdown from './Countdown.jsx';
import { usePrefersReducedMotion } from '../hooks.js';

const HERO_VIDEO = (typeof window !== 'undefined' && window.__HERO_VIDEO__) || '/hero.mp4';
const HERO_POSTER = (typeof window !== 'undefined' && window.__HERO_POSTER__) || '/poster.jpg';

export default function Hero({ cd }) {
  const pointer = useRef(null);
  const mediaRef = useRef(null);
  const videoRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  // Keep the background video playing (browsers pause it when the tab is hidden).
  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduced) return;
    const tryPlay = () => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };
    tryPlay();
    const onVis = () => { if (!document.hidden) tryPlay(); };
    v.addEventListener('canplay', tryPlay);
    v.addEventListener('loadeddata', tryPlay);
    document.addEventListener('visibilitychange', onVis);
    return () => {
      v.removeEventListener('canplay', tryPlay);
      v.removeEventListener('loadeddata', tryPlay);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [reduced]);

  // Pointer drives the book lean AND a 3D parallax tilt on the video layer.
  const onMove = useCallback((e) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) / r.width;
    const y = (e.clientY - (r.top + r.height / 2)) / r.height;
    pointer.current = { x, y };
    if (mediaRef.current) {
      mediaRef.current.style.transform =
        `scale(1.1) translate3d(${-x * 26}px, ${-y * 18}px, 0) rotateX(${y * 2.4}deg) rotateY(${-x * 3.4}deg)`;
    }
  }, [reduced]);
  const onLeave = useCallback(() => {
    pointer.current = null;
    if (mediaRef.current) mediaRef.current.style.transform = '';
  }, []);

  return (
    <section id="home" className="hero hero-center" aria-labelledby="hero-title"
      onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="hero-media" ref={mediaRef} aria-hidden="true">
        <div className="hero-bg" style={{ backgroundImage: `url(${HERO_POSTER})` }} />
        {!reduced && (
          <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline preload="auto" poster={HERO_POSTER}>
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="hero-media-scrim" aria-hidden="true" />
      <div className="hero-vsig" aria-hidden="true" />

      <div className="wrap">
        <header className="hero-head">
          <h1 id="hero-title" className="anim d2">When Seconds Matter.<br /><span className="abbr">Knowledge Must Move Faster.</span></h1>
          <p className="lead anim d3">
            Resuscitation begins long before cardiac arrest, when physiology starts to fail, uncertainty is high,
            and the next few minutes decide whether a patient recovers. <strong>Resuscitation in the Emergency
            Department (RED)</strong> is a practical, contemporary guide to recognising, stabilising and managing
            critically ill patients in the emergency department.
          </p>
        </header>

        <div className="hero-orbit anim d4">
          <Book3D pointer={pointer} />
        </div>

        <div className="hero-actions anim d5">
          <div className="ctas">
            <Magnetic className="btn btn-red" href="#/book"><span>Discover the book</span></Magnetic>
            <Magnetic className="btn btn-glass" href="#/events"><span>Book launch 2026</span></Magnetic>
          </div>
          <div className="cd-wrap">
            <p className="cd-label"><span className="live-dot" /> Counting down to launch · 03 November 2026</p>
            <Countdown cd={cd} />
          </div>
        </div>
      </div>
    </section>
  );
}
