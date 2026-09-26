import React, { useState } from 'react';
import Reveal, { Eyebrow } from './Reveal.jsx';
import { contactTypes } from '../data.js';

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', type: contactTypes[0], message: '' });
  const [msg, setMsg] = useState('');
  const up = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim()) { setMsg('Add your name.'); return; }
    if (!/^\S+@\S+\.\S+$/.test(f.email)) { setMsg('Enter a valid email address.'); return; }
    if (!f.message.trim()) { setMsg('Add a short message.'); return; }
    // TODO: connect to your form backend / email service before launch.
    setMsg('Enquiry sent. The RED team will reply by email.');
    setF({ name: '', email: '', type: contactTypes[0], message: '' });
  };
  return (
    <section id="contact" aria-labelledby="ct-title">
      <div className="wrap contact">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 id="ct-title">Bring RED to your team.</h2>
          <p style={{ color: 'var(--muted)', marginTop: '1rem' }}>Tell us what you need and we will route it to the right person.</p>
          <ul>{contactTypes.map((t) => <li key={t}>{t}</li>)}</ul>
        </Reveal>
        <Reveal delay={2} as="form" className="glass-2" style={{ padding: '2rem', borderRadius: 'var(--r-lg)' }} onSubmit={submit} noValidate>
          <div className="two">
            <div className="field"><label htmlFor="cName">Name</label>
              <input id="cName" autoComplete="name" value={f.name} onChange={up('name')} required /></div>
            <div className="field"><label htmlFor="cEmail">Email</label>
              <input id="cEmail" type="email" autoComplete="email" value={f.email} onChange={up('email')} required /></div>
          </div>
          <div className="field"><label htmlFor="cType">Enquiry type</label>
            <select id="cType" value={f.type} onChange={up('type')}>
              {contactTypes.map((t) => <option key={t}>{t}</option>)}
            </select></div>
          <div className="field"><label htmlFor="cMsg">Message</label>
            <textarea id="cMsg" value={f.message} onChange={up('message')} required /></div>
          <button className="btn btn-red" type="submit">Send enquiry</button>
          <p className="msg" role="status">{msg}</p>
        </Reveal>
      </div>
    </section>
  );
}
