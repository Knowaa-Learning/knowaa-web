// RESOURCES LANDING — Variation C: MINIMAL
// Contrarian: the content is the design. No cards, no thumbnails up top.
// A huge editorial index, where type is the structure. One subtle featured
// piece inset. Visually quiet, radically readable. Trust the reader.

const { useState: useStateC, useMemo: useMemoC } = React;

function ResourcesMinimal() {
  const [typeFilter, setTypeFilter] = useStateC('all');
  const [q, setQ] = useStateC('');
  const [sort, setSort] = useStateC('date'); // date | az

  const filtered = useMemoC(() => {
    let list = window.RESOURCES.filter((r) => {
      if (typeFilter !== 'all' && r.type !== typeFilter) return false;
      if (q && !(r.title + ' ' + r.dek + ' ' + r.category).toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
    if (sort === 'az') list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    else list = [...list].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
    return list;
  }, [typeFilter, q, sort]);

  const featured = window.RESOURCES.find((r) => r.featured);

  return (
    <div className="rc-min">
      <style>{MINIMAL_CSS}</style>

      {/* HEADER */}
      <header className="rc-min__header">
        <div className="rc-min__eyebrow">
          <span>Knowaa</span>
          <span className="rc-min__eyebrow-sep">/</span>
          <span>Resources</span>
        </div>
        <h1 className="rc-min__title">
          <em>Insights,</em> case studies, and the occasional strong opinion.
        </h1>
        <p className="rc-min__sub">
          Field notes from building enterprise learning that performs. Updated most weeks.
        </p>
      </header>

      {/* FEATURED INSET */}
      {featured && (
        <a className="rc-min__feat" href={`#article-${featured.id}`}>
          <div className="rc-min__feat-label">
            <span className="rc-min__feat-dot" />
            This week\u2019s feature
          </div>
          <h2 className="rc-min__feat-title">{featured.title}</h2>
          <p className="rc-min__feat-dek">{featured.dek}</p>
          <div className="rc-min__feat-meta">
            <span>{featured.author}</span>
            <span>\u00B7</span>
            <span>{featured.readTime}</span>
            <span>\u00B7</span>
            <span>{window.formatDate(featured.publishedAt)}</span>
          </div>
        </a>
      )}

      {/* CONTROLS */}
      <div className="rc-min__controls">
        <div className="rc-min__types">
          {window.TYPES.map((t) => (
            <button key={t.key} className={`rc-min__type ${typeFilter === t.key ? 'is-active' : ''}`} onClick={() => setTypeFilter(t.key)}>
              {t.plural} <span className="rc-min__type-count">({t.key === 'all' ? window.RESOURCES.length : window.RESOURCES.filter(r => r.type === t.key).length})</span>
            </button>
          ))}
        </div>
        <div className="rc-min__right">
          <div className="rc-min__search">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search\u2026" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" />
            </svg>
          </div>
          <button className={`rc-min__sort ${sort === 'date' ? 'is-active' : ''}`} onClick={() => setSort('date')}>Newest</button>
          <button className={`rc-min__sort ${sort === 'az' ? 'is-active' : ''}`} onClick={() => setSort('az')}>A\u2013Z</button>
        </div>
      </div>

      {/* INDEX — the whole point */}
      <ol className="rc-min__index">
        {filtered.map((r, i) => (
          <li key={r.id} className="rc-min__row">
            <a href={`#article-${r.id}`} className="rc-min__row-link">
              <div className="rc-min__row-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="rc-min__row-type">{window.TYPES.find(t => t.key === r.type)?.label}</div>
              <div className="rc-min__row-main">
                <h3 className="rc-min__row-title">{r.title}</h3>
                <p className="rc-min__row-dek">{r.dek}</p>
                <div className="rc-min__row-meta">
                  <span>{r.author || r.client}</span>
                  <span>\u00B7</span>
                  <span>{r.category}</span>
                  <span>\u00B7</span>
                  <span>{r.readTime}</span>
                </div>
              </div>
              <div className="rc-min__row-date">{window.formatDate(r.publishedAt)}</div>
              <div className="rc-min__row-cover-wrap">
                <div className="rc-min__row-cover"><window.ResourceCover resource={r} /></div>
              </div>
            </a>
          </li>
        ))}
      </ol>

      {filtered.length === 0 && (
        <div className="rc-min__empty">
          <p>Nothing matches that filter.</p>
          <button onClick={() => { setTypeFilter('all'); setQ(''); }}>Clear filters</button>
        </div>
      )}

      {/* FOOTER NOTE */}
      <footer className="rc-min__foot">
        <div className="rc-min__foot-inner">
          <div>
            <p className="rc-min__foot-kicker">Stay in the loop.</p>
            <p className="rc-min__foot-title"><em>Subscribe to get new pieces as they land.</em> One email a week, nothing more.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rc-min__foot-form">
            <input type="email" placeholder="you@company.com" />
            <button type="submit">
              Subscribe
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}

const MINIMAL_CSS = `
.rc-min {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #0A0A0A;
  background: #FFFFFF;
  padding: 96px 96px 120px;
  max-width: 1240px;
  margin: 0 auto;
}
.rc-min em {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 500;
}

/* HEADER */
.rc-min__header { border-bottom: 1px solid rgba(10,10,10,0.1); padding-bottom: 48px; margin-bottom: 48px; }
.rc-min__eyebrow {
  display: flex; align-items: center; gap: 10px;
  font-size: 12px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
  color: rgba(10,10,10,0.5);
  margin-bottom: 36px;
}
.rc-min__eyebrow-sep { opacity: 0.4; }
.rc-min__title {
  font-size: clamp(44px, 5.6vw, 88px);
  font-weight: 800; line-height: 1;
  letter-spacing: -0.035em;
  margin: 0 0 24px;
  max-width: 22ch;
}
.rc-min__sub {
  font-size: 18px; line-height: 1.55; color: rgba(10,10,10,0.65);
  margin: 0; max-width: 62ch;
}

/* FEATURED INSET */
.rc-min__feat {
  display: block;
  color: inherit; text-decoration: none;
  background: #F6F2EA;
  padding: 40px 44px;
  margin-bottom: 72px;
  border-left: 3px solid #4A0FB8;
  transition: transform 200ms, background 200ms;
}
.rc-min__feat:hover { background: #EADFCB; transform: translateX(3px); }
.rc-min__feat-label {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
  color: #4A0FB8;
  margin-bottom: 18px;
}
.rc-min__feat-dot {
  width: 8px; height: 8px; border-radius: 50%; background: #F37137;
  box-shadow: 0 0 0 4px rgba(243,113,55,0.25);
  animation: rc-min-pulse 2.4s ease-in-out infinite;
}
@keyframes rc-min-pulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(243,113,55,0.25); }
  50% { box-shadow: 0 0 0 10px rgba(243,113,55,0); }
}
.rc-min__feat-title {
  font-size: clamp(26px, 2.6vw, 38px); font-weight: 800; line-height: 1.1; letter-spacing: -0.02em;
  margin: 0 0 14px; max-width: 32ch;
}
.rc-min__feat-dek {
  font-size: 17px; line-height: 1.55; color: rgba(10,10,10,0.7);
  margin: 0 0 18px; max-width: 62ch;
}
.rc-min__feat-meta {
  display: flex; align-items: center; gap: 10px;
  font-size: 13px; color: rgba(10,10,10,0.55); font-weight: 500;
}

/* CONTROLS */
.rc-min__controls {
  display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(10,10,10,0.1);
  margin-bottom: 8px;
}
.rc-min__types { display: flex; gap: 24px; flex-wrap: wrap; }
.rc-min__type {
  font: inherit; font-size: 14px; font-weight: 600;
  color: rgba(10,10,10,0.4);
  padding: 4px 0;
  border-bottom: 1px solid transparent;
  transition: color 160ms, border-color 160ms;
}
.rc-min__type:hover { color: #0A0A0A; }
.rc-min__type.is-active { color: #0A0A0A; border-bottom-color: #0A0A0A; }
.rc-min__type-count { font-weight: 400; color: rgba(10,10,10,0.4); margin-left: 4px; }
.rc-min__right { display: flex; align-items: center; gap: 20px; }
.rc-min__search { display: flex; align-items: center; gap: 8px; color: rgba(10,10,10,0.4); }
.rc-min__search input {
  border: 0; outline: 0; background: transparent; font: inherit; font-size: 14px; color: #0A0A0A;
  width: 180px; padding: 4px 0;
  border-bottom: 1px solid rgba(10,10,10,0.15);
}
.rc-min__search input::placeholder { color: rgba(10,10,10,0.4); }
.rc-min__search input:focus { border-bottom-color: #4A0FB8; }
.rc-min__sort {
  font: inherit; font-size: 13px; font-weight: 500;
  color: rgba(10,10,10,0.4);
  padding: 4px 0;
  transition: color 160ms;
}
.rc-min__sort:hover { color: #0A0A0A; }
.rc-min__sort.is-active { color: #0A0A0A; font-weight: 700; }

/* INDEX */
.rc-min__index { list-style: none; margin: 0; padding: 0; }
.rc-min__row { border-bottom: 1px solid rgba(10,10,10,0.08); position: relative; }
.rc-min__row-link {
  display: grid;
  grid-template-columns: 60px 130px 1fr 110px;
  gap: 24px;
  align-items: start;
  padding: 28px 0;
  color: inherit; text-decoration: none;
  transition: padding 200ms;
  position: relative;
}
.rc-min__row-link:hover { padding-left: 12px; padding-right: 12px; background: #FAF7F0; }
.rc-min__row-num {
  font-family: 'Playfair Display', serif; font-style: italic;
  font-size: 22px; font-weight: 500; color: rgba(10,10,10,0.3);
  line-height: 1.3;
}
.rc-min__row-type {
  font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
  color: #4A0FB8;
  padding-top: 6px;
}
.rc-min__row-main {}
.rc-min__row-title {
  font-size: clamp(20px, 1.6vw, 26px); font-weight: 700; line-height: 1.2; letter-spacing: -0.015em;
  margin: 0 0 8px;
  max-width: 60ch;
  transition: color 160ms;
}
.rc-min__row-link:hover .rc-min__row-title { color: #4A0FB8; }
.rc-min__row-dek {
  font-size: 14px; line-height: 1.5; color: rgba(10,10,10,0.6);
  margin: 0 0 10px;
  max-width: 72ch;
}
.rc-min__row-meta {
  display: flex; align-items: center; gap: 8px;
  font-size: 12px; color: rgba(10,10,10,0.45);
  font-weight: 500;
}
.rc-min__row-date {
  font-size: 12px; color: rgba(10,10,10,0.45); font-weight: 500;
  padding-top: 8px;
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* cover appears on hover as a small floating preview (desktop only) */
.rc-min__row-cover-wrap {
  position: absolute;
  right: -260px; top: 50%; transform: translateY(-50%);
  width: 220px; height: 165px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 220ms, transform 220ms;
}
.rc-min__row-link:hover .rc-min__row-cover-wrap { opacity: 1; transform: translateY(-50%) translateX(-20px); }
.rc-min__row-cover {
  width: 100%; height: 100%;
  overflow: hidden;
  box-shadow: 0 18px 48px rgba(10,10,10,0.18);
}
.rc-min__row-cover svg { width: 100%; height: 100%; display: block; }

@media (max-width: 1400px) { .rc-min__row-cover-wrap { display: none; } }

.rc-min__empty {
  padding: 80px 0; text-align: center; color: rgba(10,10,10,0.55);
}
.rc-min__empty button {
  margin-top: 12px; font: inherit; font-size: 14px; font-weight: 600;
  color: #4A0FB8; border-bottom: 1px solid currentColor; padding-bottom: 2px;
}

/* FOOTER */
.rc-min__foot { margin-top: 96px; padding-top: 48px; border-top: 1px solid rgba(10,10,10,0.1); }
.rc-min__foot-inner { display: grid; grid-template-columns: 1.3fr 1fr; gap: 48px; align-items: center; }
.rc-min__foot-kicker { font-size: 12px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #F37137; margin: 0 0 10px; }
.rc-min__foot-title { font-size: clamp(22px, 2.2vw, 32px); font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; margin: 0; max-width: 40ch; }
.rc-min__foot-form { display: flex; border-bottom: 1px solid #0A0A0A; padding-bottom: 8px; }
.rc-min__foot-form input { flex: 1; border: 0; outline: 0; background: transparent; font: inherit; font-size: 15px; color: #0A0A0A; }
.rc-min__foot-form input::placeholder { color: rgba(10,10,10,0.4); }
.rc-min__foot-form button {
  display: inline-flex; align-items: center; gap: 8px;
  font: inherit; font-size: 14px; font-weight: 700; color: #0A0A0A;
  transition: color 180ms;
}
.rc-min__foot-form button:hover { color: #4A0FB8; }

@media (max-width: 960px) {
  .rc-min { padding: 56px 24px 80px; }
  .rc-min__feat { padding: 28px 24px; }
  .rc-min__row-link { grid-template-columns: 1fr; gap: 8px; padding: 24px 0 !important; }
  .rc-min__row-num, .rc-min__row-date { display: none; }
  .rc-min__row-type { padding-top: 0; }
  .rc-min__controls { flex-direction: column; align-items: flex-start; }
  .rc-min__right { width: 100%; flex-wrap: wrap; }
  .rc-min__search input { width: 140px; }
  .rc-min__foot-inner { grid-template-columns: 1fr; gap: 24px; }
}
`;

window.ResourcesMinimal = ResourcesMinimal;
