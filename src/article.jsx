// ARTICLE READING PAGE — matches reference structure.
// Purple hero band at top (narrow, with character illustration on the right),
// narrow body column, mid-article stat card, share row, 3-up related footer.

const { useEffect: useEffectArt, useRef: useRefArt, useMemo: useMemoArt } = React;

/* ─────────────────────── Article body (content) ─────────────────────── */
const ARTICLE_BODY = [
  { type: 'lede',
    text: 'Most learning programs lose the learner within the first few minutes. The issue is simpler and more structural than content quality. Attention has already shifted elsewhere.'
  },

  { type: 'h2', text: 'The constraint is not inside the content' },
  { type: 'p',
    text: 'When a program underperforms, the instinct is to audit the content: Was it too dense? Was the narrative muddled? Did we open with the right hook? Those are not the wrong questions, but they are almost never the constraint. The learner is not wrestling with a mis-sequenced argument. They are gone.'
  },
  { type: 'p',
    text: 'L&D has been trained on a particular loss-narrative: someone checks in, finishes the intro, makes it most of the way through, fades on the closing activities. That is the loss curve for a well-designed programme launched into a room that has already paid attention. It is also a myth. The loss curve for anything launched cold into the modern workweek starts at the front, not the end.'
  },

  { type: 'h2', text: 'Experience quality functions as a signal' },
  { type: 'p',
    text: 'Experience quality is often framed as a design decision. Higher production, polished narration, a thoughtful interface design. It can feel like a cost line on a budget. But when the programme is competing with a full inbox and a sixty-slide deck already open on another monitor, the experience it creates in the first thirty seconds is also doing a signalling job. The experience quality tells the learner, implicitly, how much the organisation thinks this moment is worth.'
  },
  { type: 'p',
    text: 'People can read the signal immediately. They are making a judgment call — not about the content, but about whether it is going to reward the time. If the answer reads as no, attention routes elsewhere before a single learning objective gets a hearing.'
  },

  { type: 'stat' },

  { type: 'h2', text: 'The threshold is crossed early' },
  { type: 'p',
    text: 'Designing for the attention threshold is different from just more engagement up front. Certain moves are available to an experienced designer — establishing the stakes of this specific session with a specific learner, demonstrating that the session understands their context, declaring early what the learner will be able to do by the end. Each of these reads as quality in the first fifteen seconds, and each of them pulls attention forward rather than trying to recapture it later.'
  },
  { type: 'p',
    text: 'What it does not work to rely on is volume. More activity, more notifications, more required clicks — all of these can read as noise. The learner will downsize cognitive effort accordingly. A performance is not a fair substitute for signal.'
  },

  { type: 'h2', text: 'What to ask before commissioning the next program' },
  { type: 'p',
    text: 'Two questions are worth running at the front end of a learning programme, ahead of the content-scoping conversation. First: what would cause our most valuable learners to give this session less than two minutes? Second: what quality of experience would they expect from something else that competes for their time — the last good product demo they watched, the last serious piece of business writing they read, the last tool that earned their attention? If the answers to those two questions diverge — and they usually do — you have found the constraint.'
  },
  { type: 'p',
    text: 'The follow-on is straightforward. Build backward from the quality threshold the learner already expects, not forward from the content scope. The cost of that inversion is smaller than it used to be, because the production cost of a high-quality simulated experience has fallen sharply since 2022. But the quality itself is not optional. Below a certain threshold, attention is not present. If it is not present, the content does not land, no matter how good.'
  },
];

/* Related — stub picker from the resources data */
function pickRelated(currentId, count = 3) {
  const pool = (window.RESOURCES || []).filter(r => r.id !== currentId);
  return pool.slice(0, count);
}

function Article({ resourceId }) {
  const resource = useMemoArt(() => {
    const id = resourceId || (window.RESOURCES && window.RESOURCES[0] && window.RESOURCES[0].id);
    return (window.RESOURCES || []).find(r => r.id === id) || (window.RESOURCES || [])[0];
  }, [resourceId]);

  /* Scroll progress bar */
  const progressRef = useRefArt(null);
  useEffectArt(() => {
    const el = progressRef.current; if (!el) return;
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        el.style.transform = `scaleX(${max > 0 ? Math.min(1, h.scrollTop / max) : 0})`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!resource) return null;

  const related = pickRelated(resource.id, 3);
  const typeLabel = window.TYPES && window.TYPES.find(t => t.key === resource.type)?.label;

  return (
    <article className="art">
      <style>{window.CSS_ART}</style>

      {/* Scroll progress */}
      <div className="art__progress" aria-hidden>
        <span ref={progressRef} />
      </div>

      {/* ─── PURPLE HERO BAND ─── */}
      <div className="art__hero-wrap">
        <header className="art__hero">
          {/* Back link */}
          <a className="art__back" href="Knowaa Resources.html" aria-label="Back to Resources">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
              <path d="M12 7 H2 M6 3 L2 7 L6 11" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Back to Resources</span>
          </a>

          <div className="art__hero-grid">
            <div className="art__hero-text">
              <span className="art__tag">{resource.category}</span>
              <h1 className="art__h1">{resource.title}</h1>
              <div className="art__meta">
                <span>By {resource.author || resource.client}</span>
                <span className="art__meta-dot">·</span>
                <span>{window.formatDate(resource.publishedAt)}</span>
                <span className="art__meta-dot">·</span>
                <span>{resource.readTime}</span>
              </div>
            </div>

            {/* Character illustration — placeholder for now */}
            <div className="art__hero-art" aria-hidden>
              <ArtCharacter />
            </div>
          </div>
        </header>
      </div>

      {/* ─── BODY ─── */}
      <div className="art__body-wrap">
        <div className="art__body">
          {ARTICLE_BODY.map((block, i) => {
            if (block.type === 'lede') {
              return <p key={i} className="art__lede">{block.text}</p>;
            }
            if (block.type === 'p') {
              return <p key={i} className="art__p">{block.text}</p>;
            }
            if (block.type === 'h2') {
              return <h2 key={i} className="art__h2">{block.text}</h2>;
            }
            if (block.type === 'h3') {
              return <h3 key={i} className="art__h3">{block.text}</h3>;
            }
            if (block.type === 'pullquote') {
              return (
                <aside key={i} className="art__pull">
                  <p className="art__pull-text">{block.quote}</p>
                </aside>
              );
            }
            if (block.type === 'stat') {
              return <StatCard key={i} />;
            }
            return null;
          })}
        </div>
      </div>

      {/* ─── SHARE ─── */}
      <div className="art__share-wrap">
        <div className="art__share">
          <span className="art__share-label">Share</span>
          <a href="#" className="art__share-btn" aria-label="Share on LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.44 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.8c0-1.62-.03-3.7-2.25-3.7-2.25 0-2.6 1.76-2.6 3.58V22H7.66V8z"/></svg>
          </a>
          <a href="#" className="art__share-btn" aria-label="Share on X">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M18.9 1.5h3.68l-8.05 9.2L24 22.5h-7.4l-5.8-7.58L4.18 22.5H.5l8.6-9.83L0 1.5h7.58l5.24 6.93L18.9 1.5zm-1.3 18.84h2.04L6.5 3.56H4.32l13.28 16.78z"/></svg>
          </a>
          <a href="#" className="art__share-btn" aria-label="Copy link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1.5 1.5"/><path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1.5-1.5"/></svg>
          </a>
          <a href="#" className="art__share-btn" aria-label="Share by email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6L12 13 2 6"/></svg>
          </a>
        </div>
      </div>

      {/* ─── RELATED ─── */}
      {related.length > 0 && (
        <section className="art__related">
          <div className="art__related-head">
            <span className="art__sec-label">Related posts</span>
          </div>
          <div className="art__related-grid">
            {related.map(r => (
              <a key={r.id} className="art__related-card" href={`Knowaa Article.html?id=${r.id}`}>
                <div className="art__related-cover">
                  <img src={r.image} alt={r.title} loading="lazy" />
                  <span className="art__related-cat">{r.category}</span>
                </div>
                <div className="art__related-body">
                  <h3 className="art__related-title">{r.title}</h3>
                  <div className="art__related-meta">
                    <span>{r.author || r.client}</span>
                    <span className="art__meta-dot">·</span>
                    <span>{r.readTime}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

/* ─── Character illustration placeholder ─── */
function ArtCharacter() {
  // Simple stylised character (person with headphones + hoodie),
  // echoing the reference's illustrated hero. Draws inline so no asset needed.
  return (
    <svg className="art__char" viewBox="0 0 320 320" aria-hidden>
      {/* Background soft halo */}
      <defs>
        <radialGradient id="char-halo" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#FF9AB8" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#FF9AB8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="150" r="130" fill="url(#char-halo)" />

      {/* Hoodie (red) */}
      <path d="M80 240 Q80 180 130 170 L190 170 Q240 180 240 240 L240 310 L80 310 Z" fill="#E23A3A" />
      <path d="M130 170 Q130 150 160 148 Q190 150 190 170 Z" fill="#C92B2B" />

      {/* Hair (back layer) */}
      <path d="M108 130 Q108 82 160 78 Q212 82 212 130 L212 160 L108 160 Z" fill="#1A1A1A" />

      {/* Face */}
      <ellipse cx="160" cy="148" rx="44" ry="52" fill="#F5D4B3" />

      {/* Hair fringe */}
      <path d="M120 118 Q140 95 160 98 Q180 95 200 118 Q195 110 160 108 Q125 110 120 118 Z" fill="#1A1A1A" />
      <path d="M122 128 Q150 110 160 115 Q170 110 198 128 Q188 112 160 112 Q132 112 122 128 Z" fill="#1A1A1A" />

      {/* Eyes */}
      <circle cx="144" cy="152" r="3" fill="#1A1A1A" />
      <circle cx="176" cy="152" r="3" fill="#1A1A1A" />

      {/* Blush */}
      <circle cx="138" cy="165" r="5" fill="#F5A6A0" opacity="0.6" />
      <circle cx="182" cy="165" r="5" fill="#F5A6A0" opacity="0.6" />

      {/* Smile */}
      <path d="M150 172 Q160 180 170 172" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Headphone band */}
      <path d="M108 130 Q160 90 212 130" stroke="#1A1A1A" strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* Headphone cups */}
      <ellipse cx="108" cy="148" rx="14" ry="18" fill="#FF6B35" />
      <ellipse cx="108" cy="148" rx="9" ry="13" fill="#1A1A1A" />
      <ellipse cx="212" cy="148" rx="14" ry="18" fill="#FF6B35" />
      <ellipse cx="212" cy="148" rx="9" ry="13" fill="#1A1A1A" />
    </svg>
  );
}

/* ─── Mid-article stat card ─── */
function StatCard() {
  return (
    <div className="art__stat">
      <div className="art__stat-top">
        <span className="art__stat-brand">KNOWAA</span>
      </div>
      <div className="art__stat-head">
        <div className="art__stat-kicker">THE MODERN LEARNER</div>
        <div className="art__stat-title">INSIGHTS FOR COMPANIES WITH 500+ EMPLOYEES</div>
        <div className="art__stat-sub">Gen Y &amp; Gen Z now represent <span className="art__stat-hi">67%</span> of the workforce</div>
      </div>

      <div className="art__stat-row">
        <div className="art__stat-num">
          <div className="art__stat-big">5–10<span className="art__stat-min">min</span></div>
          <div className="art__stat-cap">Average daily time workers spend on learning content</div>
        </div>
        <div className="art__stat-num">
          <div className="art__stat-big">74<span className="art__stat-min">%</span></div>
          <div className="art__stat-cap">Workers who say their training feels outdated within the first session</div>
        </div>
        <div className="art__stat-num">
          <div className="art__stat-big">15<span className="art__stat-min">%</span></div>
          <div className="art__stat-cap">Content absorbed when learners lose attention in the first two minutes</div>
        </div>
      </div>

      <div className="art__stat-row art__stat-row--split">
        <div className="art__stat-col">
          <div className="art__stat-col-title">OFFICE WORKERS</div>
          <div className="art__stat-col-big">80<span className="art__stat-col-min">%</span></div>
          <div className="art__stat-col-cap">Interrupt learning content within the first four minutes of a session</div>
          <div className="art__stat-col-big art__stat-col-big--sm">39<span className="art__stat-col-min">%</span></div>
          <div className="art__stat-col-cap">Complete self-paced learning without supervision</div>
        </div>
        <div className="art__stat-col art__stat-col--right">
          <div className="art__stat-col-title">REMOTE WORKERS</div>
          <div className="art__stat-col-big">34<span className="art__stat-col-min">%</span></div>
          <div className="art__stat-col-cap">Report their org's training is actively relevant to their current role</div>
          <div className="art__stat-col-big art__stat-col-big--sm">48<span className="art__stat-col-min">%</span></div>
          <div className="art__stat-col-cap">Would engage more with content that reflected their actual workflow</div>
        </div>
      </div>
    </div>
  );
}

window.Article = Article;
window.ARTICLE_BODY = ARTICLE_BODY;
