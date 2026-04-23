// RESOURCES LANDING — Variation B: MAGAZINE
// Bold issue cover energy. Full-bleed hero with huge headline,
// asymmetric grid of featured pieces, then a clean type-led list.
// Feels like an Issue N of a design magazine. Matches homepage energy.

const { useState: useStateB, useMemo: useMemoB } = React;

function ResourcesMagazine() {
  const [typeFilter, setTypeFilter] = useStateB('all');
  const [q, setQ] = useStateB('');

  const filtered = useMemoB(() => {
    return window.RESOURCES.filter((r) => {
      if (typeFilter !== 'all' && r.type !== typeFilter) return false;
      if (q && !(r.title + ' ' + r.dek + ' ' + r.category).toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [typeFilter, q]);

  const hero = filtered[0];
  const feature1 = filtered[1]; // tall
  const feature2 = filtered[2]; // wide
  const feature3 = filtered[3]; // square
  const rest = filtered.slice(4);

  return (
    <div className="rc-mag">
      <style>{MAGAZINE_CSS}</style>

      {/* ISSUE COVER */}
      <section className="rc-mag__cover">
        {hero && (
          <div className="rc-mag__cover-bg">
            <window.ResourceCover resource={hero} />
          </div>
        )}
        <div className="rc-mag__cover-shade" />
        <div className="rc-mag__cover-inner">
          <div className="rc-mag__flag">
            <span className="rc-mag__flag-word">Insights</span>
            <span className="rc-mag__flag-issue">Issue \u2116 14 \u00B7 Nov 2025</span>
          </div>
          <h1 className="rc-mag__cover-headline">
            Field notes from <em>building learning that performs.</em>
          </h1>
          {hero && (
            <a className="rc-mag__cover-feature" href={`#article-${hero.id}`}>
              <div className="rc-mag__cover-feature-label">On the cover \u2014</div>
              <div className="rc-mag__cover-feature-title">{hero.title}</div>
              <div className="rc-mag__cover-feature-meta">
                <span>{window.TYPES.find(t => t.key === hero.type)?.label}</span>
                <span className="rc-mag__dot" />
                <span>{hero.readTime}</span>
                <span className="rc-mag__dot" />
                <span>{hero.author || hero.client}</span>
              </div>
              <span className="rc-mag__cover-feature-cta">
                Open the piece
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
              </span>
            </a>
          )}
        </div>
      </section>

      {/* Controls bar */}
      <div className="rc-mag__controls-wrap">
        <div className="rc-mag__controls">
          <div className="rc-mag__types">
            {window.TYPES.map((t) => (
              <button key={t.key} className={`rc-mag__type ${typeFilter === t.key ? 'is-active' : ''}`} onClick={() => setTypeFilter(t.key)}>
                {t.plural}
              </button>
            ))}
          </div>
          <div className="rc-mag__search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" />
            </svg>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search this issue\u2026" />
          </div>
        </div>
      </div>

      {/* FEATURED MOSAIC — asymmetric 3 cards */}
      {(feature1 || feature2 || feature3) && (
        <section className="rc-mag__mosaic-wrap">
          <div className="rc-mag__section-head">
            <span className="rc-mag__section-num">01</span>
            <span className="rc-mag__section-label">The Features</span>
          </div>
          <div className="rc-mag__mosaic">
            {feature1 && <MosaicCard r={feature1} size="tall" />}
            <div className="rc-mag__mosaic-right">
              {feature2 && <MosaicCard r={feature2} size="wide" />}
              {feature3 && <MosaicCard r={feature3} size="square" />}
            </div>
          </div>
        </section>
      )}

      {/* REST — type-led grid, looks like a magazine contents page */}
      {rest.length > 0 && (
        <section className="rc-mag__rest-wrap">
          <div className="rc-mag__section-head">
            <span className="rc-mag__section-num">02</span>
            <span className="rc-mag__section-label">The Rest of the Issue</span>
          </div>
          <div className="rc-mag__rest">
            {rest.map((r, i) => (
              <a key={r.id} className="rc-mag__rest-card" href={`#article-${r.id}`}>
                <div className="rc-mag__rest-num">{String(i + 4).padStart(2, '0')}</div>
                <div className="rc-mag__rest-cover"><window.ResourceCover resource={r} /></div>
                <div className="rc-mag__rest-body">
                  <div className="rc-mag__tag-row">
                    <span className="rc-mag__tag rc-mag__tag--type">{window.TYPES.find(t => t.key === r.type)?.label}</span>
                    <span className="rc-mag__tag">{r.category}</span>
                  </div>
                  <h3 className="rc-mag__rest-title">{r.title}</h3>
                  <p className="rc-mag__rest-dek">{r.dek}</p>
                  <div className="rc-mag__rest-meta">
                    <span>{r.author || r.client}</span>
                    <span className="rc-mag__dot" />
                    <span>{r.readTime}</span>
                  </div>
                </div>
                <svg className="rc-mag__rest-arrow" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 7h10v10M7 17L17 7" /></svg>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Colophon / newsletter */}
      <section className="rc-mag__colophon">
        <div>
          <p className="rc-mag__coloph-kicker">Subscribe</p>
          <h3 className="rc-mag__coloph-title">Get the next issue <em>in your inbox.</em></h3>
          <p className="rc-mag__coloph-sub">One email a week. New articles, case studies, and short insights \u2014 straight from the Knowaa studio.</p>
        </div>
        <form className="rc-mag__coloph-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="you@company.com" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
}

function MosaicCard({ r, size }) {
  return (
    <a className={`rc-mag__mosaic-card rc-mag__mosaic-card--${size}`} href={`#article-${r.id}`}>
      <div className="rc-mag__mosaic-cover"><window.ResourceCover resource={r} /></div>
      <div className="rc-mag__mosaic-body">
        <div className="rc-mag__tag-row">
          <span className="rc-mag__tag rc-mag__tag--type">{window.TYPES.find(t => t.key === r.type)?.label}</span>
          <span className="rc-mag__tag">{r.category}</span>
        </div>
        <h3 className="rc-mag__mosaic-title">{r.title}</h3>
        {size === 'tall' && <p className="rc-mag__mosaic-dek">{r.dek}</p>}
        <div className="rc-mag__mosaic-meta">
          <span>{r.author || r.client}</span>
          <span className="rc-mag__dot" />
          <span>{r.readTime}</span>
        </div>
      </div>
    </a>
  );
}

const MAGAZINE_CSS = `
.rc-mag {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #0A0A0A;
  background: #F6F2EA;
}
.rc-mag em {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 500;
}

/* ISSUE COVER */
.rc-mag__cover {
  position: relative;
  min-height: 78vh;
  background: #2D1760;
  color: #FFFFFF;
  overflow: hidden;
  padding: 64px 72px 80px;
  display: flex; flex-direction: column; justify-content: space-between;
}
.rc-mag__cover-bg { position: absolute; inset: 0; z-index: 0; }
.rc-mag__cover-bg svg { width: 100%; height: 100%; opacity: 0.72; }
.rc-mag__cover-shade {
  position: absolute; inset: 0; z-index: 1;
  background:
    linear-gradient(180deg, rgba(26,11,61,0.7) 0%, rgba(26,11,61,0.3) 40%, rgba(26,11,61,0.9) 100%),
    linear-gradient(90deg, rgba(26,11,61,0.85) 0%, rgba(26,11,61,0) 65%);
}
.rc-mag__cover-inner { position: relative; z-index: 2; display: flex; flex-direction: column; height: 100%; min-height: calc(78vh - 144px); }

.rc-mag__flag {
  display: flex; align-items: baseline; justify-content: space-between;
  border-top: 2px solid #FFFFFF; padding-top: 16px;
}
.rc-mag__flag-word {
  font-family: 'Playfair Display', serif; font-style: italic;
  font-size: clamp(36px, 4.5vw, 64px); font-weight: 500;
  line-height: 1; letter-spacing: -0.02em;
}
.rc-mag__flag-issue {
  font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
  opacity: 0.8;
}
.rc-mag__cover-headline {
  font-size: clamp(56px, 8vw, 140px);
  font-weight: 900; line-height: 0.92; letter-spacing: -0.035em;
  margin: 48px 0 auto 0;
  max-width: 16ch;
}
.rc-mag__cover-feature {
  display: inline-flex; flex-direction: column;
  color: inherit; text-decoration: none;
  max-width: 560px;
  margin-top: 48px;
  padding: 24px 28px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  border-left: 3px solid #F37137;
  transition: background 200ms, transform 200ms;
}
.rc-mag__cover-feature:hover { background: rgba(255,255,255,0.14); transform: translateX(4px); }
.rc-mag__cover-feature-label { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #F37137; margin-bottom: 10px; }
.rc-mag__cover-feature-title { font-size: 22px; font-weight: 800; line-height: 1.2; letter-spacing: -0.015em; margin-bottom: 14px; }
.rc-mag__cover-feature-meta { display: flex; align-items: center; gap: 10px; font-size: 12px; opacity: 0.75; margin-bottom: 16px; font-weight: 500; }
.rc-mag__cover-feature-cta { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; color: #F37137; letter-spacing: 0.02em; }
.rc-mag__cover-feature-cta svg { transition: transform 200ms; }
.rc-mag__cover-feature:hover .rc-mag__cover-feature-cta svg { transform: translateX(4px); }

/* CONTROLS */
.rc-mag__controls-wrap { background: #F6F2EA; padding: 48px 72px 24px; position: sticky; top: 0; z-index: 5; }
.rc-mag__controls {
  display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap;
  background: #FFFFFF;
  padding: 12px 20px;
  border-radius: 999px;
  box-shadow: 0 4px 18px rgba(10,10,10,0.08);
}
.rc-mag__types { display: flex; gap: 4px; flex-wrap: wrap; }
.rc-mag__type {
  font: inherit; font-size: 13px; font-weight: 600;
  color: rgba(10,10,10,0.55);
  padding: 8px 16px; border-radius: 999px;
  transition: background 160ms, color 160ms;
}
.rc-mag__type:hover { color: #0A0A0A; }
.rc-mag__type.is-active { background: #4A0FB8; color: #FFFFFF; }
.rc-mag__search { display: flex; align-items: center; gap: 8px; color: rgba(10,10,10,0.5); padding: 0 8px; min-width: 240px; }
.rc-mag__search input { border: 0; outline: 0; background: transparent; font: inherit; font-size: 14px; color: #0A0A0A; width: 100%; }
.rc-mag__search input::placeholder { color: rgba(10,10,10,0.4); }

/* SECTION HEAD */
.rc-mag__section-head { display: flex; align-items: baseline; gap: 16px; padding: 0 72px; margin-bottom: 32px; }
.rc-mag__section-num {
  font-family: 'Playfair Display', serif; font-style: italic;
  font-size: 48px; font-weight: 500;
  color: #F37137; line-height: 1;
}
.rc-mag__section-label {
  font-size: 13px; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase;
  color: rgba(10,10,10,0.7);
}

/* MOSAIC */
.rc-mag__mosaic-wrap { padding: 56px 0 72px; }
.rc-mag__mosaic {
  display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px;
  padding: 0 72px;
}
.rc-mag__mosaic-right { display: flex; flex-direction: column; gap: 24px; }
.rc-mag__mosaic-card {
  color: inherit; text-decoration: none;
  background: #FFFFFF;
  display: flex; flex-direction: column;
  overflow: hidden;
  transition: transform 250ms cubic-bezier(.2,.7,.3,1), box-shadow 250ms;
  box-shadow: 0 2px 10px rgba(10,10,10,0.05);
}
.rc-mag__mosaic-card:hover { transform: translateY(-4px); box-shadow: 0 18px 48px rgba(10,10,10,0.12); }
.rc-mag__mosaic-card--tall { grid-row: span 1; }
.rc-mag__mosaic-card--tall .rc-mag__mosaic-cover { aspect-ratio: 4/5; }
.rc-mag__mosaic-card--wide .rc-mag__mosaic-cover { aspect-ratio: 16/9; }
.rc-mag__mosaic-card--square .rc-mag__mosaic-cover { aspect-ratio: 4/3; }
.rc-mag__mosaic-cover { overflow: hidden; }
.rc-mag__mosaic-cover svg { transition: transform 700ms cubic-bezier(.2,.7,.3,1); }
.rc-mag__mosaic-card:hover .rc-mag__mosaic-cover svg { transform: scale(1.05); }
.rc-mag__mosaic-body { padding: 28px 32px 32px; flex: 1; display: flex; flex-direction: column; }
.rc-mag__mosaic-title {
  font-size: clamp(20px, 1.8vw, 28px); font-weight: 800; line-height: 1.15; letter-spacing: -0.015em;
  margin: 0 0 12px;
}
.rc-mag__mosaic-card--tall .rc-mag__mosaic-title { font-size: clamp(24px, 2.2vw, 34px); }
.rc-mag__mosaic-dek { font-size: 15px; line-height: 1.55; color: rgba(10,10,10,0.65); margin: 0 0 16px; }
.rc-mag__mosaic-meta { display: flex; align-items: center; gap: 10px; font-size: 12px; color: rgba(10,10,10,0.55); margin-top: auto; }

/* TAGS */
.rc-mag__tag-row { display: flex; gap: 8px; margin-bottom: 14px; flex-wrap: wrap; }
.rc-mag__tag {
  font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  padding: 5px 10px; border: 1px solid rgba(10,10,10,0.15); color: rgba(10,10,10,0.7);
  border-radius: 999px;
}
.rc-mag__tag--type { background: #0A0A0A; color: #FFFFFF; border-color: #0A0A0A; }
.rc-mag__dot { width: 3px; height: 3px; border-radius: 50%; background: currentColor; opacity: 0.5; }

/* REST GRID */
.rc-mag__rest-wrap { padding: 56px 0 96px; }
.rc-mag__rest { padding: 0 72px; display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-top: 2px solid #0A0A0A; }
.rc-mag__rest-card {
  display: grid; grid-template-columns: 56px 140px 1fr auto; gap: 24px;
  align-items: start;
  padding: 32px 8px;
  color: inherit; text-decoration: none;
  border-bottom: 1px solid rgba(10,10,10,0.12);
  transition: background 180ms;
}
.rc-mag__rest-card:nth-child(odd) { border-right: 1px solid rgba(10,10,10,0.12); padding-right: 32px; }
.rc-mag__rest-card:nth-child(even) { padding-left: 32px; }
.rc-mag__rest-card:hover { background: #FFFFFF; }
.rc-mag__rest-num {
  font-family: 'Playfair Display', serif; font-style: italic;
  font-size: 28px; font-weight: 500; color: #F37137;
  line-height: 1; padding-top: 4px;
}
.rc-mag__rest-cover { aspect-ratio: 4/3; overflow: hidden; background: #0A0A0A; }
.rc-mag__rest-title { font-size: 20px; font-weight: 800; line-height: 1.2; letter-spacing: -0.015em; margin: 0 0 8px; }
.rc-mag__rest-dek { font-size: 13px; line-height: 1.5; color: rgba(10,10,10,0.6); margin: 0 0 10px; }
.rc-mag__rest-meta { display: flex; align-items: center; gap: 10px; font-size: 11px; color: rgba(10,10,10,0.55); }
.rc-mag__rest-arrow { color: rgba(10,10,10,0.25); margin-top: 6px; transition: color 200ms, transform 200ms; }
.rc-mag__rest-card:hover .rc-mag__rest-arrow { color: #4A0FB8; transform: translate(3px, -3px); }

/* COLOPHON */
.rc-mag__colophon {
  background: #0A0A0A; color: #FFFFFF; padding: 80px 72px;
  display: grid; grid-template-columns: 1.3fr 1fr; gap: 56px; align-items: end;
}
.rc-mag__coloph-kicker { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #F37137; margin: 0 0 12px; }
.rc-mag__coloph-title { font-size: clamp(40px, 5vw, 72px); font-weight: 900; line-height: 0.95; letter-spacing: -0.03em; margin: 0 0 16px; max-width: 14ch; }
.rc-mag__coloph-title em { color: #F37137; }
.rc-mag__coloph-sub { font-size: 16px; line-height: 1.5; color: rgba(255,255,255,0.7); margin: 0; max-width: 50ch; }
.rc-mag__coloph-form { display: flex; flex-direction: column; gap: 12px; }
.rc-mag__coloph-form input {
  padding: 18px 20px; background: transparent; border: 1px solid rgba(255,255,255,0.3);
  color: #FFFFFF; font: inherit; font-size: 15px;
}
.rc-mag__coloph-form input::placeholder { color: rgba(255,255,255,0.4); }
.rc-mag__coloph-form input:focus { outline: 0; border-color: #F37137; }
.rc-mag__coloph-form button {
  padding: 18px 28px; background: #F37137; color: #FFFFFF; border: 0;
  font: inherit; font-size: 14px; font-weight: 700; letter-spacing: 0.04em;
  cursor: pointer; transition: background 180ms;
}
.rc-mag__coloph-form button:hover { background: #FF8A50; }

@media (max-width: 960px) {
  .rc-mag__cover, .rc-mag__controls-wrap, .rc-mag__section-head, .rc-mag__mosaic, .rc-mag__rest, .rc-mag__colophon { padding-left: 24px; padding-right: 24px; }
  .rc-mag__mosaic { grid-template-columns: 1fr; }
  .rc-mag__rest { grid-template-columns: 1fr; }
  .rc-mag__rest-card { grid-template-columns: 40px 90px 1fr; padding: 20px 0 !important; }
  .rc-mag__rest-arrow { display: none; }
  .rc-mag__colophon { grid-template-columns: 1fr; gap: 28px; padding: 56px 24px; }
}
`;

window.ResourcesMagazine = ResourcesMagazine;
