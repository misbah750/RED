import React from 'react';
import PageIntro from '../components/PageIntro.jsx';
import { CONTACT_EMAIL } from '../data.js';
import { POLICY_UPDATED } from './PrivacyPage.jsx';

export default function TermsPage() {
  const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;
  return (
    <>
      <PageIntro eyebrow="Terms of Use" title={<>Terms of <em>use.</em></>}>
        The terms that apply when you use this website. Last updated {POLICY_UPDATED}.
      </PageIntro>

      <section aria-label="Terms of use">
        <div className="wrap">
          <article className="policy">
            <h2>Using this website</h2>
            <p>By using this website you agree to these terms. If you do not agree, please do not use the site.</p>

            <h2>Educational use only, not medical advice</h2>
            <p>Everything on this website is provided for <strong>professional education</strong>. It does not
              replace local protocols, clinical judgement or current clinical guidelines, and it is not medical
              advice for any individual patient. Using this website does not create a doctor–patient relationship.
              In an emergency, contact your local emergency services.</p>

            <h2>Content and intellectual property</h2>
            <p>The text, design, images, the RED name and logo on this website belong to RED or its licensors. The
              content of <em>Resuscitation in the Emergency Department (RED)</em> belongs to its authors and
              publisher, Paramount Books (Pvt.) Ltd. You may link to this website, but you may not copy, republish
              or sell its content without written permission.</p>

            <h2>Book, programs and events</h2>
            <p>Details of the book launch, programs and events, including dates, venues and availability, may
              change. Book purchases are made through the publisher and its retail partners under their own terms.</p>

            <h2>Acceptable use</h2>
            <p>Please do not misuse the website, including attempting to disrupt it, access it without permission,
              or copy its content in bulk.</p>

            <h2>Links to other websites</h2>
            <p>We are not responsible for the content or practices of other websites we link to.</p>

            <h2>No warranty</h2>
            <p>We work to keep the website accurate and available, but it is provided “as is”. We may update,
              change or withdraw content at any time without notice.</p>

            <h2>Limitation of liability</h2>
            <p>To the fullest extent permitted by law, RED is not liable for any loss or damage arising from the use
              of this website or reliance on its content. Nothing in these terms limits any liability that cannot be
              limited by law.</p>

            <h2>Changes to these terms</h2>
            <p>We may update these terms from time to time. The date at the top shows when they last changed.</p>

            <h2>Contact</h2>
            <p>Questions about these terms? Email {mail}.</p>
          </article>
        </div>
      </section>
    </>
  );
}
