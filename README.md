# RED — Resuscitation in the Emergency Department

Book-launch website, built to grow into a resuscitation-education platform (and later a sale page).
React + Vite. Cinematic dark theme, glassmorphism, motion, and SEO/structured data baked in.

Tagline: **From Page to Practice.**

## Run it

Requires Node.js 18+.

```bash
npm install
npm run dev      # http://localhost:5173
```

Build for production:

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, or your own server).

## Where things live

```
public/
  hero.mp4          hero background video (patient-monitor waveforms)
  poster.jpg        video poster frame
index.html          <head>: title, meta, Open Graph, JSON-LD structured data
src/
  main.jsx          app entry
  App.jsx           page composition + launch-state logic
  index.css         the whole design system
  data.js           ALL editable content (chapters, programs, praise, FAQs…)
  hooks.js          reveal / count-up / tilt / scrollspy / launch-state hooks
  components/        Nav, Hero, Book3D, Principles, InsideBook, Contributors,
                     Globe, Praise, EventSection, Programs, Resources, About,
                     Newsletter, Contact, Footer, Decor, Reveal, Ticker
```

## Edit the content

Almost everything is in **`src/data.js`** — change text there, no component edits needed.

## Launch behaviour

- A countdown runs to **03 Nov 2026** (Pakistan time), set by `LAUNCH_ISO` in `src/data.js`.
- At launch the site auto-switches: the top bar and buttons change to "Now available / Get the book".
- Preview it any time with the footer button, or `?state=launched` / `?state=prelaunch` in the URL.
- Set `BUY_URL` in `src/data.js` to the publisher/retailer link so every "Get the book" button points there.

## Before going live

- Wire the newsletter and contact forms to your mailing platform / form backend (see the `// TODO` comments in `Newsletter.jsx` and `Contact.jsx`).
- Replace placeholders: final logo files, editor photo + bio, purchase link, launch time/venue/RSVP, publisher-approved quotes, contributor headshots, a real `og-image.jpg`, and the domain.
- All book excerpts, figures and quotes need publisher permission before publishing.

## Turning this into the sale page later

The whole layout is content-driven and the launch state already flips to a "Get the book" mode.
To make it a shop page, point `BUY_URL` at checkout, and expand `EventSection`/`InsideBook` CTAs as needed.
