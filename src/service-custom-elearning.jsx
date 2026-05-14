// Custom eLearning service entry — provides data, mounts ServicePage.
const customElearningService = {
  eyebrow: 'Custom eLearning',
  banner: 'images/elearning-header.jpg',
  bannerTitle: 'Custom eLearning',
  title: 'Training They Remember. Results You Can Measure.',
  intro: "Custom learning that crosses the attention threshold is not a creative indulgence. It is a business decision. When your people engage with training instead of enduring it, completion rates climb, time to competency shrinks, and the capability your organization paid to build actually shows up on the job. Knowaa's custom learning experiences are designed from the first frame to produce that outcome, not content your learners tolerate, but content that earns its place in their working day and delivers skills you can see.",
  contentComponent: () => <ElearningContent />,
  showRecognition: true,
  intervalMs: 9000,
  cta: {
    heading: 'Better learning. Sharper people. Visible results.',
    ctaLabel: 'Book a Demo',
    ctaHref: '#contact',
  },
  samples: [
    {
      label: 'AI-powered learning',
      caption: 'Adaptive content that reshapes itself around each learner — pace, depth, and examples tuned to what they already know and how they actually work.',
      video: 'assets/elearning/sample-ai.mp4',
      accent: 'linear-gradient(135deg, #4A0FB8 0%, #3E33BB 100%)',
    },
    {
      label: 'Gamification',
      caption: 'Progression, stakes, and narrative — designed so the game mechanic teaches the behavior, not just rewards completion.',
      video: 'assets/elearning/sample-gamification.mp4',
      accent: 'linear-gradient(135deg, #F37137 0%, #ED1F80 100%)',
    },
    {
      label: 'Interactive learning',
      caption: 'Hands-on simulations and branching decisions where learners practice the real workflow inside a safe sandbox before they ever touch production.',
      video: 'assets/elearning/sample-interactive.mp4',
      accent: 'linear-gradient(135deg, #0D0959 0%, #503594 100%)',
    },
  ],
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ServicePage service={customElearningService} />
);
