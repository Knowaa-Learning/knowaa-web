export default function Footer() {
  return (
    <footer id="contact" style={{ padding: '48px 16px', background: '#FFFFFF', borderTop: '1px solid var(--ink-15)' }}>
      <div style={{
        maxWidth: 1480, margin: '0 auto', padding: '0 clamp(24px, 4vw, 56px)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 13, color: 'var(--ink-50)', fontWeight: 500, letterSpacing: '0.04em' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/knowaa-logo.svg" alt="Knowaa" style={{ height: 22, width: 'auto' }} />
          <span>© 2026 Knowaa</span>
        </div>
        <div style={{ fontSize: 13, color: 'var(--ink-50)' }}>
          Footer will be designed together in a later pass.
        </div>
      </div>
    </footer>
  );
}
