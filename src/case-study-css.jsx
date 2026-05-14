// Case Study CSS — same skeleton as Article (purple hero, narrow body,
// share, 3-up related), with case-specific blocks: client meta strip,
// at-a-glance metrics, challenge/approach/outcome rhythm, pull-quote,
// testimonial card.

const CSS_CASE = `
.cs {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #0A0A0A;
  background: #FFFFFF;
  position: relative;
}

/* ═══ Scroll progress ═══ */
.cs__progress {
  position: fixed; top: 0; left: 0; right: 0;
  height: 2px; background: rgba(10,10,10,0.06);
  z-index: 60; pointer-events: none;
}
.cs__progress span {
  display: block; height: 100%;
  background: #FF7A29;
  transform-origin: left; transform: scaleX(0);
}

/* ═══════════════════════════════════════════════════════════
   PURPLE HERO BAND
   ═══════════════════════════════════════════════════════════ */
.cs__hero-wrap {
  padding: 104px 40px 0;
  background: #FFFFFF;
}
.cs__hero {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  background: #4A0FB8;
  border-radius: 20px;
  padding: 28px 48px 36px;
  color: #FFFFFF;
  overflow: hidden;
  isolation: isolate;
}
.cs__hero--has-bg { min-height: 460px; padding-bottom: 48px; }

/* Background image layer */
.cs__hero-bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
}
.cs__hero-bg img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
}
.cs__hero-bg-shade {
  position: absolute; inset: 0;
  background:
    linear-gradient(90deg, rgba(74,15,184,0.86) 0%, rgba(74,15,184,0.62) 45%, rgba(74,15,184,0.30) 100%),
    linear-gradient(180deg, rgba(13,9,89,0.35) 0%, rgba(13,9,89,0.55) 100%);
}

/* ── Per-case hero variant: dark-art ──
   Used when the source image is itself dark with a hero illustration to the
   right (e.g. ZIM "Dare to AI"). Skips the purple wash and uses a soft
   left-to-transparent dark gradient that protects the headline without
   muting the artwork. */
.cs__hero--dark-art .cs__hero-bg img { object-position: right center; }
.cs__hero--dark-art .cs__hero-bg-shade {
  background:
    linear-gradient(90deg, rgba(4,8,28,0.78) 0%, rgba(4,8,28,0.55) 36%, rgba(4,8,28,0.18) 64%, rgba(4,8,28,0) 100%),
    linear-gradient(180deg, rgba(4,8,28,0.18) 0%, rgba(4,8,28,0.40) 100%);
}

.cs__back {
  display: inline-flex; align-items: center; gap: 8px;
  color: rgba(255,255,255,0.85);
  font-size: 13px; font-weight: 600;
  text-decoration: none;
  padding: 8px 14px 8px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  transition: background 180ms, color 180ms;
  margin-bottom: 28px;
  white-space: nowrap;
}
.cs__back:hover { background: rgba(255,255,255,0.16); color: #FFFFFF; }

.cs__hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  align-items: end;
  min-height: 240px;
}
.cs__hero-text { padding-bottom: 8px; max-width: 720px; }

.cs__tag-row {
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  margin-bottom: 18px;
}
.cs__tag {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(255,255,255,0.14);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 999px;
  color: #FFFFFF;
  font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
}
.cs__tag--accent {
  background: #FF7A29;
  border-color: #FF7A29;
  color: #FFFFFF;
}

.cs__h1 {
  font-size: clamp(26px, 2.8vw, 40px);
  font-weight: 800; line-height: 1.15; letter-spacing: -0.02em;
  margin: 0 0 16px;
  color: #FFFFFF;
  max-width: 22ch;
  text-wrap: balance;
}
.cs__dek {
  font-size: 16px; line-height: 1.55; font-weight: 400;
  color: rgba(255,255,255,0.86);
  margin: 0 0 18px;
  max-width: 50ch;
}
.cs__meta {
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  font-size: 13px; color: rgba(255,255,255,0.8);
}
.cs__meta-dot { color: rgba(255,255,255,0.5); }

/* Hero: client logo + photo */
.cs__hero-art {
  width: 100%;
  display: flex; flex-direction: column; align-items: stretch; gap: 14px;
  align-self: stretch;
  justify-content: flex-end;
}
.cs__hero-cover {
  width: 100%;
  align-self: stretch;
  border-radius: 14px;
  overflow: hidden;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  aspect-ratio: 4 / 3;
  box-shadow: 0 24px 50px -18px rgba(0,0,0,0.35);
}
.cs__hero-cover img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
}
.cs__client-card {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 14px;
  padding: 18px 20px;
  display: flex; flex-direction: column; gap: 10px;
}
.cs__client-label {
  font-size: 10px; font-weight: 700; letter-spacing: 0.22em;
  color: rgba(255,255,255,0.6); text-transform: uppercase;
}
.cs__client-logo {
  height: 28px;
  display: flex; align-items: center;
}
.cs__client-logo img {
  height: 100%; width: auto;
  filter: brightness(0) invert(1);
  opacity: 0.95;
}
.cs__client-name {
  font-size: 14px; font-weight: 600; color: #FFFFFF;
}

/* ═══════════════════════════════════════════════════════════
   CLIENT META STRIP — Industry / Location / Team / Year
   ═══════════════════════════════════════════════════════════ */
.cs__strip-wrap {
  padding: 40px 40px 0;
  background: #FFFFFF;
}
.cs__cover-wrap {
  padding: 36px 40px 0;
  background: #FFFFFF;
}
.cs__cover {
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(13, 9, 89, 0.12);
}
.cs__cover img {
  display: block;
  width: 100%;
  height: auto;
}
@media (max-width: 960px) {
  .cs__cover-wrap { padding: 24px 16px 0; }
  .cs__cover { border-radius: 12px; }
}
.cs__strip {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 1px solid rgba(10,10,10,0.1);
  border-bottom: 1px solid rgba(10,10,10,0.1);
  padding: 22px 0;
}
.cs__strip-cell {
  padding: 0 24px;
  border-left: 1px solid rgba(10,10,10,0.08);
}
.cs__strip-cell:first-child { border-left: 0; padding-left: 0; }
.cs__strip-label {
  font-size: 10px; font-weight: 700; letter-spacing: 0.2em;
  color: rgba(10,10,10,0.5); text-transform: uppercase;
  margin-bottom: 6px;
}
.cs__strip-val {
  font-size: 15px; font-weight: 600;
  color: var(--title, #0D0959);
  line-height: 1.3;
}

/* ═══════════════════════════════════════════════════════════
   AT-A-GLANCE METRICS — purple gradient card with 3 stats
   ═══════════════════════════════════════════════════════════ */
.cs__glance-wrap {
  padding: 40px 40px 0;
  background: #FFFFFF;
}
.cs__glance {
  max-width: 1100px;
  margin: 0 auto;
  background: linear-gradient(135deg, #4A0FB8 0%, #6A2EE0 60%, #8B47F0 100%);
  border-radius: 20px;
  padding: 36px 40px;
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
}
.cs__glance::before {
  content: ""; position: absolute;
  top: -40%; right: -10%;
  width: 60%; height: 180%;
  background: radial-gradient(closest-side, rgba(255,122,41,0.32), rgba(255,122,41,0) 70%);
  pointer-events: none;
}
.cs__glance-label {
  position: relative;
  font-size: 11px; font-weight: 700; letter-spacing: 0.22em;
  color: rgba(255,255,255,0.7); text-transform: uppercase;
  margin-bottom: 18px;
}
.cs__glance-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.cs__glance-cell {
  padding-left: 22px;
  border-left: 2px solid rgba(255,255,255,0.2);
}
.cs__glance-cell:first-child { padding-left: 0; border-left: 0; }
.cs__glance-num {
  font-family: 'Urbanist', 'Poppins', sans-serif;
  font-size: clamp(36px, 4vw, 52px);
  font-weight: 800; letter-spacing: -0.03em;
  line-height: 1;
  color: #FFFFFF;
  margin-bottom: 10px;
}
.cs__glance-num small {
  font-size: 0.55em; font-weight: 700;
  color: rgba(255,255,255,0.85);
  margin-left: 4px;
}
.cs__glance-cap {
  font-size: 13px; line-height: 1.45;
  color: rgba(255,255,255,0.86);
}

/* ═══════════════════════════════════════════════════════════
   BODY — narrow column, editorial rhythm
   ═══════════════════════════════════════════════════════════ */
.cs__body-wrap {
  padding: 56px 40px 40px;
  background: #FFFFFF;
}
.cs__body {
  max-width: 720px;
  margin: 0 auto;
  color: #0A0A0A;
}

/* Section opener — small kicker + h2 */
.cs__sec-kicker {
  font-size: 11px; font-weight: 700; letter-spacing: 0.22em;
  color: #FF7A29; text-transform: uppercase;
  margin: 48px 0 8px;
}
.cs__sec-kicker:first-child { margin-top: 0; }

.cs__lede {
  font-size: 17px; line-height: 1.65;
  color: rgba(10,10,10,0.78);
  margin: 0 0 40px;
  font-weight: 400;
}

.cs__h2 {
  font-size: 24px;
  font-weight: 700; line-height: 1.25; letter-spacing: -0.01em;
  margin: 0 0 18px;
  color: var(--title, #0D0959);
  text-wrap: balance;
}
.cs__h3 {
  font-size: 17px;
  font-weight: 700; line-height: 1.35;
  margin: 28px 0 10px;
  color: var(--title, #0D0959);
}
.cs__p {
  font-size: 16px; line-height: 1.7;
  color: rgba(10,10,10,0.82);
  margin: 0 0 16px;
  font-weight: 400;
  text-wrap: pretty;
}
.cs__p:last-child { margin-bottom: 0; }

/* Bulleted list — used for "what we did" inside Approach */
.cs__list {
  list-style: none;
  padding: 0;
  margin: 16px 0 24px;
  display: flex; flex-direction: column; gap: 10px;
}
.cs__list li {
  position: relative;
  padding: 0 0 0 26px;
  font-size: 16px; line-height: 1.55;
  color: rgba(10,10,10,0.82);
}
.cs__list li::before {
  content: "";
  position: absolute;
  left: 0; top: 9px;
  width: 14px; height: 2px;
  background: #FF7A29;
}

/* Pull quote — orange left rule, large emphasised text */
.cs__pull {
  margin: 36px 0;
  padding: 4px 0 4px 22px;
  border-left: 3px solid #FF7A29;
}
.cs__pull-text {
  font-size: 20px; line-height: 1.4; font-weight: 600;
  letter-spacing: -0.01em; color: #0A0A0A; margin: 0;
  text-wrap: balance;
}

/* Inline image / figure */
.cs__figure {
  margin: 36px 0;
}
.cs__figure-img {
  width: 100%;
  border-radius: 14px;
  display: block;
  overflow: hidden;
  background: #FFFFFF;
  position: relative;
}
.cs__figure-img img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
}
.cs__figure--pair {
  margin: 28px 0;
}
.cs__figure--strip {
  margin: 28px 0 36px;
}
.cs__figure-pair-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
@media (max-width: 600px) {
  .cs__figure-pair-grid { grid-template-columns: 1fr; }
}
.cs__figure-placeholder {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  background:
    repeating-linear-gradient(135deg,
      rgba(74,15,184,0.06) 0 14px,
      rgba(74,15,184,0.10) 14px 28px),
    linear-gradient(180deg, #F7F4FB 0%, #EFE9F8 100%);
  border: 1px dashed rgba(74,15,184,0.28);
  border-radius: 14px;
}
.cs__figure-placeholder-label {
  font-family: 'Urbanist', 'Poppins', sans-serif;
  font-size: 12px; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: rgba(74,15,184,0.72);
  padding: 8px 14px;
  background: rgba(255,255,255,0.7);
  border-radius: 999px;
  backdrop-filter: blur(4px);
}
.cs__figure-cap {
  margin-top: 10px;
  font-size: 12px; line-height: 1.5;
  color: rgba(10,10,10,0.55);
  font-style: italic;
}

/* ═══════════════════════════════════════════════════════════
   GALLERY — inline image carousel for gallery body blocks.
   Stage with prev/next chevrons, caption + counter, thumb strip.
   ═══════════════════════════════════════════════════════════ */
.cs__gallery {
  margin: 36px 0 28px;
  padding: 0;
}
.cs__gallery:focus { outline: none; }
.cs__gallery:focus-visible .cs__gallery-frame {
  box-shadow: 0 0 0 3px rgba(74,15,184,0.35);
}
.cs__gallery-stage {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  align-items: stretch;
}
.cs__gallery-frame {
  position: relative;
  aspect-ratio: 16/9;
  background: #F2EEF8;
  border: 1px solid rgba(74,15,184,0.10);
  border-radius: 14px;
  overflow: hidden;
}
.cs__gallery-frame img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
}
.cs__gallery-placeholder {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  background:
    repeating-linear-gradient(135deg, rgba(74,15,184,0.05) 0 12px, rgba(74,15,184,0.02) 12px 24px);
}
.cs__gallery-nav {
  position: absolute;
  top: 50%; transform: translateY(-50%);
  width: 40px; height: 40px;
  display: inline-flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.95);
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 999px;
  color: #2A1A4E;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(20,10,60,0.12);
  transition: background 160ms, transform 160ms;
  z-index: 2;
}
.cs__gallery-nav:hover { background: #FFFFFF; transform: translateY(-50%) scale(1.04); }
.cs__gallery-nav:active { transform: translateY(-50%) scale(0.96); }
.cs__gallery-nav--prev { left: 12px; }
.cs__gallery-nav--next { right: 12px; }

.cs__gallery-foot {
  display: flex; align-items: baseline; justify-content: space-between;
  gap: 16px;
  margin: 12px 2px 0;
}
.cs__gallery-cap {
  font-size: 13px; line-height: 1.5;
  color: #6E6884;
  font-style: italic;
  flex: 1;
}
.cs__gallery-counter {
  font-family: 'Urbanist', 'Poppins', sans-serif;
  font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
  color: #4A0FB8;
  text-transform: uppercase;
  white-space: nowrap;
}

.cs__gallery-thumbs {
  display: flex; gap: 8px;
  margin-top: 12px;
  overflow-x: auto;
  padding-bottom: 4px;
  scrollbar-width: thin;
}
.cs__gallery-thumb {
  flex: 0 0 auto;
  width: 88px; height: 56px;
  display: inline-flex; align-items: center; justify-content: center;
  background: #F2EEF8;
  border: 2px solid transparent;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  padding: 0;
  transition: border-color 160ms, transform 160ms;
}
.cs__gallery-thumb img {
  width: 100%; height: 100%; object-fit: cover; display: block;
}
.cs__gallery-thumb-num {
  font-family: 'Urbanist', 'Poppins', sans-serif;
  font-size: 13px; font-weight: 700;
  color: #6E6884;
}
.cs__gallery-thumb:hover { border-color: rgba(74,15,184,0.30); }
.cs__gallery-thumb.is-active {
  border-color: #4A0FB8;
  transform: translateY(-1px);
}

@media (max-width: 720px) {
  .cs__gallery-thumb { width: 64px; height: 40px; }
  .cs__gallery-nav { width: 34px; height: 34px; }
  .cs__gallery-foot { flex-direction: column; align-items: flex-start; gap: 4px; }
}

/* ═══════════════════════════════════════════════════════════
   OUTCOME GRID — 2x2 result cards inside the body column
   ═══════════════════════════════════════════════════════════ */
.cs__outcomes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 24px 0 12px;
}
.cs__outcome {
  background: #F7F4FB;
  border: 1px solid rgba(74,15,184,0.1);
  border-radius: 14px;
  padding: 22px 22px 24px;
}
.cs__outcome-num {
  font-family: 'Urbanist', 'Poppins', sans-serif;
  font-size: 32px; font-weight: 800; letter-spacing: -0.02em;
  color: #4A0FB8;
  line-height: 1;
  margin-bottom: 10px;
}
.cs__outcome-num small {
  font-size: 0.55em; font-weight: 700; color: #4A0FB8;
}
.cs__outcome-cap {
  font-size: 13px; line-height: 1.5;
  color: rgba(10,10,10,0.72);
}

/* ═══════════════════════════════════════════════════════════
   TESTIMONIAL CARD
   ═══════════════════════════════════════════════════════════ */
.cs__quote-wrap {
  padding: 16px 40px 0;
  background: #FFFFFF;
}
.cs__quote {
  max-width: 720px;
  margin: 24px auto 0;
  background: #0D0959;
  color: #FFFFFF;
  border-radius: 18px;
  padding: 32px 36px 30px;
  position: relative;
}
.cs__quote-mark {
  font-family: 'Urbanist', serif;
  font-size: 64px; line-height: 1; font-weight: 800;
  color: #FF7A29;
  position: absolute;
  top: 14px; left: 24px;
}
.cs__quote-text {
  font-size: 19px; line-height: 1.5; font-weight: 500;
  letter-spacing: -0.005em;
  margin: 18px 0 22px;
  padding-left: 38px;
  text-wrap: pretty;
}
.cs__quote-by {
  display: flex; align-items: center; gap: 14px;
  padding-left: 38px;
}
.cs__quote-avatar {
  width: 44px; height: 44px; border-radius: 50%;
  background: #503594;
  display: inline-flex; align-items: center; justify-content: center;
  color: #FFFFFF; font-size: 14px; font-weight: 700; letter-spacing: 0.04em;
  overflow: hidden;
  flex-shrink: 0;
}
.cs__quote-avatar img {
  width: 100%; height: 100%; object-fit: cover;
}
.cs__quote-meta { line-height: 1.35; }
.cs__quote-name {
  font-size: 14px; font-weight: 700; color: #FFFFFF;
}
.cs__quote-role {
  font-size: 12px; color: rgba(255,255,255,0.7);
}

/* ═══════════════════════════════════════════════════════════
   SHARE
   ═══════════════════════════════════════════════════════════ */
.cs__share-wrap {
  padding: 24px 40px 56px;
  background: #FFFFFF;
}
.cs__share {
  max-width: 720px;
  margin: 0 auto;
  display: flex; align-items: center; gap: 12px;
  padding-top: 24px;
  border-top: 1px solid rgba(10,10,10,0.1);
}
.cs__share-label {
  font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
  color: rgba(10,10,10,0.55); text-transform: uppercase;
  margin-right: 4px;
}
.cs__share-btn {
  width: 36px; height: 36px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  color: #0A0A0A;
  border: 1px solid rgba(10,10,10,0.12);
  transition: background 180ms, color 180ms, border-color 180ms;
}
.cs__share-btn:hover {
  background: #0A0A0A; color: #FFFFFF; border-color: #0A0A0A;
}

/* ═══════════════════════════════════════════════════════════
   CTA STRIP — "Want results like this?" → /contact
   ═══════════════════════════════════════════════════════════ */
.cs__cta-wrap {
  padding: 16px 40px 64px;
  background: #FFFFFF;
}
.cs__cta {
  max-width: 1100px;
  margin: 0 auto;
  background: #0D0959;
  border-radius: 20px;
  padding: 36px 40px;
  color: #FFFFFF;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  align-items: center;
}
.cs__cta-h {
  font-size: clamp(22px, 2.4vw, 30px);
  font-weight: 800; line-height: 1.2; letter-spacing: -0.02em;
  margin: 0 0 8px;
  color: #FFFFFF;
  text-wrap: balance;
}
.cs__cta-sub {
  font-size: 15px; line-height: 1.5; font-weight: 400;
  color: rgba(255,255,255,0.78);
  margin: 0;
  max-width: 56ch;
}
.cs__cta-btn {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 22px;
  background: #FF7A29;
  color: #FFFFFF;
  border-radius: 999px;
  font-size: 14px; font-weight: 700; letter-spacing: -0.005em;
  transition: background 180ms, transform 180ms;
  white-space: nowrap;
}
.cs__cta-btn:hover { background: #FF8E47; transform: translateY(-1px); }

/* ═══════════════════════════════════════════════════════════
   RELATED — 3-up grid of other case studies / articles
   ═══════════════════════════════════════════════════════════ */
.cs__related {
  padding: 16px 40px 80px;
  background: #FFFFFF;
}
.cs__related-head {
  max-width: 1100px; margin: 0 auto 20px;
}
.cs__sec-label {
  font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
  color: rgba(10,10,10,0.55); text-transform: uppercase;
}
.cs__related-grid {
  max-width: 1100px; margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.cs__related-card {
  display: flex; flex-direction: column;
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid rgba(10,10,10,0.1);
  overflow: hidden;
  text-decoration: none;
  transition: transform 220ms, box-shadow 220ms, border-color 220ms;
}
.cs__related-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(10,10,10,0.08);
  border-color: rgba(10,10,10,0.16);
}
.cs__related-cover {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
  background: #EEE;
}
.cs__related-cover img {
  width: 100%; height: 100%; object-fit: cover;
}
.cs__related-cat {
  position: absolute; top: 12px; left: 12px;
  padding: 5px 10px;
  background: rgba(10,10,10,0.7);
  color: #FFFFFF;
  border-radius: 999px;
  font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
}
.cs__related-body {
  padding: 18px 20px 20px;
}
.cs__related-title {
  font-size: 15px; line-height: 1.35; font-weight: 700;
  letter-spacing: -0.005em; margin: 0 0 12px;
  color: #0A0A0A;
}
.cs__related-meta {
  display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
  font-size: 12px; color: rgba(10,10,10,0.55);
}

/* ═══════════════════════════════════════════════════════════
   Responsive
   ═══════════════════════════════════════════════════════════ */
@media (max-width: 960px) {
  .cs__hero-wrap { padding: 88px 16px 0; }
  .cs__hero { padding: 22px 24px 26px; border-radius: 14px; }
  .cs__hero-grid { grid-template-columns: 1fr; gap: 22px; min-height: 0; }
  .cs__h1 { font-size: 24px; }
  .cs__dek { font-size: 15px; }

  .cs__strip-wrap { padding: 28px 20px 0; }
  .cs__strip { grid-template-columns: 1fr 1fr; gap: 16px 0; padding: 18px 0; }
  .cs__strip-cell { padding: 0 14px; }
  .cs__strip-cell:nth-child(3) { border-left: 0; padding-left: 0; }

  .cs__glance-wrap { padding: 28px 20px 0; }
  .cs__glance { padding: 26px 24px; border-radius: 14px; }
  .cs__glance-grid { grid-template-columns: 1fr; gap: 22px; }
  .cs__glance-cell { padding-left: 16px; border-left: 2px solid rgba(255,255,255,0.18); }
  .cs__glance-cell:first-child { padding-left: 16px; border-left: 2px solid rgba(255,255,255,0.18); }

  .cs__body-wrap { padding: 36px 20px 24px; }
  .cs__h2 { font-size: 20px; }

  .cs__outcomes { grid-template-columns: 1fr; gap: 10px; }

  .cs__quote-wrap { padding: 8px 20px 0; }
  .cs__quote { padding: 28px 24px 24px; border-radius: 14px; }
  .cs__quote-text { padding-left: 32px; font-size: 17px; }
  .cs__quote-mark { font-size: 52px; left: 16px; }
  .cs__quote-by { padding-left: 32px; }

  .cs__share-wrap { padding: 16px 20px 40px; }
  .cs__cta-wrap { padding: 0 20px 48px; }
  .cs__cta { grid-template-columns: 1fr; gap: 18px; padding: 26px 24px; border-radius: 14px; }

  .cs__related { padding: 8px 20px 64px; }
  .cs__related-grid { grid-template-columns: 1fr; gap: 16px; }
}
`;

window.CSS_CASE = CSS_CASE;
