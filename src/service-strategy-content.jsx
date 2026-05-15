// Custom eLearning, minimal content sections.
// Just the source text, simple typography, lots of breathing room.
// One subtle orange rule per section. Nothing else.

const { useEffect: useEffectCE, useRef: useRefCE, useState: useStateCE } = React;

function useReveal() {
  const ref = useRefCE(null);
  useEffectCE(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('is-in'); io.unobserve(el); } });
    }, { threshold: 0.18 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function StrategyContent() {
  const r1 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();
  const r5 = useReveal();
  const rJourney = useReveal();
  const rPyramid = useReveal();
  const [activeTab, setActiveTab] = useStateCE('instructional');

  return (
    <div className="ce">
      {/* 5, Custom */}
      <section className="ce__sec" ref={r5}>
        <div className="ce__inner ce__inner--wide">
          <div className="ce__split">
            <div className="ce__split-media">
              <img src="assets/strategy/strategy-meeting.png" alt="A team in a strategy session at a whiteboard" className="ce__split-img" />
            </div>
            <div className="ce__split-rule" aria-hidden></div>
            <div className="ce__split-text">
              <h3 className="ce__sub">The right question changes everything.</h3>
              <p className="ce__p">
                Every learning experience that earns attention, shifts behavior, and moves a business metric starts in the same place, a strategy built around the right question. Not what content do we need, but what does this organization need its people to be able to do, and what is the most direct path to getting them there. When the strategy is right, everything that follows has a purpose. When it is not, even the most beautifully crafted content solves the wrong problem. Learning that earns its seat at the table begins before a single module is built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5, Process: tabs flow (Instructional → Creative → Production → Impact) */}
      <section className="ce__sec ce__sec--journey" ref={rJourney}>
        <div className="ce__inner ce__inner--wide">
          <div className="ce__journey-head">
            <div className="ce__journey-eyebrow">How we work</div>
            <p className="ce__journey-lede">
              Where the brief is shared by instructional designers and creative directors.
            </p>
          </div>
          <div className="tabs-flow">
            <div className="tab-strip" role="tablist">
              {[
                {
                  id: 'instructional',
                  label: 'Instructional Design',
                  body: 'Spaced retrieval. Cognitive load management. Contextual transfer. These are not features we add after the fact, they are the architecture. Every sequence, every interaction, every moment of friction is placed deliberately, because the science tells us what sticks and what evaporates the moment the module closes.',
                  icon: (
                    <svg className="tab-icon" viewBox="262.90 162.93 288.90 260.86" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path transform="matrix(1,0,0,-1,374.0558,411.78553)" d="M0 0C-18.95 0-34.367 15.417-34.367 34.367V48.852C-34.367 50.26-33.226 51.402-31.817 51.402-30.408 51.402-29.267 50.26-29.267 48.852V34.367C-29.267 18.229-16.138 5.1 0 5.1 16.138 5.1 29.267 18.229 29.267 34.367V204.965C29.267 219.737 17.248 231.755 2.476 231.755-12.296 231.755-24.315 219.737-24.315 204.965V203.923C-24.315 202.514-25.456 201.373-26.865 201.373-28.273 201.373-29.415 202.514-29.415 203.923V204.965C-29.415 222.549-15.108 236.855 2.476 236.855 20.06 236.855 34.367 222.549 34.367 204.965V34.367C34.367 15.417 18.95 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,336.8434,378.1117)" d="M0 0C-20.822 0-37.761 15.399-37.761 34.326-37.761 53.254-20.822 68.652 0 68.652 1.409 68.652 2.55 67.51 2.55 66.102 2.55 64.693 1.409 63.552 0 63.552-18.009 63.552-32.661 50.441-32.661 34.326-32.661 18.211-18.009 5.1 0 5.1 1.674 5.1 3.356 5.215 4.998 5.44 6.384 5.64 7.68 4.658 7.872 3.262 8.064 1.867 7.089 .58 5.693 .389 3.822 .13 1.906 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,301.9926,341.77247)" d="M0 0C-.437 0-.881 .112-1.286 .349-17.203 9.67-27.092 28.087-27.092 48.415-27.092 78.219-5.733 102.466 20.521 102.466 21.635 102.466 22.76 102.422 23.863 102.334 25.267 102.223 26.314 100.996 26.203 99.591 26.092 98.188 24.872 97.124 23.46 97.251 22.49 97.328 21.501 97.366 20.521 97.366-2.921 97.366-21.992 75.407-21.992 48.415-21.992 29.891-13.07 13.159 1.291 4.75 2.506 4.039 2.914 2.477 2.203 1.262 1.728 .452 .876 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,311.722,245.901)" d="M0 0C-.673 0-1.345 .265-1.846 .791-5.91 5.055-8.058 10.062-8.058 15.269-8.058 29.509 8.302 41.094 28.413 41.094 36.969 41.094 45.277 38.975 51.804 35.126 53.018 34.411 53.421 32.847 52.706 31.634 51.991 30.421 50.43 30.016 49.214 30.733 43.46 34.125 36.072 35.994 28.413 35.994 11.115 35.994-2.958 26.697-2.958 15.269-2.958 11.397-1.298 7.608 1.846 4.309 2.817 3.29 2.779 1.676 1.759 .704 1.266 .233 .632 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,333.8386,279.89015)" d="M0 0C-3.138 0-6.179 .48-9.013 1.453-10.344 1.911-11.053 3.361-10.596 4.693-10.139 6.025-8.691 6.738-7.356 6.276-.797 4.024 7.238 5.024 14.686 9.019 23.216 13.595 29.57 21.165 31.683 29.269 32.039 30.632 33.431 31.445 34.794 31.093 36.157 30.737 36.974 29.344 36.619 27.982 34.153 18.529 26.855 9.76 17.097 4.525 11.521 1.534 5.608 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,374.0575,298.6317)" d="M0 0C-.21 0-.424 .027-.637 .081-7.644 1.885-13.84 7.932-16.807 15.864-19.539 23.168-18.995 30.422-15.316 35.766-14.518 36.924-12.93 37.22-11.77 36.421-10.61 35.622-10.317 34.034-11.116 32.874-13.797 28.979-14.139 23.288-12.029 17.65-9.637 11.254-4.785 6.415 .634 5.02 1.998 4.669 2.819 3.279 2.468 1.915 2.172 .765 1.136 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,374.0592,363.00758)" d="M0 0C-.099 0-.198 .006-.298 .017-1.698 .18-2.699 1.446-2.536 2.845-1.502 11.731-4.116 19.861-9.531 24.595-14.063 28.556-19.968 29.753-26.607 28.059-27.974 27.705-29.36 28.534-29.708 29.899-30.056 31.263-29.233 32.652-27.868 33.001-19.646 35.095-11.942 33.477-6.174 28.434 .505 22.596 3.759 12.809 2.529 2.255 2.378 .956 1.276 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,440.1267,406.14833)" d="M0 0H-16.25C-17.659 0-18.8 1.141-18.8 2.55-18.8 3.958-17.659 5.1-16.25 5.1H0C1.346 5.1 2.441 6.187 2.441 7.522L2.573 31.124C2.579 32.151 3.201 33.075 4.151 33.467L27.232 42.981C28.188 43.377 29.288 43.155 30.016 42.418L46.642 25.623C47.104 25.151 47.712 24.894 48.362 24.89 49.081 24.916 49.64 25.138 50.109 25.603L73.643 48.873C74.114 49.335 74.371 49.943 74.375 50.592 74.38 51.25 74.127 51.871 73.661 52.341L57.093 69.06C56.369 69.79 56.155 70.884 56.549 71.833L66.137 94.914C66.533 95.866 67.462 96.486 68.492 96.486H68.505L92.111 96.373H92.129C92.788 96.373 93.4 96.624 93.86 97.081 94.324 97.541 94.578 98.157 94.578 98.814V132.404C94.578 133.76 93.466 134.865 92.099 134.865L68.506 134.732H68.492C67.462 134.732 66.533 135.352 66.137 136.304L56.549 159.385C56.155 160.335 56.369 161.429 57.093 162.158L73.662 178.878C74.127 179.347 74.38 179.968 74.375 180.626 74.371 181.276 74.114 181.883 73.65 182.337L50.111 205.614C49.64 206.079 48.968 206.364 48.363 206.328 47.713 206.323 47.104 206.066 46.65 205.604L30.016 188.8C29.288 188.064 28.191 187.841 27.232 188.237L4.151 197.751C3.201 198.143 2.579 199.067 2.573 200.094L2.441 223.682C2.441 225.032 1.346 226.118 0 226.118H-16.25C-17.659 226.118-18.8 227.26-18.8 228.668-18.8 230.077-17.659 231.218-16.25 231.218H0C4.158 231.218 7.541 227.844 7.541 223.696L7.664 201.819 27.594 193.603 43.018 209.183C44.421 210.614 46.309 211.414 48.327 211.428H48.382C50.386 211.428 52.272 210.652 53.699 209.238L77.229 185.971C78.66 184.568 79.46 182.68 79.475 180.663 79.49 178.639 78.712 176.729 77.285 175.288L61.91 159.774 70.191 139.842 92.085 139.964C96.278 139.964 99.678 136.573 99.678 132.404V98.814C99.678 96.788 98.888 94.887 97.454 93.463 96.031 92.049 94.143 91.273 92.135 91.273H92.081L70.191 91.377 61.91 71.444 77.285 55.93C78.712 54.489 79.49 52.58 79.475 50.555 79.46 48.538 78.66 46.65 77.221 45.24L53.697 21.979C52.258 20.552 50.388 19.814 48.326 19.79 46.308 19.804 44.42 20.605 43.01 22.044L27.594 37.615 7.664 29.399 7.541 7.508C7.541 3.374 4.158 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,424.156,345.2572)" d="M0 0C-.098 0-.194 0-.293 .001-1.702 .008-2.837 1.156-2.83 2.564-2.822 3.968-1.682 5.101-.28 5.101-.203 5.09-.094 5.099-.001 5.1 13.224 5.1 25.673 10.219 35.082 19.533 44.553 28.908 49.802 41.409 49.863 54.73 49.802 68.027 44.553 80.528 35.082 89.903 25.61 99.278 13.095 104.455-.266 104.335H-.28C-1.682 104.335-2.822 105.468-2.83 106.872-2.837 108.28-1.701 109.427-.293 109.435 14.372 109.57 28.23 103.861 38.669 93.527 49.11 83.193 54.896 69.414 54.963 54.73 54.896 40.022 49.11 26.243 38.669 15.908 28.3 5.643 14.576 .001 0 0" fill="currentColor"/>
                    </svg>
                  ),
                },
                {
                  id: 'creative',
                  label: 'Creative Layer',
                  body: 'Visual rhythm, motion, sound, and story. The creative layer is what turns a structurally sound module into something people actually want to spend time with, and what carries the science across the threshold of attention into long-term memory.',
                  icon: (
                    <svg className="tab-icon" viewBox="222.32 476.35 351.53 324.53" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path transform="matrix(1,0,0,-1,449.7775,751.01467)" d="M0 0H-53.293C-55.183 0-56.714 1.532-56.714 3.421-56.714 5.309-55.183 6.841-53.293 6.841H0C1.89 6.841 3.421 5.309 3.421 3.421 3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,449.7775,769.9464)" d="M0 0H-53.293C-55.183 0-56.714 1.532-56.714 3.421-56.714 5.309-55.183 6.841-53.293 6.841H0C1.89 6.841 3.421 5.309 3.421 3.421 3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,436.1293,788.8803)" d="M0 0H-25.997C-27.886 0-29.417 1.532-29.417 3.421-29.417 5.309-27.886 6.841-25.997 6.841H0C1.89 6.841 3.421 5.309 3.421 3.421 3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,423.1926,551.1644)" d="M0 0C-1.924 0-3.857-.067-5.799-.2-46.414-3.004-78.605-35.806-80.679-76.497-82.413-110.526-62.485-142.18-31.09-155.266-29.816-155.798-28.985-157.043-28.985-158.424V-165.728C-28.985-170.331-25.241-174.075-20.639-174.075H20.514C25.116-174.075 28.861-170.331 28.861-165.728V-158.424C28.861-157.043 29.691-155.798 30.965-155.266 61.157-142.683 80.664-113.425 80.664-80.729 80.664-58.436 71.312-36.921 55.007-21.702 39.89-7.594 20.541 0 0 0M20.514-180.917H-20.639C-29.013-180.917-35.827-174.104-35.827-165.728V-160.671C-68.664-145.962-89.354-112.289-87.512-76.15-85.262-32.002-50.335 3.583-6.271 6.623 18.333 8.338 41.742 .038 59.675-16.7 77.361-33.209 87.505-56.546 87.505-80.729 87.505-115.429 67.248-146.558 35.702-160.673V-165.728C35.702-174.104 28.889-180.917 20.514-180.917" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,423.1304,691.0597)" d="M0 0C-.623 0-1.246 .169-1.796 .51L-22.043 13.001C-23.651 13.992-24.15 16.101-23.157 17.709-22.168 19.315-20.06 19.814-18.451 18.823L0 7.44 18.452 18.823C20.062 19.814 22.167 19.317 23.16 17.707 24.151 16.099 23.652 13.992 22.044 13.001L1.796 .51C1.246 .169 .622 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,423.2027,513.1897)" d="M0 0C-1.89 0-3.421 1.532-3.421 3.421V21.421C-3.421 23.31-1.89 24.842 0 24.842 1.89 24.842 3.421 23.31 3.421 21.421V3.421C3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,340.3218,547.5166)" d="M0 0C-.875 0-1.75 .334-2.418 1.002L-15.142 13.727C-16.479 15.063-16.479 17.228-15.142 18.564-13.806 19.9-11.642 19.9-10.305 18.564L2.418 5.839C3.755 4.503 3.755 2.338 2.418 1.002 1.75 .334 .875 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,558.4324,630.4209)" d="M0 0H-17.999C-19.888 0-21.419 1.532-21.419 3.421-21.419 5.309-19.888 6.841-17.999 6.841H0C1.89 6.841 3.421 5.309 3.421 3.421 3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,305.995,630.4209)" d="M0 0H-18C-19.889 0-21.42 1.532-21.42 3.421-21.42 5.309-19.889 6.841-18 6.841H0C1.89 6.841 3.421 5.309 3.421 3.421 3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,506.107,547.5166)" d="M0 0C-.875 0-1.75 .334-2.419 1.002-3.755 2.338-3.755 4.503-2.419 5.839L10.305 18.564C11.639 19.9 13.806 19.9 15.142 18.564 16.479 17.228 16.479 15.063 15.142 13.727L2.418 1.002C1.752 .334 .875 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,521.3207,765.34988)" d="M0 0C-1.89 0-3.421 1.532-3.421 3.421V22.865C-3.421 24.753-1.89 26.285 0 26.285 1.89 26.285 3.421 24.753 3.421 22.865V3.421C3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,521.3207,716.0176)" d="M0 0C-1.89 0-3.421 1.532-3.421 3.421V22.865C-3.421 24.753-1.89 26.285 0 26.285 1.89 26.285 3.421 24.753 3.421 22.865V3.421C3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,549.0435,730.974)" d="M0 0H-12.791C-14.68 0-16.211 1.532-16.211 3.421-16.211 5.309-14.68 6.841-12.791 6.841H0C1.89 6.841 3.421 5.309 3.421 3.421 3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,506.3631,730.974)" d="M0 0H-12.765C-14.655 0-16.186 1.532-16.186 3.421-16.186 5.309-14.655 6.841-12.765 6.841H0C1.89 6.841 3.421 5.309 3.421 3.421 3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,259.07,587.7095)" d="M0 0C-1.89 0-3.421 1.532-3.421 3.421V15.257C-3.421 17.146-1.89 18.678 0 18.678 1.89 18.678 3.421 17.146 3.421 15.257V3.421C3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,259.07,546.63027)" d="M0 0C-1.89 0-3.421 1.532-3.421 3.421V15.259C-3.421 17.148-1.89 18.68 0 18.68 1.89 18.68 3.421 17.148 3.421 15.259V3.421C3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,280.3968,561.25039)" d="M0 0H-6.704C-8.594 0-10.125 1.532-10.125 3.421-10.125 5.309-8.594 6.841-6.704 6.841H0C1.89 6.841 3.421 5.309 3.421 3.421 3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,244.4476,561.25039)" d="M0 0H-6.704C-8.594 0-10.125 1.532-10.125 3.421-10.125 5.309-8.594 6.841-6.704 6.841H0C1.89 6.841 3.421 5.309 3.421 3.421 3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,293.8245,762.95596)" d="M0 0C-1.89 0-3.421 1.532-3.421 3.421V27.797C-3.421 29.686-1.89 31.218 0 31.218 1.89 31.218 3.421 29.686 3.421 27.797V3.421C3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,293.8245,701.1078)" d="M0 0C-1.89 0-3.421 1.532-3.421 3.421V27.797C-3.421 29.686-1.89 31.218 0 31.218 1.89 31.218 3.421 29.686 3.421 27.797V3.421C3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,328.58,719.859)" d="M0 0H-16.035C-17.925 0-19.456 1.532-19.456 3.421-19.456 5.309-17.925 6.841-16.035 6.841H0C1.89 6.841 3.421 5.309 3.421 3.421 3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,275.0732,719.859)" d="M0 0H-16.003C-17.893 0-19.424 1.532-19.424 3.421-19.424 5.309-17.893 6.841-16.003 6.841H0C1.89 6.841 3.421 5.309 3.421 3.421 3.421 1.532 1.89 0 0 0" fill="currentColor"/>
                    </svg>
                  ),
                },
                {
                  id: 'production',
                  label: 'Production',
                  body: 'Studio-grade craft applied at programme scale. Voiceover, motion, illustration, code, and interaction, built by a team that has shipped award-winning learning across regulated industries, so the polish your learners feel was engineered, not improvised.',
                  icon: (
                    <svg className="tab-icon" viewBox="296.16 914.09 314.07 317.80" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path transform="matrix(1,0,0,-1,431.4622,932.0745)" d="M0 0C-23.273 0-47.444-6.888-68.346-23.994-136.541-79.809-119.475-162.441-101.196-185.916-101.163-185.959-101.131-186.004-101.1-186.047-100.915-186.314-82.339-212.838-62.865-224.809-48.624-233.562-36.014-235.971-26.396-231.775-16.564-227.482-9.596-216.309-6.243-199.463-1.515-175.711 2.583-172.666 14.823-166.629 19.616-164.264 25.918-164.094 33.215-163.898 50.15-163.443 71.227-162.877 89.291-136.526 102.076-117.877 106.615-95.243 102.07-72.795 97.512-50.271 84.467-31.108 65.342-18.84 47.748-7.555 24.367 0 0 0M-36.466-239.781C-45.355-239.781-55.356-236.469-66.008-229.922-86.256-217.475-104.688-191.391-105.98-189.539-125.264-164.664-143.464-77.721-72.146-19.352-27.041 17.563 32.42 9.408 68.58-13.789 89.084-26.942 103.066-47.475 107.951-71.604 112.82-95.657 107.951-119.919 94.24-139.919 74.445-168.791 50.709-169.43 33.377-169.896 26.783-170.074 21.091-170.227 17.478-172.01 6.869-177.242 4.018-178.648-.358-200.635-4.111-219.492-12.285-232.16-23.996-237.273-27.834-238.949-32.011-239.781-36.466-239.781" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,355.8763,1019.722)" d="M0 0C-3.27 0-6.344-1.273-8.656-3.586-13.429-8.359-13.429-16.125-8.656-20.898-6.344-23.211-3.27-24.484 0-24.484 3.271-24.484 6.345-23.211 8.657-20.898 10.969-18.586 12.242-15.512 12.242-12.242 12.242-8.973 10.969-5.898 8.657-3.586 6.345-1.273 3.271 0 0 0M0-30.484C-4.872-30.484-9.453-28.587-12.898-25.141-20.011-18.028-20.011-6.456-12.898 .656-9.453 4.103-4.872 6 0 6 4.873 6 9.454 4.103 12.899 .656 20.012-6.456 20.012-18.028 12.899-25.141 9.454-28.587 4.873-30.484 0-30.484" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,390.3714,969.2112)" d="M0 0C-4.162 0-8.324-1.584-11.493-4.752-17.83-11.089-17.83-21.4-11.493-27.738-5.157-34.074 5.155-34.076 11.493-27.738 17.83-21.4 17.83-11.089 11.493-4.752 8.324-1.584 4.162 0 0 0M0-38.487C-5.699-38.487-11.397-36.318-15.735-31.98-24.412-23.304-24.412-9.186-15.735-.51-7.061 8.165 7.057 8.167 15.735-.51 24.412-9.186 24.412-23.304 15.735-31.98 11.397-36.318 5.698-38.487 0-38.487" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,447.2415,959.4612)" d="M0 0C-3.136 0-6.27-1.192-8.657-3.579-10.969-5.892-12.242-8.966-12.242-12.236-12.242-15.506-10.969-18.58-8.657-20.893-3.884-25.664 3.883-25.664 8.656-20.893 10.969-18.58 12.242-15.506 12.242-12.236 12.242-8.966 10.969-5.892 8.656-3.579 6.27-1.193 3.135 0 0 0M0-30.469C-4.672-30.469-9.343-28.691-12.899-25.135-20.013-18.022-20.013-6.449-12.899 .663-5.787 7.775 5.785 7.775 12.899 .663 16.344-2.782 18.242-7.363 18.242-12.236 18.242-17.108 16.344-21.689 12.899-25.135 9.342-28.691 4.671-30.469 0-30.469" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,488.554,988.2942)" d="M0 0C-4.428 0-8.855-1.686-12.227-5.056-18.967-11.798-18.969-22.768-12.227-29.51-8.961-32.775-4.619-34.574 0-34.574 4.619-34.574 8.961-32.775 12.229-29.51 18.971-22.768 18.969-11.798 12.229-5.056 8.858-1.686 4.428 0 0 0M0-40.574C-6.221-40.574-12.07-38.151-16.469-33.752-25.549-24.672-25.549-9.895-16.469-.813-7.391 8.267 7.389 8.268 16.471-.812V-.813C25.551-9.895 25.551-24.672 16.471-33.752 12.07-38.151 6.221-40.574 0-40.574" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,478.8918,1046.1096)" d="M0 0C-3.27 0-6.344-1.273-8.656-3.585-10.969-5.897-12.242-8.972-12.242-12.241-12.242-15.512-10.969-18.586-8.656-20.898-3.881-25.671 3.885-25.672 8.656-20.897 10.969-18.586 12.242-15.512 12.242-12.241 12.242-8.972 10.969-5.897 8.656-3.585 6.344-1.273 3.27 0 0 0M0-30.475C-4.672-30.475-9.342-28.697-12.898-25.141-16.344-21.695-18.242-17.114-18.242-12.241-18.242-7.369-16.344-2.788-12.898 .657-9.453 4.103-4.873 6 0 6 4.871 6 9.453 4.103 12.898 .657 16.344-2.788 18.242-7.369 18.242-12.241 18.242-17.114 16.344-21.695 12.898-25.141 9.342-28.696 4.67-30.475 0-30.475" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,407.5257,1198.9827)" d="M0 0C9.872-7.891 23.987-16.713 35.88-14.596 52.108-11.701 52.64 7.816 52.302 14.768 38.761 15.725 28.06 13.211 24.69 8.17 21.825 3.885 17.256 1.049 11.477-.033 7.858-.711 3.938-.674 0 0M32.251-20.906C9.539-20.906-15.56 5.885-16.687 7.102-17.73 8.227-17.756 9.957-16.748 11.113-15.74 12.27-14.022 12.479-12.766 11.598-5.882 6.773 3.199 4.523 10.373 5.863 13.271 6.406 17.242 7.826 19.702 11.506 26.816 22.146 47.034 21.357 55.392 20.523 56.79 20.385 57.903 19.295 58.073 17.9 59.495 6.174 56.907-16.941 36.933-20.502 35.391-20.777 33.825-20.906 32.251-20.906" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,484.7923,1145.8557)" d="M0 0-18.148-23.248C-18.398-23.568-18.373-24.031-18.086-24.322L-11.109-31.406H-11.107C-10.822-31.699-10.354-31.732-10.031-31.479L13.385-13.387ZM-10.527-37.648C-12.299-37.648-14.061-36.961-15.385-35.617L-22.361-28.531C-24.754-26.102-24.975-22.244-22.879-19.557L-2.643 6.365C-2.113 7.043-1.318 7.461-.461 7.514 .389 7.562 1.236 7.248 1.844 6.641L20.037-11.555C20.646-12.164 20.965-13.006 20.91-13.867 20.855-14.727 20.432-15.523 19.75-16.049L-6.363-36.227C-7.596-37.18-9.064-37.648-10.527-37.648" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,501.5579,1161.381)" d="M0 0C-.752 0-1.502 .279-2.084 .842-3.275 1.994-3.309 3.893-2.158 5.084L89.887 100.339C90.934 101.417 90.938 103.102 89.9 104.18 88.785 105.339 87.098 105.401 85.986 104.401L-13.5 16.244C-14.744 15.144-16.639 15.264-17.736 16.5-18.834 17.74-18.721 19.637-17.48 20.736L81.99 108.878C85.512 112.039 90.859 111.843 94.146 108.42 97.516 104.919 97.504 99.571 94.197 96.165L2.158 .916C1.568 .307 .785 0 0 0" fill="currentColor"/>
                      <path transform="matrix(1,0,0,-1,365.1234,1073.7239)" d="M0 0C-2.121 0-3.948-.459-5.47-1.384-8.842-3.433-11.207-6.952-12.311-11.561-14.304-19.874-12.038-30.419-6.25-39.765 3.128-54.913 21.915-59.532 31.82-53.399 36.557-50.468 39.877-43.772 40.277-36.347 40.723-28.079 37.477-20.607 31.37-15.847 17.923-5.366 7.253 0 0 0M21.51-62.015C9.913-62.017-3.435-55.712-11.352-42.925-17.963-32.245-20.503-19.999-18.146-10.163-16.661-3.964-13.355 .846-8.585 3.744 .709 9.393 14.985 4.531 35.058-11.116 42.735-17.099 46.821-26.413 46.268-36.669 45.766-45.997 41.334-58.501 34.979-58.501 31.202-60.839 26.518-62.015 21.51-62.015" fill="currentColor"/>
                    </svg>
                  ),
                },
                {
                  id: 'impact',
                  label: 'Impact',
                  body: 'Behaviour change, not completion rates. We instrument every programme to measure the things that actually matter to your business, and feed the data back into the next iteration so the work keeps getting sharper.',
                  icon: (
                    <svg className="tab-icon" viewBox="336.08 1303.42 246.81 229.78" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path transform="matrix(1,0,0,-1,549.1906,1521.1948)" d="M0 0C-1.365 0-2.473 1.108-2.473 2.473V156.321C-2.473 157.687-1.365 158.794 0 158.794H13.673L-23.092 199.646-59.855 158.794H-46.184C-44.818 158.794-43.711 157.687-43.711 156.321V2.473C-43.711 1.108-44.818 0-46.184 0H-76.231C-77.597 0-78.704 1.108-78.704 2.473V114.618C-90.886 100.837-104.73 89.312-119.947 80.292V2.473C-119.947 1.108-121.055 0-122.42 0H-152.467C-153.833 0-154.941 1.108-154.941 2.473V64.88C-168.327 60.839-182.169 58.683-196.167 58.454V2.473C-196.167 1.108-197.275 0-198.64 0-200.005 0-201.113 1.108-201.113 2.473V60.908C-201.113 62.273-200.005 63.381-198.64 63.381-183.186 63.381-167.91 65.809-153.235 70.599-152.484 70.845-151.658 70.717-151.015 70.25-150.374 69.785-149.994 69.041-149.994 68.248V4.946H-124.893V81.707C-124.893 82.588-124.424 83.403-123.663 83.845-106.606 93.757-91.29 106.898-78.142 122.903-77.477 123.709-76.383 124.016-75.397 123.661-74.413 123.31-73.758 122.377-73.758 121.333V4.946H-48.657V153.848H-65.408C-66.385 153.848-67.27 154.423-67.667 155.315-68.065 156.207-67.899 157.249-67.247 157.976L-24.931 204.997C-23.99 206.039-22.193 206.039-21.253 204.997L21.065 157.976C21.717 157.249 21.883 156.207 21.485 155.315 21.087 154.423 20.203 153.848 19.226 153.848H2.473V2.473C2.473 1.108 1.365 0 0 0" fill="currentColor"/>
                    </svg>
                  ),
                },
              ].reduce((acc, tab, idx, arr) => {
                acc.push(
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    className={'tab-btn' + (activeTab === tab.id ? ' is-active' : '')}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="tab-card">{tab.icon}</span>
                    <span className="tab-label">{tab.label}</span>
                    <span className="tab-underline" aria-hidden></span>
                  </button>
                );
                if (idx < arr.length - 1) {
                  acc.push(
                    <span className="flow-arrow" key={'arrow-' + idx} aria-hidden>
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ED1F80" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 5 L16 12 L9 19" />
                      </svg>
                    </span>
                  );
                }
                return acc;
              }, [])}
            </div>

            <div className="content-frame">
              {[
                { id: 'instructional', body: 'We architect learning from the business case backward, not the content brief forward. Grounded in cognitive science, we diagnose the specific friction blocking performance before building, ensuring every intervention maps directly to measurable organizational outcomes.' },
                { id: 'creative',      body: 'Attention is the gatekeeper of behavior change. We inject culture, sharp humor, and modern media trends into our learning design, replacing passive compliance with genuine entertainment. By earning engagement, we ensure strategic insights are processed and retained.' },
                { id: 'production',    body: 'Production quality is a multiplier of instructional strategy. Backed by elite animators, directors, and designers, we deliver cinematic, high-fidelity media that meets enterprise brand standards and commands the respect of time-pressured professionals.' },
                { id: 'impact',        body: 'Completion is a proxy metric; we optimize for performance records. We partner with you to shift from content delivery to system intervention by defining observable behaviors, tracking adoption, and proving long-term organizational impact.' },
              ].map((p) => (
                <div
                  key={p.id}
                  className={'content-panel' + (activeTab === p.id ? ' is-active' : '')}
                  role="tabpanel"
                  hidden={activeTab !== p.id}
                >
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .ce {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #ffffff;
        }
        .ce__sec {
          padding: clamp(10px, 1.2vw, 18px) clamp(24px, 5vw, 64px);
        }
        .ce__inner {
          max-width: 720px;
          margin: 0 auto;
        }
        .ce__h {
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.022em;
          color: #0D0959;
          margin: 0 0 32px;
          opacity: 0; transform: translateY(12px);
          transition: opacity 700ms ease 80ms, transform 700ms ease 80ms;
          position: relative;
          isolation: isolate;
        }
        .ce__sec.is-in .ce__h { opacity: 1; transform: none; }

        /* Brushstroke gradient underline behind highlighted phrase. */
        .ce-stroke {
          position: relative;
          display: inline-block;
          font-weight: 900;
          color: #0D0959;
          white-space: nowrap;
        }
        .ce-stroke::after {
          content: "";
          position: absolute;
          left: -0.04em;
          right: -0.04em;
          bottom: 0.04em;
          height: 0.32em;
          background: linear-gradient(90deg,
            rgba(237,31,128,0.0) 0%,
            rgba(255,160,205,0.95) 6%,
            #FF66A8 22%,
            #ED1F80 55%,
            #ED1F80 90%,
            rgba(237,31,128,0.0) 100%);
          border-radius: 999px;
          z-index: -1;
          transform-origin: left center;
          transform: scaleX(0);
          transition: transform 900ms cubic-bezier(.2,.7,.2,1) 380ms;
          filter: blur(0.5px);
        }
        .ce__sec.is-in .ce-stroke::after { transform: scaleX(1); }

        .ce__sub {
          font-size: clamp(22px, 2vw, 28px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.015em;
          color: #0D0959;
          margin: 0 0 24px;
          opacity: 0; transform: translateY(12px);
          transition: opacity 700ms ease 80ms, transform 700ms ease 80ms;
        }
        .ce__sec.is-in .ce__sub { opacity: 1; transform: none; }

        .ce__lede {
          font-size: clamp(18px, 1.4vw, 22px);
          font-weight: 500;
          line-height: 1.5;
          color: #0D0959;
          margin: 0 0 28px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 700ms ease 200ms, transform 700ms ease 200ms;
        }
        .ce__sec.is-in .ce__lede { opacity: 1; transform: none; }

        .ce__p {
          font-size: clamp(16px, 1.15vw, 18px);
          line-height: 1.7;
          color: #444;
          margin: 0 0 22px;
          opacity: 0; transform: translateY(10px);
          transition: opacity 700ms ease 320ms, transform 700ms ease 320ms;
        }
        .ce__sec.is-in .ce__p { opacity: 1; transform: none; }
        .ce__p:last-child { margin-bottom: 0; }
        .ce__p--muted {
          color: #888;
          font-size: clamp(15px, 1.05vw, 17px);
          margin-bottom: 12px;
        }

        .ce__sub--close {
          font-size: clamp(26px, 2.6vw, 36px);
          line-height: 1.25;
          margin: 0 auto;
          max-width: 26ch;
          text-align: center;
          text-wrap: balance;
          letter-spacing: -0.01em;
        }

        .ce__sec--close .ce__inner { max-width: 920px; }

        .ce__sec--close {
          padding-top: clamp(20px, 2.2vw, 32px);
          padding-bottom: clamp(40px, 5vw, 72px);
          margin-top: clamp(-16px, -1.5vw, -8px);
        }

        .ce__sec--grid {
          padding-top: clamp(36px, 4vw, 64px);
          padding-bottom: clamp(36px, 4vw, 64px);
          margin: clamp(20px, 2.4vw, 36px) 0;
          background:
            radial-gradient(ellipse at 90% 0%, rgba(237, 31, 128, 0.10) 0%, rgba(237, 31, 128, 0) 55%),
            radial-gradient(ellipse at 10% 100%, rgba(91, 75, 255, 0.14) 0%, rgba(91, 75, 255, 0) 55%),
            #E8E4FB;
          border-top: 1px solid rgba(13, 9, 89, 0.08);
          border-bottom: 1px solid rgba(13, 9, 89, 0.08);
        }
        .ce__inner--wide { max-width: 1080px; }
        .ce__split {
          display: grid;
          grid-template-columns: minmax(360px, 1.3fr) 1px minmax(0, 1fr);
          gap: clamp(28px, 4vw, 56px);
          align-items: center;
        }
        .ce__split-media {
          width: 100%;
        }
        .ce__split-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
          object-fit: cover;
        }
        .ce__split-rule {
          width: 1px;
          align-self: stretch;
          background: rgba(13, 9, 89, 0.14);
        }
        .ce__split-text .ce__sub { margin-top: 0; }
        @media (max-width: 820px) {
          .ce__split {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .ce__split-rule {
            width: 100%;
            height: 1px;
          }
          .ce__split-media { max-width: 480px; }
        }
        .ce__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ce__card {
          background: #ffffff;
          border: 1px solid rgba(13, 9, 89, 0.08);
          border-radius: 14px;
          padding: 22px 22px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 1px 2px rgba(13, 9, 89, 0.04), 0 8px 24px rgba(13, 9, 89, 0.04);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }
        .ce__card:hover {
          transform: translateY(-2px);
          box-shadow: 0 2px 4px rgba(13, 9, 89, 0.06), 0 14px 32px rgba(13, 9, 89, 0.08);
          border-color: rgba(13, 9, 89, 0.14);
        }
        .ce__card-icon {
          width: 48px; height: 48px;
          flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: #F5F4FB;
          border-radius: 10px;
        }
        .ce__card-text { min-width: 0; }
        .ce__card-icon-img {
          width: 32px;
          height: 32px;
          object-fit: contain;
          display: block;
        }
        .ce__card-name {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #0D0959;
          line-height: 1.2;
        }
        .ce__card-sub {
          font-size: 13px;
          color: #777;
          margin-top: 4px;
          line-height: 1.35;
        }

        @media (max-width: 980px) {
          .ce__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .ce__sec { padding: 10px 24px; }
          .ce__grid { grid-template-columns: 1fr; gap: 14px; }
        }

        /* ,, Process tabs flow (Instructional → Creative → Production → Impact) ,, */
        .ce__sec--journey {
          padding-top: clamp(48px, 5vw, 80px);
          padding-bottom: clamp(48px, 5vw, 80px);
          background: #F4F3FB;
        }

        .ce__journey-head {
          max-width: 1080px;
          margin: 0 auto clamp(24px, 2.5vw, 36px);
          padding: 0 clamp(24px, 5vw, 64px);
          text-align: center;
        }
        .ce__journey-eyebrow {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #ED1F80;
          margin-bottom: 0;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 600ms ease 60ms, transform 600ms ease 60ms;
        }
        .ce__journey-h {
          margin-bottom: 22px;
        }
        .ce__journey-lede {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(20px, 1.6vw, 26px);
          font-weight: 500;
          line-height: 1.35;
          letter-spacing: -0.01em;
          color: #0D0959;
          margin: 14px auto 0;
          max-width: 32ch;
          text-wrap: balance;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 600ms ease 200ms, transform 600ms ease 200ms;
        }
        .ce__sec--journey.is-in .ce__journey-eyebrow,
        .ce__sec--journey.is-in .ce__journey-lede { opacity: 1; transform: none; }

        .tabs-flow {
          max-width: 1080px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 700ms ease 280ms, transform 700ms ease 280ms;
        }
        .ce__sec--journey.is-in .tabs-flow { opacity: 1; transform: none; }

        .tab-strip {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          margin-bottom: clamp(20px, 2vw, 32px);
          gap: 0;
        }
        .tab-btn {
          background: none;
          border: 0;
          padding: 0;
          margin: 0;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          color: #7d7d87;
          flex: 1 1 0;
          min-width: 0;
          text-align: center;
          transition: color 200ms ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .tab-btn:hover { color: #0D0959; }
        .tab-card {
          width: 144px;
          height: 84px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0D0959;
          transition: transform 220ms ease;
        }
        .tab-btn:hover .tab-card { transform: translateY(-3px); }
        .tab-icon { width: 68px; height: 68px; display: block; }
        .tab-label {
          margin-top: 4px;
          font-size: 17px;
          font-weight: 500;
          letter-spacing: -0.005em;
          line-height: 1.25;
          color: #0D0959;
          opacity: 0.6;
          transition: opacity 200ms ease, font-weight 200ms ease;
        }
        .tab-btn:hover .tab-label { opacity: 1; }
        .tab-btn.is-active .tab-label {
          font-weight: 700;
          opacity: 1;
        }
        .tab-underline {
          height: 3px;
          width: 56%;
          margin: 12px auto 0;
          background: transparent;
          border-radius: 3px;
          transition: background 220ms ease;
        }
        .tab-btn.is-active .tab-underline { background: #ED1F80; }

        .flow-arrow {
          flex: 0 0 auto;
          padding: 0 8px;
          height: 144px;
          display: flex;
          align-items: center;
          pointer-events: none;
        }
        .flow-arrow svg {
          width: 22px;
          height: 22px;
          display: block;
          opacity: 0.85;
        }

        .content-frame {
          position: relative;
          min-height: 160px;
          width: 100%;
          max-width: 820px;
          margin: 0 auto;
          padding: 28px 40px;
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid rgba(13, 9, 89, 0.06);
          box-shadow: 0 1px 2px rgba(13, 9, 89, 0.04), 0 12px 28px rgba(13, 9, 89, 0.06);
        }
        .content-panel {
          color: #2b2b33;
          font-family: 'Poppins', sans-serif;
          font-size: clamp(17px, 1.25vw, 19px);
          line-height: 1.72;
          display: none;
        }
        .content-panel.is-active {
          display: block;
          animation: ceFadeIn 280ms ease;
        }
        .content-panel p { margin: 0; }
        @keyframes ceFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: none; }
        }

        @media (max-width: 980px) {
          .tab-card { width: 116px; height: 68px; }
          .tab-icon { width: 54px; height: 54px; }
          .tab-label { font-size: 15px; margin-top: 4px; }
          .flow-arrow { height: 68px; padding: 0 6px; }
          .flow-arrow svg { width: 18px; height: 18px; }
          .content-frame { padding: 28px 32px; }
        }
        /* Mobile: switch to 2×2 grid, hide arrows, give icons + labels real breathing room */
        @media (max-width: 720px) {
          .tab-strip {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px 14px;
            margin-bottom: 28px;
            padding: 0 4px;
          }
          .flow-arrow { display: none; }
          .tab-btn {
            flex: initial;
            width: 100%;
            min-height: 56px;
            padding: 12px 8px;
          }
          .tab-card {
            width: 100%;
            height: auto;
            aspect-ratio: 1.4 / 1;
            min-height: 96px;
            padding: 10px;
          }
          .tab-icon { width: 56px; height: 56px; }
          .tab-label {
            font-size: 14px;
            margin-top: 10px;
            line-height: 1.25;
            opacity: 0.85;
          }
          .tab-underline { width: 28px; height: 2px; margin-top: 6px; }
          .content-frame { padding: 24px 20px; }
          .content-panel { font-size: 16px; }
        }
        @media (max-width: 520px) {
          .tab-strip { gap: 14px 10px; }
          .tab-card { min-height: 88px; padding: 8px; }
          .tab-icon { width: 50px; height: 50px; }
          .tab-label { font-size: 13px; margin-top: 8px; }
        }

        /* ,, Methodology pyramid (signature) ,, */
        .ce__sec--pyramid {
          padding-top: clamp(56px, 6vw, 96px);
          padding-bottom: clamp(56px, 6vw, 96px);
        }
        .ce__pyr-head {
          max-width: 720px;
          margin: 0 auto clamp(40px, 4vw, 64px);
          text-align: left;
        }
        .ce__pyr-eyebrow {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ED1F80;
          margin-bottom: 14px;
        }
        .ce__pyr-h {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(30px, 3.4vw, 44px);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.022em;
          color: #0D0959;
          margin: 0 0 18px;
          position: relative;
          isolation: isolate;
        }
        .ce__pyr-lede {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(15px, 1.15vw, 17px);
          line-height: 1.65;
          color: #555;
          margin: 0;
        }

        .ce__pyr-stage {
          max-width: 1080px;
          margin: 0 auto;
        }

        .ce__pyr-art {
          position: relative;
          max-width: 920px;
          margin: 0 auto;
        }
        .ce__pyr-svg {
          display: block;
          width: 100%;
          height: auto;
        }

        /* SVG text, set inside <text> elements via CSS */
        .ce__pyr-label-num {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.16em;
          fill: #ffffff;
          opacity: 0.7;
        }
        .ce__pyr-label-num--md { font-size: 18px; }
        .ce__pyr-label-num--lg { font-size: 22px; }
        .ce__pyr-label-name {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          fill: #ffffff;
        }
        .ce__pyr-label-name--md { font-size: 20px; }
        .ce__pyr-label-name--lg { font-size: 26px; }

        /* Layer reveal, bottom-up */
        .ce__pyr-layer {
          opacity: 0;
          transform: translateY(20px);
          transform-origin: 50% 100%;
          transition:
            opacity 800ms cubic-bezier(.2,.7,.2,1),
            transform 800ms cubic-bezier(.2,.7,.2,1);
        }
        .ce__pyr-layer--01 { transition-delay: 100ms; }
        .ce__pyr-layer--02 { transition-delay: 320ms; }
        .ce__pyr-layer--03 { transition-delay: 540ms; }
        .ce__sec--pyramid.is-in .ce__pyr-layer {
          opacity: 1;
          transform: none;
        }

        /* ,, Side callouts ,, */
        .ce__pyr-callouts {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .ce__pyr-callout {
          position: absolute;
          left: 92%;
          width: clamp(220px, 22vw, 300px);
          display: flex;
          align-items: flex-start;
          gap: 14px;
          pointer-events: auto;
          opacity: 0;
          transform: translateX(12px);
          transition:
            opacity 700ms cubic-bezier(.2,.7,.2,1),
            transform 700ms cubic-bezier(.2,.7,.2,1);
        }
        /* Vertical positions matched to tier centers in viewBox 700×460 (apex y=120, mid y=240, base y=360) */
        .ce__pyr-callout--top { top: 22%; transition-delay: 600ms; }
        .ce__pyr-callout--mid { top: 50%; transition-delay: 380ms; }
        .ce__pyr-callout--bot { top: 78%; transition-delay: 160ms; }
        .ce__sec--pyramid.is-in .ce__pyr-callout { opacity: 1; transform: none; }

        .ce__pyr-callout-line {
          width: 28px;
          height: 1px;
          background: var(--callout-color);
          opacity: 0.6;
          flex-shrink: 0;
          margin-top: 11px;
        }
        .ce__pyr-callout-body {
          flex: 1;
          min-width: 0;
        }
        .ce__pyr-callout-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(15px, 1.15vw, 17px);
          font-weight: 700;
          color: #0D0959;
          line-height: 1.3;
          letter-spacing: -0.005em;
          margin-bottom: 6px;
        }
        .ce__pyr-callout-who {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(13px, 0.95vw, 14.5px);
          font-weight: 400;
          color: #555;
          line-height: 1.55;
        }

        @media (max-width: 980px) {
          .ce__pyr-callout {
            width: 240px;
            right: -2%;
          }
        }
        @media (max-width: 760px) {
          .ce__pyr-callouts { position: static; margin-top: 24px; }
          .ce__pyr-callout {
            position: static;
            width: 100%;
            margin-bottom: 14px;
          }
          .ce__pyr-callout-line { display: none; }
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { StrategyContent });
