// Custom eLearning service entry — provides data, mounts ServicePage.
const strategyService = {
  eyebrow: 'Strategy',
  banner: 'assets/strategy/header-banner.jpg',
  bannerTitle: 'Learning Strategy',
  bannerTitleColor: '#0D0959',
  title: 'Learning Strategy Built for Real Behavior Change',
  intro: [
    "Most learning strategies fail long before a single module is built.",
    "Not because the content is wrong. Because the strategy was designed around delivery instead of behavior. Around stakeholders instead of learners. Around completion metrics instead of measurable change.",
    "The modern learner has no patience for generic training architecture. They compare every learning experience, consciously or not, to the media, platforms, and content competing for their attention all day. If the experience feels disconnected from reality, they disengage immediately.",
    "Knowaa approaches learning strategy differently.",
    "We combine learning science, audience psychology, creative direction, and business alignment to design learning ecosystems people actually move through, and remember. Not static roadmaps built in isolation. Strategic frameworks grounded in how people pay attention, build habits, adopt change, and apply knowledge in the flow of work.",
    "That might mean redefining a curriculum around business-critical behaviors instead of content categories. Rebuilding an enablement journey around moments of need. Identifying where AI, campaigns, video, scenario-based learning, or performance support actually drive adoption,  and where they become noise.",
    "Our role is not to produce more training. It is to help organizations create learning experiences that earn attention, support transformation, and drive measurable performance outcomes.",
    "Because behavior change starts long before production begins."
  ],
  contentComponent: () => <StrategyContent />,
  showRecognition: true,
  intervalMs: 9000,
  cta: {
    heading: 'Better learning. Sharper people. Visible results.',
    ctaLabel: 'Book a Demo',
    ctaHref: 'Knowaa Contact.html',
  },
  samples: [],
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ServicePage service={strategyService} />
);
