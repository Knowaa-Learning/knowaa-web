// Footer — knowaa edition modeled on the reference (gogopool style):
// 4-column link grid on the right, logo + subscribe block on the left,
// copyright row beneath a thin rule.

(function () {
  const { useState } = React;

  const COLUMNS = [
    {
      heading: 'Solutions',
      items: [
        { label: 'Learning strategy', href: 'Knowaa Strategy.html' },
        { label: 'Custom eLearning', href: 'Knowaa Custom eLearning.html' },
        { label: 'Video & Animation', href: 'Knowaa Video and Animation.html' },
        { label: 'Learning campaigns', href: 'Knowaa Campaigns.html' },
      ],
    },
    {
      heading: 'Resources',
      items: [
        { label: 'Insights',       href: 'Knowaa Resources.html' },
        { label: 'Case studies',   href: 'Knowaa Resources.html?type=case' },
        { label: 'Newsletter',     href: '#newsletter' },
        { label: 'Article',        href: 'Knowaa Article.html' },
      ],
    },
    {
      heading: 'Company',
      items: [
        { label: 'About',     href: '#about' },
        { label: 'Approach',  href: '#approach' },
        { label: 'Contact',   href: 'Knowaa Contact.html' },
        { label: 'Terms',     href: 'Knowaa Terms.html' },
      ],
    },
    {
      heading: 'Connect',
      items: [
        { label: 'LinkedIn', href: '#' },
        { label: 'Email',    href: 'mailto:hello@knowaa.com' },
        { label: 'X',        href: '#' },
        { label: 'YouTube',  href: '#' },
      ],
    },
  ];

  function Footer() {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    async function onSubmit(e) {
      e.preventDefault();
      if (!email || submitting) return;
      setSubmitting(true);
      setError('');
      try {
        const res = await fetch('https://knowaa-info.com/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, name: '' }),
        });
        const data = await res.json().catch(() => ({}));
        if (data && data.ok) {
          setSent(true);
          setEmail('');
        } else {
          setError((data && data.error) || 'Something went wrong. Try again.');
        }
      } catch {
        setError('Something went wrong. Try again.');
      } finally {
        setSubmitting(false);
      }
    }

    return (
      <footer id="contact" data-screen-label="Footer" className="kwfooter">
        <div className="kwfooter__inner">
          {/* Left — logo, tagline, subscribe */}
          <div className="kwfooter__left">
            <a href="Knowaa Homepage.html" aria-label="Knowaa" className="kwfooter__logo">
              <img src="assets/knowaa-logo.svg" alt="Knowaa" />
            </a>
            <p className="kwfooter__tag">Subscribe for the latest field notes and case studies.</p>
            <form className="kwfooter__form" onSubmit={onSubmit}>
              <span className="kwfooter__form-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Your email…"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button type="submit" disabled={submitting}>
                {sent ? 'Subscribed' : submitting ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
            {error && (
              <p className="kwfooter__msg" role="status" aria-live="polite" style={{ color: '#ED1F80', fontSize: 13, marginTop: 8 }}>{error}</p>
            )}
            {sent && (
              <p className="kwfooter__msg" role="status" aria-live="polite" style={{ color: 'rgba(13, 9, 89, 0.78)', fontSize: 13, marginTop: 8 }}>
                You&rsquo;re in. Check your inbox for a welcome email.
              </p>
            )}
          </div>

          {/* Right — 4-col link grid */}
          <nav className="kwfooter__grid" aria-label="Footer">
            {COLUMNS.map((col) => (
              <div key={col.heading} className="kwfooter__col">
                <div className="kwfooter__heading">{col.heading}</div>
                <ul>
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <a href={it.href}>{it.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom rule + copyright */}
        <div className="kwfooter__bottom">
          <span className="kwfooter__copy">© 2026 KNOWAA, INC.</span>
          <span className="kwfooter__legal">
            <a href="Knowaa Privacy.html">Privacy</a>
            <span aria-hidden>·</span>
            <a href="Knowaa Terms.html">Terms</a>
          </span>
        </div>

        <style>{`
          .kwfooter {
            font-family: 'Poppins', -apple-system, sans-serif;
            background: #FAFAFF;
            padding: 64px 56px 28px;
            color: #0D0959;
          }
          .kwfooter__inner {
            max-width: 1280px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: minmax(260px, 360px) 1fr;
            gap: 72px;
            align-items: start;
          }
          /* ── Left ── */
          .kwfooter__logo img { display: block; height: 44px; width: auto; }
          .kwfooter__tag {
            margin: 20px 0 20px;
            font-size: 13px; line-height: 1.55; font-weight: 400;
            color: #000000;
            max-width: 300px;
          }
          .kwfooter__form {
            display: flex; align-items: center;
            background: #FFFFFF;
            border: 1px solid rgba(62,51,187,0.18);
            border-radius: 999px;
            padding: 4px 4px 4px 18px;
            max-width: 380px;
            transition: border-color 180ms, box-shadow 180ms;
          }
          .kwfooter__form:focus-within {
            border-color: #3E33BB;
            box-shadow: 0 0 0 4px rgba(62,51,187,0.12);
          }
          .kwfooter__form-icon {
            color: rgba(13,9,89,0.45);
            display: inline-flex; align-items: center; margin-right: 10px;
          }
          .kwfooter__form input {
            flex: 1;
            border: 0; outline: 0; background: transparent;
            font: inherit; font-size: 14px; color: #000000;
            padding: 10px 0;
          }
          .kwfooter__form input::placeholder { color: rgba(0,0,0,0.45); }
          .kwfooter__form button {
            padding: 10px 22px;
            background: #3E33BB;
            color: #FFFFFF;
            border: 0; border-radius: 999px;
            font: inherit; font-size: 13px; font-weight: 600; letter-spacing: -0.005em;
            cursor: pointer;
            transition: background 180ms, transform 180ms;
          }
          .kwfooter__form button:hover { background: #2D22A8; transform: translateY(-1px); }

          /* ── Right — link grid ── */
          .kwfooter__grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0,1fr));
            gap: 32px;
            justify-self: end;
            min-width: 0;
          }
          .kwfooter__heading {
            font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
            color: #3E33BB;
            margin-bottom: 18px;
          }
          .kwfooter__col ul {
            list-style: none; padding: 0; margin: 0;
            display: flex; flex-direction: column; gap: 10px;
          }
          .kwfooter__col a {
            font-size: 13px; font-weight: 400;
            color: #000000;
            text-decoration: none;
            transition: color 160ms;
          }
          .kwfooter__col a:hover { color: #3E33BB; }

          /* ── Bottom bar ── */
          .kwfooter__bottom {
            max-width: 1280px; margin: 48px auto 0;
            padding-top: 20px;
            border-top: 1px solid rgba(62,51,187,0.14);
            display: flex; justify-content: space-between; align-items: center;
            flex-wrap: wrap; gap: 12px;
            font-size: 11px; letter-spacing: 0.08em; font-weight: 600;
            color: #000000;
            text-transform: uppercase;
          }
          .kwfooter__legal { display: inline-flex; gap: 10px; align-items: center; }
          .kwfooter__legal a { color: inherit; text-decoration: none; transition: color 160ms; }
          .kwfooter__legal a:hover { color: #3E33BB; }

          /* ── Responsive ── */
          @media (max-width: 1000px) {
            .kwfooter { padding: 48px 28px 24px; }
            .kwfooter__inner { grid-template-columns: 1fr; gap: 48px; }
            .kwfooter__grid { justify-self: stretch; grid-template-columns: repeat(2, 1fr); gap: 32px 24px; }
          }
          @media (max-width: 480px) {
            .kwfooter__grid { grid-template-columns: 1fr 1fr; }
            .kwfooter__form { flex-wrap: wrap; border-radius: 22px; padding: 10px; }
            .kwfooter__form input { width: 100%; padding: 6px 10px; }
            .kwfooter__form button { width: 100%; padding: 12px; }
          }
        `}</style>
      </footer>
    );
  }

  window.Footer = Footer;
})();
