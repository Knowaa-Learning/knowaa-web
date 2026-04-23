const { useState: useStateFaq, useEffect: useEffectFaq, useRef: useRefFaq } = React;

const FAQ_ITEMS = [
  {
    q: 'What makes Knowaa different from other custom learning providers?',
    a: 'Most vendors optimize for content delivery. We design for behavioral change and measurable performance outcomes. Our work combines learning architecture with high-end creative execution so the experience drives action, not just completion.',
  },
  {
    q: 'Why not build this internally or use off-the-shelf content?',
    a: 'Internal teams are often constrained by time, production capability, and objectivity. Off-the-shelf content rarely reflects your context or drives meaningful behavior change. We bring specialized design and execution that is difficult to replicate internally.',
  },
  {
    q: 'How do you measure success beyond completion rates?',
    a: 'We define success upfront in terms of behavior and business impact. This can include decision quality, error reduction, or compliance adherence. Measurement is aligned to what the business actually needs to improve.',
  },
  {
    q: 'How do you ensure the learning actually changes behavior?',
    a: 'We use spaced reinforcement, scenario-based practice, and real-world application prompts. Content is designed to build habits, not just transfer knowledge. Follow-up touchpoints help sustain change over time.',
  },
  {
    q: 'What does a typical project look like from start to finish?',
    a: 'We start with a discovery phase to understand the business need, audience, and constraints. Then we design the learning architecture, produce content, and iterate based on review. Launch includes measurement setup and post-launch optimization.',
  },
  {
    q: 'How involved do we need to be during development?',
    a: 'We require focused input at key alignment and review stages. Outside of that, we manage execution end to end. This keeps the process efficient while ensuring accuracy.',
  },
  {
    q: 'How do you handle complex or highly regulated content?',
    a: 'We translate complex material into structured, usable learning. This includes simplifying without losing accuracy and focusing on application. The goal is clarity and correct action, not information exposure.',
  },
  {
    q: 'How do you use AI in your process?',
    a: 'AI is used to enhance efficiency in research, structuring, and production workflows. It does not replace design thinking or creative direction. Human oversight ensures quality and accuracy at every stage.',
  },
];

function FAQ() {
  const sectionRef = useRefFaq(null);
  const [openIndex, setOpenIndex] = useStateFaq(null);

  useEffectFaq(() => {
    const section = sectionRef.current;
    if (!section) return;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      section.classList.add('is-revealed');
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('is-revealed');
            obs.unobserve(section);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      ref={sectionRef}
      className="kw-faq"
      aria-labelledby="kw-faq-title"
    >
      <div className="kw-faq-container">
        <header className="kw-faq-header">
          <h2 id="kw-faq-title" className="kw-faq-title">
            Frequently asked questions.
          </h2>
        </header>

        <ul className="kw-faq-list" role="list">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `kw-faq-a-${i + 1}`;
            return (
              <li key={i} className="kw-faq-item">
                <button
                  type="button"
                  className="kw-faq-q"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                >
                  <span className="kw-faq-q-text">{item.q}</span>
                  <span className="kw-faq-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
                      <line
                        className="kw-faq-icon-h"
                        x1="5" y1="12" x2="19" y2="12"
                        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
                      />
                      <line
                        className="kw-faq-icon-v"
                        x1="12" y1="5" x2="12" y2="19"
                        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={panelId}
                  className="kw-faq-a"
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p className="kw-faq-a-text">{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <style>{`
        .kw-faq {
          position: relative;
          background: #ffffff;
          padding: 128px 0 184px;
          color: #333;
          font-family: 'Poppins', system-ui, sans-serif;
        }
        .kw-faq-container {
          max-width: 760px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .kw-faq-header { margin-bottom: 48px; text-align: left; }
        .kw-faq-title {
          margin: 0;
          font-size: clamp(30px, 3.6vw, 46px);
          line-height: 1.1; font-weight: 900;
          letter-spacing: -0.012em; color: var(--title, #0B1638);
        }

        .kw-faq-list {
          list-style: none; margin: 0; padding: 0;
          border-top: 1px solid rgba(17, 17, 17, 0.09);
        }
        .kw-faq-item { border-bottom: 1px solid rgba(17, 17, 17, 0.09); }

        .kw-faq-q {
          width: 100%;
          display: flex; align-items: center; justify-content: space-between;
          gap: 24px;
          padding: 22px 0;
          background: transparent; border: none; cursor: pointer;
          text-align: left; font: inherit; color: var(--title, #0B1638);
          transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .kw-faq-q:hover { color: #503594; }
        .kw-faq-q:focus-visible {
          outline: 2px solid #7C3AED;
          outline-offset: 4px;
          border-radius: 4px;
        }
        .kw-faq-q-text {
          font-size: 17px; font-weight: 700;
          line-height: 1.4; letter-spacing: -0.005em;
        }

        .kw-faq-icon {
          flex: 0 0 auto;
          width: 22px; height: 22px;
          display: inline-flex; align-items: center; justify-content: center;
          color: #111;
          transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .kw-faq-q:hover .kw-faq-icon { color: #503594; }
        .kw-faq-icon-v {
          transform-origin: 12px 12px;
          transition:
            transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
            opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .kw-faq-q[aria-expanded="true"] .kw-faq-icon-v {
          transform: rotate(90deg);
          opacity: 0;
        }

        .kw-faq-a {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .kw-faq-q[aria-expanded="true"] + .kw-faq-a { max-height: 600px; }

        .kw-faq-a-text {
          margin: 0;
          padding: 0 0 24px;
          font-size: 17.5px; line-height: 1.65; font-weight: 400;
          color: #333;
          max-width: 640px;
        }

        .kw-faq .kw-faq-header,
        .kw-faq .kw-faq-list {
          opacity: 0; transform: translateY(16px);
          transition:
            opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .kw-faq.is-revealed .kw-faq-header { opacity: 1; transform: none; transition-delay: 0.05s; }
        .kw-faq.is-revealed .kw-faq-list   { opacity: 1; transform: none; transition-delay: 0.18s; }

        @media (max-width: 720px) {
          .kw-faq { padding: 96px 0 128px; }
          .kw-faq-container { padding: 0 20px; }
          .kw-faq-header { margin-bottom: 32px; }
          .kw-faq-q { padding: 18px 0; gap: 16px; }
          .kw-faq-q-text { font-size: 15.5px; }
          .kw-faq-a-text { font-size: 16.5px; padding-bottom: 20px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .kw-faq .kw-faq-header,
          .kw-faq .kw-faq-list {
            opacity: 1; transform: none; transition: none;
          }
          .kw-faq-a { transition: none; }
          .kw-faq-icon-v { transition: none; }
        }
      `}</style>
    </section>
  );
}
