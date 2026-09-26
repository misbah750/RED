import React from 'react';
import { CONTACT_EMAIL } from '../data.js';

const Social = ({ label, d }) => (
  <a href="#/contact" aria-label={label} className="soc"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={d} /></svg></a>
);

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="ftop">
          <div>
            <svg viewBox="0 0 150 40" style={{ height: 34 }} aria-hidden="true">
              <text x="13" y="31" fontFamily="Montserrat,Arial" fontWeight="900" fontSize="32" fill="#fff" letterSpacing="1">RED</text>
              <polyline points="0,20 10,20" fill="none" stroke="#E31B23" strokeWidth="2.6" strokeLinecap="round" />
              <polyline points="94,20 104,20 109,6 115,34 120,20 150,20" fill="none" stroke="#E31B23" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            <p style={{ marginTop: '1rem', maxWidth: '24rem' }}>RED, Resuscitation in the Emergency Department · When seconds matter, knowledge must move faster.</p>
            <a className="footer-mail" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <div className="socials">
              <Social label="RED on X" d="M18.9 2H22l-7 8 8.2 12h-6.6l-5-7-5.8 7H2l7.6-9L2 2h6.7l4.6 6.6zM17 20h1.8L7 4H5z" />
              <Social label="RED on LinkedIn" d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05C13.4 9.6 15 9 16.6 9 21 9 21 12 21 15.3V21h-4v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H9z" />
              <Social label="Email RED" d="M2 5h20v14H2zM2 5l10 7 10-7" />
            </div>
          </div>
          <div><h4>Explore</h4><ul>
            <li><a href="#/book">The Book</a></li><li><a href="#/about">About RED</a></li>
            <li><a href="#/forewords">Forewords</a></li><li><a href="#/collaborators">Collaborators</a></li><li><a href="#/author">Author</a></li></ul></div>
          <div><h4>RED</h4><ul>
            <li><a href="#/program">Program</a></li><li><a href="#/events">Events</a></li>
            <li><a href="#/contact">Contact</a></li><li><a href={`mailto:${CONTACT_EMAIL}`}>Media enquiries</a></li></ul></div>
        </div>
        <div className="disclaimer">
          <p>Website content is for professional education and does not replace local protocols, clinical judgment or
            current guidelines. Book excerpts, figures and quotations are used with publisher permission.</p>
        </div>
        <div className="legal">
          <span>© 2026 RED, Resuscitation in the Emergency Department. First edition published by Paramount Books (Pvt.) Ltd.</span>
          <nav className="legal-links" aria-label="Legal">
            <a href="#/contact">Privacy Policy</a><a href="#/contact">Terms of Use</a>
            <button type="button" className="legal-link-btn"
              onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}>Cookie preferences</button>
            <a href="#/contact">Report a correction</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
