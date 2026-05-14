// Article CSS — clean, narrow, editorial. Matches the case-study aesthetic but
// stripped to article essentials. White surface, navy ink, Poppins, subtle
// orange accents, narrow reading column.

const CSS_ARTICLE = `
.art {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #0D0959;
  background: #FFFFFF;
  position: relative;
}

/* Banner — when used inside an article, scale the title down and cap its width
   so it doesn't overlap the illustration on the right side of the cover image. */
.art__banner {
  position: relative;
  margin-top: 72px;
  padding: 0 clamp(24px, 4vw, 64px);
  aspect-ratio: 2880 / 720;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #0D0959;
  display: flex;
  align-items: flex-start;
  padding-top: clamp(36px, 7vw, 96px);
  color: #FFFFFF;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
}
.art__banner--center {
  align-items: center;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}
.art__banner--center .art__banner-inner {
  padding-left: clamp(80px, 18vw, 360px);
}
.art__banner--flush-left .art__banner-inner {
  margin-left: 0;
  padding-left: clamp(8px, 1.5vw, 24px);
}
.art__banner-inner {
  position: relative;
  max-width: none;
  width: 100%;
  margin: 0;
  margin-left: calc(-1 * var(--page-gutter, 0px) - clamp(20px, 4vw, 60px));
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.art__banner-title {
  font-size: clamp(26px, 3.2vw, 44px);
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.1;
  max-width: 60%;
  margin: 0;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  text-wrap: balance;
}
.art__banner-byline {
  font-size: clamp(13px, 1vw, 15px);
  font-weight: 500;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.92);
  max-width: 60%;
  margin: 0;
}
@media (max-width: 768px) {
  .art__banner { margin-top: 64px; padding: 0 24px; aspect-ratio: 4 / 3; }
  .art__banner-inner { padding-left: 12px; }
  .art__banner-title { font-size: clamp(22px, 5.5vw, 32px); max-width: 75%; }
  .art__banner-byline { font-size: 13px; max-width: 75%; }
}

/* Scroll-progress bar at the very top of the viewport */
.art__progress {
  position: fixed; top: 0; left: 0;
  width: 100%; height: 3px;
  background: rgba(13, 9, 89, 0.04);
  z-index: 50;
  pointer-events: none;
}
.art__progress span {
  display: block; height: 100%;
  background: linear-gradient(90deg, #4A0FB8 0%, #FF2D87 100%);
  transform-origin: 0 50%;
  transform: scaleX(0);
  transition: transform 100ms linear;
}

/* ═══════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════ */

.art__hero {
  max-width: 980px;
  margin: 0 auto;
  padding: clamp(56px, 6vw, 96px) clamp(24px, 4vw, 56px) clamp(40px, 4vw, 64px);
}

.art__back {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
  font-weight: 600;
  color: rgba(13, 9, 89, 0.55);
  padding: 8px 14px;
  border: 1px solid rgba(13, 9, 89, 0.14);
  border-radius: 999px;
  margin-bottom: 32px;
  transition: color 160ms, border-color 160ms, background 160ms;
}
.art__back:hover {
  color: #4A0FB8;
  border-color: rgba(74, 15, 184, 0.4);
  background: rgba(74, 15, 184, 0.04);
}

.art__tag {
  display: inline-block;
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
  font-weight: 700;
  color: #FF2D87;
  margin-bottom: 24px;
}

.art__title {
  font-size: clamp(36px, 5.4vw, 64px);
  font-weight: 900;
  letter-spacing: -0.025em;
  line-height: 1.05;
  margin: 0 0 28px;
  text-wrap: balance;
  max-width: 17ch;
}

.art__byline {
  display: flex; flex-wrap: wrap; align-items: center;
  gap: 8px 14px;
  font-size: 14px;
  color: rgba(13, 9, 89, 0.65);
}
.art__byline strong { color: #0D0959; font-weight: 700; }
.art__byline-sep {
  width: 3px; height: 3px; border-radius: 50%;
  background: rgba(13, 9, 89, 0.3);
}

.art__cover {
  margin: clamp(40px, 5vw, 64px) auto 0;
  max-width: 1100px;
  padding: 0 clamp(0px, 2vw, 56px);
}
.art__cover img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 14px;
  display: block;
  background: #F4F2FA;
}

/* ═══════════════════════════════════════════════════════════
   BODY
   ═══════════════════════════════════════════════════════════ */

.art__body-wrap {
  padding: clamp(32px, 4vw, 64px) clamp(24px, 4vw, 56px) clamp(64px, 6vw, 112px);
}
.art__body {
  max-width: 720px;
  margin: 0 auto;
}

.art__lede {
  font-size: clamp(20px, 1.8vw, 26px);
  line-height: 1.45;
  letter-spacing: -0.012em;
  font-weight: 500;
  color: #0D0959;
  margin: 0 0 36px;
  text-wrap: pretty;
}

.art__p {
  font-size: 17.5px;
  line-height: 1.7;
  color: rgba(13, 9, 89, 0.84);
  margin: 0 0 20px;
}
.art__p:last-child { margin-bottom: 0; }
.art__p a {
  color: #4A0FB8;
  border-bottom: 1px solid rgba(74, 15, 184, 0.3);
}
.art__p strong { color: #0D0959; font-weight: 700; }

.art__h2 {
  font-size: clamp(24px, 2.6vw, 32px);
  font-weight: 800;
  letter-spacing: -0.018em;
  line-height: 1.2;
  margin: 56px 0 16px;
  color: #0D0959;
}
.art__h2:first-child { margin-top: 0; }

.art__h3 {
  font-size: 19px;
  font-weight: 700;
  line-height: 1.3;
  margin: 36px 0 12px;
  color: #0D0959;
}

.art__ul {
  margin: 0 0 24px;
  padding-left: 22px;
  color: rgba(13, 9, 89, 0.84);
  font-size: 17px;
  line-height: 1.7;
}
.art__ul li { margin-bottom: 8px; }
.art__ul li::marker { color: #FF2D87; }

.art__pull {
  margin: 40px 0;
  padding: 0 0 0 24px;
  border-left: 3px solid #FF2D87;
  font-size: clamp(20px, 2vw, 26px);
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: #0D0959;
  text-wrap: balance;
}

.art__divider {
  height: 1px;
  background: rgba(13, 9, 89, 0.1);
  margin: 48px 0;
  border: 0;
}

/* Inline figure — image breaks out slightly past the 720px reading column
   so the full-width infographic gets room to breathe. */
.art__figure {
  margin: 48px auto;
  max-width: 100%;
  /* Break out of the 720px column to fill the available padded width */
  width: min(960px, 100%);
  margin-left: 50%;
  transform: translateX(-50%);
  position: relative;
}
.art__figure img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 14px;
  background: #F4F2FA;
}
.art__figure figcaption {
  margin-top: 12px;
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  letter-spacing: 0.08em;
  color: rgba(13, 9, 89, 0.5);
  text-transform: uppercase;
  text-align: center;
}
@media (max-width: 600px) {
  .art__figure { width: 100%; margin-left: 0; transform: none; }
}

/* ═══════════════════════════════════════════════════════════
   RELATED
   ═══════════════════════════════════════════════════════════ */

.art__related {
  background: #F4F2FA;
  padding: clamp(56px, 6vw, 96px) clamp(24px, 4vw, 56px);
}
.art__related-inner {
  max-width: 1100px;
  margin: 0 auto;
}
.art__related-eyebrow {
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
  font-weight: 700;
  color: rgba(13, 9, 89, 0.55);
  margin: 0 0 16px;
}
.art__related-h {
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 900;
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin: 0 0 40px;
  color: #0D0959;
}
.art__related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 800px) {
  .art__related-grid { grid-template-columns: 1fr; }
}
.art__related-card {
  background: #FFFFFF;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(13, 9, 89, 0.08);
  display: flex; flex-direction: column;
  transition: transform 220ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 220ms;
}
.art__related-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -20px rgba(13, 9, 89, 0.14);
}
.art__related-cover {
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #F4F2FA 0%, #E8E4FB 100%);
  position: relative;
  overflow: hidden;
}
.art__related-cover img {
  width: 100%; height: 100%; object-fit: cover; display: block;
}
.art__related-body {
  padding: 20px 22px 22px;
  flex: 1;
  display: flex; flex-direction: column; gap: 10px;
}
.art__related-cat {
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
  font-weight: 700;
  color: rgba(13, 9, 89, 0.55);
}
.art__related-title {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.012em;
  line-height: 1.3;
  color: #0D0959;
  margin: 0;
  text-wrap: balance;
}
.art__related-meta {
  margin-top: auto;
  font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px; letter-spacing: 0.06em;
  color: rgba(13, 9, 89, 0.55);
}

/* ═══════════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════════ */

@media (max-width: 600px) {
  .art__hero { padding: 40px 20px 32px; }
  .art__title { max-width: none; }
  .art__lede { font-size: 18px; }
  .art__p { font-size: 16.5px; }
}

/* ═══════════════════════════════════════════════════════════
   ARTICLE CTA — compact orange band, only on the article page.
   Other pages keep the full CTAOrange treatment.
   ═══════════════════════════════════════════════════════════ */

.art__cta {
  margin-top: 64px;
  padding: clamp(22px, 2.4vw, 32px) clamp(24px, 4vw, 56px);
  min-height: clamp(140px, 16vw, 200px);
  background:
    radial-gradient(ellipse at top right,    rgba(180, 140, 255, 0.55) 0%, rgba(180, 140, 255, 0) 55%),
    radial-gradient(ellipse at bottom left,  rgba(40,  10,  120, 0.45) 0%, rgba(40,  10,  120, 0) 60%),
    linear-gradient(135deg, #5B2BE1 0%, #4A0FB8 100%);
  color: #FFFFFF;
  position: relative;
  overflow: visible;
}
.art__cta-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: inherit;
  gap: clamp(20px, 4vw, 56px);
}
.art__cta-back {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.005em;
  background: #FFFFFF;
  color: #4A0FB8;
  padding: 11px 20px;
  border-radius: 999px;
  text-decoration: none;
  transition: transform 160ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 160ms, background 160ms, color 160ms;
}
.art__cta-back svg {
  transition: transform 160ms cubic-bezier(0.4, 0, 0.2, 1);
}
.art__cta-back:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 22px -8px rgba(0, 0, 0, 0.32);
}
.art__cta-back:hover svg {
  transform: translateX(-3px);
}
.art__cta-copy {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
.art__cta-heading {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(22px, 2.4vw, 32px);
  font-weight: 800;
  letter-spacing: -0.018em;
  line-height: 1.15;
  text-wrap: balance;
  color: #FFFFFF;
}
.art__cta-btn {
  display: inline-block;
  background: #FFFFFF;
  color: #4A0FB8;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.005em;
  padding: 12px 22px;
  border-radius: 999px;
  transition: transform 160ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 160ms;
}
.art__cta-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 22px -8px rgba(0, 0, 0, 0.32);
}
/* Right column for the static frame — sits in the right ~28% strip with the
   image horizontally centered inside it. Negative top margin pulls the image
   above the band's top edge by ~20% of its height. */
.art__cta-img-cell {
  width: clamp(190px, 26vw, 320px);
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.art__cta-img {
  width: 100%;
  max-width: 220px;
  height: auto;
  display: block;
  margin-top: clamp(-56px, -4vw, -36px);
  margin-bottom: 0;
}
@media (max-width: 720px) {
  .art__cta { padding: 24px 22px; margin-top: 48px; }
  .art__cta-inner { gap: 16px; }
  .art__cta-img-cell { width: 130px; }
  .art__cta-img { max-width: 130px; margin-top: -28px; }
}
`;

window.CSS_ARTICLE = CSS_ARTICLE;
