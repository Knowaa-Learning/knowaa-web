// Custom eLearning service entry — provides data, mounts ServicePage.
const campaignsService = {
  eyebrow: 'Campaigns',
  banner: 'images/campaigns-header.jpg',
  bannerTitle: 'Campaigns',
  title: 'Campaigns. Engineered to Change Behavior.',
  intro: [
    "In modern organizations, learning competes against Slack notifications, meetings, inbox overload, shifting priorities, and an attention span trained by consumer media. A launch email and an LMS notification are not a campaign. They are background noise.",
    "That is why Knowaa approaches learning campaigns as a creative discipline, not an administrative layer added at the end of production.",
    "We build learning campaigns designed to create momentum around change. Narrative systems that connect strategy, communications, visual identity, video, internal branding, leadership messaging, and reinforcement into one coherent experience people actually engage with.",
    "The best learning campaigns do more than announce training. They create anticipation. Curiosity. Conversation. They make employees feel that something important is happening and that they should be part of it.",
    "Our work draws as much from brand campaigns and audience psychology as it does from instructional design. Every touchpoint is intentional. The teaser video. The campaign identity. The launch sequence. The internal social assets. The moments of reinforcement after the learning itself ends.",
    "Because behavior change rarely happens in a single module. It happens through repeated exposure, emotional relevance, social visibility, and sustained attention over time."
  ],
  contentComponent: () => <CampaignsContent />,
  showRecognition: true,
  intervalMs: 9000,
  cta: {
    heading: 'Better learning. Sharper people. Visible results.',
    ctaLabel: 'Book a Demo',
    ctaHref: 'Knowaa Contact.html',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ServicePage service={campaignsService} />
);
