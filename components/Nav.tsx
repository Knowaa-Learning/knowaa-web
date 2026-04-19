'use client';

import { useState, useEffect, useRef } from 'react';

// The "o" icon system — purple stroke circle, magenta accent.
const OIcons: Record<string, JSX.Element> = {
  insights: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A0FB8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="13" r="5.75" />
      <path d="M17.5 5.5 L18.25 7.5 L20.25 8.25 L18.25 9 L17.5 11 L16.75 9 L14.75 8.25 L16.75 7.5 Z" fill="#FF2D87" stroke="#FF2D87" />
    </svg>
  ),
  cases: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A0FB8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="7.5" cy="9" r="4.25" />
      <circle cx="16.5" cy="9" r="4.25" />
      <circle cx="12" cy="15.5" r="4.25" fill="#FF2D87" stroke="#FF2D87" />
    </svg>
  ),
  newsletter: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A0FB8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="8" cy="14" r="5.25" />
      <path d="M12.5 10.5 L20 5 M17.5 5 L20 5 L20 7.75" stroke="#FF2D87" />
    </svg>
  ),
};

type NavItem = {
  label: string;
  href: string;
  menu: null | {
    lists: { heading: string; items: { title: string; desc: string; icon?: string }[] }[];
    feature?: { eyebrow: string; title: string; cta: string; isInsight?: boolean };
  };
};

const NAV: NavItem[] = [
  {
    label: 'Solutions', href: '#solutions',
    menu: {
      lists: [
        { heading: 'By format', items: [
          { title: 'Custom Learning', desc: 'Bespoke programmes for enterprise teams' },
          { title: 'Microlearning', desc: 'Short, focused modules — on demand' },
          { title: 'Gamified Learning', desc: 'Engagement through game mechanics' },
        ]},
        { heading: 'By approach', items: [
          { title: 'AI-Infused Learning', desc: 'Adaptive content that learns with the learner' },
          { title: 'Personalized Learning', desc: 'Role- and skill-aware journeys' },
          { title: 'Learning Campaigns', desc: 'Behaviour change at scale' },
        ]},
      ],
    },
  },
  {
    label: 'Industries', href: '#industries',
    menu: {
      lists: [
        { heading: 'Sectors', items: [
          { title: 'Financial Services', desc: 'Banks · Insurance · Wealth' },
          { title: 'Life Sciences', desc: 'Pharma · Biotech · Med-device' },
          { title: 'Technology', desc: 'Enterprise SaaS · Platforms' },
        ]},
        { heading: '', items: [
          { title: 'Energy & Utilities', desc: 'Oil & gas · Renewables · Grid' },
          { title: 'Consumer & Retail', desc: 'CPG · Retail · Hospitality' },
          { title: 'Industrial & Logistics', desc: 'Manufacturing · Supply chain' },
        ]},
      ],
    },
  },
  {
    label: 'Resources', href: '#resources',
    menu: {
      lists: [
        { heading: '', items: [
          { title: 'Insights', desc: 'Field notes and essays from our studio', icon: 'insights' },
          { title: 'Case Studies', desc: 'Work with real, measurable outcomes', icon: 'cases' },
          { title: 'Newsletter signup', desc: 'Weekly, under 5 minutes', icon: 'newsletter' },
        ]},
      ],
      feature: {
        eyebrow: 'Insight of the week',
        title: 'The course is dead. Long live the capability.',
        cta: 'Read the essay',
        isInsight: true,
      },
    },
  },
  {
    label: 'About', href: '#about',
    menu: {
      lists: [
        { heading: 'Company', items: [
          { title: 'Our Story', desc: 'Where Knowaa started' },
          { title: 'Team', desc: 'The people behind the work' },
          { title: 'Careers', desc: 'Open roles' },
        ]},
        { heading: 'Press', items: [
          { title: 'In the News', desc: 'Recent coverage' },
          { title: 'Awards', desc: 'Recognition and honours' },
          { title: 'Brand Kit', desc: 'Logos and guidelines' },
        ]},
      ],
    },
  },
  { label: 'Contact us', href: '#contact', menu: null },
];

function useNavScroll() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  useEffect(() => {
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

function Feature({ feature }: { feature: NonNullable<NavItem['menu']>['feature'] }) {
  if (!feature) return null;
  return (
    <a href="#" style={{
      display: 'grid', gridTemplateColumns: '1fr', gap: 14,
      padding: '4px 28px 4px 0', borderRight: '1px solid rgba(10,10,10,0.12)',
      color: 'var(--ink)', textDecoration: 'none', height: '100%',
    }}>
      <div style={{
        aspectRatio: '16 / 9', borderRadius: 8,
        background: `radial-gradient(ellipse at 25% 25%, #FF2D87 0%, transparent 55%),
                     radial-gradient(ellipse at 80% 80%, #9B3DFF 0%, transparent 55%),
                     linear-gradient(135deg, #4A0FB8 0%, #1A0B3D 100%)`,
      }} />
      <div>
        <div style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--knowaa-purple)', marginBottom: 8 }}>{feature.eyebrow}</div>
        <div style={{ fontSize: 15, lineHeight: 1.3, letterSpacing: '-0.01em', fontWeight: 600, color: 'var(--ink)', textWrap: 'balance' as any, marginBottom: 10 }}>{feature.title}</div>
        <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          {feature.cta}
          <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden>
            <path d="M2 6 H10 M7 2 L10 6 L7 10" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </a>
  );
}

function MegaPanel({ menu }: { menu: NavItem['menu'] }) {
  if (!menu) return null;
  const hasFeature = !!menu.feature;
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: hasFeature ? '360px 1fr' : '1fr 1fr',
      gap: 48, padding: '40px 56px 44px',
      maxWidth: 1480, margin: '0 auto',
    }}>
      {hasFeature && <Feature feature={menu.feature} />}
      {menu.lists.map((col, ci) => (
        <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {col.heading && (
            <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-50)', fontWeight: 600, marginBottom: 8 }}>{col.heading}</div>
          )}
          {col.items.map((it, ii) => (
            <a key={ii} href="#" style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '12px 14px', borderRadius: 10, color: 'var(--ink)', textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(10,10,10,0.04)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              {it.icon && OIcons[it.icon] && (
                <span style={{ width: 28, height: 28, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{OIcons[it.icon]}</span>
              )}
              <span style={{ minWidth: 0 }}>
                <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-0.005em' }}>{it.title}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-50)', marginTop: 2 }}>{it.desc}</div>
              </span>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Nav() {
  const isHidden = useNavScroll();
  const [open, setOpen] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const closeTimer = useRef<any>(null);
  const openTimer = useRef<any>(null);

  const scheduleOpen = (i: number) => {
    clearTimeout(closeTimer.current); clearTimeout(openTimer.current);
    if (NAV[i].menu == null) { setOpen(null); return; }
    openTimer.current = setTimeout(() => setOpen(i), 80);
  };
  const scheduleClose = () => {
    clearTimeout(openTimer.current); clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 180);
  };
  const cancelClose = () => { clearTimeout(closeTimer.current); };

  return (
    <header onMouseLeave={scheduleClose} style={{
      position: 'fixed', top: 0,
      left: 'var(--page-gutter, 0px)', right: 'var(--page-gutter, 0px)',
      maxWidth: 'calc(1680px - (var(--page-gutter, 0px) * 2))',
      marginLeft: 'auto', marginRight: 'auto', zIndex: 100,
      transform: isHidden ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'transform 0.45s cubic-bezier(.2,.7,.2,1)',
    }}>
      <div style={{
        background: '#FFFFFF',
        borderBottom: open == null ? '1px solid rgba(10,10,10,0.08)' : '1px solid rgba(10,10,10,0.06)',
        transition: 'border-color 0.25s ease',
      }}>
        <div style={{
          maxWidth: 1480, margin: '0 auto', padding: '18px 40px',
          display: 'grid', gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center', gap: 40,
        }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, justifySelf: 'start' }} aria-label="Knowaa home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/knowaa-logo.svg" alt="Knowaa" style={{ height: 39, width: 'auto' }} />
          </a>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4, justifySelf: 'center' }}>
            {NAV.map((it, i) => (
              <a key={it.label} href={it.href}
                onMouseEnter={() => { setHover(i); scheduleOpen(i); }}
                onMouseLeave={() => setHover(null)}
                style={{
                  position: 'relative', padding: '10px 18px', fontSize: 16, fontWeight: 500,
                  letterSpacing: '-0.005em', color: 'var(--ink)', whiteSpace: 'nowrap', textDecoration: 'none',
                }}>
                {it.label}
                <span aria-hidden style={{
                  position: 'absolute', left: 18, right: 18, bottom: 6,
                  height: 1, background: 'var(--ink)',
                  transform: (hover === i || open === i) ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s cubic-bezier(.2,.7,.2,1)',
                }} />
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose} style={{
        position: 'absolute', top: '100%', left: 0, right: 0,
        background: '#FFFFFF', borderBottom: '1px solid rgba(10,10,10,0.08)',
        boxShadow: '0 20px 40px -20px rgba(10,10,10,0.12)',
        opacity: open != null ? 1 : 0,
        transform: open != null ? 'translateY(0)' : 'translateY(-8px)',
        pointerEvents: open != null ? 'auto' : 'none',
        transition: 'opacity 0.22s ease, transform 0.22s ease',
      }}>
        <MegaPanel menu={open != null ? NAV[open].menu : null} />
      </div>
    </header>
  );
}
