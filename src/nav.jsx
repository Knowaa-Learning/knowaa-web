// Navigation with unified mega-menu overlay.
// - Always solid white
// - Hides on scroll down, returns on scroll up
// - Hovering Solutions / Industries / Resources / About opens a shared panel
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
          heading: 'By format',
          items: [
            { title: 'Custom Learning', desc: 'Bespoke programmes for enterprise teams' },
            { title: 'Microlearning', desc: 'Short, focused modules — on demand' },
            { title: 'Gamified Learning', desc: 'Engagement through game mechanics' },
          ],
        },
        {
          heading: 'By approach',
          items: [
            { title: 'AI-Infused Learning', desc: 'Adaptive content that learns with the learner' },
            { title: 'Personalized Learning', desc: 'Role- and skill-aware journeys' },
            { title: 'Learning Campaigns', desc: 'Behaviour change at scale' },
          ],
        },
      ],
    },
  },
  {
    label: 'Industries',
    href: '#industries',
    menu: {
      lists: [
        {
          heading: 'Sectors',
          items: [
            { title: 'Financial Services', desc: 'Banks · Insurance · Wealth' },
            { title: 'Life Sciences', desc: 'Pharma · Biotech · Med-device' },
            { title: 'Technology', desc: 'Enterprise SaaS · Platforms' },
          ],
        },
        {
          heading: '',
          items: [
            { title: 'Energy & Utilities', desc: 'Oil & gas · Renewables · Grid' },
            { title: 'Consumer & Retail', desc: 'CPG · Retail · Hospitality' },
            { title: 'Industrial & Logistics', desc: 'Manufacturing · Supply chain' },
          ],
        },
      ],
    },
  },
  {
    label: 'Resources',
    href: '#resources',
    menu: {
      lists: [
        {
          heading: '',
          items: [
            { title: 'Insights', desc: 'Field notes and essays from our studio' },
            { title: 'Case Studies', desc: 'Work with real, measurable outcomes' },
            { title: 'Newsletter signup', desc: 'Weekly, under 5 minutes' },
          ],
        },
      ],
      feature: {
        eyebrow: 'Insight of the week',
        title: 'The attention threshold: why learning fails before it begins.',
        excerpt: 'Most learning programs lose the learner within the first few minutes. The issue is simpler and more structural than content quality.',
        readTime: '6 min read',
        cta: 'Read the article',
        href: 'https://resources.knowaa.com/articles/attention-threshold-why-learning-fails',
        video: 'assets/insights/02-attention-threshold.mp4',
        isInsight: true,
      },
    },
  },
  {
    label: 'About',
    href: '#about',
    menu: {
      lists: [
        {
          heading: 'Company',
          items: [
            { title: 'Our Story', desc: 'Where Knowaa started' },
            { title: 'Team', desc: 'The people behind the work' },
            { title: 'Careers', desc: 'Open roles' },
          ],
        },
        {
          heading: 'Press',
          items: [
            { title: 'In the News', desc: 'Recent coverage' },
            { title: 'Awards', desc: 'Recognition and honours' },
            { title: 'Brand Kit', desc: 'Logos and guidelines' },
          ],
        },
      ],
    },
  },
  { label: 'Contact us', href: '#contact', menu: null },
];

function useNavScroll() {
  const [hidden, setHidden] = useStateN(false);
  const lastY = useRefN(0);
  useEffectN(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY.current;
      if (y < 40) setHidden(false);
      else if (dy > 2) setHidden(true);
      else if (dy < -2) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return hidden;
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
        gridTemplateColumns: '160px 1fr',
        gap: '18px',
        alignItems: 'center',
        padding: '4px 28px 4px 0',
        borderRight: '1px solid rgba(10,10,10,0.12)',
        color: 'var(--ink)',
        textDecoration: 'none',
        height: '100%',
      }}
    >
      {/* Square video cover — mirrors insight-card__cover */}
      <div
        className="nav-feature__cover"
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 1',
          borderRadius: '10px',
          overflow: 'hidden',
          background: '#0A0A0A',
          transition: 'box-shadow 0.25s ease',
        }}
      >
        {feature.video ? (
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

        {/* subtle scrim + play badge */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(10,10,10,0) 55%, rgba(10,10,10,0.55) 100%)',
          pointerEvents: 'none',
        }} />
        <div aria-hidden style={{
          position: 'absolute',
          left: '8px',
          bottom: '8px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 8px 4px 6px',
          borderRadius: '999px',
          background: 'rgba(255,255,255,0.92)',
          color: 'var(--ink)',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.02em',
          backdropFilter: 'blur(6px)',
        }}>
          <span style={{
            width: '14px', height: '14px', borderRadius: '50%',
            background: 'var(--ink)', color: '#FFFFFF',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="5" height="6" viewBox="0 0 8 9" aria-hidden><path d="M1 1 L7 4.5 L1 8 Z" fill="currentColor" /></svg>
          </span>
          Read
        </div>
      </div>

      <div>
        <div style={{
          fontSize: '16px', lineHeight: 1.25, letterSpacing: '-0.01em',
          fontWeight: 700, color: 'var(--ink)', textWrap: 'balance',
          marginBottom: '10px',
        }}>{feature.title}</div>
        {feature.excerpt && (
          <div style={{
            fontSize: '13px', lineHeight: 1.5, color: 'var(--ink-50)',
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
          }}>
            {feature.cta}
            <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden style={{ transition: 'transform 0.25s ease' }}>
              <path d="M2 6 H10 M7 2 L10 6 L7 10" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {feature.readTime && (
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

function MegaPanel({ menu }) {
  if (!menu) return null;
  const hasFeature = !!menu.feature;
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: hasFeature ? '440px 1fr' : 'max-content max-content',
      gap: hasFeature ? '24px' : '80px',
      padding: '40px 56px 44px',
      maxWidth: '1480px',
      margin: '0 auto',
    }}>
      {hasFeature && <Feature feature={menu.feature} />}
      {menu.lists.map((col, ci) => {
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
          {col.items.map((it, ii) => (
            <a key={ii} href="#" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '12px 14px',
              borderRadius: '10px',
              color: 'var(--ink)',
              textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(10,10,10,0.04)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              {it.icon && OIcons[it.icon] && (
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
                <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.005em' }}>{it.title}</div>
                <div style={{ fontSize: '13px', color: 'var(--ink-50)', marginTop: '2px' }}>{it.desc}</div>
              </span>
            </a>
          ))}
        </div>
        );
      })}
    </div>
  );
}

function Nav() {
  const isHidden = useNavScroll();
  const [open, setOpen] = useStateN(null); // index of open menu
  const [hover, setHover] = useStateN(null);
  const closeTimer = useRefN(null);
  const openTimer = useRefN(null);

  const scheduleOpen = (i) => {
    clearTimeout(closeTimer.current);
    clearTimeout(openTimer.current);
    if (NAV[i].menu == null) { setOpen(null); return; }
    openTimer.current = setTimeout(() => setOpen(i), 80);
  };
  const scheduleClose = () => {
    clearTimeout(openTimer.current);
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 180);
  };
  const cancelClose = () => {
    clearTimeout(closeTimer.current);
  };

  return (
    <header
      onMouseLeave={scheduleClose}
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
        background: '#FFFFFF',
        borderBottom: open == null ? '1px solid rgba(10,10,10,0.08)' : '1px solid rgba(10,10,10,0.06)',
        transition: 'border-color 0.25s ease',
      }}>
        <div style={{
          maxWidth: '1480px',
          margin: '0 auto',
          padding: '18px 40px',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: '40px',
        }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, justifySelf: 'start' }} aria-label="Knowaa home">
            <img src="assets/knowaa-logo.svg" alt="Knowaa" style={{ height: '39px', width: 'auto' }} />
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '4px', justifySelf: 'center' }}>
            {NAV.map((it, i) => (
              <a
                key={it.label}
                href={it.href}
                onMouseEnter={() => { setHover(i); scheduleOpen(i); }}
                onMouseLeave={() => setHover(null)}
                style={{
                  position: 'relative',
                  padding: '10px 18px',
                  fontSize: '16px',
                  fontWeight: 500,
                  letterSpacing: '-0.005em',
                  color: 'var(--ink)',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                }}
              >
                {it.label}
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    left: '18px', right: '18px', bottom: '6px',
                    height: '1px',
                    background: 'var(--ink)',
                    transform: (hover === i || open === i) ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s cubic-bezier(.2,.7,.2,1)',
                  }}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Unified mega panel */}
      <div
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        style={{
          position: 'absolute',
          top: '100%', left: 0, right: 0,
          background: '#FFFFFF',
          borderBottom: '1px solid rgba(10,10,10,0.08)',
          boxShadow: '0 20px 40px -20px rgba(10,10,10,0.12)',
          opacity: open != null ? 1 : 0,
          transform: open != null ? 'translateY(0)' : 'translateY(-8px)',
          pointerEvents: open != null ? 'auto' : 'none',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
        }}
      >
        <MegaPanel menu={open != null ? NAV[open].menu : null} />
      </div>
    </header>
  );
}

window.Nav = Nav;
