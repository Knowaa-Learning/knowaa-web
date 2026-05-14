// Navigation with unified mega-menu overlay.
// - Always solid white
// - Hides on scroll down, returns on scroll up
// - Hovering Solutions / Resources / About opens a shared panel
// - Contact us has no dropdown

const { useState: useStateN, useEffect: useEffectN, useRef: useRefN } = React;

// The "o" icon system — purple stroke circle, magenta accent. Each tells a different story.
const OIcons = {
  insights: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A0FB8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="13" r="5.75" />
      <path d="M17.5 5.5 L18.25 7.5 L20.25 8.25 L18.25 9 L17.5 11 L16.75 9 L14.75 8.25 L16.75 7.5 Z" fill="#FF2D87" stroke="#FF2D87"/>
    </svg>
  ),
  cases: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A0FB8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="7.5" cy="9" r="4.25"/>
      <circle cx="16.5" cy="9" r="4.25"/>
      <circle cx="12" cy="15.5" r="4.25" fill="#FF2D87" stroke="#FF2D87"/>
    </svg>
  ),
  newsletter: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A0FB8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="8" cy="14" r="5.25"/>
      <path d="M12.5 10.5 L20 5 M17.5 5 L20 5 L20 7.75" stroke="#FF2D87"/>
    </svg>
  ),
};

// Each menu item defines its dropdown content or null for no dropdown.
const NAV = [
  {
    label: 'Solutions',
    href: '#solutions',
    menu: {
      lists: [
        {
          heading: 'Categories',
          items: [
            { title: 'Learning strategy', desc: 'Naming the right problem first', href: 'Knowaa Strategy.html', iconSrc: 'assets/icons/nav-strategy.svg' },
            { title: 'Custom eLearning', desc: 'The format follows the work', href: 'Knowaa Custom eLearning.html', iconSrc: 'assets/icons/nav-elearning.svg' },
          ],
        },
        {
          heading: '',
          items: [
            { title: 'Video & Animation', desc: 'Advertising-grade production for learning', href: 'Knowaa Video and Animation.html', iconSrc: 'assets/icons/nav-video.svg' },
            { title: 'Learning campaigns', desc: 'Nudge learning at its best', href: 'Knowaa Campaigns.html', iconSrc: 'assets/icons/nav-campaigns.svg' },
          ],
        },
      ],
    },
  },
  {
    label: 'Resources',
    href: 'Knowaa Resources.html',
    menu: {
      lists: [
        {
          heading: '',
          items: [
            { title: 'Case studies', desc: 'How we work, in practice', href: 'Knowaa Resources.html?type=case', iconSrc: 'assets/icons/nav-case-studies.svg' },
            { title: 'Insights', desc: 'Field notes and essays from our studio', href: 'Knowaa Resources.html?type=insight', iconSrc: 'assets/icons/nav-insights.svg' },
            { title: 'Newsletter signup', desc: 'Weekly, under 5 minutes', iconSrc: 'assets/icons/nav-newsletter.svg' },
          ],
        },
      ],
      feature: {
        eyebrow: 'Insight of the week',
        title: 'The attention threshold: why learning fails before it begins.',
        excerpt: '',
        readTime: '6 min read',
        cta: 'Read the article',
        href: 'Knowaa Article - Attention Threshold.html',
        video: 'assets/insights/02-attention-threshold.mp4',
        image: 'assets/insights/modern-learner.jpg',
        isInsight: true,
      },
    },
  },
  { label: 'Contact us', href: 'Knowaa Contact.html', menu: null },
];

function useNavScroll() {
  const [hidden, setHidden] = useStateN(false);
  const [atTop, setAtTop] = useStateN(true);
  const lastY = useRefN(0);
  useEffectN(() => {
    lastY.current = window.scrollY;
    setAtTop(window.scrollY < 40);
    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY.current;
      setAtTop(y < 40);
      if (y < 40) setHidden(false);
      else if (dy > 2) setHidden(true);
      else if (dy < -2) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return { hidden, atTop };
}

function Feature({ feature }) {
  const href = feature.href || '#';
  return (
    <a
      href={href}
      target={feature.href ? '_blank' : undefined}
      rel={feature.href ? 'noopener noreferrer' : undefined}
      className="nav-feature"
      style={{
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        gap: '18px',
        alignItems: 'center',
        padding: '4px 28px 4px 0',
        borderRight: '1px solid rgba(10,10,10,0.12)',
        color: 'var(--ink)',
        textDecoration: 'none',
        height: '100%',
      }}
    >
      {/* 16:9 image cover */}
      <div
        className="nav-feature__cover"
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          borderRadius: '10px',
          overflow: 'hidden',
          background: '#0A0A0A',
          transition: 'box-shadow 0.25s ease',
        }}
      >
        {feature.image ? (
          <img
            src={feature.image}
            alt=""
            loading="lazy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        ) : feature.video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          >
            <source src={feature.video} type="video/mp4" />
          </video>
        ) : (
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(ellipse at 25% 25%, #FF2D87 0%, transparent 55%),
                         radial-gradient(ellipse at 80% 80%, #9B3DFF 0%, transparent 55%),
                         linear-gradient(135deg, #4A0FB8 0%, #1A0B3D 100%)`,
          }} />
        )}

      </div>

      <div>
        <div style={{
          fontSize: '18px', lineHeight: 1.25, letterSpacing: '-0.01em',
          fontWeight: 700, color: 'var(--ink)', textWrap: 'balance',
          marginBottom: '10px',
        }}>{feature.title}</div>
        {feature.excerpt && (
          <div style={{
            fontSize: '14px', lineHeight: 1.5, color: 'var(--ink-50)',
            marginBottom: '14px', textWrap: 'pretty',
          }}>{feature.excerpt}</div>
        )}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
        }}>
          <div className="nav-feature__cta" style={{
            fontSize: '13px', fontWeight: 600,
            color: 'var(--ink)',
            padding: '7px 14px',
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            border: '1px solid var(--ink-15)',
            borderRadius: '999px',
            background: 'transparent',
            transition: 'color 0.25s ease, border-color 0.25s ease, background 0.25s ease',
            letterSpacing: '-0.005em',
            fontSize: '14px',
            whiteSpace: 'nowrap',
          }}>
            {feature.cta}
            <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden style={{ transition: 'transform 0.25s ease' }}>
              <path d="M2 6 H10 M7 2 L10 6 L7 10" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {feature.readTime && false && (
            <>
              <span aria-hidden style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--ink-50)' }} />
              <span style={{
                fontSize: '11px', fontWeight: 500, color: 'var(--ink-50)',
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>{feature.readTime}</span>
            </>
          )}
        </div>
      </div>
      <style>{`
        .nav-feature:hover .nav-feature__cta { color: var(--knowaa-purple, #4A0FB8); border-color: var(--knowaa-purple, #4A0FB8); background: rgba(74,15,184,0.04); }
        .nav-feature:hover .nav-feature__cta svg { transform: translateX(3px); }
        .nav-feature:hover .nav-feature__cover { box-shadow: 0 14px 30px -14px rgba(10,10,10,0.25); }
      `}</style>
    </a>
  );
}

function NewsletterForm({ onBack }) {
  const [email, setEmail] = useStateN('');
  const [consent, setConsent] = useStateN(false);
  const [submitted, setSubmitted] = useStateN(false);
  const [submitting, setSubmitting] = useStateN(false);
  const [errorMsg, setErrorMsg] = useStateN('');
  const [focused, setFocused] = useStateN(false);
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && consent;
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!valid || submitting) return;
    setSubmitting(true);
    setErrorMsg('');
    try {
      const res = await fetch('https://knowaa-info.com/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: '' }),
      });
      const data = await res.json().catch(() => ({}));
      if (data && data.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg((data && data.error) || 'Something went wrong. Try again.');
      }
    } catch {
      setErrorMsg('Something went wrong. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{
      position: 'relative',
      display: 'flex', flexDirection: 'column',
      padding: '6px 4px 4px 0',
      maxWidth: '480px',
    }}>
      {/* Section title — matches other section headings */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px' }}>
        <img
          src="assets/nav/newsletter-envelope.svg"
          alt=""
          aria-hidden
          style={{ width: '44px', height: '42px', flexShrink: 0, display: 'block' }}
        />
        <h2 style={{
          fontFamily: 'inherit',
          fontSize: '30px',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          color: 'var(--ink)',
          margin: 0,
        }}>
          Signup to our newsletter
        </h2>
      </div>
      <div style={{
        fontSize: '13px',
        color: 'var(--ink-50)',
        lineHeight: 1.5,
        marginBottom: '18px',
      }}>
        A short weekly dispatch from our studio.
      </div>

      {/* Light-grey form surface — contains the input + meta row so the form reads as a distinct panel. */}
      <div style={{
        background: '#F5F5F5',
        border: '1px solid #EAEAEA',
        borderRadius: '10px',
        padding: '20px 22px 18px',
      }}>
      {submitted ? (
        <div style={{
          padding: '18px 20px',
          background: '#EEEEEE',
          border: '1px solid #C9C9C9',
          color: 'var(--ink)',
          borderRadius: '4px',
          display: 'flex', alignItems: 'center', gap: '14px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '50%',
            background: 'var(--ink)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3.5 8.5 L6.5 11.5 L12.5 5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{
            fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: '11px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
          }}>
            Subscribed · Check your inbox to confirm
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Underlined input */}
          <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{
              fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--ink-50)',
              fontWeight: 500,
            }}>→ Your email</span>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              borderBottom: focused ? '1.5px solid var(--knowaa-purple, #4A0FB8)' : '1.5px solid var(--ink-15)',
              paddingBottom: '8px',
              transition: 'border-color 0.2s ease',
            }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="you@company.com"
                required
                style={{
                  flex: 1,
                  minWidth: 0,
                  height: '32px',
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontFamily: 'inherit',
                  fontSize: '16px',
                  color: 'var(--ink)',
                  letterSpacing: '-0.005em',
                  padding: 0,
                }}
              />
              <button
                type="submit"
                disabled={!valid || submitting}
                aria-label="Subscribe"
                style={{
                  width: '25px', height: '25px',
                  border: 'none',
                  borderRadius: '50%',
                  background: valid ? 'var(--knowaa-purple, #4A0FB8)' : 'var(--ink)',
                  color: '#FFFFFF',
                  cursor: valid ? 'pointer' : 'not-allowed',
                  transition: 'background 0.2s ease, transform 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  opacity: valid ? 1 : 0.5,
                }}
                onMouseEnter={(e) => { if (valid) e.currentTarget.style.transform = 'translateX(2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <svg width="9" height="9" viewBox="0 0 12 12" aria-hidden>
                  <path d="M2 6 H10 M7 2 L10 6 L7 10" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </label>

          {/* Consent + meta row */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            flexWrap: 'wrap',
          }}>
            <label style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              cursor: 'pointer', userSelect: 'none',
            }}>
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                style={{
                  width: '13px', height: '13px',
                  accentColor: 'var(--knowaa-purple, #4A0FB8)',
                  cursor: 'pointer', flexShrink: 0,
                }}
              />
              <span style={{
                fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--ink-50)',
              }}>
                Accept
              </span>
            </label>
            <a
              href="Knowaa Terms.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--knowaa-purple, #4A0FB8)',
                textDecoration: 'none',
                fontWeight: 500,
                borderBottom: '1px solid rgba(74,15,184,0.3)',
              }}
            >Terms</a>
            <span style={{ marginLeft: 'auto' }}>
              <button
                type="button"
                onClick={onBack}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--ink-50)',
                  fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: '4px 0',
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-50)'; }}
              >
                ← Back
              </button>
            </span>
          </div>

          {errorMsg && (
            <div role="status" aria-live="polite" style={{
              marginTop: '10px',
              fontSize: '12px',
              fontWeight: 600,
              color: '#ED1F80',
              lineHeight: 1.4,
            }}>
              {errorMsg}
            </div>
          )}
        </form>
      )}
      </div>
    </div>
  );
}

function MegaPanel({ menu, newsletterOpen, setNewsletterOpen }) {
  if (!menu) return null;
  const hasFeature = !!menu.feature;
  const showNewsletter = newsletterOpen && menu.feature && menu.feature.isInsight; // resources menu only
  return (
    <div style={{
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: hasFeature ? '500px 1fr' : 'max-content max-content',
      gap: hasFeature ? '24px' : '80px',
      padding: hasFeature ? '40px 56px 44px 220px' : '40px 56px 44px 260px',
      maxWidth: '1480px',
      margin: '0 auto',
    }}>
      {!hasFeature && menu.lists.length === 2 && (
        <div aria-hidden="true" style={{
          position: 'absolute',
          left: '220px',
          top: '44px',
          bottom: '44px',
          width: '1px',
          background: 'rgba(155,114,224,0.45)',
          pointerEvents: 'none',
        }} />
      )}
      {hasFeature && <Feature feature={menu.feature} />}
      {showNewsletter ? (
        <NewsletterForm onBack={() => setNewsletterOpen(false)} />
      ) : menu.lists.map((col, ci) => {
        const anyHeading = menu.lists.some(c => c.heading);
        return (
        <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {col.heading ? (
            <div style={{
              fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--ink-50)', fontWeight: 600, marginBottom: '8px',
            }}>{col.heading}</div>
          ) : anyHeading ? (
            <div aria-hidden="true" style={{
              fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase',
              fontWeight: 600, marginBottom: '8px', visibility: 'hidden',
            }}>&nbsp;</div>
          ) : null}
          {col.items.map((it, ii) => {
            const isNewsletter = it.title === 'Newsletter signup';
            return (
            <a key={ii} href={it.href || '#'} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '12px 14px',
              borderRadius: '10px',
              color: 'var(--ink)',
              textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
              onClick={(e) => { if (isNewsletter) { e.preventDefault(); setNewsletterOpen(true); } }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(10,10,10,0.04)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              {it.iconSrc ? (
                <span style={{
                  width: '36px',
                  height: '36px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--ink)',
                }}>
                  <img src={it.iconSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </span>
              ) : it.icon && OIcons[it.icon] && (
                <span style={{
                  width: '28px',
                  height: '28px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>{OIcons[it.icon]}</span>
              )}
              <span style={{ minWidth: 0 }}>
                <div style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '-0.005em' }}>{it.title}</div>
                <div style={{ fontSize: '14px', color: 'var(--ink-50)', marginTop: '2px' }}>{it.desc}</div>
              </span>
            </a>
          ); })}
        </div>
        );
      })}
    </div>
  );
}

function MobileMenu({ isOpen, onClose, textColor, logoSrc, solid }) {
  const [expanded, setExpanded] = useStateN(null);

  useEffectN(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setExpanded(null);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      style={{
        position: 'fixed',
        inset: 0,
        background: '#FFFFFF',
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease, visibility 0.3s ease',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {/* Top bar mirror */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 20px',
        borderBottom: '1px solid rgba(10,10,10,0.08)',
        background: '#FFFFFF',
        position: 'sticky', top: 0, zIndex: 1,
      }}>
        <a href="Knowaa Homepage.html" aria-label="Knowaa home" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="assets/knowaa-logo.svg" alt="Knowaa" style={{ height: '34px', width: 'auto' }} />
        </a>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          style={{
            width: '44px', height: '44px',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: 'var(--ink)',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
            <path d="M6 6 L18 18 M18 6 L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Nav list */}
      <nav style={{
        padding: '12px 20px 40px',
        display: 'flex', flexDirection: 'column',
      }}>
        {NAV.map((it, i) => {
          const hasMenu = !!it.menu;
          const isExpanded = expanded === i;
          return (
            <div key={it.label} style={{ borderBottom: '1px solid rgba(10,10,10,0.06)' }}>
              {hasMenu ? (
                <>
                  <button
                    type="button"
                    onClick={() => setExpanded(isExpanded ? null : i)}
                    aria-expanded={isExpanded}
                    style={{
                      width: '100%',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '20px 4px',
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      fontSize: '22px', fontWeight: 600, letterSpacing: '-0.01em',
                      color: 'var(--ink)', fontFamily: 'inherit',
                      textAlign: 'left',
                    }}
                  >
                    <span>{it.label}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden
                      style={{
                        transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        color: 'var(--ink-50)',
                      }}>
                      <path d="M12 5 L12 19 M5 12 L19 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div style={{
                    maxHeight: isExpanded ? '2000px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}>
                    <div style={{ padding: '4px 4px 20px' }}>
                      {it.menu.lists.map((col, ci) => (
                        <div key={ci} style={{ marginBottom: '16px' }}>
                          {col.heading && (
                            <div style={{
                              fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase',
                              color: 'var(--ink-50)', fontWeight: 600, marginBottom: '8px',
                            }}>{col.heading}</div>
                          )}
                          {col.items.map((sub, si) => (
                            <a key={si} href={sub.href || '#'} onClick={onClose} style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              padding: '12px 0',
                              color: 'var(--ink)',
                              textDecoration: 'none',
                              fontSize: '16px', fontWeight: 500,
                            }}>
                              {sub.iconSrc ? (
                                <img src={sub.iconSrc} alt="" style={{ width: '32px', height: '32px', objectFit: 'contain', flexShrink: 0 }} />
                              ) : null}
                              <span style={{ minWidth: 0 }}>
                                <div style={{ fontWeight: 600 }}>{sub.title}</div>
                                <div style={{ fontSize: '13px', color: 'var(--ink-50)', marginTop: '2px', fontWeight: 400 }}>{sub.desc}</div>
                              </span>
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={it.href}
                  onClick={onClose}
                  style={{
                    display: 'block',
                    padding: '20px 4px',
                    fontSize: '22px', fontWeight: 600, letterSpacing: '-0.01em',
                    color: 'var(--ink)', textDecoration: 'none',
                  }}
                >{it.label}</a>
              )}
            </div>
          );
        })}

        {/* Contact CTA at bottom */}
        <a
          href="Knowaa Contact.html"
          style={{
            marginTop: '32px',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            padding: '18px 24px',
            borderRadius: '999px',
            background: 'var(--knowaa-purple)',
            color: '#FFFFFF',
            fontSize: '15px', fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Start a project
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden><path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </nav>
    </div>
  );
}

function Nav({ solid = false, pinned = false }) {
  const { hidden: scrollHidden, atTop } = useNavScroll();
  // When `pinned`, the nav never hides on scroll — it stays locked in place.
  const isHidden = pinned ? false : scrollHidden;
  const [open, setOpen] = useStateN(null); // index of open menu
  const [hover, setHover] = useStateN(null);
  const [barHover, setBarHover] = useStateN(false);
  const [newsletterOpen, setNewsletterOpen] = useStateN(false);
  const [mobileOpen, setMobileOpen] = useStateN(false);
  const closeTimer = useRefN(null);
  const openTimer = useRefN(null);
  const headerRef = useRefN(null);
  const panelContentRef = useRefN(null);
  const [panelHeight, setPanelHeight] = useStateN(0);

  // Measure the panel content height whenever the open menu changes so we can
  // animate the container between sizes instead of snapping.
  useEffectN(() => {
    if (open == null) { setPanelHeight(0); return; }
    const el = panelContentRef.current;
    if (!el) return;
    // Wait a frame so MegaPanel has rendered its new content.
    const raf = requestAnimationFrame(() => {
      if (panelContentRef.current) {
        setPanelHeight(panelContentRef.current.offsetHeight);
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [open, newsletterOpen]);

  // Glassy mode: at top of page AND nothing hovered AND no mega-panel open.
  // When `solid` prop is set, nav stays in its white/solid state (e.g. Contact page).
  const glassy = !solid && atTop && !barHover && open == null;
  const logoSrc = glassy ? 'assets/knowaa-logo-white.svg' : 'assets/knowaa-logo.svg';
  const textColor = glassy ? '#FFFFFF' : 'var(--title, var(--ink))';

  const scheduleOpen = (i) => {
    clearTimeout(closeTimer.current);
    clearTimeout(openTimer.current);
    // Opening a different nav item dismisses any sticky newsletter form.
    setNewsletterOpen(false);
    if (NAV[i].menu == null) { setOpen(null); return; }
    openTimer.current = setTimeout(() => setOpen(i), 20);
  };
  const scheduleClose = () => {
    clearTimeout(openTimer.current);
    clearTimeout(closeTimer.current);
    // STICKY NEWSLETTER: once the newsletter form is showing, we do NOT auto-close
    // on mouse-leave. It stays until the user clicks outside the header or hits Esc
    // or uses the "← Back" button inside the form.
    if (newsletterOpen) return;
    closeTimer.current = setTimeout(() => { setOpen(null); setNewsletterOpen(false); }, 180);
  };
  const cancelClose = () => {
    clearTimeout(closeTimer.current);
  };

  // Outside-click + Escape to dismiss the sticky newsletter panel.
  useEffectN(() => {
    if (!newsletterOpen) return;
    const onDocDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setNewsletterOpen(false);
        setOpen(null);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setNewsletterOpen(false);
        setOpen(null);
      }
    };
    document.addEventListener('mousedown', onDocDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [newsletterOpen]);

  return (
    <React.Fragment>
    <header
      ref={headerRef}
      onMouseEnter={() => setBarHover(true)}
      onMouseLeave={() => { setBarHover(false); scheduleClose(); }}
      style={{
        position: 'fixed',
        top: 0,
        left: 'var(--page-gutter, 0px)',
        right: 'var(--page-gutter, 0px)',
        maxWidth: 'calc(1680px - (var(--page-gutter, 0px) * 2))',
        marginLeft: 'auto',
        marginRight: 'auto',
        zIndex: 100,
        transform: isHidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.45s cubic-bezier(.2,.7,.2,1)',
      }}
    >
      {/* Top bar */}
      <div style={{
        background: glassy ? 'transparent' : '#FFFFFF',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        borderBottom: glassy
          ? '1px solid transparent'
          : (open == null ? '1px solid rgba(10,10,10,0.08)' : '1px solid rgba(10,10,10,0.06)'),
        transition: 'background 0.35s ease, border-color 0.35s ease',
      }}>
        <div className="nav-bar-inner" style={{
          maxWidth: '1480px',
          margin: '0 auto',
          padding: '18px 40px',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: '40px',
        }}>
          <a href="Knowaa Homepage.html" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, justifySelf: 'start' }} aria-label="Knowaa home">
            <img
              src={logoSrc}
              alt="Knowaa"
              className="nav-logo"
              style={{
                height: '39px',
                width: 'auto',
                transition: 'opacity 0.25s ease',
              }}
            />
          </a>

          <nav className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: '4px', justifySelf: 'center' }}>
            {NAV.map((it, i) => (
              <a
                key={it.label}
                href={it.label === 'Resources' ? undefined : it.href}
                onClick={it.label === 'Resources' ? (e) => e.preventDefault() : undefined}
                onMouseEnter={() => { setHover(i); scheduleOpen(i); }}
                onMouseLeave={() => setHover(null)}
                style={{
                  position: 'relative',
                  padding: '10px 18px',
                  fontSize: '18px',
                  fontWeight: 500,
                  letterSpacing: '-0.005em',
                  color: textColor,
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  cursor: it.label === 'Resources' ? 'default' : 'pointer',
                  transition: 'color 0.3s ease',
                }}
              >
                {it.label}
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    left: '18px', right: '18px', bottom: '6px',
                    height: '1px',
                    background: textColor,
                    transform: (hover === i || open === i) ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s cubic-bezier(.2,.7,.2,1), background 0.3s ease',
                  }}
                />
              </a>
            ))}
          </nav>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            className="nav-hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            style={{
              display: 'none',
              width: '44px', height: '44px',
              alignItems: 'center', justifyContent: 'center',
              background: 'transparent', border: 'none', cursor: 'pointer',
              color: textColor,
              justifySelf: 'end',
              padding: 0,
              margin: 0,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
              <path d="M4 7 L20 7 M4 12 L20 12 M4 17 L20 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay moved to sibling of header (below) so its
          position:fixed escapes the header's transform containing block */}

      {/* Unified mega panel */}
      <div
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        style={{
          position: 'absolute',
          top: '100%', left: 0, right: 0,
          background: '#FFFFFF',
          borderBottom: open != null ? '1px solid rgba(10,10,10,0.08)' : '1px solid transparent',
          boxShadow: open != null ? '0 20px 40px -20px rgba(10,10,10,0.12)' : '0 0 0 0 rgba(0,0,0,0)',
          opacity: open != null ? 1 : 0,
          height: open != null ? panelHeight : 0,
          overflow: 'hidden',
          pointerEvents: open != null ? 'auto' : 'none',
          transition: 'height 0.28s cubic-bezier(.2,.7,.2,1), opacity 0.15s ease, border-color 0.2s ease, box-shadow 0.2s ease',
        }}
      >
        <div ref={panelContentRef}>
          <MegaPanel menu={open != null ? NAV[open].menu : null} newsletterOpen={newsletterOpen} setNewsletterOpen={setNewsletterOpen} />
        </div>
      </div>
    </header>

    {/* Mobile menu — sibling of <header> so its fixed positioning is
        relative to the viewport, not the header's transformed box. */}
    <MobileMenu
      isOpen={mobileOpen}
      onClose={() => setMobileOpen(false)}
      textColor={textColor}
      logoSrc={logoSrc}
      solid={solid}
    />
    </React.Fragment>
  );
}

window.Nav = Nav;
