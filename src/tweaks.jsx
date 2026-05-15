// Tweaks, only exposes hero copy knobs for now.
const { useState: useStateT, useEffect: useEffectT } = React;

function TweaksPanel({ tweaks, setTweaks }) {
  const [visible, setVisible] = useStateT(false);
  const [open, setOpen] = useStateT(true);

  useEffectT(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setVisible(true);
      if (d.type === '__deactivate_edit_mode') setVisible(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const update = (patch) => {
    const next = { ...tweaks, ...patch };
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
  };

  if (!visible) return null;

  const field = (key, label, rows = 1) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.6 }}>
        {label}
      </label>
      {rows > 1 ? (
        <textarea
          value={tweaks[key] || ''}
          onChange={(e) => update({ [key]: e.target.value })}
          rows={rows}
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: '8px',
            padding: '8px 10px',
            color: '#F5F1EA',
            fontSize: '13px',
            fontFamily: 'inherit',
            resize: 'vertical',
            outline: 'none',
          }}
        />
      ) : (
        <input
          value={tweaks[key] || ''}
          onChange={(e) => update({ [key]: e.target.value })}
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: '8px',
            padding: '8px 10px',
            color: '#F5F1EA',
            fontSize: '13px',
            fontFamily: 'inherit',
            outline: 'none',
          }}
        />
      )}
    </div>
  );

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px', right: '20px',
      width: open ? '320px' : 'auto',
      zIndex: 9999,
      background: 'rgba(10,10,10,0.92)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      color: '#F5F1EA',
      borderRadius: '16px',
      border: '1px solid rgba(245,241,234,0.15)',
      fontFamily: "'Poppins', sans-serif",
      boxShadow: '0 20px 50px -10px rgba(0,0,0,0.5)',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '14px 18px',
          color: 'inherit',
          fontSize: '13px', fontWeight: 500,
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF2D87' }} />
          Tweaks · Hero copy
        </span>
        <span style={{ fontSize: '11px', opacity: 0.6 }}>{open ? '▾' : '▸'}</span>
      </button>
      {open && (
        <div style={{ padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {field('heroHeadline', 'Hero headline', 2)}
          {field('heroCTA', 'Primary CTA')}
          {field('heroCTA2', 'Secondary CTA')}
          <div style={{ fontSize: '11px', opacity: 0.5, lineHeight: 1.4, marginTop: '4px' }}>
            Edits persist to disk.
          </div>
        </div>
      )}
    </div>
  );
}
window.TweaksPanel = TweaksPanel;
