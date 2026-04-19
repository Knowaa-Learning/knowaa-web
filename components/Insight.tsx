export default function Insight() {
  return (
    <section id="insight" style={{ padding: 'clamp(80px, 10vw, 140px) 16px', background: 'var(--bg-cream)' }}>
      <div style={{ maxWidth: 1480, margin: '0 auto', padding: '0 clamp(24px, 4vw, 56px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'clamp(40px, 5vw, 64px)', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-50)' }}>
            <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--knowaa-purple)', marginRight: 10, verticalAlign: 'middle' }} />
            Insight of the week · Apr 14, 2026
          </div>
          <a href="#resources" style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            All resources
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
              <path d="M2 7 H11 M8 3 L11 7 L8 11" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <a href="#insight-feature" className="insightCard" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px, 3vw, 48px)',
          background: '#FFFFFF', borderRadius: 24, overflow: 'hidden',
          border: '1px solid var(--ink-15)',
          transition: 'transform 0.35s cubic-bezier(.2,.7,.2,1), box-shadow 0.35s ease',
        }}>
          <div style={{
            position: 'relative', aspectRatio: '4 / 3',
            background: `radial-gradient(ellipse at 20% 30%, #FF2D87 0%, transparent 55%),
                         radial-gradient(ellipse at 80% 80%, #9B3DFF 0%, transparent 55%),
                         linear-gradient(135deg, #4A0FB8 0%, #1A0B3D 100%)`,
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', bottom: 20, left: 24, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
              [cover image · replace with article hero]
            </div>
          </div>
          <div style={{ padding: 'clamp(32px, 3vw, 56px) clamp(32px, 3vw, 56px) clamp(32px, 3vw, 56px) 0', display: 'flex', flexDirection: 'column', gap: 24, justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 12px', borderRadius: 999, background: 'rgba(74,15,184,0.08)', color: 'var(--knowaa-purple)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24 }}>Field note · 7 min read</div>
              <h3 style={{ margin: 0, fontSize: 'clamp(28px, 3.2vw, 44px)', lineHeight: 1.08, letterSpacing: '-0.025em', fontWeight: 600, color: 'var(--ink)', textWrap: 'balance' as any }}>The course is dead. Long live the capability.</h3>
              <p style={{ margin: '20px 0 0', fontSize: 16, lineHeight: 1.55, color: 'var(--ink-70)', maxWidth: '48ch', textWrap: 'pretty' as any }}>
                Why the most important shift in enterprise L&D isn&apos;t AI — it&apos;s the move from content delivery to measured capability, and what that changes about how learning is scoped, produced, and evaluated.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', paddingTop: 24, borderTop: '1px solid var(--ink-15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #4A0FB8, #9B3DFF)', flexShrink: 0 }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', whiteSpace: 'nowrap' }}>Knowaa Editorial</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-50)', whiteSpace: 'nowrap' }}>Placeholder author</div>
                </div>
              </div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 500, color: 'var(--ink)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                Read the essay
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                  <path d="M2 7 H11 M8 3 L11 7 L8 11" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
