// Shared content for Resources pages.
// In production, all of this comes from Sanity via a GraphQL/GROQ query.
// Images are placeholder Unsplash URLs, swap for real client/editorial photos at integration.

const RESOURCES = [
  {
    id: 'attention-threshold',
    type: 'article',
    category: 'Learning Science',
    title: 'The Attention Threshold: Why Learning Fails Before It Begins',
    dek: 'Most learning programs lose the learner within the first few minutes. The issue is simpler and more structural than content quality.',
    author: 'Karen Uriah',
    role: 'Head of Learning Design',
    readTime: '10 min read',
    publishedAt: '2025-11-05',
    featured: true,
    image: 'assets/insights/modern-learner.jpg',
  },
{
    id: 'generic-training-production-ai-strategy',
    type: 'article',
    category: 'AI & Strategy',
    title: 'Generic Training Was a Production Problem. AI Solved It. Now It Is a Strategy Problem.',
    dek: 'For twenty years, the honest answer to \u201Cwhy is our training so abstract?\u201D was a production constraint. That constraint is gone. The question has changed.',
    author: 'Noam Herz',
    role: 'Founder & Creative Director',
    readTime: '12 min read',
    publishedAt: '2025-11-14',
    featured: true,
    image: 'assets/articles/cover-generic-training.jpg',
  },
{
    id: 'zim-dare-to-ai',
    type: 'case',
    category: 'AI Adoption',
    title: 'A global workforce unlearned its AI habits. Then rebuilt them from scratch.',
    dek: 'Enterprise AI training teaches the tool. ZIM bet on the capability, and watched it spread beyond any single platform.',
    client: 'ZIM Integrated Shipping Services',
    outcomeHeadline: '$822,740 in 4 weeks',
    outcomeSub: 'Microsoft-attested productivity value',
    readTime: 'Case study',
    publishedAt: '2025-12-04',
    featured: true,
    image: 'assets/case-studies/zim/portal-cover.png',
  },
{
    id: 'signature-aviation-ergonomics',
    type: 'case',
    category: 'Aviation',
    title: 'Ergonomics Training That Employees Actually Finished, and Remembered',
    dek: 'Compliance modules get clicked through and forgotten. The injury risk they were meant to prevent doesn\u2019t go away, it just stops being tracked.',
    client: 'Signature Aviation',
    outcomeHeadline: '4 languages, 1 month',
    outcomeSub: 'shipped end-to-end with custom animation',
    readTime: 'Case study',
    publishedAt: '2025-11-20',
    featured: true,
    image: 'assets/case-studies/signature/portal-cover.png',
  },
{
    id: 'netafim-kaizen-prework',
    type: 'case',
    category: 'Manufacturing',
    title: 'Before the Event Starts, the Work Is Already Lost',
    dek: 'A documentary-style video and interactive module that prepared Netafim employees to participate in kaizen events, so the events could start working from minute one.',
    client: 'Netafim',
    outcomeHeadline: 'Day 1, not Day 2',
    outcomeSub: 'pre-event prep built from real kaizen footage',
    readTime: 'Case study',
    publishedAt: '2023-09-12',
    featured: false,
    image: 'assets/case-studies/netafim/cover.jpg',
  },
{
    id: 'teva-privacy-episodes',
    type: 'case',
    category: 'Pharma',
    title: 'Eight Episodes. One Habit. How Teva Made Data Privacy Stick.',
    dek: 'Pharma employees aren\u2019t ignoring compliance training because they don\u2019t care. They\u2019re ignoring it because nobody made it worth watching.',
    client: 'Teva',
    outcomeHeadline: '8 episodes, 60s each',
    outcomeSub: 'animated microlearning + WhatsApp stickers + posters',
    readTime: 'Case study',
    publishedAt: '2024-06-04',
    featured: false,
    image: 'assets/case-studies/teva-privacy/cover.jpg',
  },
{
    id: 'kornit-digital-onboarding',
    type: 'case',
    category: 'Manufacturing',
    title: 'The Shirt That Taught the Company',
    dek: 'A cinematic onboarding program for Kornit Digital, starring a printed shirt as the learning agent, that turned scattered Zoom recordings and folders into a coherent, high-craft new-hire experience.',
    client: 'Kornit Digital',
    outcomeHeadline: '4 assets, one onboarding arc',
    outcomeSub: 'cinematic flagship + buddy + platform intro + interactive modules',
    readTime: 'Case study',
    publishedAt: '2024-03-18',
    featured: false,
    image: 'assets/case-studies/kornit/cover.jpg',
  },
            ];

const CATEGORIES = ['All', 'AI & Strategy', 'Learning Science', 'Design', 'Measurement', 'Pharma', 'SaaS', 'Cybersecurity', 'Telecom'];
const TYPES = [
  { key: 'all', label: 'All', plural: 'All' },
  { key: 'article', label: 'Article', plural: 'Articles' },
  { key: 'case', label: 'Case study', plural: 'Case studies' },
];

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

Object.assign(window, { RESOURCES, CATEGORIES, TYPES, formatDate });


// Dedicated page filename per resource id. Anything not listed falls back to the
// generic dispatcher (Knowaa Article.html or Knowaa Case Study.html with ?id=).
const RESOURCE_PAGES = {
  'attention-threshold': 'Knowaa Article - Attention Threshold.html',
  'generic-training-production-ai-strategy': 'Knowaa Article - Generic Training.html',
  'zim-dare-to-ai': 'Knowaa Case Study - ZIM.html',
  'signature-aviation-ergonomics': 'Knowaa Case Study - Signature Aviation.html',
  'netafim-kaizen-prework': 'Knowaa Case Study - Netafim.html',
  'teva-privacy-episodes': 'Knowaa Case Study - Teva.html',
  'kornit-digital-onboarding': 'Knowaa Case Study - Kornit.html',
};
window.RESOURCE_PAGES = RESOURCE_PAGES;
function resourceHref(r) {
  if (!r) return '#';
  const dedicated = RESOURCE_PAGES[r.id];
  if (dedicated) return dedicated;
  const base = r.type === 'case' ? 'Knowaa Case Study.html' : 'Knowaa Article.html';
  return base + '?id=' + r.id;
}
window.resourceHref = resourceHref;
