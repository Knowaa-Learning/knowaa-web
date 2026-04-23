const { useState: useStateTest, useEffect: useEffectTest, useRef: useRefTest } = React;

// NOTE: This carousel has NO manual controls by design — no arrows, no dots,
// no keyboard, no swipe. Auto-advance only, with pause-on-hover.

const TESTIMONIALS = [
  {
    quote:
      "The training videos are among the best I've seen. Engaging scripts, talented actors, and an overall incredible vibe. Their dedication, creativity, and collaboration with the compliance team resulted in engaging and impactful content.",
    name: 'Vic Torubaeva',
    role: 'Senior Learning Designer & Project Management · monday.com',
    initials: 'VT',
    gradient: ['#7C3AED', '#ED1F80'],
    avatarSrc: 'assets/testimonials/avatars/avatar-vic.jpg',
    companyLogoSrc: 'assets/testimonials/logos/logo-monday.png',
    companyLogoAlt: 'monday.com',
  },
  {
    quote:
      'Knowaa has the best service. Super friendly and always there when you need them. And the quality? Next level. You really feel the difference when you watch their training videos.',
    name: 'Nurit Hevron',
    role: 'Employee Learning & Development, HR · Teva',
    initials: 'NH',
    gradient: ['#503594', '#7C3AED'],
    avatarSrc: 'assets/testimonials/avatars/avatar-nurit.jpg',
    companyLogoSrc: 'assets/testimonials/logos/logo-teva.png',
    companyLogoAlt: 'Teva',
  },
  {
    quote:
      'Knowaa was a meaningful partner in transforming our training program. They brought fresh, new perspectives to the table, resulting in a customized solution that fit our needs perfectly. The project was a huge success, significantly boosting employee engagement.',
    name: 'Guy Laufer',
    role: 'VP of Global Digital Learning & Development · McCann Worldgroup',
    initials: 'GL',
    gradient: ['#F37137', '#ED1F80'],
    avatarSrc: 'assets/testimonials/avatars/avatar-guy.jpg',
    companyLogoSrc: 'assets/testimonials/logos/logo-mccann.png',
    companyLogoAlt: 'McCann Worldgroup',
  },
  {
    quote:
      "The training videos are some of the best I've seen. Engaging scripts, talented actors, and an incredible vibe. Kudos to the compliance and creative teams.",
    name: 'Avi Shussheim',
    role: 'Global Training & Learning · AT&T',
    initials: 'AS',
    gradient: ['#7C3AED', '#503594'],
    avatarSrc: 'assets/testimonials/avatars/avatar-avi.jpg',
  },
];

const AUTO_ADVANCE_MS = 6000;

function Testimonials() {
  const sectionRef = useRefTest(null);
  const carouselRef = useRefTest(null);
  const [current, setCurrent] = useStateTest(0);
  const [paused, setPaused] = useStateTest(false);
  const [avatarError, setAvatarError] = useStateTest({});
  const [logoError, setLogoError] = useStateTest({});

  const total = TESTIMONIALS.length;

  useEffectTest(() => {
    const section = sectionRef.current;
    if (!section) return;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      section.classList.add('is-revealed');
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('is-revealed');
            obs.unobserve(section);
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  useEffectTest(() => {
    if (paused) return;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;
    const id = window.setInterval(
      () => setCurrent((c) => (c + 1) % total),
      AUTO_ADVANCE_MS
    );
    return () => window.clearInterval(id);
  }, [paused, total]);

  // Pause auto-advance when the browser tab is hidden.
  useEffectTest(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  const getPos = (i) => {
    const diff = (i - current + total) % total;
    if (diff === 0) return 'active';
    if (diff === 1) return 'next';
    if (diff === total - 1) return 'prev';
    if (diff < total / 2) return 'hidden-right';
    return 'hidden-left';
  };

  return (
    <section
      ref={sectionRef}
      className="kw-testimonials"
      aria-labelledby="kw-testimonials-title"
    >
      <div className="kw-bg" aria-hidden="true">
        <svg
          className="kw-bg-shapes"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="kw-glow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#503594" stopOpacity="0" />
            </radialGradient>
            {/* The 6 logo shapes, each as its own symbol. Taken verbatim from the brand AI file. */}
            <symbol id="kw-s1" viewBox="244.67 36.21 16.69 16.69">
              <path fill="#ffffff" d="M 261.08 44.05 C 261.36 48.51 257.97 52.34 253.52 52.62 C 249.06 52.90 245.23 49.52 244.95 45.06 C 244.67 40.61 248.06 36.77 252.51 36.49 C 256.97 36.21 260.80 39.60 261.08 44.05 Z" />
            </symbol>
            <symbol id="kw-s2" viewBox="57.00 38.65 16.69 16.68">
              <path fill="#ffffff" d="M 73.41 46.49 C 73.69 50.94 70.30 54.78 65.85 55.05 C 61.39 55.33 57.55 51.95 57.28 47.49 C 57.00 43.04 60.39 39.20 64.84 38.93 C 69.30 38.65 73.13 42.03 73.41 46.49 Z" />
            </symbol>
            <symbol id="kw-s3" viewBox="21.89 30.20 31.05 34.61">
              <path fill="#ffffff" d="M 49.13 62.75 C 46.39 64.76 42.94 64.81 41.18 62.88 L 23.85 43.68 C 21.89 41.52 22.82 37.76 25.87 35.52 L 30.05 32.44 C 33.10 30.20 36.97 30.43 38.46 32.94 L 51.61 55.21 C 52.94 57.46 51.86 60.74 49.13 62.75 Z" />
            </symbol>
            <symbol id="kw-s4" viewBox="267.46 29.36 30.67 36.83">
              <path fill="#ffffff" d="M 270.85 31.09 C 273.37 29.36 276.69 29.72 278.48 31.90 L 296.14 53.52 C 298.13 55.96 297.43 59.68 294.62 61.61 L 290.76 64.26 C 287.95 66.19 284.22 65.50 282.66 62.76 L 268.86 38.50 C 267.46 36.05 268.33 32.82 270.85 31.09 Z" />
            </symbol>
            <symbol id="kw-s5" viewBox="116.64 18.22 35.56 43.42">
              <path fill="#ffffff" d="M 121.59 59.57 C 118.19 57.50 116.64 53.68 118.04 50.79 L 131.84 22.22 C 133.39 19.00 137.97 18.22 141.77 20.53 L 146.98 23.70 C 150.78 26.02 152.20 30.43 150.05 33.30 L 131.03 58.69 C 129.11 61.26 125.00 61.64 121.59 59.57 Z" />
            </symbol>
            <symbol id="kw-s6" viewBox="177.36 27.89 31.10 34.86">
              <path fill="#ffffff" d="M 203.50 29.96 C 206.91 32.03 208.46 35.86 207.07 38.74 L 197.71 58.75 C 196.16 61.97 191.58 62.75 187.79 60.44 L 182.57 57.27 C 178.77 54.96 177.36 50.54 179.50 47.68 L 194.07 30.84 C 195.99 28.27 200.10 27.89 203.50 29.96 Z" />
            </symbol>
          </defs>
          <rect width="1600" height="900" fill="url(#kw-glow)" />
          {/* Each shape placed individually across the section at varied sizes and rotations */}
          <g>
            <use href="#kw-s1" x="100"  y="140" width="54"  height="54"  opacity="0.14" />
            <use href="#kw-s1" x="1340" y="560" width="44"  height="44"  opacity="0.11" />
            <use href="#kw-s1" x="820"  y="780" width="32"  height="32"  opacity="0.12" />
            <use href="#kw-s1" x="1100" y="180" width="38"  height="38"  opacity="0.13" />
            <use href="#kw-s1" x="620"  y="520" width="30"  height="30"  opacity="0.11" />
            <use href="#kw-s1" x="1520" y="420" width="42"  height="42"  opacity="0.12" />
            <use href="#kw-s1" x="360"  y="820" width="28"  height="28"  opacity="0.10" />
            <use href="#kw-s2" x="480"  y="80"  width="50"  height="50"  opacity="0.13" />
            <use href="#kw-s2" x="1460" y="220" width="36"  height="36"  opacity="0.10" />
            <use href="#kw-s2" x="260"  y="660" width="40"  height="40"  opacity="0.12" />
            <use href="#kw-s2" x="200"  y="480" width="34"  height="34"  opacity="0.12" />
            <use href="#kw-s2" x="950"  y="290" width="26"  height="26"  opacity="0.10" />
            <use href="#kw-s2" x="400"  y="230" width="36"  height="36"  opacity="0.13" />
            <use href="#kw-s2" x="1240" y="760" width="40"  height="40"  opacity="0.11" />
            <use href="#kw-s2" x="760"  y="420" width="24"  height="24"  opacity="0.10" />
            <use href="#kw-s3" x="-30"  y="350" width="140" height="156" opacity="0.09" transform="rotate(18 40 428)" />
            <use href="#kw-s3" x="980"  y="60"  width="120" height="134" opacity="0.08" transform="rotate(-40 1040 127)" />
            <use href="#kw-s3" x="440"  y="700" width="110" height="122" opacity="0.09" transform="rotate(135 495 761)" />
            <use href="#kw-s3" x="720"  y="540" width="100" height="111" opacity="0.07" transform="rotate(150 770 595)" />
            <use href="#kw-s4" x="1380" y="30"  width="150" height="180" opacity="0.09" transform="rotate(195 1455 120)" />
            <use href="#kw-s4" x="170"  y="640" width="110" height="132" opacity="0.08" transform="rotate(70 225 706)" />
            <use href="#kw-s4" x="870"  y="400" width="100" height="120" opacity="0.07" transform="rotate(-85 920 460)" />
            <use href="#kw-s5" x="580"  y="160" width="160" height="196" opacity="0.07" transform="rotate(-25 660 258)" />
            <use href="#kw-s5" x="1200" y="640" width="130" height="159" opacity="0.08" transform="rotate(55 1265 719)" />
            <use href="#kw-s5" x="-20"  y="120" width="130" height="159" opacity="0.07" transform="rotate(45 45 199)" />
            <use href="#kw-s6" x="1080" y="360" width="130" height="146" opacity="0.08" transform="rotate(12 1145 433)" />
            <use href="#kw-s6" x="320"  y="60"  width="130" height="146" opacity="0.07" transform="rotate(-50 385 133)" />
            <use href="#kw-s6" x="60"   y="780" width="110" height="124" opacity="0.09" transform="rotate(105 115 842)" />
            <use href="#kw-s6" x="1260" y="180" width="115" height="128" opacity="0.08" transform="rotate(-110 1317 244)" />
            <use href="#kw-s6" x="540"  y="400" width="100" height="112" opacity="0.06" transform="rotate(80 590 456)" />
          </g>
        </svg>
      </div>

      <div className="kw-container">
        <div className="kw-grid">
          <div className="kw-left">
            <h2 id="kw-testimonials-title" className="kw-title">
              What our clients say about working with us.
            </h2>

            <div
              ref={carouselRef}
              className="kw-carousel"
              role="region"
              aria-roledescription="carousel"
              aria-label="Client testimonials"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="kw-deck" aria-live="polite">
                {TESTIMONIALS.map((t, i) => {
                  const pos = getPos(i);
                  const showImg = t.avatarSrc && !avatarError[i];
                  const showLogo = t.companyLogoSrc && !logoError[i];
                  return (
                    <article
                      key={t.name}
                      className="kw-card"
                      data-pos={pos}
                      aria-hidden={pos !== 'active'}
                    >
                      <header className="kw-card-head">
                        {showImg ? (
                          <img
                            className="kw-avatar kw-avatar-img"
                            src={t.avatarSrc}
                            alt=""
                            onError={() =>
                              setAvatarError((s) => ({ ...s, [i]: true }))
                            }
                          />
                        ) : (
                          <div
                            className="kw-avatar"
                            style={{
                              '--avatar-a': t.gradient[0],
                              '--avatar-b': t.gradient[1],
                            }}
                          >
                            {t.initials}
                          </div>
                        )}
                        <div className="kw-person-text">
                          <p className="kw-name">{t.name}</p>
                          <p className="kw-role">{t.role}</p>
                        </div>
                      </header>
                      <blockquote className="kw-quote">{t.quote}</blockquote>
                      {showLogo && (
                        <img
                          className="kw-company-logo"
                          src={t.companyLogoSrc}
                          alt={t.companyLogoAlt || ''}
                          onError={() =>
                            setLogoError((s) => ({ ...s, [i]: true }))
                          }
                        />
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="kw-award" aria-label="Industry recognition">
            <p className="kw-award-eyebrow">Recognized by</p>
            <div className="kw-badge-wrap">
              <div className="kw-badge-glow" aria-hidden="true" />
              <img
                className="kw-badge"
                src="assets/testimonials/watch-list-2026.png"
                alt="2026 Watch List Company — Custom Content Development — Training Industry"
              />
            </div>
            <p className="kw-award-caption">2026 Watch List Company</p>
            <p className="kw-award-sub">
              Custom Content Development · Training Industry
            </p>
          </aside>
        </div>
      </div>

      <style>{`
        /* Testimonials section */
        .kw-testimonials {
          position: relative;
          overflow: hidden;
          background: linear-gradient(90deg, #503594 0%, #503594 40%, #7C5BE0 80%, #9B7BF0 100%);
          padding: 48px 0 104px;
          color: #fff;
          font-family: 'Poppins', system-ui, sans-serif;
          isolation: isolate;
        }
        .kw-testimonials::before,
        .kw-testimonials::after {
          content: '';
          position: absolute; left: 0; right: 0;
          height: 56px; pointer-events: none; z-index: 2;
        }
        .kw-testimonials::before {
          top: 0;
          background: transparent;
        }
        .kw-testimonials::after {
          bottom: 0;
          background: transparent;
        }

        .kw-bg {
          position: absolute; inset: 0; z-index: 0;
          pointer-events: none; overflow: hidden;
        }
        .kw-bg-shapes {
          display: none; /* shapes removed per design direction */
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          animation: kw-drift 22s ease-in-out infinite alternate;
        }
        @keyframes kw-drift {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          100% { transform: translate3d(-14px, 8px, 0) scale(1.02); }
        }

        .kw-container {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          padding: 0 40px;
        }

        .kw-title {
          margin: 0 auto;
          font-size: clamp(26px, 3.2vw, 40px);
          line-height: 1.1; font-weight: 900;
          letter-spacing: -0.01em; color: #fff;
          max-width: 520px;
          text-align: center;
        }

        .kw-grid {
          display: grid;
          grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
          gap: 0;
          align-items: center;
        }
        .kw-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* Carousel */
        .kw-carousel { position: relative; padding: 0; min-height: 200px; outline: none; }
        .kw-deck { position: relative; height: 200px; perspective: 1600px; transform-style: preserve-3d; }
        .kw-card {
          position: absolute; top: 0; left: 50%;
          width: 100%; max-width: 460px;
          height: 100%;
          transform: translateX(-50%);
          padding: 14px 20px 16px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 14px;
          color: #333333;
          box-shadow:
            0 1px 2px rgba(0, 0, 0, 0.04),
            0 8px 20px rgba(0, 0, 0, 0.08);
          opacity: 0; pointer-events: none;
          transition:
            transform 0.85s cubic-bezier(0.4, 0, 0.2, 1),
            opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1),
            border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, opacity;
          display: flex; flex-direction: column;
        }
        .kw-card[data-pos='active'] {
          transform: translate(-50%, 0) scale(1);
          opacity: 1; pointer-events: auto; z-index: 3;
          border-color: rgba(0, 0, 0, 0.10);
          box-shadow:
            0 2px 4px rgba(0, 0, 0, 0.06),
            0 14px 36px rgba(0, 0, 0, 0.14);
        }
        .kw-card[data-pos='next'] {
          transform: translate(calc(-50% + 30%), 0) scale(0.92);
          opacity: 0.5; z-index: 2;
        }
        .kw-card[data-pos='prev'] {
          transform: translate(calc(-50% - 30%), 0) scale(0.92);
          opacity: 0.32; z-index: 1;
        }
        .kw-card[data-pos='hidden-left'] {
          transform: translate(calc(-50% - 85%), 0) scale(0.88); opacity: 0; z-index: 0;
        }
        .kw-card[data-pos='hidden-right'] {
          transform: translate(calc(-50% + 85%), 0) scale(0.88); opacity: 0; z-index: 0;
        }

        .kw-card-head {
          display: flex; align-items: center; gap: 10px; margin-bottom: 10px;
        }
        .kw-avatar {
          flex: 0 0 auto;
          width: 34px; height: 34px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-weight: 700; font-size: 12px; letter-spacing: 0.02em;
          background: linear-gradient(135deg, var(--avatar-a, #7C3AED), var(--avatar-b, #ED1F80));
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3);
          overflow: hidden;
        }
        .kw-avatar-img { object-fit: cover; }
        .kw-person-text { min-width: 0; line-height: 1.2; }
        .kw-name { margin: 0 0 1px; font-size: 15px; font-weight: 700; color: #111111; letter-spacing: 0.01em; }
        .kw-role { margin: 0; font-size: 11px; line-height: 1.3; color: #777777; }

        .kw-quote {
          margin: 0;
          font-size: 15px; line-height: 1.45; font-weight: 400;
          color: #333333; flex: 1; font-style: normal;
        }

        .kw-company-logo {
          position: absolute;
          bottom: 10px;
          right: 14px;
          height: 28px;
          width: auto;
          max-width: 140px;
          opacity: 0.9;
          pointer-events: none;
          user-select: none;
        }

        /* Award panel */
        .kw-award {
          position: relative;
          padding: 0;
          background: transparent;
          border: none;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
        }
        .kw-award-eyebrow {
          margin: 0 0 14px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
        }
        .kw-badge-wrap {
          position: relative; display: flex;
          align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .kw-badge-glow { display: none; }
        .kw-badge {
          position: relative;
          width: 220px; height: auto; display: block;
          filter: drop-shadow(0 14px 28px rgba(0, 0, 0, 0.32)) drop-shadow(0 3px 6px rgba(0, 0, 0, 0.2));
        }
        .kw-award-caption {
          margin: 0 0 3px; font-size: 17.5px; font-weight: 700;
          color: #fff; letter-spacing: 0.01em;
        }
        .kw-award-sub {
          margin: 0; font-size: 12px;
          color: rgba(255, 255, 255, 0.65); line-height: 1.45;
        }

        /* Entrance reveal */
        .kw-testimonials .kw-title,
        .kw-testimonials .kw-carousel,
        .kw-testimonials .kw-award {
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.22, 0.61, 0.36, 1), transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        .kw-testimonials .kw-award                { transform: translateY(80px); }
        .kw-testimonials.is-revealed .kw-title    { opacity: 1; transform: none; transition-delay: 0.05s; }
        .kw-testimonials.is-revealed .kw-carousel { opacity: 1; transform: none; transition-delay: 0.20s; }
        .kw-testimonials.is-revealed .kw-award    { opacity: 1; transform: translateY(60px); transition-delay: 0.35s; }

        @media (max-width: 1024px) {
          .kw-grid { grid-template-columns: 1fr; gap: 28px; }
          .kw-testimonials .kw-award             { transform: none; }
          .kw-testimonials.is-revealed .kw-award { transform: none; }
          .kw-card[data-pos='prev'] { opacity: 0.22; }
          .kw-card[data-pos='next'] { opacity: 0.35; }
        }
        @media (max-width: 720px) {
          .kw-testimonials { padding: 40px 0 88px; }
          .kw-container { padding: 0 20px; }
          .kw-left { gap: 16px; }
          .kw-carousel { min-height: 240px; }
          .kw-deck { height: 230px; }
          .kw-card { max-width: calc(100% - 16px); padding: 14px 18px 14px; }
          .kw-quote { font-size: 15px; }
          .kw-card[data-pos='prev'],
          .kw-card[data-pos='next'] { opacity: 0; pointer-events: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .kw-bg-shapes { animation: none; }
          .kw-testimonials .kw-title,
          .kw-testimonials .kw-carousel {
            opacity: 1; transform: none; transition: none;
          }
          .kw-testimonials .kw-award {
            opacity: 1; transform: translateY(60px); transition: none;
          }
          .kw-card { transition-duration: 0.2s; }
        }
      `}</style>
    </section>
  );
}
