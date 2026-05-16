// Base height 40px. Some logos get per-logo overrides to balance optical size.
const CLIENT_LOGOS = [
  { name: 'Teva',        src: 'assets/logo-teva.svg' },
  { name: 'Monday',      src: 'assets/logo-monday.svg' },
  { name: 'Check Point', src: 'assets/logo-checkpoint.svg', height: 47 },
  { name: 'Amdocs',      src: 'assets/logo-amdocs.svg' },
  { name: 'Nespresso',   src: 'assets/logo-nespresso.svg',  height: 56 },
  { name: 'Netafim',     src: 'assets/logo-netafim.svg' },
  { name: 'McCann',      src: 'assets/logo-mccan.svg',      height: 56 },
  { name: 'Signature',   src: 'assets/logo-signature.svg',  height: 56 },
];

function Proof() {
  const row = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section id="proof" style={{ padding: '0 0 clamp(32px, 4vw, 56px)', background: '#FFFFFF' }}>
      <div aria-label="Client logos" style={{
        position: 'relative', overflow: 'hidden',
        borderTop: '1px solid var(--ink-15)',
        borderBottom: '1px solid var(--ink-15)',
        padding: '40px 0',
        maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
      }}>
        <div className="proof-row" style={{
          display: 'flex', width: 'max-content',
          gap: 'clamp(50px, 5.4vw, 86px)', alignItems: 'center',
          animation: 'knowaaMarquee 42s linear infinite',
        }}>
          {row.map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.name}
              className="proof-logo"
              data-scale={(logo.height || 40)}
              style={{
                height: (logo.height || 40) + 'px',
                width: 'auto', flexShrink: 0, objectFit: 'contain',
                opacity: 0.85, userSelect: 'none',
              }}
              draggable={false} />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes knowaaMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        /* Respect reduced-motion: pause the marquee. The row stays visible,
           gradient mask still trims edges so it looks intentional. */
        @media (prefers-reduced-motion: reduce) {
          .proof-row { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

window.Proof = Proof;
