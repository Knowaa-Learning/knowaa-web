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
      <Insight />
      <FAQ />
      <Testimonials />
      <Footer />
      <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
