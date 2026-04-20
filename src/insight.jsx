// "Insight of the week" — editorial carousel (integration of spec'd component).
// Adapted from the provided Next.js/TSX spec to this project's Babel-JSX setup.
// Video served from assets/insights/02-attention-threshold.mp4.

const { useEffect: useEffectInsight, useRef: useRefInsight } = React;

function Insight() {
  const sectionRef = useRefInsight(null);
  const carouselRef = useRefInsight(null);

  useEffectInsight(() => {
    const section = sectionRef.current;
    const carousel = carouselRef.current;
    if (!section || !carousel) return;

    const INTERVAL_MS = 7000;
    const AUTO_ADVANCE = false;

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---------- Entrance reveal ----------
    let revealObserver = null;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      section.classList.add('is-revealed');
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              section.classList.add('is-revealed');
              revealObserver && revealObserver.unobserve(section);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
      );
      revealObserver.observe(section);
    }

    // ---------- Carousel logic ----------
    const slides   = Array.from(carousel.querySelectorAll('.insight-card'));
    const dots     = Array.from(carousel.querySelectorAll('[data-dot]'));
    const prevBtn  = carousel.querySelector('[data-prev]');
    const nextBtn  = carousel.querySelector('[data-next]');
    const progressEl = carousel.querySelector('[data-progress]');

    if (slides.length < 2) return;

    let current = slides.findIndex((s) => s.classList.contains('is-active'));
    if (current < 0) current = 0;

    let timerId = null;
    let paused = false;

    if (progressEl) {
      progressEl.style.setProperty('--insights-interval', INTERVAL_MS + 'ms');
      if (!AUTO_ADVANCE && progressEl.parentElement) {
        progressEl.parentElement.style.display = 'none';
      }
    }

    const goTo = (index) => {
      const n = slides.length;
      const nextIdx = ((index % n) + n) % n;

      slides.forEach((s, i) => {
        const active = i === nextIdx;
        s.classList.toggle('is-active', active);
        s.setAttribute('aria-hidden', active ? 'false' : 'true');
        if (active) s.removeAttribute('inert');
        else s.setAttribute('inert', '');

        const video = s.querySelector('video');
        if (video) {
          if (active && !prefersReducedMotion) {
            const p = video.play();
            if (p && typeof p.catch === 'function') p.catch(() => {});
          } else {
            video.pause();
          }
        }
      });

      dots.forEach((d, i) => {
        d.classList.toggle('is-active', i === nextIdx);
        d.setAttribute('aria-selected', i === nextIdx ? 'true' : 'false');
      });

      current = nextIdx;
      resetProgress();
      if (!paused && !prefersReducedMotion) startProgress();
    };

    const next = () => goTo(current + 1);
    const prev = () => goTo(current - 1);

    const startTimer = () => {
      if (!AUTO_ADVANCE || prefersReducedMotion) return;
      stopTimer();
      timerId = window.setInterval(next, INTERVAL_MS);
    };
    const stopTimer = () => {
      if (timerId !== null) { window.clearInterval(timerId); timerId = null; }
    };
    const startProgress = () => {
      if (!AUTO_ADVANCE || !progressEl || prefersReducedMotion) return;
      progressEl.classList.remove('is-running');
      void progressEl.offsetWidth;
      progressEl.classList.add('is-running');
    };
    const resetProgress = () => {
      if (progressEl) progressEl.classList.remove('is-running');
    };
    const pause  = () => { paused = true;  stopTimer(); resetProgress(); };
    const resume = () => {
      paused = false;
      if (!prefersReducedMotion) { startTimer(); startProgress(); }
    };

    // ---------- Bindings ----------
    const onPrev = () => { prev(); if (!paused) startTimer(); };
    const onNext = () => { next(); if (!paused) startTimer(); };
    prevBtn && prevBtn.addEventListener('click', onPrev);
    nextBtn && nextBtn.addEventListener('click', onNext);

    const dotHandlers = [];
    dots.forEach((dot) => {
      const h = () => {
        const i = parseInt(dot.dataset.dot || '', 10);
        if (!Number.isNaN(i)) { goTo(i); if (!paused) startTimer(); }
      };
      dotHandlers.push(h);
      dot.addEventListener('click', h);
    });

    const onKey = (e) => {
      if (e.key === 'ArrowLeft')  { e.preventDefault(); prev(); if (!paused) startTimer(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); if (!paused) startTimer(); }
    };
    carousel.addEventListener('keydown', onKey);

    carousel.addEventListener('mouseenter', pause);
    carousel.addEventListener('mouseleave', resume);
    carousel.addEventListener('focusin', pause);
    const onFocusOut = (e) => {
      if (!carousel.contains(e.relatedTarget)) resume();
    };
    carousel.addEventListener('focusout', onFocusOut);

    const onCarouselVisibility = () => {
      if (document.hidden) { stopTimer(); resetProgress(); }
      else if (!paused && !prefersReducedMotion) { startTimer(); startProgress(); }
    };
    document.addEventListener('visibilitychange', onCarouselVisibility);

    // ---------- Initial sync ----------
    slides.forEach((s, i) => {
      const active = i === current;
      s.setAttribute('aria-hidden', active ? 'false' : 'true');
      if (!active) s.setAttribute('inert', '');
      const video = s.querySelector('video');
      if (video) {
        if (active && !prefersReducedMotion) {
          const p = video.play();
          if (p && typeof p.catch === 'function') p.catch(() => {});
        } else {
          video.pause();
        }
      }
    });

    if (!prefersReducedMotion) { startTimer(); startProgress(); }

    return () => {
      revealObserver && revealObserver.disconnect();
      document.removeEventListener('visibilitychange', onCarouselVisibility);
      stopTimer();
      prevBtn && prevBtn.removeEventListener('click', onPrev);
      nextBtn && nextBtn.removeEventListener('click', onNext);
      dots.forEach((dot, i) => dot.removeEventListener('click', dotHandlers[i]));
      carousel.removeEventListener('keydown', onKey);
      carousel.removeEventListener('mouseenter', pause);
      carousel.removeEventListener('mouseleave', resume);
      carousel.removeEventListener('focusin', pause);
      carousel.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  return (
    <section ref={sectionRef} className="insights" aria-labelledby="insights-heading">
      <style>{INSIGHTS_CSS}</style>
      <div className="insights__inner">

        {/* Header: editorial masthead + left-aligned section title */}
        <header className="insights__header">
          <div className="insights__masthead" aria-hidden="true">
            <span className="insights__masthead-line"></span>
          </div>
          <h2 id="insights-heading" className="insights__title">
            This week&rsquo;s thinking.
          </h2>
        </header>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="insights__carousel"
          data-carousel
          aria-roledescription="carousel"
          aria-label="Insight of the week"
        >
          <div className="insights__viewport">
            <div className="insights__plinth" aria-hidden="true">
              <svg
                className="insights__plinth-svg"
                viewBox="0 0 1600 400"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <linearGradient id="kw-pl-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FCBFA1" />
                    <stop offset="100%" stopColor="#F6A07B" />
                  </linearGradient>
                  <radialGradient id="kw-pl-bloom" cx="50%" cy="50%" r="55%">
                    <stop offset="0%" stopColor="#FFE6D6" stopOpacity="0.5" />
                    <stop offset="55%" stopColor="#FFE6D6" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#FFE6D6" stopOpacity="0" />
                  </radialGradient>
                  <symbol id="kw-pl-pill1" viewBox="21.89 30.20 31.05 34.61">
                    <path d="M 49.13 62.75 C 46.39 64.76 42.94 64.81 41.18 62.88 L 23.85 43.68 C 21.89 41.52 22.82 37.76 25.87 35.52 L 30.05 32.44 C 33.10 30.20 36.97 30.43 38.46 32.94 L 51.61 55.21 C 52.94 57.46 51.86 60.74 49.13 62.75 Z" />
                  </symbol>
                  <symbol id="kw-pl-pill2" viewBox="267.46 29.36 30.67 36.83">
                    <path d="M 270.85 31.09 C 273.37 29.36 276.69 29.72 278.48 31.90 L 296.14 53.52 C 298.13 55.96 297.43 59.68 294.62 61.61 L 290.76 64.26 C 287.95 66.19 284.22 65.50 282.66 62.76 L 268.86 38.50 C 267.46 36.05 268.33 32.82 270.85 31.09 Z" />
                  </symbol>
                  <symbol id="kw-pl-pill3" viewBox="116.64 18.22 35.56 43.42">
                    <path d="M 121.59 59.57 C 118.19 57.50 116.64 53.68 118.04 50.79 L 131.84 22.22 C 133.39 19.00 137.97 18.22 141.77 20.53 L 146.98 23.70 C 150.78 26.02 152.20 30.43 150.05 33.30 L 131.03 58.69 C 129.11 61.26 125.00 61.64 121.59 59.57 Z" />
                  </symbol>
                  <symbol id="kw-pl-pill4" viewBox="177.36 27.89 31.10 34.86">
                    <path d="M 203.50 29.96 C 206.91 32.03 208.46 35.86 207.07 38.74 L 197.71 58.75 C 196.16 61.97 191.58 62.75 187.79 60.44 L 182.57 57.27 C 178.77 54.96 177.36 50.54 179.50 47.68 L 194.07 30.84 C 195.99 28.27 200.10 27.89 203.50 29.96 Z" />
                  </symbol>
                  <symbol id="kw-pl-dot" viewBox="244.67 36.21 16.69 16.69">
                    <path d="M 261.08 44.05 C 261.36 48.51 257.97 52.34 253.52 52.62 C 249.06 52.90 245.23 49.52 244.95 45.06 C 244.67 40.61 248.06 36.77 252.51 36.49 C 256.97 36.21 260.80 39.60 261.08 44.05 Z" />
                  </symbol>
                </defs>

                <rect width="1600" height="400" fill="url(#kw-pl-grad)" />

                <g fill="#FFF0E0" opacity="0.28">
                  <use href="#kw-pl-pill3" x="-30"  y="30"  width="160" height="195" transform="rotate(-22 50 127)" />
                  <use href="#kw-pl-pill1" x="200"  y="220" width="120" height="134" transform="rotate(45 260 287)" />
                  <use href="#kw-pl-pill4" x="320"  y="40"  width="100" height="112" transform="rotate(80 370 96)" />
                  <use href="#kw-pl-dot"   x="100"  y="180" width="26"  height="26" />
                  <use href="#kw-pl-dot"   x="260"  y="80"  width="20"  height="20" />
                  <use href="#kw-pl-pill2" x="1370" y="20"  width="140" height="170" transform="rotate(170 1440 105)" />
                  <use href="#kw-pl-pill3" x="1220" y="200" width="140" height="170" transform="rotate(-30 1290 285)" />
                  <use href="#kw-pl-pill4" x="1490" y="240" width="100" height="112" transform="rotate(30 1540 296)" />
                  <use href="#kw-pl-dot"   x="1400" y="150" width="22"  height="22" />
                  <use href="#kw-pl-dot"   x="1520" y="50"  width="18"  height="18" />
                </g>

                <g fill="#C75A2C" opacity="0.15">
                  <use href="#kw-pl-pill1" x="60"   y="230" width="100" height="112" transform="rotate(-50 110 286)" />
                  <use href="#kw-pl-pill4" x="180"  y="80"  width="90"  height="101" transform="rotate(15 225 130)" />
                  <use href="#kw-pl-dot"   x="180"  y="310" width="16"  height="16" />
                  <use href="#kw-pl-pill1" x="1300" y="70"  width="100" height="112" transform="rotate(-65 1350 126)" />
                  <use href="#kw-pl-pill2" x="1440" y="220" width="90"  height="108" transform="rotate(120 1485 274)" />
                  <use href="#kw-pl-dot"   x="1340" y="290" width="14"  height="14" />
                </g>

                <rect width="1600" height="400" fill="url(#kw-pl-bloom)" />
              </svg>
            </div>
            <ol className="insights__track" data-track>

              {/* SLIDE 1 — Generic Training / AI Strategy */}
              <li
                className="insight-card"
                data-slide="0"
                role="group"
                aria-roledescription="slide"
                aria-label="1 of 2"
              >
                <div className="insight-card__body">
                  <h3 className="insight-card__title">
                    Generic training was a production problem. AI solved it. Now it&rsquo;s a strategy problem.
                  </h3>
                  <p className="insight-card__excerpt">
                    For twenty years, the honest answer to &ldquo;why is our training so abstract?&rdquo; was a production constraint. That constraint is gone. The question has changed.
                  </p>
                  <div className="insight-card__meta">
                    <span>Article</span>
                    <span className="insight-card__meta-dot" aria-hidden="true"></span>
                    <span>12 min read</span>
                  </div>
                  <a
                    className="insight-card__cta"
                    href="https://resources.knowaa.com/articles/generic-training-production-problem-ai-strategy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Read the article</span>
                    <svg className="insight-card__cta-arrow" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

                {/* Editorial SVG cover — "Production → Strategy" (600×600 square) */}
                <div className="insight-card__cover insight-card__cover--1" aria-hidden="true">
                  <svg className="cover-art" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <linearGradient id="cover1-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3E1F78"/>
                        <stop offset="55%" stopColor="#503594"/>
                        <stop offset="100%" stopColor="#7C3AED"/>
                      </linearGradient>
                      <radialGradient id="cover1-sun" cx="72%" cy="30%" r="46%">
                        <stop offset="0%" stopColor="#F37137" stopOpacity="0.95"/>
                        <stop offset="55%" stopColor="#F37137" stopOpacity="0.25"/>
                        <stop offset="100%" stopColor="#F37137" stopOpacity="0"/>
                      </radialGradient>
                      <radialGradient id="cover1-glow" cx="15%" cy="85%" r="58%">
                        <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.55"/>
                        <stop offset="100%" stopColor="#7C3AED" stopOpacity="0"/>
                      </radialGradient>
                      <filter id="cover1-noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3"/>
                        <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0"/>
                        <feComposite in2="SourceGraphic" operator="in"/>
                      </filter>
                    </defs>
                    <rect width="600" height="600" fill="url(#cover1-bg)"/>
                    <rect width="600" height="600" fill="url(#cover1-glow)"/>
                    <rect width="600" height="600" fill="url(#cover1-sun)"/>
                    <g opacity="0.10" stroke="#FFFFFF" strokeWidth="1">
                      <line x1="0"   y1="100" x2="600" y2="100"/>
                      <line x1="0"   y1="200" x2="600" y2="200"/>
                      <line x1="0"   y1="300" x2="600" y2="300"/>
                      <line x1="0"   y1="400" x2="600" y2="400"/>
                      <line x1="0"   y1="500" x2="600" y2="500"/>
                      <line x1="100" y1="0"   x2="100" y2="600"/>
                      <line x1="200" y1="0"   x2="200" y2="600"/>
                      <line x1="300" y1="0"   x2="300" y2="600"/>
                      <line x1="400" y1="0"   x2="400" y2="600"/>
                      <line x1="500" y1="0"   x2="500" y2="600"/>
                    </g>
                    <circle cx="430" cy="190" r="135" fill="#F37137" opacity="0.92"/>
                    <circle cx="430" cy="190" r="135" fill="url(#cover1-sun)" opacity="0.6"/>
                    <g fill="none" stroke="#FFFFFF" strokeWidth="1.25" opacity="0.55">
                      <circle cx="430" cy="190" r="172"/>
                      <circle cx="430" cy="190" r="216" opacity="0.38"/>
                      <circle cx="430" cy="190" r="264" opacity="0.22"/>
                    </g>
                    <path d="M -40 130 C 180 200, 260 380, 640 540" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" opacity="0.85"/>
                    <path d="M -40 160 C 180 240, 260 420, 640 580" fill="none" stroke="#ED1F80" strokeWidth="2.2" strokeLinecap="round" opacity="0.55"/>
                    <circle cx="138" cy="470" r="7" fill="#F37137"/>
                    <circle cx="104" cy="518" r="4" fill="#ED1F80"/>
                    <circle cx="178" cy="544" r="5" fill="#FFFFFF" opacity="0.7"/>
                    <rect width="600" height="600" filter="url(#cover1-noise)" opacity="0.55"/>
                  </svg>
                </div>
              </li>

              {/* SLIDE 2 — Attention Threshold (DEFAULT active slide) */}
              <li
                className="insight-card is-active"
                data-slide="1"
                role="group"
                aria-roledescription="slide"
                aria-label="2 of 2"
              >
                <div className="insight-card__body">
                  <h3 className="insight-card__title">
                    The attention threshold: why learning fails before it begins.
                  </h3>
                  <p className="insight-card__excerpt">
                    Most learning programs lose the learner within the first few minutes. The issue is simpler and more structural than content quality. Attention has already shifted elsewhere.
                  </p>
                  <div className="insight-card__meta">
                    <span>Article</span>
                    <span className="insight-card__meta-dot" aria-hidden="true"></span>
                    <span>10 min read</span>
                  </div>
                  <a
                    className="insight-card__cta"
                    href="https://resources.knowaa.com/articles/attention-threshold-why-learning-fails"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Read the article</span>
                    <svg className="insight-card__cta-arrow" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

                {/* Square video cover — 1080x1080, H.264, 7s silent loop */}
                <div className="insight-card__cover insight-card__cover--2" aria-hidden="true">
                  <video
                    className="cover-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  >
                    <source src="assets/insights/02-attention-threshold.mp4" type="video/mp4" />
                  </video>
                </div>
              </li>

            </ol>
          </div>

          {/* Controls: arrows + dots */}
          <div className="insights__controls">
            <button type="button" className="insights__arrow insights__arrow--prev" data-prev aria-label="Previous insight">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M19 12H5M11 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="insights__dots" role="tablist" aria-label="Select insight">
              <button type="button" className="insights__dot" data-dot="0" role="tab" aria-selected="false" aria-label="Go to insight 1"></button>
              <button type="button" className="insights__dot is-active" data-dot="1" role="tab" aria-selected="true" aria-label="Go to insight 2"></button>
            </div>

            <button type="button" className="insights__arrow insights__arrow--next" data-next aria-label="Next insight">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Progress bar — hidden via JS when AUTO_ADVANCE is false */}
          <div className="insights__progress" aria-hidden="true">
            <span className="insights__progress-bar" data-progress></span>
          </div>
        </div>

        {/* "Browse all insights" link */}
        <div className="insights__all">
          <a className="insights__all-link" href="https://resources.knowaa.com" target="_blank" rel="noopener noreferrer">
            <span>Browse all insights</span>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

const INSIGHTS_CSS = `
:root {
  --kw-purple-deep:   #503594;
  --kw-purple-bright: #7C3AED;
  --kw-pink:          #ED1F80;
  --kw-orange:        #F37137;
  --kw-ink:           #111111;
  --kw-body:          #333333;
  --kw-muted:         #777777;
  --kw-paper:         #ffffff;
  --kw-card-bg:       #FFFFFF;
  --kw-rule:          rgba(17, 17, 17, 0.09);
  --kw-rule-strong:   rgba(17, 17, 17, 0.16);
}

.insights {
  font-family: 'Urbanist', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--kw-ink);
  background: var(--kw-paper);
  position: relative;
  padding: 64px 0 80px;
  overflow: hidden; /* clip the full-bleed plinth to the white canvas edges */
}
.insights__inner {
  max-width: 1680px;
  margin: 0 auto;
  padding: 0 56px;
  position: relative;
  z-index: 1;
}
.insights__header {
  max-width: none;
  margin: 0 0 36px;
  text-align: left;
}
.insights__masthead {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0 0 20px;
}
.insights__masthead-line {
  flex: 1;
  height: 1px;
  background: var(--kw-rule-strong);
}
.insights__title {
  font-family: 'Urbanist', sans-serif;
  font-size: clamp(26px, 3.2vw, 42px);
  font-weight: 900;
  line-height: 1.06;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--kw-ink);
}

.insights__carousel {
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
}
.insights__viewport { position: relative; }
.insights__plinth {
  position: absolute;
  top: 60px;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
.insights__plinth-svg { display: block; width: 100%; height: 100%; }
.insights__plinth::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.6' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  opacity: 0.08;
  mix-blend-mode: multiply;
  pointer-events: none;
}
.insights__viewport > .insights__track { position: relative; z-index: 1; }
.insights__track {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.insight-card {
  grid-area: 1 / 1;
  display: grid;
  grid-template-columns: 1fr minmax(340px, 440px);
  align-items: center;
  position: relative;
  background: var(--kw-card-bg);
  border: 1px solid var(--kw-rule);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(17, 17, 17, 0.05);
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity 520ms cubic-bezier(0.2, 0.8, 0.2, 1),
    transform 620ms cubic-bezier(0.2, 0.8, 0.2, 1);
  pointer-events: none;
  will-change: opacity, transform;
}
.insight-card.is-active {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  z-index: 2;
}
.insight-card::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 9px;
  background: #503594;
  z-index: 3;
  pointer-events: none;
}

.insight-card__body {
  padding: 48px 40px 48px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.insight-card__title {
  font-family: 'Urbanist', sans-serif;
  font-size: clamp(22px, 2.1vw, 30px);
  font-weight: 900;
  line-height: 1.14;
  letter-spacing: -0.015em;
  margin: 0 0 14px;
  color: var(--kw-ink);
  max-width: 520px;
}
.insight-card__excerpt {
  font-family: 'Urbanist', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.55;
  margin: 0 0 20px;
  color: var(--kw-body);
  max-width: 480px;
}
.insight-card__meta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Urbanist', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--kw-muted);
  margin: 0 0 22px;
}
.insight-card__meta-dot {
  display: inline-block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.5;
}

.insight-card__cta {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--kw-paper);
  background: var(--kw-purple-deep);
  text-decoration: none;
  padding: 13px 22px 13px 24px;
  border: 1px solid var(--kw-purple-deep);
  border-radius: 0;
  line-height: 1;
  transition: background 200ms ease, border-color 200ms ease, color 200ms ease;
}
.insight-card__cta:hover,
.insight-card__cta:focus-visible {
  background: var(--kw-purple-bright);
  border-color: var(--kw-purple-bright);
  color: var(--kw-paper);
  outline: none;
}
.insight-card__cta-arrow { transition: transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1); }
.insight-card__cta:hover .insight-card__cta-arrow,
.insight-card__cta:focus-visible .insight-card__cta-arrow { transform: translateX(4px); }
.insight-card__cta:focus-visible { box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.28); }

.insight-card__cover {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  width: 100%;
  justify-self: end;
}
.insight-card__cover video,
.insight-card__cover img,
.insight-card__cover svg,
.insight-card__cover .cover-art {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.insight-card__cover::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255, 255, 255, 0.18);
  pointer-events: none;
  z-index: 2;
}

.insights__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
}
.insights__arrow {
  width: 38px;
  height: 38px;
  border-radius: 0;
  border: 1px solid var(--kw-rule-strong);
  background: transparent;
  color: var(--kw-ink);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 180ms ease, color 180ms ease, border-color 180ms ease;
}
.insights__arrow:hover,
.insights__arrow:focus-visible {
  background: var(--kw-ink);
  color: var(--kw-paper);
  border-color: var(--kw-ink);
  outline: none;
}

.insights__dots { display: inline-flex; align-items: center; gap: 8px; }
.insights__dot {
  width: 16px;
  height: 2px;
  border: none;
  border-radius: 0;
  padding: 0;
  background: var(--kw-rule-strong);
  cursor: pointer;
  transition: width 260ms ease, background 220ms ease;
}
.insights__dot:hover { background: var(--kw-ink); }
.insights__dot.is-active { width: 36px; background: var(--kw-ink); }
.insights__dot:focus-visible { outline: 2px solid var(--kw-purple-bright); outline-offset: 4px; }

.insights__progress {
  position: relative;
  max-width: 200px;
  height: 1px;
  margin: 18px auto 0;
  background: var(--kw-rule);
  overflow: hidden;
}
.insights__progress-bar {
  display: block;
  position: absolute;
  inset: 0;
  transform-origin: left center;
  transform: scaleX(0);
  background: var(--kw-purple-deep);
  will-change: transform;
}
.insights__progress-bar.is-running {
  transition: transform var(--insights-interval, 7000ms) linear;
  transform: scaleX(1);
}

.insights__all {
  max-width: 1120px;
  margin: 4px auto 0;
  text-align: left;
}
.insights__all-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Urbanist', sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: var(--kw-muted);
  text-decoration: none;
  padding: 4px 2px;
  border-bottom: 1px solid transparent;
  transition: color 220ms ease, border-color 220ms ease;
}
.insights__all-link:hover,
.insights__all-link:focus-visible {
  color: var(--kw-purple-deep);
  border-bottom-color: var(--kw-purple-deep);
}
.insights__all-link svg { transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1); }
.insights__all-link:hover svg,
.insights__all-link:focus-visible svg { transform: translateX(3px); }

.insights__masthead,
.insights__title,
.insights__carousel,
.insights__all {
  transition:
    opacity 640ms cubic-bezier(0.2, 0.8, 0.2, 1),
    transform 640ms cubic-bezier(0.2, 0.8, 0.2, 1);
}
.insights:not(.is-revealed) .insights__masthead,
.insights:not(.is-revealed) .insights__title,
.insights:not(.is-revealed) .insights__carousel,
.insights:not(.is-revealed) .insights__all {
  opacity: 0;
  transform: translateY(14px);
}
.insights.is-revealed .insights__masthead { transition-delay: 80ms; }
.insights.is-revealed .insights__title    { transition-delay: 180ms; }
.insights.is-revealed .insights__carousel { transition-delay: 300ms; }
.insights.is-revealed .insights__all      { transition-delay: 500ms; }

@media (max-width: 960px) {
  .insights { padding: 64px 0 88px; }
  .insights__inner { padding: 0 28px; }
  .insights__header { margin-bottom: 40px; }
  .insight-card { grid-template-columns: 1fr; }
  .insight-card__cover {
    order: -1;
    aspect-ratio: 1 / 1;
    justify-self: stretch;
    max-width: 440px;
    margin: 0 auto;
  }
  .insight-card__body { padding: 28px 28px 32px; }
  .insight-card:not(.is-active) { display: none; }
  .insights__progress { max-width: 160px; }
}
@media (max-width: 520px) {
  .insight-card__title  { font-size: 24px; }
  .insight-card__excerpt { font-size: 16px; }
  .insights__title { font-size: 30px; }
  .insight-card__body { padding: 24px 22px 28px; }
}
@media (prefers-reduced-motion: reduce) {
  .insight-card { transition: opacity 0ms; transform: none; }
  .insights__progress-bar.is-running { transition: none; }
  .insight-card__cta-arrow,
  .insights__arrow,
  .insights__dot,
  .insights__all-link svg { transition: none; }
}
`;

window.Insight = Insight;
