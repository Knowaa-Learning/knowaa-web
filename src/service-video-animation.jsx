// Custom eLearning service entry, provides data, mounts ServicePage.
const videoAnimationService = {
  eyebrow: 'Video & Animation',
  banner: 'images/animation-header.jpg',
  bannerTitle: 'Video & Animation',
  title: 'Learning Worth Watching',
  intro: [
    "Some learning stays with you. A scene you did not expect. A moment where the visual and the idea arrived at exactly the same time. You understood something differently after watching it than you did before.",
    "That is not an accident of production. It is a decision made at the brief.",
    "Knowaa's animation and video studio builds learning experiences where motion and instructional design share the same creative direction from the first frame. Not motion added to a finished script. Not illustration placed onto a slide deck that outgrew its format. A single team working from a single brief, where what the learner sees and what the learner learns are part of the same decision.",
    "The work is built for the attention threshold, the moment a learner decides within the first eight seconds whether what is in front of them is worth their time. Generic production does not cross it. Content created by people who care about craft does.",
    "Every brief we take begins with a question about the learner, not the content. What does this person already know? What do they need to feel before they can act? What does the moment of need actually look like for them? The answers shape everything: pacing, visual language, narrative structure, even where silence communicates more than voiceover.",
    "The result is learning that earns attention before it asks for behavior change. Video and animation conceived at the right scale for the idea, not at the scale of the template library."
  ],
  // Insert the video showcase between paragraph 2 ("decision made at the brief")
  // and paragraph 3 ("Knowaa's animation and video studio builds...").
  samplesAfter: 2,
  contentComponent: () => <VideoAnimationContent />,
  showRecognition: true,
  intervalMs: 9000,
  cta: {
    heading: 'Better learning. Sharper people. Visible results.',
    ctaLabel: 'Book a Demo',
    ctaHref: 'Knowaa Contact.html',
  },
  samples: [
    {
      label: 'Learning campaign',
      caption: 'A learning campaign produced with the craft and pacing of a creative-agency commercial, brand-built, character-led, and made for repeat viewing.',
      video: 'assets/video-animation/kornit-campaign.mp4',
      accent: 'linear-gradient(135deg, #ED1F80 0%, #4A0FB8 100%)',
    },
    {
      label: 'Motion graphics',
      caption: 'Bold, clean motion design that turns abstract ideas into something a viewer can follow, remember, and act on.',
      video: 'assets/video-animation/growth-mindset.mp4',
      accent: 'linear-gradient(135deg, #4A0FB8 0%, #3E33BB 100%)',
    },
    {
      label: '3D animation',
      caption: 'Photoreal environments and scientific visualizations that show what cameras can\u2019t, inside machines, processes, and molecules.',
      video: 'assets/video-animation/factory.mp4',
      accent: 'linear-gradient(135deg, #F37137 0%, #ED1F80 100%)',
    },
    {
      label: 'Scientific visualisation',
      caption: 'Precise, on-message animation of laboratory and analytical workflows, built so the science reads at a glance.',
      video: 'assets/video-animation/hplc.mp4',
      accent: 'linear-gradient(135deg, #0D0959 0%, #503594 100%)',
    },
    {
      label: 'Character animation',
      caption: 'Stylized characters with clear staging and timing, used to land culture, behavior, and brand stories with warmth.',
      video: 'assets/video-animation/signature.mp4',
      accent: 'linear-gradient(135deg, #4A0FB8 0%, #ED1F80 100%)',
    },
    {
      label: 'Compliance &amp; awareness',
      caption: 'Short-form animation that makes mandatory topics, privacy, security, ethics, actually watchable and retainable.',
      video: 'assets/video-animation/teva-privacy.mp4',
      accent: 'linear-gradient(135deg, #3E33BB 0%, #F37137 100%)',
    },
  ],
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ServicePage service={videoAnimationService} />
);
