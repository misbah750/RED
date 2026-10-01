import React, { useState, useRef } from 'react';
import PageIntro from '../components/PageIntro.jsx';
import Reveal from '../components/Reveal.jsx';
import MediaBand from '../components/MediaBand.jsx';
import { contactTypes, CONTACT_EMAIL } from '../data.js';
import { sendForm, secondsSince } from '../sendForm.js';

const EMPTY = { name: '', email: '', type: contactTypes[0], message: '' };

export default function ContactPage() {
  const [f, setF] = useState(EMPTY);
  const [hp, setHp] = useState('');
  const [msg, setMsg] = useState({ text: '', error: false });
  const [sending, setSending] = useState(false);
  const started = useRef(Date.now());
  const up = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const say = (text, error = true) => setMsg({ text, error });
  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    if (!f.name.trim()) return say('Add your name.');
    if (!/^\S+@\S+\.\S+$/.test(f.email)) return say('Enter a valid email address.');
    if (!f.message.trim()) return say('Add a short message.');
    setSending(true);
    say('Sending your message…', false);
    const r = await sendForm({ kind: 'contact', ...f, website: hp, t: secondsSince(started.current) });
    setSending(false);
    if (r.ok) {
      setF(EMPTY);
      say('Thank you. Your message has been sent and the RED team will reply by email.', false);
    } else {
      say(r.error || `Sorry, your message could not be sent. Please email us at ${CONTACT_EMAIL}.`);
    }
  };
  return (
    <>
      <PageIntro eyebrow="Contact" title={<>Get in <em>touch.</em></>}>
        For enquiries about the book, programs, institutional collaboration, media or speaking, send a message and the
        RED team will reply by email.
      </PageIntro>

      <MediaBand
        src="/band-ecg.jpg"
        kicker="Let's build RED together"
        caption="Invite RED. Collaborate. Bring it to your institution."
        alt="Resuscitation imagery with an ECG trace"
      />

      <section aria-label="Buy the book">
        <div className="wrap">
          <Reveal className="buy-soon glass-2">
            <span className="soon-badge"><span className="live-dot" /> Coming soon</span>
            <h3>Buy the book</h3>
            <p>Publisher and retailer links for <strong>Resuscitation in the Emergency Department (RED)</strong> go
              live on 03 November 2026. Join the launch list and we will send you the order links the moment the book
              is available.</p>
            <div className="buy-soon-cts">
              <span className="btn btn-red is-disabled" aria-disabled="true"><span>Buy now, coming soon</span></span>
              <a className="btn btn-outline" href="#/events"><span>Get launch updates</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label="Contact">
        <div className="wrap contact">
          <Reveal>
            <div className="contact-card glass">
              <h3>Email</h3>
              <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <p style={{ color: 'var(--muted)', marginTop: '1rem' }}>We aim to reply to all genuine enquiries. Please choose an enquiry type so we can route your message to the right person.</p>
              <ul>{contactTypes.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </Reveal>
          <Reveal delay={2} as="form" className="glass-2" style={{ padding: '2rem', borderRadius: 'var(--r-lg)' }} onSubmit={submit} noValidate>
            <div className="two">
              <div className="field"><label htmlFor="cName">Name</label><input id="cName" autoComplete="name" value={f.name} onChange={up('name')} required /></div>
              <div className="field"><label htmlFor="cEmail">Email</label><input id="cEmail" type="email" autoComplete="email" value={f.email} onChange={up('email')} required /></div>
            </div>
            <div className="field"><label htmlFor="cType">Enquiry type</label>
              <select id="cType" value={f.type} onChange={up('type')}>{contactTypes.map((t) => <option key={t}>{t}</option>)}</select></div>
            <div className="field"><label htmlFor="cMsg">Message</label><textarea id="cMsg" value={f.message} onChange={up('message')} maxLength={5000} required /></div>
            {/* spam trap: hidden from people, bots fill it in */}
            <div className="hp" aria-hidden="true">
              <label htmlFor="cWebsite">Website</label>
              <input id="cWebsite" name="website" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
            </div>
            <button className="btn btn-red" type="submit" disabled={sending}><span>{sending ? 'Sending…' : 'Send message'}</span></button>
            <p className={`msg${msg.error ? ' is-error' : ''}`} role="status">{msg.text}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
