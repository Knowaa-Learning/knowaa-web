// CTA — orange section with scroll-driven monitor frame animation.
// All 31 frames are mounted as stacked <img> elements; we toggle opacity
// instead of swapping src, which eliminates decode-flash on scroll.

const { useEffect: useEffectCTA, useRef: useRefCTA, useState: useStateCTA } = React;

const CTA_TOTAL_FRAMES = 31;
const ctaFramePath = (i) =>
  'assets/cta/frames/' + String(i + 1).padStart(3, '0') + '.png';

function CTAOrange({
  heading = 'Better learning,\nSharper teams,\nVisible results.',
  ctaLabel = 'Book a Demo',
  ctaHref = '#contact',
}) {
  const sectionRef = useRefCTA(null);
  const stackRef = useRefCTA(null);
  const [ready, setReady] = useStateCTA(false);
  const [shouldLoad, setShouldLoad] = useStateCTA(false);

  // Respect user's reduced-motion preference: skip the animation entirely
  // and just show a single static frame (the final dashboard).
  const prefersReducedMotion = useRefCTA(
    typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  // Lazy-mount: only start preloading frames when the section is within
  // ~1 viewport of the user. Saves ~530KB of fetches for users who bounce.
  useEffectCTA(() => {
    const sec = sectionRef.current;
    if (!sec) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: '100% 0px 100% 0px' }
    );
    io.observe(sec);
    return () => io.disconnect();
  }, []);

  // Smoothly drive frame index from scroll position.
  useEffectCTA(() => {
    if (!shouldLoad) return;
    const sec = sectionRef.current;
    const stack = stackRef.current;
    if (!sec || !stack) return;

    const imgs = Array.from(stack.querySelectorAll('img[data-frame]'));
    if (!imgs.length) return;

    // Reduced motion: just show the last frame (final state) and skip
    // all the preload + scroll-listener work entirely.
    if (prefersReducedMotion.current) {
      const finalIdx = CTA_TOTAL_FRAMES - 1;
      const im = imgs[finalIdx];
      im.src = im.getAttribute('data-src');
      im.addEventListener('load', () => setReady(true), { once: true });
      return;
    }

    // Load each frame via fetch+blob with retries. This keeps any transient
    // 5xx/empty-response flake from the static server out of the browser's
    // resource_error log (failures only happen inside fetch, where we catch
    // them, instead of via <img src=> which logs to the console).
    let loaded = 0;
    const total = imgs.length;
    const onload = () => {
      loaded += 1;
      if (loaded >= 4) setReady(true);
    };

    let cancelled = false;
    const fetchWithRetry = async (url, tries = 4) => {
      for (let attempt = 0; attempt < tries; attempt++) {
        try {
          const res = await fetch(url + (attempt ? '?r=' + attempt : ''),
            { cache: 'force-cache' });
          if (!res.ok) throw new Error('status ' + res.status);
          const blob = await res.blob();
          if (!blob || blob.size < 100) throw new Error('empty blob');
          return URL.createObjectURL(blob);
        } catch (err) {
          if (attempt === tries - 1) throw err;
          await new Promise((r) => setTimeout(r, 150 * (attempt + 1)));
        }
      }
    };

    (async () => {
      // Frame 0 is already loaded via src= for instant first paint.
      onload();
      // Load the rest in small concurrent batches.
      const queue = imgs.slice(1).map((im) => ({ im, url: im.getAttribute('data-src') }));
      const CONCURRENCY = 4;
      const workers = Array.from({ length: CONCURRENCY }).map(async () => {
        while (!cancelled && queue.length) {
          const job = queue.shift();
          if (!job) break;
          try {
            const blobUrl = await fetchWithRetry(job.url);
            if (cancelled) { URL.revokeObjectURL(blobUrl); return; }
            job.im.addEventListener('load', onload, { once: true });
            job.im.src = blobUrl;
          } catch (e) {
            // Final fallback: just point at the original URL and accept
            // whatever the browser does (worst case: that frame is skipped
            // and the next one shows).
            job.im.src = job.url;
            onload();
          }
        }
      });
      await Promise.all(workers);
    })();

    const cleanupLoader = () => { cancelled = true; };

    let targetIdx = 0;
    let currentIdx = 0;
    let lastShownIdx = -1;
    let raf = 0;

    const FINISH_AT_TOP_FRACTION = 0.33;

    const computeTarget = () => {
      const rect = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const animDistance = vh * (1 - FINISH_AT_TOP_FRACTION);
      const scrolled = vh - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / animDistance));
      targetIdx = progress * (CTA_TOTAL_FRAMES - 1);
    };

    const tick = () => {
      // Ease currentIdx toward targetIdx — kills scroll-wheel jitter.
      currentIdx += (targetIdx - currentIdx) * 0.25;
      const idx = Math.round(currentIdx);
      if (idx !== lastShownIdx) {
        if (lastShownIdx >= 0) imgs[lastShownIdx].style.opacity = '0';
        imgs[idx].style.opacity = '1';
        lastShownIdx = idx;
      }
      // Keep ticking until we've settled close enough.
      if (Math.abs(targetIdx - currentIdx) > 0.01) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const kick = () => {
      computeTarget();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', kick);
    // Prime: snap immediately to the correct frame on mount.
    computeTarget();
    currentIdx = targetIdx;
    const idx0 = Math.round(currentIdx);
    imgs[idx0].style.opacity = '1';
    lastShownIdx = idx0;

    return () => {
      cleanupLoader();
      window.removeEventListener('scroll', kick);
      window.removeEventListener('resize', kick);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [shouldLoad]);

  return (
    <div className="kw-cta">
      {/* white spacer above so the monitor can overhang the orange band */}
      <div className="kw-cta__white-above" aria-hidden="true" />

      <section className="kw-cta__band" ref={sectionRef}>
        <div className="kw-cta__inner">
          <div className="kw-cta__copy">
            <h2 className="kw-cta__heading" style={{ whiteSpace: 'pre-line' }}>{heading}</h2>
            <a href={ctaHref} className="kw-cta__btn">{ctaLabel}</a>
          </div>

          <div className="kw-cta__visual" style={{ opacity: ready ? 1 : 0 }}>
            <div className="kw-cta__stack" ref={stackRef}>
              {Array.from({ length: CTA_TOTAL_FRAMES }).map((_, i) => {
                const props = {
                  key: i,
                  'data-frame': i,
                  'data-src': ctaFramePath(i),
                  className: 'kw-cta__frame',
                  alt: i === 0 ? 'Knowaa learning program ROI dashboard' : '',
                  decoding: 'async',
                  draggable: 'false',
                };
                // Only frame 0 gets a src up front; the loader will set the
                // rest. Empty src would resolve to the host page and 404.
                if (i === 0) props.src = ctaFramePath(0);
                return <img {...props} />;
              })}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .kw-cta {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: #ffffff;
          color: #0D0959;
        }
        .kw-cta__white-above {
          background: #ffffff;
          height: clamp(110px, 13vw, 200px);
        }
        .kw-cta__band {
          position: relative;
          width: 100%;
          padding: 56px 0;
          background:
            radial-gradient(ellipse at top right,    rgba(255, 180, 110, 0.55) 0%, rgba(255, 180, 110, 0) 55%),
            radial-gradient(ellipse at bottom left,  rgba(200,  90,  30, 0.45) 0%, rgba(200,  90,  30, 0) 60%),
            linear-gradient(135deg, #EE8A3A 0%, #E5732B 50%, #C8551B 100%);
        }
        .kw-cta__inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 64px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          min-height: 200px;
          position: relative;
        }
        .kw-cta__copy {
          max-width: 520px;
          color: #ffffff;
        }
        .kw-cta__heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(28px, 3.5vw, 44px);
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0 0 28px;
          color: #ffffff;
        }
        .kw-cta__btn {
          display: inline-block;
          background: #ffffff;
          color: #C8551B;
          text-decoration: none;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 16px;
          padding: 14px 30px;
          border-radius: 999px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          box-shadow: 0 6px 20px rgba(80, 25, 0, 0.18);
        }
        .kw-cta__btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(80, 25, 0, 0.25);
        }
        .kw-cta__visual {
          position: relative;
          width: 150%;
          max-width: 960px;
          aspect-ratio: 16 / 9;
          justify-self: end;
          margin-top: -220px;
          margin-bottom: -60px;
          margin-right: -60px;
          transition: opacity 200ms ease;
          filter: drop-shadow(0 30px 60px rgba(80, 25, 0, 0.35));
        }
        .kw-cta__stack {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .kw-cta__frame {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          opacity: 0;
          /* No transition here — instant swap is what we want, and the
             stacked-opacity approach already prevents flicker because the
             next frame is fully decoded before being shown. */
          will-change: opacity;
          user-select: none;
          -webkit-user-drag: none;
        }

        @media (max-width: 960px) {
          .kw-cta__white-above { height: 70px; }
          .kw-cta__band { padding: 40px 0; }
          .kw-cta__inner {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 0 32px;
            min-height: 0;
          }
          .kw-cta__heading { font-size: 28px; }
          .kw-cta__visual {
            justify-self: center;
            width: 100%;
            max-width: 460px;
            margin-top: -80px;
            margin-bottom: -20px;
            margin-right: 0;
          }
        }
      `}</style>
    </div>
  );
}

// Expose globally so app.jsx can mount it.
window.CTAOrange = CTAOrange;
