// CASE STUDY READING PAGE, mirrors Article structure with case-specific blocks.
// Hero (purple band, client card on right) → Client meta strip → At-a-glance
// metrics → Body (Challenge / Approach / Solution / Outcomes) → Testimonial
// → Share → CTA strip → 3-up Related.

const { useEffect: useEffectCS, useRef: useRefCS, useMemo: useMemoCS } = React;

/* ─────────────────────── Case study body content ───────────────────────
   Keyed by resource id. Each entry provides the structured content the
   template renders. In production this comes from Sanity. */
const CASE_BODIES = {
  'zim-dare-to-ai': {
    heroVariant: 'plain',
    clientName: 'ZIM Integrated Shipping Services',
    clientLogo: 'assets/case-studies/zim/logo.png',
    showClientLogoBand: true,
    programImage: 'assets/case-studies/zim/cover.jpg',
    meta: {
      industry: 'Shipping & Logistics',
      region: 'Global \u00B7 35 countries',
      audience: 'Enterprise workforce, all functions',
      year: '2025\u20132026',
    },
    glance: [],
    lede: '',
    body: [

      /* ─── HEADER ASSET, Dare to AI banner ─── */
      { type: 'figure', src: 'assets/case-studies/zim/dare-to-ai-banner.png', aspect: '874/310', style: { width: '45%', marginInline: 'auto' } },

      /* ─── THE PROBLEM ─── */
      { type: 'kicker', text: 'The Problem' },
      { type: 'h2',     text: 'AI training that ends at the tool.' },
      { type: 'p', text: 'Most enterprise AI training is, at its core, a vendor onboarding program. It teaches employees which button to press inside which licensed tool, and stops there. The assumption is that access equals adoption, and adoption equals capability. Fourteen months of plateau data says otherwise.' },
      { type: 'p', text: 'When a workforce has broad access and shallow use, the problem is not the technology. It is the framing. Train people to use a tool, and you get tool-dependent employees. Change platforms, or change the procurement cycle, and you start over. The industry has been solving the wrong problem at scale, and most organisations only notice when the dashboard stops moving.' },

      /* ─── THE STRATEGY ─── */
      { type: 'kicker', text: 'The Strategy' },
      { type: 'h2',     text: 'Dare to AI, not Dare to Copilot.' },
      { type: 'p', text: 'The program was named Dare to AI, not Dare to Copilot. That naming decision was the strategy.' },
      { type: 'p', text: 'Knowaa and ZIM reframed the initiative around platform-agnostic AI fluency: diagnostic prompting, responsible-use judgment, agent logic, applying AI to real workflows. Copilot was the licensed execution environment. The capability being built was designed to outlast any single procurement cycle.' },
      { type: 'p', text: 'The curriculum ran three tiers, Foundation, Governance, Advanced, each mapped to a distinct workforce capability state. Because Microsoft\u2019s pre-program diagnostic had segmented ZIM\u2019s license holders into three behavioural cohorts, the program used segmented narrative entry points rather than a single average-learner path. Same modules, different framing, because self-determination theory predicts that perceived relevance, not content quality, governs whether an adult learner engages past the first screen.' },
      { type: 'p', text: 'Delivery was sequenced to the Prosci ADKAR model: awareness through a joint EVP launch letter and a video that reconstructed ZIM\u2019s actual global offices using AI from reference photography; desire through personal-agency framing in leadership voice; knowledge through the three modules; ability through an AI Alignment Task requiring employees to map AI to a workflow they owned; reinforcement through a 35\u201340 person Copilot Champion network trained jointly by Microsoft and ZIM.' },

      /* ─── PROGRAM STRUCTURE, visual ─── */
      { type: 'figure', src: 'assets/case-studies/zim/program-cards.png', aspect: '16/5', wide: true },

      /* ─── WHAT MOVED ─── */
      { type: 'kicker', text: 'What Moved' },
      { type: 'h2',     text: 'The plateau broke. Then the capability left the tool.' },
      { type: 'p', text: 'The retention plateau broke in the first measurement window after launch. Monthly active use, flat for fourteen consecutive months, moved decisively and held.' },
      { type: 'p', text: 'The advanced cohort told a different story. Of the employees who completed the third module, 134 built and deployed working AI agents inside Microsoft 365, configured against real ZIM workflows, by people with no prior agent-building experience. These were not exercises.' },
      { type: 'p', text: 'The more consequential signal came from outside Copilot entirely. Post-program enterprise telemetry recorded 1,730 ZIM employees actively using generative AI across the broader tool stack. Copilot accounts for roughly a fifth of that activity. The rest is ChatGPT, Gemini, Claude, and platforms ZIM had not formally trained anyone to use. No program directed employees there. The capability transferred on its own.' },
      { type: 'p', text: 'Both executive sponsors, Arik Elimelech, EVP HR & Organization, and Eyal Ben Amram, EVP CIO, remained publicly named on the program. That is not standard for a workforce upskilling initiative.' },

      /* ─── INSIDE THE PROGRAM ─── */
      { type: 'kicker', text: 'Inside the Program' },
      { type: 'h2',     text: 'The hardest design problem was entry, not content.' },
      { type: 'p', text: 'A workforce that has never touched a tool and a workforce that tried and quit share the same curriculum need, but they do not share the same psychological starting point. Addressing one without acknowledging the other produces training that feels either condescending or irrelevant, depending on which seat you\u2019re sitting in. Dare to AI resolved this through segmented narrative entry points: the three modules were identical in substance, but each cohort encountered them through a different frame, one that named their specific experience with AI and spoke to it directly, before asking anything of them.' },
      { type: 'p', text: 'The launch video was built on the same logic. Rather than a generic corporate introduction, Knowaa reconstructed ZIM\u2019s actual global offices, Singapore, Hamburg, New York, Haifa, using AI image generation from reference photography. The result was a visual environment employees recognised as their own workplace, demonstrating the technology\u2019s capability inside a context that was unmistakably ZIM. The medium was the first lesson.' },
      { type: 'p', text: 'Module 3\u2019s AI Alignment Task operationalised the same principle at depth. Employees were not asked to complete a simulation. They were asked to identify a real workflow they owned, diagnose where AI could intervene, and build the agent. The 134 deployed agents that resulted were not program outputs. They were the workforce\u2019s answer to a real question about their own work.' },

      /* ─── CLOSING ─── */
      { type: 'pull', text: 'Dare to AI proved that AI fluency, built against the right capability framework, doesn\u2019t stay inside the tool you trained it on. It moves.' },
      { type: 'p', text: 'That is a different outcome from what enterprise AI training typically promises, and a more durable one.' },
    ],
  },

  'signature-aviation-ergonomics': {
    heroVariant: 'plain',
    clientName: 'Signature Aviation',
    clientLogo: 'assets/case-studies/signature/logo.webp',
    showClientLogoBand: true,
    meta: {
      industry: 'Aviation',
      region: 'Global ,  EN / ES / IT / FR',
      audience: 'On-site ground teams',
      year: '2025',
    },
    glance: [],
    lede: 'Compliance modules get clicked through and forgotten. The injury risk they were meant to prevent doesn\u2019t go away, it just stops being tracked.',
    body: [

      /* ─── THE PROBLEM ─── */
      { type: 'kicker', text: 'The Problem' },
      { type: 'h2',     text: 'A module built for the audit, not the learner.' },
      { type: 'p', text: 'Musculoskeletal disorders cost U.S. employers between $15 and $20 billion in workers\u2019 compensation annually, according to OSHA, and that figure doesn\u2019t touch lost productivity, turnover, or the downstream cost of retraining. The industry\u2019s answer has been to mandate training. The training, as a category, has largely failed to change behavior.' },
      { type: 'p', text: 'The default ergonomics module is a sixty-minute slide deck no one finishes. Completion rates for mandatory compliance training routinely sit below 30 percent. What gets tracked is the click, not the transfer. Signature Aviation\u2019s existing module fit the pattern exactly: text-heavy, generic, brand-absent, and built for the audit trail rather than the learner. Ticking the box had become the entire point.' },

      /* ─── THE STRATEGY ─── */
      { type: 'kicker', text: 'The Strategy' },
      { type: 'h2',     text: 'Don\u2019t improve the old module. Replace it.' },
      { type: 'p', text: 'The brief was clear: don\u2019t improve the old module. Replace it with something employees would choose to finish.' },
      { type: 'p', text: 'Knowaa rebuilt the program from concept as a custom animated interactive module, because passive content consumption predicts passive behavior change, and the goal was neither. The module opens with an animated sequence in which workplace pain literally sneaks up on an employee: a deliberate narrative hook designed to activate attention before instruction begins. Attention, once lost in the first ninety seconds, rarely returns.' },
      { type: 'p', text: 'Every asset was built against Signature Aviation\u2019s actual environment. Backgrounds were constructed from real site photography, AI-enhanced for visual consistency. Characters wore the correct uniforms. Equipment matched what employees handle on shift.' },
      { type: 'p', text: 'Content followed a conversational arc, proper lifting mechanics, stretch protocols, equipment use, safe-zone awareness, structured for twelve to fifteen minutes of active engagement rather than passive scroll. The module was then localized into English, Spanish, Italian, and French. Total time from concept to delivered package: under thirty days.' },

      /* ─── PROGRAM STRIP, frames from the module ─── */
      { type: 'figure', src: 'assets/case-studies/signature/04-strip.jpg', aspect: '840/195', wide: true, strip: true, style: { width: '91%', marginInline: 'auto' } },

      /* ─── PAIRED GIFS, cold open + branded scene ─── */
      { type: 'figure-pair', items: [
        { src: 'assets/case-studies/signature/01-cold-open.gif', alt: 'Cold-open animation: pain character sneaks up on an employee at a real Signature Aviation site.' },
        { src: 'assets/case-studies/signature/02-branded-scene.gif', alt: 'Two ground-crew characters in real Signature uniforms working on the apron.' },
      ], caption: 'Real Signature uniforms, real ground operations ,  with AI-extended backgrounds carrying the brand world consistently across every interaction.' },

      /* ─── WHAT MOVED ─── */
      { type: 'kicker', text: 'What Moved' },
      { type: 'h2',     text: 'Shipped on a thirty-day clock, in four languages.' },
      { type: 'p', text: 'The program launched across Signature Aviation\u2019s international teams and completed delivery on schedule across all four language variants.' },
      { type: 'p', text: 'The thirty-day window covered concept, custom animation, interactivity build, and four-language localization, a scope that typically runs eight to twelve weeks at volume vendors.' },
      { type: 'figure', src: 'assets/case-studies/signature/05-team.png', aspect: '4/3', caption: 'A compliance module that doesn\u2019t feel like one ,  made for, and starring, the Signature team itself.', strip: true },

      /* ─── CLOSING ─── */
      { type: 'pull', text: 'A twelve-minute module has to compete for attention the same way a twelve-minute video does.' },
      { type: 'p', text: 'Compliance training fails when the learner\u2019s presence is assumed rather than earned. This program was built on the opposite premise, that a twelve-minute module has to compete for attention the same way a twelve-minute video does. The thirty-day delivery was the operational proof. The four languages were the scale proof. What the program actually changed in the body of the workforce is the number still worth chasing.' },
    ],
  },

  'kornit-digital-onboarding': {
    heroVariant: 'plain',
    clientName: 'Kornit Digital',
    clientLogo: 'assets/case-studies/kornit/logo.png',
    clientLogoSize: '160px',
    showClientLogoBand: true,
    meta: {
      industry: 'Industrial Direct-to-Garment / Textile Printing Technology',
      region: 'Global \u00B7 Israel HQ \u00B7 Englewood, NJ',
      audience: 'New hires, global employee base',
      year: '2024',
    },
    glance: [],
    lede: 'New hires at a global textile printing company were inheriting a culture built around craft, and receiving a Zoom link.',
    body: [

      /* ─── THE PROBLEM ─── */
      { type: 'kicker', text: 'The Problem' },
      { type: 'h2',     text: 'When the product is the story, onboarding should prove it.' },
      { type: 'p', text: 'Most onboarding programs are not programs. They are parking lots: a folder of PDFs, a calendar invite, and three hours of recorded Zoom calls that nobody watches twice. The assumption is that information delivered equals knowledge retained. It doesn\u2019t.' },
      { type: 'p', text: 'This problem is especially sharp at companies whose product is itself a feat of craft. Kornit Digital builds industrial printing systems that turn raw fabric into finished goods. Machines that require trained operators, informed salespeople, and employees who understand, at a felt level, what the technology actually does. Handing those new hires a slide deck is not an onboarding failure. It is a brand failure.' },

      /* ─── THE STRATEGY ─── */
      { type: 'kicker', text: 'The Strategy' },
      { type: 'h2',     text: 'Cast the product as the narrator.' },
      { type: 'p', text: 'The brief called for an onboarding suite. What it actually required was a reframe: the product itself had to do the teaching.' },
      { type: 'p', text: 'Kornit\u2019s technology prints directly onto fabric. No screens, no dye baths, no intermediate steps. The output is a garment. So we cast one as the narrator. A printed shirt walks the offices, introduces the company, explains the culture, and sings. Not as a gimmick. Embodied, character-led learning activates narrative transportation in ways that presenter-to-camera never does, and narrative transportation predicts knowledge retention across transfer contexts.' },
      { type: 'p', text: 'The flagship video anchored the suite. Around it, we built three supporting assets. A buddy video gave new hires a peer voice, a recognisable ground-level perspective distinct from the institutional tone of the hero piece. A platform introduction video oriented employees to the onboarding system itself, reducing friction before the learning began. And Kornit\u2019s archive of live Zoom onboarding sessions, recorded, unwatched, inaccessible, was converted into edited, chaptered, interactive eLearning modules: the same institutional knowledge, now navigable.' },
      { type: 'p', text: 'The design decision that held all four together was specificity to Kornit\u2019s world. Every detail, office locations, product language, the visual texture of printed fabric, was drawn from their reality, not approximated from a template. New hires were not watching a generic welcome video. They were watching their company explain itself, in its own material language.' },

      /* ─── LOOPING TEASER VIDEO ─── */
      { type: 'video', src: 'assets/case-studies/kornit/teaser.mp4', aspect: '16/9', style: { width: '55%', marginInline: 'auto' } },

      /* ─── WHAT MOVED ─── */
      { type: 'kicker', text: 'What Moved' },
      { type: 'h2',     text: 'A four-asset suite where none existed before.' },
      { type: 'p', text: 'Kornit received a complete onboarding suite where none had existed in this form before. Four distinct assets covering cultural orientation, peer connection, platform navigation, and institutional knowledge access.' },
      { type: 'p', text: 'The Zoom-to-module conversion addressed a specific structural problem: recorded sessions that represented hours of accumulated onboarding expertise were sitting in a folder, effectively lost. Converting them into interactive modules made that knowledge persistent and retrievable, accessible to a new hire on day one in Englewood the same way it was to one joining in Tel Aviv.' },
      { type: 'p', text: 'The four-asset suite gave Kornit something a single video or a Zoom recording never could: a coherent onboarding arc. New hires moved through it in sequence, from cultural immersion to peer orientation to platform fluency to institutional depth, without a coordinator manually stitching the pieces together each time.' },

      /* ─── INSIDE THE PROGRAM ─── */
      { type: 'kicker', text: 'Inside the Program' },
      { type: 'h2',     text: 'The shirt was not a metaphor. It was a production decision with a learning rationale behind it.' },
      { type: 'p', text: 'Kornit\u2019s product is tactile: ink on fabric, garment out the other side. Their employees sell, service, and build around that physical output. An onboarding program that opened with a talking head in a conference room would have communicated, accurately or not, that the company\u2019s internal culture was disconnected from its product culture. Casting the printed shirt as the learning agent closed that gap. The character walked actual Kornit offices, referenced real teams by name, and moved through the physical spaces new hires would soon inhabit. Familiarity arrived before the first day did.' },
      { type: 'p', text: 'The buddy video made a different creative bet. Where the flagship leaned cinematic, the buddy piece leaned human. A peer voice, unscripted in register if not in fact, designed to answer the questions new hires actually ask rather than the ones HR anticipates. The two pieces were written to feel like they came from the same company but not the same department, because that tension is true.' },
      { type: 'p', text: 'The Zoom conversions required the least creativity and the most editorial discipline. The raw recordings were long, discursive, and non-linear, typical of live sessions that weren\u2019t designed to be watched asynchronously. Editing them into modules meant making decisions about what to cut, what to surface, and where to insert interaction points that would hold attention without patronising experienced professionals.' },

      /* ─── CLOSING ─── */
      { type: 'pull', text: 'A printed shirt walking the halls is either the best idea in the brief or the worst, depending entirely on whether the execution earns it. This one did.' },
      { type: 'p', text: 'Kornit Digital makes things you can hold. The onboarding program needed to feel like the company made it, not like a vendor processed it.' },
    ],
  },

  'teva-privacy-episodes': {
    heroVariant: 'plain',
    clientName: 'Teva',
    clientLogo: 'assets/case-studies/teva-privacy/logo.png',
    clientLogoSize: '160px',
    showClientLogoBand: true,
    meta: {
      industry: 'Pharmaceutical',
      region: 'Global',
      audience: 'All employees',
      year: '2024',
    },
    glance: [],
    lede: 'Pharma employees aren\u2019t ignoring compliance training because they don\u2019t care. They\u2019re ignoring it because nobody made it worth watching.',
    body: [

      /* ─── THE PROBLEM ─── */
      { type: 'kicker', text: 'The Problem' },
      { type: 'h2',     text: 'Compliance training designed for obligation, not comprehension.' },
      { type: 'p', text: 'Compliance training in regulated industries operates on a specific assumption: that obligation is enough. Employees must complete it, so they will absorb it. They don\u2019t.' },
      { type: 'p', text: 'In pharma, the training burden is heavier than most. Data privacy sits alongside pharmacovigilance, anti-bribery, code of conduct, and a rotating cast of annual recertifications. Each arrives as a module. Each demands a click-through. The default result isn\u2019t comprehension, it\u2019s tolerance. Employees learn to finish, not to think.' },
      { type: 'p', text: 'The problem was never motivation. It was design.' },

      /* ─── THE STRATEGY ─── */
      { type: 'kicker', text: 'The Strategy' },
      { type: 'h2',     text: 'Eight episodes. One habit. A compliance program shaped like a campaign.' },
      { type: 'p', text: 'The brief wasn\u2019t to build a course. It was to build a campaign.' },
      { type: 'p', text: 'Eight episodes, each under sixty seconds, released across weeks rather than delivered as a single block. The format was deliberate: spaced distribution, because spacing practice across time reliably outperforms massed exposure for long-term retention. A principle the forgetting curve literature has documented for over a century, and that compliance programs continue to ignore.' },
      { type: 'p', text: 'Each episode was written by a professional copywriter and produced by a specialist animator. The visual language, character design, color palette, and motion style were developed against Teva\u2019s brand identity, not adapted from a generic template. Humor was written in, not added as decoration. The instinct was correct: affective engagement predicts recall. Content that generates an emotional response, even mild amusement, is processed more deeply than neutral material.' },
      { type: 'p', text: 'Companion assets extended the campaign beyond the screen. WhatsApp stickers and printed posters carried the characters into the ambient workplace, reinforcing recall through environmental repetition without requiring another scheduled session.' },
      { type: 'p', text: 'The result was a data privacy program designed to behave like advertising: short, recurring, character-led, and impossible to ignore on a Tuesday morning.' },

      /* ─── LOOPING TEASER VIDEO ─── */
      { type: 'video', src: 'assets/case-studies/teva-privacy/teaser.mp4', aspect: '16/9', style: { width: '55%', marginInline: 'auto' } },

      /* ─── WHAT MOVED ─── */
      { type: 'kicker', text: 'What Moved' },
      { type: 'h2',     text: 'A field note, not a headline outcome.' },
      { type: 'p', text: 'This is a Tier 3 field note. Outcome metrics were not released by the client.' },
      { type: 'p', text: 'What is on the record: the program ran to completion across all eight episodes, the campaign format was retained for distribution rather than collapsed into a single release, and the companion asset suite (stickers, posters) was produced and deployed alongside the episodes. These are production decisions that do not get made for programs that fail internal review.' },

      /* ─── CLOSING ─── */
      { type: 'pull', text: 'Data privacy training doesn\u2019t have to feel like a legal obligation wearing a PowerPoint. It has to feel like something worth sixty seconds of a Tuesday.' },
      { type: 'p', text: 'Teva\u2019s employees got eight of them.' },
    ],
  },

  'netafim-kaizen-prework': {
    heroVariant: 'plain',
    clientName: 'Netafim',
    clientLogo: 'assets/case-studies/netafim/logo.png',
    clientLogoSize: '180px',
    showClientLogoBand: true,
    meta: {
      industry: 'Manufacturing / Agricultural Technology',
      region: 'Global \u00B7 110 countries',
      audience: 'Plant and operations employees attending kaizen events',
      year: '2023',
    },
    glance: [],
    lede: 'Kaizen events are expensive by design. The first morning shouldn\u2019t be the one where people learn what kaizen is.',
    body: [

      /* ─── THE PROBLEM ─── */
      { type: 'kicker', text: 'The Problem' },
      { type: 'h2',     text: 'Before the event starts, the work is already lost.' },
      { type: 'p', text: 'Kaizen events are expensive by design. You pull people off the floor, fly them to a site, book a facilitator, and hold the calendar for three to five days. The assumption is that the work begins on Day 1. It rarely does.' },
      { type: 'p', text: 'When participants arrive without a working understanding of kaizen, what it is, why the methodology works, what their role in it requires, the first morning becomes remedial. The facilitator teaches instead of leads. The team orients instead of improves. The clock runs, and the expensive part hasn\u2019t started yet.' },

      /* ─── THE STRATEGY ─── */
      { type: 'kicker', text: 'The Strategy' },
      { type: 'h2',     text: 'Documentary footage from a real Netafim kaizen, not a generic simulation.' },
      { type: 'p', text: 'The brief was to get employees ready before they arrived, not with a slide deck summarising lean principles, but with something that made the methodology feel real and worth engaging with.' },
      { type: 'p', text: 'We filmed an actual kaizen event at a Netafim facility: the gemba walks, the process mapping sessions, the team discussions at the board. Then we edited it as documentary, short observational clips built around the people doing the work and their own accounts of what the methodology demanded of them. No narrator explaining kaizen from outside. The process explained itself through the people living it.' },
      { type: 'p', text: 'We built the interactive module around that footage because contextual exposure before a performance event predicts faster orientation on arrival. Learners who have seen the environment, heard the vocabulary, and watched peers navigate the process don\u2019t need Day 1 to catch up. They arrive with a working mental model.' },
      { type: 'p', text: 'Participants completed the unit before their assigned event. The module walked them through kaizen principles, the structure of a typical event, and what would be expected of them on the floor, grounded throughout in footage from a real Netafim event, not a generic manufacturing simulation.' },

      /* ─── LOOPING TEASER VIDEO ─── */
      { type: 'video', src: 'assets/case-studies/netafim/teaser.mp4', aspect: '16/9', style: { width: '55%', marginInline: 'auto' } },

      /* ─── WHAT MOVED ─── */
      { type: 'kicker', text: 'What Moved' },
      { type: 'h2',     text: 'Day 1 stopped being remedial.' },
      { type: 'p', text: 'Participants arrived at subsequent kaizen events with a baseline understanding of the methodology, the vocabulary, and their role in the process. Facilitators were able to move directly into improvement work rather than opening with remedial orientation.' },
      { type: 'p', text: 'The unit ran as pre-work before events across Netafim\u2019s global operations. No additional orientation session was required.' },
      { type: 'p', text: 'The work was documented as a field note rather than a flagged outcome study. Netafim did not commission a formal measurement program. What it demonstrates is the design logic: when pre-event preparation is built around real artifacts from real events, the event itself can start on time.' },

      /* ─── CLOSING ─── */
      { type: 'pull', text: 'Pre-event preparation is a design problem, not a scheduling one.' },
      { type: 'p', text: 'The right artifact, built from the real event, not a description of it, is the difference between a kaizen event that starts and one that waits.' },

      /* ─── GALLERY, frames from the module ─── */
      { type: 'gallery', autoPlayMs: 3500, items: [
        { src: 'assets/case-studies/netafim/06-thinking.jpg', caption: 'Kaizen Thinking: the framework, in two minutes.' },
        { src: 'assets/case-studies/netafim/01-kickoff.jpg',  caption: 'The kick-off meeting: who is in the room and what each person owns.' },
        { src: 'assets/case-studies/netafim/05-walkthrough.jpg', caption: 'A real Netafim plant walkthrough opens the module.' },
        { src: 'assets/case-studies/netafim/02-board.jpg',    caption: 'Process mapping at the board, captured on-site.' },
        { src: 'assets/case-studies/netafim/03-team.jpg',     caption: 'The team behind one Netafim setup-improvement event.' },
        { src: 'assets/case-studies/netafim/04-change-good.jpg', caption: 'Kai, Zen: change, good.' },
      ]},
    ],
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
    lede: 'Teva\u2019s compliance program covered 42 markets, six languages, and a regulatory surface that varied country by country. Completion was stuck at 61% ,  not because the content was wrong, but because, for most learners, it wasn\u2019t about them.',
    body: [
      { type: 'kicker', text: 'The Challenge' },
      { type: 'h2',     text: 'A program that read as generic, in a domain where context is everything.' },
      { type: 'p', text: 'The previous compliance build was a single English master, manually re-versioned for each market. Updates were slow, translations drifted, and the on-screen examples were unmistakably from somewhere else ,  a hospital in Pennsylvania to a sales rep in S\u00E3o Paulo, an HR scenario from Tel Aviv to a plant operator in Hyderabad. Completion rates told the story long before the surveys did.' },
      { type: 'p', text: 'Teva\u2019s compliance team didn\u2019t need a new course. They needed a system that could deliver 42 versions of the right course ,  fast, on-brand, and without the translation tax becoming a creative tax.' },

      { type: 'kicker', text: 'The Approach' },
      { type: 'h2',     text: 'One canonical narrative. Forty-two context-aware variants.' },
      { type: 'p', text: 'We rebuilt the program from the bottom up around a small set of canonical learning moments ,  the moments where a decision actually has to be made. Each moment was authored once, with explicit slots for region, role, and regulatory frame. Examples, characters, and references became data. The narrative stayed constant; the texture changed.' },
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
      { type: 'p', text: 'Within the first quarter, completion rose to 92% globally and exceeded 88% in every single market ,  the first time the program had cleared its regulatory threshold without escalations. Per-market authoring cost fell by 68%, because the regional layer was data, not bespoke craft. And when a regulatory change landed in the EU mid-rollout, the team pushed an update across all 27 affected markets in eleven days.' },
      { type: 'outcomes', items: [
        { num: '92', unit: '%',  cap: 'Global completion rate at end of Q1, vs. 61% baseline.' },
        { num: '11', unit: ' days', cap: 'To roll a regulatory update across all 27 EU markets.' },
        { num: '−68', unit: '%', cap: 'Per-market authoring cost vs. the previous build.' },
        { num: '0',                cap: 'Regulatory escalations in the first six months.' },
      ]},
      { type: 'p', text: 'Two years in, the canonical-plus-variants model has become the default authoring shape for Teva\u2019s global learning team. New programs ship to 42 markets on day one, with the local texture already in place.' },
    ],
    quote: {
      text: 'For the first time, our compliance training feels like it was built for our people ,  wherever they are. The completion numbers are real, but the change is bigger than that. Our learners stopped tolerating training and started using it.',
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
    lede: 'monday.com was hiring engineers faster than its onboarding could absorb them. The 90-day ramp was a kind of guided wander ,  thorough, well-meaning, and almost entirely passive. We rebuilt it around simulation, not documentation.',
    body: [
      { type: 'kicker', text: 'The Challenge' },
      { type: 'h2',     text: 'A 90-day onboarding designed for an org half the size.' },
      { type: 'p', text: 'monday.com\u2019s engineering org had grown from 280 to 1,400 in three years. The onboarding hadn\u2019t. New engineers landed into a wiki, a buddy, and a hope that the right context would assemble itself by week twelve. For most, it did. For some, it never quite did. Either way, ninety days of partial productivity was no longer an affordable shape.' },

      { type: 'kicker', text: 'The Approach' },
      { type: 'h2',     text: 'Replace passive content with simulated production work.' },
      { type: 'p', text: 'We re-scoped onboarding around the question every new engineer is actually asking: when can I ship something real? Then we built a 14-day path that answered it on day one. Day-one engineers ship a production-shaped change inside a high-fidelity sandbox. Every subsequent day is structured the same way ,  a real problem, a real review, a real outcome ,  with documentation pulled in only at the moment it\u2019s needed.' },
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
      text: 'We stopped onboarding people into our wiki and started onboarding them into our work. Knowaa got the shape right ,  the rest was just removing the parts that weren\u2019t doing anything.',
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
      { num: '97',  unit: '%',     cap: 'Completion across all roles ,  first time the program has cleared the bar.' },
      { num: '\u2191 41', unit: '%', cap: 'Voluntary reporting of suspicious activity, sustained.' },
    ],
    lede: 'Check Point\u2019s security awareness program had two problems. People didn\u2019t finish it, and the people who did weren\u2019t safer afterwards. We rebuilt it around a simple premise: treat employees as defenders, not liabilities.',
    body: [
      { type: 'kicker', text: 'The Challenge' },
      { type: 'h2',     text: 'Awareness training that produced compliance, not capability.' },
      { type: 'p', text: 'The previous program followed the standard shape ,  a quarterly module, a quiz, a phishing test. Completion was around 70%, phishing-test failure rates were stable, and incident reporting was flat. The program existed; it just wasn\u2019t doing the job. The internal assumption was that people couldn\u2019t be trusted with security. We thought the opposite was worth trying.' },

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
      { type: 'p', text: 'At six months, phishing resilience was 3.4\u00D7 the baseline and still climbing. Voluntary reporting of suspicious activity rose 41% and held. And for the first time, completion crossed 95% across every role ,  not because compliance pushed harder, but because the program had stopped feeling like compliance.' },
      { type: 'outcomes', items: [
        { num: '3.4', unit: '\u00D7', cap: 'Phishing resilience at 6 months.' },
        { num: '97',  unit: '%',     cap: 'Completion across all roles.' },
        { num: '\u2191 41', unit: '%', cap: 'Voluntary suspicious-activity reporting.' },
        { num: '0',                  cap: 'Material breaches traced to user error, 9 months in.' },
      ]},
    ],
    quote: {
      text: 'We expected better numbers. We did not expect a different relationship between our people and security. The program shifted the centre of gravity ,  our employees stopped waiting to be told what to do.',
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
    lede: 'Amdocs rolled out enterprise AI to 30,000 engineers. The licences arrived; the change didn\u2019t. We built a capability program structured by role, not by tool ,  and adoption shifted from a metric to a workflow.',
    body: [
      { type: 'kicker', text: 'The Challenge' },
      { type: 'h2',     text: 'Tool deployment is not capability. The numbers said so.' },
      { type: 'p', text: 'At 60 days post-rollout, 22% of engineers had used the AI tooling more than once. The vendor benchmark, charitably, was the same. The program had been framed as a tool launch ,  demos, docs, an internal slack ,  and the result was the predictable shape of a tool launch. Amdocs needed it to be a capability program, structured the way capability is actually built.' },

      { type: 'kicker', text: 'The Approach' },
      { type: 'h2',     text: 'Eleven role-paths. Each one ending in a real workflow.' },
      { type: 'p', text: 'We mapped 11 distinct engineer archetypes ,  backend, mobile, SRE, QA, data, integration, and so on ,  and built a path for each that ended in a concrete, AI-assisted workflow they\u2019d use that week. Every path included its own guardrails: what the tool was trusted with, what it wasn\u2019t, what review looked like.' },
      { type: 'list', items: [
        'Mapped 11 engineering archetypes with actual day-one task data.',
        'Built role-specific paths ending in week-one AI workflows.',
        'Codified guardrails per role: trust, review, escalation.',
        'Trained 80 internal champions to coach the workflows in their own teams.',
      ]},

      { type: 'pull', text: 'Adoption isn\u2019t a usage metric. It\u2019s the moment the tool stops being a tool and starts being part of the work. That\u2019s what we built for.' },

      { type: 'kicker', text: 'The Outcome' },
      { type: 'h2',     text: 'AI as part of the workflow, not adjacent to it.' },
      { type: 'p', text: 'At 90 days, 78% of engineers were using the tooling at least weekly on real production work. Merged PRs touching AI-assisted code rose 4.1\u00D7 per developer, while review-rejection rates fell. And the program kept compounding ,  the cohorts trained later by internal champions hit higher numbers than the original wave.' },
      { type: 'outcomes', items: [
        { num: '78',  unit: '%',    cap: 'Adoption at 90 days vs. 22% baseline.' },
        { num: '4.1', unit: '\u00D7', cap: 'More merged PRs with AI-assisted code.' },
        { num: '11',                cap: 'Role-paths, each with its own workflow.' },
        { num: '\u2193 23', unit: '%', cap: 'PR review-rejection rate post-rollout.' },
      ]},
    ],
    quote: {
      text: 'The licences were the easy part. Knowaa built the part that actually mattered ,  the work itself, redesigned around what the tools could do and where they couldn\u2019t be trusted yet.',
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
      { num: '0',              cap: 'Days off-site ,  the program runs inside the workweek.' },
    ],
    lede: 'Bank Leumi\u2019s leadership program had been the same shape for fifteen years: an annual offsite, a binder, a buddy. The shape was the problem. We rebuilt it as a coaching engine that runs inside the work, not next to it.',
    body: [
      { type: 'kicker', text: 'The Challenge' },
      { type: 'h2',     text: 'A leadership program managers tolerated, not used.' },
      { type: 'p', text: 'Fifteen years of the same offsite had produced fifteen years of the same survey results: well-rated in the moment, near-invisible in the work three months later. The instinct was a content refresh. The actual problem was structural.' },
      { type: 'kicker', text: 'The Approach' },
      { type: 'h2',     text: 'A coaching engine, not a curriculum.' },
      { type: 'p', text: 'We rebuilt the program around the conversations leaders were already having ,  with their team, their peers, their own manager ,  and put coaching scaffolding inside those conversations. The content became light. The structure around it did the work.' },
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
      text: 'It stopped being a program and started being how we manage. The change wasn\u2019t louder ,  it was structural.',
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
      { type: 'p', text: 'We replaced one quarterly module with 52 short, scenario-based moments ,  each one drawn from a real (anonymised) incident from one of the 22 plants. Operators saw their own work, their own equipment, their own near-misses.' },
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

/* Inline image carousel, used by `gallery` body blocks. Keeps its own
   active-index state so each instance is independent. Includes prev/next
   buttons, dot indicators, keyboard arrows, and a thumbnail strip. */
function CSGallery({ items, autoPlayMs }) {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const total = items.length;
  React.useEffect(() => {
    if (!autoPlayMs || paused || total < 2) return;
    const id = setInterval(() => setActive(a => (a + 1) % total), autoPlayMs);
    return () => clearInterval(id);
  }, [autoPlayMs, paused, total]);
  if (!total) return null;
  const go = (i) => setActive((i + total) % total);
  const onKey = (e) => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); go(active - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); }
  };
  const cur = items[active];
  return (
    <figure className="cs__gallery" tabIndex={0} onKeyDown={onKey} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} aria-label="Program screenshots carousel">
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

/* Pick related, prefer other case studies, then articles */
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

      {/* ─── CLIENT LOGO BAND ─── */}
      {content.clientLogo && content.showClientLogoBand && (
        <div className="cs__client-logo-band">
          <img src={content.clientLogo} alt={content.clientName || ''} style={content.clientLogoSize ? { width: content.clientLogoSize } : undefined} />
        </div>
      )}

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
            if (block.type === 'header-pair') return (
              <div key={i} className="cs__header-pair">
                <img className="cs__header-pair-logo" src={block.logoSrc} alt={block.logoAlt || ''} />
                <img className="cs__header-pair-banner" src={block.bannerSrc} alt={block.bannerAlt || ''} />
              </div>
            );
            if (block.type === 'logo') return (
              <div key={i} className="cs__client-logo">
                <img src={block.src} alt={block.alt || ''} />
              </div>
            );
            if (block.type === 'badge') return (
              <div key={i} className="cs__program-badge">
                <img src={block.src} alt={block.alt || ''} />
              </div>
            );
            if (block.type === 'kicker') return <div key={i} className="cs__sec-kicker">{block.text}</div>;
            if (block.type === 'h2')     return <h2 key={i} className="cs__h2">{block.text}</h2>;
            if (block.type === 'h3')     return <h3 key={i} className="cs__h3">{block.text}</h3>;
            if (block.type === 'p')      return <p key={i} className="cs__p">{block.text}</p>;
            if (block.type === 'figure') return (
              <figure key={i} className={`cs__figure${block.strip ? ' cs__figure--strip' : ''}${block.wide ? ' cs__figure--wide' : ''}`} style={block.style}>
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
            if (block.type === 'video') return (
              <figure key={i} className="cs__figure" style={block.style}>
                <div className="cs__figure-img" style={{aspectRatio: block.aspect || '16/9'}}>
                  <video src={block.src} autoPlay loop muted playsInline preload="metadata" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
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
              <CSGallery key={i} items={block.items} autoPlayMs={block.autoPlayMs} />
            );
            if (block.type === 'metadata-strip') return (
              <dl key={i} className="cs__meta-strip">
                {block.items.map((it, j) => (
                  <div key={j} className="cs__meta-row">
                    <dt className="cs__meta-label">{it.label}</dt>
                    <dd className="cs__meta-value">{it.value}</dd>
                  </div>
                ))}
              </dl>
            );
            if (block.type === 'stat-callout') return (
              <section key={i} className="cs__stat-callout">
                <div className="cs__stat-headline">
                  {block.headline.eyebrow ? <div className="cs__stat-eyebrow">{block.headline.eyebrow}</div> : null}
                  <div className="cs__stat-headline-num">{block.headline.num}</div>
                  {block.headline.cap ? <p className="cs__stat-headline-cap">{block.headline.cap}</p> : null}
                </div>
                {block.supporting && block.supporting.length ? (
                  <div className="cs__stat-supporting">
                    {block.supportingEyebrow ? <div className="cs__stat-eyebrow cs__stat-eyebrow--alt">{block.supportingEyebrow}</div> : null}
                    <div className="cs__stat-supporting-grid">
                      {block.supporting.map((it, j) => (
                        <div key={j} className="cs__stat-card">
                          <div className="cs__stat-card-num">{it.num}</div>
                          <div className="cs__stat-card-cap">{it.cap}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </section>
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
