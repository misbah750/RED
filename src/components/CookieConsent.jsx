import React, { useState, useEffect } from 'react';

const KEY = 'red-cookie-consent-2';

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let saved = null;
    try { saved = localStorage.getItem(KEY); } catch { /* storage blocked */ }
    if (!saved) setShow(true);
    // let a "Cookie preferences" link anywhere reopen this banner
    const reopen = () => setShow(true);
    window.addEventListener('open-cookie-settings', reopen);
    return () => window.removeEventListener('open-cookie-settings', reopen);
  }, []);
  const choose = (v) => {
    try { localStorage.setItem(KEY, v); } catch { /* ignore */ }
    setShow(false);
  };
  if (!show) return null;
  return (
    <div className="cookie" role="dialog" aria-live="polite" aria-label="Cookie notice">
      <div className="cookie-inner glass-2">
        <div className="cookie-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 3a9 9 0 1 0 9 9 3 3 0 0 1-3-3 3 3 0 0 1-3-3 3 3 0 0 1-3-3z" />
            <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
            <circle cx="13" cy="15" r="1" fill="currentColor" stroke="none" />
            <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
          </svg>
        </div>
        <p className="cookie-text">
          We use essential cookies to make this site work and, with your consent, a few analytics cookies to
          understand how RED is used. See our <a href="#contact">cookie notice</a>.
        </p>
        <div className="cookie-acts">
          <button className="btn btn-outline cookie-btn" onClick={() => choose('declined')}><span>Decline</span></button>
          <button className="btn btn-red cookie-btn" onClick={() => choose('accepted')}><span>Accept</span></button>
        </div>
      </div>
    </div>
  );
}
