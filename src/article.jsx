// ARTICLE READING PAGE, clean, narrow, editorial.
// Body content is keyed by resource id so we can add more articles over time.

const { useEffect: useEffectArt, useRef: useRefArt, useMemo: useMemoArt } = React;

/* ─────────────────────── Article bodies ───────────────────────
   Each entry provides the structured content the template renders.
   Block types:
     { type: 'lede', text }             , opening paragraph, larger weight
     { type: 'h2',   text }             , section heading
     { type: 'h3',   text }             , sub-heading
     { type: 'p',    text }             , paragraph
     { type: 'p',    html }             , paragraph with inline HTML (links, em, strong)
     { type: 'ul',   items: [...] }     , bulleted list
     { type: 'pull', text }             , pull quote (orange left rule, bold)
     { type: 'divider' }                , thin horizontal rule
   ──────────────────────────────────────────────────────────── */

const ARTICLE_BODIES = {
  'generic-training-production-ai-strategy': {
    banner: 'assets/articles/header-generic-training.jpg',
    bannerAlign: 'center',
    body: [
      { type: 'lede',
        text: 'For twenty years, the honest answer to \u201Cwhy is our training so abstract?\u201D was a production constraint. That constraint is gone. The question has changed.'
      },

      { type: 'h2', text: 'The production constraint that shaped an industry.' },
      { type: 'p',
        text: 'For twenty years the honest answer to why is our training so abstract was a production constraint. Building contextual learning, content built around specific roles, real decisions, and actual work environments, required scriptwriters, subject matter experts, video crews, and timelines that made role-specific variants economically impossible at scale. That constraint is gone.'
      },
      { type: 'p',
        text: 'Generative AI has reduced contextual content development from months to days. The question is no longer can we afford to build training that reflects how our people actually work. It is why are we still commissioning content that we know will not change behavior.'
      },

      { type: 'h2', text: 'Generic content was never a design choice. It was a workaround.' },
      { type: 'p',
        text: 'The learning industry normalized abstract, one-size-fits-all content because specificity was expensive. A single generic compliance module could serve 40,000 employees across functions and geographies, one production budget, universal deployment. Building role-specific variants, a version for warehouse supervisors that used their language, their scenarios, their actual decision points ,  required multiples of budget and timeline that most organizations could not justify.'
      },
      { type: 'p',
        text: 'So the field invented a rationalization called transferable principles. Learners would apply abstract frameworks to their own contexts. The research on that claim is not generous. John Sweller\u2019s work on cognitive load established that when learners must simultaneously process unfamiliar content and translate it into their own context, working memory is split between the task and the translation. The transfer rarely happens automatically. What gets lost is not motivation ,  it is the contextual cues that trigger retrieval in the moment the behavior is needed.'
      },

      { type: 'pull', text: 'Generic training did not fail because learners were disengaged. It failed because the gap between the training scenario and the real situation was too wide for most people to bridge.' },

      { type: 'p',
        text: 'A customer service representative trained on a fictional call-center scenario faces a real irate customer and finds no mental bridge between the two. That gap was accepted as an unavoidable cost of scale. It was not. It was a production cost that organizations passed onto learners in the form of reduced effectiveness, and rationalized as pedagogy.'
      },

      { type: 'h2', text: 'AI did not improve content production. It removed the constraint entirely.' },
      { type: 'p',
        text: 'The relevant shift is not that AI makes content development faster. It is that AI decouples contextual specificity from production cost. Those two things were previously inseparable. More specific content required more production resources, always. That relationship no longer holds.'
      },
      { type: 'p',
        text: 'Consider what that means in operational terms. A learning team previously commissioning a single role-specific video scenario, with a vendor, a script review cycle, and a six-to-eight-week production timeline, can now develop multiple role-specific variants using AI-assisted scripting, voice synthesis, and scenario generation in a fraction of that time and at a fraction of that cost.'
      },
      { type: 'p',
        text: 'When the cost of specificity collapses, the economic argument for generic content stops being a budget decision. It becomes a performance decision with a known outcome. An organization commissioning abstract leadership development built around a fictional mid-size company, or a generic safety program using scenarios that bear no resemblance to the actual site conditions a technician works in, is not managing a constraint. It is choosing to accept a lower probability of behavior change when an alternative is now operationally available at comparable cost.'
      },
      { type: 'p',
        text: 'The production barrier was real. The strategy barrier that has replaced it belongs to a different conversation, with different people accountable for the answer.'
      },

      { type: 'h2', text: 'Contextual specificity has a measurable performance mechanism.' },
      { type: 'p',
        text: 'The case for contextual learning is not that learners prefer it, though the evidence suggests they do. The case is mechanistic, because context determines retrieval. Memory research on encoding specificity, developed by Endel Tulving in the 1970s and consistently replicated since, establishes that learning is most likely to be retrieved in conditions that match the conditions under which it was encoded.'
      },
      { type: 'p',
        text: 'A technician trained on a safety procedure using the actual equipment names, the actual fault codes, and the actual sequence of decisions she faces on shift is more likely to retrieve that training when it is needed than a technician trained on a generalized version of the same content. This is not an argument for engagement. It is an argument for architecture. The specificity of the learning environment is a design variable with a direct effect on whether behavior changes in the real environment.'
      },
      { type: 'p',
        text: 'What contextual learning actually requires is a different starting point, not a larger budget. Instead of beginning with a topic, we need a module on managing difficult conversations, the work begins with a behavior in a specific situation. When a regional sales manager is six weeks from quarter close and a deal is stalling because procurement has introduced a new approval layer the rep has never navigated before, what does an effective conversation with the procurement lead look like, and what does an ineffective one cost the business?'
      },
      { type: 'p',
        text: 'The counterargument worth taking seriously is that contextual content requires ongoing maintenance. A module built around specific systems, terminology, and workflows becomes outdated as the organization changes. This is a real operational cost, and AI-assisted development does not eliminate it. What it does is reduce the update burden enough to make continuous iteration feasible where it previously was not.'
      },

      { type: 'h2', text: 'The production constraint gave L&D cover. That cover is gone.' },
      { type: 'p',
        text: 'For two decades, when a business leader asked why the leadership program was built around fictional scenarios, or why the compliance training bore no resemblance to the actual decisions people faced, the honest answer was available. Building something more specific costs more than the budget allows. That answer carried real weight. It was true.'
      },
      { type: 'p',
        text: 'That answer is no longer available in the same form. The next program brief your team writes, the next vendor conversation you have, the next budget request you approve carries a question that cannot be deflected by pointing at production timelines. The question is whether the learning being commissioned is designed around how work actually happens in your organization, or around what was easiest to build when building things was hard.'
      },

      { type: 'pull', text: 'For the role this program targets, can we name the three decisions where performance most visibly breaks down, and does the learning we are about to buy put the learner inside those exact decisions?' },

      { type: 'p',
        text: 'If the answer is no, the program will produce completion data. It will not produce the behavior change the business is waiting for. That is now a choice, not a constraint. The accountability for it has moved.'
      },
    ],
  },

  'attention-threshold': {
    banner: 'assets/articles/header-attention-threshold.jpg',
    bannerVariant: 'flush-left',
    body: [
      { type: 'lede',
        text: 'Most learning programs lose the learner within the first few minutes. The issue is simpler and more structural than content quality. Attention has already shifted elsewhere.'
      },

      { type: 'h2', text: 'The constraint is not inside the content.' },

      { type: 'p',
        text: 'When a program underperforms, the instinct is to examine the content. Was it relevant? Were the scenarios realistic? Were objectives aligned to the capability gap? These are valid questions, but they come too late in the sequence.'
      },
      { type: 'p',
        text: 'Before content can instruct, it must compete. The learner is not entering a controlled environment. They are navigating interruptions, unfinished work, and constant digital noise. Microsoft\u2019s 2025 Frontier Firm report estimates employees are interrupted every two minutes during a typical workday.'
      },
      { type: 'p',
        text: 'That is the context in which learning must operate. It is not given sustained focus. It is granted a brief opportunity. Continu\u2019s 2025 corporate eLearning research suggests the average employee has around 24 minutes per week available for formal learning. That makes the opening moments decisive. If the first ninety seconds fail, that time is not redirected to better learning. It is absorbed by the next demand on attention.'
      },

      { type: 'pull', text: 'Before content can instruct, it must compete.' },

      { type: 'p',
        text: 'This is often misdiagnosed as a motivation issue. If the content is relevant, the learner will engage. In reality, relevance is assessed only after attention is secured. The learner is not initially asking whether something is useful. They are deciding whether it is worth stopping for. That distinction changes how learning should be designed.'
      },

      { type: 'h2', text: 'Experience quality functions as a signal.' },

      { type: 'p',
        text: 'Experience quality is often framed as a budget decision. High-end production, professional narration, or advanced interaction design are treated as optional enhancements. That framing misses the role these elements play.'
      },
      { type: 'p',
        text: 'The learner forms an impression before engaging with any instructional content. Visual and auditory quality signal credibility and intent. The experience establishes whether it should be taken seriously before the material has a chance to prove itself.'
      },
      { type: 'p',
        text: 'The threshold has also shifted due to the broader content environment. Research from Graphite.io shows that by late 2024, AI-generated articles outnumbered human-written ones, with nearly 40 percent of published content produced by AI within a year of ChatGPT\u2019s release.'
      },
      { type: 'p',
        text: 'This matters because it changes how people filter information. Exposure to large volumes of polished but low-signal content sharpens the instinct to dismiss quickly. In that context, a learning experience that feels indistinguishable from everything else is not neutral. It is ignored.'
      },
      { type: 'p',
        text: 'This does not imply that every program requires extensive production investment. It does mean that experience quality should be treated as a strategic input. Without it, even well-designed instruction reaches only the small subset of learners who were already inclined to engage.'
      },

      { type: 'figure',
        src: 'assets/articles/modern-learner-infographic.jpg',
        alt: 'Knowaa, The Modern Learner: insights for companies with 500+ employees. Statistics across office and remote workers showing attention, distractions, and learning preferences.',
        caption: 'The modern learner, attention, distractions, and learning preferences across office and remote workers.',
      },

      { type: 'h2', text: 'The threshold is crossed early.' },

      { type: 'p',
        text: 'Designing for the attention threshold is different from optimizing engagement metrics. Completion rates and satisfaction scores can improve without addressing the underlying issue. Shorter formats or gamified elements do not determine whether a learner takes the experience seriously.'
      },
      { type: 'p',
        text: 'What matters is how the experience presents itself at the start. The opening moments should reflect the realities of the learner\u2019s role and decisions. A concrete scenario grounded in actual pressures will hold attention more effectively than an abstract overview. Visual and audio quality establish credibility before any content is processed. The pacing of the first minutes determines whether attention continues or shifts elsewhere.'
      },
      { type: 'p',
        text: 'Instructional rigor remains essential. Retrieval practice, spaced repetition, and realistic scenarios are well-established drivers of behavior change. However, they only apply if the learner stays long enough to encounter them.'
      },

      { type: 'pull', text: 'The attention threshold does not replace these mechanisms. It enables them.' },

      { type: 'p',
        text: 'When strong instructional design fails to deliver results, the assumption is often that the content needs refinement. Another possibility is that the intended audience never engaged with it in the first place. Not due to access or scheduling, but because the experience did not justify their attention.'
      },

      { type: 'h2', text: 'What to ask before commissioning the next program.' },

      { type: 'p',
        text: 'The attention threshold introduces a different question at the outset of a project. Not whether the content is correct, but whether the experience signals that it deserves attention. This question should be addressed during commissioning, not after launch.'
      },
      { type: 'p',
        text: 'When evaluating vendors or briefing internal teams, the focus should extend beyond instructional design. What does the first ninety seconds look like? Does it reflect the actual decisions the learner is facing? What do the visual and audio standards communicate? At what point is this evaluated, and by whom?'
      },
      { type: 'p',
        text: 'Most organizations have clear processes for validating instructional accuracy. Very few assess whether an experience will hold attention in real conditions. That gap often determines whether behavior change is achieved.'
      },
      { type: 'p',
        text: 'If a recent initiative did not deliver the expected outcomes, the first question is not about content revisions. It is whether the experience earned attention before making any demands of the learner. If it did not, the root issue sits upstream. That is where the next iteration should begin.'
      },
    ],
  },
};

/* Related, prefers articles, falls back to anything else in the library */
function pickRelatedArticles(currentId, count = 3) {
  const pool = (window.RESOURCES || []).filter(r => r.id !== currentId);
  const articles = pool.filter(r => r.type === 'article');
  const others = pool.filter(r => r.type !== 'article');
  return [...articles, ...others].slice(0, count);
}

/* Resolve the URL each related card should link to. */
function relatedHref(r) {
  return window.resourceHref ? window.resourceHref(r) : (r.type === 'case' ? 'Knowaa Case Study.html?id=' + r.id : 'Knowaa Article.html?id=' + r.id);
}

function Article({ resourceId }) {
  const resource = useMemoArt(() => {
    const id = resourceId
      || (window.RESOURCES && window.RESOURCES.find(r => r.type === 'article')?.id)
      || (window.RESOURCES && window.RESOURCES[0]?.id);
    return (window.RESOURCES || []).find(r => r.id === id);
  }, [resourceId]);

  const content = useMemoArt(() => {
    if (!resource) return null;
    return ARTICLE_BODIES[resource.id] || { body: [] };
  }, [resource]);

  /* Scroll-progress indicator */
  const progressRef = useRefArt(null);
  useEffectArt(() => {
    const onScroll = () => {
      const el = progressRef.current; if (!el) return;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0;
      el.style.transform = `scaleX(${p})`;
    };
    onScroll();
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  if (!resource) {
    return (
      <section className="art">
        <div className="art__hero">
          <a className="art__back" href="Knowaa Resources.html">
            <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden>
              <path d="M12 7 H2 M6 3 L2 7 L6 11" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Back to Resources</span>
          </a>
          <h1 className="art__title">Article not found.</h1>
        </div>
      </section>
    );
  }

  const cover = content.cover || resource.image;
  const banner = content.banner;
  const related = pickRelatedArticles(resource.id, 3);

  return (
    <section className="art" aria-labelledby="art-title">
      <style>{window.CSS_ARTICLE}</style>

      {/* Scroll progress */}
      <div className="art__progress" aria-hidden>
        <span ref={progressRef} />
      </div>

      {/* ─── BANNER (when set), custom hero with title + byline overlaid on the left ─── */}
      {banner ? (
        <section
          className={
            'art__banner'
            + (content.bannerAlign === 'center' ? ' art__banner--center' : '')
            + (content.bannerVariant === 'flush-left' ? ' art__banner--flush-left' : '')
          }
          style={{ backgroundImage: `url("${banner}")` }}
        >
          <div className="art__banner-inner">
            <h1 id="art-title" className="art__banner-title">{resource.title}</h1>
            {(resource.author || resource.publishedAt || resource.readTime) ? (
              <div className="art__banner-byline">
                {resource.author ? <span>{resource.author}{resource.role ? `, ${resource.role}` : ''}</span> : null}
                {resource.publishedAt ? <br /> : null}
                {resource.publishedAt ? <span>{formatDate(resource.publishedAt)}{resource.readTime ? `, ${resource.readTime}` : ''}</span> : null}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* ─── HERO (skipped when banner is set; banner carries title + byline) ─── */}
      {!banner ? (
        <header className="art__hero">
          {resource.category ? <div className="art__tag">{resource.category}</div> : null}
          <h1 id="art-title" className="art__title">{resource.title}</h1>

          <div className="art__byline">
            {resource.author ? <span><strong>{resource.author}</strong>{resource.role ? `, ${resource.role}` : ''}</span> : null}
            {resource.publishedAt ? <span className="art__byline-sep" aria-hidden /> : null}
            {resource.publishedAt ? <span>{formatDate(resource.publishedAt)}</span> : null}
            {resource.readTime ? <span className="art__byline-sep" aria-hidden /> : null}
            {resource.readTime ? <span>{resource.readTime}</span> : null}
          </div>
        </header>
      ) : null}

      {/* ─── COVER IMAGE (only when no banner) ─── */}
      {!banner && cover ? (
        <div className="art__cover">
          <img src={cover} alt="" />
        </div>
      ) : null}

      {/* ─── BODY ─── */}
      <div className="art__body-wrap">
        <div className="art__body">
          {content.body.map((block, i) => renderBlock(block, i))}
        </div>
      </div>

      {/* ─── ARTICLE CTA, empty purple strip ─── */}
      <section className="art__cta" aria-hidden="true">
        <div className="art__cta-inner" />
      </section>
    </section>
  );
}

function renderBlock(block, key) {
  switch (block.type) {
    case 'lede':
      return <p key={key} className="art__lede">{block.text}</p>;
    case 'h2':
      return <h2 key={key} className="art__h2">{block.text}</h2>;
    case 'h3':
      return <h3 key={key} className="art__h3">{block.text}</h3>;
    case 'p':
      return block.html
        ? <p key={key} className="art__p" dangerouslySetInnerHTML={{ __html: block.html }} />
        : <p key={key} className="art__p">{block.text}</p>;
    case 'ul':
      return (
        <ul key={key} className="art__ul">
          {block.items.map((it, j) => (
            typeof it === 'string'
              ? <li key={j}>{it}</li>
              : <li key={j} dangerouslySetInnerHTML={{ __html: it.html }} />
          ))}
        </ul>
      );
    case 'pull':
      return <blockquote key={key} className="art__pull">{block.text}</blockquote>;
    case 'divider':
      return <hr key={key} className="art__divider" />;
    case 'figure':
      return (
        <figure key={key} className="art__figure">
          <img src={block.src} alt={block.alt || ''} loading="lazy" />
          {block.caption ? <figcaption>{block.caption}</figcaption> : null}
        </figure>
      );
    default:
      return null;
  }
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch { return iso; }
}

window.Article = Article;
window.ARTICLE_BODIES = ARTICLE_BODIES;
