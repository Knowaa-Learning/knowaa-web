// WhoWeAre — scroll-linked 91-frame animation with animated stat counters.
// Replaces the old Industries section.

const { useEffect: useEffectWWA, useRef: useRefWWA } = React;

const FRAME_COUNT_WWA = 91;
const framePathWWA = (n) => `assets/frames/frame-${String(n).padStart(3, '0')}.webp`;

function WhoWeAre() {
  const sectionRef = useRefWWA(null);

  useEffectWWA(() => {
    const section = sectionRef.current;
    if (!section) return;
    const img = section.querySelector('.who-we-are__frame');
    const animEl = section.querySelector('.who-we-are__animation');
    if (!img || !animEl) return;

    for (let i = 1; i <= FRAME_COUNT_WWA; i++) {
      const image = new Image();
      image.src = framePathWWA(i);
    }

    const statData = Array.from(section.querySelectorAll('.who-we-are__stat-number')).map(el => ({
      el,
      target: parseInt(el.dataset.countTo || '0', 10),
      lastDisplayed: -1,
    }));
    statData.forEach(({ el }) => { el.textContent = '+0'; });

    let currentFrame = 1;
    let rafPending = false;

    function computeFrame() {
      const rect = animEl.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const START_AT = 0.25;
      const END_AT = 0.75;
      const rawProgress = 1 - rect.top / viewportH;
      let progress = (rawProgress - START_AT) / (END_AT - START_AT);
      progress = Math.max(0, Math.min(1, progress));

      const frame = Math.max(1, Math.min(FRAME_COUNT_WWA, Math.round(progress * (FRAME_COUNT_WWA - 1)) + 1));
      if (frame !== currentFrame) {
        currentFrame = frame;
        img.src = framePathWWA(frame);
      }

      statData.forEach(stat => {
        const current = Math.round(stat.target * progress);
        if (current !== stat.lastDisplayed) {
          stat.lastDisplayed = current;
          stat.el.textContent = '+' + current.toLocaleString('en-US');
        }
      });
    }

    function onScroll() {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => { computeFrame(); rafPending = false; });
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', onScroll, { passive: true });
          window.addEventListener('resize', onScroll, { passive: true });
          computeFrame();
        } else {
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('resize', onScroll);
        }
      }),
      { rootMargin: '200px 0px' }
    );
    observer.observe(section);
    computeFrame();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="who-we-are" aria-labelledby="who-we-are-title">
      <div className="who-we-are__inner">
        <div className="who-we-are__text">
          <h2 id="who-we-are-title" className="who-we-are__title">Who we are</h2>
          <p className="who-we-are__paragraph">
            We are Knowaa Learning, a custom eLearning provider focused on driving business results. Since 2010, we have partnered with global enterprises to deliver measurable outcomes through learning experiences.
          </p>
          <p className="who-we-are__paragraph">
            We define the business outcome first, then the behaviors required to achieve it. Everything else is designed backward from that answer. Built for the modern learner, our approach reflects how people work today, combining advertising-grade production, research-based methodology, and innovative technology to deliver learning that drives performance.
          </p>

          <a href="/about" className="who-we-are__link">
            More about us <span className="who-we-are__link-arrow" aria-hidden="true">&rsaquo;</span>
          </a>

          <ul className="who-we-are__stats" aria-label="Knowaa at a glance">
            <li className="who-we-are__stat">
              <span className="who-we-are__stat-number" data-count-to="16">+16</span>
              <span className="who-we-are__stat-label">Years</span>
            </li>
            <li className="who-we-are__stat">
              <span className="who-we-are__stat-number" data-count-to="350">+350</span>
              <span className="who-we-are__stat-label">Projects a year</span>
            </li>
            <li className="who-we-are__stat">
              <span className="who-we-are__stat-number" data-count-to="15000">+15,000</span>
              <span className="who-we-are__stat-label">Minutes of learning a year</span>
            </li>
          </ul>
        </div>

        <div className="who-we-are__animation" aria-hidden="true">
          <img className="who-we-are__frame" src="assets/frames/frame-001.webp" alt="" width={900} height={900} />
        </div>
      </div>

      <style>{`
        .who-we-are {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #ffffff;
          color: #111111;
          position: relative;
          overflow: hidden;
          padding: 24px 0 32px;
        }
        .who-we-are__inner {
          max-width: 1680px;
          margin: 0 auto;
          padding: 0 56px;
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 40px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .who-we-are__text { max-width: 620px; }
        .who-we-are__title {
          font-family: 'Poppins', sans-serif;
          font-size: 48px; font-weight: 900; line-height: 1.05;
          letter-spacing: -0.02em; margin: 0 0 24px; color: var(--title, #0B1638);
        }
        .who-we-are__paragraph {
          font-family: 'Poppins', sans-serif;
          font-size: 16px; font-weight: 400; line-height: 1.6;
          margin: 0 0 16px; color: #333333;
        }
        .who-we-are__paragraph:last-of-type { margin-bottom: 0; }
        .who-we-are__link {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 20px;
          font-family: 'Poppins', sans-serif;
          font-size: 16px; font-weight: 700; color: #7C3AED;
          text-decoration: none; transition: color 0.2s ease;
        }
        .who-we-are__link-arrow {
          display: inline-block; font-weight: 700;
          transition: transform 0.2s ease;
        }
        .who-we-are__link:hover { color: #5B21B6; }
        .who-we-are__link:hover .who-we-are__link-arrow { transform: translateX(3px); }
        .who-we-are__stats {
          list-style: none; padding: 0; margin: 40px 0 0;
          display: flex; gap: 40px; flex-wrap: wrap;
          padding-top: 0;
        }
        .who-we-are__stat { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
        .who-we-are__stat-number {
          font-family: 'Poppins', sans-serif;
          font-weight: 900; font-size: 40px; line-height: 1;
          letter-spacing: -0.02em; color: #503594;
        }
        .who-we-are__stat-label {
          font-family: 'Poppins', sans-serif;
          font-weight: 500; font-size: 11px; line-height: 1.2;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: #777777; margin-top: 2px;
        }
        .who-we-are__animation {
          position: relative; aspect-ratio: 1 / 1; width: 100%;
          align-self: center; justify-self: end; max-width: 490px;
          margin-right: -56px;
        }
        .who-we-are__frame { display: block; width: 100%; height: auto; }
        @media (max-width: 900px) {
          .who-we-are { padding: 32px 0; }
          .who-we-are__inner { grid-template-columns: 1fr; gap: 40px; padding: 0 24px; }
          .who-we-are__text { max-width: 100%; }
          .who-we-are__title { font-size: 36px; }
          .who-we-are__paragraph { font-size: 15px; }
          .who-we-are__link { font-size: 15px; margin-top: 16px; }
          .who-we-are__stats { gap: 24px; margin-top: 32px; padding-top: 24px; }
          .who-we-are__stat-number { font-size: 32px; }
          .who-we-are__animation { max-width: 280px; margin-left: auto; margin-right: -24px; }
        }
      `}</style>
    </section>
  );
}

window.WhoWeAre = WhoWeAre;
