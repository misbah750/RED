import React, { useState } from 'react';
import Reveal from './Reveal.jsx';
import VideoBackdrop from './VideoBackdrop.jsx';
import { CONTACT_EMAIL } from '../data.js';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [msg, setMsg] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) { setMsg('Enter a valid email address, like name@hospital.org.'); return; }
    if (!consent) { setMsg('Tick the consent box to receive updates.'); return; }
    // No mailing service yet: open the visitor's email app with a ready-to-send sign-up to the RED inbox.
    const subject = encodeURIComponent('Subscribe me to RED updates');
    const body = encodeURIComponent(`Please add this address to the RED updates list:\n\n${email}\n\n`
      + 'I agree to receive RED updates by email and understand I can unsubscribe at any time.');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setMsg('Opening your email app. Press Send to join the RED updates list.');
  };
  return (
    <section id="join" aria-labelledby="join-title">
      <div className="wrap">
        <Reveal className="join glass-2 has-vbg">
          <VideoBackdrop intensity="bold" />
          <div>
            <h2 id="join-title">Stay connected to <em>RED.</em></h2>
            <p>Receive book-launch updates, new program announcements and selected resuscitation resources.
              No noise, only relevant RED updates.</p>
          </div>
          <form onSubmit={submit} noValidate>
            <div className="field">
              <label htmlFor="nEmail">Email address</label>
              <input id="nEmail" type="email" autoComplete="email" placeholder="you@hospital.org"
                value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <label className="check">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
              <span>I agree to receive RED updates by email. I can unsubscribe at any time. See our{" "}
                <a href="#/privacy">privacy policy</a>.</span>
            </label>
            <button className="btn btn-red" type="submit">Join RED updates</button>
            <p className="msg" role="status">{msg}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
