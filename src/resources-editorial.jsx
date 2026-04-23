// RESOURCES LANDING — Editorial (purple hero, half-overlap card, magenta newsletter).
// Homepage DNA:
//   - Purple (#503594) hero ends mid-card; card straddles purple→white
//   - Dense brand-shape texture pattern (testimonials density)
//   - Real photo covers; white cards with light shadow
//   - Archive cards: image fills left edge vertically, flush with card edges
//   - Newsletter: magenta (#ED1F80) with the same shape pattern

const { useState: useStateA, useMemo: useMemoA } = React;

// Reusable brand-shape texture — 6 Knowaa logo shapes scattered across
// the viewBox at varied sizes, rotations, opacities. Dense (matches testimonials).
// Color-configurable: pass accentColor to tint the glow, shapeOpacity to control density.
function ShapeTexture({ id = 'tex', glowColor = '#7C3AED', glowStop = '#503594', glowCx = '72%', glowCy = '22%', subtle = false }) {
  const opacityScale = subtle ? 0.35 : 1;
  return (
    <svg className="rc__texture" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden
         style={{ opacity: subtle ? 0.55 : 1 }}>
      <defs>
        <radialGradient id={`${id}-glow`} cx={glowCx} cy={glowCy} r="56%">
          <stop offset="0%" stopColor={glowColor} stopOpacity="0.5" />
          <stop offset="60%" stopColor={glowStop} stopOpacity="0" />
        </radialGradient>
        <symbol id={`${id}-s1`} viewBox="244.67 36.21 16.69 16.69">
          <path fill="#ffffff" d="M 261.08 44.05 C 261.36 48.51 257.97 52.34 253.52 52.62 C 249.06 52.90 245.23 49.52 244.95 45.06 C 244.67 40.61 248.06 36.77 252.51 36.49 C 256.97 36.21 260.80 39.60 261.08 44.05 Z" />
        </symbol>
        <symbol id={`${id}-s2`} viewBox="57.00 38.65 16.69 16.68">
          <path fill="#ffffff" d="M 73.41 46.49 C 73.69 50.94 70.30 54.78 65.85 55.05 C 61.39 55.33 57.55 51.95 57.28 47.49 C 57.00 43.04 60.39 39.20 64.84 38.93 C 69.30 38.65 73.13 42.03 73.41 46.49 Z" />
        </symbol>
        <symbol id={`${id}-s3`} viewBox="21.89 30.20 31.05 34.61">
          <path fill="#ffffff" d="M 49.13 62.75 C 46.39 64.76 42.94 64.81 41.18 62.88 L 23.85 43.68 C 21.89 41.52 22.82 37.76 25.87 35.52 L 30.05 32.44 C 33.10 30.20 36.97 30.43 38.46 32.94 L 51.61 55.21 C 52.94 57.46 51.86 60.74 49.13 62.75 Z" />
        </symbol>
        <symbol id={`${id}-s4`} viewBox="267.46 29.36 30.67 36.83">
          <path fill="#ffffff" d="M 270.85 31.09 C 273.37 29.36 276.69 29.72 278.48 31.90 L 296.14 53.52 C 298.13 55.96 297.43 59.68 294.62 61.61 L 290.76 64.26 C 287.95 66.19 284.22 65.50 282.66 62.76 L 268.86 38.50 C 267.46 36.05 268.33 32.82 270.85 31.09 Z" />
        </symbol>
        <symbol id={`${id}-s5`} viewBox="116.64 18.22 35.56 43.42">
          <path fill="#ffffff" d="M 121.59 59.57 C 118.19 57.50 116.64 53.68 118.04 50.79 L 131.84 22.22 C 133.39 19.00 137.97 18.22 141.77 20.53 L 146.98 23.70 C 150.78 26.02 152.20 30.43 150.05 33.30 L 131.03 58.69 C 129.11 61.26 125.00 61.64 121.59 59.57 Z" />
        </symbol>
        <symbol id={`${id}-s6`} viewBox="177.36 27.89 31.10 34.86">
          <path fill="#ffffff" d="M 203.50 29.96 C 206.91 32.03 208.46 35.86 207.07 38.74 L 197.71 58.75 C 196.16 61.97 191.58 62.75 187.79 60.44 L 182.57 57.27 C 178.77 54.96 177.36 50.54 179.50 47.68 L 194.07 30.84 C 195.99 28.27 200.10 27.89 203.50 29.96 Z" />
        </symbol>
      </defs>
      <rect width="1600" height="900" fill={`url(#${id}-glow)`} />
      <g>
        {/* ============ s1 (small circles) — 14 placements ============ */}
        <use href={`#${id}-s1`} x="100"  y="140" width="54" height="54" opacity="0.14" />
        <use href={`#${id}-s1`} x="1340" y="560" width="44" height="44" opacity="0.11" />
        <use href={`#${id}-s1`} x="820"  y="780" width="32" height="32" opacity="0.12" />
        <use href={`#${id}-s1`} x="1100" y="180" width="38" height="38" opacity="0.13" />
        <use href={`#${id}-s1`} x="620"  y="520" width="30" height="30" opacity="0.11" />
        <use href={`#${id}-s1`} x="1520" y="420" width="42" height="42" opacity="0.12" />
        <use href={`#${id}-s1`} x="360"  y="820" width="28" height="28" opacity="0.10" />
        <use href={`#${id}-s1`} x="50"   y="440" width="32" height="32" opacity="0.11" />
        <use href={`#${id}-s1`} x="870"  y="110" width="38" height="38" opacity="0.12" />
        <use href={`#${id}-s1`} x="1440" y="80"  width="26" height="26" opacity="0.09" />
        <use href={`#${id}-s1`} x="700"  y="270" width="30" height="30" opacity="0.11" />
        <use href={`#${id}-s1`} x="1020" y="610" width="36" height="36" opacity="0.12" />
        <use href={`#${id}-s1`} x="240"  y="260" width="24" height="24" opacity="0.09" />
        <use href={`#${id}-s1`} x="1560" y="740" width="30" height="30" opacity="0.10" />

        {/* ============ s2 (circles) — 14 placements ============ */}
        <use href={`#${id}-s2`} x="480"  y="80"  width="50" height="50" opacity="0.13" />
        <use href={`#${id}-s2`} x="1460" y="220" width="36" height="36" opacity="0.10" />
        <use href={`#${id}-s2`} x="260"  y="660" width="40" height="40" opacity="0.12" />
        <use href={`#${id}-s2`} x="200"  y="480" width="34" height="34" opacity="0.12" />
        <use href={`#${id}-s2`} x="950"  y="290" width="26" height="26" opacity="0.10" />
        <use href={`#${id}-s2`} x="400"  y="230" width="36" height="36" opacity="0.13" />
        <use href={`#${id}-s2`} x="1240" y="760" width="40" height="40" opacity="0.11" />
        <use href={`#${id}-s2`} x="760"  y="420" width="24" height="24" opacity="0.10" />
        <use href={`#${id}-s2`} x="1380" y="340" width="28" height="28" opacity="0.10" />
        <use href={`#${id}-s2`} x="560"  y="700" width="32" height="32" opacity="0.11" />
        <use href={`#${id}-s2`} x="880"  y="540" width="34" height="34" opacity="0.12" />
        <use href={`#${id}-s2`} x="120"  y="750" width="28" height="28" opacity="0.10" />
        <use href={`#${id}-s2`} x="1160" y="500" width="22" height="22" opacity="0.09" />
        <use href={`#${id}-s2`} x="340"  y="560" width="26" height="26" opacity="0.10" />

        {/* ============ s3 (elongated) — 8 placements ============ */}
        <use href={`#${id}-s3`} x="-30"  y="350" width="140" height="156" opacity="0.09" transform="rotate(18 40 428)" />
        <use href={`#${id}-s3`} x="980"  y="60"  width="120" height="134" opacity="0.08" transform="rotate(-40 1040 127)" />
        <use href={`#${id}-s3`} x="440"  y="700" width="110" height="122" opacity="0.09" transform="rotate(135 495 761)" />
        <use href={`#${id}-s3`} x="720"  y="540" width="100" height="111" opacity="0.07" transform="rotate(150 770 595)" />
        <use href={`#${id}-s3`} x="1400" y="640" width="96"  height="107" opacity="0.08" transform="rotate(-25 1448 693)" />
        <use href={`#${id}-s3`} x="280"  y="40"  width="90"  height="100" opacity="0.07" transform="rotate(80 325 90)" />
        <use href={`#${id}-s3`} x="1080" y="820" width="80"  height="89"  opacity="0.08" transform="rotate(45 1120 864)" />
        <use href={`#${id}-s3`} x="640"  y="350" width="72"  height="80"  opacity="0.06" transform="rotate(-60 676 390)" />

        {/* ============ s4 — 7 placements ============ */}
        <use href={`#${id}-s4`} x="1380" y="30"  width="150" height="180" opacity="0.09" transform="rotate(195 1455 120)" />
        <use href={`#${id}-s4`} x="170"  y="640" width="110" height="132" opacity="0.08" transform="rotate(70 225 706)" />
        <use href={`#${id}-s4`} x="870"  y="400" width="100" height="120" opacity="0.07" transform="rotate(-85 920 460)" />
        <use href={`#${id}-s4`} x="480"  y="480" width="84"  height="101" opacity="0.06" transform="rotate(25 522 530)" />
        <use href={`#${id}-s4`} x="1180" y="60"  width="90"  height="108" opacity="0.08" transform="rotate(-145 1225 114)" />
        <use href={`#${id}-s4`} x="780"  y="720" width="84"  height="101" opacity="0.07" transform="rotate(115 822 770)" />
        <use href={`#${id}-s4`} x="40"   y="220" width="76"  height="91"  opacity="0.07" transform="rotate(200 78 265)" />

        {/* ============ s5 (tall leaning) — 7 placements ============ */}
        <use href={`#${id}-s5`} x="580"  y="160" width="160" height="196" opacity="0.07" transform="rotate(-25 660 258)" />
        <use href={`#${id}-s5`} x="1200" y="640" width="130" height="159" opacity="0.08" transform="rotate(55 1265 719)" />
        <use href={`#${id}-s5`} x="-20"  y="120" width="130" height="159" opacity="0.07" transform="rotate(45 45 199)" />
        <use href={`#${id}-s5`} x="900"  y="650" width="110" height="134" opacity="0.08" transform="rotate(-100 955 717)" />
        <use href={`#${id}-s5`} x="1400" y="460" width="100" height="122" opacity="0.07" transform="rotate(30 1450 521)" />
        <use href={`#${id}-s5`} x="340"  y="360" width="90"  height="110" opacity="0.06" transform="rotate(160 385 415)" />
        <use href={`#${id}-s5`} x="1080" y="240" width="80"  height="98"  opacity="0.07" transform="rotate(-35 1120 289)" />

        {/* ============ s6 — 7 placements ============ */}
        <use href={`#${id}-s6`} x="1080" y="360" width="130" height="146" opacity="0.08" transform="rotate(12 1145 433)" />
        <use href={`#${id}-s6`} x="320"  y="60"  width="130" height="146" opacity="0.07" transform="rotate(-50 385 133)" />
        <use href={`#${id}-s6`} x="60"   y="780" width="110" height="124" opacity="0.09" transform="rotate(105 115 842)" />
        <use href={`#${id}-s6`} x="1260" y="180" width="115" height="128" opacity="0.08" transform="rotate(-110 1317 244)" />
        <use href={`#${id}-s6`} x="540"  y="400" width="100" height="112" opacity="0.06" transform="rotate(80 590 456)" />
        <use href={`#${id}-s6`} x="820"  y="40"  width="86"  height="96"  opacity="0.07" transform="rotate(165 863 88)" />
        <use href={`#${id}-s6`} x="1500" y="320" width="76"  height="85"  opacity="0.08" transform="rotate(-70 1538 362)" />
      </g>
    </svg>
  );
}

function ResourcesEditorial() {
  const [typeFilter, setTypeFilter] = useStateA('all');
  const [q, setQ] = useStateA('');

  const filtered = useMemoA(() => {
    return window.RESOURCES.filter((r) => {
      if (typeFilter !== 'all' && r.type !== typeFilter) return false;
      if (q && !(r.title + ' ' + r.dek + ' ' + r.category).toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [typeFilter, q]);

  const hero = filtered[0];
  const stream = filtered.slice(1);

  const typeLabel = (k) => window.TYPES.find(t => t.key === k)?.label || k;

  return (
    <div className="rc">
      <style>{CSS}</style>

      {/* ─── HERO: short purple band (kicker only) → white band (headline + intro) → overlapping card ─── */}
      <section className="rc__hero-wrap">
        <div className="rc__hero-purple">
          <ShapeTexture id="rc-hero" glowColor="#8B5CF6" glowStop="#3A2478" glowCx="78%" glowCy="18%" />
          <div className="rc__hero-inner">
            <div className="rc__kicker-row">
              <span className="rc__kicker">Knowaa — Resources</span>
              <span className="rc__date">Updated weekly</span>
            </div>
          </div>
        </div>

        {/* Headline + intro on white */}
        <div className="rc__hero-light">
          <div className="rc__hero-inner">
            <h1 className="rc__h1">Insights. Field notes from building learning that performs.</h1>
            <p className="rc__intro">
              Articles, case studies, and short insights from the Knowaa studio. What we're learning
              as we design and produce enterprise learning programs that change behavior.
            </p>
          </div>
        </div>

        {/* Featured card — same lavender-inner design as archive cards */}
        {hero && (
          <div className="rc__hero-feature-wrap">
            <a className="rc__arch-card rc__arch-card--hero" href={`#article-${hero.id}`}>
              <div className="rc__arch-cover">
                {hero.image ? (
                  <img className="rc__arch-cover-img" src={hero.image} alt="" loading="eager" />
                ) : null}
                <span className="rc__arch-cover-label">{typeLabel(hero.type)}</span>
                <span className="rc__arch-cover-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3E33BB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4" />
                  </svg>
                </span>
              </div>
              <div className="rc__arch-body">
                <h2 className="rc__arch-title rc__arch-title--hero">{hero.title}</h2>
                <p className="rc__arch-date">{window.formatDate(hero.publishedAt)}</p>
                <span className="rc__arch-more">
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
                </span>
              </div>
            </a>
          </div>
        )}
      </section>

      {/* ─── Controls ─── */}
      <div className="rc__controls-wrap">
        <div className="rc__controls">
          <div className="rc__types">
            {window.TYPES.map((t) => (
              <button key={t.key}
                className={`rc__type ${typeFilter === t.key ? 'is-active' : ''}`}
                onClick={() => setTypeFilter(t.key)}>
                {t.plural}
              </button>
            ))}
          </div>
          <div className="rc__search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" />
            </svg>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" />
          </div>
        </div>
      </div>

      {/* ─── Archive — 3-col lavender grid of compact cards ─── */}
      {stream.length > 0 && (
        <section className="rc__stream">
          <div className="rc__sec-head">
            <span className="rc__sec-label">The archive</span>
            <span className="rc__rule" />
          </div>
          <ul className="rc__stream-list">
            {stream.map((r) => (
              <li key={r.id} className="rc__arch-item">
                <a href={`#article-${r.id}`} className="rc__arch-card">
                  <div className="rc__arch-cover">
                    {r.image ? (
                      <img className="rc__arch-cover-img" src={r.image} alt="" loading="lazy" />
                    ) : null}
                    <span className="rc__arch-cover-label">{typeLabel(r.type)}</span>
                    <span className="rc__arch-cover-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3E33BB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4" />
                      </svg>
                    </span>
                  </div>
                  <div className="rc__arch-body">
                    <h3 className="rc__arch-title">{r.title}</h3>
                    <p className="rc__arch-date">{window.formatDate(r.publishedAt)}</p>
                    <span className="rc__arch-more">
                      Learn More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ─── Magenta newsletter ─── */}
      <section className="rc__newsletter">
        <div className="rc__nl-inner">
          <div className="rc__nl-copy">
            <span className="rc__nl-kicker">One email a week. Never more.</span>
            <h3 className="rc__nl-title">New thinking, delivered.</h3>
          </div>
          <form className="rc__nl-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@company.com" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}

const CSS = `
.rc {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #0A0A0A;
  background: #FFFFFF;
}

/* ═══ Texture SVG (shared) ═══ */
.rc__texture {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* ═══ HERO WRAP — purple band that ends mid-card ═══ */
.rc__hero-wrap { position: relative; background: #FFFFFF; }
/* Subtle dark scrim at very top — helps the white nav read against the purple band */
.rc__hero-wrap::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 140px;
  background: linear-gradient(180deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.14) 45%, rgba(0,0,0,0) 100%);
  pointer-events: none;
  z-index: 3;
}
.rc__hero-purple {
  position: relative;
  /* Two-stop purple gradient — short, framed band behind the kicker */
  background:
    linear-gradient(180deg, #5A3BA3 0%, #503594 50%, #3A2478 100%);
  color: #FFFFFF;
  padding: 96px 72px 28px;
  overflow: hidden;
}
.rc__hero-light {
  background: #FFFFFF;
  padding: 56px 72px 0;
}
.rc__hero-light .rc__h1 { color: var(--title, #0B1638); }
.rc__hero-light .rc__intro { color: rgba(10,10,10,0.62); }
.rc__hero-inner {
  position: relative; z-index: 1;
  max-width: 1200px; margin: 0 auto;
}
.rc__kicker-row {
  display: flex; justify-content: space-between; align-items: baseline;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.25);
}
.rc__kicker, .rc__date {
  font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(255,255,255,0.8);
}
.rc__h1 {
  font-size: clamp(40px, 5vw, 72px);
  font-weight: 900; line-height: 1.0; letter-spacing: -0.028em;
  margin: 0 0 24px; max-width: 18ch;
  color: #FFFFFF;
}
.rc__intro {
  font-size: 18px; line-height: 1.55; color: rgba(255,255,255,0.85);
  max-width: 58ch; margin: 0;
}

/* Feature card — 30% smaller than original. Max width capped,
   centered. Now sits on pure white, just below the hero intro. */
.rc__hero-feature-wrap {
  max-width: 840px; margin: 0 auto;
  padding: 0 24px;
  margin-top: 48px;
  margin-bottom: 80px;
  position: relative; z-index: 2;
}
.rc__hero-feature {
  display: grid; grid-template-columns: 1fr 1fr;
  background: #FFFFFF; color: #0A0A0A;
  border: 1px solid rgba(10,10,10,0.1);
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 6px 18px -6px rgba(10,10,10,0.14),
              0 2px 6px rgba(10,10,10,0.05);
  transition: transform 250ms cubic-bezier(.2,.7,.3,1), box-shadow 250ms, border-color 250ms;
}
.rc__hero-feature:hover {
  transform: translateY(-3px);
  border-color: rgba(10,10,10,0.16);
  box-shadow: 0 14px 32px -10px rgba(10,10,10,0.22),
              0 4px 10px rgba(10,10,10,0.08);
}
.rc__hero-feature-cover {
  overflow: hidden;
  background: #0A0A0A;
  /* Let image fill the grid cell full-height — card size no longer
     dictated by image aspect. */
  align-self: stretch;
  min-height: 320px;
}
.rc__hero-feature-cover img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform 900ms cubic-bezier(.2,.7,.3,1);
}
.rc__hero-feature:hover .rc__hero-feature-cover img { transform: scale(1.05); }
.rc__hero-feature-body {
  padding: 32px 36px;
  display: flex; flex-direction: column; justify-content: center;
}
.rc__hero-feature-title {
  font-size: clamp(20px, 2vw, 26px);
  font-weight: 900; line-height: 1.15; letter-spacing: -0.02em;
  margin: 0 0 12px; max-width: 22ch;
}
.rc__hero-feature-dek {
  font-size: 14px; line-height: 1.55; color: rgba(10,10,10,0.68);
  margin: 0 0 16px; max-width: 44ch;
}
.rc__hero-feature-meta {
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  font-size: 11px; color: rgba(10,10,10,0.55); font-weight: 500;
  margin-bottom: 20px;
}

/* ═══ TAGS ═══ */
.rc__tag-row {
  display: inline-flex; align-items: center; gap: 10px;
  margin-bottom: 16px;
  font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
}
.rc__tag-row--sm { margin-bottom: 12px; font-size: 10px; letter-spacing: 0.16em; }
.rc__tag--type { color: #4A0FB8; }
.rc__tag-cat { color: rgba(10,10,10,0.55); }
.rc__tag-dot { width: 2px; height: 2px; border-radius: 50%; background: rgba(10,10,10,0.35); }
.rc__dot { width: 3px; height: 3px; border-radius: 50%; background: rgba(10,10,10,0.35); }

/* ═══ CTA PILL ═══ */
.rc__cta {
  align-self: flex-start;
  display: inline-flex; align-items: center; gap: 12px;
  font-size: 14px; font-weight: 600; letter-spacing: 0.01em;
  padding: 12px 18px 12px 22px;
  background: #0A0A0A; color: #FFFFFF;
  border-radius: 999px;
  transition: background 200ms;
}
.rc__cta:hover { background: #4A0FB8; }
.rc__cta-arrow-wrap {
  width: 22px; height: 22px; border-radius: 50%;
  background: #FFFFFF; color: #0A0A0A;
  display: inline-flex; align-items: center; justify-content: center;
  transition: transform 220ms cubic-bezier(.2,.7,.3,1);
}
.rc__hero-feature:hover .rc__cta-arrow-wrap { transform: translateX(3px); }

/* ═══ CONTROLS ═══ */
.rc__controls-wrap { background: #FFFFFF; padding: 24px 72px; border-bottom: 1px solid rgba(10,10,10,0.08); }
.rc__controls {
  max-width: 1200px; margin: 0 auto;
  display: flex; justify-content: space-between; align-items: center;
  gap: 24px; flex-wrap: wrap;
}
.rc__types { display: flex; gap: 4px; flex-wrap: wrap; }
.rc__type {
  font: inherit; font-size: 13px; font-weight: 600;
  color: rgba(10,10,10,0.55);
  padding: 10px 18px; border-radius: 999px;
  transition: background 160ms, color 160ms;
}
.rc__type:hover { color: #0A0A0A; }
.rc__type.is-active { background: #0A0A0A; color: #FFFFFF; }
.rc__search {
  display: flex; align-items: center; gap: 8px;
  color: rgba(10,10,10,0.5);
  border-bottom: 1px solid rgba(10,10,10,0.18);
  padding: 6px 4px;
  min-width: 260px;
  transition: border-color 160ms;
}
.rc__search:focus-within { border-bottom-color: #4A0FB8; color: #0A0A0A; }
.rc__search input {
  border: 0; outline: 0; background: transparent; font: inherit;
  font-size: 14px; color: #0A0A0A; width: 100%;
}
.rc__search input::placeholder { color: rgba(10,10,10,0.4); }

/* ═══ Also this week (light grey band) ═══ */
.rc__also {
  position: relative;
  background: #F2F2F2;
  color: var(--ink);
  padding: 80px 72px;
  overflow: hidden;
}
.rc__also-inner {
  position: relative; z-index: 1;
  max-width: 1200px; margin: 0 auto;
}
.rc__also .rc__sec-label { color: rgba(10,10,10,0.65); }
.rc__also .rc__rule { background: rgba(10,10,10,0.14); }
.rc__also .rc__sec-head { margin-bottom: 36px; }
.rc__sec-head {
  max-width: 1200px; margin: 0 auto 36px;
  display: flex; align-items: center; gap: 16px;
}
.rc__sec-label {
  font-size: 11px; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase;
  color: rgba(10,10,10,0.65);
}
.rc__rule { flex: 1; height: 1px; background: rgba(10,10,10,0.18); }

.rc__sec-grid {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px;
}
.rc__card {
  color: inherit; text-decoration: none;
  background: #FFFFFF;
  border: 1px solid rgba(10,10,10,0.1);
  border-radius: 20px;
  overflow: hidden;
  display: flex; flex-direction: column;
  box-shadow: 0 2px 8px rgba(10,10,10,0.06),
              0 8px 24px -8px rgba(10,10,10,0.08);
  transition: transform 250ms cubic-bezier(.2,.7,.3,1), box-shadow 250ms, border-color 250ms;
}
.rc__card:hover {
  transform: translateY(-4px);
  border-color: rgba(10,10,10,0.16);
  box-shadow: 0 6px 16px rgba(10,10,10,0.08),
              0 16px 40px -8px rgba(10,10,10,0.15);
}
.rc__card-cover { aspect-ratio: 4/3; overflow: hidden; background: #0A0A0A; }
.rc__card-cover img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 800ms cubic-bezier(.2,.7,.3,1);
}
.rc__card:hover .rc__card-cover img { transform: scale(1.05); }
.rc__card-body { padding: 24px 28px 28px; flex: 1; display: flex; flex-direction: column; }
.rc__card-title {
  font-size: 20px; font-weight: 800; line-height: 1.2; letter-spacing: -0.015em;
  margin: 0 0 10px;
  transition: color 180ms;
}
.rc__card:hover .rc__card-title { color: #4A0FB8; }
.rc__card-dek {
  font-size: 14px; line-height: 1.5; color: rgba(10,10,10,0.62);
  margin: 0 0 16px;
}
.rc__card-meta {
  display: flex; align-items: center; gap: 10px;
  font-size: 12px; color: rgba(10,10,10,0.55);
  margin-top: auto;
}

/* Archive — 3-col lavender grid of compact cards (reference design) ==== */
.rc__stream { padding: 80px 72px; background: #F4F2FA; }
.rc__stream-list {
  max-width: 1200px; margin: 0 auto;
  list-style: none; padding: 0;
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px;
}
.rc__arch-item { display: flex; }
.rc__arch-card {
  color: inherit; text-decoration: none;
  background: #FFFFFF;
  border: 1px solid rgba(62,51,187,0.14);
  border-radius: 18px;
  padding: 16px;
  box-shadow: 0 1px 2px rgba(13,9,89,0.04),
              0 10px 24px -12px rgba(13,9,89,0.10);
  display: flex; flex-direction: column;
  width: 100%;
  transition: transform 220ms cubic-bezier(.2,.7,.3,1), box-shadow 220ms, border-color 220ms;
}
.rc__arch-card:hover {
  transform: translateY(-3px);
  border-color: rgba(62,51,187,0.28);
  box-shadow: 0 4px 12px rgba(13,9,89,0.06),
              0 20px 40px -12px rgba(13,9,89,0.18);
}
.rc__arch-cover {
  position: relative;
  background: #E9E4F8;
  border-radius: 12px;
  aspect-ratio: 4/3;
  padding: 18px 20px;
  display: flex; align-items: flex-start;
  overflow: hidden;
}
.rc__arch-cover-img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 700ms cubic-bezier(.2,.7,.3,1);
}
.rc__arch-card:hover .rc__arch-cover-img { transform: scale(1.04); }
.rc__arch-cover::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(13,9,89,0.35) 0%, rgba(13,9,89,0.10) 45%, rgba(13,9,89,0) 100%);
  pointer-events: none;
}
.rc__arch-cover-label { position: relative; z-index: 1; color: #FFFFFF; text-shadow: 0 1px 2px rgba(13,9,89,0.35); }
.rc__arch-cover-icon { z-index: 1; background: rgba(255,255,255,0.9); border-radius: 50%; }
.rc__arch-cover-label {
  font-family: 'Poppins', sans-serif;
  font-size: 15px; font-weight: 700; letter-spacing: -0.01em;
  color: #3E33BB;
  max-width: 70%;
}
.rc__arch-cover-icon {
  position: absolute; top: 14px; right: 14px;
  display: inline-flex; align-items: center; justify-content: center;
  width: 28px; height: 28px;
}
.rc__arch-body { padding: 18px 8px 10px; display: flex; flex-direction: column; }
.rc__arch-title {
  font-family: 'Poppins', sans-serif;
  font-size: 17px; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em;
  color: #0D0959; margin: 0 0 6px;
}
.rc__arch-date {
  font-size: 13px; line-height: 1.45; color: rgba(10,10,10,0.62);
  margin: 0 0 16px;
}
.rc__arch-more {
  align-self: flex-end;
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 13px; font-weight: 600;
  color: #3E33BB;
  text-decoration: underline; text-underline-offset: 3px;
  transition: gap 180ms, color 180ms;
}
.rc__arch-card:hover .rc__arch-more { gap: 10px; color: #0D0959; }

/* Hero feature — same card, larger */
.rc__arch-card--hero {
  max-width: 560px;
  margin: 0 auto;
  padding: 22px;
}
.rc__arch-card--hero .rc__arch-cover { aspect-ratio: 16/9; padding: 24px 28px; }
.rc__arch-card--hero .rc__arch-cover-label { font-size: 20px; max-width: 75%; }
.rc__arch-card--hero .rc__arch-cover-icon { top: 18px; right: 18px; width: 34px; height: 34px; }
.rc__arch-card--hero .rc__arch-title--hero {
  font-size: 22px; line-height: 1.25;
}
.rc__arch-card--hero .rc__arch-body { padding: 22px 10px 12px; }

/* ═══ MAGENTA NEWSLETTER ═══ */
.rc__newsletter {
  position: relative;
  background: #ED1F80;
  color: #FFFFFF;
  padding: 80px 72px;
  overflow: hidden;
}
.rc__nl-inner {
  position: relative; z-index: 1;
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1.1fr 1fr; gap: 56px; align-items: end;
}
.rc__nl-kicker {
  display: inline-block;
  font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(255,255,255,0.85); margin-bottom: 14px;
}
.rc__nl-title {
  font-size: clamp(36px, 4.5vw, 60px);
  font-weight: 900; line-height: 1.0; letter-spacing: -0.025em;
  margin: 0; max-width: 14ch;
  color: #FFFFFF;
}
.rc__nl-form {
  display: flex; align-items: center;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 999px;
  padding: 6px 6px 6px 22px;
  transition: border-color 180ms, background 180ms;
}
.rc__nl-form:focus-within { border-color: #FFFFFF; background: rgba(255,255,255,0.2); }
.rc__nl-form input {
  flex: 1; border: 0; outline: 0; background: transparent;
  font: inherit; font-size: 15px; color: #FFFFFF;
  padding: 10px 0;
}
.rc__nl-form input::placeholder { color: rgba(255,255,255,0.6); }
.rc__nl-form button {
  padding: 12px 24px;
  background: #FFFFFF; color: #0A0A0A;
  border-radius: 999px;
  font: inherit; font-size: 14px; font-weight: 600;
  cursor: pointer; transition: background 180ms, color 180ms;
}
.rc__nl-form button:hover { background: #0A0A0A; color: #FFFFFF; }

/* ═══ Responsive ═══ */
@media (max-width: 960px) {
  .rc__hero-purple { padding: 64px 24px 20px; }
  .rc__hero-light { padding: 36px 24px 0; }
  .rc__hero-feature-wrap { padding: 0 24px; margin-top: 32px; margin-bottom: 56px; }
  .rc__hero-feature { grid-template-columns: 1fr; }
  .rc__hero-feature-body { padding: 28px 24px; }
  .rc__hero-feature-cover { aspect-ratio: 16/10; }
  .rc__controls-wrap { padding: 20px 24px; }
  .rc__also, .rc__stream { padding: 56px 24px; }
  .rc__sec-grid { grid-template-columns: 1fr; gap: 20px; }
  .rc__stream-list { grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .rc__newsletter { padding: 56px 24px; }
  .rc__nl-inner { grid-template-columns: 1fr; gap: 28px; }
}
@media (max-width: 640px) {
  .rc__stream-list { grid-template-columns: 1fr; }
}
`;

window.ResourcesEditorial = ResourcesEditorial;
window.ShapeTexture = ShapeTexture;
