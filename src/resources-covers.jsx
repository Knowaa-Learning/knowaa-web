// Resource cover art — per-resource SVG compositions + case study imagery.
// Each composition pulls from the Knowaa visual system:
//   purple field + orange sun + pink accents + white hairline grid + noise.
// Keeps resources visually unified but individually recognizable.

function CoverPurpleSun({ seed = 0 }) {
  return (
    <svg className="rc-cover-art" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`pg${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3E1F78" />
          <stop offset="55%" stopColor="#503594" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <radialGradient id={`sun${seed}`} cx="72%" cy="30%" r="46%">
          <stop offset="0%" stopColor="#F37137" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#F37137" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F37137" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="600" fill={`url(#pg${seed})`} />
      <rect width="600" height="600" fill={`url(#sun${seed})`} />
      <g opacity="0.10" stroke="#FFFFFF" strokeWidth="1">
        {[100, 200, 300, 400, 500].map((y) => <line key={`h${y}`} x1="0" y1={y} x2="600" y2={y} />)}
        {[100, 200, 300, 400, 500].map((x) => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="600" />)}
      </g>
      <circle cx="430" cy="190" r="135" fill="#F37137" opacity="0.92" />
      <g fill="none" stroke="#FFFFFF" strokeWidth="1.25" opacity="0.55">
        <circle cx="430" cy="190" r="172" />
        <circle cx="430" cy="190" r="216" opacity="0.38" />
        <circle cx="430" cy="190" r="264" opacity="0.22" />
      </g>
      <path d="M -40 130 C 180 200, 260 380, 640 540" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
      <path d="M -40 160 C 180 240, 260 420, 640 580" fill="none" stroke="#ED1F80" strokeWidth="2.2" strokeLinecap="round" opacity="0.55" />
      <circle cx="138" cy="470" r="7" fill="#F37137" />
      <circle cx="104" cy="518" r="4" fill="#ED1F80" />
      <circle cx="178" cy="544" r="5" fill="#FFFFFF" opacity="0.7" />
    </svg>
  );
}

// Editorial cover — typographic abstraction of "attention"
function CoverAttention() {
  return (
    <svg className="rc-cover-art" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="att-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A0B3D" />
          <stop offset="100%" stopColor="#503594" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#att-bg)" />
      {/* concentric focus rings bleeding off */}
      <g fill="none" stroke="#ED1F80" strokeWidth="1.5" opacity="0.7">
        {[80, 140, 200, 260, 320, 380].map((r, i) => (
          <circle key={r} cx="300" cy="300" r={r} opacity={1 - i * 0.15} />
        ))}
      </g>
      {/* scanning orange line */}
      <path d="M -20 300 L 620 300" stroke="#F37137" strokeWidth="3" opacity="0.9" />
      <circle cx="300" cy="300" r="12" fill="#F37137" />
      <circle cx="300" cy="300" r="28" fill="none" stroke="#F37137" strokeWidth="2" opacity="0.6" />
      {/* distraction dots around the edge */}
      {[[80, 120], [520, 100], [110, 500], [500, 490], [60, 320], [540, 300]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill="#FFFFFF" opacity="0.5" />
      ))}
    </svg>
  );
}

// Case study cover — with client logo and subtle outcome
function CoverCase({ client, logo, accent = '#F37137' }) {
  return (
    <svg className="rc-cover-art" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`case-${client}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2D1760" />
          <stop offset="100%" stopColor="#503594" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill={`url(#case-${client})`} />
      {/* diagonal orange slash */}
      <path d="M 0 600 L 600 0 L 600 80 L 80 600 Z" fill={accent} opacity="0.18" />
      <path d="M 0 600 L 600 0" stroke={accent} strokeWidth="2" opacity="0.5" />
      {/* grid */}
      <g opacity="0.08" stroke="#FFFFFF" strokeWidth="1">
        {[150, 300, 450].map((y) => <line key={`h${y}`} x1="0" y1={y} x2="600" y2={y} />)}
        {[150, 300, 450].map((x) => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="600" />)}
      </g>
      {/* logo panel */}
      <rect x="60" y="60" width="200" height="72" fill="#FFFFFF" opacity="0.95" />
      <text x="160" y="105" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="22" fontWeight="800" fill="#0A0A0A" letterSpacing="-0.02em">{client}</text>
      <text x="60" y="180" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="600" fill="#FFFFFF" opacity="0.7" letterSpacing="0.16em">CASE STUDY</text>
      {/* focal orange circle */}
      <circle cx="430" cy="420" r="110" fill={accent} opacity="0.9" />
      <circle cx="430" cy="420" r="110" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}

// Sim vs deck — two stacked rectangles, one alive one dead
function CoverSimDeck() {
  return (
    <svg className="rc-cover-art" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sd-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6F2EA" />
          <stop offset="100%" stopColor="#EADFCB" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#sd-bg)" />
      {/* stack of dead slides */}
      <g transform="translate(80 120)">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={i * 6} y={i * 6} width="180" height="120" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.5" opacity={0.35 + i * 0.1} />
        ))}
        <text x="0" y="200" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="700" fill="#0A0A0A" opacity="0.6" letterSpacing="0.12em">30 SLIDES</text>
      </g>
      {/* the alive simulation */}
      <g transform="translate(310 280)">
        <rect x="0" y="0" width="220" height="220" fill="#503594" />
        <circle cx="110" cy="110" r="70" fill="#F37137" />
        <path d="M 85 110 L 100 125 L 140 90" stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="0" y="250" fontFamily="Poppins, sans-serif" fontSize="12" fontWeight="700" fill="#0A0A0A" letterSpacing="0.12em">30 SECONDS</text>
      </g>
      {/* tiny pink arrow */}
      <path d="M 270 320 L 310 380" stroke="#ED1F80" strokeWidth="3" fill="none" />
      <path d="M 305 370 L 312 385 L 295 380" fill="#ED1F80" />
    </svg>
  );
}

// Measurement — stylized chart that rejects a "quiz" score
function CoverMeasure() {
  return (
    <svg className="rc-cover-art" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
      <rect width="600" height="600" fill="#0A0A0A" />
      {/* huge X crossing out a pie chart */}
      <g transform="translate(300 300)">
        <circle cx="0" cy="0" r="180" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.3" />
        <path d="M 0 0 L 0 -180 A 180 180 0 0 1 140 115 Z" fill="#503594" opacity="0.7" />
        <path d="M 0 0 L 140 115 A 180 180 0 0 1 -170 60 Z" fill="#F37137" opacity="0.7" />
        <path d="M 0 0 L -170 60 A 180 180 0 0 1 0 -180 Z" fill="#ED1F80" opacity="0.7" />
      </g>
      {/* giant X through it */}
      <g stroke="#F37137" strokeWidth="10" strokeLinecap="round">
        <line x1="120" y1="120" x2="480" y2="480" />
        <line x1="480" y1="120" x2="120" y2="480" />
      </g>
      <text x="60" y="540" fontFamily="Poppins, sans-serif" fontSize="14" fontWeight="700" fill="#FFFFFF" letterSpacing="0.12em" opacity="0.85">QUIZZES ARE NOT CAPABILITY</text>
    </svg>
  );
}

// Insight covers — smaller, typographic, minimal
function CoverInsight({ word, accent }) {
  return (
    <svg className="rc-cover-art" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
      <rect width="600" height="600" fill={accent} />
      <g opacity="0.10" stroke="#FFFFFF" strokeWidth="1">
        {[150, 300, 450].map((y) => <line key={`h${y}`} x1="0" y1={y} x2="600" y2={y} />)}
      </g>
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central"
        fontFamily="Poppins, sans-serif" fontSize="180" fontWeight="900" fill="#FFFFFF" opacity="0.96" letterSpacing="-0.04em">
        {word}
      </text>
      <text x="50" y="560" fontFamily="Poppins, sans-serif" fontSize="13" fontWeight="700" fill="#FFFFFF" opacity="0.85" letterSpacing="0.16em">SHORT INSIGHT</text>
    </svg>
  );
}

// AI personas — orbit of circles
function CoverAIPersonas() {
  return (
    <svg className="rc-cover-art" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="ai-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#503594" />
          <stop offset="100%" stopColor="#1A0B3D" />
        </radialGradient>
      </defs>
      <rect width="600" height="600" fill="url(#ai-bg)" />
      {/* orbits */}
      <g fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.3">
        <ellipse cx="300" cy="300" rx="240" ry="90" />
        <ellipse cx="300" cy="300" rx="240" ry="90" transform="rotate(60 300 300)" />
        <ellipse cx="300" cy="300" rx="240" ry="90" transform="rotate(-60 300 300)" />
      </g>
      {/* personas */}
      <circle cx="300" cy="300" r="50" fill="#F37137" />
      <circle cx="540" cy="300" r="22" fill="#ED1F80" />
      <circle cx="60" cy="300" r="22" fill="#7C3AED" />
      <circle cx="420" cy="135" r="18" fill="#FFFFFF" opacity="0.9" />
      <circle cx="180" cy="465" r="18" fill="#FFFFFF" opacity="0.9" />
      <circle cx="180" cy="135" r="15" fill="#F37137" opacity="0.7" />
      <circle cx="420" cy="465" r="15" fill="#ED1F80" opacity="0.7" />
    </svg>
  );
}

// Dispatcher — picks the right cover per id/type
function ResourceCover({ resource }) {
  const { id, cover, type, client } = resource;
  if (cover === 'purple-sun') return <CoverPurpleSun seed={1} />;
  if (cover === 'video') return <CoverAttention />;
  if (cover === 'sim-vs-deck') return <CoverSimDeck />;
  if (cover === 'measure') return <CoverMeasure />;
  if (cover === 'ai-personas') return <CoverAIPersonas />;
  if (cover === 'insight-roleplay') return <CoverInsight word="play" accent="#503594" />;
  if (cover === 'insight-micro') return <CoverInsight word="short" accent="#F37137" />;
  if (cover === 'insight-leadership') return <CoverInsight word="lead" accent="#ED1F80" />;
  if (type === 'case') {
    const shortName = (client || '').split(' ')[0];
    return <CoverCase client={shortName} />;
  }
  return <CoverPurpleSun seed={id.length} />;
}

Object.assign(window, { ResourceCover, CoverPurpleSun, CoverAttention, CoverCase, CoverSimDeck, CoverMeasure, CoverAIPersonas, CoverInsight });
