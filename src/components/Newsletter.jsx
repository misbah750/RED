import React, { useState } from 'react';
import Reveal from './Reveal.jsx';
import VideoBackdrop from './VideoBackdrop.jsx';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [msg, setMsg] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) { setMsg('Enter a valid email address, like name@hospital.org.'); return; }
    if (!consent) { setMsg('Tick the consent box to receive updates.'); return; }
    // TODO: connect to your mailing platform (double opt-in) before launch.
    setMsg('You are on the list. We will email you launch updates.');
    setEmail(''); setConsent(false);
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
              I agree to receive RED updates by email. I can unsubscribe at any time.
            </label>
            <button className="btn btn-red" type="submit">Join RED updates</button>
            <p className="msg" role="status">{msg}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
