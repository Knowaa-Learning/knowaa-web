// Article CSS — matches the reference: purple hero band, narrow body column,
// mid-article magenta stat card, share row, 3-up related grid.

const CSS_ART = `
.art {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #0A0A0A;
  background: #FFFFFF;
  position: relative;
}

/* ═══ Scroll progress ═══ */
.art__progress {
  position: fixed; top: 0; left: 0; right: 0;
  height: 2px; background: rgba(10,10,10,0.06);
  z-index: 60; pointer-events: none;
}
.art__progress span {
  display: block; height: 100%;
  background: #ED1F80;
  transform-origin: left; transform: scaleX(0);
}

/* ═══════════════════════════════════════════════════════════
   PURPLE HERO BAND — compact, rounded, with character art
   ═══════════════════════════════════════════════════════════ */
.art__hero-wrap {
  padding: 104px 40px 0;
  background: #FFFFFF;
}
.art__hero {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  background: #4A0FB8;
  border-radius: 20px;
  padding: 28px 48px 36px;
  color: #FFFFFF;
  overflow: hidden;
}

.art__back {
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
.art__back:hover { background: rgba(255,255,255,0.16); color: #FFFFFF; }

.art__hero-grid {
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 40px;
  align-items: end;
  min-height: 240px;
}
.art__hero-text { padding-bottom: 8px; }

.art__tag {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(255,255,255,0.14);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 999px;
  color: #FFFFFF;
  font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  margin-bottom: 18px;
}
.art__h1 {
  font-size: clamp(24px, 2.6vw, 36px);
  font-weight: 800; line-height: 1.18; letter-spacing: -0.02em;
  margin: 0 0 16px;
  color: #FFFFFF;
  max-width: 28ch;
  text-wrap: balance;
}
.art__meta {
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  font-size: 13px; color: rgba(255,255,255,0.8);
}
.art__meta-dot { color: rgba(255,255,255,0.5); }

.art__hero-art {
  width: 100%; display: flex; align-items: flex-end; justify-content: center;
}
.art__char {
  width: 100%;
  max-width: 240px;
  height: auto;
  display: block;
}

/* ═══════════════════════════════════════════════════════════
   BODY — narrow column, editorial rhythm
   ═══════════════════════════════════════════════════════════ */
.art__body-wrap {
  padding: 56px 40px 40px;
  background: #FFFFFF;
}
.art__body {
  max-width: 720px;
  margin: 0 auto;
  color: #0A0A0A;
}

.art__lede {
  font-size: 17px; line-height: 1.65;
  color: rgba(10,10,10,0.78);
  margin: 0 0 40px;
  font-weight: 400;
}

.art__h2 {
  font-size: 22px;
  font-weight: 700; line-height: 1.3; letter-spacing: -0.01em;
  margin: 40px 0 16px;
  color: var(--title, #0B1638);
  text-wrap: balance;
}
.art__h3 {
  font-size: 17px;
  font-weight: 700; line-height: 1.35; letter-spacing: -0.005em;
  margin: 28px 0 10px;
  color: var(--title, #0B1638);
}
.art__p {
  font-size: 16px; line-height: 1.7;
  color: rgba(10,10,10,0.82);
  margin: 0 0 16px;
  font-weight: 400;
  text-wrap: pretty;
}
.art__p:last-child { margin-bottom: 0; }

.art__pull {
  margin: 40px 0;
  padding: 4px 0 4px 20px;
  border-left: 2px solid #4A0FB8;
}
.art__pull-text {
  font-size: 19px; line-height: 1.4; font-weight: 600;
  letter-spacing: -0.01em; color: #0A0A0A; margin: 0;
  text-wrap: balance;
}

/* ═══════════════════════════════════════════════════════════
   MID-ARTICLE STAT CARD — magenta infographic block
   ═══════════════════════════════════════════════════════════ */
.art__stat {
  margin: 40px 0;
  background: linear-gradient(180deg, #F24B9A 0%, #ED1F80 40%, #B81365 100%);
  color: #FFFFFF;
  border-radius: 16px;
  padding: 28px 32px 32px;
  position: relative;
  overflow: hidden;
}
.art__stat-top {
  display: flex; justify-content: flex-end;
  margin-bottom: 12px;
}
.art__stat-brand {
  font-size: 10px; font-weight: 800; letter-spacing: 0.22em;
  color: rgba(255,255,255,0.72);
}
.art__stat-head { margin-bottom: 24px; }
.art__stat-kicker {
  font-size: 11px; font-weight: 700; letter-spacing: 0.22em;
  color: rgba(255,255,255,0.82);
}
.art__stat-title {
  font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
  color: #FFFFFF;
  margin-top: 2px;
  text-transform: uppercase;
}
.art__stat-sub {
  font-size: 15px; font-weight: 600;
  color: #FFFFFF;
  margin-top: 14px;
  line-height: 1.45;
}
.art__stat-hi {
  font-size: 22px; font-weight: 900; letter-spacing: -0.02em;
}

.art__stat-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  padding-top: 16px;
  border-top: 1px solid rgba(255,255,255,0.2);
}
.art__stat-num {}
.art__stat-big {
  font-size: 34px; font-weight: 900; letter-spacing: -0.03em;
  line-height: 1; color: #FFFFFF;
  display: inline-flex; align-items: baseline; gap: 4px;
  margin-bottom: 8px;
  white-space: nowrap;
}
.art__stat-min {
  font-size: 14px; font-weight: 700; letter-spacing: 0;
  color: rgba(255,255,255,0.75);
}
.art__stat-cap {
  font-size: 11px; line-height: 1.4;
  color: rgba(255,255,255,0.85);
}

.art__stat-row--split {
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  margin-top: 20px;
  padding-top: 20px;
}
.art__stat-col {}
.art__stat-col--right { padding-left: 28px; border-left: 1px solid rgba(255,255,255,0.2); }
.art__stat-col-title {
  font-size: 11px; font-weight: 800; letter-spacing: 0.18em;
  color: #FFFFFF; margin-bottom: 12px;
}
.art__stat-col-big {
  font-size: 40px; font-weight: 900; letter-spacing: -0.03em;
  line-height: 1; color: #FFFFFF; margin-bottom: 6px;
}
.art__stat-col-big--sm { font-size: 28px; margin-top: 16px; }
.art__stat-col-min {
  font-size: 16px; font-weight: 700; color: rgba(255,255,255,0.75);
}
.art__stat-col-cap {
  font-size: 11px; line-height: 1.4;
  color: rgba(255,255,255,0.85);
  margin-bottom: 6px;
}

/* ═══════════════════════════════════════════════════════════
   SHARE
   ═══════════════════════════════════════════════════════════ */
.art__share-wrap {
  padding: 8px 40px 56px;
  background: #FFFFFF;
}
.art__share {
  max-width: 720px;
  margin: 0 auto;
  display: flex; align-items: center; gap: 12px;
  padding-top: 24px;
  border-top: 1px solid rgba(10,10,10,0.1);
}
.art__share-label {
  font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
  color: rgba(10,10,10,0.55); text-transform: uppercase;
  margin-right: 4px;
}
.art__share-btn {
  width: 36px; height: 36px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  color: #0A0A0A;
  border: 1px solid rgba(10,10,10,0.12);
  transition: background 180ms, color 180ms, border-color 180ms;
}
.art__share-btn:hover {
  background: #0A0A0A; color: #FFFFFF; border-color: #0A0A0A;
}

/* ═══════════════════════════════════════════════════════════
   RELATED
   ═══════════════════════════════════════════════════════════ */
.art__related {
  padding: 40px 40px 80px;
  background: #FFFFFF;
}
.art__related-head {
  max-width: 1100px; margin: 0 auto 20px;
}
.art__sec-label {
  font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
  color: rgba(10,10,10,0.55); text-transform: uppercase;
}
.art__related-grid {
  max-width: 1100px; margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.art__related-card {
  display: flex; flex-direction: column;
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid rgba(10,10,10,0.1);
  overflow: hidden;
  text-decoration: none;
  transition: transform 220ms, box-shadow 220ms, border-color 220ms;
}
.art__related-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(10,10,10,0.08);
  border-color: rgba(10,10,10,0.16);
}
.art__related-cover {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
  background: #EEE;
}
.art__related-cover img {
  width: 100%; height: 100%; object-fit: cover;
}
.art__related-cat {
  position: absolute; top: 12px; left: 12px;
  padding: 5px 10px;
  background: rgba(10,10,10,0.7);
  color: #FFFFFF;
  border-radius: 999px;
  font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
}
.art__related-body {
  padding: 18px 20px 20px;
}
.art__related-title {
  font-size: 15px; line-height: 1.35; font-weight: 700;
  letter-spacing: -0.005em; margin: 0 0 12px;
  color: #0A0A0A;
}
.art__related-meta {
  display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
  font-size: 12px; color: rgba(10,10,10,0.55);
}

/* ═══════════════════════════════════════════════════════════
   Responsive
   ═══════════════════════════════════════════════════════════ */
@media (max-width: 960px) {
  .art__hero-wrap { padding: 88px 16px 0; }
  .art__hero { padding: 20px 24px 24px; border-radius: 14px; }
  .art__hero-grid { grid-template-columns: 1fr; gap: 24px; min-height: 0; }
  .art__hero-art { justify-content: center; }
  .art__char { max-width: 180px; }
  .art__h1 { font-size: 22px; }

  .art__body-wrap { padding: 40px 20px 24px; }
  .art__share-wrap { padding: 0 20px 40px; }
  .art__related { padding: 32px 20px 64px; }
  .art__related-grid { grid-template-columns: 1fr; gap: 16px; }

  .art__stat { padding: 22px 20px; border-radius: 12px; margin: 28px 0; }
  .art__stat-row { grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .art__stat-row--split { grid-template-columns: 1fr; }
  .art__stat-col--right { padding-left: 0; padding-top: 18px; margin-top: 18px; border-left: 0; border-top: 1px solid rgba(255,255,255,0.2); }
  .art__stat-big { font-size: 28px; }
  .art__stat-col-big { font-size: 32px; }
}

@media (max-width: 500px) {
  .art__stat-row { grid-template-columns: 1fr; }
}
`;

window.CSS_ART = CSS_ART;
