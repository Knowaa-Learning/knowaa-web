// Terms and Conditions, content adapted from the legal copy, styled with the site's design system.

const TERMS_LEDE = `These Terms and Conditions ("Terms") govern your access to and use of the website located at www.knowaa.com (the "Site"), the Knowaa newsletter, and the contact form available on the Site. They are entered into between you and Knowaa LLC, a Delaware limited liability company ("Knowaa," "we," "us," or "our").`;

const TERMS_LEDE_2 = `By accessing the Site, subscribing to our newsletter, or submitting the contact form, you accept these Terms. If you do not agree, do not use the Site or submit information through it.`;

const TERMS_CALLOUT = `These Terms govern your use of the Site only. Paid engagements for Knowaa's services (learning strategy, custom eLearning, video and animation, and learning campaigns) are governed by a separate signed agreement, statement of work, or master services agreement. Nothing on this Site constitutes an offer to provide services; any such offer will be made in writing through a separate contract.`;

const SECTIONS = [
  {
    heading: 'Eligibility and B2B Use',
    paragraphs: [
      `The Site, newsletter, and contact form are intended for business users acting on behalf of a company, organization, or other legal entity. By using the Site, you represent that you are at least eighteen (18) years old and that, where you are acting on behalf of an entity, you have authority to bind that entity to these Terms.`,
    ],
  },
  {
    heading: 'Limited License to Use the Site',
    paragraphs: [
      `Subject to your compliance with these Terms, Knowaa grants you a personal, non-exclusive, non-transferable, revocable license to access and view the Site for your internal business purposes. You may not copy, modify, distribute, sell, lease, create derivative works of, or commercially exploit any part of the Site without Knowaa's prior written consent.`,
    ],
  },
  {
    heading: 'Acceptable Use',
    paragraphs: [
      `You agree not to (a) use the Site in violation of any applicable law or regulation; (b) attempt to gain unauthorized access to the Site, its servers, or any associated systems; (c) interfere with or disrupt the integrity or performance of the Site; (d) use any automated means (including scrapers, bots, or spiders) to extract content from the Site except as expressly permitted by our robots.txt; (e) introduce viruses, malware, or other harmful code; or (f) use the contact form or any other communication channel to submit unlawful, misleading, defamatory, infringing, or harassing content.`,
    ],
  },
  {
    heading: 'Intellectual Property',
    paragraphs: [
      `All content on the Site, including text, graphics, logos, images, audio, video, illustrations, software, and the selection and arrangement thereof, is owned by Knowaa or its licensors and is protected by United States and international intellectual property laws. "Knowaa" and the Knowaa logo are trademarks of Knowaa. Nothing in these Terms transfers any intellectual property right to you, except the limited license expressly granted in Section 2.`,
    ],
  },
  {
    heading: 'Contact Form Submissions',
    paragraphs: [
      `When you submit information through the contact form, you grant Knowaa a worldwide, royalty-free, non-exclusive license to use that information solely to (a) respond to and follow up on your inquiry, (b) maintain ordinary internal business records of inbound communications, and (c) generate aggregated and anonymized statistics about inquiry volume and topics. Knowaa will not use the content of your inquiry for any other purpose without your further consent. You represent that the information you submit is accurate and that you have the right to share it.`,
      { html: `Information submitted through the contact form is processed in accordance with our <a href="Knowaa Privacy.html">Privacy Policy</a>.` },
    ],
  },
  {
    heading: 'Newsletter',
    paragraphs: [
      { html: `If you opt in to the Knowaa newsletter (by checking the corresponding box on the contact form or otherwise providing your email address for that purpose), you consent to receive periodic marketing emails from Knowaa. You may unsubscribe at any time by clicking the unsubscribe link in any newsletter email or by emailing <a href="mailto:info@knowaa.com">info@knowaa.com</a>. We honor unsubscribe requests within ten (10) business days, as required by the U.S. CAN-SPAM Act of 2003. Each newsletter email will include our valid physical postal address and a clear unsubscribe mechanism.` },
    ],
  },
  {
    heading: 'Third-Party Links and Services',
    paragraphs: [
      `The Site may contain links to third-party websites, including external pages describing specific services. The Site also relies on third-party providers to operate (for example, our form-handling provider and our hosting provider). Knowaa does not control these third parties and is not responsible for their content, products, or practices. Your interactions with third-party websites or services are governed by the terms and privacy policies of those third parties.`,
    ],
  },
  {
    heading: 'No Warranties',
    paragraphs: [
      `THE SITE, NEWSLETTER, AND ALL CONTENT MADE AVAILABLE THROUGH THE SITE ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY. KNOWAA DOES NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. INFORMATION ON THE SITE IS PROVIDED FOR GENERAL INFORMATIONAL PURPOSES ONLY AND DOES NOT CONSTITUTE PROFESSIONAL ADVICE.`,
    ],
  },
  {
    heading: 'Limitation of Liability',
    paragraphs: [
      `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL KNOWAA, ITS AFFILIATES, OR ITS OR THEIR DIRECTORS, OFFICERS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, GOODWILL, OR DATA, ARISING OUT OF OR RELATING TO YOUR USE OF THE SITE, NEWSLETTER, OR CONTACT FORM, EVEN IF KNOWAA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. KNOWAA'S TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SITE, NEWSLETTER, OR CONTACT FORM WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (US $100).`,
      `NOTHING IN THESE TERMS LIMITS OR EXCLUDES KNOWAA'S LIABILITY FOR (a) GROSS NEGLIGENCE, WILLFUL MISCONDUCT, OR FRAUD; (b) DEATH OR PERSONAL INJURY CAUSED BY KNOWAA'S NEGLIGENCE; OR (c) ANY OTHER LIABILITY THAT CANNOT BE LIMITED OR EXCLUDED UNDER APPLICABLE LAW. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS OF LIABILITY, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU IN FULL.`,
    ],
  },
  {
    heading: 'Indemnification',
    paragraphs: [
      `You agree to indemnify, defend, and hold harmless Knowaa and its affiliates, directors, officers, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with (a) your use of the Site, newsletter, or contact form in breach of these Terms; (b) your violation of any law or the rights of any third party; or (c) any content or information you submit through the Site.`,
    ],
  },
  {
    heading: 'Termination and Suspension',
    paragraphs: [
      `Knowaa may suspend or terminate your access to the Site at any time, without notice, for any reason, including suspected violation of these Terms. Provisions that by their nature should survive termination (including Sections 4, 5, 8, 9, 10, 12, and 14) will survive.`,
    ],
  },
  {
    heading: 'Governing Law and Venue',
    paragraphs: [
      `These Terms and any dispute arising out of or relating to them or to your use of the Site, newsletter, or contact form are governed by the laws of the State of Delaware, United States, without regard to its conflict-of-laws principles. The state and federal courts located in New Castle County, Delaware will have exclusive jurisdiction over any such dispute, and you irrevocably consent to the personal jurisdiction and venue of those courts.`,
    ],
  },
  {
    heading: 'Changes to These Terms',
    paragraphs: [
      `Knowaa may update these Terms from time to time. The "Last updated" date at the top of this page reflects the most recent revision. For material changes, Knowaa will provide at least thirty (30) days' advance notice by posting a prominent notice on the Site or, where Knowaa has your email address, by emailing you. Non-material changes (such as clarifying language, formatting, or correcting typographical errors) may take effect immediately upon posting. Your continued use of the Site after changes take effect constitutes acceptance of the revised Terms.`,
    ],
  },
  {
    heading: 'Miscellaneous',
    paragraphs: [
      { html: `These Terms, together with the <a href="Knowaa Privacy.html">Privacy Policy</a>, constitute the entire agreement between you and Knowaa with respect to your use of the Site, newsletter, and contact form. If any provision of these Terms is held invalid or unenforceable, the remaining provisions will remain in full force and effect. Knowaa's failure to enforce any right or provision will not be considered a waiver of that right or provision. You may not assign or transfer these Terms without Knowaa's prior written consent; Knowaa may freely assign these Terms. These Terms create rights only between you and Knowaa, and no third party is intended to be, or will be, a beneficiary of these Terms.` },
    ],
  },
  {
    heading: 'Contact',
    paragraphs: [
      { html: `Questions about these Terms can be sent to <a href="mailto:info@knowaa.com">info@knowaa.com</a>.` },
    ],
  },
];

function renderPara(p, j) {
  if (typeof p === 'string') return <p key={j} className="terms__p">{p}</p>;
  return <p key={j} className="terms__p" dangerouslySetInnerHTML={{ __html: p.html }} />;
}

function Terms() {
  return (
    <section className="terms" aria-labelledby="terms-title">
      <div className="terms__main">
        <h1 id="terms-title" className="terms__h1">Terms and Conditions</h1>
        <p className="terms__meta">Last updated: May 13, 2026</p>
        <p className="terms__lede">{TERMS_LEDE}</p>
        <p className="terms__lede terms__lede--secondary">{TERMS_LEDE_2}</p>

        <div className="terms__callout">{TERMS_CALLOUT}</div>

        {SECTIONS.map((s, i) => (
          <section key={i} className="terms__section" aria-labelledby={`terms-s-${i}`}>
            <h2 id={`terms-s-${i}`} className="terms__h2">
              <span className="terms__h2-num" aria-hidden>{String(i + 1).padStart(2, '0')}</span>
              <span>{s.heading}</span>
            </h2>
            {s.paragraphs.map(renderPara)}
          </section>
        ))}

        <div className="terms__contact">
          <p className="terms__contact-text">
            See also our <a href="Knowaa Privacy.html">Privacy Policy</a>. © 2026 Knowaa LLC. All rights reserved.
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
