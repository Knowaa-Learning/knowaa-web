// Terms of Use page — minimal, professional. Left rail (kicker + last-updated) + numbered sections.
// Matches site DNA: Urbanist, purple accent, JetBrains Mono for meta, light-grey contact callout.

const SECTIONS = [
  {
    heading: 'About Knowaa',
    paragraphs: [
      'This website is operated by Knowaa LLC. References to "Knowaa", "we", "us", or "our" relate to Knowaa and its affiliated production partners where relevant.',
    ],
  },
  {
    heading: 'Use of the Site',
    paragraphs: [
      'Access to the site is provided on an as available basis. We may update, modify, restrict, or discontinue any part of the site at any time without prior notice. We do not guarantee uninterrupted or error free access.',
      'You are responsible for ensuring that your use of the site complies with applicable laws and that anyone accessing the site through your connection is aware of these terms.',
    ],
  },
  {
    heading: 'Accounts and Access Credentials',
    paragraphs: [
      'If access to certain areas requires credentials, you are responsible for maintaining their confidentiality. We reserve the right to suspend or terminate access if misuse or breach of these terms is suspected.',
    ],
  },
  {
    heading: 'Intellectual Property',
    paragraphs: [
      'All content on this site, including text, visuals, learning materials, and design, is owned by or licensed to Knowaa and is protected by applicable intellectual property laws.',
      'You may not copy, reproduce, distribute, modify, or use any content for commercial purposes without prior written consent. Use of materials must remain intact and properly attributed where applicable.',
    ],
  },
  {
    heading: 'Content Disclaimer',
    paragraphs: [
      'All materials provided are for general informational purposes only and do not constitute professional, legal, or business advice. While we aim for accuracy and relevance, we do not guarantee that content is complete, current, or suitable for any specific use.',
    ],
  },
  {
    heading: 'Limitation of Liability',
    paragraphs: [
      'To the maximum extent permitted by law, Knowaa will not be responsible for any direct, indirect, or consequential loss arising from your use of, or reliance on, the site or its content. This includes loss of business, revenue, data, or opportunity.',
      'Nothing in these terms limits liability where it would be unlawful to do so.',
    ],
  },
  {
    heading: 'Acceptable Use',
    paragraphs: [
      'You agree not to use the site in any way that is unlawful, harmful, or disruptive. This includes attempting to gain unauthorized access, introducing malicious code, or using the site to distribute unsolicited communications.',
    ],
  },
  {
    heading: 'User Submissions',
    paragraphs: [
      'Any information or materials you submit through the site may be used by Knowaa for operational and communication purposes, in line with our Privacy Policy. You are responsible for ensuring that any submitted content does not violate third party rights.',
    ],
  },
  {
    heading: 'Third Party Links',
    paragraphs: [
      'The site may include links to external websites. These are provided for convenience only. Knowaa does not control or assume responsibility for third party content or services.',
    ],
  },
  {
    heading: 'Privacy',
    paragraphs: [
      'Use of the site is also subject to our Privacy Policy, which explains how we collect and use personal data.',
    ],
  },
  {
    heading: 'Changes to These Terms',
    paragraphs: [
      'We may update these terms from time to time. Continued use of the site following any updates constitutes acceptance of the revised terms.',
    ],
  },
  {
    heading: 'Governing Law',
    paragraphs: [
      'These terms are governed by the laws of the United States. Any disputes arising in connection with the site will be subject to applicable U.S. law.',
    ],
  },
];

function Terms() {
  return (
    <section className="terms" aria-labelledby="terms-title">
      {/* Main column */}
      <div className="terms__main">
        <h1 id="terms-title" className="terms__h1">Terms of Use</h1>
        <p className="terms__lede">
          These terms govern your access to and use of the Knowaa website and any related content,
          including learning materials and communications made available through it. By using this
          site, you agree to these terms. If you do not agree, you should not use the site.
        </p>

        {SECTIONS.map((s, i) => (
          <section key={i} className="terms__section" aria-labelledby={`terms-s-${i}`}>
            <h2 id={`terms-s-${i}`} className="terms__h2">
              <span className="terms__h2-num" aria-hidden>{String(i + 1).padStart(2, '0')}</span>
              <span>{s.heading}</span>
            </h2>
            {s.paragraphs.map((p, j) => (
              <p key={j} className="terms__p">{p}</p>
            ))}
          </section>
        ))}

        {/* Contact callout */}
        <div className="terms__contact">
          <p className="terms__contact-text">
            For questions regarding these terms, contact us through the website.
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

window.Terms = Terms;
