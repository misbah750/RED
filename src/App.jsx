import React from 'react';
import { ScrollProgress, CursorGlow, AmbientFX } from './components/Decor.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import CookieConsent from './components/CookieConsent.jsx';
import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import Forewords from './pages/Forewords.jsx';
import Collaborators from './pages/Collaborators.jsx';
import BookPage from './pages/BookPage.jsx';
import Program from './pages/Program.jsx';
import Events from './pages/Events.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AuthorPage from './pages/AuthorPage.jsx';
import { LAUNCH_ISO } from './data.js';
import { useLaunchState, useRoute } from './hooks.js';

export default function App() {
  const { launched, cd } = useLaunchState(LAUNCH_ISO);
  const route = useRoute();

  let page;
  switch (route) {
    case '/about': page = <AboutPage />; break;
    case '/forewords': page = <Forewords />; break;
    case '/contributors': page = <Collaborators />; break;
    case '/book': page = <BookPage launched={launched} />; break;
    case '/program': page = <Program />; break;
    case '/events': page = <Events cd={cd} launched={launched} />; break;
    case '/contact': page = <ContactPage />; break;
    case '/author': page = <AuthorPage />; break;
    default: page = <Home cd={cd} />;
  }

  return (
    <>
      <AmbientFX />
      <ScrollProgress />
      <CursorGlow />
      <div className="topbar" role="region" aria-label="Announcement">
        <span className="topbar-in">
          <span className="tb-dot" aria-hidden="true" />
          {launched
            ? <><b>Now available</b> · Resuscitation in the Emergency Department</>
            : <><b>Launching soon</b> · Book launch 03 November 2026</>}
        </span>
      </div>
      <Nav route={route} launched={launched} />
      <main id="top"><div className="route-view" key={route}>{page}</div></main>
      <Footer />
      <BackToTop />
      <CookieConsent />
    </>
  );
}
