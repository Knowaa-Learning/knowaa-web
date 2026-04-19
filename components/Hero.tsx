'use client';

import { useState, useEffect, useRef } from 'react';

function TypedLoop({ words, typeSpeed = 65, deleteSpeed = 35, pauseFull = 1400, pauseEmpty = 300 }: { words: string[]; typeSpeed?: number; deleteSpeed?: number; pauseFull?: number; pauseEmpty?: number }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');

  useEffect(() => {
    let t: any;
    const current = words[i];
    if (phase === 'typing') {
      if (text.length < current.length) t = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      else t = setTimeout(() => setPhase('deleting'), pauseFull);
    } else {
      if (text.length > 0) t = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
      else t = setTimeout(() => { setI((i + 1) % words.length); setPhase('typing'); }, pauseEmpty);
    }
    return () => clearTimeout(t);
  }, [text, phase, i, words, typeSpeed, deleteSpeed, pauseFull, pauseEmpty]);

  return (
    <span style={{ display: 'inline-block' }}>
      {text}
      <span aria-hidden style={{
        display: 'inline-block', width: '0.06em', height: '0.9em',
        marginLeft: '0.06em', background: '#FFFFFF', verticalAlign: '-0.08em',
        animation: 'caretBlink 1s steps(1) infinite',
      }} />
    </span>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const r = requestAnimationFrame(() => setMounted(true));
    const t = setTimeout(() => setMounted(true), 80);
    return () => { cancelAnimationFrame(r); clearTimeout(t); };
  }, []);

  const heroCTA = 'Start a project';
  const heroCTA2 = 'Watch showreel';

  return (
    <section style={{ position: 'relative', padding: '16px 16px' }}>
      <div style={{
        position: 'relative',
        height: 'calc(100vh - 32px)', minHeight: 640, maxHeight: 900,
        borderRadius: 28, overflow: 'hidden', background: '#0A0A0A',
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'scale(1)' : 'scale(0.995)',
        transition: 'opacity 0.9s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1)',
      }}>
        <video ref={videoRef} autoPlay muted loop playsInline
          poster="/hero-poster.jpg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div aria-hidden style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0) 30%, rgba(10,10,10,0) 50%, rgba(10,10,10,0.55) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: 'clamp(32px, 5vw, 72px)', color: '#FFFFFF',
        }}>
          <h1 style={{
            fontFamily: "'Urbanist', sans-serif", fontSize: 48, fontWeight: 900,
            lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0, maxWidth: '22ch',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(28px)',
            transition: 'all 1s cubic-bezier(.2,.7,.2,1) 0.15s',
          }}>
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Drive Real Business Results Through</span>
            <span style={{ display: 'block', color: '#FFFFFF', minHeight: '1.1em' }}>
              <TypedLoop words={[
                'Innovative Learning', 'Microlearning', 'Personalized Learning',
                'Gamified Learning', 'AI-Infused Learning', 'Learning Campaigns',
              ]} />
            </span>
          </h1>
          <div style={{
            marginTop: 'clamp(28px, 3.5vw, 44px)', display: 'flex',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s cubic-bezier(.2,.7,.2,1) 0.35s',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0, flexWrap: 'wrap' }}>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '18px 28px', borderRadius: 999, background: '#FFFFFF',
                color: 'var(--ink)', fontSize: 15, fontWeight: 600,
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 30px -10px rgba(0,0,0,0.3)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                {heroCTA}
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                  <path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#showreel" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '18px 26px', borderRadius: 999,
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.3)',
                color: '#FFFFFF', fontSize: 15, fontWeight: 500,
                backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
              }}>
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.95)', color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="8" height="9" viewBox="0 0 8 9" aria-hidden>
                    <path d="M1 1 L7 4.5 L1 8 Z" fill="currentColor" />
                  </svg>
                </span>
                {heroCTA2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
