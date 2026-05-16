// ServiceTemplate.jsx
// Reusable service-page template. Pass `service` object with:
//   { eyebrow, title, intro, samples: [{ label, caption, accent }] }
// Hero (title + intro) → Video showcase (auto-rotating, dot nav, gradient caption)
// → placeholder for service explanation sections.

const { useEffect: useEffectST, useState: useStateST, useRef: useRefST } = React;

function ServiceBanner({ title, image, titleColor }) {
  const isDark = titleColor && titleColor !== '#ffffff' && titleColor.toLowerCase() !== '#fff';
  return (
    <section className="svc-banner" style={{ backgroundImage: `url("${image}")`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <div className="svc-banner__inner">
        <h1 className="svc-banner__title" style={titleColor ? { color: titleColor, textShadow: isDark ? 'none' : undefined } : undefined}>{title}</h1>
      </div>
      <style>{`
        .svc-banner {
          position: relative;
          margin-top: 72px;
          padding: 0 56px;
          aspect-ratio: 2880 / 720;
          display: flex;
          align-items: center;
          background-color: #0D0959;
          background-size: 100% 100%;
          background-position: center center;
          background-repeat: no-repeat;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .svc-banner__inner {
          position: relative;
          max-width: 1080px;
          width: 100%;
          margin: 0 auto;
        }
        .svc-banner__title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(40px, 5vw, 72px);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0;
          text-shadow: 0 2px 12px rgba(0,0,0,0.25), 0 1px 4px rgba(0,0,0,0.2);
        }
        @media (max-width: 768px) {
          .svc-banner { padding: 0 24px; margin-top: 64px; }
          .svc-banner__title { font-size: 36px; }
        }
      `}</style>
    </section>
  );
}

function ServiceHero({ eyebrow, title, intro, hideCta, continueIntro }) {
  return (
    <section className={`svc-hero ${continueIntro ? 'svc-hero--continue' : ''}`}>
      <div className="svc-hero__inner">
        {eyebrow ? <div className="svc-hero__eyebrow">{eyebrow}</div> : null}
        {title ? <h1 className="svc-hero__title">{title}</h1> : null}
        {Array.isArray(intro)
          ? intro.map((p, i) => <p key={i} className="svc-hero__intro">{p}</p>)
          : <p className="svc-hero__intro">{intro}</p>}
        {hideCta ? null : (
          <a className="svc-hero__cta" href="Knowaa Contact.html" data-cta="cta_book_demo">
            <span>Book a demo</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
      <style>{`
        .svc-hero {
          padding: 72px 56px 56px;
          background: #ffffff;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .svc-hero__inner {
          max-width: 1080px;
          margin: 0 auto;
        }
        .svc-hero__eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #503594;
          margin-bottom: 20px;
        }
        .svc-hero__title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(34px, 3.4vw, 44px);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #0D0959;
          margin: 0 0 24px;
          max-width: 22ch;
        }
        .svc-hero__intro {
          font-size: clamp(16px, 1.15vw, 18px);
          font-weight: 400;
          line-height: 1.6;
          color: #2a2840;
          margin: 0;
          max-width: 64ch;
          text-wrap: pretty;
        }
        .svc-hero__intro + .svc-hero__intro { margin-top: 16px; }
        .svc-hero__intro:first-of-type {
          font-size: clamp(18px, 1.35vw, 21px);
          font-weight: 500;
          color: #0D0959;
          line-height: 1.5;
          margin-bottom: 4px;
        }
        /* Statement line, pulls focus right after the lede. */
        .svc-hero__intro:nth-of-type(2) {
          font-size: clamp(20px, 1.65vw, 26px);
          font-weight: 700;
          color: #0D0959;
          line-height: 1.35;
          letter-spacing: -0.01em;
          margin-top: 20px;
          margin-bottom: 8px;
          max-width: 48ch;
        }
        .svc-hero__cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 28px;
          padding: 14px 26px;
          background: #503594;
          color: #ffffff;
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.01em;
          text-decoration: none;
          border-radius: 999px;
          transition: background 180ms ease, transform 180ms ease, box-shadow 180ms ease;
          box-shadow: 0 8px 22px -10px rgba(80, 53, 148, 0.55);
        }
        .svc-hero__cta:hover {
          background: #3f2876;
          transform: translateY(-1px);
          box-shadow: 0 12px 26px -10px rgba(80, 53, 148, 0.7);
        }
        .svc-hero__cta svg { transition: transform 180ms ease; }
        .svc-hero__cta:hover svg { transform: translateX(3px); }
        /* Continuation hero (rendered after the showcase strip on services that
           split the intro). Skip the lede / statement-line treatments so the
           remaining paragraphs read as ordinary body copy. */
        .svc-hero--continue { padding-top: clamp(40px, 4vw, 64px); }
        .svc-hero--continue .svc-hero__intro:first-of-type,
        .svc-hero--continue .svc-hero__intro:nth-of-type(2) {
          font-size: clamp(16px, 1.15vw, 18px);
          font-weight: 400;
          color: #2a2840;
          line-height: 1.6;
          margin-top: 0;
          max-width: 64ch;
        }
        .svc-hero--continue .svc-hero__intro + .svc-hero__intro { margin-top: 16px; }
        @media (max-width: 768px) {
          .svc-hero { padding: 56px 24px 40px; }
          .svc-hero__title { font-size: 30px; }
          .svc-hero__intro { font-size: 15px; }
          .svc-hero__intro:first-of-type { font-size: 17px; }
          .svc-hero__intro:nth-of-type(2) { font-size: 19px; }
          .svc-hero__cta { margin-top: 24px; padding: 13px 22px; font-size: 14px; }
        }
      `}</style>
    </section>
  );
}

function ServiceShowcase({ samples, intervalMs = 7000 }) {
  // Virtual index space: we render [last, ...samples, first] so there's always
  // a peek on both sides. virtualIndex 0 = clone-of-last, 1..N = real, N+1 = clone-of-first.
  const N = samples.length;
  const [virtualIndex, setVirtualIndex] = useStateST(1); // start on first real
  const [paused, setPaused] = useStateST(false);
  const [transitioning, setTransitioning] = useStateST(false);
  const [animate, setAnimate] = useStateST(true); // disabled briefly when we snap from clone → real
  const [activeDurationMs, setActiveDurationMs] = useStateST(intervalMs);
  const timerRef = useRefST(null);
  const videoRefs = useRefST([]);

  // Map virtual → real (the sample being shown center)
  const realIndex = ((virtualIndex - 1) % N + N) % N;

  // Auto-advance: fixed 8-second cadence for all cards (video or not).
  // Pauses while the tab is backgrounded (browsers throttle setTimeout there,
  // which would otherwise desync the strip from the video).
  const [tabHidden, setTabHidden] = useStateST(typeof document !== 'undefined' && document.hidden);
  useEffectST(() => {
    const onVis = () => {
      const hidden = document.hidden;
      setTabHidden(hidden);
      if (!hidden) {
        // Re-kick the centered video, browsers may have paused it.
        const v = videoRefs.current[virtualIndex];
        if (v) {
          const p = v.play();
          if (p && p.catch) p.catch(() => {});
        }
      }
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, [virtualIndex]);

  useEffectST(() => {
    if (paused || transitioning || tabHidden) return;
    const FIXED_MS = 8000;
    setActiveDurationMs(FIXED_MS);
    timerRef.current = setTimeout(() => {
      setVirtualIndex((i) => i + 1);
    }, FIXED_MS);
    return () => clearTimeout(timerRef.current);
  }, [virtualIndex, paused, transitioning, tabHidden]);

  // Mark "transitioning" so we can pause the active video until it lands center
  useEffectST(() => {
    setTransitioning(true);
    const t = setTimeout(() => setTransitioning(false), 480);
    return () => clearTimeout(t);
  }, [virtualIndex]);

  // Snap from clone slots back to the real equivalents (no animation) once the
  // transition has finished, so the next move can continue smoothly in either direction.
  useEffectST(() => {
    if (virtualIndex === 0 || virtualIndex === N + 1) {
      const t = setTimeout(() => {
        setAnimate(false);
        setVirtualIndex(virtualIndex === 0 ? N : 1);
        // re-enable animation on the next frame
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      }, 760);
      return () => clearTimeout(t);
    }
  }, [virtualIndex, N]);

  // Drive video playback: ALL videos play on loop continuously, including the
  // side cards. The browser will throttle off-screen ones automatically.
  useEffectST(() => {
    videoRefs.current.forEach((v) => {
      if (!v) return;
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    });
  }, [virtualIndex]);

  // Build the rendered strip: [clone-of-last, ...samples, clone-of-first]
  const stripItems = [samples[N - 1], ...samples, samples[0]];

  const goTo = (realI) => setVirtualIndex(realI + 1);

  return (
    <section
      className="svc-show"
    >
      <div className="svc-show__viewport">
        <div
          className="svc-show__strip"
          style={{
            transform: `translateX(calc(50% - (var(--svc-card-w) / 2) - ${virtualIndex} * (var(--svc-card-w) + var(--svc-gap))))`,
            transition: animate ? 'transform 480ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
        >
          {stripItems.map((s, i) => {
            const isActive = i === virtualIndex;
            return (
              <div
                key={i}
                className={`svc-show__card ${isActive ? 'is-active' : ''}`}
                aria-hidden={isActive ? 'false' : 'true'}
                onClick={() => !isActive && setVirtualIndex(i)}
                style={{ cursor: isActive ? 'default' : 'pointer' }}
              >
                <div className="svc-show__media" style={{ background: s.video ? '#0A0A0A' : (s.accent || 'linear-gradient(135deg, #503594 0%, #3E33BB 100%)') }}>
                  {s.video ? (
                    <video
                      ref={(el) => { videoRefs.current[i] = el; }}
                      src={s.video}
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="svc-show__video"
                    />
                  ) : (
                    <div className="svc-show__placeholder">
                      <span className="svc-show__placeholder-label">{s.label}</span>
                      <span className="svc-show__placeholder-tag">Sample preview</span>
                    </div>
                  )}
                </div>

                {/* Caption, sits below the video, only readable on the active card */}
                <div className="svc-show__caption">
                  <div className="svc-show__caption-eyebrow">{s.label}</div>
                  <p className="svc-show__caption-text">{s.caption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress dots, outside the strip viewport */}
      <div className="svc-show__dots" role="tablist" aria-label="Sample navigation">
        {samples.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === realIndex}
            aria-label={`Show sample ${i + 1}`}
            className={`svc-show__dot ${i === realIndex ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
          >
            <span className="svc-show__dot-track">
              <span className="svc-show__dot-fill" style={{
                animationDuration: `${i === realIndex ? activeDurationMs : intervalMs}ms`,
                animationPlayState: (i === realIndex && !paused && !transitioning) ? 'running' : 'paused',
              }} />
            </span>
          </button>
        ))}
      </div>

      <style>{`
        .svc-show {
          padding: 24px 0 96px;
          background: #ffffff;
          --svc-card-w: min(576px, 50vw);
          --svc-gap: 24px;
        }
        .svc-show__viewport {
          width: 100%;
          overflow: hidden;
          padding: 8px 0;
          position: relative;
        }
        .svc-show__viewport::before,
        .svc-show__viewport::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: clamp(60px, 9vw, 140px);
          pointer-events: none;
          z-index: 3;
        }
        .svc-show__viewport::before {
          left: 0;
          background: linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.92) 35%, rgba(255,255,255,0) 100%);
        }
        .svc-show__viewport::after {
          right: 0;
          background: linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0.92) 35%, rgba(255,255,255,0) 100%);
        }
        .svc-show__strip {
          display: flex;
          gap: var(--svc-gap);
          will-change: transform;
        }
        .svc-show__card {
          position: relative;
          flex: 0 0 var(--svc-card-w);
          display: flex;
          flex-direction: column;
          transition: opacity 600ms ease, filter 600ms ease, transform 600ms ease;
          opacity: 0.45;
          filter: saturate(0.7);
        }
        .svc-show__card.is-active {
          opacity: 1;
          filter: none;
        }
        .svc-show__media {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 4px;
          overflow: hidden;
          background: #0B1638;
          border: 2px solid #503594;
          box-shadow: 0 30px 80px rgba(13, 9, 89, 0.18);
        }
        .svc-show__video {
          width: 100%; height: 100%; object-fit: cover;
        }
        .svc-show__placeholder {
          width: 100%; height: 100%;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          color: rgba(255,255,255,0.92);
          gap: 8px;
          padding: 24px;
          text-align: center;
        }
        .svc-show__placeholder-label {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(28px, 3.4vw, 44px);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .svc-show__placeholder-tag {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          opacity: 0.75;
        }

        /* Caption, sits below the video, only readable on the active card */
        .svc-show__caption {
          padding: 20px 8px 0;
          opacity: 0;
          transition: opacity 500ms ease 200ms;
        }
        .svc-show__card.is-active .svc-show__caption {
          opacity: 1;
        }
        .svc-show__caption-eyebrow {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #F37137;
          margin-bottom: 8px;
        }
        .svc-show__caption-text {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(14px, 1.05vw, 16px);
          font-weight: 400;
          line-height: 1.5;
          color: #0D0959;
          margin: 0;
          max-width: 720px;
        }

        /* Dots, sit below the strip, centered */
        .svc-show__dots {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin: 20px auto 0;
          padding: 0 24px;
        }
        .svc-show__dot {
          width: 24px;
          height: 24px;
          padding: 0;
          background: transparent;
          border: 0;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .svc-show__dot-track {
          display: block;
          width: 14px;
          height: 14px;
          background: transparent;
          border: 2px solid rgba(13, 9, 89, 0.35);
          border-radius: 50%;
          overflow: hidden;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .svc-show__dot:hover .svc-show__dot-track {
          border-color: rgba(13, 9, 89, 0.6);
          transform: scale(1.08);
        }
        .svc-show__dot-fill {
          display: none;
        }
        .svc-show__dot.is-active .svc-show__dot-track {
          background: #503594;
          border-color: #503594;
        }
        @keyframes svc-show-fill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .svc-show__dot:not(.is-active) .svc-show__dot-fill {
          animation: none;
          width: 0%;
        }

        @media (max-width: 768px) {
          .svc-show {
            padding: 16px 0 64px;
            --svc-card-w: 86vw;
            --svc-gap: 12px;
          }
          .svc-show__caption {
            padding: 14px 4px 0;
          }
          .svc-show__caption-text { font-size: 13px; }
        }
      `}</style>
    </section>
  );
}

function ServiceContentPlaceholder() {
  return (
    <section className="svc-next">
      <div className="svc-next__inner">
        <div className="svc-next__rule" aria-hidden="true" />
        <div className="svc-next__label">More on this service</div>
        <p className="svc-next__copy">
          Detailed explanation sections will live here, the methodology, the deliverables,
          the way we work, and how it ties to outcomes.
        </p>
      </div>
      <style>{`
        .svc-next {
          padding: 80px 56px 160px;
          background: #ffffff;
        }
        .svc-next__inner {
          max-width: 1080px;
          margin: 0 auto;
        }
        .svc-next__rule {
          width: 48px;
          height: 2px;
          background: #F37137;
          margin-bottom: 20px;
        }
        .svc-next__label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(13, 9, 89, 0.55);
          margin-bottom: 12px;
        }
        .svc-next__copy {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(16px, 1.1vw, 18px);
          line-height: 1.55;
          color: #555;
          margin: 0;
          max-width: 56ch;
        }
        @media (max-width: 768px) {
          .svc-next { padding: 56px 24px 120px; }
        }
      `}</style>
    </section>
  );
}

function Recognition() {
  return (
    <section className="svc-recognition" aria-label="Industry recognition">
      <div className="svc-recognition__inner">
        <p className="svc-recognition__label">Recognized by</p>
        <div className="svc-recognition__badges">
          <img
            className="svc-recognition__badge"
            src="assets/testimonials/watch-list-2026.png"
            alt="2026 Watch List Company, Custom Content Development, Training Industry"
          />
          <img
            className="svc-recognition__badge"
            src="assets/testimonials/badge-2.png"
            alt="Top Content Providers for Custom eLearning 2026, Featured on elearningindustry.com"
          />
        </div>
      </div>
      <style>{`
        .svc-recognition {
          background: #FFFFFF;
          padding: 28px 24px 36px;
        }
        .svc-recognition__inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        .svc-recognition__label {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #6b6883;
        }
        .svc-recognition__badges {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .svc-recognition__badge {
          width: 144px;
          height: auto;
          display: block;
          filter: drop-shadow(0 4px 10px rgba(13, 9, 89, 0.10));
        }
        @media (max-width: 600px) {
          .svc-recognition { padding: 20px 16px 28px; }
          .svc-recognition__inner { gap: 16px; }
          .svc-recognition__badge { width: 114px; }
        }
      `}</style>
    </section>
  );
}

function ServicePage({ service }) {
  const Content = service.contentComponent || ServiceContentPlaceholder;
  const hasSamples = service.samples && service.samples.length > 0;
  // If samplesAfter is set, the showcase strip is inserted between two halves of
  // the intro copy. Used by the Video & Animation page to place the strip right
  // after the "decision made at the brief" line, before the studio explainer.
  const splitIntro = hasSamples && Number.isInteger(service.samplesAfter) && Array.isArray(service.intro);
  const introHead = splitIntro ? service.intro.slice(0, service.samplesAfter) : service.intro;
  const introTail = splitIntro ? service.intro.slice(service.samplesAfter) : null;

  return (
    <>
      <Nav pinned solid />
      {service.banner ? <ServiceBanner title={service.bannerTitle || service.eyebrow} image={service.banner} titleColor={service.bannerTitleColor} /> : null}
      <ServiceHero
        eyebrow={service.banner ? null : service.eyebrow}
        title={service.title}
        intro={introHead}
        hideCta={splitIntro}
      />
      {hasSamples ? (
        <ServiceShowcase samples={service.samples} intervalMs={service.intervalMs || 7000} />
      ) : null}
      {splitIntro ? (
        <ServiceHero intro={introTail} continueIntro />
      ) : null}
      <Content />
      {service.cta ? <CTAOrange {...service.cta} /> : null}
      {service.showRecognition ? <Recognition /> : null}
      <Footer />
    </>
  );
}

// Expose globals for per-service entry scripts
Object.assign(window, { ServicePage, ServiceBanner, ServiceHero, ServiceShowcase, ServiceContentPlaceholder });
