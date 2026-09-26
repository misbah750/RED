import React from 'react';
import Reveal from './Reveal.jsx';
import { retailers, BUY_URL } from '../data.js';

export default function OrderBook({ launched }) {
  return (
    <section id="order" aria-labelledby="or-title">
      <div className="wrap">
        <Reveal className="order glass-2">
          <div className="order-glow" aria-hidden="true" />
          <div className="order-main">
            <p className="order-kicker">{launched ? 'Available now' : 'From 03 November 2026'}</p>
            <h2 id="or-title">{launched ? 'Get your copy of RED.' : 'Be first to get RED.'}</h2>
            <p>{launched
              ? 'Order Resuscitation in the Emergency Department from the publisher and retail partners, or arrange an institutional order for your department.'
              : 'Publisher and retailer links go live on launch day. Join the list now and we will send you the order links the moment RED is available.'}</p>
            <div className="order-cts">
              {launched
                ? retailers.map((r) => (
                    <a key={r.name} className={`btn ${r.href && r.href !== '#contact' ? 'btn-red' : 'btn-outline'}`}
                       href={r.href || '#contact'}><span>{r.name}</span></a>
                  ))
                : (<>
                    <a className="btn btn-red" href="#/events"><span>Get launch updates</span></a>
                    <a className="btn btn-outline" href="#/contact"><span>Institutional / bulk orders</span></a>
                  </>)}
            </div>
            <p className="order-fine">Published by Paramount Books (Pvt.) Ltd. A sample chapter may be offered after publisher approval.</p>
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
