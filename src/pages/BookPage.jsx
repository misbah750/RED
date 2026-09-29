import React, { useRef } from 'react';
import PageIntro from '../components/PageIntro.jsx';
import Reveal from '../components/Reveal.jsx';
import Book3D from '../components/Book3D.jsx';
import InsideBook from '../components/InsideBook.jsx';
import OrderBook from '../components/OrderBook.jsx';
import MediaBand from '../components/MediaBand.jsx';

export default function BookPage({ launched }) {
  const pointer = useRef(null);
  return (
    <>
      <PageIntro eyebrow="The Book" title={<>A practical guide to critical care at the <em>front door.</em></>}>
        Resuscitation in the Emergency Department (RED) is a contemporary clinical text for physicians and healthcare
        professionals who care for critically ill and injured patients in the emergency setting.
      </PageIntro>

      <section aria-label="Book overview">
        <div className="wrap book-hero">
          <Reveal className="book-hero-copy" variant="left">
            <p>Emergency departments increasingly function as the front line of critical care. Patients arrive without
              warning, often with incomplete information and rapidly evolving physiology. In many settings, particularly
              where intensive-care capacity is limited, emergency physicians may continue providing critical care well
              beyond the initial stabilisation period. RED was developed in response to this reality.</p>
            <p>Rather than treating resuscitation as a collection of isolated algorithms, the book approaches it as a
              continuous, physiology-driven and team-based process, beginning with early recognition of deterioration
              and continuing through stabilisation, definitive intervention and post-resuscitation care.</p>
            <dl className="book-facts">
              <div><dt>First edition</dt><dd>2026</dd></div>
              <div><dt>Publisher</dt><dd>Paramount Books (Pvt.) Ltd.</dd></div>
              <div><dt>Chapters</dt><dd>44 across 6 parts</dd></div>
            </dl>
            <div className="ctas" style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
              <a className="btn btn-red" href="#/events"><span>{launched ? 'Get the book' : 'Book launch 2026'}</span></a>
              <a className="btn btn-outline" href="#/contact"><span>Institutional / bulk orders</span></a>
            </div>
          </Reveal>
          <Reveal delay={2} variant="right"><Book3D pointer={pointer} /></Reveal>
        </div>
      </section>

      <MediaBand
        src="/scene-resus.jpg"
        kicker="Written for the moment it matters"
        caption="From early deterioration to post-resuscitation care."
        alt="Emergency clinicians resuscitating a critically ill patient"
      />

      <InsideBook />
      <OrderBook launched={launched} />
    </>
  );
}
