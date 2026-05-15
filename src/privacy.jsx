// Privacy Policy, content adapted from the legal copy, matching the Terms page styling.

const PRIVACY_LEDE = { html: `This Privacy Policy describes how Knowaa LLC ("Knowaa," "we," "us," or "our") collects, uses, shares, and protects personal information when you visit <a href="https://www.knowaa.com">www.knowaa.com</a> (the "Site"), submit our contact form, or subscribe to our newsletter. For the purposes of the EU General Data Protection Regulation, the UK General Data Protection Regulation, and similar laws, Knowaa is the controller of personal information collected through the Site.` };

const PRIVACY_CALLOUT = `Knowaa is a business-to-business service provider. We do not knowingly market to, or collect information from, individuals acting in a personal capacity outside of a business context. If you submit personal information through this Site, you are doing so on behalf of yourself or the organization you represent.`;

const SECTIONS = [
  {
    heading: 'Information We Collect',
    children: [
      { type: 'h3', text: '1.1 Information you provide directly' },
      { type: 'p', text: 'When you submit the contact form, we collect:' },
      { type: 'ul', items: [
        'First and last name',
        'Email address',
        'Phone number (optional)',
        'Company name',
        'The product or service you are interested in (optional)',
        'The content of your inquiry',
        'Your selections on the consent checkboxes (terms acceptance, newsletter opt-in)',
      ] },
      { type: 'p', text: 'When you subscribe to the newsletter, we collect your email address and the fact that you opted in (date and source).' },

      { type: 'h3', text: '1.2 Information collected automatically' },
      { type: 'p', text: 'When you visit the Site, certain information is collected automatically by the Site and by third-party services that operate on the Site, including: IP address, approximate location (derived from IP), browser type and version, operating system, device type, referring URL, pages viewed, time spent on pages, and similar usage data. This information is collected through cookies, server log files, and similar technologies operated by us and our hosting provider.' },

      { type: 'h3', text: '1.3 Information from third parties' },
      { type: 'p', text: 'We may receive limited information from third-party services that we use, such as our form-handling provider (Web3Forms), our hosting provider (Vercel), and our business-email provider (Google Workspace). We use this information only for the purposes described below.' },
    ],
  },
  {
    heading: 'How We Use Information',
    children: [
      { type: 'p', text: 'We use the personal information we collect to:' },
      { type: 'ul', items: [
        'Respond to your inquiry and communicate with you about Knowaa\u2019s services;',
        'Send you the newsletter, if you have opted in;',
        'Operate, maintain, secure, and improve the Site;',
        'Analyze how visitors use the Site so that we can improve content and performance;',
        'Detect and prevent fraud, abuse, and other harmful activity;',
        { html: 'Comply with our legal obligations and enforce our <a href="Knowaa Terms.html">Terms and Conditions</a>.' },
      ] },
    ],
  },
  {
    heading: 'Legal Bases for Processing (EEA/UK Visitors)',
    children: [
      { type: 'p', text: 'If you are located in the European Economic Area, the United Kingdom, or Switzerland, our legal bases for processing your personal information are:' },
      { type: 'ul', items: [
        { html: '<strong>Consent</strong> ,  for sending you the newsletter and for non-essential cookies.' },
        { html: '<strong>Legitimate interests</strong> ,  for responding to your contact-form inquiry, securing and improving the Site, and conducting basic analytics. We balance these interests against your privacy rights.' },
        { html: '<strong>Legal obligation</strong> ,  where we must process information to comply with applicable law.' },
      ] },
    ],
  },
  {
    heading: 'How We Share Information',
    children: [
      { type: 'p', text: 'Knowaa does not sell or rent personal information. We share personal information only in the limited circumstances below:' },
      { type: 'ul', items: [
        { html: '<strong>Service providers</strong> who process information on our behalf. Current providers include: <strong>Web3Forms</strong> (contact-form submission processing), <strong>Vercel</strong> (website hosting and server logs), and <strong>Google Workspace</strong> (business email used to receive and respond to inquiries and to send the newsletter). These providers are contractually limited to using the information only to deliver their services to us.' },
        { html: '<strong>Legal and safety</strong> ,  where required by law, court order, or governmental request; to enforce our Terms; or to protect the rights, property, or safety of Knowaa, our users, or the public.' },
        { html: '<strong>Business transfers</strong> ,  in connection with a merger, acquisition, financing, reorganization, or sale of assets, subject to standard confidentiality protections.' },
      ] },
      { type: 'h3', text: '4.1 Categories of personal information disclosed (CCPA/CPRA)' },
      { type: 'p', text: 'In the preceding twelve (12) months, we have disclosed the following categories of personal information to service providers for the business purposes described in Section 2: identifiers (name, email, phone); commercial information (company name, service of interest); internet or other network activity information (IP address, browser data); and inferences drawn from the foregoing (if any).' },
      { type: 'p', html: 'We have <strong>not sold</strong> personal information and have <strong>not "shared" personal information for cross-context behavioral advertising</strong> as those terms are defined under California law.' },
    ],
  },
  {
    heading: 'Cookies and Similar Technologies',
    children: [
      { type: 'p', text: 'The Site uses strictly necessary cookies and similar technologies needed to operate and secure the Site, and server-log data collected by our hosting provider (Vercel). Knowaa does not currently use third-party advertising cookies, and does not currently operate third-party web analytics on the Site. If Knowaa adopts third-party analytics in the future, this Privacy Policy will be updated to identify the analytics provider and link to its privacy policy, and (where applicable) you will be asked to consent before such analytics is deployed.' },
      { type: 'p', text: 'Most browsers allow you to control cookies through their settings. If you reject non-essential cookies, parts of the Site may not function as intended.' },
    ],
  },
  {
    heading: 'Data Retention',
    children: [
      { type: 'p', text: 'We retain personal information only for as long as necessary for the purposes described in this Privacy Policy, after which we delete or anonymize it. Indicative retention periods are:' },
      { type: 'table', headers: ['Category', 'Retention period'], rows: [
        ['Contact form submissions (name, email, phone, company, inquiry content)', 'Up to 24 months after the most recent communication, or longer if needed to provide ongoing services or to comply with legal obligations.'],
        ['Newsletter subscription records', 'For as long as you are subscribed, plus up to 24 months after unsubscribing to maintain a suppression list (so we do not contact you again).'],
        ['Website usage and log data', 'Up to 14 months in identifiable form, then aggregated or deleted.'],
        ['Records required by law (e.g. tax, accounting, consent records)', 'For the period required by applicable law.'],
      ] },
    ],
  },
  {
    heading: 'International Data Transfers',
    children: [
      { type: 'p', text: 'Knowaa is based in the United States, and our service providers may also be located in the United States or other countries. If you access the Site from outside the United States, your personal information will be transferred to and processed in countries that may have different data-protection laws than your country of residence. Where required by law, we rely on appropriate safeguards ,  such as the European Commission\u2019s Standard Contractual Clauses ,  to legitimize such transfers.' },
    ],
  },
  {
    heading: 'Your Rights',
    children: [
      { type: 'h3', text: '8.1 Rights for California residents (CCPA/CPRA)' },
      { type: 'p', text: 'If you are a California resident, you have the right to:' },
      { type: 'ul', items: [
        'Know what personal information we collect, use, and disclose about you;',
        'Request a copy of your personal information in a portable format;',
        'Request deletion of your personal information, subject to certain exceptions;',
        'Request correction of inaccurate personal information;',
        'Opt out of the "sale" or "sharing" of personal information (we do not sell or share, but the right exists if our practices change);',
        'Limit the use of any sensitive personal information (we do not collect sensitive personal information through the Site);',
        'Not receive discriminatory treatment for exercising these rights.',
      ] },
      { type: 'h3', text: '8.2 Rights for EEA, UK, and Swiss residents (GDPR/UK GDPR)' },
      { type: 'p', text: 'Subject to applicable law, you have the right to access, rectify, erase, restrict processing of, port, and object to processing of your personal information; and to withdraw consent at any time where processing is based on consent. You also have the right to lodge a complaint with your local data-protection authority.' },
      { type: 'h3', text: '8.3 How to exercise your rights' },
      { type: 'p', html: 'To exercise any of these rights, email us at <a href="mailto:info@knowaa.com">info@knowaa.com</a> with the subject line "Privacy Rights Request" and describe your request. We will verify your identity using information we already have on file (such as the email address from which you previously contacted us) and respond within the timeframes required by applicable law ,  typically forty-five (45) days under CCPA and thirty (30) days under GDPR.' },
      { type: 'p', text: 'You may also authorize an agent to submit a request on your behalf. We require written proof of authorization (such as a signed permission letter or a notarized statement), and we may verify your identity directly before fulfilling the request. We will not provide personal information to an agent without satisfactory verification.' },
    ],
  },
  {
    heading: 'Newsletter and Marketing Email Choices',
    children: [
      { type: 'p', html: 'Every newsletter email we send includes a one-click unsubscribe link. You can also unsubscribe by emailing <a href="mailto:info@knowaa.com">info@knowaa.com</a>. We honor unsubscribe requests within ten (10) business days, in accordance with the U.S. CAN-SPAM Act of 2003. Each newsletter email also includes our valid physical postal address.' },
    ],
  },
  {
    heading: 'Security',
    children: [
      { type: 'p', text: 'We use reasonable administrative, technical, and physical safeguards designed to protect personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. No method of transmission or storage, however, is completely secure. We cannot guarantee absolute security and encourage you to use caution when sharing information online.' },
    ],
  },
  {
    heading: 'Children\u2019s Privacy',
    children: [
      { type: 'p', text: 'The Site is not directed to children. In particular, Knowaa complies with the U.S. Children\u2019s Online Privacy Protection Act (COPPA) and does not knowingly collect personal information from children under thirteen (13). For EEA and UK visitors, we additionally do not knowingly collect personal information from individuals under the age of sixteen (16). If you believe we have collected information from a child, please contact us and we will delete it.' },
    ],
  },
  {
    heading: 'Changes to This Privacy Policy',
    children: [
      { type: 'p', text: 'We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision. We will review this Privacy Policy at least once every twelve (12) months. Material changes will be indicated by additional notice on the Site.' },
    ],
  },
  {
    heading: 'Contact Us',
    children: [
      { type: 'p', html: 'Questions about this Privacy Policy or our data practices can be sent to <a href="mailto:info@knowaa.com">info@knowaa.com</a>.' },
    ],
  },
];

function renderBlock(b, key) {
  if (b.type === 'h3') return <h3 key={key} className="terms__h3">{b.text}</h3>;
  if (b.type === 'p') return b.html
    ? <p key={key} className="terms__p" dangerouslySetInnerHTML={{ __html: b.html }} />
    : <p key={key} className="terms__p">{b.text}</p>;
  if (b.type === 'ul') return (
    <ul key={key} className="terms__ul">
      {b.items.map((it, i) => typeof it === 'string'
        ? <li key={i}>{it}</li>
        : <li key={i} dangerouslySetInnerHTML={{ __html: it.html }} />
      )}
    </ul>
  );
  if (b.type === 'table') return (
    <table key={key} className="terms__table">
      <thead>
        <tr>{b.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {b.rows.map((row, i) => (
          <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
        ))}
      </tbody>
    </table>
  );
  return null;
}

function Privacy() {
  return (
    <section className="terms" aria-labelledby="privacy-title">
      <div className="terms__main">
        <h1 id="privacy-title" className="terms__h1">Privacy Policy</h1>
        <p className="terms__meta">Last updated: May 13, 2026</p>
        <p className="terms__lede" dangerouslySetInnerHTML={{ __html: PRIVACY_LEDE.html }} />

        <div className="terms__callout">{PRIVACY_CALLOUT}</div>

        {SECTIONS.map((s, i) => (
          <section key={i} className="terms__section" aria-labelledby={`privacy-s-${i}`}>
            <h2 id={`privacy-s-${i}`} className="terms__h2">
              <span className="terms__h2-num" aria-hidden>{String(i + 1).padStart(2, '0')}</span>
              <span>{s.heading}</span>
            </h2>
            {s.children.map(renderBlock)}
          </section>
        ))}

        <div className="terms__contact">
          <p className="terms__contact-text">
            See also our <a href="Knowaa Terms.html">Terms and Conditions</a>. © 2026 Knowaa LLC. All rights reserved.
          </p>
          <a href="Knowaa Contact.html" className="terms__contact-cta">
            Contact Knowaa
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
              <path d="M2 6 H10 M7 2 L10 6 L7 10" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

window.Privacy = Privacy;
