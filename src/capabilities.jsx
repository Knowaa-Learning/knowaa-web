// Capabilities — "Four practices. One standard." section.
// Sits immediately after WhoWeAre. Integration only; do not modify copy/colors/animations/clip-path.

const { useEffect: useEffectCap, useRef: useRefCap } = React;

function Capabilities() {
  const sectionRef = useRefCap(null);

  useEffectCap(() => {
    const section = sectionRef.current;
    if (!section) return;

    const atmosphere = section.querySelector('.capabilities__atmosphere');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('is-visible');
            section.classList.remove('is-paused');
          } else {
            section.classList.add('is-paused');
          }
        });
      },
      { threshold: 0.05 }
    );
    io.observe(section);

    const onVisibility = () => {
      if (document.hidden) {
        section.classList.add('is-paused');
      } else if (section.getBoundingClientRect().top < window.innerHeight) {
        section.classList.remove('is-paused');
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    let cleanupScroll = () => {};
    if (atmosphere && !reduceMotion) {
      let latestScrollY = window.scrollY;
      let ticking = false;
      let sectionTop = 0;

      const recalc = () => {
        sectionTop = section.getBoundingClientRect().top + window.scrollY;
      };

      const update = () => {
        const sectionMid = sectionTop + section.offsetHeight / 2;
        const viewportMid = latestScrollY + window.innerHeight / 2;
        const distance = viewportMid - sectionMid;
        const offset = distance * 0.3;
        atmosphere.style.transform = `translate3d(0, ${offset}px, 0)`;
        ticking = false;
      };

      const onScroll = () => {
        latestScrollY = window.scrollY;
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      };

      const onResize = () => { recalc(); update(); };

      recalc();
      update();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onResize);

      cleanupScroll = () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onResize);
      };
    }

    // Scroll-driven lift for the 4 cards: always visible, start lower, rise
    // gently toward their resting position as the grid scrolls into view.
    // Left→right stagger (card 1 finishes first, card 4 last).
    let cleanupCards = () => {};
    const grid = section.querySelector('.capabilities__grid');
    if (grid) {
      const cards = Array.from(grid.querySelectorAll('.capabilities__card'));
      if (reduceMotion) {
        cards.forEach((c) => { c.style.transform = 'translate3d(0,0,0)'; });
      } else {
        const MAX_LIFT = 60;           // px offset when card is below the fold
        const STAGGER = 0.12;          // per-card delay as fraction of progress
        let ticking = false;

        const updateCards = () => {
          const vh = window.innerHeight;
          const rect = grid.getBoundingClientRect();
          // progress 0 when grid top sits at 95% of viewport, 1 when at 35%
          const start = vh * 0.95;
          const end = vh * 0.35;
          const raw = (start - rect.top) / (start - end);
          const base = Math.max(0, Math.min(1, raw));

          cards.forEach((card, i) => {
            // each card has its own progress window, offset left→right
            const local = Math.max(0, Math.min(1, (base - i * STAGGER) / (1 - STAGGER * (cards.length - 1))));
            // ease-out cubic
            const eased = 1 - Math.pow(1 - local, 3);
            const y = MAX_LIFT * (1 - eased);
            card.style.transform = `translate3d(0, ${y}px, 0)`;
          });
          ticking = false;
        };

        const onScrollCards = () => {
          if (!ticking) {
            requestAnimationFrame(updateCards);
            ticking = true;
          }
        };

        updateCards();
        window.addEventListener('scroll', onScrollCards, { passive: true });
        window.addEventListener('resize', onScrollCards);
        cleanupCards = () => {
          window.removeEventListener('scroll', onScrollCards);
          window.removeEventListener('resize', onScrollCards);
        };
      }
    }

    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      cleanupScroll();
      cleanupCards();
    };
  }, []);

  return (
    <React.Fragment>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="capabilities-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.06 C 0.33,0.015 0.66,0.002 1,0 L 1,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <section ref={sectionRef} className="capabilities" aria-labelledby="capabilities-heading">
        <div className="capabilities__atmosphere" aria-hidden="true">
          <svg
            className="capabilities__atmosphere-svg"
            viewBox="0 0 1200 900"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect className="atmos atmos--pink-1" x="40" y="80" width="220" height="64" rx="32" fill="#ED1F80" transform="rotate(35 150 112)" />
            <rect className="atmos atmos--violet-1" x="940" y="100" width="240" height="68" rx="34" fill="#7C3AED" transform="rotate(-35 1060 134)" />
            <circle className="atmos atmos--orange-1" cx="380" cy="180" r="34" fill="#F37137" />
            <rect className="atmos atmos--violet-2" x="80" y="640" width="240" height="68" rx="34" fill="#7C3AED" transform="rotate(-35 200 674)" />
            <rect className="atmos atmos--pink-2" x="900" y="660" width="240" height="68" rx="34" fill="#ED1F80" transform="rotate(35 1020 694)" />
            <circle className="atmos atmos--orange-2" cx="820" cy="600" r="38" fill="#F37137" />
          </svg>
        </div>

        <div className="capabilities__container">
          <header className="capabilities__header">
            <h2 id="capabilities-heading" className="capabilities__heading">
              <span className="capabilities__heading-line">Four practices.</span>
              <span className="capabilities__heading-line capabilities__heading-line--alt">One standard.</span>
            </h2>
            <p className="capabilities__subhead">
              Did the behavior change in the business — or didn&apos;t it.
            </p>
          </header>

          <div className="capabilities__grid">
            <a href="/solutions/consulting" className="capabilities__card">
              <span className="capabilities__card-number" aria-hidden="true">01</span>
              <div className="capabilities__icon" aria-hidden="true">
                <img src="assets/capabilities/01-consulting.png" alt="" loading="lazy" />
              </div>
              <div className="capabilities__card-top">
                <h3 className="capabilities__card-title">Consultant services</h3>
                <p className="capabilities__card-slogan">Naming the right problem first.</p>
              </div>
              <div className="capabilities__card-reveal">
                <p className="capabilities__card-body">
                  Most programs are commissioned without naming the business behavior they&apos;re supposed to produce. We start there.
                </p>
                <span className="capabilities__card-arrow" aria-hidden="true">→</span>
              </div>
            </a>

            <a href="/solutions/custom-elearning" className="capabilities__card">
              <span className="capabilities__card-number" aria-hidden="true">02</span>
              <div className="capabilities__icon" aria-hidden="true">
                <img src="assets/capabilities/02-elearning.png" alt="" loading="lazy" />
              </div>
              <div className="capabilities__card-top">
                <h3 className="capabilities__card-title">Custom eLearning</h3>
                <p className="capabilities__card-slogan">The format follows the work.</p>
              </div>
              <div className="capabilities__card-reveal">
                <p className="capabilities__card-body">
                  Microlearning where chunking matches how working memory consolidates. Adaptive paths where prior knowledge varies. Gamification where the work itself rewards practice. Scenarios where the decision is messy. Method chosen by fit, not by trend.
                </p>
                <span className="capabilities__card-arrow" aria-hidden="true">→</span>
              </div>
            </a>

            <a href="/solutions/video-animation" className="capabilities__card">
              <span className="capabilities__card-number" aria-hidden="true">03</span>
              <div className="capabilities__icon" aria-hidden="true">
                <img src="assets/capabilities/03-video-animation.png" alt="" loading="lazy" />
              </div>
              <div className="capabilities__card-top">
                <h3 className="capabilities__card-title">Video &amp; Animation</h3>
                <p className="capabilities__card-slogan">Advertising-grade production for learning.</p>
              </div>
              <div className="capabilities__card-reveal">
                <p className="capabilities__card-body">
                  Built to the standard people see in their feeds — because that&apos;s the standard the learner is comparing against.
                </p>
                <span className="capabilities__card-arrow" aria-hidden="true">→</span>
              </div>
            </a>

            <a href="/solutions/campaigns" className="capabilities__card">
              <span className="capabilities__card-number" aria-hidden="true">04</span>
              <div className="capabilities__icon" aria-hidden="true">
                <img src="assets/capabilities/04-campaigns.png" alt="" loading="lazy" />
              </div>
              <div className="capabilities__card-top">
                <h3 className="capabilities__card-title">Learning campaigns</h3>
                <p className="capabilities__card-slogan">Behavior over time, not the event once.</p>
              </div>
              <div className="capabilities__card-reveal">
                <p className="capabilities__card-body">
                  Multi-touch campaigns that reinforce behavior across weeks of real work — emails, micro-content, nudges, reminders.
                </p>
                <span className="capabilities__card-arrow" aria-hidden="true">→</span>
              </div>
            </a>
          </div>
        </div>

        <style>{`
          .capabilities {
            position: relative;
            z-index: 5;
            background-color: #503594;
            color: #ffffff;
            font-family: 'Urbanist', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            clip-path: url(#capabilities-clip);
            padding: 168px 24px 40px;
            margin-top: -48px;
            overflow: hidden;
          }
          .capabilities__atmosphere {
            position: absolute; inset: 0; z-index: 0; pointer-events: none;
            opacity: 0; transition: opacity 1.4s ease-out;
            will-change: transform, opacity;
          }
          .capabilities.is-visible .capabilities__atmosphere { opacity: 1; }
          .capabilities__atmosphere-svg {
            width: 100%; height: 100%; display: block;
            filter: blur(75px); opacity: 0.55;
          }
          .atmos {
            transform-origin: center;
            transform-box: fill-box;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            animation-direction: alternate;
          }
          .atmos--pink-1   { animation: atmos-drift-a 14s infinite; }
          .atmos--violet-1 { animation: atmos-drift-b 17s infinite; animation-delay: -3s; }
          .atmos--orange-1 { animation: atmos-drift-c 12s infinite; animation-delay: -5s; }
          .atmos--violet-2 { animation: atmos-drift-d 15s infinite; animation-delay: -2s; }
          .atmos--pink-2   { animation: atmos-drift-e 16s infinite; animation-delay: -7s; }
          .atmos--orange-2 { animation: atmos-drift-f 13s infinite; animation-delay: -4s; }
          @keyframes atmos-drift-a { 0% { transform: translate(0, 0) rotate(0deg) scale(1); } 50% { transform: translate(140px, 80px) rotate(18deg) scale(1.18); } 100% { transform: translate(60px, -50px) rotate(-10deg) scale(0.88); } }
          @keyframes atmos-drift-b { 0% { transform: translate(0, 0) rotate(0deg) scale(1); } 50% { transform: translate(-160px, 90px) rotate(-22deg) scale(1.22); } 100% { transform: translate(-70px, -30px) rotate(14deg) scale(0.86); } }
          @keyframes atmos-drift-c { 0% { transform: translate(0, 0) scale(1); } 50% { transform: translate(110px, -120px) scale(1.45); } 100% { transform: translate(-80px, 60px) scale(0.7); } }
          @keyframes atmos-drift-d { 0% { transform: translate(0, 0) rotate(0deg) scale(1); } 50% { transform: translate(130px, -90px) rotate(16deg) scale(1.20); } 100% { transform: translate(-60px, 70px) rotate(-12deg) scale(0.88); } }
          @keyframes atmos-drift-e { 0% { transform: translate(0, 0) rotate(0deg) scale(1); } 50% { transform: translate(-150px, -80px) rotate(-20deg) scale(1.18); } 100% { transform: translate(90px, 40px) rotate(12deg) scale(0.9); } }
          @keyframes atmos-drift-f { 0% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-130px, 110px) scale(1.5); } 100% { transform: translate(70px, -60px) scale(0.65); } }
          .capabilities.is-paused .atmos { animation-play-state: paused; }

          .capabilities__container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 2; }

          /* Cards are always visible; JS applies a translateY that eases to 0
             as the grid scrolls into view, staggered left→right. */
          .capabilities__card {
            will-change: transform;
          }

          .capabilities__header { max-width: 1100px; margin: 0 0 88px; }
          .capabilities__heading {
            font-size: clamp(3rem, 7vw, 6rem);
            font-weight: 900; color: #ffffff;
            line-height: 0.95; letter-spacing: -0.025em; margin: 0 0 28px;
          }
          .capabilities__heading-line { display: block; }
          .capabilities__heading-line--alt { color: rgba(255, 255, 255, 0.55); }
          .capabilities__subhead {
            font-size: clamp(1rem, 1.25vw, 1.125rem);
            font-weight: 400; color: rgba(255, 255, 255, 0.78);
            line-height: 1.5; margin: 0; max-width: 640px; font-style: italic;
          }

          .capabilities__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }

          .capabilities__card {
            display: flex; flex-direction: column; align-items: center; text-align: center;
            padding: 28px 16px 0; background: transparent; text-decoration: none; color: inherit;
            position: relative; min-height: 0; min-width: 0;
            transition: transform 0.3s ease;
          }

          .capabilities__card-number {
            font-family: 'Urbanist', sans-serif;
            font-size: clamp(2.25rem, 3.5vw, 3rem);
            font-weight: 300; color: rgba(255, 255, 255, 0.45);
            line-height: 1; margin: 0 0 28px;
            letter-spacing: -0.015em;
            font-variant-numeric: tabular-nums;
            display: block;
            transition: color 0.3s ease;
          }

          .capabilities__icon { width: 100%; max-width: 320px; margin: 0 0 20px; display: block; transition: transform 0.3s ease; }
          .capabilities__icon img { width: 100%; height: auto; display: block; filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.18)); }

          .capabilities__card-top { display: flex; flex-direction: column; align-items: center; gap: 10px; }
          .capabilities__card-title {
            font-size: 1.5rem; font-weight: 700; color: #ffffff;
            line-height: 1.2; letter-spacing: -0.005em; margin: 0;
            transition: color 0.25s ease;
          }
          .capabilities__card-slogan {
            font-size: 0.9375rem; font-weight: 400; font-style: italic;
            color: rgba(255, 255, 255, 0.78); line-height: 1.4; margin: 0;
          }

          .capabilities__card-reveal {
            margin-top: 20px; opacity: 0; transform: translateY(8px);
            transition: opacity 0.3s ease, transform 0.3s ease;
            display: flex; flex-direction: column; align-items: flex-start;
            text-align: left; gap: 16px; width: 100%;
          }
          .capabilities__card-body {
            font-size: 0.9375rem; font-weight: 400;
            color: rgba(255, 255, 255, 0.92); line-height: 1.6; margin: 0;
          }
          .capabilities__card-arrow {
            font-size: 1.375rem; color: #ffffff; font-weight: 700;
            align-self: flex-start; transition: transform 0.3s ease;
          }

          @media (hover: hover) {
            .capabilities__card:hover { transform: translateY(-4px); }
            .capabilities__card:hover .capabilities__card-number { color: rgba(255, 255, 255, 0.9); }
            .capabilities__card:hover .capabilities__card-reveal { opacity: 1; transform: translateY(0); }
            .capabilities__card:hover .capabilities__card-arrow { transform: translateX(6px); }
            .capabilities__card:hover .capabilities__icon { transform: translateY(-2px); }
          }

          .capabilities__card:focus-visible { outline: 2px solid #ffffff; outline-offset: 6px; }
          .capabilities__card:focus-visible .capabilities__card-reveal { opacity: 1; transform: translateY(0); }
          @media (hover: none) {
            .capabilities__card-reveal { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 960px) {
            .capabilities { padding: 128px 20px 32px; margin-top: -40px; }
            .capabilities__header { margin-bottom: 56px; }
            .capabilities__grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
            .capabilities__card { min-height: 0; }
          }

          @media (max-width: 640px) {
            .capabilities { padding: 88px 20px 24px; margin-top: -24px; }
            .capabilities__header { margin-bottom: 48px; }
            .capabilities__grid { grid-template-columns: 1fr; gap: 8px; }
            .capabilities__card { min-height: 0; padding: 32px 0 28px; }
          }

          @media (prefers-reduced-motion: reduce) {
            .atmos { animation: none !important; }
            .capabilities__atmosphere { transition: none; }
            .capabilities__card, .capabilities__icon, .capabilities__card-arrow, .capabilities__card-reveal { transition: none; }
            .capabilities__card:hover { transform: none; }
            .capabilities__card-reveal { opacity: 1; transform: none; }
            .capabilities__card { opacity: 1 !important; transform: none !important; transition: none !important; }
          }
        `}</style>
      </section>
    </React.Fragment>
  );
}

window.Capabilities = Capabilities;
