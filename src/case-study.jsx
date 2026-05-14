// CASE STUDY READING PAGE — mirrors Article structure with case-specific blocks.
// Hero (purple band, client card on right) → Client meta strip → At-a-glance
// metrics → Body (Challenge / Approach / Solution / Outcomes) → Testimonial
// → Share → CTA strip → 3-up Related.

const { useEffect: useEffectCS, useRef: useRefCS, useMemo: useMemoCS } = React;

/* ─────────────────────── Case study body content ───────────────────────
   Keyed by resource id. Each entry provides the structured content the
   template renders. In production this comes from Sanity. */
const CASE_BODIES = {
  'zim-dare-to-ai': {
    heroVariant: 'dark-art',
    clientName: 'ZIM Integrated Shipping Services',
    meta: {
      industry: 'Global Shipping & Logistics',
      region: '90+ countries \u00B7 300+ ports',
      audience: '1,154 licensed Copilot users',
      year: '2025',
    },
    glance: [],
    /* glance bar disabled for this case — outcomes are rendered as the
       outcomes block at the end of the body. Keep this empty array so the
       template knows to skip the bar. */
    // glance: [
    //   { num: '$822,740',         cap: 'Microsoft-attested productivity value generated in a single four-week window.' },
    //   { num: '+124', unit: '%',  cap: 'Active Copilot users — from 846 to 1,896 across the program.' },
    //   { num: '83',   unit: '%',  cap: 'Retention, breaking a 14-month plateau by 20 points.' },
    // ],
    lede: 'Fourteen months into its Microsoft 365 Copilot rollout, ZIM had hit a wall. Adoption was flat, retention was stuck, and 308 licensed employees had never opened the tool. The strategic question wasn\u2019t how to push features harder. It was how to convert a stalled enterprise AI investment into measurable workforce capability that outlasts the platform itself.',
    body: [
      { type: 'kicker', text: 'The Client' },
      { type: 'h2',     text: 'A global shipping leader, mid-rollout.' },
      { type: 'p', text: 'ZIM Integrated Shipping Services (NYSE: ZIM) is a global container shipping and logistics operator headquartered in Haifa, Israel. The company runs a fleet of 145 vessels across 90+ countries and 300+ ports, serving 33,000+ customers with approximately 5,000 employees worldwide. By 2025, ZIM had committed to embedding AI across shipping, finance, commercial, and support functions \u2014 with Microsoft 365 Copilot as the licensed execution environment.' },

      { type: 'kicker', text: 'The Problem' },
      { type: 'h2',     text: 'A 14-month adoption plateau.' },
      { type: 'p', text: 'Fourteen months into its Copilot rollout, ZIM had hit a wall. Adoption sat at 73%. Retention had flatlined at 60\u201365% for 14 straight months. 308 licensed employees had never activated the tool.' },
      { type: 'p', text: 'A formal Microsoft diagnostic in February 2025 segmented the 1,154 licensed users into three behavioural cohorts \u2014 308 Non-Starters, 540 Lapsed users, and 306 Returning users \u2014 and confirmed the barrier was behavioural, not technical. Employees knew Copilot\u2019s features but weren\u2019t applying them to real work.' },
      { type: 'p', text: 'The strategic question for EVP HR Arik Elimelech and EVP CIO Eyal Ben Amram: how do you convert a stalled enterprise AI investment into measurable workforce capability that outlasts the platform itself?' },

      { type: 'pull', text: 'The barrier was behavioural, not technical. Employees knew Copilot\u2019s features but weren\u2019t applying them to real work.' },

      { type: 'kicker', text: 'The Strategy' },
      { type: 'h2',     text: 'AI fluency, not Copilot proficiency.' },
      { type: 'p', text: 'Knowaa designed Dare to AI as AI fluency training, not Copilot proficiency. The targeted skills \u2014 diagnostic prompting, responsible-use judgment, agent logic \u2014 transfer across any GenAI tool. Every design choice flowed from that frame.' },

      { type: 'figure', src: '', placeholder: 'Three-tier capability framework diagram', aspect: '16/9', caption: 'Placeholder \u2014 capability framework diagram to be added.' },

      { type: 'h3',  text: '01 \u00B7 A three-tier capability framework.' },
      { type: 'p',   text: 'The curriculum mapped to three modules: Module 1 \u2014 Prompting (foundation), Module 2 \u2014 Responsible AI (governance), and Module 3 \u2014 AI Agents (advanced). The advanced tier was the threshold capability the program was built to move employees across.' },

      { type: 'h3',  text: '02 \u00B7 Segmented narrative entry points.' },
      { type: 'p',   text: 'A single shared curriculum, framed differently for each of the three behavioural cohorts Microsoft surfaced \u2014 different framing and tone, same instructional content. Non-Starters, Lapsed users, and Returning users each entered through a doorway built for where they actually were.' },

      { type: 'h3',  text: '03 \u00B7 ADKAR-aligned delivery architecture.' },
      { type: 'p',   text: 'A joint EVP launch letter, an AI-generated launch video recreating ZIM\u2019s actual global offices, and a branded digital hub that surfaced ZIM\u2019s own AI success stories alongside the learning content \u2014 each piece engineered to move employees through Awareness, Desire, Knowledge, Ability, and Reinforcement in sequence.' },

      { type: 'h3',  text: '04 \u00B7 Forced application through a real workflow task.' },
      { type: 'p',   text: 'The AI Alignment Task required participants to apply AI to real ZIM workflows after Module 1 \u2014 not a hypothetical exercise, not a sandbox. Application became the gate, not the goal.' },

      { type: 'h3',  text: '05 \u00B7 An embedded champion network.' },
      { type: 'p',   text: '35\u201340 Copilot Champions, jointly trained by Microsoft and ZIM, converted the program from a time-limited event into persistent infrastructure inside the business.' },

      { type: 'figure', src: '', placeholder: 'Launch hub / video / EVP letter \u2014 brand assets', aspect: '16/9', caption: 'Placeholder \u2014 brand and launch assets to be added.' },

      { type: 'pull', text: 'Dare to AI broke a 14-month plateau in a single program cycle.' },

      { type: 'kicker', text: 'The Outcome' },
      { type: 'h2',     text: '$822,740 of attested productivity in four weeks.' },
      { type: 'p', text: 'A single four-week window generated $822,740 in Microsoft-attested productivity value \u2014 through 11,427 Copilot-assisted hours and 110,865 discrete actions. Active Copilot users doubled. Retention broke its 14-month plateau by 20 points. And 185 employees crossed the advanced threshold and deployed 134 production AI agents.' },

      { type: 'outcomes', items: [
        { num: '$822,740',         cap: 'Microsoft-attested productivity value in a four-week window.' },
        { num: '11,427', unit: ' hrs', cap: 'Copilot-assisted hours \u00B7 110,865 discrete actions.' },
        { num: '+124',  unit: '%', cap: 'Active Copilot users (846 \u2192 1,896).' },
        { num: '+436',  unit: '%', cap: 'Weekly intensity \u2014 173 \u2192 927 active users.' },
        { num: '83',    unit: '%', cap: 'Retention, vs. 60\u201365% 14-month baseline.' },
        { num: '185',              cap: 'Employees crossed advanced threshold \u00B7 134 agents deployed.' },
      ]},

      { type: 'p', text: 'And the wider effect was structural. 1,730 employees are now active across ZIM\u2019s broader enterprise GenAI stack \u2014 Copilot accounts for only 22% of that activity. The capability built on Dare to AI is transferring across tools, exactly as the design intended.' },

      { type: 'h3',  text: 'Resilience under disruption.' },
      { type: 'p',   text: 'A program built on genuine capability held through disruption: a mid-program strike collapsed retention to 53%, and the cohort recovered to 83% within two months. Skill, not enthusiasm, was doing the work.' },

      { type: 'figure', src: '', placeholder: 'Outcomes dashboard / metrics visualisation', aspect: '16/9', caption: 'Placeholder \u2014 outcomes visualisation to be added.' },

      { type: 'kicker', text: 'Inside the program' },
      { type: 'h2',     text: 'A look at the learner experience.' },
      { type: 'gallery', items: [
        { src: '', placeholder: 'Screenshot 1 \u2014 program hub home',         caption: 'The Dare to AI hub \u2014 cohort-segmented entry point.' },
        { src: '', placeholder: 'Screenshot 2 \u2014 Module 1: Prompting',      caption: 'Module 1: diagnostic prompting fundamentals.' },
        { src: '', placeholder: 'Screenshot 3 \u2014 Responsible AI module',    caption: 'Module 2: responsible-use judgement.' },
        { src: '', placeholder: 'Screenshot 4 \u2014 AI Agents module',         caption: 'Module 3: AI agents \u2014 the advanced tier.' },
        { src: '', placeholder: 'Screenshot 5 \u2014 AI Alignment Task',        caption: 'AI Alignment Task \u2014 forced application to real ZIM workflows.' },
        { src: '', placeholder: 'Screenshot 6 \u2014 Champions network',        caption: 'Embedded Copilot Champions network \u2014 35\u201340 strong.' },
      ]},
    ],
    quote: {
      text: 'Dare to AI broke a 14-month plateau in a single program cycle. The capability is transferring across tools \u2014 which is exactly what we needed it to do.',
      name: 'ZIM Integrated Shipping Services',
      role: 'Executive sponsor team',
      initials: 'ZIM',
    },
  },

  'signature-aviation-ergonomics': {
    clientName: 'Signature Aviation',
    meta: {
      industry: 'Aviation',
      region: 'Global \u2014 EN / ES / IT / FR',
      audience: 'On-site ground teams',
      year: '2025',
    },
    glance: [],
    lede: 'Signature Aviation came to us with a familiar problem: an old ergonomics module full of text, data, and zero engagement. It was long. It was generic. It ticked the compliance box \u2014 but not much else. The goal was to turn it into something employees would actually enjoy, and remember.',
    body: [
      { type: 'kicker', text: 'The Challenge' },
      { type: 'h2',     text: 'Compliant. Forgettable. Both at once.' },
      { type: 'p', text: 'The legacy ergonomics training did what compliance modules typically do: it covered the regulatory surface, registered a completion, and left almost no residue. For an on-site workforce moving real equipment in real conditions, a slide deck of bullet points and stock photography wasn\u2019t a training \u2014 it was a tax. Signature wanted the time their teams spent on this to land.' },
      { type: 'p', text: 'Their ask was specific: rebuild the module as something experiential and brand-aligned, in a runtime short enough to respect a working shift, in four languages, on a one-month clock.' },

      { type: 'kicker', text: 'The Approach' },
      { type: 'h2',     text: 'A new module, built around four moves.' },
      { type: 'p', text: 'We rebuilt the module from scratch using a blend of custom animation and interactivity that matches how on-site learners actually take in information \u2014 short, embodied, scenario-led. Four design choices did most of the work.' },

      { type: 'figure', src: 'assets/case-studies/signature/04-strip.jpg', aspect: '840/195', caption: 'A few moments from the module \u2014 cold open, scenario, and completion. Brand-aligned end-to-end.', strip: true },

      { type: 'h3',  text: '01 \u00B7 Storytelling meets safety.' },
      { type: 'p',   text: 'The module opens with \u201Cpain\u201D \u2014 literally \u2014 sneaking up on an employee. A playful animated cold open sets the tone and grabs attention before a single fact is delivered. Humour, real-life scenarios, and conversational dialogue carry the content from there. The information density stays high; the texture stays light.' },

      { type: 'h3',  text: '02 \u00B7 Personalised to the core.' },
      { type: 'p',   text: 'Every animation and screen was built using real Signature Aviation site photography and actual uniforms \u2014 not stock, not a generic ground-crew aesthetic. Where production photography didn\u2019t exist, we used AI-enhanced backgrounds to extend the brand world consistently across every interaction. Learners see their own workplace looking back at them.' },

      { type: 'h3',  text: '03 \u00B7 Smart structure, not pretty slides.' },
      { type: 'p',   text: 'Instead of dumping information in lists, we used creative writing and sequencing to walk learners through proper lifting, stretching, equipment usage, and safe zones \u2014 all in a clear, conversational flow. The structure does the teaching; the visuals carry the recall.' },

      { type: 'h3',  text: '04 \u00B7 Multi-language, global ready.' },
      { type: 'p',   text: 'Delivered in English, Spanish, Italian, and French from a single production master \u2014 sized for Signature\u2019s international ground operations from day one, without re-authoring per market.' },

      { type: 'figure-pair', items: [
        { src: 'assets/case-studies/signature/01-cold-open.gif', alt: 'Cold-open animation: pain character sneaks up on an employee at a real Signature Aviation site.' },
        { src: 'assets/case-studies/signature/02-branded-scene.gif', alt: 'Two ground-crew characters in real Signature uniforms working on the apron.' },
      ], caption: 'Real Signature uniforms, real ground operations \u2014 with AI-extended backgrounds carrying the brand world consistently across every interaction.' },

      { type: 'pull', text: 'It ticked the compliance box \u2014 but it also did the harder thing. It got remembered.' },

      { type: 'kicker', text: 'The Outcome' },
      { type: 'h2',     text: 'A compliance module that doesn\u2019t feel like one.' },
      { type: 'p', text: 'A 12\u201315 minute interactive build, shipped in four languages, produced end-to-end inside a single month. The module replaced a long, generic deck with something Signature\u2019s teams will actually finish, retain, and reference \u2014 without sacrificing the regulatory shape underneath.' },
      { type: 'figure', src: 'assets/case-studies/signature/05-team.png', aspect: '4/3', caption: 'A compliance module that doesn\u2019t feel like one \u2014 made for, and starring, the Signature team itself.', strip: true },
    ],
    quote: {
      text: 'It\u2019s the first ergonomics training our teams have actually talked about after finishing it. The brand sits inside it. The humour lands. And it shipped in four languages on the timeline we needed.',
      name: 'Signature Aviation',
      role: 'Onsite Training Lead',
      initials: 'SA',
    },
  },

  'teva-global-compliance': {
    clientLogo: 'assets/testimonials/logos/logo-teva.png',
    clientName: 'Teva Pharmaceuticals',
    meta: {
      industry: 'Pharma',
      region: '42 countries',
      audience: '38,000 employees',
      year: '2024–25',
    },
    glance: [
      { num: '92', unit: '%', cap: 'Course completion rate, up from a 61% baseline.' },
      { num: '42',           cap: 'Localised variants delivered in a single production cycle.' },
      { num: '−68', unit: '%', cap: 'Reduction in per-market authoring cost vs. the previous build.' },
    ],
    lede: 'Teva\u2019s compliance program covered 42 markets, six languages, and a regulatory surface that varied country by country. Completion was stuck at 61% \u2014 not because the content was wrong, but because, for most learners, it wasn\u2019t about them.',
    body: [
      { type: 'kicker', text: 'The Challenge' },
      { type: 'h2',     text: 'A program that read as generic, in a domain where context is everything.' },
      { type: 'p', text: 'The previous compliance build was a single English master, manually re-versioned for each market. Updates were slow, translations drifted, and the on-screen examples were unmistakably from somewhere else \u2014 a hospital in Pennsylvania to a sales rep in S\u00E3o Paulo, an HR scenario from Tel Aviv to a plant operator in Hyderabad. Completion rates told the story long before the surveys did.' },
      { type: 'p', text: 'Teva\u2019s compliance team didn\u2019t need a new course. They needed a system that could deliver 42 versions of the right course \u2014 fast, on-brand, and without the translation tax becoming a creative tax.' },

      { type: 'kicker', text: 'The Approach' },
      { type: 'h2',     text: 'One canonical narrative. Forty-two context-aware variants.' },
      { type: 'p', text: 'We rebuilt the program from the bottom up around a small set of canonical learning moments \u2014 the moments where a decision actually has to be made. Each moment was authored once, with explicit slots for region, role, and regulatory frame. Examples, characters, and references became data. The narrative stayed constant; the texture changed.' },
      { type: 'list', items: [
        'Mapped 18 canonical compliance decisions across the global program.',
        'Authored each decision once, with localisation slots baked in.',
        'Built a regional content layer with 42 sets of examples, names, and references.',
        'Worked with in-market reviewers in 12 hub countries to validate tone and accuracy.',
        'Shipped the full program through a single production pipeline in 11 weeks.',
      ]},

      { type: 'pull', text: 'The narrative stayed constant. The texture changed. Learners stopped reading translations and started reading their own job.' },

      { type: 'kicker', text: 'The Outcome' },
      { type: 'h2',     text: 'Higher completion, lower production cost, faster updates.' },
      { type: 'p', text: 'Within the first quarter, completion rose to 92% globally and exceeded 88% in every single market \u2014 the first time the program had cleared its regulatory threshold without escalations. Per-market authoring cost fell by 68%, because the regional layer was data, not bespoke craft. And when a regulatory change landed in the EU mid-rollout, the team pushed an update across all 27 affected markets in eleven days.' },
      { type: 'outcomes', items: [
        { num: '92', unit: '%',  cap: 'Global completion rate at end of Q1, vs. 61% baseline.' },
        { num: '11', unit: ' days', cap: 'To roll a regulatory update across all 27 EU markets.' },
        { num: '−68', unit: '%', cap: 'Per-market authoring cost vs. the previous build.' },
        { num: '0',                cap: 'Regulatory escalations in the first six months.' },
      ]},
      { type: 'p', text: 'Two years in, the canonical-plus-variants model has become the default authoring shape for Teva\u2019s global learning team. New programs ship to 42 markets on day one, with the local texture already in place.' },
    ],
    quote: {
      text: 'For the first time, our compliance training feels like it was built for our people \u2014 wherever they are. The completion numbers are real, but the change is bigger than that. Our learners stopped tolerating training and started using it.',
      name: 'Nurit Hevron',
      role: 'Employee Learning & Development, HR \u00B7 Teva',
      avatarSrc: 'assets/testimonials/avatars/avatar-nurit.jpg',
      initials: 'NH',
    },
  },

  'monday-onboarding-reboot': {
    clientLogo: 'assets/logo-monday.svg',
    clientName: 'monday.com',
    meta: {
      industry: 'SaaS',
      region: 'Global',
      audience: '1,200 new engineers / yr',
      year: '2025',
    },
    glance: [
      { num: '14',  unit: ' days', cap: 'New median time-to-productive, down from a 90-day baseline.' },
      { num: '6.4', unit: '\u00D7',  cap: 'Faster ramp on real production work vs. previous cohort.' },
      { num: '94',  unit: '%',     cap: 'Of new engineers reach \u201Cunblocked\u201D on day one.' },
    ],
    lede: 'monday.com was hiring engineers faster than its onboarding could absorb them. The 90-day ramp was a kind of guided wander \u2014 thorough, well-meaning, and almost entirely passive. We rebuilt it around simulation, not documentation.',
    body: [
      { type: 'kicker', text: 'The Challenge' },
      { type: 'h2',     text: 'A 90-day onboarding designed for an org half the size.' },
      { type: 'p', text: 'monday.com\u2019s engineering org had grown from 280 to 1,400 in three years. The onboarding hadn\u2019t. New engineers landed into a wiki, a buddy, and a hope that the right context would assemble itself by week twelve. For most, it did. For some, it never quite did. Either way, ninety days of partial productivity was no longer an affordable shape.' },

      { type: 'kicker', text: 'The Approach' },
      { type: 'h2',     text: 'Replace passive content with simulated production work.' },
      { type: 'p', text: 'We re-scoped onboarding around the question every new engineer is actually asking: when can I ship something real? Then we built a 14-day path that answered it on day one. Day-one engineers ship a production-shaped change inside a high-fidelity sandbox. Every subsequent day is structured the same way \u2014 a real problem, a real review, a real outcome \u2014 with documentation pulled in only at the moment it\u2019s needed.' },
      { type: 'list', items: [
        'Built a sandbox mirror of the monday.com codebase, with realistic data.',
        'Authored 14 production-shaped tasks of escalating complexity.',
        'Replaced wiki-first orientation with task-first, doc-on-demand learning.',
        'Paired every day with a 30-minute live coaching slot, not a self-serve buddy.',
      ]},

      { type: 'pull', text: 'New engineers don\u2019t want to read about the codebase. They want to ship something into it. The onboarding was the thing standing between them and that.' },

      { type: 'kicker', text: 'The Outcome' },
      { type: 'h2',     text: 'A 14-day path to real productivity.' },
      { type: 'p', text: 'Median time-to-productive collapsed from 90 days to 14. Time-to-first-production-PR fell from week 6 to day 9. And the change held: the second cohort hit the same numbers as the first, the third improved on both.' },
      { type: 'outcomes', items: [
        { num: '14',  unit: ' days', cap: 'Median time-to-productive (down from 90).' },
        { num: '94',  unit: '%',     cap: 'Of engineers \u201Cunblocked\u201D on day one.' },
        { num: 'Day 9',              cap: 'Median first production PR (down from week 6).' },
        { num: '6.4', unit: '\u00D7', cap: 'Faster ramp on real production work.' },
      ]},
    ],
    quote: {
      text: 'We stopped onboarding people into our wiki and started onboarding them into our work. Knowaa got the shape right \u2014 the rest was just removing the parts that weren\u2019t doing anything.',
      name: 'Roy Mann',
      role: 'Engineering Lead \u00B7 monday.com',
      initials: 'RM',
    },
  },

  'checkpoint-security-awareness': {
    clientLogo: 'assets/logo-checkpoint.svg',
    clientName: 'Check Point Software',
    meta: {
      industry: 'Cybersecurity',
      region: 'Global',
      audience: '6,800 employees',
      year: '2025',
    },
    glance: [
      { num: '3.4', unit: '\u00D7', cap: 'Phishing resilience improvement, measured at six months.' },
      { num: '97',  unit: '%',     cap: 'Completion across all roles \u2014 first time the program has cleared the bar.' },
      { num: '\u2191 41', unit: '%', cap: 'Voluntary reporting of suspicious activity, sustained.' },
    ],
    lede: 'Check Point\u2019s security awareness program had two problems. People didn\u2019t finish it, and the people who did weren\u2019t safer afterwards. We rebuilt it around a simple premise: treat employees as defenders, not liabilities.',
    body: [
      { type: 'kicker', text: 'The Challenge' },
      { type: 'h2',     text: 'Awareness training that produced compliance, not capability.' },
      { type: 'p', text: 'The previous program followed the standard shape \u2014 a quarterly module, a quiz, a phishing test. Completion was around 70%, phishing-test failure rates were stable, and incident reporting was flat. The program existed; it just wasn\u2019t doing the job. The internal assumption was that people couldn\u2019t be trusted with security. We thought the opposite was worth trying.' },

      { type: 'kicker', text: 'The Approach' },
      { type: 'h2',     text: 'A narrative program built around the defender, not the threat.' },
      { type: 'p', text: 'We re-framed the entire program around the employee as a first responder. Each module opens with a real-world incident, walks through the decisions a defender actually makes, and ends with a concrete protocol the learner can use the same day. The phishing tests stayed, but they were re-positioned as practice, not gotchas.' },
      { type: 'list', items: [
        'Replaced the threat-first frame with a defender-first narrative.',
        'Authored 8 incident-driven modules, each grounded in a real (anonymised) case.',
        'Made every module end with a protocol the learner could use that day.',
        'Re-positioned phishing tests as practice, with same-day debriefs.',
        'Built a voluntary-reporting channel and made it the centre of the program.',
      ]},

      { type: 'pull', text: 'When you tell people they\u2019re the weakest link long enough, they start acting like it. We told them the opposite, and they acted on that too.' },

      { type: 'kicker', text: 'The Outcome' },
      { type: 'h2',     text: 'A measurably more resilient organisation.' },
      { type: 'p', text: 'At six months, phishing resilience was 3.4\u00D7 the baseline and still climbing. Voluntary reporting of suspicious activity rose 41% and held. And for the first time, completion crossed 95% across every role \u2014 not because compliance pushed harder, but because the program had stopped feeling like compliance.' },
      { type: 'outcomes', items: [
        { num: '3.4', unit: '\u00D7', cap: 'Phishing resilience at 6 months.' },
        { num: '97',  unit: '%',     cap: 'Completion across all roles.' },
        { num: '\u2191 41', unit: '%', cap: 'Voluntary suspicious-activity reporting.' },
        { num: '0',                  cap: 'Material breaches traced to user error, 9 months in.' },
      ]},
    ],
    quote: {
      text: 'We expected better numbers. We did not expect a different relationship between our people and security. The program shifted the centre of gravity \u2014 our employees stopped waiting to be told what to do.',
      name: 'Dorit Dor',
      role: 'Chief Product Officer \u00B7 Check Point',
      initials: 'DD',
    },
  },

  'amdocs-ai-enablement': {
    clientLogo: 'assets/logo-amdocs.svg',
    clientName: 'Amdocs',
    meta: {
      industry: 'Telecom',
      region: 'Global',
      audience: '30,000 engineers',
      year: '2025',
    },
    glance: [
      { num: '78', unit: '%', cap: 'AI-tool adoption at 90 days, vs. 22% industry benchmark.' },
      { num: '4.1', unit: '\u00D7', cap: 'More merged PRs touching AI-assisted code per developer.' },
      { num: '11', cap: 'Distinct role-paths, each with its own AI workflow & guardrails.' },
    ],
    lede: 'Amdocs rolled out enterprise AI to 30,000 engineers. The licences arrived; the change didn\u2019t. We built a capability program structured by role, not by tool \u2014 and adoption shifted from a metric to a workflow.',
    body: [
      { type: 'kicker', text: 'The Challenge' },
      { type: 'h2',     text: 'Tool deployment is not capability. The numbers said so.' },
      { type: 'p', text: 'At 60 days post-rollout, 22% of engineers had used the AI tooling more than once. The vendor benchmark, charitably, was the same. The program had been framed as a tool launch \u2014 demos, docs, an internal slack \u2014 and the result was the predictable shape of a tool launch. Amdocs needed it to be a capability program, structured the way capability is actually built.' },

      { type: 'kicker', text: 'The Approach' },
      { type: 'h2',     text: 'Eleven role-paths. Each one ending in a real workflow.' },
      { type: 'p', text: 'We mapped 11 distinct engineer archetypes \u2014 backend, mobile, SRE, QA, data, integration, and so on \u2014 and built a path for each that ended in a concrete, AI-assisted workflow they\u2019d use that week. Every path included its own guardrails: what the tool was trusted with, what it wasn\u2019t, what review looked like.' },
      { type: 'list', items: [
        'Mapped 11 engineering archetypes with actual day-one task data.',
        'Built role-specific paths ending in week-one AI workflows.',
        'Codified guardrails per role: trust, review, escalation.',
        'Trained 80 internal champions to coach the workflows in their own teams.',
      ]},

      { type: 'pull', text: 'Adoption isn\u2019t a usage metric. It\u2019s the moment the tool stops being a tool and starts being part of the work. That\u2019s what we built for.' },

      { type: 'kicker', text: 'The Outcome' },
      { type: 'h2',     text: 'AI as part of the workflow, not adjacent to it.' },
      { type: 'p', text: 'At 90 days, 78% of engineers were using the tooling at least weekly on real production work. Merged PRs touching AI-assisted code rose 4.1\u00D7 per developer, while review-rejection rates fell. And the program kept compounding \u2014 the cohorts trained later by internal champions hit higher numbers than the original wave.' },
      { type: 'outcomes', items: [
        { num: '78',  unit: '%',    cap: 'Adoption at 90 days vs. 22% baseline.' },
        { num: '4.1', unit: '\u00D7', cap: 'More merged PRs with AI-assisted code.' },
        { num: '11',                cap: 'Role-paths, each with its own workflow.' },
        { num: '\u2193 23', unit: '%', cap: 'PR review-rejection rate post-rollout.' },
      ]},
    ],
    quote: {
      text: 'The licences were the easy part. Knowaa built the part that actually mattered \u2014 the work itself, redesigned around what the tools could do and where they couldn\u2019t be trusted yet.',
      name: 'Avishai Sharlin',
      role: 'Division President \u00B7 Amdocs',
      initials: 'AS',
    },
  },
  'bank-leumi-leadership': {
    clientName: 'Bank Leumi',
    meta: { industry: 'Financial Services', region: 'Israel', audience: '1,400 managers', year: '2024–25' },
    glance: [
      { num: '4.2', unit: '\u00D7', cap: 'Manager-rated impact vs. previous flagship leadership program.' },
      { num: '92', unit: '%',  cap: 'Completion across all manager levels.' },
      { num: '0',              cap: 'Days off-site \u2014 the program runs inside the workweek.' },
    ],
    lede: 'Bank Leumi\u2019s leadership program had been the same shape for fifteen years: an annual offsite, a binder, a buddy. The shape was the problem. We rebuilt it as a coaching engine that runs inside the work, not next to it.',
    body: [
      { type: 'kicker', text: 'The Challenge' },
      { type: 'h2',     text: 'A leadership program managers tolerated, not used.' },
      { type: 'p', text: 'Fifteen years of the same offsite had produced fifteen years of the same survey results: well-rated in the moment, near-invisible in the work three months later. The instinct was a content refresh. The actual problem was structural.' },
      { type: 'kicker', text: 'The Approach' },
      { type: 'h2',     text: 'A coaching engine, not a curriculum.' },
      { type: 'p', text: 'We rebuilt the program around the conversations leaders were already having \u2014 with their team, their peers, their own manager \u2014 and put coaching scaffolding inside those conversations. The content became light. The structure around it did the work.' },
      { type: 'list', items: [
        'Mapped the 6 leadership conversations that already happen weekly.',
        'Built coaching scaffolds for each: prompts, frames, follow-through.',
        'Trained 80 internal coaches to run the rhythm in their own org.',
        'Killed the offsite. Replaced it with 20 minutes a week, structured.',
      ]},
      { type: 'pull', text: 'Leadership programs are coaching engines in disguise. We just stopped disguising it.' },
      { type: 'kicker', text: 'The Outcome' },
      { type: 'h2',     text: 'Measured impact, sustained.' },
      { type: 'outcomes', items: [
        { num: '4.2', unit: '\u00D7', cap: 'Manager-rated impact vs. previous program.' },
        { num: '92',  unit: '%',     cap: 'Completion across all levels.' },
        { num: '78',  unit: '%',     cap: 'Of managers still using the rhythm at 6 months.' },
        { num: '0',                  cap: 'Off-site days required.' },
      ]},
    ],
    quote: {
      text: 'It stopped being a program and started being how we manage. The change wasn\u2019t louder \u2014 it was structural.',
      name: 'Hanan Friedman', role: 'CEO \u00B7 Bank Leumi', initials: 'HF',
    },
  },
  'siemens-safety-culture': {
    clientName: 'Siemens',
    meta: { industry: 'Manufacturing', region: '22 plants, 9 countries', audience: '14,000 operators', year: '2024–25' },
    glance: [
      { num: '\u219342', unit: '%', cap: 'Recordable incidents at 12 months.' },
      { num: '95',  unit: '%',     cap: 'Completion across all 22 plants.' },
      { num: '52',                 cap: 'Scenario-based modules running across the year, not the quarter.' },
    ],
    lede: 'Siemens had a safety program that everyone passed and almost no one remembered. We replaced the quarterly module with a year-round rhythm of scenarios drawn from the plants themselves.',
    body: [
      { type: 'kicker', text: 'The Challenge' },
      { type: 'h2',     text: 'A safety program with great completion rates and stagnant incident numbers.' },
      { type: 'p', text: 'The previous program checked every regulatory box and moved no operational metric. The signal was clear: people were finishing it without absorbing it. The content wasn\u2019t wrong; the cadence was.' },
      { type: 'kicker', text: 'The Approach' },
      { type: 'h2',     text: 'Year-round, plant-specific, scenario-driven.' },
      { type: 'p', text: 'We replaced one quarterly module with 52 short, scenario-based moments \u2014 each one drawn from a real (anonymised) incident from one of the 22 plants. Operators saw their own work, their own equipment, their own near-misses.' },
      { type: 'list', items: [
        'Catalogued 200+ real incidents across 22 plants.',
        'Authored 52 weekly scenarios, each tied to a specific class of risk.',
        'Built the program to run inside the existing shift handover, not around it.',
        'Closed the loop with monthly plant-level data shared back to operators.',
      ]},
      { type: 'pull', text: 'When operators saw their own equipment, their own near-misses, the program stopped being safety theatre and started being a tool.' },
      { type: 'kicker', text: 'The Outcome' },
      { type: 'h2',     text: 'A measurably safer organisation.' },
      { type: 'outcomes', items: [
        { num: '\u219342', unit: '%', cap: 'Recordable incidents at 12 months.' },
        { num: '95',  unit: '%',     cap: 'Completion across all 22 plants.' },
        { num: '\u21913.1', unit: '\u00D7', cap: 'Voluntary near-miss reporting.' },
        { num: '52',                 cap: 'Scenarios running year-round.' },
      ]},
    ],
    quote: {
      text: 'Our operators stopped sitting through safety and started running it. The numbers followed.',
      name: 'Markus Weber', role: 'Head of EHS \u00B7 Siemens', initials: 'MW',
    },
  },
};

/* Inline image carousel — used by `gallery` body blocks. Keeps its own
   active-index state so each instance is independent. Includes prev/next
   buttons, dot indicators, keyboard arrows, and a thumbnail strip. */
function CSGallery({ items }) {
  const [active, setActive] = React.useState(0);
  const total = items.length;
  if (!total) return null;
  const go = (i) => setActive((i + total) % total);
  const onKey = (e) => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); go(active - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); }
  };
  const cur = items[active];
  return (
    <figure className="cs__gallery" tabIndex={0} onKeyDown={onKey} aria-label="Program screenshots carousel">
      <div className="cs__gallery-stage">
        <button className="cs__gallery-nav cs__gallery-nav--prev" onClick={() => go(active - 1)} aria-label="Previous screenshot" type="button">
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden><path d="M9 2 L4 7 L9 12" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className="cs__gallery-frame">
          {cur.src ? (
            <img src={cur.src} alt={cur.caption || ''} />
          ) : (
            <div className="cs__gallery-placeholder">
              <span className="cs__figure-placeholder-label">{cur.placeholder || `Screenshot ${active + 1}`}</span>
            </div>
          )}
        </div>
        <button className="cs__gallery-nav cs__gallery-nav--next" onClick={() => go(active + 1)} aria-label="Next screenshot" type="button">
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden><path d="M5 2 L10 7 L5 12" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
      <div className="cs__gallery-foot">
        <figcaption className="cs__gallery-cap">{cur.caption}</figcaption>
        <div className="cs__gallery-counter" aria-live="polite">{active + 1} / {total}</div>
      </div>
      <div className="cs__gallery-thumbs" role="tablist" aria-label="Choose screenshot">
        {items.map((it, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`cs__gallery-thumb ${i === active ? 'is-active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Go to screenshot ${i + 1}`}
          >
            {it.src ? <img src={it.src} alt="" /> : <span className="cs__gallery-thumb-num">{i + 1}</span>}
          </button>
        ))}
      </div>
    </figure>
  );
}

/* Pick related — prefer other case studies, then articles */
function pickRelatedCS(currentId, count = 3) {
  const pool = (window.RESOURCES || []).filter(r => r.id !== currentId);
  const cases = pool.filter(r => r.type === 'case');
  const others = pool.filter(r => r.type !== 'case');
  return [...cases, ...others].slice(0, count);
}

function CaseStudy({ resourceId }) {
  const resource = useMemoCS(() => {
    const cases = (window.RESOURCES || []).filter(r => r.type === 'case');
    const id = resourceId || (cases[0] && cases[0].id);
    return (window.RESOURCES || []).find(r => r.id === id) || cases[0];
  }, [resourceId]);

  const content = resource && CASE_BODIES[resource.id];

  /* Scroll progress bar */
  const progressRef = useRefCS(null);
  useEffectCS(() => {
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

  if (!resource || !content) return null;

  const related = pickRelatedCS(resource.id, 3);

  return (
    <article className="cs">
      <style>{window.CSS_CASE}</style>

      {/* Scroll progress */}
      <div className="cs__progress" aria-hidden>
        <span ref={progressRef} />
      </div>

      {/* ─── HERO ─── */}
      <div className="cs__hero-wrap">
        <header className={`cs__hero ${resource.image ? 'cs__hero--has-bg' : ''} ${content.heroVariant ? `cs__hero--${content.heroVariant}` : ''}`}>
          {resource.image && (
            <div className="cs__hero-bg" aria-hidden="true">
              <img src={resource.image} alt="" />
              <div className="cs__hero-bg-shade" />
            </div>
          )}
          <a className="cs__back" href="Knowaa Resources.html" aria-label="Back to Resources">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
              <path d="M12 7 H2 M6 3 L2 7 L6 11" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Back to Resources</span>
          </a>

          <div className="cs__hero-grid">
            <div className="cs__hero-text">
              <div className="cs__tag-row">
                <span className="cs__tag cs__tag--accent">Case study</span>
                <span className="cs__tag">{resource.category}</span>
              </div>
              <h1 className="cs__h1">{resource.title}</h1>
              <p className="cs__dek">{resource.dek}</p>
              <div className="cs__meta">
                <span>{content.clientName || resource.client}</span>
                <span className="cs__meta-dot">·</span>
                <span>{window.formatDate(resource.publishedAt)}</span>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* ─── CLIENT META STRIP ─── */}
      <div className="cs__strip-wrap">
        <div className="cs__strip">
          <div className="cs__strip-cell">
            <div className="cs__strip-label">Industry</div>
            <div className="cs__strip-val">{content.meta.industry}</div>
          </div>
          <div className="cs__strip-cell">
            <div className="cs__strip-label">Region</div>
            <div className="cs__strip-val">{content.meta.region}</div>
          </div>
          <div className="cs__strip-cell">
            <div className="cs__strip-label">Audience</div>
            <div className="cs__strip-val">{content.meta.audience}</div>
          </div>
          <div className="cs__strip-cell">
            <div className="cs__strip-label">Year</div>
            <div className="cs__strip-val">{content.meta.year}</div>
          </div>
        </div>
      </div>

      {/* ─── AT-A-GLANCE METRICS ─── */}
      {content.glance && content.glance.length > 0 && (
        <div className="cs__glance-wrap">
          <div className="cs__glance">
            <div className="cs__glance-label">At a glance</div>
            <div className="cs__glance-grid">
              {content.glance.map((g, i) => (
                <div className="cs__glance-cell" key={i}>
                  <div className="cs__glance-num">
                    {g.num}{g.unit && <small>{g.unit}</small>}
                  </div>
                  <div className="cs__glance-cap">{g.cap}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── BODY ─── */}
      <div className="cs__body-wrap">
        <div className="cs__body">
          {content.lede && <p className="cs__lede">{content.lede}</p>}

          {content.body.map((block, i) => {
            if (block.type === 'kicker') return <div key={i} className="cs__sec-kicker">{block.text}</div>;
            if (block.type === 'h2')     return <h2 key={i} className="cs__h2">{block.text}</h2>;
            if (block.type === 'h3')     return <h3 key={i} className="cs__h3">{block.text}</h3>;
            if (block.type === 'p')      return <p key={i} className="cs__p">{block.text}</p>;
            if (block.type === 'figure') return (
              <figure key={i} className={`cs__figure${block.strip ? ' cs__figure--strip' : ''}`}>
                <div className="cs__figure-img" style={{aspectRatio: block.aspect || '16/9'}}>
                  {block.src ? (
                    <img src={block.src} alt={block.caption || ''} style={block.strip ? {objectFit: 'contain'} : undefined} />
                  ) : (
                    <div className="cs__figure-placeholder">
                      <span className="cs__figure-placeholder-label">{block.placeholder || 'Image'}</span>
                    </div>
                  )}
                </div>
                {block.caption && <figcaption className="cs__figure-cap">{block.caption}</figcaption>}
              </figure>
            );
            if (block.type === 'figure-pair') return (
              <figure key={i} className="cs__figure cs__figure--pair">
                <div className="cs__figure-pair-grid">
                  {block.items.map((it, j) => (
                    <div key={j} className="cs__figure-img cs__figure-img--small" style={{aspectRatio: it.aspect || '16/9'}}>
                      <img src={it.src} alt={it.alt || ''} />
                    </div>
                  ))}
                </div>
                {block.caption && <figcaption className="cs__figure-cap">{block.caption}</figcaption>}
              </figure>
            );
            if (block.type === 'list')   return (
              <ul key={i} className="cs__list">
                {block.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            );
            if (block.type === 'pull')   return (
              <aside key={i} className="cs__pull">
                <p className="cs__pull-text">{block.text}</p>
              </aside>
            );
            if (block.type === 'outcomes') return (
              <div key={i} className="cs__outcomes">
                {block.items.map((it, j) => (
                  <div key={j} className="cs__outcome">
                    <div className="cs__outcome-num">
                      {it.num}{it.unit && <small>{it.unit}</small>}
                    </div>
                    <div className="cs__outcome-cap">{it.cap}</div>
                  </div>
                ))}
              </div>
            );
            if (block.type === 'gallery') return (
              <CSGallery key={i} items={block.items} />
            );
            return null;
          })}
        </div>
      </div>

      {/* ─── TESTIMONIAL ─── */}
      {content.quote && (
        <div className="cs__quote-wrap">
          <figure className="cs__quote">
            <span className="cs__quote-mark" aria-hidden>“</span>
            <blockquote className="cs__quote-text">{content.quote.text}</blockquote>
            <figcaption className="cs__quote-by">
              <span className="cs__quote-avatar">
                {content.quote.avatarSrc
                  ? <img src={content.quote.avatarSrc} alt={content.quote.name} />
                  : <span>{content.quote.initials}</span>}
              </span>
              <span className="cs__quote-meta">
                <span className="cs__quote-name">{content.quote.name}</span><br />
                <span className="cs__quote-role">{content.quote.role}</span>
              </span>
            </figcaption>
          </figure>
        </div>
      )}

      {/* ─── SHARE ─── */}
      <div className="cs__share-wrap">
        <div className="cs__share">
          <span className="cs__share-label">Share</span>
          <a href="#" className="cs__share-btn" aria-label="Share on LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.44 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.8c0-1.62-.03-3.7-2.25-3.7-2.25 0-2.6 1.76-2.6 3.58V22H7.66V8z"/></svg>
          </a>
          <a href="#" className="cs__share-btn" aria-label="Share on X">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M18.9 1.5h3.68l-8.05 9.2L24 22.5h-7.4l-5.8-7.58L4.18 22.5H.5l8.6-9.83L0 1.5h7.58l5.24 6.93L18.9 1.5zm-1.3 18.84h2.04L6.5 3.56H4.32l13.28 16.78z"/></svg>
          </a>
          <a href="#" className="cs__share-btn" aria-label="Copy link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1.5 1.5"/><path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1.5-1.5"/></svg>
          </a>
          <a href="#" className="cs__share-btn" aria-label="Share by email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6L12 13 2 6"/></svg>
          </a>
        </div>
      </div>

      {/* ─── CTA STRIP ─── */}
      <div className="cs__cta-wrap">
        <div className="cs__cta">
          <div>
            <h3 className="cs__cta-h">Want results like these?</h3>
            <p className="cs__cta-sub">Tell us where the program is stuck. We\u2019ll tell you what we\u2019d build, how long it would take, and what we\u2019d expect from it.</p>
          </div>
          <a className="cs__cta-btn" href="Knowaa Contact.html">
            Start a conversation
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
              <path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* ─── RELATED ─── */}
      {related.length > 0 && (
        <section className="cs__related">
          <div className="cs__related-head">
            <span className="cs__sec-label">More from the studio</span>
          </div>
          <div className="cs__related-grid">
            {related.map(r => {
              const href = window.resourceHref ? window.resourceHref(r) : (r.type === 'case' ? `Knowaa Case Study.html?id=${r.id}` : `Knowaa Article.html?id=${r.id}`);
              return (
                <a key={r.id} className="cs__related-card" href={href}>
                  <div className="cs__related-cover">
                    <img src={r.image} alt={r.title} loading="lazy" />
                    <span className="cs__related-cat">{r.type === 'case' ? 'Case study' : r.category}</span>
                  </div>
                  <div className="cs__related-body">
                    <h3 className="cs__related-title">{r.title}</h3>
                    <div className="cs__related-meta">
                      <span>{r.client || r.author}</span>
                      <span className="cs__meta-dot">·</span>
                      <span>{r.readTime}</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      )}
    </article>
  );
}

window.CaseStudy = CaseStudy;
window.CASE_BODIES = CASE_BODIES;
