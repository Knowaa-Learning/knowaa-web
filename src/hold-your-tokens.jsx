// HOLD YOUR TOKENS — AI Usage Campaign landing page, short version.
// Four blocks: pain → why the stack doesn't solve it → AppsFlyer proof → offer + CTA.
// All media are labeled placeholders keyed to the asset IDs in the build brief.

const CSS_HYT = `
.hyt{--p:#4A0FB8;--ink:#0D0959;--night:#D97757;--mute:rgba(13,9,89,.66);--line:rgba(13,9,89,.1);--on-clay:#FFFFFF;--on-clay-2:#FFFFFF}
.hyt *{box-sizing:border-box}
.hyt h1,.hyt h2,.hyt h3{font-family:'Urbanist',sans-serif;margin:0}
.hyt p:where(:not([class])){margin:0}
.hyt section{position:relative}
.hyt__sec{padding:clamp(72px,8vw,124px) clamp(22px,5vw,80px)}
.hyt__in{max-width:1180px;margin:0 auto}
.hyt__eyebrow{font-family:'JetBrains Mono',ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--p);margin-bottom:22px}
.hyt__eyebrow--l{color:var(--on-clay)}
.hyt__h2{font-size:clamp(30px,4.1vw,54px);font-weight:800;line-height:1.06;letter-spacing:-.03em;color:var(--ink);max-width:22ch}
.hyt__h2--l{color:var(--on-clay)}
.hyt__intro{font-size:clamp(16px,1.5vw,19px);line-height:1.6;color:var(--mute);max-width:58ch;margin-top:24px}
.hyt__intro--l{color:var(--on-clay-2)}

/* placeholder */
.ph{position:relative;border:1px dashed rgba(74,15,184,.34);border-radius:14px;background-image:repeating-linear-gradient(135deg,rgba(74,15,184,.05) 0 10px,transparent 10px 20px);display:flex;flex-direction:column;justify-content:flex-end;gap:6px;padding:18px;overflow:hidden;min-height:120px}
.ph--l{border-color:rgba(255,255,255,.55);background-image:repeating-linear-gradient(135deg,rgba(255,255,255,.08) 0 10px,transparent 10px 20px)}
.ph__id{font-family:'JetBrains Mono',ui-monospace,Menlo,monospace;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--p);font-weight:700}
.ph--l .ph__id{color:var(--on-clay)}
.ph__what{font-family:'JetBrains Mono',ui-monospace,Menlo,monospace;font-size:11.5px;line-height:1.5;color:var(--mute);max-width:62ch}
.ph--l .ph__what{color:var(--on-clay-2)}

/* buttons */
.hyt__cta-row{display:flex;flex-wrap:wrap;gap:14px;align-items:center}
.btn{display:inline-block;font-family:'Poppins',sans-serif;font-weight:700;font-size:15px;padding:14px 28px;border-radius:999px;transition:transform .16s cubic-bezier(.4,0,.2,1),box-shadow .16s,background .16s,border-color .16s}
.btn--pri{background:var(--p);color:#fff}
.btn--pri:hover{color:#fff;background:#3A0C91;transform:translateY(-1px);box-shadow:0 12px 26px -10px rgba(74,15,184,.6)}
.hyt__hero .btn--pri{background:#fff;color:#D97757}
.hyt__hero .btn--pri:hover{color:#D97757;background:#F6F1EC;box-shadow:0 12px 26px -10px rgba(0,0,0,.3)}
.btn--ghost{border:1px solid rgba(255,255,255,.65);color:#fff}
.btn--ghost:hover{color:#fff;border-color:#fff;background:rgba(255,255,255,.1)}

/* 1. HERO */
.hyt__hero{background:var(--night);color:var(--on-clay);padding:clamp(112px,12vw,164px) clamp(22px,5vw,80px) clamp(64px,7vw,100px);overflow:hidden}
.hyt__hero-grid{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:.86fr 1.14fr;gap:clamp(36px,5vw,64px);align-items:center}
.hyt__h1{font-size:clamp(46px,7.4vw,104px);font-weight:900;line-height:.94;letter-spacing:-.045em;color:var(--on-clay);margin:0 0 28px}
.hyt__h1 em{font-style:normal;color:rgba(255,255,255,.72)}
.hyt__kicker{font-family:'Urbanist',sans-serif;font-size:clamp(20px,2.2vw,29px);font-weight:700;letter-spacing:-.02em;line-height:1.28;color:var(--on-clay);margin-bottom:18px;max-width:30ch}
.hyt__kicker span{color:var(--on-clay-2)}
.hyt__desc{font-size:16.5px;line-height:1.64;color:var(--on-clay-2);max-width:50ch;margin-bottom:34px}
.hyt__hero-media .ph{aspect-ratio:16/9;min-height:0}
.hyt__hero-vid{width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:14px;display:block;background:rgba(36,16,10,.18)}
.hyt__hero-cap{margin-top:12px;font-family:'JetBrains Mono',ui-monospace,Menlo,monospace;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--on-clay-2)}

/* 2. MARKET EVIDENCE — editorial news strip */
.hyt__ev{background:#F6F5FA}
.hyt__ev-head{max-width:1180px;margin:0 auto}
.hyt__ev .hyt__intro{margin-top:18px}

.hyt__spread{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(18px,2vw,28px);margin-top:clamp(40px,4.2vw,56px)}
.hyt__story{display:flex;flex-direction:column;background:#fff;border:1px solid rgba(13,9,89,.1);border-radius:4px;padding:clamp(28px,3vw,40px);transition:border-color .18s,box-shadow .18s}
.hyt__story:hover{border-color:rgba(13,9,89,.2);box-shadow:0 18px 44px -34px rgba(13,9,89,.45)}

/* publisher masthead, hairline well clear of the type */
.hyt__pub{font-family:'Poppins',sans-serif;font-size:10.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:rgba(13,9,89,.58);padding-bottom:20px;border-bottom:1px solid rgba(13,9,89,.12)}

.hyt h3.hyt__hl{font-family:'Playfair Display',Georgia,serif;font-size:clamp(20px,1.85vw,24px);font-weight:700;letter-spacing:-.01em;line-height:1.42;color:var(--ink);margin:52px 0 0;text-wrap:pretty}

.hyt__hl mark{background:rgba(74,15,184,.12);color:inherit;padding:.06em .18em;margin:0 -.06em;border-radius:2px;box-decoration-break:clone;-webkit-box-decoration-break:clone}
.hyt__foot{margin-top:auto;padding-top:40px;font-family:'Poppins',sans-serif;display:flex;align-items:center;justify-content:space-between;gap:16px}
.hyt__logo{display:block;width:auto;object-fit:contain;object-position:right center;opacity:.85;flex:0 0 auto}
.hyt__logo--uber{height:44px;margin:-14px 0}
.hyt__logo--amazon{height:17px}
.hyt__logo--para{height:40px;margin:-8px 0}
.hyt__foot a{font-size:11.5px;font-weight:600;letter-spacing:.02em;color:var(--p);white-space:nowrap;transition:color .16s}
.hyt__foot a:hover{color:#3A0C91}
.hyt__concl{margin-top:clamp(26px,2.8vw,36px)}
.hyt__concl-line{display:block;white-space:nowrap}
.hyt__concl p{font-family:'Urbanist',sans-serif;font-size:clamp(20px,2.3vw,30px);font-weight:800;letter-spacing:-.032em;line-height:1.14;color:var(--ink);max-width:46ch;margin:0}
.hyt__concl p b{color:var(--p);font-weight:800}

/* 3. CASE */
.hyt__case{background:#0B0A16;color:var(--on-clay);padding-top:0}
.hyt__player{margin-top:0;margin-left:calc(-1 * clamp(22px,5vw,80px));margin-right:calc(-1 * clamp(22px,5vw,80px))}
.hyt__player .ph{aspect-ratio:16/9;min-height:0;border-radius:16px}
.hyt__case .hyt__in{max-width:none}
.hyt__case .hyt__in > *:not(.hyt__player){max-width:1180px;margin-left:auto;margin-right:auto}
.hyt__stage{position:relative;margin:0;overflow:hidden;isolation:isolate}
.hyt__still{width:100%;aspect-ratio:16/9;object-fit:cover;display:block}
.hyt__stage::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(10,6,4,.9) 0%,rgba(10,6,4,.72) 34%,rgba(10,6,4,.28) 62%,rgba(10,6,4,0) 88%);pointer-events:none}
.hyt__stage-copy{position:absolute;left:50%;transform:translateX(-50%);bottom:0;z-index:1;width:100%;max-width:1180px;padding:clamp(24px,4vw,56px) clamp(22px,5vw,80px)}
.hyt__stage-h{font-family:'Urbanist',sans-serif;font-size:clamp(23px,3.3vw,44px);font-weight:800;letter-spacing:-.03em;line-height:1.08;color:#fff;margin:0 0 14px;text-wrap:pretty}
.hyt__stage-p{font-size:clamp(13.5px,1.35vw,17px);line-height:1.6;color:rgba(255,255,255,.88);margin:0;max-width:60ch}
@media(max-width:700px){.hyt__stage-copy{position:static;transform:none;padding:20px clamp(22px,5vw,80px) 0}.hyt__stage::after{display:none}.hyt__stage-h,.hyt__stage-p{color:var(--on-clay)}}
.hyt__frames{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:clamp(40px,4.6vw,60px)}
.hyt__frame .ph{aspect-ratio:1/1;min-height:0}
.hyt__frame img{width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:14px;display:block}
.hyt__frame h3{margin-top:14px;font-family:'Poppins',sans-serif;font-size:13.5px;font-weight:600;line-height:1.45;color:var(--on-clay)}
.hyt__note{margin-top:clamp(32px,4vw,48px);padding-left:22px;border-left:2px solid rgba(255,255,255,.45);font-size:13.5px;line-height:1.65;color:var(--on-clay-2);max-width:72ch}

/* 4. OFFER */
.hyt__offer{background:#F6F5FA}
.hyt__reframe{font-family:'Urbanist',sans-serif;font-size:clamp(28px,3.7vw,50px);font-weight:800;letter-spacing:-.032em;line-height:1.08;color:var(--ink);max-width:24ch}
.hyt__reframe span{color:var(--p)}
.hyt__steps{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(16px,2vw,24px);margin-top:clamp(44px,5vw,64px)}
.hyt__step{background:#fff;border:1px solid var(--line);border-radius:18px;padding:clamp(22px,2.6vw,30px);box-shadow:0 14px 40px -32px rgba(13,9,89,.45)}
.hyt__step-n{font-family:'JetBrains Mono',ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:.16em;font-weight:700;color:rgba(13,9,89,.68);margin-bottom:16px}
.hyt__step h3{font-size:23px;font-weight:800;letter-spacing:-.025em;color:var(--ink);margin-bottom:10px}
.hyt__step p{font-size:15px;line-height:1.6;color:var(--mute)}
.hyt__close{margin-top:clamp(40px,4.6vw,58px);padding-top:clamp(36px,4vw,48px);border-top:1px solid var(--line);display:flex;flex-wrap:wrap;gap:28px;align-items:center;justify-content:space-between}
.hyt__close-h{font-family:'Urbanist',sans-serif;font-size:clamp(22px,2.5vw,32px);font-weight:800;letter-spacing:-.028em;line-height:1.16;color:var(--ink);max-width:26ch}

@media(max-width:1000px){
.hyt__hero-grid,.hyt__steps{grid-template-columns:1fr}
.hyt__hero-media{order:-1;margin-bottom:8px}
.hyt__spread{display:grid;grid-auto-flow:column;grid-auto-columns:82%;grid-template-columns:none;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding-bottom:4px}
.hyt__spread::-webkit-scrollbar{display:none}
.hyt__story{scroll-snap-align:center}
}
@media(max-width:700px){

.hyt__frames{display:grid;grid-auto-flow:column;grid-auto-columns:78%;grid-template-columns:none;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding-bottom:4px}
.hyt__frames::-webkit-scrollbar{display:none}
.hyt__frame{scroll-snap-align:center}
.btn{width:100%;text-align:center}
.hyt__close{flex-direction:column;align-items:flex-start}
}
`;

function Ph({ id, what, light }) {
  return (
    <div className={'ph' + (light ? ' ph--l' : '')}>
      <div className="ph__id">{id}</div>
      <div className="ph__what">{what}</div>
    </div>
  );
}

const STORIES = [
  { co: 'Uber', pub: 'TechCrunch', logo: 'assets/campaign/logo-uber.png', logoCls: 'uber',
    hl: ['Uber burned through its ', 'full-year AI budget', ' by April'],
    url: 'https://techcrunch.com/2026/06/02/uber-caps-employee-ai-spending-after-blowing-through-budget-in-four-months/' },
  { co: 'Amazon', pub: 'Financial Times', logo: 'assets/campaign/logo-amazon.png', logoCls: 'amazon',
    hl: ['Amazon ran up a $1.8M AI bill, ', '860% over budget', ''],
    url: 'https://www.ft.com/content/77baac40-d803-4084-94f3-a133653072cf' },
  { co: 'Paramount', pub: 'Business Insider', logo: 'assets/campaign/logo-paramount.svg', logoCls: 'para',
    hl: ['Paramount set ', 'Claude spend limits', ' for each employee'],
    url: 'https://www.businessinsider.com/paramount-skydance-claude-monthly-usage-limits-ai-push-tech-employees-2026-8' },
];
const FRAMES = [
  ['assets/campaign/frame-1.png', 'Give Claude the context it needs'],
  ['assets/campaign/frame-2.png', 'Different models for different needs'],
  ['assets/campaign/frame-3.png', 'Plan before higher-consumption workflows'],
];


function HoldYourTokens() {
  // Chrome evaluates the autoplay gate at parse time, and React sets `muted` as a
  // property after creation — so the attribute has to be forced before playback.
  const heroVideoRef = React.useCallback((el) => {
    if (!el) return;
    el.muted = true;
    el.setAttribute('muted', '');
    el.play().catch(() => {});
    if (typeof IntersectionObserver === 'function') {
      new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) el.play().catch(() => {});
          else el.pause();
        });
      }, { threshold: 0.15 }).observe(el);
    }
  }, []);

  return (
    <div className="hyt">
      <style>{CSS_HYT}</style>

      {/* ── 1. HERO / THE PAIN ── */}
      <section className="hyt__hero" data-screen-label="Hero, the pain">
        <div className="hyt__hero-grid">
          <div>
            <h1 className="hyt__h1">Hold your<br />tokens.</h1>

            <p className="hyt__kicker">Behavior-change campaigns for Claude usage at scale.</p>
            <p className="hyt__desc">Companies increasingly allocate, measure and control AI coding capacity. Two teams can be given the same allowance and consume it very differently, and the difference shows up in spend and in interrupted access long before anyone changes a policy.</p>
            <div className="hyt__cta-row">
              <a className="btn btn--pri" href="Knowaa Contact.html" data-cta="hero_primary">Talk to Knowaa</a>
            </div>
          </div>
          <div className="hyt__hero-media">
            <video className="hyt__hero-vid" ref={heroVideoRef} src="assets/campaign/tokens-hero.mp4" autoPlay muted loop playsInline preload="auto" aria-label="Selected work for AppsFlyer, silent loop"></video>
          </div>
        </div>
      </section>

      {/* ── 2. MARKET EVIDENCE ── */}
      <section className="hyt__sec hyt__ev" data-screen-label="Market evidence">
        <div className="hyt__in">
          <div className="hyt__ev-head">
            <h2 className="hyt__h2">The risk: wasted AI spend and interrupted work.</h2>
            <p className="hyt__intro">Poor AI usage can burn through limited capacity, trigger avoidable costs, and leave teams without the AI access they rely on to keep work moving.</p>
          </div>

          <div className="hyt__spread">
            {STORIES.map((st) => (
              <article className="hyt__story" key={st.co}>
                <div className="hyt__pub">{st.pub}</div>
                <h3 className="hyt__hl">{st.hl[0]}<mark>{st.hl[1]}</mark>{st.hl[2]}</h3>
                <div className="hyt__foot">
                  <a href={st.url} target="_blank" rel="noopener noreferrer">View article →</a>
                  <img className={'hyt__logo hyt__logo--' + st.logoCls} src={st.logo} alt={st.co} loading="lazy" />
                </div>
              </article>
            ))}
          </div>

          <div className="hyt__concl">
            <p><span className="hyt__concl-line">Budgets and caps control <b>how much</b> people can use.</span> They don't determine <b>how</b> people use it.</p>
          </div>
        </div>
      </section>

      {/* ── 3. APPSFLYER PROOF ── */}
      <section className="hyt__sec hyt__case" id="appsflyer" data-screen-label="AppsFlyer proof">
        <div className="hyt__in">
          <div className="hyt__player">
            <figure className="hyt__stage">
              <img className="hyt__still" src="assets/campaign/appsflyer-still.png" alt="Still from the AppsFlyer internal film" loading="lazy" />
              <figcaption className="hyt__stage-copy">
                <h2 className="hyt__stage-h">AppsFlyer chose to shape behavior, not just publish a policy.</h2>
                <p className="hyt__stage-p">When AppsFlyer moved to governed, per-employee Claude usage, it paired the change with practical guidance on working with Claude more intentionally. Knowaa turned that guidance into a creative internal film people actually watched.</p>
              </figcaption>
            </figure>
          </div>
          <div className="hyt__frames">
            {FRAMES.map(([img]) => (
              <div className="hyt__frame" key={img}>
                <img src={img} alt="" loading="lazy" />
              </div>
            ))}
          </div>
          <p className="hyt__note">AppsFlyer's campaign was workforce-wide rather than developer-specific. No claims are made about reduced spend, lower token usage, productivity gains or ROI.</p>
        </div>
      </section>

      {/* ── 4. THE SOLUTION + CTA ── */}
      <section className="hyt__sec hyt__offer" data-screen-label="The solution and CTA">
        <div className="hyt__in">
          <p className="hyt__reframe">Controls manage capacity. <span>Practice determines how well it gets used.</span></p>
          <p className="hyt__intro">Knowaa helps engineering organizations turn AI guidance into consistent developer practice, using creative work built on your own tools, limits and terminology.</p>
          <div className="hyt__close">
            <p className="hyt__close-h">Before you raise the cap, improve what happens before it.</p>
            <a className="btn btn--pri" href="Knowaa Contact.html" data-cta="cta_bottom">Talk to Knowaa</a>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HoldYourTokens });
