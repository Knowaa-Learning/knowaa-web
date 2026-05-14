// Hero — edge-to-edge video contained in a rounded frame with white margin.
// Style modeled on ELB Learning: white page, inset video panel, overlay headline + CTAs.

const { useState: useStateH, useEffect: useEffectH, useRef: useRefH } = React;

function TypedLoop({ words, typeSpeed = 65, deleteSpeed = 35, pauseFull = 1400, pauseEmpty = 300 }) {
  const [i, setI] = useStateH(0);
  const [text, setText] = useStateH('');
  const [phase, setPhase] = useStateH('typing'); // typing | pausing | deleting

  useEffectH(() => {
    let t;
    const current = words[i];
    if (phase === 'typing') {
      if (text.length < current.length) {
        t = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        t = setTimeout(() => setPhase('deleting'), pauseFull);
      }
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        t = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
      } else {
        t = setTimeout(() => {
          setI((i + 1) % words.length);
          setPhase('typing');
        }, pauseEmpty);
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, i, words]);

  return (
    <span style={{ display: 'inline-block' }}>
      {text}
      <span
        aria-hidden
        style={{
          display: 'inline-block',
          width: '0.06em',
          height: '0.9em',
          marginLeft: '0.06em',
          background: '#FFFFFF',
          verticalAlign: '-0.08em',
          animation: 'caretBlink 1s steps(1) infinite',
        }}
      />
      <style>{`@keyframes caretBlink { 50% { opacity: 0; } }`}</style>
    </span>
  );
}

function Hero({ tweaks }) {
  const [mounted, setMounted] = useStateH(false);
  const videoRef = useRefH(null);

  useEffectH(() => {
    const r = requestAnimationFrame(() => setMounted(true));
    const t = setTimeout(() => setMounted(true), 80);
    return () => { cancelAnimationFrame(r); clearTimeout(t); };
  }, []);

  return (
    <section
      style={{
        position: 'relative',
      }}
    >
      <div
        className="hero-video-well"
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(680px, 81vh, 940px)',
          minHeight: '680px',
          overflow: 'hidden',
          background: '#0A0A0A',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'scale(1)' : 'scale(0.995)',
          transition: 'opacity 0.9s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1)',
        }}
      >
        {/* Video well */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="assets/hero-poster.jpg"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        >
          {/* Drop your video at assets/hero.mp4 when ready */}
          <source src={`assets/hero.mp4?v=${Date.now()}`} type="video/mp4" />
        </video>

        {/* Legibility scrim — stronger at bottom for copy */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0) 30%, rgba(10,10,10,0) 50%, rgba(10,10,10,0.55) 100%)',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: 'clamp(28px, 4vw, 56px)',
            color: '#FFFFFF',
          }}
        >
          {/* Headline + typing loop */}
          <h1
            className="hero-h1"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(34px, 3.4vw, 44px)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0,
              maxWidth: '22ch',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(28px)',
              transition: 'all 1s cubic-bezier(.2,.7,.2,1) 0.15s',
            }}
          >
            <span className="hero-h1-line1" style={{ display: 'block', whiteSpace: 'nowrap' }}>Drive Real Business Results Through</span>
            <span style={{ display: 'block', color: '#FFFFFF', minHeight: '1.1em' }}>
              <TypedLoop words={[
                'Innovative Learning',
                'Microlearning',
                'Personalized Learning',
                'Gamified Learning',
                'AI-Infused Learning',
                'Learning Campaigns',
              ]} />
            </span>
          </h1>

          {/* CTAs row — under the headline, left-aligned */}
          <div
            style={{
              marginTop: 'clamp(28px, 3.5vw, 44px)',
              display: 'flex',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s cubic-bezier(.2,.7,.2,1) 0.35s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0, flexWrap: 'wrap' }}>
              <a
                href="Knowaa Contact.html"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '18px 28px',
                  borderRadius: '999px',
                  background: '#FFFFFF',
                  color: 'var(--ink)',
                  fontSize: '15px',
                  fontWeight: 600,
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 30px -10px rgba(0,0,0,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {tweaks.heroCTA}
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden><path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a
                href="Knowaa Resources.html?type=case"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '18px 26px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: 500,
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <span style={{
                  width: '22px', height: '22px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.95)',
                  color: 'var(--ink)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="8" height="9" viewBox="0 0 8 9" aria-hidden><path d="M1 1 L7 4.5 L1 8 Z" fill="currentColor" /></svg>
                </span>
                {tweaks.heroCTA2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
