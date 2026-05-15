// Contact page, single-form layout, Web3Forms backed, matching site design system.
// Color tokens: navy #0D0959, indigo #3E33BB, lavender #E8E4FB, pink #ED1F80
// Typography: Poppins
// Mirrors the wordmark + lavender hero treatment used on Campaigns.

const { useState: useStateC, useEffect: useEffectC, useRef: useRefC } = React;

const WEB3FORMS_KEY = '37f4da46-943a-4171-81bc-48ead0b633ea';
const INQUIRY_MAX = 1000;

function Contact() {
  const [data, setData] = useStateC({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    service_interest: '',
    inquiry: '',
    agree_terms: false,
    newsletter_signup: false,
    botcheck: false,
  });
  const [status, setStatus] = useStateC({ type: '', message: '' });
  const [submitting, setSubmitting] = useStateC(false);
  const formRef = useRefC(null);

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setData((d) => ({ ...d, [field]: value }));
  };

  const inquiryRemaining = INQUIRY_MAX - data.inquiry.length;
  const inquiryOver = inquiryRemaining < 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }
    setStatus({ type: '', message: '' });
    setSubmitting(true);

    const payload = new FormData();
    payload.append('access_key', WEB3FORMS_KEY);
    payload.append('subject', 'New Submission from knowaa.com');
    payload.append('from_name', 'Knowaa Contact Form');
    payload.append('botcheck', data.botcheck ? 'on' : '');
    payload.append('first_name', data.first_name);
    payload.append('last_name', data.last_name);
    payload.append('email', data.email);
    payload.append('phone', data.phone);
    payload.append('company', data.company);
    payload.append('service_interest', data.service_interest);
    payload.append('inquiry', data.inquiry);
    payload.append('agree_terms', data.agree_terms ? 'Yes' : 'No');
    payload.append('newsletter_signup', data.newsletter_signup ? 'Yes' : 'No');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success !== false) {
        // If the user opted into the newsletter, also subscribe them via the dedicated API.
        // We don't block success on this, the contact submission itself succeeded.
        if (data.newsletter_signup && data.email) {
          fetch('https://knowaa-info.com/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: data.email,
              name: `${data.first_name} ${data.last_name}`.trim(),
            }),
          }).catch(() => { /* swallow, primary submit succeeded */ });
        }
        setStatus({ type: 'ok', message: "Thanks, your message is on its way. We'll be in touch shortly." });
        setData({
          first_name: '', last_name: '', email: '', phone: '', company: '',
          service_interest: '', inquiry: '', agree_terms: false, newsletter_signup: false, botcheck: false,
        });
      } else {
        setStatus({ type: 'error', message: (json && json.message) || 'Something went wrong. Please try again or email info@knowaa.com.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again or email info@knowaa.com.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="kw-contact">
      <style>{CONTACT_CSS}</style>

      {/* Hero band, lavender strip with title */}
      <section className="kw-contact__hero">
        <div className="kw-contact__hero-inner">
          <p className="kw-contact__kicker">Contact</p>
          <h1 className="kw-contact__title">Let&rsquo;s talk.</h1>
        </div>
      </section>

      {/* Main grid, intro/socials + form */}
      <section className="kw-contact__main">
        <span className="kw-contact__brandmark" aria-hidden="true">
          <img src="assets/knowaa-mark.svg" alt="" />
        </span>
        <div className="kw-contact__grid">

          {/* Left, intro, contact details, socials */}
          <aside className="kw-contact__intro">
            <h2 className="kw-contact__intro-h">Get in touch.</h2>
            <p className="kw-contact__intro-p">
              Have a project in mind, a question, or just want to compare notes on what good learning looks like in your organization? Drop us a note.
            </p>
            <p className="kw-contact__intro-p">
              Ready to start?{' '}
              <a className="kw-contact__inline-link" href="https://calendly.com/noam-knowaa/30min" target="_blank" rel="noopener noreferrer">
                Book a 30-minute call
              </a>.
            </p>

            <ul className="kw-contact__meta" aria-label="Direct contact">
              <li>
                <span className="kw-contact__meta-label">Email</span>
                <a className="kw-contact__meta-value" href="mailto:info@knowaa.com">info@knowaa.com</a>
              </li>
            </ul>

            <div className="kw-contact__socials" aria-label="Knowaa on social">
              <a href="https://www.linkedin.com/company/knowaa-learning/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75ZM9.75 9.75h3.84v1.55h.05a4.21 4.21 0 0 1 3.79-2.08c4.06 0 4.81 2.67 4.81 6.15V21h-4v-4.88c0-1.16-.02-2.66-1.62-2.66-1.62 0-1.87 1.27-1.87 2.58V21h-4V9.75Z"/>
                </svg>
              </a>
              <a href="https://wa.me/17864524140" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.5 3.5A10.5 10.5 0 0 0 3.6 16.2L2 22l5.9-1.6A10.5 10.5 0 1 0 20.5 3.5Zm-8.5 17a8.5 8.5 0 0 1-4.3-1.2l-.3-.2-3.5 1 .9-3.4-.2-.4A8.5 8.5 0 1 1 12 20.5Zm4.7-6.4c-.3-.1-1.5-.8-1.8-.9-.2-.1-.4-.1-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.1-.3.2-.5.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.8 1.7.7 2.4.7 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3Z"/>
                </svg>
              </a>
              <a href="mailto:info@knowaa.com" aria-label="Email Knowaa">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>
            </div>
          </aside>

          {/* Right, form */}
          <form ref={formRef} className="kw-contact__form" onSubmit={handleSubmit} noValidate>
            {/* Honeypot */}
            <input
              type="checkbox"
              name="botcheck"
              className="kw-contact__honeypot"
              tabIndex={-1}
              autoComplete="off"
              checked={data.botcheck}
              onChange={handleChange('botcheck')}
              aria-hidden="true"
            />

            <div className="kw-contact__row">
              <div className="kw-contact__field">
                <label htmlFor="first_name">First name <span className="kw-contact__req">*</span></label>
                <input id="first_name" name="first_name" type="text" autoComplete="given-name" required
                  value={data.first_name} onChange={handleChange('first_name')} />
              </div>
              <div className="kw-contact__field">
                <label htmlFor="last_name">Last name <span className="kw-contact__req">*</span></label>
                <input id="last_name" name="last_name" type="text" autoComplete="family-name" required
                  value={data.last_name} onChange={handleChange('last_name')} />
              </div>
            </div>

            <div className="kw-contact__row">
              <div className="kw-contact__field">
                <label htmlFor="email">Email <span className="kw-contact__req">*</span></label>
                <input id="email" name="email" type="email" autoComplete="email" required
                  value={data.email} onChange={handleChange('email')} />
              </div>
              <div className="kw-contact__field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel"
                  value={data.phone} onChange={handleChange('phone')} />
              </div>
            </div>

            <div className="kw-contact__row">
              <div className="kw-contact__field">
                <label htmlFor="company">Company <span className="kw-contact__req">*</span></label>
                <input id="company" name="company" type="text" autoComplete="organization" required
                  value={data.company} onChange={handleChange('company')} />
              </div>
              <div className="kw-contact__field">
                <label htmlFor="service_interest">Product / Service of interest</label>
                <select id="service_interest" name="service_interest"
                  value={data.service_interest} onChange={handleChange('service_interest')}>
                  <option value="">Select one…</option>
                  <option value="Learning strategy">Learning strategy</option>
                  <option value="Custom eLearning">Custom eLearning</option>
                  <option value="Video & Animation">Video &amp; Animation</option>
                  <option value="Learning campaigns">Learning campaigns</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
            </div>

            <div className="kw-contact__field kw-contact__field--full">
              <label htmlFor="inquiry">How can we help? <span className="kw-contact__req">*</span></label>
              <textarea id="inquiry" name="inquiry" rows="6" maxLength={INQUIRY_MAX} required
                value={data.inquiry} onChange={handleChange('inquiry')}
                placeholder="A little context on the program, the audience, the timeline, anything that helps us respond well."
              />
              <div className={'kw-contact__counter' + (inquiryOver ? ' is-over' : '')}>
                {inquiryRemaining} characters left
              </div>
            </div>

            <div className="kw-contact__checks">
              <label className="kw-contact__check">
                <input type="checkbox" required checked={data.agree_terms} onChange={handleChange('agree_terms')} />
                <span>I agree to the <a href="Knowaa Terms.html" target="_blank" rel="noopener noreferrer">terms and conditions</a> <span className="kw-contact__req">*</span></span>
              </label>
              <label className="kw-contact__check">
                <input type="checkbox" checked={data.newsletter_signup} onChange={handleChange('newsletter_signup')} />
                <span>Sign me up to the newsletter</span>
              </label>
            </div>

            {status.message && (
              <div className={'kw-contact__status kw-contact__status--' + (status.type || 'info')} role="status" aria-live="polite">
                {status.message}
              </div>
            )}

            <div className="kw-contact__submit-row">
              <button type="submit" className="kw-contact__submit" disabled={submitting}>
                {submitting ? 'Sending…' : 'Send message'}
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

const CONTACT_CSS = `
.kw-contact {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #0D0959;
}

/* ── Hero band ────────────────────────────────────────────────── */
.kw-contact__hero {
  position: relative;
  padding: clamp(56px, 7vw, 96px) clamp(24px, 5vw, 64px) clamp(48px, 6vw, 72px);
  background:
    radial-gradient(ellipse at 90% 0%, rgba(237, 31, 128, 0.10) 0%, rgba(237, 31, 128, 0) 55%),
    radial-gradient(ellipse at 10% 100%, rgba(91, 75, 255, 0.14) 0%, rgba(91, 75, 255, 0) 55%),
    #E8E4FB;
  border-top: 1px solid rgba(13, 9, 89, 0.08);
  border-bottom: 1px solid rgba(13, 9, 89, 0.08);
  text-align: center;
}
.kw-contact__hero-inner {
  max-width: 760px;
  margin: 0 auto;
}
.kw-contact__kicker {
  margin: 0 0 14px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #3E33BB;
}
.kw-contact__title {
  margin: 0 0 18px;
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.025em;
  color: #0D0959;
}
.kw-contact__sub {
  margin: 0 auto;
  max-width: 60ch;
  font-size: clamp(15px, 1.2vw, 18px);
  line-height: 1.55;
  color: rgba(13, 9, 89, 0.78);
  font-weight: 400;
}

/* ── Main grid ─────────────────────────────────────────────────── */
.kw-contact__main {
  position: relative;
  overflow: hidden;
  padding: clamp(48px, 6vw, 96px) clamp(24px, 5vw, 64px);
  background: #ffffff;
}
.kw-contact__brandmark {
  position: absolute;
  top: clamp(-160px, -12vw, -80px);
  right: clamp(-200px, -16vw, -120px);
  width: clamp(420px, 46vw, 720px);
  pointer-events: none;
  z-index: 0;
  display: block;
}
.kw-contact__brandmark img {
  width: 100%;
  height: auto;
  display: block;
  opacity: 0.92;
  transform: rotate(60deg);
  transform-origin: center;
}
.kw-contact__grid {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(40px, 5vw, 80px);
  align-items: start;
}

/* ── Intro / contact details ───────────────────────────────────── */
.kw-contact__intro-h {
  margin: 0 0 16px;
  font-size: clamp(22px, 2vw, 28px);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.015em;
  color: #0D0959;
}
.kw-contact__intro-p {
  margin: 0 0 14px;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(13, 9, 89, 0.78);
}
.kw-contact__inline-link {
  color: #3E33BB;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1.5px;
  font-weight: 600;
}
.kw-contact__inline-link:hover { color: #2c2495; }

.kw-contact__meta {
  list-style: none;
  padding: 0;
  margin: 32px 0 24px;
  border-top: 1px solid rgba(13, 9, 89, 0.10);
}
.kw-contact__meta li {
  padding: 14px 0;
  border-bottom: 1px solid rgba(13, 9, 89, 0.10);
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.kw-contact__meta-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #6b6883;
}
.kw-contact__meta-value {
  font-size: 15px;
  color: #0D0959;
  font-weight: 500;
}
a.kw-contact__meta-value:hover { color: #3E33BB; }

.kw-contact__socials {
  display: flex;
  gap: 10px;
  margin-top: 4px;
}
.kw-contact__socials a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: #F4F2FB;
  color: #3E33BB;
  transition: background 160ms ease, color 160ms ease, transform 160ms ease;
}
.kw-contact__socials a:hover {
  background: #3E33BB;
  color: #ffffff;
  transform: translateY(-1px);
}
.kw-contact__socials svg { width: 18px; height: 18px; display: block; }

/* ── Form ──────────────────────────────────────────────────────── */
.kw-contact__form {
  background: #ffffff;
  padding: clamp(24px, 3vw, 36px);
  border: 1px solid rgba(13, 9, 89, 0.10);
  border-radius: 18px;
  box-shadow: 0 12px 32px -16px rgba(13, 9, 89, 0.12);
}
.kw-contact__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 18px;
  margin-bottom: 16px;
}
.kw-contact__field {
  display: flex;
  flex-direction: column;
}
.kw-contact__field--full {
  margin-bottom: 12px;
}
.kw-contact__field label {
  font-size: 13px;
  font-weight: 600;
  color: #0D0959;
  margin-bottom: 8px;
  letter-spacing: 0.005em;
}
.kw-contact__req { color: #ED1F80; margin-left: 2px; }

.kw-contact__field input,
.kw-contact__field textarea,
.kw-contact__field select {
  font: inherit;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  color: #0D0959;
  background: #F7F5FC;
  border: 1px solid rgba(13, 9, 89, 0.12);
  border-radius: 10px;
  padding: 12px 14px;
  outline: none;
  transition: background 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
  width: 100%;
}
.kw-contact__field textarea {
  resize: vertical;
  min-height: 140px;
  line-height: 1.55;
}
.kw-contact__field input::placeholder,
.kw-contact__field textarea::placeholder {
  color: rgba(13, 9, 89, 0.40);
}
.kw-contact__field input:focus,
.kw-contact__field textarea:focus,
.kw-contact__field select:focus {
  background: #ffffff;
  border-color: #3E33BB;
  box-shadow: 0 0 0 3px rgba(62, 51, 187, 0.18);
}

.kw-contact__field select {
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%233E33BB' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 40px;
  cursor: pointer;
}

.kw-contact__counter {
  margin-top: 6px;
  align-self: flex-end;
  font-size: 12px;
  color: rgba(13, 9, 89, 0.55);
}
.kw-contact__counter.is-over { color: #ED1F80; font-weight: 600; }

.kw-contact__honeypot {
  position: absolute !important;
  left: -10000px !important;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}

/* ── Checkboxes ────────────────────────────────────────────────── */
.kw-contact__checks {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 12px 0 20px;
}
.kw-contact__check {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: rgba(13, 9, 89, 0.78);
  cursor: pointer;
  line-height: 1.5;
}
.kw-contact__check input[type='checkbox'] {
  width: 18px;
  height: 18px;
  margin: 2px 0 0;
  flex: 0 0 auto;
  accent-color: #3E33BB;
  cursor: pointer;
}
.kw-contact__check a {
  color: #3E33BB;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ── Status banner ─────────────────────────────────────────────── */
.kw-contact__status {
  margin: 0 0 18px;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.5;
}
.kw-contact__status--ok {
  background: rgba(62, 51, 187, 0.08);
  color: #2c2495;
  border: 1px solid rgba(62, 51, 187, 0.20);
}
.kw-contact__status--error {
  background: rgba(237, 31, 128, 0.08);
  color: #a4124d;
  border: 1px solid rgba(237, 31, 128, 0.22);
}

/* ── Submit ────────────────────────────────────────────────────── */
.kw-contact__submit-row {
  display: flex;
  justify-content: flex-end;
}
.kw-contact__submit {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: #3E33BB;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.01em;
  border-radius: 999px;
  border: 0;
  cursor: pointer;
  min-width: 180px;
  justify-content: center;
  transition: background 180ms ease, transform 180ms ease, box-shadow 180ms ease;
  box-shadow: 0 8px 22px -10px rgba(62, 51, 187, 0.55);
}
.kw-contact__submit:hover {
  background: #2c2495;
  transform: translateY(-1px);
  box-shadow: 0 12px 26px -10px rgba(62, 51, 187, 0.7);
}
.kw-contact__submit:disabled {
  opacity: 0.7;
  cursor: progress;
  transform: none;
}
.kw-contact__submit svg { transition: transform 180ms ease; }
.kw-contact__submit:hover svg { transform: translateX(3px); }

/* ── Responsive ────────────────────────────────────────────────── */
@media (max-width: 900px) {
  .kw-contact__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .kw-contact__intro-h { font-size: 22px; }
}
@media (max-width: 560px) {
  .kw-contact__row { grid-template-columns: 1fr; gap: 12px; margin-bottom: 12px; }
  .kw-contact__form { padding: 22px; }
  .kw-contact__submit-row { justify-content: stretch; }
  .kw-contact__submit { width: 100%; }
}
`;

window.Contact = Contact;
