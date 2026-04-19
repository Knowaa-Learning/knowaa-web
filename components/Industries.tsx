'use client';

import { useState } from 'react';

const INDUSTRIES = [
  {
    name: 'Technology', short: 'Enterprise SaaS · Platforms · Cloud',
    icon: (
      <svg width="56" height="56" viewBox="0 0 28 28" fill="none" stroke="#4A0FB8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="5" y="7" width="18" height="11" rx="1.25" />
        <path d="M3 20 L25 20" />
        <circle cx="14" cy="12.5" r="2" fill="#FF2D87" stroke="#FF2D87" />
      </svg>
    ),
  },
  {
    name: 'Pharma & Healthcare', short: 'Pharma · Biotech · Providers',
    icon: (
      <svg width="56" height="56" viewBox="0 0 28 28" fill="none" stroke="#4A0FB8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="4" y="10.5" width="20" height="7" rx="3.5" transform="rotate(-30 14 14)" />
        <path d="M14 14 L19 10 M10.75 16.5 L14 14" stroke="#FF2D87" />
      </svg>
    ),
  },
  {
    name: 'Aviation', short: 'Airlines · Aerospace · MRO',
    icon: (
      <svg width="56" height="56" viewBox="0 0 28 28" fill="none" stroke="#4A0FB8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M24 5 L14.5 14 L10 13 L7.5 15.5 L11 17 L13 20.5 L15.5 18 L14.5 13.5 L23.5 5.5 Z" />
        <path d="M5 22 L10 22 M7 19 L11 19" stroke="#FF2D87" />
      </svg>
    ),
  },
  {
    name: 'Manufacturing & Industrial', short: 'Discrete · Process · Supply chain',
    icon: (
      <svg width="56" height="56" viewBox="0 0 28 28" fill="none" stroke="#4A0FB8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3.5 L14 3.5 L14.6 5.3 L16.3 5.9 L17.8 4.8 L19.2 6.2 L18.1 7.7 L18.7 9.4 L20.5 10 L20.5 12 L18.7 12.6 L18.1 14.3 L19.2 15.8 L17.8 17.2 L16.3 16.1 L14.6 16.7 L14 18.5 L12 18.5 L11.4 16.7 L9.7 16.1 L8.2 17.2 L6.8 15.8 L7.9 14.3 L7.3 12.6 L5.5 12 L5.5 10 L7.3 9.4 L7.9 7.7 L6.8 6.2 L8.2 4.8 L9.7 5.9 L11.4 5.3 Z" />
        <circle cx="13" cy="11" r="2.5" />
        <circle cx="21" cy="19" r="3" fill="none" stroke="#FF2D87" />
        <circle cx="21" cy="19" r="1" fill="#FF2D87" stroke="#FF2D87" />
      </svg>
    ),
  },
];

export default function Industries() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section id="industries" style={{ padding: 'clamp(80px, 10vw, 140px) 16px', background: '#FFFFFF', borderTop: '1px solid var(--ink-15)' }}>
      <div style={{ maxWidth: 1480, margin: '0 auto', padding: '0 clamp(24px, 4vw, 56px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'end', marginBottom: 'clamp(56px, 6vw, 88px)' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-50)', marginBottom: 24 }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--knowaa-purple)', marginRight: 10, verticalAlign: 'middle' }} />
              Industries
            </div>
            <h2 style={{ margin: 0, fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 0.98, letterSpacing: '-0.03em', fontWeight: 600, color: 'var(--ink)' }}>Who we serve.</h2>
          </div>
          <p style={{ margin: 0, fontSize: 'clamp(16px, 1.3vw, 19px)', lineHeight: 1.55, color: 'var(--ink-70)', maxWidth: '44ch', alignSelf: 'end', textWrap: 'pretty' as any }}>
            We partner with enterprise organisations across four sectors where capability directly moves the business. Every industry page is written for the operating reality of that sector.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--ink-15)', borderBottom: '1px solid var(--ink-15)' }}>
          {INDUSTRIES.map((ind, i) => {
            const isHover = hover === i;
            return (
              <a key={ind.name} href={`#industry-${ind.name.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                  padding: 'clamp(40px, 5vw, 72px) 24px',
                  borderLeft: i === 0 ? 'none' : '1px solid var(--ink-15)',
                  color: 'var(--ink)', textDecoration: 'none',
                  transition: 'background 0.25s ease',
                  background: isHover ? 'rgba(74,15,184,0.03)' : 'transparent',
                }}>
                <div style={{
                  width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 28,
                  transform: isHover ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'transform 0.3s cubic-bezier(.2,.7,.2,1)',
                }}>{ind.icon}</div>
                <div style={{
                  fontSize: 'clamp(18px, 1.5vw, 22px)', fontWeight: 600, letterSpacing: '-0.01em',
                  lineHeight: 1.2, color: isHover ? 'var(--knowaa-purple)' : 'var(--ink)',
                  transition: 'color 0.25s ease', marginBottom: 8, textWrap: 'balance' as any,
                }}>{ind.name}</div>
                <div style={{ fontSize: 14, fontWeight: 400, color: 'var(--ink-50)', letterSpacing: '-0.005em', lineHeight: 1.4 }}>{ind.short}</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
