// Knowaa, Our Approach section
// Scroll-linked reveal + continuous floating purple boxes.
// Plain-JSX adaptation of the provided Next/TSX spec. CSS inlined via <style>.

const { useEffect: useEffectApproach, useRef: useRefApproach } = React;

// Edit this array to drop in real images later.
// Keep three entries and the boxOnLeft pattern (true, false, true).
// `body` is an array of segments, strings render plain, { hl: "…" }
// objects become sequentially-animated highlight words (indigo flash →
// bold navy) when the row scrolls into view.
const APPROACH_ROWS = [
  {
    title: 'Designed backward from results.',
    icon: 'award',
    body: [
      'Working collaboratively with your team, we align ',
      { hl: 'business goals' },
      ', identify the behaviors that drive them, and design ',
      { hl: 'learning strategies' },
      ' grounded in proven learning science.',
    ],
    boxOnLeft: true,
    imgSrc: 'assets/approach/designed-backward.png?v=3',
    imgAlt: 'Designed backward from results',
  },
  {
    title: 'Built to be unskippable.',
    icon: 'brush',
    body: [
      'We break through to the ',
      { hl: 'modern employee' },
      ' with a powerful blend of creativity, storytelling, sharp copywriting, humor, premium production, and AI-driven innovation.',
    ],
    boxOnLeft: false,
    imgSrc: 'assets/approach/built-unskippable.png?v=3',
    imgAlt: 'Built to be unskippable',
  },
  {
    title: 'Measured by impact.',
    icon: 'target',
    body: [
      'To complete the picture, we track engagement, adoption, behavior change, and business outcomes so learning is measured by ',
      { hl: 'performance' },
      ', not completion.',
    ],
    boxOnLeft: true,
    imgSrc: 'assets/approach/measured-impact.png?v=3',
    imgAlt: 'Measured by impact',
  },
];

function Approach() {
  const headerRef = useRefApproach(null);
  const rowRefs = useRefApproach([]);

  // Mount Lottie icons. Each [data-lottie="<name>"] element gets a looping
  // animation loaded from assets/lottie/<name>.json with a per-icon pause
  // between plays so the three icons don't tick in sync. Cleaned up on unmount.
  useEffectApproach(() => {
    if (!window.lottie) return undefined;
    const PAUSE_MS = { award: 2500, brush: 4200, target: 3400 };
    const rowEls = rowRefs.current.filter(Boolean);
    const holders = [];
    const timers = [];
    rowEls.forEach((row) => {
      const el = row.querySelector('[data-lottie]');
      if (!el) return;
      const name = el.getAttribute('data-lottie');
      const pause = PAUSE_MS[name] || 3000;
      try {
        const anim = window.lottie.loadAnimation({
          container: el,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          path: `assets/lottie/${name}.json`,
        });
        const onComplete = () => {
          const t = setTimeout(() => {
            try { anim.goToAndPlay(0, true); } catch (e) {}
          }, pause);
          timers.push(t);
        };
        anim.addEventListener('complete', onComplete);
        holders.push(anim);
      } catch (e) { /* noop */ }
    });
    return () => {
      timers.forEach((t) => clearTimeout(t));
      holders.forEach((a) => { try { a.destroy(); } catch(e){} });
    };
  }, []);

  useEffectApproach(() => {
    const header = headerRef.current;
    const rowEls = rowRefs.current.filter(Boolean);
    if (!header || rowEls.length === 0) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      header.style.setProperty('--header-progress', '1');
      rowEls.forEach((row) => {
        row.style.setProperty('--box-progress', '1');
        row.style.setProperty('--text-progress', '1');
        row.style.setProperty('--stripe-progress', '1');
        row.style.setProperty('--parallax-y', '0px');
        row.classList.add('is-revealed');
      });
      return;
    }

    const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const revealed = new Set();
    const visible = new Set([header, ...rowEls]);
    let ticking = false;

    let io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) visible.add(entry.target);
            else visible.delete(entry.target);
          });
          scheduleUpdate();
        },
        { rootMargin: '60% 0px 60% 0px', threshold: 0 }
      );
      io.observe(header);
      rowEls.forEach((r) => io.observe(r));
    }

    function scheduleUpdate() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    function update() {
      ticking = false;
      const vh = window.innerHeight;

      if (visible.has(header) && !revealed.has(header)) {
        const rect = header.getBoundingClientRect();
        const hp = clamp01((vh - rect.top) / (vh * 0.6));
        header.style.setProperty('--header-progress', easeOutCubic(hp).toFixed(3));
        if (hp >= 0.999) {
          revealed.add(header);
          header.style.setProperty('--header-progress', '1');
        }
      }

      for (const row of rowEls) {
        if (!visible.has(row)) continue;
        const rect = row.getBoundingClientRect();
        const rowCenter = rect.top + rect.height / 2;

        if (!revealed.has(row)) {
          const ep = clamp01((vh - rect.top) / (vh * 0.65));
          const e = easeOutQuart(ep);
          const tp = clamp01((ep - 0.1) / 0.9);
          const t = easeOutCubic(tp);
          const sp = clamp01((ep - 0.35) / 0.6);
          const s = easeOutCubic(sp);

          row.style.setProperty('--box-progress', e.toFixed(3));
          row.style.setProperty('--text-progress', t.toFixed(3));
          row.style.setProperty('--stripe-progress', s.toFixed(3));

          if (ep >= 0.999) {
            revealed.add(row);
            row.style.setProperty('--box-progress', '1');
            row.style.setProperty('--text-progress', '1');
            row.style.setProperty('--stripe-progress', '1');
            row.classList.add('is-revealed');
          }
        }

        const parallaxY = -((rowCenter - vh / 2) / vh) * 28;
        row.style.setProperty('--parallax-y', `${parallaxY.toFixed(1)}px`);
      }
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    scheduleUpdate();
    const kick = window.setTimeout(scheduleUpdate, 50);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.clearTimeout(kick);
      if (io) io.disconnect();
    };
  }, []);

  return (
    <section className="kw-approach" aria-labelledby="kw-approach-title">
      <style>{`
/* Knowaa, Our Approach section (scroll-linked + floating) */
.kw-approach {
  position: relative;
  background: #ffffff;
  padding: clamp(80px, 10vh, 140px) 0 clamp(100px, 12vh, 160px);
  overflow-x: clip;
}
.kw-approach__stage { background: #ffffff; }
.kw-approach__container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 48px);
  box-sizing: border-box;
}
/* ----- Header (scroll-linked) ----- */
.kw-approach__header {
  max-width: 820px;
  margin: 0 0 clamp(100px, 16vh, 200px) 0;
  opacity: var(--header-progress, 0);
  transform: translateY(calc((1 - var(--header-progress, 0)) * 30px));
  will-change: opacity, transform;
}
.kw-approach__title {
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-size: clamp(28px, 2.6vw, 38px);
  line-height: 1.1;
  color: var(--title, #0B1638);
  margin: 0 0 8px 0;
  letter-spacing: -0.01em;
}
.kw-approach__subtitle {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: clamp(15px, 1.05vw, 17px);
  line-height: 1.45;
  color: #333333;
  margin: 0;
  max-width: 560px;
}
/* ----- Rows ----- */
.kw-approach__rows {
  display: flex;
  flex-direction: column;
  gap: clamp(72px, 12vh, 140px);
}
.kw-approach__row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(40px, 6vw, 88px);
  padding-left: clamp(40px, 8vw, 120px);
  padding-right: clamp(40px, 8vw, 120px);
  --box-enter-x: -90px;
  --text-enter-x: 60px;
}
.kw-approach__row--reverse {
  justify-content: center;
  --box-enter-x: 90px;
  --text-enter-x: -60px;
}
/* Reverse row puts text visually before the box */
.kw-approach__row--reverse > .kw-approach__text { order: 1; }
.kw-approach__row--reverse > .kw-approach__boxWrap { order: 2; }
/* ----- Box wrapper (scroll-linked entry + parallax) ----- */
.kw-approach__boxWrap {
  width: clamp(260px, 26vw, 340px);
  position: relative;
  opacity: var(--box-progress, 0);
  transform:
    translateX(calc(var(--box-enter-x) * (1 - var(--box-progress, 0))))
    translateY(var(--parallax-y, 0px))
    scale(calc(0.86 + 0.14 * var(--box-progress, 0)));
  will-change: transform, opacity;
}
/* ----- Overlay icon (large lottie anchored to bottom-right of image) ----- */
.kw-approach__overlayIcon {
  position: absolute;
  right: 0;
  bottom: 0;
  width: clamp(140px, 16vw, 220px);
  height: clamp(140px, 16vw, 220px);
  /* slight nudge inward from the corner */
  transform: translate(40%, 40%);
  pointer-events: none;
  z-index: 3;
  display: grid;
  place-items: center;
}
/* Award + brush get a size bump */
.kw-approach__overlayIcon--award,
.kw-approach__overlayIcon--brush {
  width: clamp(170px, 19vw, 260px);
  height: clamp(170px, 19vw, 260px);
}
.kw-approach__overlayIcon::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle at center,
    rgba(255,255,255,0.98) 0%,
    rgba(255,255,255,0.92) 28%,
    rgba(255,255,255,0.65) 50%,
    rgba(255,255,255,0.25) 70%,
    rgba(255,255,255,0) 85%);
  filter: blur(2px);
  z-index: 0;
}
.kw-approach__overlayIcon > [data-lottie] {
  position: relative;
  z-index: 1;
  width: 72%;
  height: 72%;
  display: block;
}
.kw-approach__overlayIcon [data-lottie] svg {
  width: 100% !important;
  height: 100% !important;
  display: block;
}
@media (max-width: 900px) {
  .kw-approach__overlayIcon {
    width: clamp(110px, 28vw, 160px);
    height: clamp(110px, 28vw, 160px);
  }
}
/* ----- The box (purple fill + big shadow + continuous float) ----- */
.kw-approach__box {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 28px;
  background: #FFFFFF;
  border: 1px solid rgba(62, 51, 187, 0.18);
  overflow: hidden;
  position: relative;
  box-shadow:
    0 24px 56px -18px rgba(20, 22, 60, 0.14),
    0 6px 16px -6px rgba(20, 22, 60, 0.08);
}
.kw-approach__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
/* Float animations, negative delays = phase offset so boxes don't breathe in sync */
.kw-approach__row.is-revealed[data-approach-row="1"] .kw-approach__box {
  animation: kwApproachFloat1 7s ease-in-out -1s infinite;
}
.kw-approach__row.is-revealed[data-approach-row="2"] .kw-approach__box {
  animation: kwApproachFloat2 6.5s ease-in-out -3s infinite;
}
.kw-approach__row.is-revealed[data-approach-row="3"] .kw-approach__box {
  animation: kwApproachFloat3 8s ease-in-out -5s infinite;
}
@keyframes kwApproachFloat1 {
  0%,  100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50%       { transform: translate3d(-5px, -14px, 0) rotate(-0.5deg); }
}
@keyframes kwApproachFloat2 {
  0%,  100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50%       { transform: translate3d(6px, -12px, 0) rotate(0.4deg); }
}
@keyframes kwApproachFloat3 {
  0%,  100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50%       { transform: translate3d(-4px, -16px, 0) rotate(-0.3deg); }
}
/* ----- Text (scroll-linked) ----- */
.kw-approach__text {
  display: flex;
  align-items: stretch;
  gap: 16px;
  opacity: var(--text-progress, 0);
  transform: translateX(calc(var(--text-enter-x) * (1 - var(--text-progress, 0))));
  will-change: transform, opacity;
}
.kw-approach__stripe {
  flex: 0 0 3px;
  align-self: stretch;
  background: #503594;
  border-radius: 2px;
  transform: scaleY(var(--stripe-progress, 0));
  transform-origin: top center;
  will-change: transform;
}
.kw-approach__copy {
  flex: 1;
  min-width: 0;
}
.kw-approach__icon {
  flex: 0 0 auto;
  width: clamp(96px, 8vw, 120px);
  height: clamp(96px, 8vw, 120px);
  display: block;
  pointer-events: none;
  align-self: flex-start;
  margin-top: -6px;
  margin-right: -14px;
}
.kw-approach__icon[data-lottie="award"] {
  width: clamp(120px, 10.5vw, 156px);
  height: clamp(120px, 10.5vw, 156px);
  margin-top: -14px;
}
.kw-approach__icon svg {
  width: 100% !important;
  height: 100% !important;
  display: block;
}
.kw-approach__rowTitle {
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-size: clamp(22px, 1.65vw, 28px);
  line-height: 1.2;
  color: var(--title, #0B1638);
  margin: 0 0 8px 0;
  letter-spacing: -0.005em;
}
.kw-approach__rowBody {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: clamp(16px, 1.1vw, 19px);
  line-height: 1.5;
  color: #333333;
  margin: 0;
  max-width: 380px;
}
/* ----- Mobile ----- */
@media (max-width: 900px) {
  .kw-approach { padding: 56px 0 72px; }
  .kw-approach__container { padding: 0 20px; }
  .kw-approach__header { margin-bottom: 48px; }
  .kw-approach__rows { gap: 64px; }
  .kw-approach__row,
  .kw-approach__row--reverse {
    grid-template-columns: 1fr;
    gap: 24px;
    --box-enter-x: -50px;
    --text-enter-x: 30px;
  }
  .kw-approach__row--reverse {
    --box-enter-x: 50px;
    --text-enter-x: -30px;
  }
  .kw-approach__row .kw-approach__boxWrap,
  .kw-approach__row--reverse .kw-approach__boxWrap { order: 1; }
  .kw-approach__row .kw-approach__text,
  .kw-approach__row--reverse .kw-approach__text { order: 2; }
  .kw-approach__boxWrap { width: 100%; max-width: 360px; }
  .kw-approach__box {
    border-radius: 22px;
    box-shadow:
      0 20px 40px -16px rgba(20, 22, 60, 0.14),
      0 4px 12px -4px rgba(20, 22, 60, 0.08);
  }
  .kw-approach__stripe { min-height: 64px; }
}
/* ----- Sequential highlight words in body copy -----
   Neutral (400, muted navy) → flash indigo at bold → settle bold navy.
   Width is reserved at the BOLD size from the start (ghost ::before),
   so no reflow when the flash plays. */
.kw-ap-hl {
  display: inline-grid;
  grid-template-areas: "a";
  vertical-align: baseline;
}
.kw-ap-hl::before,
.kw-ap-hl__text {
  grid-area: a;
}
.kw-ap-hl::before {
  content: attr(data-text);
  font-weight: 700;
  letter-spacing: inherit;
  visibility: hidden;
  pointer-events: none;
  user-select: none;
}
.kw-ap-hl__text {
  font-weight: 400;
  color: inherit;
  transition: color 180ms ease, font-weight 180ms ease;
  will-change: font-weight, color;
}
@keyframes kwApHlFlash {
  0%   { font-weight: 400; color: rgba(13,9,89,0.72); }
  35%  { font-weight: 700; color: #3E33BB; }
  70%  { font-weight: 700; color: #3E33BB; }
  100% { font-weight: 700; color: #0D0959; }
}
.kw-approach__row.is-revealed .kw-ap-hl__text {
  animation: kwApHlFlash 900ms ease forwards;
  animation-delay: calc(420ms + var(--hl-i, 0) * 240ms);
}
/* ----- Reduced motion ----- */
@media (prefers-reduced-motion: reduce) {
  .kw-approach__header,
  .kw-approach__boxWrap,
  .kw-approach__text {
    opacity: 1 !important;
    transform: none !important;
  }
  .kw-approach__stripe { transform: scaleY(1) !important; }
  .kw-approach__row.is-revealed .kw-approach__box { animation: none !important; }
  .kw-ap-hl__text,
  .kw-approach__row.is-revealed .kw-ap-hl__text {
    animation: none !important;
    font-weight: 700; color: #0D0959;
  }
}
      `}</style>
      <div className="kw-approach__stage">
        <div className="kw-approach__container">
          <header className="kw-approach__header" ref={headerRef}>
            <h2 id="kw-approach-title" className="kw-approach__title">
              From strategy to measurable impact.
            </h2>
            <p className="kw-approach__subtitle">
              We combine learning science, creative execution, and measurable performance
              to drive real business results.
            </p>
          </header>

          <div className="kw-approach__rows">
            {APPROACH_ROWS.map((row, i) => (
              <article
                key={i}
                className={
                  'kw-approach__row' +
                  (row.boxOnLeft ? '' : ' kw-approach__row--reverse')
                }
                data-approach-row={i + 1}
                ref={(el) => { rowRefs.current[i] = el; }}
              >
                <div className="kw-approach__boxWrap">
                  <div className="kw-approach__box" aria-hidden="true">
                    {row.imgSrc ? (
                      <img
                        className="kw-approach__img"
                        src={row.imgSrc}
                        alt={row.imgAlt || ''}
                      />
                    ) : null}
                  </div>
                  {row.icon ? (
                    <div className={'kw-approach__overlayIcon kw-approach__overlayIcon--' + row.icon} aria-hidden="true">
                      <div data-lottie={row.icon} />
                    </div>
                  ) : null}
                </div>
                <div className="kw-approach__text">
                  <span className="kw-approach__stripe" aria-hidden="true" />
                  <div className="kw-approach__copy">
                    <h3 className="kw-approach__rowTitle">{row.title}</h3>
                    <p className="kw-approach__rowBody">
                      {(() => {
                        let hlIdx = 0;
                        return row.body.map((seg, si) => {
                          if (typeof seg === 'string') return <React.Fragment key={si}>{seg}</React.Fragment>;
                          const i = hlIdx++;
                          return (
                            <span key={si} className="kw-ap-hl" data-text={seg.hl} style={{ '--hl-i': i }}>
                              <span className="kw-ap-hl__text">{seg.hl}</span>
                            </span>
                          );
                        });
                      })()}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Approach = Approach;
