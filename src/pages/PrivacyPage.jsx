import React from 'react';
import PageIntro from '../components/PageIntro.jsx';
import { CONTACT_EMAIL } from '../data.js';

export const POLICY_UPDATED = '1 October 2026';

export default function PrivacyPage() {
  const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;
  return (
    <>
      <PageIntro eyebrow="Privacy Policy" title={<>Your privacy, <em>plainly.</em></>}>
        What this website collects, why, and the choices you have. Last updated {POLICY_UPDATED}.
      </PageIntro>

      <section aria-label="Privacy policy">
        <div className="wrap">
          <article className="policy">
            <h2>Who we are</h2>
            <p>This website presents <strong>Resuscitation in the Emergency Department (RED)</strong> and the RED
              education platform. If you have any question about your privacy, email us at {mail}.</p>

            <h2>What we collect automatically</h2>
            <p>Nothing that identifies you. This website <strong>does not use tracking or advertising cookies</strong>,
              does not run analytics, and does not build a profile of your visit.</p>
            <ul>
              <li><strong>Your cookie choice.</strong> When you press Accept or Decline on the cookie message, that
                choice is saved in your own browser (local storage) so the message does not appear again. It is not
                sent to us. You can change it at any time with the “Cookie preferences” link at the bottom of every
                page, or remove it by clearing your browser’s site data.</li>
              <li><strong>Hosting.</strong> The website is hosted by Vercel. Like any web host, Vercel processes
                standard technical information such as your IP address and browser type in order to deliver pages
                and protect the service from abuse.</li>
              <li><strong>Fonts.</strong> The website’s typefaces are loaded from Google Fonts. When they load, your
                browser connects to Google’s servers, which receive your IP address.</li>
            </ul>

            <h2>Information you choose to send us</h2>
            <ul>
              <li><strong>Contact form.</strong> The form opens your own email app with your message ready to send.
                Nothing is sent until you press Send. We receive your name, email address and message, and use them
                only to reply to you.</li>
              <li><strong>RED updates.</strong> Joining the updates list also opens your email app with a short
                sign-up email. Once you send it, we use your email address only to send RED news, such as the book
                launch, programs and events. You can unsubscribe at any time by emailing {mail}.</li>
            </ul>
            <p>These emails are received through our email provider. If we later move the updates list to a
              mailing service, we will update this policy first.</p>

            <h2>How long we keep it</h2>
            <p>We keep enquiry emails for as long as needed to respond and follow up, and keep your address on the
              updates list until you unsubscribe.</p>

            <h2>What we never do</h2>
            <p>We do not sell, rent or trade your personal information, and we do not share it with advertisers.</p>

            <h2>Links to other websites</h2>
            <p>Some links, such as LinkedIn or Google Calendar, take you to other websites. Their own privacy
              policies apply there.</p>

            <h2>Your rights</h2>
            <p>You can ask us to show you, correct or delete any personal information we hold about you, or to stop
              sending you updates. Email {mail} and we will respond as quickly as we can.</p>

            <h2>Children</h2>
            <p>This website is intended for healthcare professionals and is not directed at children.</p>

            <h2>Changes to this policy</h2>
            <p>If we change how we handle information, we will update this page and the date at the top.</p>
          </article>
        </div>
      </section>
    </>
  );
}
