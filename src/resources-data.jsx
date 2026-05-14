// Shared content for Resources pages.
// In production, all of this comes from Sanity via a GraphQL/GROQ query.
// Images are placeholder Unsplash URLs — swap for real client/editorial photos at integration.

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
    title: 'ZIM \u2014 breaking a 14-month Copilot plateau in a single program cycle.',
    dek: 'How Dare to AI converted a stalled Microsoft 365 Copilot rollout into measurable workforce capability \u2014 and $822,740 of attested productivity in four weeks.',
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
    title: 'Signature Aviation \u2014 an ergonomics module like you haven\u2019t seen before.',
    dek: 'Replacing a generic compliance module with an experiential, brand-aligned training built in a month and shipped in four languages.',
    client: 'Signature Aviation',
    outcomeHeadline: '4 languages, 1 month',
    outcomeSub: 'shipped end-to-end with custom animation',
    readTime: 'Case study',
    publishedAt: '2025-11-20',
    featured: true,
    image: 'assets/case-studies/signature/portal-cover.png',
  },
            ];

const CATEGORIES = ['All', 'AI & Strategy', 'Learning Science', 'Design', 'Measurement', 'Pharma', 'SaaS', 'Cybersecurity', 'Telecom'];
const TYPES = [
  { key: 'all', label: 'All', plural: 'All' },
  { key: 'article', label: 'Article', plural: 'Articles' },
  { key: 'case', label: 'Case', plural: 'Case studies' },
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
