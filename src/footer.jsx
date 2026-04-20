// Minimal white footer: contact line + compact "book a call" on the right.
(function () {
  const { useState } = React;

  const EMAIL = 'hello@knowaa.com';
  const PHONE = '+1 (415) 555-0132';

  function SocialIcon({ label, href, children }) {
    return (
      <a href={href} aria-label={label} style={{
        width: '30px', height: '30px', borderRadius: '50%',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--ink-50)',
        transition: 'color 0.2s ease, background 0.2s ease',
      }}
        onMouseEnter={(e)=>{ e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.background = 'rgba(10,10,10,0.05)'; }}
        onMouseLeave={(e)=>{ e.currentTarget.style.color = 'var(--ink-50)'; e.currentTarget.style.background = 'transparent'; }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
      </a>
    );
  }

  function Footer() {
    const [hovering, setHovering] = useState(false);
    return (
      <footer id="contact" data-screen-label="Footer" style={{
        background: '#FFFFFF',
        borderTop: '1px solid var(--ink-15)',
        padding: 'clamp(40px, 5vw, 56px) clamp(24px, 4vw, 56px) 24px',
      }}>
        {/* Main row */}
        <div style={{
          maxWidth: '1480px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) auto',
          gap: '32px',
          alignItems: 'center',
        }} className="footer-main">
          {/* Left — tagline + contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0 }}>
            <div style={{
              fontSize: 'clamp(20px, 2.2vw, 26px)',
              fontWeight: 500,
              letterSpacing: '-0.015em',
              color: 'var(--ink)',
              lineHeight: 1.25,
            }}>
              Have a project or a question?
            </div>
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '8px 20px',
              fontSize: '14px', color: 'var(--ink-70)',
            }}>
              <a href={`mailto:${EMAIL}`} style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                {EMAIL}
              </a>
              <span style={{ color: 'var(--ink-15)' }}>·</span>
              <a href={`tel:${PHONE.replace(/[^+\d]/g,'')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                {PHONE}
              </a>
            </div>
          </div>

          {/* Right — book a call CTA */}
          <a href="#book" onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 18px 14px 22px',
            borderRadius: '999px',
            background: 'var(--knowaa-purple)',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '-0.005em',
            textDecoration: 'none',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            transform: hovering ? 'translateY(-1px)' : 'translateY(0)',
            boxShadow: hovering ? '0 12px 24px -12px rgba(74,15,184,0.5)' : '0 0 0 rgba(0,0,0,0)',
            whiteSpace: 'nowrap',
            justifySelf: 'end',
          }}>
            Book a call
            <span style={{
              width: '26px', height: '26px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.18)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2 6 H10 M7 3 L10 6 L7 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>

        {/* Thin divider */}
        <div style={{
          maxWidth: '1480px', margin: '0 auto',
          marginTop: 'clamp(32px, 4vw, 48px)',
          paddingTop: '20px',
          borderTop: '1px solid var(--ink-15)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="assets/knowaa-logo.svg" alt="Knowaa" style={{ height: '18px', width: 'auto' }} />
            <span style={{ fontSize: '12px', color: 'var(--ink-50)' }}>
              © 2026 Knowaa
            </span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--ink-50)', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="#" style={{ color: 'inherit' }}>Privacy</a>
            <a href="#" style={{ color: 'inherit' }}>Terms</a>
            <span aria-hidden style={{ width: '1px', height: '14px', background: 'var(--ink-15)' }} />
            <div style={{ display: 'inline-flex', gap: '6px' }}>
              <SocialIcon label="LinkedIn" href="#">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4V9z" fill="currentColor" />
              </SocialIcon>
              <SocialIcon label="Email" href="mailto:hello@knowaa.com">
                <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11zm2.3-.5 6.7 5.2L18.7 6H5.3zM19 7.7l-6.4 5a1 1 0 0 1-1.2 0L5 7.7V17.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V7.7z" fill="currentColor" />
              </SocialIcon>
              <SocialIcon label="Facebook" href="#">
                <path d="M13.5 22v-8h2.7l.4-3.3h-3.1V8.6c0-.95.26-1.6 1.63-1.6H17V4.1c-.3-.04-1.32-.12-2.5-.12-2.47 0-4.17 1.5-4.17 4.27v2.45H7.6V14h2.73v8h3.17z" fill="currentColor" />
              </SocialIcon>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 720px) {
            .footer-main { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </footer>
    );
  }

  window.Footer = Footer;
})();
