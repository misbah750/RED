import React, { useState, useRef } from 'react';
import Reveal from './Reveal.jsx';
import VideoBackdrop from './VideoBackdrop.jsx';
import { CONTACT_EMAIL } from '../data.js';
import { sendForm, secondsSince } from '../sendForm.js';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [hp, setHp] = useState('');
  const [msg, setMsg] = useState({ text: '', error: false });
  const [sending, setSending] = useState(false);
  const started = useRef(Date.now());
  const say = (text, error = true) => setMsg({ text, error });
  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    if (!/^\S+@\S+\.\S+$/.test(email)) return say('Enter a valid email address, like name@hospital.org.');
    if (!consent) return say('Tick the consent box to receive updates.');
    setSending(true);
    say('Joining…', false);
    const r = await sendForm({ kind: 'subscribe', email, consent: 'yes', website: hp, t: secondsSince(started.current) });
    setSending(false);
    if (r.ok) {
      setEmail('');
      setConsent(false);
      say('Thank you for joining. We will email you RED updates, starting with the book launch.', false);
    } else {
      say(r.error || `Sorry, we could not add you right now. Please email ${CONTACT_EMAIL} to join.`);
    }
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
            {/* spam trap: hidden from people, bots fill it in */}
            <div className="hp" aria-hidden="true">
              <label htmlFor="nWebsite">Website</label>
              <input id="nWebsite" name="website" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
            </div>
            <button className="btn btn-red" type="submit" disabled={sending}>{sending ? 'Joining…' : 'Join RED updates'}</button>
            <p className={`msg${msg.error ? ' is-error' : ''}`} role="status">{msg.text}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
