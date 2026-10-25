import React from 'react';
import Reveal from './Reveal.jsx';
import { retailers, EXTERNAL } from '../data.js';

export default function OrderBook() {
  return (
    <section id="order" aria-labelledby="or-title">
      <div className="wrap">
        <Reveal className="order glass-2">
          <div className="order-glow" aria-hidden="true" />
          <div className="order-main">
            <p className="order-kicker">Available now</p>
            <h2 id="or-title">Get your copy of RED.</h2>
            <p>Order Resuscitation in the Emergency Department directly from the publisher, Paramount Books, or
              arrange an institutional order for your department.</p>
            <div className="order-cts">
              {retailers.map((r) => {
                const external = r.href.startsWith('http');
                return (
                  <a key={r.name} className={`btn ${external ? 'btn-red' : 'btn-outline'}`} href={r.href}
                    {...(external ? EXTERNAL : {})}>
                    <span>{r.name}</span>
                    {external && <span className="sr-only"> (opens the publisher's shop in a new tab)</span>}
                  </a>
                );
              })}
            </div>
            <p className="order-fine">Published by Paramount Books (Pvt.) Ltd. You complete your order and payment
              on the publisher's website. A sample chapter may be offered after publisher approval.</p>
          </div>
          <div className="order-facts">
            {[['44', 'chapters'], ['27', 'contributors'], ['5', 'countries'], ['1st', 'edition']].map(([n, l]) => (
              <div key={l}><b>{n}</b><span>{l}</span></div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
