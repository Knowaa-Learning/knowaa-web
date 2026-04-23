// Contact page — signature shape pattern, advanced form, Calendly embed.
const { useState: useStateC, useEffect: useEffectC, useRef: useRefC, useMemo: useMemoC } = React;

/* ---------- Signature Shapes background (lifted from testimonials SVG DNA) ---------- */
function SignatureShapes({ palette = 'light' }) {
  const isLight = palette === 'light';
  const isOrange = palette === 'orange';
  const fill = isOrange ? '#ffffff' : (isLight ? '#4A0FB8' : '#ffffff');
  const glowA = isOrange ? '#FFD9B3' : (isLight ? '#FF2D87' : '#7C3AED');
  const glowB = isOrange ? '#FF7A29' : (isLight ? '#4A0FB8' : '#503594');
  const opMul = isOrange ? 1.8 : (isLight ? 1 : 1.2);
  return (
    <svg
      className="ct-shapes"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="ct-glow" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor={glowA} stopOpacity={isLight ? 0.10 : 0.35} />
          <stop offset="55%" stopColor={glowB} stopOpacity="0" />
        </radialGradient>
        <symbol id="ct-s1" viewBox="244.67 36.21 16.69 16.69">
          <path fill={fill} d="M 261.08 44.05 C 261.36 48.51 257.97 52.34 253.52 52.62 C 249.06 52.90 245.23 49.52 244.95 45.06 C 244.67 40.61 248.06 36.77 252.51 36.49 C 256.97 36.21 260.80 39.60 261.08 44.05 Z" />
        </symbol>
        <symbol id="ct-s2" viewBox="57.00 38.65 16.69 16.68">
          <path fill={fill} d="M 73.41 46.49 C 73.69 50.94 70.30 54.78 65.85 55.05 C 61.39 55.33 57.55 51.95 57.28 47.49 C 57.00 43.04 60.39 39.20 64.84 38.93 C 69.30 38.65 73.13 42.03 73.41 46.49 Z" />
        </symbol>
        <symbol id="ct-s3" viewBox="21.89 30.20 31.05 34.61">
          <path fill={fill} d="M 49.13 62.75 C 46.39 64.76 42.94 64.81 41.18 62.88 L 23.85 43.68 C 21.89 41.52 22.82 37.76 25.87 35.52 L 30.05 32.44 C 33.10 30.20 36.97 30.43 38.46 32.94 L 51.61 55.21 C 52.94 57.46 51.86 60.74 49.13 62.75 Z" />
        </symbol>
        <symbol id="ct-s4" viewBox="267.46 29.36 30.67 36.83">
          <path fill={fill} d="M 270.85 31.09 C 273.37 29.36 276.69 29.72 278.48 31.90 L 296.14 53.52 C 298.13 55.96 297.43 59.68 294.62 61.61 L 290.76 64.26 C 287.95 66.19 284.22 65.50 282.66 62.76 L 268.86 38.50 C 267.46 36.05 268.33 32.82 270.85 31.09 Z" />
        </symbol>
        <symbol id="ct-s5" viewBox="116.64 18.22 35.56 43.42">
          <path fill={fill} d="M 121.59 59.57 C 118.19 57.50 116.64 53.68 118.04 50.79 L 131.84 22.22 C 133.39 19.00 137.97 18.22 141.77 20.53 L 146.98 23.70 C 150.78 26.02 152.20 30.43 150.05 33.30 L 131.03 58.69 C 129.11 61.26 125.00 61.64 121.59 59.57 Z" />
        </symbol>
        <symbol id="ct-s6" viewBox="177.36 27.89 31.10 34.86">
          <path fill={fill} d="M 203.50 29.96 C 206.91 32.03 208.46 35.86 207.07 38.74 L 197.71 58.75 C 196.16 61.97 191.58 62.75 187.79 60.44 L 182.57 57.27 C 178.77 54.96 177.36 50.54 179.50 47.68 L 194.07 30.84 C 195.99 28.27 200.10 27.89 203.50 29.96 Z" />
        </symbol>
      </defs>
      <rect width="1600" height="900" fill={isOrange ? 'url(#ct-glow)' : 'url(#ct-glow)'} opacity={isOrange ? 0.6 : 1} />
      <g>
        {/* Dots — small */}
        <use href="#ct-s1" x="100" y="140" width="54" height="54" opacity={isLight ? 0.10 : 0.14} />
        <use href="#ct-s1" x="1340" y="560" width="44" height="44" opacity={isLight ? 0.08 : 0.11} />
        <use href="#ct-s1" x="820" y="780" width="32" height="32" opacity={isLight ? 0.08 : 0.12} />
        <use href="#ct-s1" x="1100" y="180" width="38" height="38" opacity={isLight ? 0.09 : 0.13} />
        <use href="#ct-s1" x="1520" y="420" width="42" height="42" opacity={isLight ? 0.08 : 0.12} />
        <use href="#ct-s2" x="480" y="80" width="50" height="50" opacity={isLight ? 0.09 : 0.13} />
        <use href="#ct-s2" x="1460" y="220" width="36" height="36" opacity={isLight ? 0.07 : 0.10} />
        <use href="#ct-s2" x="260" y="660" width="40" height="40" opacity={isLight ? 0.08 : 0.12} />
        <use href="#ct-s2" x="400" y="230" width="36" height="36" opacity={isLight ? 0.09 : 0.13} />
        <use href="#ct-s2" x="1240" y="760" width="40" height="40" opacity={isLight ? 0.08 : 0.11} />
        {/* Blobs — large */}
        <use href="#ct-s3" x="-30" y="350" width="140" height="156" opacity={isLight ? 0.06 : 0.09} transform="rotate(18 40 428)" />
        <use href="#ct-s3" x="980" y="60" width="120" height="134" opacity={isLight ? 0.05 : 0.08} transform="rotate(-40 1040 127)" />
        <use href="#ct-s3" x="440" y="700" width="110" height="122" opacity={isLight ? 0.06 : 0.09} transform="rotate(135 495 761)" />
        <use href="#ct-s4" x="1380" y="30" width="150" height="180" opacity={isLight ? 0.06 : 0.09} transform="rotate(195 1455 120)" />
        <use href="#ct-s4" x="170" y="640" width="110" height="132" opacity={isLight ? 0.05 : 0.08} transform="rotate(70 225 706)" />
        <use href="#ct-s5" x="580" y="160" width="160" height="196" opacity={isLight ? 0.05 : 0.07} transform="rotate(-25 660 258)" />
        <use href="#ct-s5" x="1200" y="640" width="130" height="159" opacity={isLight ? 0.05 : 0.08} transform="rotate(55 1265 719)" />
        <use href="#ct-s5" x="-20" y="120" width="130" height="159" opacity={isLight ? 0.05 : 0.07} transform="rotate(45 45 199)" />
        <use href="#ct-s6" x="1080" y="360" width="130" height="146" opacity={isLight ? 0.05 : 0.08} transform="rotate(12 1145 433)" />
        <use href="#ct-s6" x="320" y="60" width="130" height="146" opacity={isLight ? 0.05 : 0.07} transform="rotate(-50 385 133)" />
        <use href="#ct-s6" x="60" y="780" width="110" height="124" opacity={isLight ? 0.06 : 0.09} transform="rotate(105 115 842)" />
        <use href="#ct-s6" x="1260" y="180" width="115" height="128" opacity={isLight ? 0.05 : 0.08} transform="rotate(-110 1317 244)" />
      </g>
    </svg>
  );
}

/* ---------- Hero ---------- */
function ContactHero() {
  return (
    <section className="ct-hero">
      <div className="ct-hero__bg" aria-hidden>
        <SignatureShapes palette="orange" />
      </div>
      <div className="ct-hero__inner">
        <p className="ct-hero__eyebrow">Contact</p>
        <h1 className="ct-hero__title">
          Let&rsquo;s build a program that <em>moves</em> behavior.
        </h1>
        <p className="ct-hero__sub">
          Tell us about the capability shift you&rsquo;re after — we&rsquo;ll come back within one business day
          with a clear next step. Prefer to talk live? Pick a slot below.
        </p>
        <div className="ct-hero__jump">
          <a href="#ct-form" className="ct-chip">
            <span className="ct-chip__dot" />
            Start a brief
          </a>
          <a href="#ct-book" className="ct-chip ct-chip--ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="4.5" width="18" height="16" rx="2" />
              <path d="M3 9h18M8 2.5v4M16 2.5v4" />
            </svg>
            Book a 30-min call
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Form (conversational mad-libs) ---------- */
function Blank({ value, placeholder, options, open, onToggle, onPick }) {
  return (
    <span className="ct-blank-wrap">
      <button
        type="button"
        className={`ct-blank ${value ? 'is-filled' : ''} ${open ? 'is-open' : ''}`}
        onClick={(e) => { e.stopPropagation(); onToggle(); }}
      >
        {value || placeholder}
        <svg className="ct-blank__caret" width="10" height="10" viewBox="0 0 10 10" aria-hidden>
          <path d="M2 4 L5 7 L8 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="ct-blank__menu" role="listbox">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              role="option"
              aria-selected={value === opt}
              className={`ct-blank__opt ${value === opt ? 'is-on' : ''}`}
              onClick={(e) => { e.stopPropagation(); onPick(opt); }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </span>
  );
}

const HELP_OPTIONS = [
  'consulting on strategy',
  'a custom eLearning program',
  'a video or animation series',
  'a learning campaign',
  'AI-infused learning',
  'honestly — still figuring it out',
];

const TIMELINE_OPTIONS = ['ASAP', 'in 1–3 months', 'later this year', 'no rush'];

function ContactForm() {
  const [data, setData] = useStateC({
    help: '',
    when: '',
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useStateC(false);
  const [shake, setShake] = useStateC(false);
  const [openMenu, setOpenMenu] = useStateC(null); // 'help' | 'when' | null

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const canSend =
    data.help &&
    data.when &&
    data.name.trim() &&
    /.+@.+\..+/.test(data.email) &&
    data.message.trim().length > 4;

  const onSend = () => {
    if (!canSend) {
      setShake(true);
      setTimeout(() => setShake(false), 420);
      return;
    }
    setSubmitted(true);
  };

  // Close menu on outside click
  useEffectC(() => {
    if (!openMenu) return;
    const close = (e) => {
      if (!e.target.closest('.ct-blank-wrap')) setOpenMenu(null);
    };
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [openMenu]);

  return (
    <section className="ct-form-section" id="ct-form">
      <div className="ct-form-shell">
        {/* Left — intro + human touch */}
        <aside className="ct-rail">
          <p className="ct-rail__eyebrow">Start a conversation</p>
          <h2 className="ct-rail__title">
            Five quick fields.<br />Then a real human replies.
          </h2>
          <p className="ct-rail__lead">
            No long forms. No drip sequences. Just a short note back from a partner who&rsquo;ll actually work on your project.
          </p>

          <div className="ct-rail__team" aria-hidden>
            <span className="ct-avatar ct-avatar--1">AM</span>
            <span className="ct-avatar ct-avatar--2">JK</span>
            <span className="ct-avatar ct-avatar--3">RS</span>
            <span className="ct-rail__team-label">Your first reply within 1 business day</span>
          </div>

          <div className="ct-rail__quote">
            <div className="ct-rail__quote-mark" aria-hidden>&ldquo;</div>
            <p>The team named the real problem in week one &mdash; everything after felt deliberate.</p>
            <span>VP Learning &middot; Fortune 100 healthcare</span>
          </div>
        </aside>

        {/* Right — card */}
        <div className={`ct-card ${shake ? 'ct-card--shake' : ''}`}>
          {!submitted && (
            <div className="ct-card__body">
              {/* Mad-libs sentence */}
              <p className="ct-sentence">
                Hi Knowaa,<br />
                I&rsquo;d love your help with&nbsp;
                <Blank
                  value={data.help}
                  placeholder="what you need"
                  options={HELP_OPTIONS}
                  open={openMenu === 'help'}
                  onToggle={() => setOpenMenu(openMenu === 'help' ? null : 'help')}
                  onPick={(v) => { set('help', v); setOpenMenu(null); }}
                />
                ,&nbsp;ideally starting&nbsp;
                <Blank
                  value={data.when}
                  placeholder="when"
                  options={TIMELINE_OPTIONS}
                  open={openMenu === 'when'}
                  onToggle={() => setOpenMenu(openMenu === 'when' ? null : 'when')}
                  onPick={(v) => { set('when', v); setOpenMenu(null); }}
                />
                .
              </p>

              {/* Short note */}
              <label className="ct-note">
                <textarea
                  rows="3"
                  value={data.message}
                  onChange={(e) => set('message', e.target.value)}
                  placeholder="A sentence or two on what you&rsquo;re trying to shift (optional context — but it helps)."
                />
              </label>

              {/* Identity */}
              <div className="ct-identity">
                <label className="ct-field">
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => set('name', e.target.value)}
                    placeholder="Your name"
                  />
                </label>
                <label className="ct-field">
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => set('email', e.target.value)}
                    placeholder="Work email"
                  />
                </label>
                <label className="ct-field">
                  <input
                    type="text"
                    value={data.company}
                    onChange={(e) => set('company', e.target.value)}
                    placeholder="Company (optional)"
                  />
                </label>
              </div>

              <div className="ct-card__foot">
                <span className="ct-card__meta">
                  <span className="ct-dot ct-dot--live" aria-hidden />
                  We reply within 1 business day
                </span>
                <button type="button" className="ct-primary" onClick={onSend}>
                  Send note
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden><path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>
          )}

          {/* Success */}
          {submitted && (
            <div className="ct-success ct-fade">
              <div className="ct-success__ring" aria-hidden>
                <svg viewBox="0 0 96 96">
                  <circle cx="48" cy="48" r="44" fill="none" stroke="#4A0FB8" strokeWidth="2" />
                  <path d="M28 50 L44 64 L70 34" fill="none" stroke="#4A0FB8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Thanks, {data.name.split(' ')[0] || 'there'}.</h3>
              <p>Your note is with the team. A partner will reply to <strong>{data.email}</strong> within one business day.</p>
              <a className="ct-primary" href="#ct-book">
                Book a 30-min call
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden><path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Divider / split ---------- */
function OrRule() {
  return (
    <div className="ct-or" role="separator" aria-label="or">
      <span className="ct-or__line" />
      <span className="ct-or__text">or jump straight to a call</span>
      <span className="ct-or__line" />
    </div>
  );
}

/* ---------- Calendly ---------- */
function Booking() {
  const ref = useRefC(null);
  const [loaded, setLoaded] = useStateC(false);

  useEffectC(() => {
    // Load Calendly once
    if (window.Calendly) { setLoaded(true); return; }
    const s = document.createElement('script');
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    s.onload = () => setLoaded(true);
    document.head.appendChild(s);
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(l);
  }, []);

  useEffectC(() => {
    if (!loaded || !ref.current) return;
    ref.current.innerHTML = '';
    try {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/knowaa/intro?hide_gdpr_banner=1&primary_color=4A0FB8&text_color=0A0A0A&background_color=ffffff',
        parentElement: ref.current,
      });
    } catch (e) { /* noop */ }
  }, [loaded]);

  return (
    <section className="ct-book" id="ct-book">
      <div className="ct-book__bg" aria-hidden>
        <SignatureShapes palette="dark" />
      </div>
      <div className="ct-book__inner">
        <div className="ct-book__head">
          <p className="ct-book__eyebrow">Schedule</p>
          <h2 className="ct-book__title">Book a 30-minute intro.</h2>
          <p className="ct-book__sub">No deck. No script. One of our partners on a call — talking about the shift you&rsquo;re after and whether we&rsquo;re the right fit.</p>
          <ul className="ct-book__points">
            <li><span className="ct-dot" />30 minutes</li>
            <li><span className="ct-dot" />Zoom / Google Meet</li>
            <li><span className="ct-dot" />A real partner, not a rep</li>
          </ul>
        </div>
        <div className="ct-book__cal">
          <div ref={ref} className="ct-cal-inline">
            {!loaded && (
              <div className="ct-cal-skel">
                <div className="ct-cal-skel__head" />
                <div className="ct-cal-skel__grid">
                  {Array.from({ length: 35 }).map((_, i) => <div key={i} />)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Bottom details ---------- */
function Details() {
  return (
    <section className="ct-details">
      <div className="ct-details__grid">
        <div>
          <p className="ct-details__eyebrow">Studio</p>
          <p className="ct-details__big">New York · Tel Aviv · London</p>
          <p className="ct-details__small">Remote partners across 4 time zones.</p>
        </div>
        <div>
          <p className="ct-details__eyebrow">General</p>
          <a className="ct-details__big ct-link" href="mailto:hello@knowaa.com">hello@knowaa.com</a>
          <p className="ct-details__small">We reply within one business day.</p>
        </div>
        <div>
          <p className="ct-details__eyebrow">Press &amp; partnerships</p>
          <a className="ct-details__big ct-link" href="mailto:press@knowaa.com">press@knowaa.com</a>
          <p className="ct-details__small">Brand kit · speaking · awards.</p>
        </div>
        <div>
          <p className="ct-details__eyebrow">Careers</p>
          <a className="ct-details__big ct-link" href="mailto:jobs@knowaa.com">jobs@knowaa.com</a>
          <p className="ct-details__small">We&rsquo;re always listening for the right people.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Root ---------- */
function Contact() {
  return (
    <main className="ct-page">
      <ContactHero />
      <ContactForm />
      <OrRule />
      <Booking />
      <Details />

      <style>{`
        .ct-page { font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #0A0A0A; }

        /* ---------- Hero ---------- */
        .ct-hero {
          position: relative;
          padding: clamp(120px, 14vw, 176px) clamp(24px, 4vw, 56px) clamp(64px, 8vw, 96px);
          overflow: hidden;
          isolation: isolate;
          background:
            radial-gradient(110% 70% at 85% 10%, rgba(255,140,60,0.45), transparent 55%),
            radial-gradient(90% 80% at 15% 100%, rgba(74,15,184,0.65), transparent 60%),
            linear-gradient(135deg, #FF7A29 0%, #B04FCF 45%, #5B1FB5 100%);
          color: #fff;
        }
        .ct-hero::before, .ct-hero::after {
          content: ''; position: absolute; left: 0; right: 0;
          height: 64px; pointer-events: none; z-index: 2;
        }
        .ct-hero::before { top: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.18), transparent); }
        .ct-hero::after { bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.14), transparent); }
        .ct-hero__bg {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          opacity: 1;
        }
        .ct-shapes {
          position: absolute; inset: 0; width: 100%; height: 100%;
          animation: ct-drift 28s ease-in-out infinite alternate;
        }
        @keyframes ct-drift {
          0% { transform: translate3d(0,0,0) scale(1); }
          100% { transform: translate3d(-18px, 10px, 0) scale(1.03); }
        }
        .ct-hero__inner {
          position: relative; z-index: 1;
          max-width: 980px; margin: 0 auto; text-align: center;
        }
        .ct-hero__eyebrow {
          margin: 0 0 20px; font-size: 12px; font-weight: 700;
          letter-spacing: 0.24em; text-transform: uppercase;
          color: rgba(255,255,255,0.9);
        }
        .ct-hero__title {
          font-size: clamp(40px, 6vw, 84px);
          font-weight: 800;
          line-height: 1.02;
          letter-spacing: -0.025em;
          margin: 0 0 24px;
          text-wrap: balance;
          color: #fff;
        }
        .ct-hero__title em {
          font-family: 'Playfair Display', serif;
          font-style: italic; font-weight: 500;
          color: #ffffff;
          position: relative;
        }
        .ct-hero__title em::after {
          content: '';
          position: absolute; left: 0; right: 0; bottom: 0.08em;
          height: 0.12em; background: rgba(74,15,184,0.4);
          z-index: -1; border-radius: 2px;
        }
        .ct-hero__sub {
          margin: 0 auto 36px; max-width: 640px;
          font-size: clamp(17px, 1.5vw, 19px);
          line-height: 1.55; color: rgba(255,255,255,0.9);
          text-wrap: pretty;
        }
        .ct-hero__jump { display: inline-flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
        .ct-chip {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 22px; border-radius: 999px;
          background: #0A0A0A; color: #ffffff;
          font-size: 14px; font-weight: 600; letter-spacing: -0.005em;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        .ct-chip:hover { transform: translateY(-2px); box-shadow: 0 14px 32px -14px rgba(10,10,10,0.5); }
        .ct-chip__dot { width: 8px; height: 8px; border-radius: 50%; background: #FF2D87; box-shadow: 0 0 0 4px rgba(255,45,135,0.25); }
        .ct-chip--ghost { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.5); }
        .ct-chip--ghost:hover { background: rgba(255,255,255,0.12); box-shadow: none; border-color: rgba(255,255,255,0.8); }

        /* ---------- Form section ---------- */
        .ct-form-section {
          position: relative;
          padding: clamp(48px, 6vw, 88px) clamp(24px, 4vw, 56px);
          background: #FFFFFF;
        }
        .ct-form-shell {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 340px minmax(0, 1fr);
          gap: clamp(32px, 5vw, 72px);
          align-items: start;
        }
        .ct-rail { position: sticky; top: 120px; }
        .ct-rail__eyebrow {
          margin: 0 0 14px; font-size: 11px; font-weight: 700;
          letter-spacing: 0.22em; text-transform: uppercase; color: #4A0FB8;
        }
        .ct-rail__title {
          margin: 0 0 20px; font-size: clamp(26px, 2.6vw, 34px);
          font-weight: 700; letter-spacing: -0.015em; line-height: 1.15;
        }
        .ct-rail__lead {
          margin: 0 0 32px; font-size: 15px; line-height: 1.6;
          color: rgba(10,10,10,0.62); text-wrap: pretty;
        }
        .ct-rail__team {
          display: flex; align-items: center; gap: 10px;
          margin: 0 0 36px;
        }
        .ct-avatar {
          width: 36px; height: 36px; border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 700; color: #fff;
          border: 2px solid #fff;
          box-shadow: 0 4px 10px -4px rgba(10,10,10,0.25);
        }
        .ct-avatar + .ct-avatar { margin-left: -12px; }
        .ct-avatar--1 { background: linear-gradient(135deg, #4A0FB8, #7C3AED); }
        .ct-avatar--2 { background: linear-gradient(135deg, #FF2D87, #FF7A29); }
        .ct-avatar--3 { background: linear-gradient(135deg, #FF7A29, #D94A0D); }
        .ct-rail__team-label {
          margin-left: 10px; font-size: 13px; color: rgba(10,10,10,0.6);
          letter-spacing: -0.005em;
        }

        .ct-rail__quote {
          position: relative; padding: 20px 22px 22px;
          border: 1px solid rgba(10,10,10,0.08);
          border-radius: 14px;
          background: linear-gradient(180deg, #ffffff, #FAF7FF);
        }
        .ct-rail__quote-mark {
          position: absolute; top: -6px; left: 16px;
          font-family: 'Playfair Display', serif;
          font-size: 56px; line-height: 1; color: #4A0FB8;
        }
        .ct-rail__quote p { margin: 12px 0 10px; font-size: 14.5px; line-height: 1.55; color: rgba(10,10,10,0.78); font-style: italic; }
        .ct-rail__quote span { font-size: 11.5px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(10,10,10,0.5); }

        /* ---------- Card ---------- */
        .ct-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid rgba(10,10,10,0.08);
          border-radius: 20px;
          box-shadow: 0 30px 80px -40px rgba(74,15,184,0.25), 0 12px 24px -18px rgba(10,10,10,0.1);
          overflow: hidden;
        }
        .ct-card--shake { animation: ct-shake 0.42s cubic-bezier(.36,.07,.19,.97); }
        @keyframes ct-shake {
          10%, 90% { transform: translateX(-2px); }
          20%, 80% { transform: translateX(4px); }
          30%, 50%, 70% { transform: translateX(-8px); }
          40%, 60% { transform: translateX(8px); }
        }
        .ct-card__progress { position: relative; height: 3px; background: rgba(10,10,10,0.06); }
        .ct-card__progress-bar {
          position: absolute; top: 0; left: 0; height: 100%;
          background: linear-gradient(90deg, #4A0FB8, #FF2D87);
          transition: width 0.4s cubic-bezier(.2,.7,.2,1);
        }
        .ct-card__body {
          padding: clamp(32px, 4vw, 56px) clamp(28px, 4vw, 56px) 32px;
        }
        .ct-fade { animation: ct-fade 0.45s cubic-bezier(.2,.7,.2,1); }
        @keyframes ct-fade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ---------- Mad-libs sentence ---------- */
        .ct-sentence {
          margin: 0 0 28px;
          font-size: clamp(22px, 2.4vw, 30px);
          font-weight: 500;
          line-height: 1.45;
          letter-spacing: -0.015em;
          color: #0A0A0A;
          text-wrap: pretty;
        }
        .ct-blank-wrap { position: relative; display: inline-block; }
        .ct-blank {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 2px 12px 4px;
          font: inherit; font-size: inherit; font-weight: 600;
          background: linear-gradient(180deg, #F9F5FF, #EFE7FF);
          color: #4A0FB8;
          border: 1.5px dashed rgba(74,15,184,0.45);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          line-height: 1.3;
        }
        .ct-blank:hover { border-color: #4A0FB8; transform: translateY(-1px); }
        .ct-blank.is-filled {
          background: #4A0FB8;
          color: #fff;
          border: 1.5px solid #4A0FB8;
          border-style: solid;
        }
        .ct-blank.is-open { box-shadow: 0 0 0 3px rgba(74,15,184,0.18); }
        .ct-blank__caret { transition: transform 0.2s ease; opacity: 0.7; }
        .ct-blank.is-open .ct-blank__caret { transform: rotate(180deg); }
        .ct-blank__menu {
          position: absolute; top: calc(100% + 8px); left: 0;
          min-width: 260px;
          background: #fff;
          border: 1px solid rgba(10,10,10,0.1);
          border-radius: 14px;
          box-shadow: 0 20px 50px -20px rgba(10,10,10,0.25), 0 8px 16px -12px rgba(10,10,10,0.12);
          padding: 6px;
          z-index: 20;
          animation: ct-menu 0.2s cubic-bezier(.2,.7,.2,1);
        }
        @keyframes ct-menu {
          from { opacity: 0; transform: translateY(-4px) scale(0.98); }
          to { opacity: 1; transform: none; }
        }
        .ct-blank__opt {
          display: block; width: 100%; text-align: left;
          padding: 10px 14px; border-radius: 10px;
          font-size: 14.5px; font-weight: 500; color: rgba(10,10,10,0.85);
          cursor: pointer; transition: background 0.15s ease, color 0.15s ease;
          letter-spacing: -0.005em;
        }
        .ct-blank__opt:hover { background: rgba(74,15,184,0.08); color: #4A0FB8; }
        .ct-blank__opt.is-on { background: #4A0FB8; color: #fff; }

        /* ---------- Short note ---------- */
        .ct-note { display: block; margin: 0 0 20px; }
        .ct-note textarea {
          width: 100%;
          font: inherit; font-size: 15.5px; line-height: 1.55;
          padding: 16px 18px;
          background: #FAFAFA;
          border: 1.5px solid rgba(10,10,10,0.08);
          border-radius: 14px;
          color: #0A0A0A;
          transition: all 0.2s ease;
          outline: none;
          resize: none;
          min-height: 90px;
        }
        .ct-note textarea::placeholder { color: rgba(10,10,10,0.4); }
        .ct-note textarea:focus {
          background: #fff; border-color: #4A0FB8;
          box-shadow: 0 0 0 3px rgba(74,15,184,0.12);
        }

        /* ---------- Identity row ---------- */
        .ct-identity {
          display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;
          margin-bottom: 24px;
        }
        .ct-field { display: block; }
        .ct-field input {
          width: 100%;
          font: inherit; font-size: 14.5px;
          padding: 13px 16px;
          background: #FAFAFA;
          border: 1.5px solid rgba(10,10,10,0.08);
          border-radius: 12px;
          color: #0A0A0A;
          transition: all 0.2s ease;
          outline: none;
        }
        .ct-field input::placeholder { color: rgba(10,10,10,0.4); }
        .ct-field input:focus {
          background: #fff; border-color: #4A0FB8;
          box-shadow: 0 0 0 3px rgba(74,15,184,0.12);
        }

        /* Card foot */
        .ct-card__foot {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; flex-wrap: wrap;
          padding-top: 20px;
          border-top: 1px solid rgba(10,10,10,0.06);
        }
        .ct-card__meta {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 13px; color: rgba(10,10,10,0.55);
          letter-spacing: -0.005em;
        }
        .ct-dot--live {
          display: inline-block; width: 7px; height: 7px; border-radius: 50%;
          background: #22c55e; box-shadow: 0 0 0 3px rgba(34,197,94,0.22);
          animation: ct-pulse 1.8s ease-in-out infinite;
        }
        @keyframes ct-pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.22); }
          50% { box-shadow: 0 0 0 5px rgba(34,197,94,0.08); }
        }
        .ct-primary {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 22px; border-radius: 999px;
          background: #4A0FB8; color: #fff;
          font-size: 14px; font-weight: 600; letter-spacing: -0.005em;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .ct-primary:hover { transform: translateY(-2px); box-shadow: 0 16px 32px -14px rgba(74,15,184,0.55); }

        /* Success */
        .ct-success { padding: 56px 48px 48px; text-align: center; }
        .ct-success__ring { width: 96px; height: 96px; margin: 0 auto 24px; }
        .ct-success__ring svg { width: 100%; height: 100%; animation: ct-ring 1.1s cubic-bezier(.2,.7,.2,1) both; }
        @keyframes ct-ring { from { transform: rotate(-10deg) scale(0.8); opacity: 0; } to { transform: none; opacity: 1; } }
        .ct-success h3 { margin: 0 0 10px; font-size: 28px; font-weight: 700; letter-spacing: -0.015em; }
        .ct-success p { margin: 0 auto 24px; max-width: 480px; font-size: 15.5px; line-height: 1.55; color: rgba(10,10,10,0.65); }

        /* ---------- OR divider ---------- */
        .ct-or {
          display: grid; grid-template-columns: 1fr auto 1fr;
          align-items: center; gap: 20px;
          max-width: 720px; margin: 0 auto;
          padding: 24px clamp(24px, 4vw, 56px) 40px;
          background: #fff;
        }
        .ct-or__line { height: 1px; background: rgba(10,10,10,0.12); }
        .ct-or__text { font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(10,10,10,0.45); }

        /* ---------- Booking ---------- */
        .ct-book {
          position: relative;
          padding: clamp(64px, 9vw, 120px) clamp(24px, 4vw, 56px);
          background: #503594;
          color: #fff;
          overflow: hidden;
          isolation: isolate;
        }
        .ct-book::before, .ct-book::after {
          content: ''; position: absolute; left: 0; right: 0;
          height: 56px; pointer-events: none; z-index: 2;
        }
        .ct-book::before { top: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.22), transparent); }
        .ct-book::after { bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.22), transparent); }
        .ct-book__bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .ct-book__bg .ct-shapes { animation: ct-drift 22s ease-in-out infinite alternate; }
        .ct-book__inner {
          position: relative; z-index: 1;
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 380px minmax(0, 1fr);
          gap: clamp(32px, 5vw, 64px);
          align-items: start;
        }
        .ct-book__head { position: sticky; top: 120px; }
        .ct-book__eyebrow { margin: 0 0 16px; font-size: 12px; font-weight: 700; letter-spacing: 0.24em; text-transform: uppercase; color: rgba(255,255,255,0.7); }
        .ct-book__title { margin: 0 0 20px; font-size: clamp(32px, 4vw, 52px); font-weight: 800; letter-spacing: -0.02em; line-height: 1.05; text-wrap: balance; }
        .ct-book__sub { margin: 0 0 28px; font-size: 16px; line-height: 1.55; color: rgba(255,255,255,0.75); text-wrap: pretty; }
        .ct-book__points { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .ct-book__points li { display: flex; align-items: center; gap: 12px; font-size: 15px; color: rgba(255,255,255,0.9); }
        .ct-dot { width: 6px; height: 6px; border-radius: 50%; background: #FF2D87; box-shadow: 0 0 0 3px rgba(255,45,135,0.3); }

        .ct-book__cal {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          min-height: 680px;
          box-shadow: 0 40px 100px -40px rgba(0,0,0,0.5), 0 16px 32px -20px rgba(0,0,0,0.3);
        }
        .ct-cal-inline { min-width: 320px; height: 680px; }
        .ct-cal-skel { padding: 40px; }
        .ct-cal-skel__head { height: 48px; background: rgba(10,10,10,0.05); border-radius: 10px; margin-bottom: 24px; position: relative; overflow: hidden; }
        .ct-cal-skel__head::after, .ct-cal-skel__grid > div {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          animation: ct-shimmer 1.6s linear infinite;
        }
        .ct-cal-skel__grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; }
        .ct-cal-skel__grid > div { aspect-ratio: 1; background: rgba(10,10,10,0.05); border-radius: 8px; position: relative; overflow: hidden; }
        @keyframes ct-shimmer { from { transform: translateX(-100%); } to { transform: translateX(100%); } }

        /* ---------- Details ---------- */
        .ct-details {
          padding: clamp(56px, 7vw, 96px) clamp(24px, 4vw, 56px);
          background: #FFFFFF;
          border-top: 1px solid rgba(10,10,10,0.08);
        }
        .ct-details__grid {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px;
        }
        .ct-details__eyebrow { margin: 0 0 10px; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(10,10,10,0.5); }
        .ct-details__big { display: block; margin: 0 0 4px; font-size: clamp(18px, 1.6vw, 20px); font-weight: 600; letter-spacing: -0.01em; color: #0A0A0A; text-decoration: none; }
        .ct-details__small { margin: 0; font-size: 13.5px; color: rgba(10,10,10,0.55); line-height: 1.5; }
        .ct-link { transition: color 0.2s ease; }
        .ct-link:hover { color: #4A0FB8; }

        /* ---------- Responsive ---------- */
        @media (max-width: 1024px) {
          .ct-form-shell { grid-template-columns: 1fr; }
          .ct-rail { position: static; }
          .ct-book__inner { grid-template-columns: 1fr; }
          .ct-book__head { position: static; }
          .ct-details__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 680px) {
          .ct-hero { padding: clamp(96px, 18vw, 128px) 20px 56px; }
          .ct-hero__title { font-size: clamp(32px, 9vw, 44px); }
          .ct-hero__sub { font-size: 15.5px; margin-bottom: 28px; }
          .ct-chip { padding: 12px 18px; font-size: 13.5px; }
          .ct-form-section { padding: 48px 20px; }
          .ct-identity { grid-template-columns: 1fr; }
          .ct-sentence { font-size: 19px; line-height: 1.5; }
          .ct-card__body { padding: 28px 22px 28px; }
          .ct-card__foot { flex-direction: column; align-items: stretch; gap: 14px; }
          .ct-primary { justify-content: center; }
          .ct-blank__menu { min-width: 220px; max-width: calc(100vw - 64px); }
          .ct-rail__title { font-size: 24px; }
          .ct-rail__team-label { font-size: 12px; }
          .ct-or { padding: 16px 20px 32px; gap: 14px; }
          .ct-or__text { font-size: 11px; }
          .ct-book { padding: 64px 20px; }
          .ct-book__title { font-size: clamp(26px, 7vw, 36px); }
          .ct-book__cal { min-height: 560px; border-radius: 14px; }
          .ct-cal-inline { height: 560px; }
          .ct-details { padding: 56px 20px; }
          .ct-details__grid { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>
    </main>
  );
}

window.Contact = Contact;
