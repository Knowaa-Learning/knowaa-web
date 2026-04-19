const CLIENT_LOGOS = [
  { name: 'Teva',        src: '/logo-teva.svg' },
  { name: 'Monday',      src: '/logo-monday.svg' },
  { name: 'Check Point', src: '/logo-checkpoint.svg' },
  { name: 'Amdocs',      src: '/logo-amdocs.svg' },
  { name: 'Nespresso',   src: '/logo-nespresso.svg' },
  { name: 'Netafim',     src: '/logo-netafim.svg' },
  { name: 'McCann',      src: '/logo-mccan.svg' },
  { name: 'Signature',   src: '/logo-signature.svg' },
];

export default function Proof() {
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
        <div style={{
          display: 'flex', width: 'max-content',
          gap: 'clamp(50px, 5.4vw, 86px)', alignItems: 'center',
          animation: 'knowaaMarquee 42s linear infinite',
        }}>
          {row.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={logo.src} alt={logo.name}
              style={{ height: 40, width: 'auto', flexShrink: 0, objectFit: 'contain', opacity: 0.85, userSelect: 'none' }}
              draggable={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
