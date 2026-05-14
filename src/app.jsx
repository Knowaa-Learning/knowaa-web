const { useState: useStateApp } = React;

function App() {
  const [tweaks, setTweaks] = useStateApp(window.TWEAKS || {});
  return (
    <>
      <Nav />
      <Hero tweaks={tweaks} />
      <Proof />
      <WhoWeAre />
      <Capabilities />
      <div className="kw-cap-seam" aria-hidden="true" />
      <Insight />
      <Approach />
      <CTAOrange />
      <FAQ />
      <window.Recognition />
      <Testimonials />
      <Footer />
      <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
