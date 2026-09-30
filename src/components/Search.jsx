import React, { useState, useEffect, useRef, useMemo } from 'react';
import { nav, bookTopics, parts, programs, praise, countries } from '../data.js';

function buildIndex() {
  const idx = [];
  nav.forEach((n) => idx.push({ label: n.label, group: 'Pages', href: '#' + n.r }));
  bookTopics.forEach((t) => idx.push({ label: t.t, group: 'Book topics', href: '#/book' }));
  parts.forEach((p) => p.c.forEach((c) => idx.push({ label: c, group: 'Chapters', href: '#/book', sub: p.t })));
  programs.forEach((p) => idx.push({ label: p.t, group: 'Programs', href: '#/program' }));
  praise.forEach((p) => idx.push({ label: p.by, group: 'Forewords', href: '#/forewords' }));
  countries.forEach((c) => idx.push({ label: c.n, group: 'Contributors', href: '#/contributors' }));
  return idx;
}

export default function Search() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const inputRef = useRef(null);
  const index = useMemo(buildIndex, []);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === '/' && !open && !/input|textarea|select/i.test(document.activeElement?.tagName || '')) { e.preventDefault(); setOpen(true); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; if (open) setTimeout(() => inputRef.current?.focus(), 40); }, [open]);
  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return index.filter((it) => it.label.toLowerCase().includes(s) || (it.sub || '').toLowerCase().includes(s)).slice(0, 10);
  }, [q, index]);
  const grouped = useMemo(() => { const g = {}; results.forEach((r) => { (g[r.group] = g[r.group] || []).push(r); }); return g; }, [results]);
  const go = (href) => { setOpen(false); setQ(''); window.location.hash = href; };

  return (
    <>
      <button className="nav-search" aria-label="Search RED" onClick={() => setOpen(true)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
        <span className="nav-search-k">/</span>
      </button>
      {open && (
        <div className="search-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          <div className="search-box glass-2" role="dialog" aria-modal="true" aria-label="Search RED">
            <div className="search-field">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
              <input ref={inputRef} type="text" placeholder="Search topics, chapters, pages…" value={q} onChange={(e) => setQ(e.target.value)} />
              <button className="search-esc" onClick={() => setOpen(false)} aria-label="Close">Esc</button>
            </div>
            <div className="search-results">
              {q && results.length === 0 && <p className="search-empty">No matches for “{q}”.</p>}
              {!q && <p className="search-hint">Try “POCUS”, “sepsis”, “trauma” or “launch”.</p>}
              {Object.entries(grouped).map(([group, items]) => (
                <div className="search-group" key={group}>
                  <h5>{group}</h5>
                  {items.map((it, i) => (
                    <button key={group + i} className="search-item" onClick={() => go(it.href)}><span>{it.label}</span>{it.sub && <em>{it.sub}</em>}</button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
